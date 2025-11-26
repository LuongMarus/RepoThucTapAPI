import { PERMISSIONS } from '@/configs';
import { PermissionAction as PermissionActionEnum } from '@/common/enums';
import { PermissionResource as PermissionResourceEnum } from '@/common/enums';

export type PermissionActionTypes = PermissionActionEnum;
export type PermissionResourceTypes = PermissionResourceEnum;

// export type PermissionTypes =
//   `${PermissionActionTypes}.${PermissionResourceTypes}`;
export type PermissionObjectTypes = {
  action: PermissionActionTypes;
  resource: PermissionResourceTypes;
};

/**
 * @deprecated remove in future
 */
export type Permission = keyof typeof PERMISSIONS;
