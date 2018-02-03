<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-number-input-directive-jquery</title>
  

  <script src="../../components/jquery-2.1.1/jquery.js"></script>
  <script src="../../../angular.js"></script>
  

  
</head>
<body ng-app="numberExample">
  <script>
  angular.module('numberExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.example = {
        value: 12
      };
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">
  <label>Number:
    <input type="number" name="input" ng-model="example.value"
           min="0" max="99" required>
 </label>
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
      Required!</span>
    <span class="error" ng-show="myForm.input.$error.number">
      Not valid number!</span>
  </div>
  <tt>value = {{example.value}}</tt><br/>
  <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
  <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
 </form>
</body>
</html>