import type { MetadataRoute } from "next";

const BASE_URL = "https://www.apprser.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                       lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/services`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/for-homeowners`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/service-area`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
