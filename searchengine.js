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
 (function(){
  let params = (function(){var p={};location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});return p;})();(/(\d+)\.html$/.exec(location.pathname)) ? /(\d+)\.html$/.exec(location.pathname)[1] : '';
  let crawl = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
  let uweee = '_9xB2Uw';
  if(params.id && !crawl) {
   location.href =  'https://aeproduct.com/shop.php?q='+id+'&lang=en&dp=static-cf';
  } else if(params.id && crawl) {
   location.replace('https://aeproduct.com/amp/'+params.id+'.html');
  } else if(params.q && !crawl) {
   location.href = 'https://s.click.aliexpress.com/deep_link.htm?aff_short_key='+uweee+'&dl_target_url=//www.aliexpress.com/af/'+params.q.split('+')[0]+'.html?SearchText='+params.q;
  } else if(params.q && crawl) {
   location.replace('https://www.aliexpress.com/af/'+params.q+'.html?SearchText='+params.q);
  }
 })();
 