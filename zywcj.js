function updata() {
var res = {};
var items = [];
items.push({
title:'该版本已停用，点击更新最新版',
desc:'请更新',
url:'',
col_type: 'text_center_1'
});
res.data=items;
setHomeResult(res);
}
function TWEJ() {
var html = getResCode();
if (html.indexOf('正在安全检测中') != -1) {
html=fetch(MY_URL+'&'+html.split('&')[2].split('\"')[0], {});
}
var arrr = MY_URL.split("?")[0];
var pn = MY_URL.split("=")[2];
var res = {};
var items = [];
//对第一页分类进行处理
if(pn=='1'){
var rescod= fetch(arrr+"?ac=list",{});
var type = parseDomForHtml(rescod,"class&&Html").match(/<ty [\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text");
var url = parseDomForHtml(type[i],"body&&ty&&id");
if(title.indexOf("伦理")==-1&&title.indexOf("福利")==-1&&title.indexOf("写真")==-1&&title.indexOf("VIP")==-1&&title.indexOf("美女")==-1&&title.indexOf("里番")==-1&&title.indexOf("性感")==-1&&title.indexOf("倫理")==-1&&title.indexOf("论理")==-1){
items.push({
title:title,url:arrr+"?ac=videolist&pg=fypage&t="+url+`@rule=js:var html = getResCode();var arrr = getUrl().split("?")[0];var res = {};var items = [];try{var list=parseDomForHtml(html,"rss&&Html").match(/<video>[\\s\\S]*?<\\/video>/g);for(var j = 0; j <list.length; j++){var title = parseDomForHtml(list[j],"body&&name&&Text"); var url = parseDomForHtml(list[j],"body&&id&&Text"); var note = parseDomForHtml(list[j],"body&&note&&Text"); var pic = parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1){pic="https://tu.tianzuida.com/pic/"+pic;}else if(MY_URL.indexOf("lby")!=-1){pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic};/((http|https):\\/\\/.*?)\\/.*?/.test(pic);var imgRefer = "@Referer=" + RegExp.$1;items.push({title:title,pic_url:pic+imgRefer,desc:note,url:arrr+"?ac=videolist&ids="+url+\`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb};items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\\\s\\\\S]*?<\\\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\\\?wsSecre[\\\\s\\\\S]*?wsTime=\\\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\\\n")[1].split("\\\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split(\\\\'"\\\\')[0]);url!=""?url:src.split(\\\\'"\\\\')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);\`,col_type:"movie_3"});}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"text_3"});}}items.push({col_type: 'line'});}
//结束第一页分类处理
//对列表处理开始
var list=parseDomForHtml(html,"rss&&Html").match(/<video>[\s\S]*?<\/video>/g);
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text"); 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
//var last = parseDomForHtml(list[j],"body&&last&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var pic = parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1){pic="https://tu.tianzuida.com/pic/"+pic;}else if(MY_URL.indexOf("lby")!=-1){pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic};
/((http|https):\/\/.*?)\/.*?/.test(pic);
var imgRefer = "@Referer=" + RegExp.$1;
if(typ.indexOf("伦理")==-1&&typ.indexOf("福利")==-1&&typ.indexOf("写真")==-1&&typ.indexOf("VIP")==-1&&typ.indexOf("美女")==-1&&typ.indexOf("里番")==-1&&typ.indexOf("性感")==-1&&typ.indexOf("倫理")==-1&&typ.indexOf("论理")==-1){
items.push({
//title:title+"状态："+note,
title:title,
pic_url:pic+imgRefer,
desc:note,
//desc:last+"类型："+typ,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb};items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\s\\S]*?<\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\?wsSecre[\\s\\S]*?wsTime=\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\n")[1].split("\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split(\\'"\\')[0]);url!=""?url:src.split(\\'"\\')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"movie_3"});
}}
//对列表处理结束
res.data=items;
setHomeResult(res);
}
function SSEJ() {
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
if(getUrl().indexOf('qy-video')!=-1){
var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';
var fetc=fetch(fet,{});
var jsurl=parseDom(fetc,'.container2&&script&&Html');
eval(jsurl);
var sec=mac_url.match(/\?wsSecre[\s\S]*?wsTime=\d*/g)
}
for(var i = 0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
if(list!=null){
items.push({
title:parseDomForHtml(conts[i], "body&&dd&&flag"),
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){
url=list[j].split('$')[1];
}else{
url=list[j].split('$')[0];
}
if(getUrl().indexOf('qy-video')!=-1){
url=url+sec
}
if(getUrl().indexOf('rrzyw')!=-1){
url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url
}
items.push({
title:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split('"')[0]);url!=""?url:src.split('"')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}`,
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