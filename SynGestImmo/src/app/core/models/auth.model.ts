export interface ApiResponse<T = void>{
  data?: T;
  isSuccess: boolean;
  statusCode: number;
  message?: string;
  error?:{
    code:string;
    message: string;
    statusCode: number;
  }
}

//LOGIN
export interface LoginRequest{
  email: string;
  password: string;
}

export interface LoginResponse{
    accessToken: string;
    refreshToken: string;
    mustChangePassword: boolean;
}

//CHANGE PASSWORD
export interface ChangePasswordRequest{
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
