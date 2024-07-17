import { toast } from "react-toastify";
import { parseHeaders } from "./libs/helper/parse-options.helper";
import { HttpError, Options } from "./libs/types/types";

const load = async <T>(
  endpoint: string,
  { method = "Get", body = null, contentType, isAuth = true, ...rest }: Options = {}
): Promise<T> | never => {
  const headers = parseHeaders({ contentType, isAuth });

  const response = await fetch(endpoint, {
    method,
    body,
    headers,
    ...rest,
  });

  if (!response.ok) {
    const error: HttpError = await response.json();

    toast(`${error.error}: ${error.message}`, { className: "notification" });

    return Promise.reject(error.statusCode);
  }

  return response.json();
};

export { load };
