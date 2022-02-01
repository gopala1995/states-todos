export const Todositem = ({title, status,id,DeleteTodo})=> {
    return (
        <div>
            <h1>{title}-{status? "Done":"Not done"}</h1>
            <button onClick={()=>{
                DeleteTodo(id)
            }}>Delete Item</button>
        </div>
    )
}