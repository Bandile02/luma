import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              LUMA
            </Link>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; 2023 LUMA Animation Studio. All rights reserved.</p>
            <p className="text-gray-400 mt-2">contact@luma-studio.com | +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

