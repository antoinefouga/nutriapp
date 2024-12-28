import React from "react";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { name: string };
}): Metadata {
  const title = `Découvrez ${params.name} - NutriAPP`;
  const description = `Découvrez tout sur la valeur nutritionnelle de ${params.name} sur NutriTech. Explorez dès maintenant !`;
  return {
    title,
    description,
  };
}

export default function FoodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
