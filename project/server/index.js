var workflow = require('availity-workflow');

module.exports.register = function(server, options, next){

  server.register({
    register: workflow.plugin()
  }, function(err){
    if(err){
      console.error('Failed to load plugin:', err);
    }else{
      next();
    }
  });
};

module.exports.register.attributes = {
  pkg : require('../../package.json')
};
