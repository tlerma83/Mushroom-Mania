"use strict";

angular.module("MushApp")
.factory("mushFactory", function ($http) {
    let getMushrooms = function() {
        return $http({
        method: "GET",
        url: "https://mushrooms-e539b.firebaseio.com/mushrooms.json"

        });
    };
    return {getMushrooms};
});
