"use client"
import { UpdateButtonComand } from "@/app/dashboard/action";
import { Todo } from "@/types/todo";

type Props = {
  todo: Todo
}
const UpdateButton = ({todo}:Props) => {
  return ( 
   
      <button className="bg-blue-500 text-blue-100  rounded p-2 antialiased" onClick={async()=>{
        UpdateButtonComand(todo)
      }}>Atualizar</button>
    
   );
}
 
export default UpdateButton;