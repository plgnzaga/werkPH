<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-ngrepeat-select</title>
  

  <script src="../../../angular.min.js"></script>
  <script src="app.js"></script>
  

  
</head>
<body ng-app="ngrepeatSelect">
  <div ng-controller="ExampleController">
  <form name="myForm">
    <label for="repeatSelect"> Repeat select: </label>
    <select name="repeatSelect" id="repeatSelect" ng-model="data.repeatSelect">
      <option ng-repeat="option in data.availableOptions" value="{{option.id}}">{{option.name}}</option>
    </select>
  </form>
  <hr>
  <tt>repeatSelect = {{data.repeatSelect}}</tt><br/>
</div>
</body>
</html>