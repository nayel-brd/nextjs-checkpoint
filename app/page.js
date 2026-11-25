import Image from 'next/image';
import styles from './page.module.css';

// home page, route: /
export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/profile.svg" alt="Profile picture" width={160} height={160} priority />
      <h1>Hi, I am Nayel</h1>
      <p>Web developer in training, learning React, Next.js and TypeScript.</p>
    </main>
  );
}
