import React from "react";
import "./App.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Topo */}
      <header className="bg-pink-400 p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">
          Patty Kelly Monteiro Nail Designer
        </h1>
      </header>

      {/* Menu */}
      <nav className="bg-white p-4 flex justify-center gap-8 shadow-sm">
        <a href="#home" className="hover:text-pink-500 font-medium">
          Home
        </a>
        <a href="#sobre" className="hover:text-pink-500 font-medium">
          Sobre
        </a>
        <a href="#servicos" className="hover:text-pink-500 font-medium">
          Serviços
        </a>
        <a href="#agendamento" className="hover:text-pink-500 font-medium">
          Agendamento
        </a>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 p-6">
        <section id="sobre" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Sobre</h2>
          <p>
            Aqui você conhece meu trabalho , marca seu horário e efetua o
            pagamento se desejar.
          </p>
        </section>

        <section id="servicos" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Serviços</h2>
          <ul className="list-disc pl-5">
            <li>Esmaltação tradicional</li>
            <li>Pé e mão</li>

            <li>Banho de gel</li>
            <li>Blindagem</li>
          </ul>
        </section>

        <section id="agendamento" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Agendamento</h2>
          <p>Em breve você poderá agendar seu horário por aqui!</p>
        </section>
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
            href="https://instagram.com//pattykellymonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
