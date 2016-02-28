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
$(".getCityName > a").bind("click",function(event){
  console.log($(".getCityName > a"))
  e.preventDefault();
  event.stopPropagation();
  var docment = $("#page2");
  var scope = angular.element(docment).scope();
  var city = event.target.innerHTML;
  addCitys(scope.citys,city);
  scope.$apply()
  $("body").attr("class","activeL");
})
$(".remove").bind();
function addCitys(arr,value){
	var len = arr.length;
	for(var i=0; i<len; i++){
		if(arr.InDexOf(value)){arr.push(value)};
		
	}
}