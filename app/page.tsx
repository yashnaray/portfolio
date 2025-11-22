import Link from 'next/link'

// Updated to force clean build
export default function Page() {
  return (
    <div className="max-w-2xl mx-auto space-y-24 py-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-light text-orange-700">
          Yash Narayan
        </h1>
        <p className="text-xl text-orange-600 font-light">
          Full-Stack Developer & Software Engineer
        </p>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-2 gap-12 items-center">
        <div className="w-full h-64 bg-orange-200/30 rounded-lg overflow-hidden">
          <img 
            src="/profile.png" 
            alt="Yash Narayan" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-light text-orange-700">About</h2>
          <div className="space-y-4 text-orange-600 leading-relaxed">
            <p>
              I’m Yash Narayan, a Computer Science student at the University of Florida focused on building intelligent, efficient software systems. My work spans machine learning, data automation, and full-stack development, where I design tools that turn complex data into actionable insights. 
            </p>
            <p>
              I’ve built scalable ML models, optimized analytical pipelines, and engineered systems that blend research precision with real-world performance.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-light text-orange-700 text-center">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-orange-700 mb-2">Languages</h3>
            <p className="text-orange-600">C++, Python, Rust, JavaScript</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-orange-700 mb-2">Frontend</h3>
            <p className="text-orange-600">React, Next.js, Tailwind CSS</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-orange-700 mb-2">Backend</h3>
            <p className="text-orange-600">Python, Node.js</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-orange-700 mb-2">Tools</h3>
            <p className="text-orange-600">Git, GitHub, Vim</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-light text-orange-700 text-center">Links</h2>
        <div className="space-y-3">
          <Link 
            href="/projects" 
            className="block text-orange-600 hover:text-orange-700 transition-colors underline underline-offset-4"
          >
            Projects
          </Link>
          <Link 
            href="/resume" 
            className="block text-orange-600 hover:text-orange-700 transition-colors underline underline-offset-4"
          >
            Resume
          </Link>
        </div>
      </section>
    </div>
  )
}
