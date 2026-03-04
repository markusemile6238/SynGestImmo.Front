
  export interface RoleModel
  {
    id: number,
    name: string,
    description: string,
    isSystemRole: boolean,
    prefixe: string
  }

export interface GetAllResponse
{
  data: RoleModel[],
  isSuccess: boolean,
  statusCode: number
}


  export class GetResponse {
  }
