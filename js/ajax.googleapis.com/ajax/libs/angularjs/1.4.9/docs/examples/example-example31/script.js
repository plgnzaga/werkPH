<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example34-debug</title>
  

  <script src="../../../angular.js"></script>
  <script src="script.js"></script>
  

  
</head>
<body ng-app="formExample">
  <div ng-controller="ExampleController">
  <form name="form" class="css-form" novalidate>
    Name:
    <input type="text" ng-model="user.name" name="uName" required="" />
    <br />
    <div ng-show="form.$submitted || form.uName.$touched">
      <div ng-show="form.uName.$error.required">Tell us your name.</div>
    </div>

    E-mail:
    <input type="email" ng-model="user.email" name="uEmail" required="" />
    <br />
    <div ng-show="form.$submitted || form.uEmail.$touched">
      <span ng-show="form.uEmail.$error.required">Tell us your email.</span>
      <span ng-show="form.uEmail.$error.email">This is not a valid email.</span>
    </div>

    Gender:
    <input type="radio" ng-model="user.gender" value="male" />male
    <input type="radio" ng-model="user.gender" value="female" />female
    <br />
    <input type="checkbox" ng-model="user.agree" name="userAgree" required="" />

    I agree:
    <input ng-show="user.agree" type="text" ng-model="user.agreeSign" required="" />
    <br />
    <div ng-show="form.$submitted || form.userAgree.$touched">
      <div ng-show="!user.agree || !user.agreeSign">Please agree and sign.</div>
    </div>

    <input type="button" ng-click="reset(form)" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>
</body>
</html>