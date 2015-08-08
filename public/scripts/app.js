'use strict'

var app = angular.module('app', ['ngRoute'])

.config(function ($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
			controller: 'homeController',
		})
		.when('/me', {
			templateUrl: './views/me.html',
			controller: 'meController',
		})
		.when('/skills', {
			templateUrl: './views/skills.html',
			controller: 'skillsController',
		})
		.otherwise('/');

});
