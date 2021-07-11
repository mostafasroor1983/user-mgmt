import  classes from'./AddUser.module.css';
import {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const [username, setUserName] = useState('');
    const [age, setAge] = useState(1);
    const [isValid, setIsValid] = useState(true);
    const [errorTitle, serErrorTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setIsValid(false);
            serErrorTitle("Required fields");
            setErrorMessage("Fields age and username are required");
            return;
        }
        if (+age < 1) {
            setIsValid(false);
            serErrorTitle("Age is number");
            setErrorMessage("Age should a number");
            return;
        }
        props.onAddUser({username:username, age :age, id:Math.random().toString()});
        setUserName('');
        setAge('');
    }

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const confirmHandler = () =>{
        setIsValid(true);
    }
    return (<div>
        {!isValid && <ErrorModal title={errorTitle} message={errorMessage} onConfirm={confirmHandler}/> }
        <Card className={classes.input} >
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age(Years)</label>
                <input  id="age"  type="number"  value={age} step="1" min="1" max="120" onChange={ageChangeHandler }/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>);
}

export default AddUser;
