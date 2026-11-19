
export default function Sobre() {
  const tecnologias = [
    { nome: "Java", nivel: "Desenvolvimento backend" },
    { nome: "Python", nivel: "Lógica e programação" },
    { nome: "Spring Boot", nivel: "Desenvolvimento backend" },
    { nome: "React", nivel: "Desenvolvimento frontend" },
    { nome: "Next.js", nivel: "Desenvolvimento web" },
    { nome: "HTML e CSS", nivel: "Estrutura e estilização" },
    { nome: "JavaScript", nivel: "Programação web" },
    { nome: "PostgreSQL", nivel: "Banco de dados" },
    { nome: "Git e GitHub", nivel: "Versionamento de código" }
  ];

  return (
    <main className="home">
      <nav className="navbar">
        <a href="/" className="logo">MB<span>.</span></a>

        <div className="nav-links">
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/academica">Formação</a>
          <a href="/experiencia">Experiência</a>
          <a href="/projetos">Projetos</a>
        </div>

        <a href="mailto:seuemail@email.com" className="contact-button">
          Contato ↗
        </a>
      </nav>

      <section className="inner-page">
        <span className="tag">CONHEÇA MINHA TRAJETÓRIA</span>

        <h1>Sobre <span>mim.</span></h1>

        <p className="inner-description">
          Sou estudante de Sistemas para Internet na Universidade
          Católica de Pernambuco, por meio do programa Embarque
          Digital, uma iniciativa do Porto Digital.

          Tenho interesse em desenvolvimento de software,
          principalmente na área de back-end, e busco constantemente
          aprimorar meus conhecimentos através de estudos e projetos
          práticos.

          Gosto de aprender novas tecnologias, resolver problemas
          e desenvolver soluções que possam facilitar o dia a dia
          das pessoas.
        </p>

        <div className="about-highlight">
          <span>✳</span>
          <div>
            <h3>Minha forma de pensar</h3>
            <p>
              Acredito que a tecnologia está em constante evolução
              e que cada novo desafio é uma oportunidade de aprender,
              experimentar e crescer profissionalmente.
            </p>
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="section-heading">
          <span className="info-number">01 / CONHECIMENTOS</span>
          <h2>Tecnologias e ferramentas</h2>
          <p>
            Linguagens, frameworks e ferramentas que fazem parte
            da minha jornada de aprendizado.
          </p>
        </div>

        <div className="technology-grid">
          {tecnologias.map((tech) => (
            <div className="technology-card" key={tech.nome}>
              <span className="tech-icon">⌘</span>
              <h3>{tech.nome}</h3>
              <p>{tech.nivel}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 • Meu Portfólio</p>
        <p>Desenvolvido com Next.js e CSS.</p>
      </footer>
    </main>
  );
}
