import Script from "next/script";

/* ── Analytics config ──────────────────────────────────────────────
 * Fill in either or both. Leave "" to keep that one off.
 * Renders nothing until an ID is set, so it's always safe to ship.
 *
 * UMAMI  — privacy-friendly, cookie-free, free (cloud.umami.is).
 * GA4    — Google Analytics; familiar visitor numbers. Uses cookies
 *          (EU visitors technically need a consent banner).
 *
 * Per-project clicks need NO extra code in either tool: each case study
 * is its own URL (/projects/nora/, /projects/applystack/, /projects/kritexco/),
 * so they show up automatically as page views.
 * ────────────────────────────────────────────────────────────────── */
const UMAMI_WEBSITE_ID = "ca08600a-3343-41c9-92ce-0b631e45e613";   // from cloud.umami.is  (a UUID)
const GA_MEASUREMENT_ID = "G-RJ8LGTZP2Z";  // from Google Analytics (looks like "G-XXXXXXXXXX")
const UMAMI_SRC = "https://cloud.umami.is/script.js";

export default function Analytics() {
  return (
    <>
      {UMAMI_WEBSITE_ID ? (
        <Script
          src={UMAMI_SRC}
          data-website-id={UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      ) : null}

      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}

/* ── Alternatives to Umami (swap in if you prefer) ──────────────────
 * Plausible (no free tier — 30-day trial, then $9/mo; or self-host free):
 *   <Script defer data-domain="hritikhassani.com"
 *     src="https://plausible.io/js/script.outbound-links.js"
 *     strategy="afterInteractive" />
 * Cloudflare Web Analytics (free, zero-config):
 *   <Script defer src="https://static.cloudflareinsights.com/beacon.min.js"
 *     data-cf-beacon='{"token":"YOUR_TOKEN"}' strategy="afterInteractive" />
 * ────────────────────────────────────────────────────────────────── */
