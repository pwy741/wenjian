var parse_list = [
    `①南柯￥https://www.nkdyw.com/jx.php?url=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = nanke.toUrl(input);url!=''?url:getUrl(input)`,
    `②YUQI￥http://jx.c4e4.cn/m3u8.php?url=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = yuqi.toUrl(input);url!=''?url:getUrl(input)`,
     `③8090￥https://8090.gdkaman.com/jiexi09231/?url=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = bjiujx.toUrl(input);url!=''?url:getUrl(input)`,
     `④江湖￥http://xjiys.com/jiexi/jianghu.php?v=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = jhujx.toUrl(input);url!=''?url:getUrl(input)`,
    `⑤1717￥https://1717.ntryjd.net/0526/?url=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = yqjx.toUrl(input);url!=''?url:getUrl(input)`
];
eval(getCryptoJS());
var tools = {
    MD5: function (data) {
        return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
    },
    decrypt: function (text, key, iv) {
        var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8);
    }
};

var nanke = {
    toUrl: function (input) {
        try {
                 var url = fetch(input, {}).match(/"url":"(.*?)"/)[1];
            if(url.indexOf('titan.mgtv') > -1){url=url + ';{Referer@https://www.mgtv.com/}';}else{url=url}
                return url.indexOf('url=') > -1 ? url.split('url=')[1] : url;
        } catch (e) {
            return '';
        }
    }
};
var yuqi = {
    toUrl: function (input) {
        try {
                var html = fetch(input, {});
                if(html.indexOf('huiid')!=-1){
                var url = html.match(/huiid = \"(.*?)\"/)[1];
               }else{
                var url = decodeURIComponent(tools.decrypt(html.split('"url":"')[1].split('"')[0], "dvyYRQlnPRCMdQSe", html.split('bt_token = "')[1].split('"')[0])) + '#yuqi.mp4';}         
            if(url.indexOf('titan.mgtv') > -1){url=url + ';{Referer@https://www.mgtv.com/}';}else{url=url}
                return url.indexOf('url=') > -1 ? url.split('url=')[1] : url;
        } catch (e) {
            return '';
        }
    }
};
var bjiujx = {
    toUrl: function (input) {
        try {
        	if(input.indexOf('mgtv')!=-1){
            return mgjx.toUrl(input);
            }else{
            var html = fetch(input, { headers: { 'Referer': 'https://8090.gdkaman.com/' }, method: 'GET' });
            }
            var oth = base64Encode(input.split('url=')[1]);
            var plink = html.match(/'url':'(.*?)'/)[1];
            var time = html.match(/'time':'(.*?)'/)[1];
            var ref = html.match(/'referer':'(.*?)'/)[1];
            var jk = 'https://8090.gdkaman.com/jiexi09231/api.php';
            var ph = 'url='+plink+'&referer='+ref+'&ref=1&time='+time+'&type='+''+'&other='+oth+'&ios=0';
            var cs = ph.replace(/\n/g,'');
            var json = JSON.parse(fetch(jk, { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: cs, method: 'POST' }));
            var url = (json.code == 200 ? json.url + '#8090.mp4' : '');
            if (url != '') {
            if(url.indexOf('titan.mgtv') > -1){url=url + ';{Referer@https://www.mgtv.com/}';
            }else if(url.indexOf('ykm3u8')!=-1){
url=decodeURIComponent(url.split('?url=')[1]);}else if(url.indexOf('buid=onlyvinfo') > -1){
var fcc =JSON.parse(JSON.parse(fetch(url,{})).vinfo);
var fn=fcc.vl.vi[0].fn;
var fk=fcc.vl.vi[0].fvkey;
var ul=fcc.vl.vi[0].ul.ui[0].url;
url=ul+fn+'?vkey='+fk;}else{url=url};
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var jhujx = {
    toUrl: function (input) {
        try {
            var html = fetch(input, { headers: { 'Referer': 'http://xjiys.com' }, method: 'GET' });
            var url = html.match(/"url": "(.*?)"/)[1] + '#jianghu.mp4';
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://www.mgtv.com}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var yqjx = {
    toUrl: function (input) {
        try {
        	if(input.indexOf('mgtv')!=-1){
           return mgjx.toUrl(input);}else{
            var html = fetch(input, { headers: { 'Referer': 'https://www.1717yun.com/' }, method: 'GET' })}
            var oth = base64Encode(input.split('url=')[1]);
            var plink = html.match(/'url':'(.*?)'/)[1];
            var time = html.match(/'time':'(.*?)'/)[1];
            var ref = html.match(/'referer':'(.*?)'/)[1];
            var jk = 'https://1717.ntryjd.net/0526/api.php';
            var ph = 'url='+plink+'&referer='+ref+'&ref=1&time='+time+'&type='+''+'&other='+oth+'&ios=0';
            var cs = ph.replace(/\n/g,'');
            var json = JSON.parse(fetch(jk, { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: cs, method: 'POST' }));
            var url = (json.code == 200 ? json.url + '#1717.mp4' : '');
            if (url != '') {
            if(url.indexOf('titan.mgtv') > -1){url=url + ';{Referer@https://www.mgtv.com/}';}else if(url.indexOf('ykm3u8')!=-1){url=decodeURIComponent(url.split('?url=')[1]);}else if(url.indexOf('buid=onlyvinfo') > -1){
var fcc =JSON.parse(JSON.parse(fetch(url,{})).vinfo);
var fn=fcc.vl.vi[0].fn;
var fk=fcc.vl.vi[0].fvkey;
var ul=fcc.vl.vi[0].ul.ui[0].url;
url=ul+fn+'?vkey='+fk;}else{url=url};
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var mgjx = {
    toUrl: function (input) {
        try {
        	if(input.indexOf('url=')!=-1){
            var html = fetch('https://plamgtvcache.ccyjjd.com/mgtv/mgplay.php?vvv='+input.split('url=')[1], { headers: { 'Referer': 'https://plamgtvcache.ccyjjd.com/' }, method: 'GET' });}else{
            var html = fetch('https://plamgtvcache.ccyjjd.com/mgtv/mgplay.php?vvv='+input.split('?v=')[1], { headers: { 'Referer': 'https://plamgtvcache.ccyjjd.com/' }, method: 'GET' });
}
            var oth = base64Encode(input.split('url=')[1]);
            var plink = html.match(/'url':'(.*?)'/)[1];
            var time = html.match(/'time':'(.*?)'/)[1];
            var ref = html.match(/'referer':'(.*?)'/)[1];
            var jk = 'https://plamgtvcache.ccyjjd.com/mgtv/api.php';
            var ph = 'url='+plink+'&referer='+ref+'&ref=1&time='+time+'&type='+''+'&other='+oth+'&ios=0';
            var cs = ph.replace(/\n/g,'');
            var json = JSON.parse(fetch(jk, { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: cs, method: 'POST' }));
            var url = (json.code == 200 ? json.url + '#mgjx.mp4' : '');
            if (url != '') {
            if(url.indexOf('titan.mgtv') > -1){url=url + ';{Referer@https://www.mgtv.com/}';}else{url=url};
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
function getUrl(input) {
    if(input.indexOf('url=')!=-1){
    var input_arr = input.split('url=');
    }else{
    var input_arr = input.split('?v=')}
    for (var i in parse_list) {
        var parse_list_arr = parse_list[i].split('￥');
        if (parse_list_arr[1].indexOf(input_arr[0]) > -1)
            continue;
        input = parse_list_arr[1] + input_arr[1];
        var str = 'var url = ' + parse_list_arr[0].substr(1) + '.toUrl("' + input + '")';
        eval(str);
        if (url !== '')
            return url;
    }
    return parsing_list[0] + input_arr[1];
}