import './App.css';
import AddUser from "./Components/Users/AddUser";
import ListUsers from "./Components/Users/ListUsers";
import React, {useState} from "react";

const USERS = [];

function App() {
    const [users, setUsers] = useState(USERS);

    const addUserHandler = (user) => {
        const usersData = [user, ...users];
        setUsers(usersData);
    }

    return (<React.Fragment><AddUser onAddUser={addUserHandler}/>
        <ListUsers users={users}/></React.Fragment>);
}

export default App;
