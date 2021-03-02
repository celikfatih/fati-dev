const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "fati.dev | Personal Blog Site", // <title>
  shortSiteTitle: "Fatih's Personal Blog", // <title> ending for posts and pages
  siteDescription: "Fatih's Personal Blog",
  siteUrl: "https://fati.dev",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "fati",
  authorTwitterAccount: "fatidev",
  // info
  infoTitle: "fati",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Personal Blog - a blog starter for GatsbyJS",
  manifestShortName: "Personal Blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "fati.dev@protonmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/fatidev" },
    { name: "twitter", url: "https://twitter.com/fatidev" },
  ]
};
