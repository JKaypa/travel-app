import { storage } from "~/services/services";
import { HttpParse } from "../types/types";
import { StorageKey } from "~/enums/enums";

const parseHeaders = ({ contentType, isAuth }: HttpParse) => {
  const headers = new Headers();

  if (contentType) {
    headers.append("Content-Type", contentType);
  }

  if (isAuth) {
    const token = storage.get(StorageKey.TOKEN);
    headers.append("Authorization", `Bearer ${token}`);
  }

  return headers;
};

export { parseHeaders };
