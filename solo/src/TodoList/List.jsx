import React from 'react';

const List = ({ tasks, setTasks }) => {
    
    const toggleComplete = (id) => {
        console.log('toggle = ' + id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
  
    const deleteTask = (id) => {
        console.log('deldte = ' + id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            {tasks.map((data) => (
                <div key={data.id} style={{ textDecoration: data.completed ? "line-through" : "none" }} className='aaa'>
                    <p>
                    <input type='checkbox' defaultChecked={false}
                        onChange={() => toggleComplete(data.id)}
                    />
                    {''}{data.text}

                    <button onClick={() => deleteTask(data.id)} className='btn-cloes'>X</button>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default List;