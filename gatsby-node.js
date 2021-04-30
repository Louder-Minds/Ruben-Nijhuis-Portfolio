const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allContentfulProject {
                        edges {
                            node {
                                title
                            }
                        }
                    }
                    allContentfulJournal {
                        edges {
                            node {
                                title
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }
                result.data.allContentfulProject.edges.forEach(({ node }) => {
                    const title = node.title.toLowerCase().replace(/\s/g, '-');
                    createPage({
                        path: `/projects/${title}`,
                        component: path.resolve('src/templates/project.js'),
                        context: {
                            slug: node.title,
                        },
                    });
                });
                result.data.allContentfulJournal.edges.forEach(({ node }) => {
                    const title = node.title.toLowerCase().replace(/\s/g, '-');
                    createPage({
                        path: `/journal/${title}`,
                        component: path.resolve(
                            'src/templates/journal-entry.js'
                        ),
                        context: {
                            slug: node.title,
                        },
                    });
                });
                return;
            })
        );
    });
};

exports.onCreateWebpackConfig = ({
    stage,
    getConfig,
    rules,
    loaders,
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            plugins: [
                new DirectoryNamedWebpackPlugin({
                    exclude: /node_modules/,
                }),
            ],
        },
    });
};
