import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
	console.log("this is a test");
	return (
		<div className="todo-app">
			<TodoList />
		</div>
	);
}

export default App;
