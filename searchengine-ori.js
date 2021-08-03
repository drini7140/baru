(function(){
let string 		= window.location.search;
let id 			= string.split('=')[1]
let affshortkey = '_9xB2Uw';
let params 		= (function(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;})();
let crawl 		= /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);

if(id) {
 if(crawl) location.replace('https://aeproduct.com/amp/'+id+'.html');
 else location.href = ''https://aeproduct.com/shop.php?q='+id+'&lang=en&dp=static-cf';
 }
 })();