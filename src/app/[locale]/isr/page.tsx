import { getTranslations } from "next-intl/server";

export const revalidate = 5;

// ISR doesn't work here because we don't have generateStaticParams
export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Random number: {Math.random() * 100}</p>
    </div>
  );
}
