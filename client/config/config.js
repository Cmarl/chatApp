'use strict';

angular.module('chat')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('chat', {url: '/chat', templateUrl: '/views/chat/chat.html', abstract: true})
  .state('chat.show', {url: '/{chatId}', templateUrl: '/views/chat/chat-show.html', controller: 'ChatShowCtrl'})
  .state('chat.menu', {url: '', templateUrl: '/views/chat/chat-menu.html', controller: 'ChatMenuCtrl'});
});
