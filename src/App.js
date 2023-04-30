import AddTodoForm from "./AddTodoForm";
import Tamamlanan from "./Tamamlanan";
import TodoList from "./TodoList";

function App() {
  return (
    <section className="container">
      <AddTodoForm />
      <TodoList />
      <Tamamlanan />
    </section>
  );
}

export default App;
