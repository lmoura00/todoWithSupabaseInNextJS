"use server";
import { Todo } from "@/types/todo";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function InsertTask(formdata: FormData) {
  const supabase = createClient();
  const { data: user } = await (await supabase).auth.getUser();
  const data = {
    task: formdata.get("task") as string,
  };
  const { error } = await (await supabase).from("todos").insert({
    ...data,
    user_id: user.user?.id,
  });
  if (!error) {
    revalidatePath("/");
  }
}

export async function DeleteButtonComand(id: number) {
  const supabase = createClient();
  const { error } = await (await supabase).from("todos").delete().eq("id", id);
  if (!error) {
    revalidatePath("/");
  }
}

export async function UpdateButtonComand(todo: Todo) {
  const supabase = createClient();

  const { data, error } = await (await supabase)
    .from("todos")
    .update({ is_complete: !todo.is_complete })
    .eq("id", todo.id)
    .select();
  console.log(data);
  if (!error) {
    revalidatePath("/");
  }
}

export async function  SignOut() {
  const supabase = createClient()
  const {error} = await (await supabase).auth.signOut()
  if(!error){
    redirect('/login')
  }
}
