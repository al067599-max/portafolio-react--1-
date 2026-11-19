import { useState } from 'react'
import { profile, areas, projects, skills } from './data'

export default function App() {
  const [area, setArea] = useState('Todos')
  const shown = area === 'Todos' ? projects : projects.filter((p) => p.area === area)
  const links = [
    ['GitHub', profile.github],
    ['LinkedIn', profile.linkedin],
    ['Correo', profile.email && `mailto:${profile.email}`],
  ].filter(([, href]) => href)

  return (
    <>
      <header className="hero">
        <div>
          <p className="school">{profile.school}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="about">{profile.about}</p>
          {links.length > 0 && (
            <nav className="links" aria-label="Enlaces de contacto">
              {links.map(([label, href]) => (
                <a key={label} href={href} target={label === 'Correo' ? undefined : '_blank'} rel="noreferrer">
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
        <section aria-labelledby="proyectos">
          <h2 id="proyectos">Trabajos del semestre</h2>
          <div className="filters" role="group" aria-label="Filtrar por área">
            {areas.map((a) => (
              <button key={a} aria-pressed={a === area} onClick={() => setArea(a)}>
                {a}
              </button>
            ))}
          </div>
          <ul className="projects">
            {shown.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="stack" aria-label="Tecnologías">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {(p.repo || p.demo) && (
                  <p className="proj-links">
                    {p.demo && <a className="demo" href={p.demo} target="_blank" rel="noreferrer">Abrir demo</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Ver código</a>}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="herramientas">
          <h2 id="herramientas">Con qué trabajo</h2>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer>
        <p>{profile.city} · Hecho con React y Vite</p>
      </footer>
    </>
  )
}
