import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ToDoList = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  function changeHandler(e) {
    setState(e.target.value);
  }

  function addHandler() {
    if (state) {
      const newItem = { task: state, completed: false };
      setData((prev) => [...prev, newItem]);
      setState("");
    }
  }

  function clearHandler() {
    setData([]);
  }

  function clearCompletedHandler() {
    setData((prev) => prev.filter((item) => !item.completed));
  }

  function editHandler(i) {
    const newvalue = prompt("Enter your new value", data[i].task);
    if (newvalue !== null) {
      const updated = [...data];
      updated[i].task = newvalue;
      setData(updated);
    }
  }

  function deleteHandler(i) {
    setData((prev) => prev.filter((_, index) => index !== i));
  }

  function toggleComplete(i) {
    const updated = [...data];
    updated[i].completed = !updated[i].completed;
    setData(updated);
  }

  return (
    <>
      <div className="p-5 min-vh-100">
        <h1
          className="text-primary text-center mb-5"
          style={{ textDecoration: "underline" }}
        >
          TODO LIST
        </h1>

        <div
          className="d-flex flex-column flex-md-row gap-2 mx-auto mb-5"
          style={{ width: "100%", maxWidth: "90%", padding: "0 10px" }}
        >
          <div className="w-100 w-md-75 mx-auto d-flex flex-column flex-md-row gap-2">
            <input
              type="text"
              className="form-control"
              value={state}
              onChange={changeHandler}
              placeholder="Enter a task"
            />
            <button className="btn btn-success" onClick={addHandler}>
              ADD
            </button>
            <button className="btn btn-danger" onClick={clearHandler}>
              CLEAR
            </button>
          </div>
        </div>

        <div className="w-100 w-md-75 mx-auto d-flex flex-column gap-3 mb-4">
          {data.map((item, i) => (
            <div key={i} className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(i)}
              />
              <input
                className="form-control"
                value={item.task}
                disabled
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  backgroundColor: item.completed ? "#4FEE36" : "grey",
                  color:"black"

                }}
              />
              <button
                className="btn btn-warning pe-2 pb-2"
                onClick={() => editHandler(i)}
              >
                <FaEdit />
              </button>
              <button
                className="btn btn-danger pe-2 pb-2"
                onClick={() => deleteHandler(i)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>

        {data.some((item) => item.completed) && (
          <div className="w-100 w-md-75 mx-auto text-end">
            <button className="btn btn-secondary" onClick={clearCompletedHandler}>
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ToDoList;
