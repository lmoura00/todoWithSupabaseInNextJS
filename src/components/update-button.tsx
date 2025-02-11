"use client"

import { UpdateTodo } from "@/app/dashboard/action";
import { Todo } from "@/types/todo";

type Props = {
    todo: Todo
}
const UpdateButton = ({todo}:Props) => {
    return ( 
        <button className="bg-blue-500 text-blue-100 h-10 rounded px-3" onClick={async()=>{
            UpdateTodo(todo)
        }}>
            Atualizar
        </button>
     );
}
 
export default UpdateButton;