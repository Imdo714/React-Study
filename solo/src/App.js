import React, { useState } from 'react';
import Form from './TodoList/Main';
import Question from './MBTI/QuestionScreen';
import './App.css';

function App() {

  return (
    <div className='fir'>
      <div class="mbti-container">
        <h1>What's Your MBTI?</h1>
        <Question />

        {/* <div id="result-container" class="hidden">
            <h2>Your MBTI is:</h2>
            <p id="result">Result will appear here...</p>
            <button class="mbti-btn" onclick="restart()">Restart</button>
        </div> */}

      </div>
    </div>
  )
}

export default App;
