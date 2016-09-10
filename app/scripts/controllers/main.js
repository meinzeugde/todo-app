'use strict';

angular.module('todoApp')
  .controller('MainCtrl',
    ['$scope', 'toastr', 'TodoEntry',
      function ($scope, toastr, TodoEntry) {
        /**
         * DEFINE SCOPES
         **/
        $scope.localData = {
          newEntry: {},
          todoEntries: []
        };
        $scope.localFunctions = {};

        /**
         * FUNCTIONS
         **/
        $scope.localFunctions.loadTodoList = function() {
          TodoEntry.all().then(function(entries) {
            $scope.localData.todoEntries = entries;
          })
        };

        $scope.localFunctions.saveTodoEntry = function(todoEntry) {
          TodoEntry.save(todoEntry).then(function(entries) {
            $scope.localData.newEntry = {};
            $scope.localData.todoEntries = entries;
            toastr.success('todo entry saved','success');
          },function(error) {
            toastr.error(error,"error");
          });
        };

        $scope.localFunctions.removeTodoEntry = function(todoEntry) {
          TodoEntry.remove(todoEntry).then(function(entries) {
            $scope.localData.todoEntries = entries;
            if($scope.localData.newEntry.id == todoEntry.id) $scope.localData.newEntry = {};
            toastr.success('todo entry removed','success');
          },function(error) {
            toastr.error(error,"error");
          });
        };

        $scope.localFunctions.editTodoEntry = function(todoEntry) {
          $scope.localData.newEntry = angular.copy(todoEntry);
        };

        /**
         * INITIALIZATION
         **/
         $scope.localFunctions.loadTodoList();
      }]);
