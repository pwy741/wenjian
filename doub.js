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
}catch(e){}
res.data=items;
setHomeResult(res);
}