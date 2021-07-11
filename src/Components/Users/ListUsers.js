import classes from './ListUsers.module.css';
import Card from "../UI/Card";


const ListUsers = props => {
    console.log(props.users);
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li key={user.id}>{user.username} ({user.age} years old) </li>)}
            </ul>
        </Card>
    );

}

export default ListUsers;