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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data as User;
};
