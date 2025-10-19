export const baseUrl = 'https://yashnarayan-thefirst.github.io/portfolio'

export default async function sitemap() {
  let routes = ['', '/projects', '/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
