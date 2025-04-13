import React, { useState } from "react";
import "./App.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState("home");
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui futuramente você pode salvar num banco
    console.log({ nome, data, hora, servico });

    setMensagem("Agendamento enviado com sucesso!");
    setNome("");
    setData("");
    setHora("");
    setServico("");

    setTimeout(() => setMensagem(""), 4000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fundo.jpg')" }}
    >
      {/* Sobreposição escura para facilitar leitura */}
      <div className="bg-white/20 min-h-screen">
        <div className="flex flex-col min-h-screen font-sans text-gray-800">
          {/* Topo */}
          <header className="bg-pink-400 p-6 text-center shadow-md">
            <h1 className="text-3xl font-bold">
              Patty Kelly Monteiro Nail Designer
            </h1>
          </header>

          {/* Menu */}
          <nav className="bg-white p-4 flex justify-center gap-8 shadow-sm">
            <button
              onClick={() => setSecaoAtiva("home")}
              className="hover:text-pink-500 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => setSecaoAtiva("sobre")}
              className="hover:text-pink-500 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => setSecaoAtiva("servicos")}
              className="hover:text-pink-500 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => setSecaoAtiva("agendamento")}
              className="hover:text-pink-500 font-medium"
            >
              Agendamento
            </button>
          </nav>

          {/* Conteúdo */}
          <main className="flex-1 p-6">
            {secaoAtiva === "sobre" && (
              <section id="sobre" className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Sobre</h2>
                <p>
                  Aqui você conhece meu trabalho , marca seu horário e efetua o
                  pagamento se desejar.
                </p>
              </section>
            )}

            {secaoAtiva === "servicos" && (
              <section id="servicos" className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Serviços</h2>
                <ul className="list-disc pl-5">
                  <li>Esmaltação tradicional</li>
                  <li>Pé e mão</li>
                  <li>Banho de gel</li>
                  <li>Blindagem</li>
                </ul>
              </section>
            )}

            {secaoAtiva === "agendamento" && (
              <section id="agendamento" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Agendamento</h2>
                {/* Seu formulário entra aqui 👇 */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-md mx-auto"
                >
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                  <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                  <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                  <select
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Esmaltação tradicional">
                      Esmaltação tradicional
                    </option>
                    <option value="Pé e mão">Pé e mão</option>
                    <option value="Banho de gel">Banho de gel</option>
                    <option value="Blindagem">Blindagem</option>
                  </select>
                  <button
                    type="submit"
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                  >
                    Agendar
                  </button>
                </form>
                {mensagem && (
                  <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
                    {mensagem}
                  </div>
                )}
              </section>
            )}
          </main>

          {/* Rodapé */}
          <footer className="bg-pink-100 p-4 text-center">
            <p className="mb-2">Nos acompanhe nas redes sociais</p>
            <div className="flex justify-center gap-6 text-2xl">
              <a
                href="https://wa.me/5534998782674"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-transform transform hover:scale-125"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/pattykellymonteiro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
