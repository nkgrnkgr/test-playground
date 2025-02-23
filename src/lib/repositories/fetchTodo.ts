type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data as Todo;
};
