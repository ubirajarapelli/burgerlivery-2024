// import { log } from "console"

import Link from "next/link"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default async function Home() {
  const response = await fetch(`${apiUrl}/categories`)
  const categories = await response.json()

  // log(categories)

  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-4xl">Burgerlivery</h1>
        <ul>
          {categories.map((category: any) => (
            <li key={category.text}>
              <Link href={category.link}>{category.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/login">Login</Link>
    </main>
  )
}
