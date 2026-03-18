export interface ApiResponse<T = any>{
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
