import { ValueOf } from "~/types/types";
import { APIStorage } from "./libs/types/types";
import { StorageKey } from "~/enums/enums";

type Constructor = globalThis.Storage;

class Storage implements APIStorage {
  private storage: globalThis.Storage;

  constructor(storage: Constructor) {
    this.storage = storage;
  }

  public get(key: ValueOf<typeof StorageKey>) {
    return this.storage.getItem(key);
  }

  public set(key: ValueOf<typeof StorageKey>, value: string) {
    this.storage.setItem(key, value);
  }

  public has(key: ValueOf<typeof StorageKey>) {
    return Boolean(this.storage.getItem(key));
  }

  public remove(key: ValueOf<typeof StorageKey>) {
    this.storage.removeItem(key);
  }
}

export { Storage };
