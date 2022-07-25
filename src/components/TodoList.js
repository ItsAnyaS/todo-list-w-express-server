const TodoList = ({taskList}) => {
return (
<div>
    <h3>List Items</h3>
    <ul>
        {taskList.map(element => {
            return(
                <li>{element}</li>
            )
        })}
    </ul>
</div>
)}


export default TodoList