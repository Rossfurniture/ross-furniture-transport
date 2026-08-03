"use client";

import { useEffect, useRef } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

type AddressAutocompleteProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

let googleMapsConfigured = false;

export default function AddressAutocomplete({
  id,
  name,
  label,
  placeholder,
  required = false,
  className,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef =
    useRef<google.maps.places.Autocomplete | null>(null);

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

    const initialiseAutocomplete = async () => {
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

        if (isCancelled || !inputRef.current) {
          return;
        }

        autocompleteRef.current =
          new placesLibrary.Autocomplete(
            inputRef.current,
            {
              componentRestrictions: {
                country: "au",
              },
              fields: [
                "formatted_address",
                "place_id",
              ],
              types: ["address"],
            },
          );

        autocompleteRef.current.addListener(
          "place_changed",
          () => {
            const place =
              autocompleteRef.current?.getPlace();

            if (
              place?.formatted_address &&
              inputRef.current
            ) {
              inputRef.current.value =
                place.formatted_address;

              inputRef.current.dataset.placeId =
                place.place_id ?? "";
            }
          },
        );
      } catch (error) {
        console.error(
          "Google address autocomplete failed:",
          error,
        );
      }
    };

    initialiseAutocomplete();

    return () => {
      isCancelled = true;

      if (
        autocompleteRef.current &&
        window.google?.maps?.event
      ) {
        window.google.maps.event.clearInstanceListeners(
          autocompleteRef.current,
        );
      }

      autocompleteRef.current = null;
    };
  }, []);

  return (
    <>
      <label htmlFor={id}>{label}</label>

      <input
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        className={className}
        onChange={() => {
          if (inputRef.current) {
            inputRef.current.dataset.placeId = "";
          }
        }}
      />
    </>
  );
}
