import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { UserRow } from './UserRow';
import { User } from '../utils/user';

// ------------------------------------------------------
// TYPES
// ------------------------------------------------------
interface MaskContentProps {
  users: User[];
}

// ------------------------------------------------------
// COMPONENT
// ------------------------------------------------------

/** The mask element containing all the UI elements for the camera overlay */
export const MaskContent = React.memo(({ users }: MaskContentProps) => (
  <>
    {/* Header title */}
    <Text style={styles.headerTitle}>Home</Text>

    {/* Primary user (Mehdi) */}
    <UserRow fullName="Mehdi" username="mehdi_made" isFirst />

    {/* Generated user list */}
    {users.map((user, index) => (
      <UserRow key={index} fullName={user.fullName} username={user.username} />
    ))}
  </>
));

MaskContent.displayName = 'MaskContent';

// ------------------------------------------------------
// STYLES
// ------------------------------------------------------
const styles = StyleSheet.create({
  headerTitle: {
    color: 'black',
    fontSize: 40,
    textAlign: 'left',
    marginTop: 80,
    paddingLeft: 24,
    fontWeight: 'bold',
  },
});

export default MaskContent;
