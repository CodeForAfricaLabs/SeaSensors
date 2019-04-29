exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mdbreact/,
            use: loaders.null()
          }
        ]
      }
    });
  }

  actions.setWebpackConfig({
    node: {
      fs: "empty",
      tls: "empty",
      net: "empty"
    }
  });
};
