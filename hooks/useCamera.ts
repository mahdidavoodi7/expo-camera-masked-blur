import { useEffect, useCallback } from 'react';
import { useCameraPermissions, CameraType } from 'expo-camera';

// ------------------------------------------------------
// TYPES
// ------------------------------------------------------
export type CameraPermissionStatus = 'loading' | 'granted' | 'denied' | 'blocked';

export interface UseCameraResult {
  /** Current permission status */
  status: CameraPermissionStatus;
  /** Whether the camera is ready to use */
  isReady: boolean;
  /** Whether permission is still being checked */
  isLoading: boolean;
  /** Whether permission was denied but can be requested again */
  canRetry: boolean;
  /** Request camera permission from the user */
  requestPermission: () => Promise<void>;
}

// ------------------------------------------------------
// HOOK
// ------------------------------------------------------

/**
 * Custom hook for managing Expo Camera permissions.
 * Automatically requests permission on mount and provides
 * a clean API for handling all permission states.
 * 
 * @param autoRequest - Whether to automatically request permission on mount (default: true)
 * @returns Camera permission state and controls
 * 
 * @example
 * ```tsx
 * const { status, isReady, requestPermission } = useCamera();
 * 
 * if (status === 'loading') return <LoadingSpinner />;
 * if (status === 'blocked') return <SettingsPrompt />;
 * if (status === 'denied') return <PermissionButton onPress={requestPermission} />;
 * if (isReady) return <CameraView />;
 * ```
 */
export const useCamera = (autoRequest: boolean = true): UseCameraResult => {
  const [permission, requestCameraPermission] = useCameraPermissions();

  // Determine the current permission status
  const getStatus = (): CameraPermissionStatus => {
    if (!permission) return 'loading';
    if (permission.granted) return 'granted';
    if (!permission.canAskAgain) return 'blocked';
    return 'denied';
  };

  const status = getStatus();

  // Wrapped request function that handles errors
  const requestPermission = useCallback(async () => {
    try {
      await requestCameraPermission();
    } catch (error) {
      console.error('Failed to request camera permission:', error);
    }
  }, [requestCameraPermission]);

  // Auto-request permission on mount if enabled
  useEffect(() => {
    if (autoRequest && status === 'denied') {
      requestPermission();
    }
  }, [autoRequest, status, requestPermission]);

  return {
    status,
    isReady: status === 'granted',
    isLoading: status === 'loading',
    canRetry: status === 'denied',
    requestPermission,
  };
};

export default useCamera;
