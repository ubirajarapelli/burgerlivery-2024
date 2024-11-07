import Image from "next/image"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default async function Entradas() {
  const response = await fetch(`${apiUrl}/appetizers`)
  const appetizers = await response.json()

  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-4xl">Entradas</h1>
        <section>
          {appetizers.map((appetizer: any) => (
            <div key={appetizer.title}>
              <p>{appetizer.title}</p>
              <Image
                src={appetizer.image}
                alt={appetizer.title}
                width={160}
                height={160}
              />
              <p>{appetizer.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
