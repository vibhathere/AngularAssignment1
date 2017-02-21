(function(){
    'use strict';
    angular.module("LunchCheck",[])
            .controller("LunchCheckController",LunchCheckControllerFunc);
            LunchCheckControllerFunc.$inject = ["$scope"];
            
            function LunchCheckControllerFunc($scope)  {
            $scope.list = "";
            $scope.checkItemCount = function(list){
                if(list == ""){
                    $scope.message = "Please enter data first!";
                    $scope.msgColor ={
                        "color" : "red"
                    }
                    $scope.textboxStyle ={
                        "border-color" : "red"
                    }
                }
                else{
                    //Removing spaces. I do NOT consider and empty item, i.e., , , as an item towards to the count.
                    var trimList = list.replace(/\s/g,''); 
                    var listAry = trimList.split(',');
                    var newArray = removeEmptyValues(listAry);
                    console.log(newArray.length);
                    if(listAry.length <= 3){
                         $scope.message = "Enjoy!";
                         $scope.msgColor ={
                        "color" : "green"
                        }
                        $scope.textboxStyle ={
                        "border-color" : "green"
                        }
                     }
                    else if(listAry.length > 3){
                         $scope.message = "Too Much!";
                         $scope.msgColor ={
                        "color" : "green"
                        }
                        $scope.textboxStyle ={
                        "border-color" : "green"
                        }
                    }
                }
            };
            function removeEmptyValues(listAry){
                var newInput = [];
                angular.forEach(listAry, function(item) {
                if (item !== ""){
                    newInput.push(item);
                }
                });
                return newInput;
            }
            }           
})();
