"use client"

import { useState } from "react"
import { Login, SignUp } from "./action"

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="h-full bg-gray-400 justify-center items-center flex flex-col">
      <form
        action={isSignUp ? SignUp : Login}
        className="flex flex-col gap-3 p-10 min-w-96 bg-gray-200 rounded"
      >
        <input type="text" name="email" placeholder="E-mail" className="h-10 rounded px-2" />
        <input type="password" name="password" placeholder="Senha" className="h-10 rounded px-2" />
        <button type="submit" className="bg-green-400 rounded border-black border-solid p-2">
          {isSignUp ? "Cadastrar" : "Entrar"}
        </button>
      </form>
      <button
        onClick={() => setIsSignUp(!isSignUp)}
        className="mt-4 text-gray-50 underline"
      >
        {isSignUp ? "Já tem uma conta? Entrar" : "Não tem conta? Cadastre-se"}
      </button>
    </div>
  )
}

export default LoginPage
