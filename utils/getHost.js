const ifconfig = require('os').networkInterfaces();

const getHost = () => {
  const wireless = ifconfig.wlp5s0;
  const cable = ifconfig.enp1s0f0;

  let host;
  if (cable) {
    host = cable[0].address;
  } else if (wireless) {
    host = wireless[0].address;
  } else {
    host = 'localhost';
  }

  return host;
};

module.exports = getHost;
