import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "HomePage" });

  const res = await fetch("https://ramen-api.dev/shops/yoshimuraya", {
    cache: "no-store",
  });
  const json = await res.json();

  return (
    <div>
      <h1>{json.shop.name}</h1>
      <p>
        {t("title")} {Math.random() * 100}
      </p>
    </div>
  );
}
