<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example107-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <script src="script.js"></script>
  

  
</head>
<body ng-app="httpExample">
  <div ng-controller="FetchController">
  <select ng-model="method" aria-label="Request method">
    <option>GET</option>
    <option>JSONP</option>
  </select>
  <input type="text" ng-model="url" size="80" aria-label="URL" />
  <button id="fetchbtn" ng-click="fetch()">fetch</button><br>
  <button id="samplegetbtn" ng-click="updateModel('GET', 'http-hello.html')">Sample GET</button>
  <button id="samplejsonpbtn"
    ng-click="updateModel('JSONP',
                  'https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')">
    Sample JSONP
  </button>
  <button id="invalidjsonpbtn"
    ng-click="updateModel('JSONP', 'https://angularjs.org/doesntexist&callback=JSON_CALLBACK')">
      Invalid JSONP
    </button>
  <pre>http status code: {{status}}</pre>
  <pre>http response data: {{data}}</pre>
</div>
</body>
</html>