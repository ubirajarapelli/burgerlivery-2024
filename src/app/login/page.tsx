"use client"
// import { log } from "console"
import Link from "next/link"
import { useState } from "react"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default function Login() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleLoginChange = (event: any) => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const param = {
      login: login,
      password: password,
    }

    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })

    const data = await response.json()

    // log(data)
  }

  return (
    <main>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="text-gray-950"
              type="email"
              id="email"
              name="email"
              required
              onChange={handleLoginChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="text-gray-950"
              type="password"
              id="password"
              name="password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <Link href="/">Voltar para o inicio</Link>
      </div>
    </main>
  )
}
