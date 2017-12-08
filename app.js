(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	$scope.CheckingItems = function(){
		 var stringToSplit = $scope.name;
		 var y = typeof stringToSplit; 
		 
		 if (y === 'undefined'){
		 	return $scope.result = ("Please enter Data first");
		 }
		else if (y === 'string'){
			var arrayOfStrings = stringToSplit.split(",");	
			var x = arrayOfStrings.length;
			if (x <= 3){
	        	return $scope.result=("Enjoy");
			}
	        else if (x > 3){
	        	return $scope.result=("Too much");
	        }
		}
	};

}

} ());