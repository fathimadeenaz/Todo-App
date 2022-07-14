import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({ id: null, value: "" });
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}
		>
			<div id="group-1">
				<div className="icons">
					<MdRadioButtonUnchecked
						onClick={() => completeTodo(todo.id)}
						className={
							!todo.isComplete
								? "empty-icon"
								: "empty-icon hidden"
						}
					/>
					<IoMdCheckmarkCircleOutline
						onClick={() => completeTodo(todo.id)}
						className={
							!todo.isComplete
								? "complete-icon hidden"
								: "complete-icon"
						}
					/>
				</div>
				<div
					key={todo.id}
					// onClick={() => completeTodo(todo.id)}
				>
					{todo.text}
				</div>
			</div>
			<div className="icons" id="group-2">
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					className="delete-icon"
				/>
				<TiEdit
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					className="edit-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;
