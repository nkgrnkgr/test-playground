type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const fetchUser = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const data = await response.json();
  return data as User;
};
