import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Washazon",
  description: "Dry clothes and dry humour is a guarantee with us!",
};

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();

  const { locale } = params;

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
