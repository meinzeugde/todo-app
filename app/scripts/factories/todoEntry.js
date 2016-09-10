'use strict';

angular.module('todoApp')

  .factory('TodoEntry',
    ['$localForage','$q',
      function($localForage,$q) {
        return {
          all: function() {
            return $localForage.getItem('todoEntries').then(function(response) {
              var dfd = $q.defer();
              if(response == null) response = []; //convert null to an empty array
              dfd.resolve(response);
              return dfd.promise;
            });
          },
          save: function(list,entry) {
            /* todo-matteo: implement update logic */
            var newList = angular.copy(list);
            newList.push(entry);
            return $localForage.setItem('todoEntries',newList);
          }
        };
      }
    ]);
