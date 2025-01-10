import Image from 'next/image'

const awards = [
  { name: 'IMAX', logo: '/placeholder.svg?height=50&width=100' },
  { name: 'SAFFTA', logo: '/placeholder.svg?height=50&width=100' },
  { name: 'Award 3', logo: '/placeholder.svg?height=50&width=100' },
]

export default function Awards() {
  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-8">
          {awards.map((award) => (
            <div key={award.name} className="flex items-center">
              <Image src={award.logo} alt={award.name} width={100} height={50} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

