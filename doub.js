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
url:url.replace(/\n*/g,''),
col_type:'text_2'});
}
}
}
}catch(e){}
res.data=items;
setHomeResult(res);
}