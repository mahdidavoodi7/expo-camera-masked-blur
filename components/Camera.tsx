import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { CameraView } from 'expo-camera';
import { BlurView } from 'expo-blur';

// Hooks
import { useCamera } from '../hooks/useCamera';

// Components
import { MaskContent } from './MaskContent';
import { PermissionState } from './PermissionState';

// Utils & Constants
import { generateUsers } from '../utils/user';
import { 
  USER_LIST_COUNT, 
  CAMERA_ZOOM, 
  BLUR_INTENSITY_PRIMARY, 
  BLUR_INTENSITY_SECONDARY 
} from '../constants/camera';

// ------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------
export const CameraContainer = () => {
  const { status, isReady, requestPermission } = useCamera();

  // Memoize the random user list to prevent regeneration on every render
  const users = useMemo(() => generateUsers(USER_LIST_COUNT), []);

  // Show permission state UI if camera is not ready
  if (!isReady) {
    return (
      <PermissionState 
        status={status} 
        onRequestPermission={requestPermission} 
      />
    );
  }

  // Permission granted - render the camera view
  return (
    <View style={styles.container}>
      <MaskedView
        style={styles.maskedView}
        maskElement={<MaskContent users={users} />}
      >
        {/* Layered blur effects for frosted glass appearance */}
        <BlurView style={styles.blurOverlay} intensity={BLUR_INTENSITY_PRIMARY} />
        <BlurView style={styles.blurOverlay} intensity={BLUR_INTENSITY_SECONDARY} />
        
        {/* Camera feed as background */}
        <CameraView zoom={CAMERA_ZOOM} style={styles.camera} />
      </MaskedView>
    </View>
  );
};

// ------------------------------------------------------
// STYLES
// ------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  maskedView: {
    width: '100%',
    flex: 1,
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 3,
  },
});

export default CameraContainer;