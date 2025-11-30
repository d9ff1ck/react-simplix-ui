export const FOCUSABLE_SELECTORS = [
"a[href]",
"area[href]",
"button:not([disabled])",
"input:not([disabled]):not([type=\"hidden\"])",
"select:not([disabled])",
"textarea:not([disabled])",
"iframe",
"object",
"embed",
"[contenteditable]",
"audio[controls]",
"video[controls]",
"summary",
"[tabindex]:not([tabindex=\"-1\"])"
].join(",");
