type Options = Omit<RequestInit, "headers"> & {
  isAuth?: boolean;
  contentType?: string;
};

type HttpParse = Omit<Options, keyof RequestInit>;

type HttpError = {
  error: string;
  message: string;
  statusCode: number;
};

export { type HttpError, type Options, type HttpParse };
