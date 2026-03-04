export interface RoleModel {
  id: number;
  name: string;
  description?: string;
  isSystemRole?: boolean;
  prefixe: string;
}
