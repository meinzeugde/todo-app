'use strict';

angular.module('todoApp')

  .factory('TodoEntry',
    ['$localForage','$q','appendId',
      function($localForage,$q,appendId) {
        return {
          all: function() {
            return $localForage.getItem('todoEntries').then(function(entries) {
              var dfd = $q.defer();
              if(entries == null) entries = []; //convert null to an empty array
              dfd.resolve(entries);
              return dfd.promise;
            });
          },
          save: function(entry) {
            return $localForage.getItem('todoEntries').then(function(entries) {
              var dfd = $q.defer();
              if(entries == null) entries = []; //convert null to an empty array
              var index = _.findIndex(entries,{id:entry.id});
              if(index > -1) {
                //UPDATE
                entries.splice(index,1,entry)
              } else  {
                //CREATE
                entries.push(appendId(entry));
              }

              dfd.resolve(entries);
              return dfd.promise;
            }).then(function(entries) {
              var dfd = $q.defer();
              $localForage.setItem('todoEntries',entries).then(function(persistedEntries) {
                dfd.resolve(persistedEntries)
              }).catch(function(error) {
                dfd.reject(error)
              });
              return dfd.promise;
            });
          },
          remove: function(entry) {
            return $localForage.getItem('todoEntries').then(function(entries) {
              var dfd = $q.defer();
              if(entries == null) entries = []; //convert null to an empty array
              _.remove(entries,{id:entry.id});

              dfd.resolve(entries);
              return dfd.promise;
            }).then(function(entries) {
              var dfd = $q.defer();
              $localForage.setItem('todoEntries',entries).then(function(persistedEntries) {
                dfd.resolve(persistedEntries)
              }).catch(function(error) {
                dfd.reject(error)
              });
              return dfd.promise;
            });
          }
        };
      }
    ]);
