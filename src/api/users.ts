import { User } from "@/types/User";

const users: User[] = [{
  username: 'testuser',
  password: 'testpassword123',
}];

export const getUsers = () => {
  return users;
};

export const getUserByName = (username: string): User | null => {
  return users.find(user => user.username === username) || null;
};
