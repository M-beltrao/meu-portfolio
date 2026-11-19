
export default function Experiencia() {
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
        <span className="tag">MINHA TRAJETÓRIA PROFISSIONAL</span>
        <h1>Experiência <span>profissional.</span></h1>
        <p className="inner-description">
          Experiências que contribuem para meu desenvolvimento
          profissional, responsabilidade e aprendizado no ambiente
          de trabalho.
        </p>
      </section>

      <section className="timeline-section">
        <span className="info-number">01 / EXPERIÊNCIA</span>
        <div className="timeline">
          <article className="timeline-card">
            <span className="timeline-date">JOVEM APRENDIZ • ATUAL</span>
            <h2>Hospital Maria Lucinda</h2>
            <h3>Jovem Aprendiz</h3>
            <p>
              Atuação em ambiente hospitalar, com atividades
              administrativas e utilização do sistema Soulpep.
              Experiência com organização de informações,
              registros de atendimentos e apoio às rotinas do setor.
            </p>
            <div className="timeline-tags">
              <span>Soulpep</span>
              <span>Organização</span>
              <span>Rotinas administrativas</span>
              <span>Trabalho em equipe</span>
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
