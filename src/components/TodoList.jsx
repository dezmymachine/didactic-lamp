import styles from "./TodoList.module.css";

function TaskItems() {
  // let todos;
  // function TodoLists() {
  //   const [todos, setTodos] = React.useState([]);
  // }
  function getTodos() {
    //Get all todos from localStorage and store
    // todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
    // todos.push(todo);
    // setTodos(todos);
  }
  // React.useEffect = (getTodos,[]);
  return (
    <div className={styles.tasklist}>
      <ul>
        <li className={styles.listItem}>Happy</li>
      </ul>
    </div>
  );
}

export default TaskItems;
