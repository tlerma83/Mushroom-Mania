"use strict";

angular.module("MushApp")
.controller("muchCtrl", function($scope, $http, mushFactory){

    mushFactory.getMushrooms().then(function dataSuccess(response){
        console.log("what is my data?", response.data);
        let mushDataArray = [];

        for (let items in response.data) {
            console.log(response.data[items]);
            mushDataArray.push(response.data[items]);
        }
        $scope.mushrooms = mushDataArray;
    });

});
