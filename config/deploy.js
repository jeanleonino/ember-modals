module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-modals',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
