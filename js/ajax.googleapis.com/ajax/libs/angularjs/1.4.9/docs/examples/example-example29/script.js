<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example31</title>
  

  <script src="../../../angular.min.js"></script>
  <script src="script.js"></script>
  

  
</head>
<body ng-app="myStatefulFilterApp">
  <div ng-controller="MyController">
  Input: <input ng-model="greeting" type="text"><br>
  Decoration: <input ng-model="decoration.symbol" type="text"><br>
  No filter: {{greeting}}<br>
  Decorated: {{greeting | decorate}}<br>
</div>
</body>
</html>