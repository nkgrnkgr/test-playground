export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const fetchUsers = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data as User[];
};
