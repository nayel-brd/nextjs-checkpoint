import Link from 'next/link';
import styles from './Nav.module.css';

// navigation bar: uses next/link for client-side navigation between pages
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
