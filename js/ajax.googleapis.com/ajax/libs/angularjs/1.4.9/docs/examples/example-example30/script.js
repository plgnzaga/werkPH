<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example33</title>
  

  <script src="../../../angular.min.js"></script>
  

  
</head>
<body ng-app="formExample">
  <div ng-controller="ExampleController">
  <form novalidate class="css-form">
    Name: <input type="text" ng-model="user.name" required /><br />
    E-mail: <input type="email" ng-model="user.email" required /><br />
    Gender: <input type="radio" ng-model="user.gender" value="male" />male
    <input type="radio" ng-model="user.gender" value="female" />female<br />
    <input type="button" ng-click="reset()" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>

<style type="text/css">
  .css-form input.ng-invalid.ng-touched {
    background-color: #FA787E;
  }

  .css-form input.ng-valid.ng-touched {
    background-color: #78FA89;
  }
</style>

<script>
  angular.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
</script>
</body>
</html>