
export default function Academica() {
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
        <a href="mailto:seuemail@email.com" className="contact-button">Contato ↗</a>
      </nav>

      <section className="inner-page">
        <span className="tag">MINHA JORNADA DE APRENDIZADO</span>
        <h1>Experiência <span>acadêmica.</span></h1>
        <p className="inner-description">
          Minha formação é marcada pelo interesse em tecnologia,
          desenvolvimento de software e aprendizado contínuo.
        </p>
      </section>

      <section className="timeline-section">
        <span className="info-number">01 / FORMAÇÃO</span>
        <div className="timeline">
          <article className="timeline-card">
            <span className="timeline-date">FORMAÇÃO SUPERIOR • EM ANDAMENTO</span>
            <h2>Sistemas para Internet</h2>
            <h3>Universidade Católica de Pernambuco — UNICAP</h3>
            <p>
              Formação tecnológica voltada ao desenvolvimento de
              aplicações para internet, programação, banco de dados,
              arquitetura de software e tecnologias web.
            </p>
            <div className="timeline-tags">
              <span>Java</span>
              <span>Python</span>
              <span>Desenvolvimento Web</span>
              <span>Banco de Dados</span>
            </div>
          </article>

          <article className="timeline-card">
            <span className="timeline-date">PROGRAMA DE FORMAÇÃO</span>
            <h2>Embarque Digital</h2>
            <h3>Porto Digital</h3>
            <p>
              Participação no programa de formação em tecnologia
              Embarque Digital, por meio de bolsa de estudos,
              conectando educação, inovação e mercado de trabalho.
            </p>
            <div className="timeline-tags">
              <span>Tecnologia</span>
              <span>Inovação</span>
              <span>Desenvolvimento</span>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <p>© 2026 • Meu Portfólio</p>
        <p>Desenvolvido com Next.js e CSS.</p>
      </footer>
    </main>
  );
}
