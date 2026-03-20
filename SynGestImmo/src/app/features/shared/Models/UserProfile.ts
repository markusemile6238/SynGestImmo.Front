
export interface UserProfile{
    id: string;
    entityId?:string,
    entityType : EntityTypeEnum;
    displayName : string;
    email : string;
    phone : string;
    isActive? : boolean;
    lastName : string;
    firstName : string;
    birthDate: Date;
    nationalId : string;
    createdAt? : Date;
    updatedAt? : Date;
    [key:string]: any;
}

export const UserProfileLabel={
  entityType:"Entity Type",
  displayName:"Display Name",
  email:"Email Address",
  phone:"Phone",
  isActive:"Is Active",
  lastName:"Lastname",
  firstName:"Firstname",
  birthDate:"Birth Date",
  nationalId:"National Id",
  createdAt:"Created At",
  updatedAt:"Last Update"
}

export enum EntityTypeEnum {
  Entities = 0,
  Owners = 1,
  Persons = 2,
  Tenants = 3,
  Companies = 4
}


