export interface LoginResult{
  email: string;
  password: string;
}

export interface LoginResponse{
  accessToken: string;
  refreshToken?: string;
}
