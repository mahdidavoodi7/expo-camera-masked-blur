import { FIRST_NAMES, LAST_NAMES } from "../constants";

// ------------------------------------------------------
export interface User {
  fullName: string;
  username: string;
}

// ------------------------------------------------------
// HELPER FUNCTIONS
// ------------------------------------------------------

/** Picks a random element from an array */
export const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/** Generates a random full name */
export const generateFullName = (): string => `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;

/** Converts a full name to a username format with random suffix */
export const generateUsername = (fullName: string): string =>
  fullName.toLowerCase().replace(/\s+/g, '_') + (Math.floor(Math.random() * 90) + 10);

/** Generates a user object with random name and username */
export const generateUser = (): User => {
  const fullName = generateFullName();
  return {
    fullName,
    username: generateUsername(fullName),
  };
};

/** Generates an array of random users */
export const generateUsers = (count: number): User[] =>
  Array.from({ length: count }, generateUser);
