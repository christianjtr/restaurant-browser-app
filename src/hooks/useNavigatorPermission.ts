export interface UseNavigatorInterface {
  checkPermissionStatus: (
    permissionName: PermissionDescriptor['name'],
    callback: (permissionState: PermissionState) => void,
  ) => Promise<void>;
}

export const useNavigatorPermission = (): UseNavigatorInterface => {
  const checkPermissionStatus = async (
    permissionName: PermissionDescriptor['name'],
    callback: (permissionState: PermissionState) => void,
  ): Promise<void> => {
    const permissionStatus = await navigator.permissions.query({ name: permissionName });

    if (permissionStatus.state === 'prompt') {
      callback(permissionStatus.state);
    }

    permissionStatus.onchange = () => {
      callback(permissionStatus.state);
    };
  };

  return {
    checkPermissionStatus,
  };
};
