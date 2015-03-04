'use strict';

require('jquery');
require('angular');
require('availity-angular');

var app = require('./module');
var registration = require('./registration/index');

app.addModules([
  'ui.router',
  'availity',
  'availity.ui',
  'availity.ui.templates'
]);

app.controller('PageController', function($scope, AvModal) {

  var reg = {
    name: null,
    selectedState: null,
    date: null,
    states: [
      { id: 'AL', name: 'Alabama' },
      { id: 'CA', name: 'California' },
      { id: 'NM', name: 'New Mexico' },
      { id: 'TX', name: 'Texas' },
      { id: 'WY', name: 'Wyoming' }
    ],
    onShow: function() {
      new AvModal({
        show: true,
        scope: $scope,
        template: registration.TEMPLATES.NOTIFICATION
      });
    }
  };

  reg.selectedState = reg.states[0];

  $scope.reg = reg;

});

app.config(function($stateProvider, $urlRouterProvider, avValProvider) {

  avValProvider.addRules({
    'name': {
      'required': {
        'message': 'Your name is required.'
      },
       'size': {
        'min': 2,
        'max': 10,
        'message': 'Your name must be between 2 and 10 characters.'
      }
    },
    'date': {
      'required': {
        'message': 'Date of service is required.'
      },
      'dateFormat': {
        'format': 'MM/DD/YYYY',
        'message': 'Format needs to be MM/DD/YYYY'
      }
    }
  });

  $stateProvider
    .state('registration', {
      url: '/registration',
      template: registration.TEMPLATES.PAGE,
      controller: 'PageController'
    });

    $urlRouterProvider.otherwise('/registration');
});




