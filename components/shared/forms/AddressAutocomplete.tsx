"use client";

import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  importLibrary,
  setOptions,
} from "@googlemaps/js-api-loader";

type AddressAutocompleteProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

type AddressSuggestion = {
  id: string;
  mainText: string;
  secondaryText: string;
  prediction: google.maps.places.PlacePrediction;
};

let googleMapsConfigured = false;

export default function AddressAutocomplete({
  id,
  name,
  label,
  placeholder,
  required = false,
  className = "",
}: AddressAutocompleteProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const requestNumberRef = useRef(0);
  const sessionTokenRef =
    useRef<google.maps.places.AutocompleteSessionToken | null>(null);

  const [value, setValue] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleReady, setIsGoogleReady] = useState(false);

  useEffect(() => {
    const apiKey =
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error(
        "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is missing.",
      );
      return;
    }

    let isCancelled = false;

    const initialiseGooglePlaces = async () => {
      try {
        if (!googleMapsConfigured) {
          setOptions({
            key: apiKey,
            v: "weekly",
          });

          googleMapsConfigured = true;
        }

        const placesLibrary =
          await importLibrary("places");

        if (isCancelled) {
          return;
        }

        sessionTokenRef.current =
          new placesLibrary.AutocompleteSessionToken();

        setIsGoogleReady(true);
      } catch (error) {
        console.error(
          "Google address autocomplete failed to initialise:",
          error,
        );
      }
    };

    initialiseGooglePlaces();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  const fetchSuggestions = async (input: string) => {
    if (!isGoogleReady || input.trim().length < 2) {
      setSuggestions([]);
      setHighlightedIndex(-1);
      return;
    }

    const currentRequestNumber =
      ++requestNumberRef.current;

    setIsLoading(true);

    try {
      const placesLibrary =
        await importLibrary("places");

      if (!sessionTokenRef.current) {
        sessionTokenRef.current =
          new placesLibrary.AutocompleteSessionToken();
      }

      const { suggestions: googleSuggestions } =
        await placesLibrary.AutocompleteSuggestion
          .fetchAutocompleteSuggestions({
            input,
            includedRegionCodes: ["au"],
            sessionToken:
              sessionTokenRef.current,
          });

      if (
        currentRequestNumber !==
        requestNumberRef.current
      ) {
        return;
      }

      const nextSuggestions = googleSuggestions
        .map((suggestion) => {
          const prediction =
            suggestion.placePrediction;

          if (!prediction) {
            return null;
          }

          const text =
            prediction.text?.toString() ?? "";

          return {
            id: prediction.placeId,
            mainText:
              prediction.mainText?.toString() ||
              text,
            secondaryText:
              prediction.secondaryText?.toString() ||
              "",
            prediction,
          };
        })
        .filter(
          (
            suggestion,
          ): suggestion is AddressSuggestion =>
            suggestion !== null,
        );

      setSuggestions(nextSuggestions);
      setHighlightedIndex(-1);
    } catch (error) {
      console.error(
        "Google address suggestions failed:",
        error,
      );

      setSuggestions([]);
    } finally {
      if (
        currentRequestNumber ===
        requestNumberRef.current
      ) {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const nextValue = event.target.value;

    setValue(nextValue);
    setPlaceId("");

    window.clearTimeout(
      Number(event.target.dataset.searchTimer || 0),
    );

    const timer = window.setTimeout(() => {
      fetchSuggestions(nextValue);
    }, 250);

    event.target.dataset.searchTimer =
      String(timer);
  };

  const selectSuggestion = async (
    suggestion: AddressSuggestion,
  ) => {
    try {
      const place =
        suggestion.prediction.toPlace();

      await place.fetchFields({
        fields: [
          "formattedAddress",
          "id",
        ],
      });

      setValue(
        place.formattedAddress ||
          suggestion.mainText,
      );

      setPlaceId(place.id || suggestion.id);
      setSuggestions([]);
      setHighlightedIndex(-1);

      const placesLibrary =
        await importLibrary("places");

      sessionTokenRef.current =
        new placesLibrary.AutocompleteSessionToken();
    } catch (error) {
      console.error(
        "Unable to select Google address:",
        error,
      );
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!suggestions.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setHighlightedIndex((currentIndex) =>
        currentIndex <
        suggestions.length - 1
          ? currentIndex + 1
          : 0,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setHighlightedIndex((currentIndex) =>
        currentIndex > 0
          ? currentIndex - 1
          : suggestions.length - 1,
      );
    }

    if (
      event.key === "Enter" &&
      highlightedIndex >= 0
    ) {
      event.preventDefault();

      selectSuggestion(
        suggestions[highlightedIndex],
      );
    }

    if (event.key === "Escape") {
      setSuggestions([]);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="ross-address-field"
    >
      <label htmlFor={id}>{label}</label>

      <div className="ross-address-input-wrap">
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          required={required}
          className={className}
          role="combobox"
          aria-expanded={suggestions.length > 0}
          aria-autocomplete="list"
          aria-controls={`${id}-suggestions`}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (
              value.trim().length >= 2 &&
              suggestions.length === 0
            ) {
              fetchSuggestions(value);
            }
          }}
        />

        {isLoading && (
          <span
            className="ross-address-loading"
            aria-hidden="true"
          />
        )}
      </div>

      <input
        type="hidden"
        name={`${name}PlaceId`}
        value={placeId}
      />

      {suggestions.length > 0 && (
        <div
          id={`${id}-suggestions`}
          className="ross-address-suggestions"
          role="listbox"
        >
          {suggestions.map(
            (suggestion, index) => (
              <button
                key={`${suggestion.id}-${index}`}
                type="button"
                className={`ross-address-suggestion ${
                  highlightedIndex === index
                    ? "ross-address-suggestion--active"
                    : ""
                }`}
                role="option"
                aria-selected={
                  highlightedIndex === index
                }
                onMouseDown={(event) => {
                  event.preventDefault();
                  selectSuggestion(suggestion);
                }}
              >
                <span className="ross-address-pin">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.4" />
                  </svg>
                </span>

                <span className="ross-address-result">
                  <strong>
                    {suggestion.mainText}
                  </strong>

                  {suggestion.secondaryText && (
                    <span>
                      {suggestion.secondaryText}
                    </span>
                  )}
                </span>
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}
