<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-ngModelOptions-directive-blur-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <script src="app.js"></script>
  

  
</head>
<body ng-app="optionsExample">
  <div ng-controller="ExampleController">
  <form name="userForm">
    <label>Name:
      <input type="text" name="userName"
             ng-model="user.name"
             ng-model-options="{ updateOn: 'blur' }"
             ng-keyup="cancel($event)" />
    </label><br />
    <label>Other data:
      <input type="text" ng-model="user.data" />
    </label><br />
  </form>
  <pre>user.name = <span ng-bind="user.name"></span></pre>
  <pre>user.data = <span ng-bind="user.data"></span></pre>
</div>
</body>
</html>