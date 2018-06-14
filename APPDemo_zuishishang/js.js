// JavaScript Document
//尚装页搜索栏

var osearch = document.getElementById('head_search');
var otxt = osearch.getElementsByTagName('input');

otxt.onfocus = function(){
	if(otxt.value == '请输入您要查找的服装关键词'){	
		otxt.value = '';
		otxt.style.color = '#fff';
	}
}



