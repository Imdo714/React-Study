import React, { useState } from 'react';

const Form = ({ tasks, setTasks }) => {
    const [input, setInput] = useState(""); // 입력 필드 값

    const addTodo = () =>{
        setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };
    
    return (
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
    );
};

export default Form;