<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example48</title>
  <link href="style.css" rel="stylesheet" type="text/css">
  

  <script src="../../../angular.min.js"></script>
  <script src="script.js"></script>
  

  
</head>
<body >
  <div ng-app="ngAppStrictDemo" ng-strict-di>
    <div ng-controller="GoodController1">
        I can add: {{a}} + {{b}} =  {{ a+b }}

        <p>This renders because the controller does not fail to
           instantiate, by using explicit annotation style (see
           script.js for details)
        </p>
    </div>

    <div ng-controller="GoodController2">
        Name: <input ng-model="name"><br />
        Hello, {{name}}!

        <p>This renders because the controller does not fail to
           instantiate, by using explicit annotation style
           (see script.js for details)
        </p>
    </div>

    <div ng-controller="BadController">
        I can add: {{a}} + {{b}} =  {{ a+b }}

        <p>The controller could not be instantiated, due to relying
           on automatic function annotations (which are disabled in
           strict mode). As such, the content of this section is not
           interpolated, and there should be an error in your web console.
        </p>
    </div>
</div>
</body>
</html>