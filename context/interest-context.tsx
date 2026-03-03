"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { buildWaLink, propiedades, type Propiedad } from "@/lib/properties";

type InterestContextValue = {
  interestedIds: number[];
  interestedProperties: Propiedad[];
  itemCount: number;
  hasInterest: (id: number) => boolean;
  addInterest: (property: Propiedad) => void;
  removeInterest: (id: number) => void;
  toggleInterest: (property: Propiedad) => void;
  clearInterests: () => void;
  cartWhatsappLink: string;
};

const InterestContext = createContext<InterestContextValue | undefined>(undefined);

export function InterestProvider({ children }: { children: React.ReactNode }) {
  const [interestedIds, setInterestedIds] = useState<number[]>([]);

  const addInterest = (property: Propiedad) => {
    setInterestedIds((prev) => (prev.includes(property.id) ? prev : [...prev, property.id]));
  };

  const removeInterest = (id: number) => {
    setInterestedIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const toggleInterest = (property: Propiedad) => {
    setInterestedIds((prev) =>
      prev.includes(property.id) ? prev.filter((itemId) => itemId !== property.id) : [...prev, property.id],
    );
  };

  const hasInterest = (id: number) => interestedIds.includes(id);

  const interestedProperties = useMemo(() => {
    const map = new Map(propiedades.map((p) => [p.id, p]));
    return interestedIds.map((id) => map.get(id)).filter((p): p is Propiedad => Boolean(p));
  }, [interestedIds]);

  const cartWhatsappLink = useMemo(() => {
    const message =
      interestedProperties.length === 0
        ? "Hola, quiero informacion sobre propiedades."
        : `Hola, me interesan estas propiedades:\n${interestedProperties
            .map((p, index) => `${index + 1}. ${p.titulo} - ${p.precio}`)
            .join("\n")}`;

    return buildWaLink(message);
  }, [interestedProperties]);

  const value: InterestContextValue = {
    interestedIds,
    interestedProperties,
    itemCount: interestedIds.length,
    hasInterest,
    addInterest,
    removeInterest,
    toggleInterest,
    clearInterests: () => setInterestedIds([]),
    cartWhatsappLink,
  };

  return <InterestContext.Provider value={value}>{children}</InterestContext.Provider>;
}

export function useInterest() {
  const context = useContext(InterestContext);

  if (!context) {
    throw new Error("useInterest must be used within InterestProvider");
  }

  return context;
}
