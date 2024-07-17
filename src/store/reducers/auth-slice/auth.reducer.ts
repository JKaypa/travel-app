import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { Route, StorageKey } from "~/enums/enums";
import { storage } from "~/services/services";
import { getUser, signin, signup } from "~/store/actions/actions";
import { UserResponseDto } from "~/types/types";

type State = {
  isUserAuth: boolean | undefined;
  user: UserResponseDto | null;
};

const initialState: State = {
  isUserAuth: undefined,
  user: null,
};

const { actions, name, reducer } = createSlice({
  initialState,
  name: "auth",
  reducers: {
    authUser: (state, action: PayloadAction<boolean>) => {
      state.isUserAuth = action.payload;
    },
    signout: () => {
      storage.remove(StorageKey.TOKEN);
      location.pathname = Route.SIGNIN;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(signup.fulfilled, signin.fulfilled, getUser.fulfilled),
        (state, action) => {
          state.user = action.payload;
          state.isUserAuth = true;
        }
      )
      .addMatcher(isAnyOf(signup.rejected, signin.rejected, getUser.rejected), (state) => {
        state.user = null;
        state.isUserAuth = false;
      });
  },
});

const { authUser, signout } = actions;

export { reducer as authReducer, authUser, name, signout };
