// 漢堡按鈕
var HamburgBtn = document.getElementById("HamburgBtn");
var showMenu = document.getElementById("showMenu");
HamburgBtn.onclick = function () {
    showMenu.style.display = "block";
}

var hrServiceBtn = document.getElementById("hrServiceBtn");
var hrService = document.getElementById("hrService");
var hrServiceList = document.getElementsByClassName("hrServiceList");
hrServiceBtn.onclick = function () {
    hrService.style.display = "block";
}
// 點下hrServiceBtn開啟 如果點下hrService則關閉 但不是hrServiceList的範圍

// 漢堡按鈕關閉
var H_close = document.getElementById("H_close");
H_close.onclick = function(){
    showMenu.style.display = "none";
}

var H_close1 = document.getElementById("H_close1");
H_close1.onclick = function(){
    hrService.style.display = "none";
}

