import { login } from "./action";

const LoginPage = () => {
  return (
    <div className="h-full bg-zinc-950 justify-center items-center flex">
      <form
        action={login}
        className="flex flex-col gap-3 p-10 min-w-96 bg-zinc-800 rounded"
      >
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className="h-10 rounded px-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="h-10 rounded px-2"
        />
        <button
          type="submit"
          className="text-green-100 h-10 bg-green-500 font-bold"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
