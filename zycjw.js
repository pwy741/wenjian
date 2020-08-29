function erji() {
var html = getResCode();
var arrr = getUrl().split("?")[0];
var res = {};
var items = [];
//对第一页分类进行处理
if(html.indexOf("page=\"1\"")!=-1){
var type = parseDomForHtml(html,"class&&Html").match(/<ty [\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text");
var url = parseDomForHtml(type[i],"body&&ty&&id");
items.push({
title:title,url:arrr+"?ac=videolist&pg=fypage&t="+url+`@rule=js:var html = getResCode();var arrr = getUrl().split("?")[0];var res = {};var items = [];try{var list=parseDomForHtml(html,"rss&&Html").match(/<video>[\\s\\S]*?<\\/video>/g);for(var j = 0; j <list.length; j++){var title = parseDomForHtml(list[j],"body&&name&&Text"); var url = parseDomForHtml(list[j],"body&&id&&Text"); var note = parseDomForHtml(list[j],"body&&note&&Text"); var last = parseDomForHtml(list[j],"body&&last&&Text"); var typ = parseDomForHtml(list[j],"body&&type&&Text"); var pic = parseDomForHtml(list[j],"body&&pic&&Text");/((http|https):\\/\\/.*?)\\/.*?/.test(pic);var imgRefer = "@Referer=" + RegExp.$1;items.push({title:title+"状态："+note,pic_url:pic+imgRefer,desc:last+"类型："+typ,url:arrr+"?ac=videolist&ids="+url+\`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDom(html,"rss&&pic&&Text");items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\\\s\\\\S]*?<\\\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\\\?wsSecre[\\\\s\\\\S]*?wsTime=\\\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\\\n")[1].split("\\\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var link="http://jx.rgzn.la/api.php?url="+src;var jsHtml=fetch(link,{});var cod=JSON.parse(jsHtml);if(cod==null){src.split(\\\\'"\\\\')[0];}else if(cod.code!=200){src.split(\\\\'"\\\\')[0];}else{cod.url;};}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{});if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);link+main;}else{link+fc.match(/url: \\\\'(.*?)\\\\'/)[1]};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url: \\\\'(.*?)\\\\'/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);\`,col_type:"movie_1"});}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"text_3"});}}
//结束第一页分类处理
//对列表处理开始
var list=parseDomForHtml(html,"rss&&Html").match(/<video>[\s\S]*?<\/video>/g);
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text"); 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
var last = parseDomForHtml(list[j],"body&&last&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
items.push({
title:title+"状态："+note,
desc:last+"类型："+typ,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDom(html,"rss&&pic&&Text");items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\s\\S]*?<\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\?wsSecre[\\s\\S]*?wsTime=\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\n")[1].split("\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var link="http://jx.rgzn.la/api.php?url="+src;var jsHtml=fetch(link,{});var cod=JSON.parse(jsHtml);if(cod==null){src.split(\\'"\\')[0];}else if(cod.code!=200){src.split(\\'"\\')[0];}else{cod.url;};}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{});if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);link+main;}else{link+fc.match(/url: \\'(.*?)\\'/)[1]};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url: \\'(.*?)\\'/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"text_1"});
}
//对列表处理结束
res.data=items;
setHomeResult(res);
}
function sserji() {
var res = {};
var items = [];
var arr = getUrl().split('?')[0];
var html = getResCode();
if(html.indexOf('<video>')==-1){items.push({
			title: '当前页面无资源。',
		col_type: 'text_center_1'
});}
try{
var list = parseDomForHtml(html, 'rss&&Html').match(/<video>[\s\S]*?<\/video>/g);
//setError(getUrl());
for (var j = 0; j < list.length; j++) {
        var title = parseDomForHtml(list[j],'body&&name&&Text');
        var url = parseDomForHtml(list[j],'body&&id&&Text');
        var note = parseDomForHtml(list[j],'body&&note&&Text');
        var last = parseDomForHtml(list[j],'body&&last&&Text');
        var typ = parseDomForHtml(list[j],'body&&type&&Text');
items.push({
            title: title+' 状态：'+note,
            desc: last+' 类型：'+typ,
            url: arr+'?ac=videolist&ids='+url+ `@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDom(html,"rss&&pic&&Text");items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\s\\S]*?<\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\?wsSecre[\\s\\S]*?wsTime=\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\n")[1].split("\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var link="http://jx.rgzn.la/api.php?url="+src;var jsHtml=fetch(link,{});var cod=JSON.parse(jsHtml);if(cod==null){src.split(\\'"\\')[0];}else if(cod.code!=200){src.split(\\'"\\')[0];}else{cod.url;};}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{});if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);link+main;}else{link+fc.match(/url: \\'(.*?)\\'/)[1]};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url: \\'(.*?)\\'/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);`,
            col_type: 'text_center_1'
        });
    }
} catch(e) {}
res.data = items;
setHomeResult(res);
}