"use client";

import { useInterest } from "@/context/interest-context";
import type { Propiedad } from "@/lib/properties";

type InterestButtonProps = {
  property: Propiedad;
  className?: string;
};

export default function InterestButton({ property, className }: InterestButtonProps) {
  const { hasInterest, toggleInterest } = useInterest();
  const selected = hasInterest(property.id);

  const handleClick = () => {
    const willAdd = !selected;
    toggleInterest(property);

    if (willAdd && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("interest:added"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-pressed={selected}
    >
      {selected ? "Agregado" : "Me interesa"}
    </button>
  );
}
