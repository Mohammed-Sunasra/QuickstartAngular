// Code goes here
var app=angular.module("myApp",[]);
var MainController=function($scope,$http){
  $scope.username="Angular";
  var onRepos=function(response){
    $scope.repos=response.data;
  }
  var onUserComplete=function(response)
  {
    $scope.user=response.data;
    $http.get($scope.user.repos_url)
          .then(onRepos,onError);
  }
  var onError=function(response){
    $scope.error="COULD NOT FIND THE USER";
  }
  $scope.searchUser=function(username){
    $http.get("https://api.github.com/users/"+username)
          .then(onUserComplete,onError);
  }
$scope.repoSortOrder="-stargazers_count";
  
}


app.controller("MainController",MainController);

