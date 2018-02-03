<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-location-html5-mode-jquery</title>
  

  <script src="../../components/jquery-2.1.1/jquery.js"></script>
  <script src="../../../angular.js"></script>
  <script src="app.js"></script>
  <script src="fakeBrowser.js"></script>
  <script src="addressBar.js"></script>
  

  
</head>
<body ng-app="html5-mode">
  <div ng-controller="LocationController">
  <div ng-address-bar></div><br><br>
  <div>
    $location.protocol() = <span ng-bind="$location.protocol()"></span> <br>
    $location.host() = <span ng-bind="$location.host()"></span> <br>
    $location.port() = <span ng-bind="$location.port()"></span> <br>
    $location.path() = <span ng-bind="$location.path()"></span> <br>
    $location.search() = <span ng-bind="$location.search()"></span> <br>
    $location.hash() = <span ng-bind="$location.hash()"></span> <br>
  </div>
  <div id="navigation">
    <a href="http://www.example.com/base/first?a=b">/base/first?a=b</a> |
    <a href="http://www.example.com/base/sec/ond?flag#hash">sec/ond?flag#hash</a> |
    <a href="/other-base/another?search">external</a>
  </div>
</div>
</body>
</html>