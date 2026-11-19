
const projetos = [
  {
    numero: "01",
    nome: "ControlAmigo",
    categoria: "Aplicação Web • Java",
    descricao:
      "Aplicação de controle financeiro desenvolvida para auxiliar na organização das finanças pessoais, com gerenciamento de receitas, despesas, contas e relatórios.",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JavaScript"],
    link: "https://github.com/M-beltrao/ControlAmigo"
  },
  {
    numero: "02",
    nome: "Jogo de Dados",
    categoria: "Aplicação Web • Next.js",
    descricao:
      "Jogo desenvolvido para dois participantes, com cinco rodadas e sistema de pontuação, colocando em prática conceitos de desenvolvimento web.",
    tecnologias: ["Next.js", "React", "CSS"],
    link: "https://github.com/M-beltrao/jogo-dados"
  },
  {
    numero: "03",
    nome: "Mini Bio",
    categoria: "Desenvolvimento Web",
    descricao:
      "Projeto de apresentação pessoal desenvolvido para praticar estruturação de páginas, estilização e organização de conteúdo na web.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/M-beltrao/Mini-bioent"
  }
];

export default async function Projetos() {
  let repositorios = [];

  try {
    const resposta = await fetch(
      "https://api.github.com/users/M-beltrao/repos?sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github+json"
        },
        next: {
          revalidate: 3600
        }
      }
    );

    if (resposta.ok) {
      const dados = await resposta.json();

      const projetosDestacados = [
        "controlamigo",
        "jogo-dados",
        "mini-bioent"
      ];

      repositorios = dados
        .filter(
          (repo) =>
            !projetosDestacados.includes(repo.name.toLowerCase()) &&
            !repo.fork
        )
        .slice(0, 6);
    }
  } catch (erro) {
    console.error("Erro ao carregar repositórios do GitHub:", erro);
  }

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
        <span className="tag">MEU TRABALHO NA PRÁTICA</span>

        <h1>
          Projetos <span>desenvolvidos.</span>
        </h1>

        <p className="inner-description">
          Projetos que representam minha evolução na programação,
          permitindo colocar em prática conhecimentos, explorar
          tecnologias e desenvolver novas habilidades.
        </p>
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {projetos.map((projeto) => (
            <article className="project-card" key={projeto.numero}>
              <div className="project-top">
                <span className="info-number">
                  {projeto.numero} / PROJETO
                </span>
                <span className="project-symbol">↗</span>
              </div>

              <span className="project-category">
                {projeto.categoria}
              </span>

              <h2>{projeto.nome}</h2>

              <p>{projeto.descricao}</p>

              <div className="timeline-tags">
                {projeto.tecnologias.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver código no GitHub ↗
              </a>
            </article>
          ))}
        </div>

        {repositorios.length > 0 && (
          <>
            <section className="inner-page">
              <span className="tag">INTEGRAÇÃO COM API</span>
              <h1>
                Outros <span>repositórios.</span>
              </h1>
              <p className="inner-description">
                Repositórios públicos carregados automaticamente
                diretamente do meu GitHub.
              </p>
            </section>

            <div className="projects-grid">
              {repositorios.map((repo, index) => {
                const tecnologias = [
                  ...(repo.language ? [repo.language] : []),
                  ...(repo.topics || []).slice(0, 3)
                ];

                return (
                  <article className="project-card" key={repo.id}>
                    <div className="project-top">
                      <span className="info-number">
                        REPOSITÓRIO {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="project-symbol">↗</span>
                    </div>

                    <span className="project-category">
                      {repo.language || "Projeto no GitHub"}
                    </span>

                    <h2>{repo.name}</h2>

                    <p>
                      {repo.description ||
                        "Repositório público disponível no meu GitHub."}
                    </p>

                    <div className="timeline-tags">
                      {tecnologias.length > 0 ? (
                        tecnologias.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))
                      ) : (
                        <span>GitHub</span>
                      )}
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Ver código no GitHub ↗
                    </a>
                  </article>
                );
              })}
            </div>
          </>
        )}

        <div className="github-more">
          <p>Quer conhecer outros projetos?</p>

          <a
            href="https://github.com/M-beltrao"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Acessar meu GitHub ↗
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 • Meu Portfólio</p>
        <p>Desenvolvido com Next.js e CSS.</p>
      </footer>
    </main>
  );
}
