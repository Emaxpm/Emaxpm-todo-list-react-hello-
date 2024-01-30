import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (

    <div className="Container">

      <h1 className="title">Todos</h1>

      <ul className="list-group list-group-flush">

        {/* <li className="list-group-item"> */}

          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue !== "") {
                setTodos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"/>

        {/* </li> */}

        {todos.map((item, index) => (

          <li className="list-group-item li-c" key={index}>

            {item}

          <button    onClick={() => {
                const updatedTodos = todos.filter(
                  (_, currentIndex) => index != currentIndex
                );

                setTodos(updatedTodos);

              }}>  <i
              className="fa-solid fa-xmark"
          ></i></button>

          </li>
        ))}

      </ul>

      <div className="items">{todos.length} item left</div>

    </div>
  );
};

export default Home;
