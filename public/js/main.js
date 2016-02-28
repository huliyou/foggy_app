  $("#btn-left").on("click",function(){
 $("body").attr("class","activeL");
 $(".am-btn").attr("class")
})
  $("#btn-right").on("click",function(){
 $("body").attr("class","activeR");
 $(".am-btn").attr("class")
})
  $("#btn-addC").on("click",function(){
 $("body").attr("class","activeA");
 $(".am-btn").attr("class")
})
  $("#btn-right2").on("click",function(){
 $("body").attr("class","activeL");
 $(".am-btn").attr("class")
})
$(".getCityName").find("a").bind("click",function(event){
  docment = $("#page2");
  var scope = angular.element(docment).scope();
  var city = event.target.innerHTML;
  scope.citys.push(city);
  console.log(scope.citys);
  scope.$apply()
  $("body").attr("class","activeL");
})