"use client";

import { useEffect, useRef } from "react";
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

let googleMapsConfigured = false;

export default function AddressAutocomplete({
  id,
  name,
  label,
  placeholder,
  required = false,
  className = "",
}: AddressAutocompleteProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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
    let autocompleteElement:
      | google.maps.places.PlaceAutocompleteElement
      | null = null;

    const initialiseAutocomplete = async () => {
      try {
        if (!googleMapsConfigured) {
          setOptions({
            key: apiKey,
            v: "weekly",
          });

          googleMapsConfigured = true;
        }

        const { PlaceAutocompleteElement } =
          await importLibrary("places");

        if (
          isCancelled ||
          !containerRef.current
        ) {
          return;
        }

        containerRef.current.innerHTML = "";

        autocompleteElement =
          new PlaceAutocompleteElement({
            includedRegionCodes: ["au"],
          });

        autocompleteElement.id = id;
        autocompleteElement.name = name;
        autocompleteElement.placeholder =
          placeholder;
        autocompleteElement.description = label;

        autocompleteElement.className = [
          "ross-address-autocomplete",
          className,
        ]
          .filter(Boolean)
          .join(" ");

        autocompleteElement.setAttribute(
          "aria-label",
          label,
        );

        if (required) {
          autocompleteElement.setAttribute(
            "required",
            "",
          );
        }

        autocompleteElement.addEventListener(
          "gmp-select",
          async (event: Event) => {
            const selectEvent =
              event as google.maps.places.PlacePredictionSelectEvent;

            const place =
              selectEvent.placePrediction.toPlace();

            await place.fetchFields({
              fields: [
                "formattedAddress",
                "id",
              ],
            });

            autocompleteElement?.setAttribute(
              "data-formatted-address",
              place.formattedAddress ?? "",
            );

            autocompleteElement?.setAttribute(
              "data-place-id",
              place.id ?? "",
            );
          },
        );

        autocompleteElement.addEventListener(
          "gmp-error",
          () => {
            console.error(
              `Google autocomplete error: ${label}`,
            );
          },
        );

        containerRef.current.appendChild(
          autocompleteElement,
        );
      } catch (error) {
        console.error(
          "Google address autocomplete failed to initialise:",
          error,
        );
      }
    };

    initialiseAutocomplete();

    return () => {
      isCancelled = true;

      if (autocompleteElement) {
        autocompleteElement.remove();
      }
    };
  }, [
    className,
    id,
    label,
    name,
    placeholder,
    required,
  ]);

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>

      <div
        ref={containerRef}
        className="ross-address-autocomplete-wrapper"
      />
    </>
  );
}
