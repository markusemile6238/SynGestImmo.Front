
  export interface UserModel
  {
    id: string,
    username: string,
    userRef: string,
    email: string,
    isEmailConfirmed: boolean,
    entityId: string,
    roleId: number,
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

