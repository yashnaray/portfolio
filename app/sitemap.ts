export const baseUrl = 'https://portfolioproject-6qfenrfm5-yashs-projects-bc5951f6.vercel.app'

export default async function sitemap() {
  let routes = ['', '/projects', '/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
