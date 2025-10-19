export default function ResumePage() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#B77466] tracking-tight">
          Resume
        </h1>
        <p className="text-[#957C62] text-lg">
          My professional experience and technical expertise
        </p>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#E2B59A]/30">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#B77466] mb-2">
              Download Resume
            </h2>
            <p className="text-[#957C62]">
              Get the latest version of my resume
            </p>
          </div>
          <a 
            href="/Resume_Yash_Narayan_1025.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B77466] to-[#957C62] text-[#FFE1AF] rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#B77466] mb-4">Skills</h3>
            <div className="space-y-3">
              {[
                "C++",
                "Rust",
                "JavaScript",
                "Python",
                "React/Next.js",
                "Node.js",
                "Git/GitHub",
                "Tailwind CSS"
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#B77466] rounded-full mr-3"></div>
                  <span className="text-[#957C62]">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#B77466] mb-4">Interests</h3>
            <div className="space-y-3">
              {[
                "Quantiative development",
                "AI/ML research",
                "Backend development",
                "Modern Web Technologies",
                "Open Source Contribution",
                "Continuous Learning"
              ].map((interest, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#E2B59A] rounded-full mr-3"></div>
                  <span className="text-[#957C62]">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[#957C62] mb-4">
          Interested in working together?
        </p>
        <a 
          href="mailto:yash25.narayan@gmail.com"
          className="inline-flex items-center px-6 py-3 border-2 border-[#B77466] text-[#B77466] rounded-lg hover:bg-[#B77466] hover:text-[#FFE1AF] transition-all duration-300 font-medium"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}