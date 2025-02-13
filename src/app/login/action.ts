"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function Login(formdata:FormData) {
  const supabase = await createClient()
  const data = {
    email:formdata.get('email') as string,
    password: formdata.get('password')as string
  }
  const {error} = await supabase.auth.signInWithPassword(data)
  if(!error){
    redirect('/dashboard')
  }
}

export async function SignUp(formdata: FormData) {
  const supabase = await createClient()
  const data = {
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error("Erro ao cadastrar:", error.message)
    return
  }

  const {error:errorLogin} = await supabase.auth.signInWithPassword(data)
  if(!errorLogin){
    redirect('/dashboard')
  }
}