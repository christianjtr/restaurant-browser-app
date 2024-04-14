export interface UseNavigatorInterface {
  checkPermissionStatus: (permissionName: PermissionDescriptor['name']) => Promise<PermissionStatus['state']>;
}

export const useNavigatorPermission = (): UseNavigatorInterface => {
  const checkPermissionStatus = async (
    permissionName: PermissionDescriptor['name'],
  ): Promise<PermissionStatus['state']> => {
    const { state } = await navigator.permissions.query({ name: permissionName });
    return state;
  };

  return {
    checkPermissionStatus,
  };
};
