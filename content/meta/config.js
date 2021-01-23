const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "fati.dev | Personal Blog Site", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
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
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
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
    { name: "facebook", url: "https://facebook.com/fatidev" }
  ]
};
