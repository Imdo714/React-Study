import React, { useState } from "react";

const Boder = () => {
  const [Boders, setBoder] = useState([]);
  const [TitleInput, setTitleInput] = useState("");
  const [ContentInput, setContentInput] = useState("");

  const addBoder = () => {
    console.log("제목 : " + TitleInput);
    console.log("내용 : " + ContentInput);

    if (TitleInput.trim() && ContentInput.trim()) {
      // Boders 배열에 새로운 항목 추가
      setBoder([...Boders, { id: Date.now(), title: TitleInput, content: ContentInput }]);
      setTitleInput('');
      setContentInput('');
    }
  };

  return (
    <div className="div">
      <div className="btn-div">
        제목
        <input
          type="text"
          value={TitleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        내용
        <input
          type="text"
          value={ContentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <button onClick={addBoder}>Add Button</button>
      </div>

      <table>
        <thead className="aa">
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {Boders.map((bo) => (
            <tr key={bo.id}>
              <td>{bo.title}</td> {/* 수정: th -> td */}
              <td>{bo.content}</td> {/* 수정: th -> td */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boder;
