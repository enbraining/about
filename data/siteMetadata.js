/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Next.js Starter Blog',
  author: 'enbraining',
  headerTitle: 'EnbrainingException',
  description: 'this is a blog',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://enbraining.com',
  siteRepo: 'https://github.com/enbraining/about',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'me@xolving.com',
  github: 'https://github.com/enbraining',
  twitter: 'https://twitter.com/Twitter/enbraining',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com/@enbraining',
  linkedin: 'https://www.linkedin.com/in/enbraining',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
