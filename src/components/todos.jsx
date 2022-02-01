import { useState } from "react"
import { Todosinput } from "./todos.input"
import { Todositem } from "./todos.items"

export const Todos = ()=>{
    const [todos,setTodos] = useState([])

    const handellclick = (text)=>{
        setTodos([...todos,text])
    }
  return (
      <div>
          <Todosinput handellclick={handellclick}/>
          {todos.map((e)=>{
              return <Todositem title = {e}/>
          })}
      </div>
  )
}