(function(){
var top=document.querySelector('.top'),btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
function setOpen(o,focusBtn){if(!top||!btn)return;top.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false');btn.textContent=o?'Close':'Menu';if(!o&&focusBtn)btn.focus()}
if(btn){btn.addEventListener('click',function(){setOpen(!top.classList.contains('open'))})}
document.addEventListener('keydown',function(e){if((e.key==='Escape'||e.key==='Esc')&&top&&top.classList.contains('open')){setOpen(false,true)}});
document.addEventListener('click',function(e){if(top&&top.classList.contains('open')&&!top.contains(e.target)){setOpen(false)}});
if(nav){nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)})}
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
