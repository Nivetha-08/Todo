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
      setData((p) => p.toSpliced(data.length, 0, state));
      setState("");
    }
  }

  function clearHandler() {
    // console.log("delete list");
    setData([]);
  }

  function editHandler(i) {
    const newvalue = prompt("enter your new value");
    setData((data) => data.toSpliced(i, 1, newvalue));
    // console.log(i);
  }

  function deleteHandler(i) {
    setData((data) => data.toSpliced(i, 1));
  }

  return (
    <>
      <div className="p-5 min-vh-100" >
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

        <div className="w-100 w-md-75 mx-auto d-flex flex-column gap-3">
          {data.map((v, i) => (
            <div key={i} className="d-flex align-items-center gap-2">
              <input className="form-control" value={v} disabled />
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
      </div>
    </>
  );
};

export default ToDoList;
