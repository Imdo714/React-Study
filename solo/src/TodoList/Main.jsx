import React, { useState } from 'react'
import Form from './Form';
import List from './List';

const Main = () => {
    const [tasks, setTasks] = useState([]); // 할 일 목록

  return (
    <div className='container'> 
      <div className='todoBlock'>
        <div className='title'>
          <h1>TodoList</h1>
        </div>

        <Form tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
        
      </div>
    </div>
  )
}

export default Main;
