const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityCourses {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const courses = result.data.allSanityCourses.edges;
  // We'll call `createPage` for each result
  courses.forEach(({ node }, index) => {
    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: `course/${node.slug.current}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/template/course.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id, slug: node.slug.current },
    });
  });
};
