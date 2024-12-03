module.exports=function(eleventyConfig) {
    return {
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        layouts: "_layouts",
        data: "_data",
      },
    };
}