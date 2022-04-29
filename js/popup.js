$(document).ready(function(){
	var query = { active: true, currentWindow: true };
	chrome.tabs.query(query, function(tabs){
		var currentTab = tabs[0];
		if(currentTab.url.match(/facebook.com\/messages/i)){
			$("#aa").show();
		}
		else {
			$("#bb").show();
		}
	});
})
var app = angular.module("myapp",[]);
var headers = {"content-type":"application/x-www-form-urlencoded"};
app.controller("ctrl",function($scope,$http,$q,$filter){
	var s = $scope;
	if(!localStorage.trial){
		s.license = true;
	}
	s.delete = function(){
		chrome.tabs.executeScript( null, {
			file:"js/jquery.min.js"},
			function(results){
				chrome.tabs.executeScript(null,{
					file:"js/fb.js"
				},function(){
					window.close();
					localStorage.trial = "false";
				})
			});
		}
		s.archive = function(){
			chrome.tabs.executeScript( null, {
				file:"js/jquery.min.js"},
				function(results){
					chrome.tabs.executeScript(null,{
						file:"js/archive.js"
					},function(){
						window.close();
						localStorage.trial = "false";
					})
				})
			}
		});
