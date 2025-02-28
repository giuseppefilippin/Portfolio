import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* copy and paste for futures projects*/}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Movie List</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aperiam amet ex modi eius, quos, magnam dolorum
                perferendis tempore
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React + Vite", "CSS", "API de filmes"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://giuseppefilippin.github.io/movie-list/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* copy until here*/}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Library</h3>
              <p className="text-gray-400 mb-4">
                Este projeto consiste em uma aplicação bancária que permite aos
                usuários realizar operações financeiras básicas através de uma
                interface gráfica construída com Java Swing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Swing"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/giuseppefilippin/RA3Trabalho"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Jlox and Clox Interpreter
              </h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aperiam amet ex modi eius, quos, magnam dolorum
                perferendis tempore
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "C"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/giuseppefilippin/jlox/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Flask Website</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aperiam amet ex modi eius, quos, magnam dolorum
                perferendis tempore
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "MQTT", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/giuseppefilippin/PJBL3"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
