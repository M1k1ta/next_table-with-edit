import { getUserByName } from "@/api/users";
import { User } from "@/types/User";

export const verificationUser = ({ username, password }: User): string => {
  const userFromData = getUserByName(username);
  const authError = 'Username or password is incorrect';

  if (!userFromData) {
    return authError;
  }

  if (userFromData.password !== password) {
    return authError;
  }

  return '';
};

export const verificationUsername = (username: string): string => {
  if (!username) {
    return 'Username is required'
  }

  return '';
};

export const verificationPassword = (password: string): string => {
  if (!password) {
    return 'Password is required'
  }

  return '';
};
