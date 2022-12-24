import Button from "./Button";

function Show(props){
    let data = props.history[props.history.length - 1][0];

    const delteHandler =(index)=>{
        let prevData = props.history[props.history.length - 1][0];
  
        let newHistData = prevData.filter((indexs) => indexs !== index);
        let undo = props.history.length - 1;
        let redo = null;
        let newHist = [newHistData, undo, redo];
        let Hist = [...props.history, newHist];
        //set history
        props.setHistory(Hist);
    }

return (
    <div>
<h1>Todo List</h1>
<div>
    {data.length == 0 && <h1>Either you have finished all the tasks or You have not added any task</h1>}
</div>

{props.task != undefined && (<>
{data.map(index=>(<div key={index} className="flex justify-items-center items-center">

    <p className="m-6 self-center">{props.task[index]}</p>
    <Button onClick ={()=>delteHandler(index)}>Delete</Button>
</div>))}
</>) }
    </div>
)
}

export default Show;