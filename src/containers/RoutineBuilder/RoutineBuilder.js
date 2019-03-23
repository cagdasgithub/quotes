import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "../../components/Task/Task";

const RoutineBuilder = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      setRoutines(response.data);
    });
  });

  return (
    <React.Fragment>

      {routines.map(post => {
        return <Task id={post.id} title={post.title} />;
      })}
      <button>Add Routine</button>
    </React.Fragment>
  );
};

export default RoutineBuilder;
