export interface ApiResponse<T>{
  data?: T;
  isSuccess: boolean;
  statusCode: number;
  error?:{
    code:string;
    message: string;
    statusCode: number;
  }
}

export interface LoginRequest{
  email: string;
  password: string;
}

export interface LoginResponse{
    accessToken: string;
    refreshToken: string;
    mustChangePassword: boolean;
}
