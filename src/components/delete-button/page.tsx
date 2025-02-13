"use client"
import { DeleteButtonComand } from "@/app/dashboard/action";

type Props = {
  id: number
}
const DeleteButton = ({id}:Props) => {
  return ( 
   
      <button className="bg-red-500 text-red-100 rounded p-2 antialiased" onClick={async()=>{
        DeleteButtonComand(id)
      }}>Apagar</button>
    
   );
}
 
export default DeleteButton;