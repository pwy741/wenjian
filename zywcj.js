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
var arrr = MY_URL.split("?")[0];
var pn = MY_URL.split("=")[2];
var res = {};
var items = [];
//对第一页分类进行处理
if(pn=='1'){
try{
var mua = "Mozilla/5.0 (Linux; U; Android 10; zh-CN; ELE-AL00 Build/HUAWEIELE-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.8.6.1066 Mobile Safari/537.36";
var rescod= fetch(arrr+"?ac=list",{headers:{"User-Agent":mua}});
var type = parseDomForHtml(rescod,"class&&Html").match(/<ty[\s]id[\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text").split('{')[0];
var url = parseDomForHtml(type[i],"body&&ty&&id");
//&&title!="电影"&&title!="电影片"&&title!="电视剧"&&title!="连续剧"
if(title.indexOf("伦理")==-1&&title.indexOf("福利")==-1&&title.indexOf("写真")==-1&&title.indexOf("VIP")==-1&&title.indexOf("美女")==-1&&title.indexOf("里番")==-1&&title.indexOf("性感")==-1&&title.indexOf("倫理")==-1&&title.indexOf("论理")==-1){
items.push({
title:title,
url:arrr+"?ac=videolist&pg=fypage&t="+url+`@rule=js:var html = getResCode();var arrr = MY_URL.split("?")[0];var res = {};var items = [];try{var list=parseDomForArray(html,"rss&&video");for(var j = 0; j <list.length; j++){var title = parseDomForHtml(list[j],"body&&name&&Text"); var url = parseDomForHtml(list[j],"body&&id&&Text"); var note = parseDomForHtml(list[j],"body&&note&&Text"); var pic = parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){pic="https://tu.tianzuida.com/pic/"+pic;}else if(MY_URL.indexOf("lby")!=-1){pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic;}else if(MY_URL.indexOf("xjiys")!=-1){pic=pic.replace("img.maccms.com","xjiys.com");}else if(MY_URL.indexOf("17kanju")!=-1){pic=pic.replace("img.maccms.com","img.17kanju.com");}else if(MY_URL.indexOf("potatost")!=-1){pic=pic.replace("http://img.maccms.com//pic=","");}/((http|https):\\/\\/.*?)\\/.*?/.test(pic);var imgRefer = "@Referer=" + RegExp.$1;items.push({title:title,pic_url:pic+imgRefer,desc:note,url:arrr+"?ac=videolist&ids="+url+\`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb;}else if(MY_URL.indexOf("xjiys")!=-1){thumb=thumb.replace("img.maccms.com","xjiys.com");}else if(MY_URL.indexOf("17kanju")!=-1){thumb=thumb.replace("img.maccms.com","img.17kanju.com");}else if(MY_URL.indexOf("potatost")!=-1){thumb=thumb.replace("http://img.maccms.com//pic=","");}items.push({title: parseDomForHtml(html, "rss&&name&&Text")+'  剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForArray(html,'rss&&dl&&dd');var url=parseDomForHtml(html,'rss&&id&&Text');for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\\\n")[1].split("\\\\n<")[0].split("#");var flag=parseDomForHtml(conts[i], "body&&dd&&flag");if(list!=null){items.push({			title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag,col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}if(flag=='ddyunp'){url='https://player.ddyunp.com/play.php?url='+url.replace(/第.*?集/g,'')}if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else{url=url};}if(flag=='rrm3u8'){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}if(flag=='niux'){url='https://www.shenma4480.com/jx.php?id='+url}if(flag=='hkm3u8'){url='https://pl.tcc-interiors.com/hls/'+url}if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}items.push({title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0], url:url.replace(/\\\\n*/g,'')+'@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="http://jx.c4e4.cn/m3u8.php?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yuqi.toUrl(jiek+src.split(\\\\'"\\\\')[0]);url!=""?url:getUrl(jiek+src.split(\\\\'"\\\\')[0]);}else if(src.indexOf("135-cdn")!=-1){src;}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("rrzyw")!=-1){fetch(src,{}).match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\\\\'")[1].split("\\\\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1){JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true})).headers.location[0]+"#.mp4";}else if(src.indexOf("shenma4480")!=-1){var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/var u=\\\\"(.*?)\\\\"/)[1];fetch(sm,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1].replace(/[+]/g,"%20");}else if(src.indexOf("mlkioiy")!=-1){if(src.indexOf("ShowVideo")!=-1){var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");var fileUrl ="https://gitee.com/lzk23559/rulehouse/raw/master/pako-min.js";eval(fetch(fileUrl,{}));realUrl;}else{src+"#.mp4"};}else if(src.indexOf("alizyw.com")!=-1){src+"#.mp4";}else if(src.indexOf("xsp1")!=-1){var pli=parseDomForHtml(fetch(src,{headers:{"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];var jiek="http://jx.c4e4.cn/m3u8.php?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yuqi.toUrl(jiek+pli);url!=""?url:getUrl(jiek+pli);}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);\`,col_type:"movie_3"});}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"text_3"});
  }
 }
} catch(e) {}
items.push({
col_type: 'line'});
//if的对括号
}
//结束第一页分类处理
//对列表处理开始
try{
var html = getResCode();
if (html.indexOf('正在安全检测中') != -1) {
html=fetch(MY_URL+'&'+html.split('pg=1&')[1].split('\"')[0], {});
}else if(html.indexOf('fwkey') != -1){
html=fetch(MY_URL+html.split('\"')[1], {});
}
var list=parseDomForArray(html,"rss&&video");
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text"); 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
//var last = parseDomForHtml(list[j],"body&&last&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var pic = parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){pic="https://tu.tianzuida.com/pic/"+pic;}else if(MY_URL.indexOf("lby")!=-1){pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic}else if(MY_URL.indexOf("xjiys")!=-1){pic=pic.replace("img.maccms.com","xjiys.com");}else if(MY_URL.indexOf("17kanju")!=-1){pic=pic.replace("img.maccms.com","img.17kanju.com");}else if(MY_URL.indexOf("potatost")!=-1){pic=pic.replace("http://img.maccms.com//pic=","");}
/((http|https):\/\/.*?)\/.*?/.test(pic);
var imgRefer = "@Referer=" + RegExp.$1;
if(typ.indexOf("伦理")==-1&&typ.indexOf("福利")==-1&&typ.indexOf("写真")==-1&&typ.indexOf("VIP")==-1&&typ.indexOf("美女")==-1&&typ.indexOf("里番")==-1&&typ.indexOf("性感")==-1&&typ.indexOf("倫理")==-1&&typ.indexOf("论理")==-1){
items.push({
//title:title+"状态："+note,
title:title,
pic_url:pic+imgRefer,
desc:note,
//desc:last+"类型："+typ,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb;}else if(MY_URL.indexOf("xjiys")!=-1){thumb=thumb.replace("img.maccms.com","xjiys.com");}else if(MY_URL.indexOf("17kanju")!=-1){thumb=thumb.replace("img.maccms.com","img.17kanju.com");}else if(MY_URL.indexOf("potatost")!=-1){thumb=thumb.replace("http://img.maccms.com//pic=","");}items.push({title: parseDomForHtml(html, "rss&&name&&Text")+'  剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForArray(html,'rss&&dl&&dd');var url=parseDomForHtml(html,'rss&&id&&Text');for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\n")[1].split("\\n<")[0].split("#");var flag=parseDomForHtml(conts[i], "body&&dd&&flag");if(list!=null){items.push({			title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag,col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}if(flag=='ddyunp'){url='https://player.ddyunp.com/play.php?url='+url.replace(/第.*?集/g,'')}if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else{url=url};}if(flag=='rrm3u8'){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}if(flag=='niux'){url='https://www.shenma4480.com/jx.php?id='+url}if(flag=='hkm3u8'){url='https://pl.tcc-interiors.com/hls/'+url}if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}items.push({title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0], url:url.replace(/\\n*/g,'')+'@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="http://jx.c4e4.cn/m3u8.php?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yuqi.toUrl(jiek+src.split(\\'"\\')[0]);url!=""?url:getUrl(jiek+src.split(\\'"\\')[0]);}else if(src.indexOf("135-cdn")!=-1){src;}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("rrzyw")!=-1){fetch(src,{}).match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\\'")[1].split("\\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1){JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true})).headers.location[0]+"#.mp4";}else if(src.indexOf("shenma4480")!=-1){var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/var u=\\"(.*?)\\"/)[1];fetch(sm,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1].replace(/[+]/g,"%20");}else if(src.indexOf("mlkioiy")!=-1){if(src.indexOf("ShowVideo")!=-1){var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");var fileUrl ="https://gitee.com/lzk23559/rulehouse/raw/master/pako-min.js";eval(fetch(fileUrl,{}));realUrl;}else{src+"#.mp4"};}else if(src.indexOf("alizyw.com")!=-1){src+"#.mp4";}else if(src.indexOf("xsp1")!=-1){var pli=parseDomForHtml(fetch(src,{headers:{"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];var jiek="http://jx.c4e4.cn/m3u8.php?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yuqi.toUrl(jiek+pli);url!=""?url:getUrl(jiek+pli);}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"movie_3"});
  }
 }
} catch(e) {}
//对列表处理结束
res.data=items;
setHomeResult(res);
}
function SSEJ() {
var res = {};
var items = [];
var html = getResCode();
try{
var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){
thumb="https://tu.tianzuida.com/pic/"+thumb;
}else if(MY_URL.indexOf("lby")!=-1){
thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb;
}else if(MY_URL.indexOf("xjiys")!=-1){thumb=thumb.replace("img.maccms.com","xjiys.com");}else if(MY_URL.indexOf("17kanju")!=-1){thumb=thumb.replace("img.maccms.com","img.17kanju.com");}else if(MY_URL.indexOf("potatost")!=-1){thumb=thumb.replace("http://img.maccms.com//pic=","");}
var typ = parseDomForHtml(html,"body&&type&&Text");
if(typ.indexOf("伦理")==-1&&typ.indexOf("福利")==-1&&typ.indexOf("写真")==-1&&typ.indexOf("VIP")==-1&&typ.indexOf("美女")==-1&&typ.indexOf("里番")==-1&&typ.indexOf("性感")==-1&&typ.indexOf("倫理")==-1&&typ.indexOf("论理")==-1){
items.push({
title: parseDomForHtml(html, "rss&&name&&Text")+'  剧情简介：',
desc:parseDomForHtml(html, "rss&&des&&Text"),
pic_url:thumb,
url:thumb,
col_type: 'pic_1'
});
var conts=parseDomForArray(html,'rss&&dl&&dd');
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i = 0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag,
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(flag=='ddyunp'){url='https://player.ddyunp.com/play.php?url='+url.replace(/第.*?集/g,'')}
if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}
if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else{url=url};}
if(flag=='rrm3u8'){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}
if(flag=='niux'){url='https://www.shenma4480.com/jx.php?id='+url}
if(flag=='hkm3u8'){url='https://pl.tcc-interiors.com/hls/'+url}
if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}
if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="http://jx.c4e4.cn/m3u8.php?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yuqi.toUrl(jiek+src.split('"')[0]);url!=""?url:getUrl(jiek+src.split('"')[0]);}else if(src.indexOf("135-cdn")!=-1){src;}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\'")[1].split("\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1){JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true})).headers.location[0]+"#.mp4";}else if(src.indexOf("shenma4480")!=-1){var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/var u=\"(.*?)\"/)[1];fetch(sm,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g,"%20");}else if(src.indexOf("mlkioiy")!=-1){if(src.indexOf("ShowVideo")!=-1){var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");var fileUrl ="https://gitee.com/lzk23559/rulehouse/raw/master/pako-min.js";eval(fetch(fileUrl,{}));realUrl;}else{src+"#.mp4"};}else if(src.indexOf("alizyw.com")!=-1){src+"#.mp4";}else if(src.indexOf("xsp1")!=-1){var pli=parseDomForHtml(fetch(src,{headers:{"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];var jiek="http://jx.c4e4.cn/m3u8.php?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yuqi.toUrl(jiek+pli);url!=""?url:getUrl(jiek+pli);}else{src}`,
col_type: 'text_2'});
   }
  }
 };
}else{
items.push({
title:'珍爱生命，远离情色',
col_type: 'text_center_1'
});
}
} catch(e) {}
res.data=items;
setHomeResult(res);
}