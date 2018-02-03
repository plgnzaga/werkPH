<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example108-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  

  
</head>
<body ng-app="">
  <div ng-init="username='A user'">
  <p ng-init="apptitle='Escaping demo'">{{apptitle}}: \{\{ username = "defaced value"; \}\}
    </p>
  <p><strong>{{username}}</strong> attempts to inject code which will deface the
    application, but fails to accomplish their task, because the server has correctly
    escaped the interpolation start/end markers with REVERSE SOLIDUS U+005C (backslash)
    characters.</p>
  <p>Instead, the result of the attempted script injection is visible, and can be removed
    from the database by an administrator.</p>
</div>
</body>
</html>