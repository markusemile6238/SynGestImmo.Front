export interface menuData{
  label: string;
  icon: string;
  url: string;
}
export const adminMenuData: menuData[] = [
  {label: "Dashboard", icon: "fa-solid fa-sliders", url: "/admin"},
  {label: "User Management", icon: "fa-solid fa-users-gear", url: "/admin/users-management"},
  {label: "Property Management", icon: "fa-solid fa-users-gear", url: "/admin/properties-management"},
  {label: "Lot Management", icon: "fa-solid fa-users-gear", url: "/admin/lots-management"},
  {label: "Owner Management", icon: "fa-solid fa-users-gear", url: "/admin/owners-management"},
  {label: "Tenant Management", icon: "fa-solid fa-users-gear", url: "/admin/tenants-management"},
  {label: "Document Management", icon: "fa-solid fa-users-gear", url: "/admin/docs-management"},
  {label: "Report Management", icon: "fa-solid fa-users-gear", url: "/admin/reports-management"}
]
