import { getStyles } from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head(state) {
  const { store = {} } = state
  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${linkTag()}
      <link rel="icon" href="/_public/favicon.svg">
      <link rel = "stylesheet" href= "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css">
      <link rel = "stylesheet" href="/_public/styles.css">
      <meta name="description" content="A weather app built on the enhance.dev framework.">
    </head>
`
}
