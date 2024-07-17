import { AuthRequestDto, AuthResponseDto, UserResponseDto } from "~/types/types";

type AuthAPI = {
  signin(user: AuthRequestDto): Promise<AuthResponseDto>;
  signup(user: AuthRequestDto): Promise<AuthResponseDto>;
  getUser(): Promise<UserResponseDto>;
};

export { type AuthAPI };
