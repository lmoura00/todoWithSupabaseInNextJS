"use server";
import { createClient } from "@/utils/supabase/server";
import { InsertTask, SignOut } from "./action";
import DeleteButton from "@/components/delete-button/page";
import UpdateButton from "@/components/update-button/page";

const DashboardPage = async () => {
  const supabase = createClient();
  const { data: todos } = await (await supabase).from("todos").select("*");
  return (
    <div className="h-full bg-gray-300">
    <div className="p-10 flex flex-col justify-center gap-10">
      <div>
      <form action={InsertTask} className="flex h-full justify-between">
        <input type="text" name="task" placeholder="Digite a sua tarefa..." className="h-14 min-w-72  rounded px-2"/>
        <button type="submit" className="text-green-100 h-14 bg-green-500 font-bold px-3 rounded"> 
          Cadastrar
        </button>
      </form>
      <button onClick={SignOut}>
        SignOut
      </button>

      </div>
      <div>
        {todos?.map(todo=>(
          <div key={todo.id} className="w-full flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
            <h1 className={todo.is_complete?'line-through text-2xl':'text-2xl'}>{todo.task}</h1>
            <div className="flex gap-2">
              <DeleteButton id={todo.id}/>
              <UpdateButton todo={todo}/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;
