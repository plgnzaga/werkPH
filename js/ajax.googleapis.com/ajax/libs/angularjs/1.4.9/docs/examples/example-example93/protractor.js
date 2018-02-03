<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example95-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  

  
</head>
<body ng-app="transcludeExample">
  <script>
  angular.module('transcludeExample', [])
   .directive('pane', function(){
      return {
        restrict: 'E',
        transclude: true,
        scope: { title:'@' },
        template: '<div style="border: 1px solid black;">' +
                    '<div style="background-color: gray">{{title}}</div>' +
                    '<ng-transclude></ng-transclude>' +
                  '</div>'
      };
  })
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.title = 'Lorem Ipsum';
    $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
  }]);
</script>
<div ng-controller="ExampleController">
  <input ng-model="title" aria-label="title"> <br/>
  <textarea ng-model="text" aria-label="text"></textarea> <br/>
  <pane title="{{title}}">{{text}}</pane>
</div>
</body>
</html>