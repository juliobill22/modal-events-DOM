/* 
    Created on : Apr 23, 2018, 4:43:02 PM
    Author     : julioenglish
*/


function my_Alert(string){
   var elMaster = document.createElement('div'); 
   elMaster.setAttribute('id','id-msg-master');
   
   var el = document.createElement('div');
   el.setAttribute('id','id-msg');   
   elMaster.appendChild(el);
   
   var btn = document.createElement('button');
   btn.onclick = function(){
       document.getElementsByTagName('body')[0].removeChild(elMaster);
   };
   btn.setAttribute('id','id-btn-msg');
   btn.innerHTML = 'OK';
   el.innerHTML = string;
   el.appendChild(btn);
   document.getElementsByTagName('body')[0].appendChild(elMaster);
};


function queryCommandEnabled_click() {
    my_Alert('queryCommandEnabled_click');
}
function queryCommandEnabled_mousemove() {
    my_Alert('queryCommandEnabled_mousemove');
}
function queryCommandEnabled_keypress() {
    my_Alert('queryCommandEnabled_keypress');
}
function queryCommandIndeterm_click() {
    my_Alert('queryCommandIndeterm_click');
}
function queryCommandState_click() {
    my_Alert('queryCommandState_click');
}
function queryCommandSupported_click() {
    my_Alert('queryCommandSupported_click');
}
function queryCommandValue_click() {
    my_Alert('queryCommandValue_click');
}
function querySelector_click() {
    my_Alert('querySelector_click');
}
function querySelectorAll_click() {
    my_Alert('querySelectorAll_click');
}