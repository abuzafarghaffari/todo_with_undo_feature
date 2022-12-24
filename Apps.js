
import { useState } from "react";


import Form from './Form';

 import Show from "./Show";

function Apps() {
  const [task, setTask] = useState();
  let [history, setHistory] = useState([[[], null, null]]);

   console.log(task);
  console.log(history);

  return (
    <div className="container">
      <h1>To Do App</h1>
      <div>
      <Form
            task={task}
            setTask={setTask}
            history={history}
            setHistory={setHistory}
          />
       </div>

        <div>
          <Show
            task={task}
            setTask={setTask}
            history={history}
            setHistory={setHistory}
          />
        </div>
     
    </div>
  );
}

export default Apps;