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
          todoEntries: [],
          focusTodoEntry: true
        };
        $scope.localFunctions = {};
        $scope.selectionData = {
          degreesOfUrgency: [
            {id: 0, title: 'none', class: 'default'},
            {id: 1, title: 'low', class: 'success'},
            {id: 2, title: 'medium', class: 'info'},
            {id: 3, title: 'urgent', class: 'danger'}
          ]
        };
        $scope.filterData = {
          tags: []
        };

        /**
         * FUNCTIONS
         **/
        $scope.localFunctions.setFilterTags = function(entries) {
          $scope.filterData.tags = [];
          _.each(entries,function(entry) {
            if(typeof entry.description == 'string') {
              var hashArr = entry.description.match(/(@|#)(\w+)/g);
              if(Array.isArray(hashArr)) {
                $scope.filterData.tags = _.union($scope.filterData.tags,hashArr);
              }
            }
          });
        };

        $scope.localFunctions.loadTodoList = function() {
          TodoEntry.all().then(function(entries) {
            $scope.localData.todoEntries = entries;
            $scope.localFunctions.setFilterTags(entries);
          })
        };

        $scope.localFunctions.resetTodoEntry = function() {
          $scope.localData.newEntry = {
            urgency: 0
          };
          $scope.localData.focusTodoEntry = true;

        };

        $scope.localFunctions.saveTodoEntry = function(todoEntry) {
          TodoEntry.save(todoEntry).then(function(entries) {
            $scope.localData.todoEntries = entries;
            $scope.localFunctions.setFilterTags(entries);
            toastr.success('todo entry saved','success');
          },function(error) {
            toastr.error(error,"error");
          }).finally(function() {
            $scope.localFunctions.resetTodoEntry();
          });
        };

        $scope.localFunctions.removeTodoEntry = function(todoEntry) {
          TodoEntry.remove(todoEntry).then(function(entries) {
            $scope.localData.todoEntries = entries;
            $scope.localFunctions.setFilterTags(entries);
            if($scope.localData.newEntry.id == todoEntry.id) {
              $scope.localData.newEntry = {};
            }
            toastr.success('todo entry removed','success');
          },function(error) {
            toastr.error(error,"error");
          }).finally(function() {
            $scope.localData.focusTodoEntry = true;
          });
        };

        $scope.localFunctions.editTodoEntry = function(todoEntry) {
          $scope.localData.newEntry = angular.copy(todoEntry);
          $scope.localData.focusTodoEntry = true;
        };

        $scope.localFunctions.cancelTodoEntry = function() {
          $scope.localFunctions.resetTodoEntry();
        };

        $scope.localFunctions.switchTodoCompletion = function(entry,completion) {
          entry.isComplete = !entry.isComplete;
          $scope.localFunctions.saveTodoEntry(entry);
        };

        /**
         * INITIALIZATION
         **/
        $scope.localFunctions.loadTodoList();
        $scope.localFunctions.resetTodoEntry();
      }]);
