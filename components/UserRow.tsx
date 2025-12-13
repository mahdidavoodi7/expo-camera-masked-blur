import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

// ------------------------------------------------------
// TYPES
// ------------------------------------------------------
interface UserRowProps {
  fullName: string;
  username: string;
  /** Whether this is the first item (different top margin) */
  isFirst?: boolean;
}

// ------------------------------------------------------
// COMPONENT
// ------------------------------------------------------

/** Individual user row item in the list */
export const UserRow = React.memo(({ fullName, username, isFirst }: UserRowProps) => (
  <View style={[styles.userRow, isFirst ? styles.userRowFirst : styles.userRowDefault]}>
    <View style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{fullName}</Text>
      <Text style={styles.userHandle}>@{username}</Text>
    </View>
    <SymbolView name="chevron.right" style={styles.chevron} size={14} />
  </View>
));

UserRow.displayName = 'UserRow';

// ------------------------------------------------------
// STYLES
// ------------------------------------------------------
const styles = StyleSheet.create({
  userRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 20,
  },
  userRowFirst: {
    marginTop: 32,
  },
  userRowDefault: {
    marginTop: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 40,
    backgroundColor: 'black',
  },
  userInfo: {
    gap: 4,
  },
  userName: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '600',
  },
  userHandle: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '600',
  },
  chevron: {
    marginLeft: 'auto',
  },
});

export default UserRow;
