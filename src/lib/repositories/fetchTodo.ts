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
  return data as Todo;
};
