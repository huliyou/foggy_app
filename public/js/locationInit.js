var app = angular.module('myApp', []);
  app.controller('customersCtrl', function($scope, $http) {
  	  var key
      $scope.init = function(funca,funcb){
        
        funca();
      }
      $scope.getCity = function(){
        $http.jsonp("http://api.map.baidu.com/location/ip?ak=I2uiDQu3sNF53quLG2XloNPj&coor=bd09ll&callback=JSON_CALLBACK").
        success(function(data){
          var json=data['content']['address']
          var cityName = json.substr(0,2);
          $scope.citys=[cityName];
          $scope.city=cityName;
          $scope.getPm($scope.city);
        })
      }


      $scope.getPm = function(ct){
      	var cityname = {
      		city:ct,
      		token:"5j1znBVAsnSf5xQyNQyq",
 
      	}
      	
      	console.log($.param(ct,true));
        $http.jsonp("http://www.pm25.in/api/querys/pm2_5.json?&callback=JSON_CALLBACK"+$.param(cityname)).
        success(function(data){
          var aqi = data[0]['aqi'];
          var airQuality = data[0]['quality']; 
          $scope.aqi=aqi;
          $scope.airQuality=airQuality;
          console.log(data)
        }).
        error(function(error){
        	alert("超过获取次数");
        })
      }

      $scope.changeCity = function($event){
      	var now = $event.target
      	var cityname = now.innerHTML;
      	$scope.city = cityname;
      	$("body").attr("class","activeR");
      	$scope.getPm($scope.city);
      	console.log(cityname);

      }
      window.onload = $scope.init($scope.getCity,$scope.getPm);
  });