export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Weather App'
  }

  return titleMap[path]
}
