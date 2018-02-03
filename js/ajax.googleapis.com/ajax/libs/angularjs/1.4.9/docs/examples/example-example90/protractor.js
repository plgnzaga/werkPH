<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example92-jquery</title>
  <link href="glyphicons.css" rel="stylesheet" type="text/css">
  <link href="animations.css" rel="stylesheet" type="text/css">
  

  <script src="../../components/jquery-2.1.1/jquery.js"></script>
  <script src="../../../angular.js"></script>
  <script src="../../../angular-animate.js"></script>
  

  
</head>
<body ng-app="ngAnimate">
  Click me: <input type="checkbox" ng-model="checked" aria-label="Toggle ngShow"><br/>
<div>
  Show:
  <div class="check-element animate-hide" ng-show="checked">
    <span class="glyphicon glyphicon-thumbs-up"></span> I show up when your checkbox is checked.
  </div>
</div>
<div>
  Hide:
  <div class="check-element animate-hide" ng-hide="checked">
    <span class="glyphicon glyphicon-thumbs-down"></span> I hide when your checkbox is checked.
  </div>
</div>
</body>
</html>