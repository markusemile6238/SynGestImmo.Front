
export interface UserProfil{
    Id: string;
    EntityType : EntityTypeEnum;
    DisplayName : string;
    Email : string;
    Phone : string;
    IsActive : boolean;
    LastName : string;
    FirstName : string;
    BirthDate: Date;
    NationalId : string;
    CreatedAt : Date;
    UpdateAt? : Date;
}

export enum EntityTypeEnum {
  Entites = 0,
  Owners = 1,
  Persons = 2,
  Tenants = 3,
  Companies = 4
}


