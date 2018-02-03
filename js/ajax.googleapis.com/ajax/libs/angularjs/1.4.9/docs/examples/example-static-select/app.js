<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-time-input-directive-debug</title>
  

  <script src="../../../angular.js"></script>
  

  
</head>
<body ng-app="timeExample">
  <script>
 angular.module('timeExample', [])
   .controller('DateController', ['$scope', function($scope) {
     $scope.example = {
       value: new Date(1970, 0, 1, 14, 57, 0)
     };
   }]);
</script>
<form name="myForm" ng-controller="DateController as dateCtrl">
   <label for="exampleInput">Pick a between 8am and 5pm:</label>
   <input type="time" id="exampleInput" name="input" ng-model="example.value"
       placeholder="HH:mm:ss" min="08:00:00" max="17:00:00" required />
   <div role="alert">
     <span class="error" ng-show="myForm.input.$error.required">
         Required!</span>
     <span class="error" ng-show="myForm.input.$error.time">
         Not a valid date!</span>
   </div>
   <tt>value = {{example.value | date: "HH:mm:ss"}}</tt><br/>
   <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
   <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
</form>
</body>
</html>