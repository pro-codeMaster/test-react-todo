export const LocalStore = {
  set: (key: string, value: string) => localStorage.setItem(key, value),
  get: (key: string): string | null => localStorage.getItem(key),
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
  setData: (key: string, value: Record<string, any>) =>
    localStorage.setItem(key, JSON.stringify(value)),
  getData: <T>(key: string) =>
    JSON.parse(localStorage.getItem(key) || "null") as T,
};
