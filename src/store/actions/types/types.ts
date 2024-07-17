import { extraArguments, store } from "~/store/store";

type AsyncThunkConfig = {
  state: ReturnType<typeof store.getState>;
  dispatch: typeof store.dispatch;
  extra: typeof extraArguments;
};

export { type AsyncThunkConfig };
