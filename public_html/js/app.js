/* 
    Created on : Apr 23, 2018, 4:43:02 PM
    Author     : julioenglish
*/

/* global queryCommandEnabled_click, queryCommandEnabled_mousemove, queryCommandEnabled_keypress, queryCommandIndeterm_click, queryCommandState_click, queryCommandSupported_click, queryCommandValue_click, querySelector_click, querySelectorAll_click */

//buscar os elementos
var queryCommandEnabled = document.getElementById("IdqueryCommandEnabled");
var queryCommandIndeterm = document.getElementById("IdqueryCommandIndeterm");
var queryCommandState = document.getElementById("IdqueryCommandState");
var queryCommandSupported = document.getElementById("IdqueryCommandSupported");
var queryCommandValue = document.getElementById("IdqueryCommandValue");
var querySelector = document.getElementById("IdquerySelector");
var querySelectorAll = document.getElementById("IdquerySelectorAll");

//Atribuir os eventos
queryCommandEnabled.addEventListener('click', queryCommandEnabled_click);
queryCommandEnabled.addEventListener('mousemove', queryCommandEnabled_mousemove);
queryCommandEnabled.addEventListener('keypress', queryCommandEnabled_keypress);
queryCommandIndeterm.addEventListener('click', queryCommandIndeterm_click);
queryCommandState.addEventListener('click', queryCommandState_click);
queryCommandSupported.addEventListener('click', queryCommandSupported_click);
queryCommandValue.addEventListener('click', queryCommandValue_click);
querySelector.addEventListener('click', querySelector_click);
querySelectorAll.addEventListener('click', querySelectorAll_click);
