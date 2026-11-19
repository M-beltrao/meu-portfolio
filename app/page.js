
export default function Home() {
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

      <section className="hero">
        <div className="hero-content">
          <span className="tag">
            <span className="status-dot"></span>
            DISPONÍVEL PARA OPORTUNIDADES
          </span>

          <p className="greeting">Olá, seja bem-vindo(a)!</p>

          <h1>
            Construindo soluções
            <br />
            através da <span>tecnologia.</span>
          </h1>

          <p className="description">
            Sou estudante de Sistemas para Internet, interessada
            em desenvolvimento de software, tecnologia e inovação.
            Estou sempre buscando aprender e transformar ideias
            em soluções digitais.
          </p>

          <div className="hero-buttons">
            <a href="/projetos" className="primary-button">
              Conheça meus projetos ↗
            </a>

            <a href="/sobre" className="secondary-button">
              Sobre mim
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/M-beltrao" target="_blank">
              GitHub ↗
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="card-top">
              <span>PORTFÓLIO / 2026</span>
              <span className="card-icon">✳</span>
            </div>

            <div className="code-symbol">
              <span>{"<"}</span>
              <span>/</span>
              <span>{">"}</span>
            </div>

            <h2>Desenvolvimento</h2>
            <p>Ideias transformadas em código.</p>

            <div className="card-footer">
              <span>JAVA</span>
              <span>PYTHON</span>
              <span>REACT</span>
            </div>
          </div>

          <div className="floating-badge">
            <span>✦</span> Sempre aprendendo
          </div>
        </div>
      </section>

      <section className="quick-info">
        <div>
          <span className="info-number">01</span>
          <h3>Desenvolvimento</h3>
          <p>Construção de aplicações e soluções digitais.</p>
        </div>

        <div>
          <span className="info-number">02</span>
          <h3>Aprendizado</h3>
          <p>Conhecimento em constante evolução.</p>
        </div>

        <div>
          <span className="info-number">03</span>
          <h3>Tecnologia</h3>
          <p>Interesse em inovação e novos desafios.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 • Meu Portfólio</p>
        <p>Desenvolvido com Next.js e CSS.</p>
      </footer>
    </main>
  );
}
