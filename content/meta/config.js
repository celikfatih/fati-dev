const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Fatih Celik",
  authorTwitterAccount: "fatidev",
  // info
  infoTitle: "Fatih Celik",
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
