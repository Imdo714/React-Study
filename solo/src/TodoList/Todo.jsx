import React from 'react'

function Todo() {

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

  return (
    <div className='container'> 
    <div className='todoBlock'>
      <div className='title'>
        <h1>TodoList</h1>
      </div>
      
      <div style={{display:'flex', height:'35px'}}>
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={ {flex : '10', padding : '5'}}
          placeholder='입력하세요'
        />
        <button onClick={addTodo} style={ {flex : '1'}}>등록</button>
      </div>
      
      
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
  </div>
  )
}

export default Todo