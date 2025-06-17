import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>FitAI</h1>
      <ul>
        <li><Link href="/training">Training</Link></li>
        <li><Link href="/nutrition">Nutrition</Link></li>
      </ul>
    </div>
  );
}
