import { AuthRequestDto, AuthResponseDto, UserResponseDto } from "~/types/types";
import { Content, Endpoint, Method } from "../../enums/enums";
import { load } from "~/services/services";
import { AuthAPI } from "./types/types";

class Auth implements AuthAPI {
  private authUrl: string;

  constructor(url: string) {
    this.authUrl = url;
  }

  public signin(user: AuthRequestDto): Promise<AuthResponseDto> {
    return load(`${this.authUrl}${Endpoint.SIGNIN}`, {
      body: JSON.stringify(user),
      contentType: Content.JSON,
      isAuth: false,
      method: Method.POST,
    });
  }

  public signup(user: AuthRequestDto): Promise<AuthResponseDto> {
    return load(`${this.authUrl}${Endpoint.SIGNUP}`, {
      body: JSON.stringify(user),
      contentType: Content.JSON,
      isAuth: false,
      method: Method.POST,
    });
  }

  public getUser(): Promise<UserResponseDto> {
    return load(`${this.authUrl}${Endpoint.AUTHENTICATED}`);
  }
}

export { Auth };
