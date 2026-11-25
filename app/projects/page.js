import Image from 'next/image';
import styles from './projects.module.css';

// list of projects shown on the projects page
const projects = [
  { title: 'Redux Checkpoint', description: 'A small app that manages its state with Redux.', image: '/project1.svg' },
  { title: 'TypeScript Checkpoint', description: 'Classes and interfaces written in TypeScript.', image: '/project2.svg' },
];

// projects page, route: /projects
export default function Projects() {
  return (
    <main className={styles.main}>
      <h1>My projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <Image src={project.image} alt={project.title} width={300} height={180} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
