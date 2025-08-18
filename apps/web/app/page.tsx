import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mini Event Task
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple event management application built with Next.js
        </p>
        <Link 
          href="/events" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Events
        </Link>
      </div>
    </div>
  )
}

