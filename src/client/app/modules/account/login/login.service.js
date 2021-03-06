(function() {
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http'];

    /* @ngInject */
    function LoginService($http) {

        var service = {
            login: login,
            logout: logout
        };

        return service;

        function login(user, callback) {
          $http.post('/token', {email: user.email, password: user.password})
            .success(function(response) {

              if(response.token) {
                var token = 'JWT ' + response.token;
                localStorage.currentUser = {email: user.email, token: response.token};
                $http.defaults.headers.common.Authorization =  response.token;
                localStorage.setItem('token',token);

                callback(true);
              } else {
                callback(false);
              }
            })
        }

        function logout() {
          delete localStorage.currentUser;
          $http.defaults.headers.common.Authorization = '';
        }

    }
})();
