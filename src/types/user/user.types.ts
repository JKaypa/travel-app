type AuthRequestDto = {
  fullName?: string;
  email: string;
  password: string;
};

type UserResponseDto = {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
};

type AuthResponseDto = {
  token: string;
  user: UserResponseDto;
};

export { type AuthResponseDto, type AuthRequestDto, type UserResponseDto };
