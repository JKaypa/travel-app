import { useDispatch } from "react-redux";
import { store } from "~/store/store";

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export { useAppDispatch };
