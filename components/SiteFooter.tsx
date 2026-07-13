import { LINKS } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer>
      Designed &amp; built by Hritik Hassani · United States · <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
    </footer>
  );
}
