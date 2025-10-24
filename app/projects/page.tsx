export default function ProjectsPage() {
  const projects = [
    {
      title: "Market Risk Assessment",
      description: "A real-time market risk analyzer using TensorFlow and Python to model portfolio volatility and hedging strategies. Implemented backtesting for alpha, beta, and Sharpe ratio, and automated data pipelines for continuous performance evaluation.",
      tech: ["Python","TensorFlow","Pandas","NumPy"," Engineering","Quantitative Modeling","Financial Analytics"],
      link: "#",
      github: "https://github.com/yashnaray/VQ-VAE-HMM-model"
    },
    {
      title: "maxiMiZe: Chromatography Data Platform",
      description: "Designed a Python-based platform to process and visualize mass spectrometry and chromatography datasets. Enhanced data accuracy and reduced runtime by 80% through parallel computation and workflow optimization.",
      tech: ["Python","OpenCV","NumPy","SciPy","PyQt","Multithreading","Data Automation","Scientific Computing"],
      link: "#",
      github: "https://github.com/erflam/maxiMiZe"
    },
    {
      title: "Full-Stack Analytics System",
      description: "Developed a Rust + Next.js + MySQL analytics system aggregating real-time sales and marketing data. Built automated pipelines to replace manual reporting and collaborated with stakeholders to align technical goals with business needs.",
      tech: ["Rust","Next.js","Tailwind CSS","MySQL","Full-Stack Development","Data Automation","Agile Development"],
      link: "#",
      github: "https://github.com/yashnaray/Triple-Atom"
    },
    {
      title: "Stock Price Predictor",
      description: "Built a TensorFlow-based forecasting tool for financial time-series data. Engineered features for improved model accuracy and created interactive dashboards to visualize stock trends and simulate investment outcomes.",
      tech: ["TensorFlow","Python","MarketStack API","Data Visualization","Machine Learning","Time-Series Forecasting"],
      link: "#",
      github: "https://github.com/yashnaray/COP3530-Project-3"
    },
    {
      title: "LORA PCB Tester",
      description: "Led a hackathon team to design a validation system for LORA Radio PCBs used in train safety. Integrated LLM-based schematic analysis with automated report generation in multiple formats and database storage for test results.",
      tech: ["Python","LLM Integration","Pinecone DB","Systems Design","Automation","Hardware Validation"],
      link: "#",
      github: "https://github.com/yashnaray/COP3530-Project-3"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#B77466] tracking-tight">
          My Projects
        </h1>
        <p className="text-[#957C62] text-lg max-w-2xl mx-auto">
          A collection of applications and tools I've built and worked on.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E2B59A]/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-[#B77466] mb-3 text-center">
              {project.title}
            </h3>
            <p className="text-[#957C62] mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-[#FFE1AF]/40 text-[#957C62] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href={project.link}
                className="px-4 py-2 bg-[#B77466] text-[#FFE1AF] rounded-lg hover:bg-[#957C62] transition-colors font-medium"
              >
                View Project
              </a>
              <a 
                href={project.github}
                className="px-4 py-2 border border-[#B77466] text-[#B77466] rounded-lg hover:bg-[#B77466] hover:text-[#FFE1AF] transition-colors font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-[#957C62] mb-4">
          More of my work:
        </p>
        <a 
          href="https://github.com/yashnaray" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B77466] to-[#957C62] text-[#FFE1AF] rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
        >
          Visit My GitHub
        </a>
      </div>
    </section>
  )
}