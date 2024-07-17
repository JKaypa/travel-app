import { createAsyncThunk } from "@reduxjs/toolkit";
import { StorageKey } from "~/enums/enums";
import { AuthRequestDto, UserResponseDto } from "~/types/types";
import { AsyncThunkConfig } from "../types/types";
import { name as auth } from "~/store/reducers/auth-slice/auth.reducer";

const signup = createAsyncThunk<UserResponseDto, AuthRequestDto, AsyncThunkConfig>(
  `${auth}/signup`,
  async (payload, { extra: { authApi, storage }, rejectWithValue }) => {
    try {
      const { token, user } = await authApi.signup(payload);
      storage.set(StorageKey.TOKEN, token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const signin = createAsyncThunk<UserResponseDto, AuthRequestDto, AsyncThunkConfig>(
  `${auth}/signin`,
  async (payload, { extra: { authApi, storage } }) => {
    const { token, user } = await authApi.signin(payload);
    storage.set(StorageKey.TOKEN, token);
    return user;
  }
);

const getUser = createAsyncThunk<UserResponseDto, undefined, AsyncThunkConfig>(
  `${auth}/authenticated`,
  (_, { extra: { authApi } }) => {
    return authApi.getUser();
  }
);

export { getUser, signin, signup };
