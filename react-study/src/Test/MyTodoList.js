import React, { useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]); // 할 일 목록
    const [input, setInput] = useState(""); // 입력 필드 값

    const addTodo = () =>{
        setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };

    const toggleComplete = (id) => {
        console.log('toggle = ' + id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const deleteTask = (id) => {
        console.log('deldte = ' + id);
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return(
        <div>
            <p>TodoList</p>
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addTodo}>등록</button>

            <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span onClick={() => toggleComplete(task.id)}
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            cursor: "pointer",
                          }}>
                        {task.text}
                    </span>

                    <button
                    onClick={() => deleteTask(task.id)}
                    style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}
                    >
                    Delete
                    </button>
                </li>
                
            ))}
            </ul>
        </div>
    )
}

export default Todo;