function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16 mt-16">
      <div className="border-t border-[#E2B59A]/30 pt-8">
        <ul className="font-sm flex flex-col space-x-0 space-y-2 text-[#957C62] md:flex-row md:space-x-6 md:space-y-0">
          <li>
            <a
              className="flex items-center transition-all hover:text-[#B77466]"
              rel="noopener noreferrer"
              target="_blank"
              href="/rss"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">rss</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-[#B77466]"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/YashNarayan-thefirst"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-[#B77466]"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/yash-narayan-221290271/"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-[#B77466]"
              href="mailto:yash25.narayan@gmail.com"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">contact</p>
            </a>
          </li>
        </ul>
        <p className="mt-6 text-[#957C62] text-sm">
          © 2025 Yash Narayan. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
