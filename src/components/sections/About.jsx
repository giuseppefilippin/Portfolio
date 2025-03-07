import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "MySQL",
    "PHP",
    "Rust",
    "Java",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sobre mim
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Sou estudante de Ciência da Computação na PUCPR e atualmente sou bolsista de um projeto de pesquisa PIBIC na Fundação Araucária. Minha paixão pela programação me levou a explorar diversas tecnologias, do front-end ao back-end, sempre buscando aprender e aprimorar minhas habilidades.
            Além da tecnologia, gosto de desenvolver pequenos projetos pessoais, ler sobre IA e experimentar novas stacks. Acredito que a curiosidade e a inovação são essenciais para qualquer desenvolvedor.
            </p>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">BackEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Educação </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Diploma de inglês</strong> Phill Young`s
                </li>
                <li>
                  <strong>Ensino médio</strong> Colegio Marista Santa
                  Maria(2018-2021)
                </li>
                <li>
                  <strong>Bacharelado em Ciência da Computação </strong> PUCPR(2023-2026)
                </li>
                <li>
                  Cursos relevantes: python, algoritimos, web development, data structures
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experiência </h3>
              <div className="space-y-4 text-gray-300">
                {/* copiar a Div abaixo para adicionar futuras work experience */}
                <div>
                  <h4 className="font-bold">
                    Bolsista PIBITI / PIBIC at Lactec (2025-Atualemnte)
                  </h4>
                  <p>
                    Desenvolvendo uma Calculadora TRL como projeto de iniciação científica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
