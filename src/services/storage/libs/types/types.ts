type APIStorage = {
  get(key: string): string | null;
  set(key: string, value: string): void;
  has(key: string): boolean;
  remove(key: string): void;
};

export { type APIStorage };
