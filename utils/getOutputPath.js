const getOutputPath = (url, resourcePath) => {
  let folder;

  if (resourcePath.search('node_modules/@fortawesome/fontawesome-free') > 0) {
    folder = `images/fontawesome-free/${url}`;
  } else if (resourcePath.search('node_modules/ionicons') > 0) {
    folder = `images/ionicons/${url}`;
  } else {
    folder = `images/${url}`;
  }

  return folder;
};

module.exports = getOutputPath;
