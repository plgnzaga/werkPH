<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example30</title>
  

  <script src="../../../angular.min.js"></script>
  <script src="script.js"></script>
  

  
</head>
<body ng-app="myReverseFilterApp">
  <div ng-controller="MyController">
  <input ng-model="greeting" type="text"><br>
  No filter: {{greeting}}<br>
  Reverse: {{greeting|reverse}}<br>
  Reverse + uppercase: {{greeting|reverse:true}}<br>
</div>
</body>
</html>