import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="flex justify-between items-center h-20 bg-teal-400 px-8">
        <h1>
          <Link href='/'>ETRUN
          </Link>
        </h1>
        <nav>
          <ul className="inline-flex gap-6">
            <li>
              <Link href="/run">Run</Link>
            </li>
            <li>
            <Link href="/course">Course</Link>
            </li>
            <li>
            <Link href="/notice">Notice</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}
