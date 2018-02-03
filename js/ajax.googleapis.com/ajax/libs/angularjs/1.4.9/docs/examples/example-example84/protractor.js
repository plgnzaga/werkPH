<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example86-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>
  

  <script type="text/javascript">
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
  </script>
</head>
<body ng-app="inputExample">
  <script>
 angular.module('inputExample', [])
   .controller('ExampleController', ['$scope', function($scope) {
     $scope.val = '1';
   }]);
</script>
<style>
  .my-input {
    transition:all linear 0.5s;
    background: transparent;
  }
  .my-input.ng-invalid {
    color:white;
    background: red;
  }
</style>
<p id="inputDescription">
 Update input to see transitions when valid/invalid.
 Integer is a valid value.
</p>
<form name="testForm" ng-controller="ExampleController">
  <input ng-model="val" ng-pattern="/^\d+$/" name="anim" class="my-input"
         aria-describedby="inputDescription" />
</form>
</body>
</html>