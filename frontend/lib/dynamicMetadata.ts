import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";

type DynamicMetadaParams = {
    defaultTitle: string;
    defaultDescription: string;
    serahparams: SearchParams;
    baseUrl: string;
}

export function generateSynamicMetadata({ defaultTitle, defaultDescription, serahparams, baseUrl }: DynamicMetadaParams): Metadata {
    const userName = serahparams.name || serahparams.user || serahparams.userName || null;
    const title = userName ? `${defaultTitle} - Área do ${userName}` : defaultTitle;
    const description = userName ? `Página personalizada para ${userName}. ${defaultDescription}` : defaultDescription;

    const canonicalUrl = userName ? `${baseUrl}?name=${encodeURIComponent(userName as string)}` : baseUrl;

    return {
        title,
        description,
        metadataBase: new URL(baseUrl),
        alternates: { canonical: canonicalUrl },
        openGraph: { title, description, url:canonicalUrl, type: "website", siteName: defaultTitle },
        twitter: { card: "summary_large_image", title, description },
        robots: { index: true, follow: true },
        other: { "custom:user": userName || "guest" }
    }
}