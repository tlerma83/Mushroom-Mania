"use strict";


angular.module("MushApp", ["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/mushroomMain.html",
        controller: "muchCtrl"
    })
    .otherwise("/");
});
