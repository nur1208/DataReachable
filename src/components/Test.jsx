import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";

const Test = () => {
  const [tasks, setTasks] = useState([
    {
      // Generate Unique ID
      id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
      task: "solidity",
    },
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      {tasks.map((p, index) => {
        return (
          <div key={p.id}>
            <input
              onChange={(e) => {
                const task = e.target.value;
                setTasks((currentPeople) =>
                  currentPeople.map((value, itemIndex) => {
                    if (index === itemIndex) {
                      // debugger;
                      tasks[itemIndex].task = task;
                      return value;
                    }
                    return value;
                  })
                );
              }}
              value={p.task}
              placeholder="task"
            />
            {/* <button
              onClick={() => {
                setTasks((currentPeople) =>
                  currentPeople.filter((x) => x.id !== p.id)
                );
              }}
            >
              x
            </button> */}
          </div>
        );
      })}

      <button
        style={{
          borderRadius: "50%",
          padding: "5px",
          marginTop: "10px",
        }}
        onClick={() => {
          setTasks((currentPeople) => [
            ...currentPeople,

            {
              // Generate Unique ID
              id: `${Date.now()}${Math.floor(
                Math.random() * 100
              )}`,
              task: "",
            },
          ]);
        }}
      >
        <GrAdd />
      </button>
      {/* <div>{JSON.stringify(tasks, null, 2)}</div> */}
    </div>
  );
};

export default Test;
