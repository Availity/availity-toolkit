'use strict';

require('./service');

module.exports = {
  TEMPLATES: {
    NOTIFICATION: require('./templates/notification.html'),
    PAGE: require('./templates/registration.html'),
    NOTICE: require('./templates/notice.html')
  }
};
