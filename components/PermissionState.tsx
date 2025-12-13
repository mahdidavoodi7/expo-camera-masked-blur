import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { CameraPermissionStatus } from '../hooks/useCamera';

// ------------------------------------------------------
// TYPES
// ------------------------------------------------------
interface PermissionStateProps {
  status: CameraPermissionStatus;
  onRequestPermission: () => void;
}

// ------------------------------------------------------
// COMPONENT
// ------------------------------------------------------

/** Renders the appropriate UI based on camera permission status */
export const PermissionState = ({ status, onRequestPermission }: PermissionStateProps) => {
  // Loading state while checking permissions
  if (status === 'loading') {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.statusText}>Checking camera permission...</Text>
      </View>
    );
  }

  // Permission denied and cannot ask again (user blocked it in settings)
  if (status === 'blocked') {
    return (
      <View style={styles.container}>
        <SymbolView name="camera.fill" size={48} tintColor="#888888" />
        <Text style={styles.statusTitle}>Camera Access Blocked</Text>
        <Text style={styles.statusText}>
          Please enable camera access in your device settings to use this feature.
        </Text>
      </View>
    );
  }

  // Permission denied but can still ask
  if (status === 'denied') {
    return (
      <View style={styles.container}>
        <SymbolView name="camera.fill" size={48} tintColor="#888888" />
        <Text style={styles.statusTitle}>Camera Access Required</Text>
        <Text style={styles.statusText}>
          We need camera access to show the live background effect.
        </Text>
        <TouchableOpacity style={styles.permissionButton} onPress={onRequestPermission}>
          <Text style={styles.permissionButtonText}>Grant Access</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Should not reach here if used correctly
  return null;
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
    paddingHorizontal: 32,
    gap: 16,
  },
  statusTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
  },
  statusText: {
    color: '#888888',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  permissionButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  permissionButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PermissionState;
