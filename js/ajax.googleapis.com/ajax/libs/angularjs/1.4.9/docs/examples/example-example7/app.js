<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example71-jquery</title>
  

  <script src="../../components/jquery-2.1.1/jquery.js"></script>
  <script src="../../../angular.js"></script>
  

  
</head>
<body ng-app="">
  <button ng-mouseup="count = count + 1" ng-init="count=0">
  Increment (on mouse up)
</button>
count: {{count}}
</body>
</html>