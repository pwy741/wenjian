function doub() {
var res={};
var items=[];
var html=getResCode();
try{
var thumb=parseDom(html,"rss&&pic&&Text");
items.push({title:'剧情简介：',
desc:parseDomForHtml(html,"rss&&des&&Text"),
pic_url:thumb,
url:thumb,
col_type:'pic_1'
});
var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\s\S]*?<\/dd>/g);
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i=0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag,
col_type:'text_1'});
var url={};
for(var j=0;j<list.length;j++){
if(list[j].split('$')[1]!=null){
url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(getUrl().indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(getUrl().indexOf('yyid6080')!=-1){if(flag=='xigua'){url='https://bbs.cnzv.cc/dp/6080mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else{url=url};}
if(getUrl().indexOf('rrzyw')!=-1){
url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url
}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split('"')[0]);url!=""?url:src.split('"')[0];}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\'")[1].split("\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1){JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true})).headers.location[0]+"#.mp4";}else{src}`,
col_type:'text_2'});
}
}
}
}catch(e){}
res.data=items;
setHomeResult(res);
}
function doubss() {
var res = {};
var items = [];
var html = getResCode();
//setError(html);
try{
var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb};
var typ = parseDomForHtml(html,"body&&type&&Text");
if(typ.indexOf("伦理")==-1&&typ.indexOf("福利")==-1&&typ.indexOf("写真")==-1&&typ.indexOf("VIP")==-1&&typ.indexOf("美女")==-1&&typ.indexOf("里番")==-1&&typ.indexOf("性感")==-1&&typ.indexOf("倫理")==-1&&typ.indexOf("论理")==-1){
items.push({
title: '剧情简介：',
desc:parseDomForHtml(html, "rss&&des&&Text"),
pic_url:thumb,
url:thumb,
col_type: 'pic_1'
});
var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\s\S]*?<\/dd>/g);
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i = 0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag,
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){
url=list[j].split('$')[1];
}else{
url=list[j].split('$')[0];
}
if(getUrl().indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(getUrl().indexOf('yyid6080')!=-1){if(flag=='xigua'){url='https://bbs.cnzv.cc/dp/6080mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else{url=url};}
if(getUrl().indexOf('rrzyw')!=-1){
url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url
}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split('"')[0]);url!=""?url:src.split('"')[0];}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\'")[1].split("\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1){JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true})).headers.location[0]+"#.mp4";}else{src}`,
col_type: 'text_2'});
   }
  }
 }
 ;}else{items.push({
title:'珍爱生命，远离情色',
col_type: 'text_center_1'
});}
} catch(e) {}
res.data=items;
setHomeResult(res);
}