// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('scrumCtrl', function($scope, $ionicModal) {

  $scope.todoItems = [];

  $ionicModal.fromTemplateUrl('newTodo.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

  $scope.newTodo = function() {
    $scope.openModal();
  };

  // Called when the form is submitted
  $scope.createTodo = function(todo) {
    $scope.todoItems.push({
      title: todo.title,
      description: todo.description,
      date: todo.date,
      priority: todo.priority
    });

    console.log(todo);
    console.log($scope.todoItems);

    $scope.modal.hide();
    todo.title = "";
    todo.description = "";
    todo.date = "";
    todo.priority = "";
  };

  $scope.todoItems = [
    { title: "Order cleats", priority: "low" },
    { title: "Get printer paper", priority: "low" },
    { title: "Fix lamp", priority: "medium" },
    { title: "Finals", priority: "high" }
  ];

  $scope.inprogressItems = [
    { title: "CMSC436 final project", priority: "high" },
    { title: "498 lab7", priority: "medium" },
    { title: "Pantheon essay", priority: "medium" }
  ];

  $scope.doneItems = [
    { title: "498 lab6", priority: "medium" },
    { title: "498 lab5", priority: "low" },
    { title: "Paperwork", priority: "high" }
  ];
  
})

.controller('todoController', function($scope) {
  $scope.close = function() {
    $scope.modal.hide();
  }
});