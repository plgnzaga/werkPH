<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example88</title>
  

  <script src="../../../angular.min.js"></script>
  

  
</head>
<body ng-app="selectExample">
  <script>
angular.module('selectExample', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light', notAnOption: true},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark', notAnOption: true},
      {name:'yellow', shade:'light', notAnOption: false}
    ];
    $scope.myColor = $scope.colors[2]; // red
  }]);
</script>
<div ng-controller="ExampleController">
  <ul>
    <li ng-repeat="color in colors">
      <label>Name: <input ng-model="color.name"></label>
      <label><input type="checkbox" ng-model="color.notAnOption"> Disabled?</label>
      <button ng-click="colors.splice($index, 1)" aria-label="Remove">X</button>
    </li>
    <li>
      <button ng-click="colors.push({})">add</button>
    </li>
  </ul>
  <hr/>
  <label>Color (null not allowed):
    <select ng-model="myColor" ng-options="color.name for color in colors"></select>
  </label><br/>
  <label>Color (null allowed):
  <span  class="nullable">
    <select ng-model="myColor" ng-options="color.name for color in colors">
      <option value="">-- choose color --</option>
    </select>
  </span></label><br/>

  <label>Color grouped by shade:
    <select ng-model="myColor" ng-options="color.name group by color.shade for color in colors">
    </select>
  </label><br/>

  <label>Color grouped by shade, with some disabled:
    <select ng-model="myColor"
          ng-options="color.name group by color.shade disable when color.notAnOption for color in colors">
    </select>
  </label><br/>



  Select <button ng-click="myColor = { name:'not in list', shade: 'other' }">bogus</button>.
  <br/>
  <hr/>
  Currently selected: {{ {selected_color:myColor} }}
  <div style="border:solid 1px black; height:20px"
       ng-style="{'background-color':myColor.name}">
  </div>
</div>
</body>
</html>