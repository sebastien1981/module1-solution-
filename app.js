(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	$scope.CheckingItems = function(){
		 //var separator = ",";
		 var stringToSplit = $scope.name;
		 if (stringToSplit == "")
		 	console.log("Please enter Data first");
		
		else if (stringToSplit != "")
			var arrayOfStrings = stringToSplit.split(",");
			var x = arrayOfStrings.length;
		

	        if (x <= 3)
	        	console.log("Enjoy");
	        else if (x > 3)
	        	console.log("Too much");

	};

}

} ());