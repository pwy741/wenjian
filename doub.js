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
if(list!=null){
items.push({
title:parseDomForHtml(conts[i],"body&&dd&&flag"),
col_type:'text_1'});
var url={};
for(var j=0;j<list.length;j++){
if(list[j].split('$')[1]!=null){
url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}
items.push({
title:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split(\'"\')[0]);url!=""?url:src.split(\'"\')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{});if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}`,
col_type:'text_2'});
}
}
}
}catch(e){}
res.data=items;
setHomeResult(res);
}