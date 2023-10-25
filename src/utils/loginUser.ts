import { User } from '@/types/User';

export const login = (user: User) => {
  document.cookie = `user=${JSON.stringify(user)}`;
};
