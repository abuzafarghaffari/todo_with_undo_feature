import {useState} from 'react';
import Button from "./Button";

function Form(props){
const [enteredInput, setEnteredInput] = useState('')

const addHandler =()=>{
   let preSate =[];
  if(props.task != undefined){
     preSate = [...props.task,enteredInput]
    props.setTask((preSate=> [...preSate,enteredInput]));
  } else {
     preSate =[enteredInput];
    props.setTask([enteredInput]);
  }
   
  //  console.log(preSate);
   //Insert new history after insert
      //get new index of the todo inserted

      let newIndex = preSate.length - 1; 
      let newHistData = [];
      let newHist = [];

      if (props.history[props.history.length - 1][0].length == 0) {
        newHistData = [newIndex];
      } else {
        newHistData = [...props.history[props.history.length - 1][0], newIndex];
      }

      // console.log(`inner arry: ${newHistData}`);
      // calculate undo and redo index of the new history
      let undo = props.history.length - 1;
      let redo = null;
       //prepare total history--  prev history data+current history data
       newHist = [newHistData, undo, redo];
       let Hist = [...props.history, newHist];
       //set history
       props.setHistory(Hist);
       
}

const handleUndo = (e) => {
    

  let prevUndo = props.history[props.history.length - 1][1];
 

  if (prevUndo != undefined) {
    let newHistData = props.history[prevUndo][0];
    let undo = props.history[prevUndo][1];

    //console.log(newHistData);

    let redo = props.history.length - 1;
    let newHist = [newHistData, undo, redo];
    let Hist = [...props.history, newHist];
    //set history
    props.setHistory(Hist);
  }

}

//redo method

const handleRedo = (e) => {
  let prevRedo = props.history[props.history.length - 1][2];
  if (prevRedo != undefined) {
    let newHistData = props.history[prevRedo][0];
    let undo = props.history.length - 1;
    let redo = props.history[prevRedo][2];
    let newHist = [newHistData, undo, redo];
    let Hist = [...props.history, newHist];
    //set history
    props.setHistory(Hist);
  }
};


    return(
<div>
<input type='text' className="border-2 border-black" 
value={enteredInput}
onChange={(event)=>setEnteredInput(event.target.value)}/>

<div className="mt-3">
    <h1>Enter To Do Task</h1>

   <Button className="mr-4" onClick ={addHandler}>Add</Button>
   <Button className="mr-4" onClick={handleUndo}>Undo</Button>
   <Button onClick={handleRedo}>Redo</Button>
</div>

</div>

    )
}

export default Form;