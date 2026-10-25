const ToDoPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return (
    <div>
      <h2>To Dos:{todos.length} </h2>
      {todos.map((todo) => (
        <div key={todos.id}>
          <h1>{todos.id}</h1>
          <h1>{todos.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ToDoPage;
