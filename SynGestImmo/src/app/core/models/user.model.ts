
  export interface UserModel
  {
    id: string,
    username: string,
    userRef: string,
    email: string,
    isEmailConfirmed: boolean,
    entityId: string,
    roleId: number,
    isActive:boolean,
    roleName: string,
    createdAt: string,
    updatedAt: string
  }

export interface GetAllResponse
{
  data: UserModel[],
  isSuccess: boolean,
  statusCode: number
}
export interface GetUserResponse
{
  data: UserModel,
  isSuccess: boolean,
  statusCode: number
}
export interface UserResponse
{
  isSuccess: boolean,
  statusCode: number
}

export interface AdduserBody{
  username : string,
  email: string,
  password : string,
  roleId: number
}

