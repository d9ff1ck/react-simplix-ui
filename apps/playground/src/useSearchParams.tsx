export function useSearchParams() {
    const query = new URLSearchParams(window.location.search);
    const obj: Record<string, string> = {};
    query.forEach((value, key) => (obj[key] = value));
    return obj;
}