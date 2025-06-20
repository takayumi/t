import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const revalidate = 5;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "HomePage" });
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Random number: {Math.random() * 100}</p>
    </div>
  );
}
