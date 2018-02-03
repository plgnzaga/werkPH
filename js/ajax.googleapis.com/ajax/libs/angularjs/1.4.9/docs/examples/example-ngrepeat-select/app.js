<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-ngValue-directive-debug</title>
  

  <script src="../../../angular.js"></script>
  

  
</head>
<body ng-app="valueExample">
  <script>
   angular.module('valueExample', [])
     .controller('ExampleController', ['$scope', function($scope) {
       $scope.names = ['pizza', 'unicorns', 'robots'];
       $scope.my = { favorite: 'unicorns' };
     }]);
</script>
 <form ng-controller="ExampleController">
   <h2>Which is your favorite?</h2>
     <label ng-repeat="name in names" for="{{name}}">
       {{name}}
       <input type="radio"
              ng-model="my.favorite"
              ng-value="name"
              id="{{name}}"
              name="favorite">
     </label>
   <div>You chose {{my.favorite}}</div>
 </form>
</body>
</html>