"use client"

import { DeleteTodo } from "@/app/dashboard/action";

type Props = {
    id: number
}
const DeleteButton = ({id}:Props) => {
    return ( 
        <button className="bg-red-500 text-red-100 h-10 rounded px-3" onClick={async()=>{
            DeleteTodo(id)
        }}>
            Apagar
        </button>
     );
}
 
export default DeleteButton;