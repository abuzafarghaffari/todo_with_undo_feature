import classes from './buttom.module.css';

function Button(props){

    return (<button className={`${props.className} ${classes.button}`}
    onClick={props.onClick} >
        {props.children}
    </button>)
}
export default Button;