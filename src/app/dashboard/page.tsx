import { createClient } from "@/utils/supabase/server";
import { CreateTodo } from "./action";
import DeleteButton from "@/components/delete-button";
import UpdateButton from "@/components/update-button";

const DashboardPage = async () => {
  const supabase = await createClient();
  const { data: todos } = await supabase.from("todos").select("*");

  return (
    <div className="p-10 flex flex-col justify-center gap-10">
      <form action={CreateTodo}>
        <input
          type="text"
          name="task"
          placeholder="Digite a task..."
          className="h-10 rounded px-2"
        />
        <button
          type="submit"
          className="text-green-100 h-10 bg-green-500 font-bold px-3 rounded"
        >
          Cadastrar
        </button>
      </form>

      {todos?.map((todo) => (
        <div key={todo.id} className="w-full flex justify-between items-center">
          <h2 className={todo.is_complete?'line-through text-2xl': "text-2xl"}>{todo.task}</h2>
          <div className="flex gap-2">
            <DeleteButton id={todo.id} />
            <UpdateButton todo={todo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
