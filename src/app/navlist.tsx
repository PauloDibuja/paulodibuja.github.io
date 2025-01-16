import Link from "next/link"

export default function NavList(){
    return(
        <div>
            <nav className="bg-gray-900 text-white">
        <ul className="flex justify-center space-x-4 p-4">
          <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          <li>
            <a href="/index.html" className="hover:underline">YouTube</a>
          </li>
          <li>
            <Link href="bio" className="hover:underline">Bio</Link>
          </li>
        </ul>
      </nav>
        </div>
    )
} 