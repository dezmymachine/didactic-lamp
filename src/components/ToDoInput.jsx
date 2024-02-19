import styles from "./ToDoInput.module.css";

function AddTaskItem() {
  let todo;
  function collectInput(event) {
    todo = event.target.value;
  }
  function saveTodo() {
    // Get existing list of todos from localStorage
    // Add new todo to existing list of toolds
    // Set all new todos in localStorage
    let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
    todos.push(todo);
    localStorage.setItem("TODO_KEY", JSON.stringify(todos));
  }
  return (
    <div className={styles.inputbox}>
      <input
        type="text"
        className={styles.typeTask}
        placeholder="What you want do..."
        onChange={collectInput}
      />
      <span className={styles.createBtn} onClick={saveTodo}>
        Create
      </span>
    </div>
  );
}

export default AddTaskItem;
