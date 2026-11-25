// about page, route: /about
export default function About() {
  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>About me</h1>
      <p>
        I am a computer science student and I am following a fullstack web development bootcamp.
        I like building clean, simple interfaces.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS and JavaScript</li>
        <li>React and Redux</li>
        <li>TypeScript</li>
        <li>Next.js and Git</li>
      </ul>
    </main>
  );
}
