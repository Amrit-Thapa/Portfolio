
import Link from "next/link"
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <h1><Link href="/posts/first-post">this page!</Link></h1>
    </div>
  );
}