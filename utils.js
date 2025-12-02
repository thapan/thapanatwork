/**
 * Build a simple URL path for a page name.
 * Defaults to "/" for Home or empty values.
 */
export function createPageUrl(pageName) {
  if (!pageName) return "/";

  const normalized = String(pageName).trim().toLowerCase();
  if (!normalized || normalized === "home") return "/";

  return `/${normalized}`;
}

export default { createPageUrl };
