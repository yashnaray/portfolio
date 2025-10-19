import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group block bg-white/40 hover:bg-[#FFE1AF]/30 rounded-xl p-4 border border-[#E2B59A]/20 transition-all duration-300 hover:shadow-md"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <p className="text-[#957C62] text-sm font-medium w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-[#B77466] group-hover:text-[#957C62] font-medium tracking-tight transition-colors">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
