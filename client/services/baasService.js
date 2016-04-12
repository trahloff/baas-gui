
// this is just for the lulz
var app = angular.module('baasServices', []);

app.service('baasService', function($http) {

    this.create = function(results) {
        $http.post('https://api.booleans.io/').success(function(response) {
            results(response);
        });
    }

    this.get = function(id, results) {
        $http.get('https://api.booleans.io/' + id).success(function(response) {
            results(response);
        });
    }

    this.delete = function(id, results) {
        $http.delete('https://api.booleans.io/' + id).success(function(response) {
            results(response);
        });
    }

    this.put = function(id, value ,results) {
            $http.put('https://api.booleans.io/' + id,null,{val:value}).success(function(response) {
                results(response);
            });
    }

    this.toggle = function(id, results) {
        $http.get('https://api.booleans.io/' + id).success(function(response) {
          var value = response.val ? false:true;
            $http.put('https://api.booleans.io/' + id,null,{val:value}).success(function(response) {
                results(response);
            });
        });
    }

});
