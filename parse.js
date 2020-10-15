var parse_list = [
    `①Maosp￥http://39.maosp.me/jx/?url=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = Maosp.toUrl(input);url!=''?url:getUrl(input)`,
     `②8090￥https://8090.gdkaman.com/jiexi09231/?url=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = bjiujx.toUrl(input);url!=''?url:getUrl(input)`,
     `③江湖￥http://xjiys.com/jiexi/jianghu.php?v=￥@lazyRule=.js:eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/parse.js',{}));var url = jhujx.toUrl(input);url!=''?url:getUrl(input)`
]
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

var Maosp = {
    toUrl: function (input) {
        try {
        	    if(input.indexOf('mgtv')==-1){
                var html = fetch(input, {});
                var url = decodeURIComponent(tools.decrypt(html.split('"url":"')[1].split('"')[0], "dvyYRQlnPRCMdQSe", html.split('bt_token = "')[1].split('"')[0])) + '#Maosp.mp4';
                }else{
                 var url = fetch('https://www.nkdyw.com/jx.php?url='+input.split('url=')[1], {}).match(/"url":"(.*?)"/)[1];
}
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
            var html = fetch('https://plamgtvcache.ccyjjd.com/mgtv/mgplay.php?vvv='+input.split('url=')[1], { headers: { 'Referer': 'https://plamgtvcache.ccyjjd.com/' }, method: 'GET' });}else{
            var html = fetch(input, { headers: { 'Referer': 'https://8090.gdkaman.com/' }, method: 'GET' })}
            var oth = base64Encode(input.split('url=')[1]);
            var plink = html.match(/'url':'(.*?)'/)[1];
            var time = html.match(/'time':'(.*?)'/)[1];
            var ref = html.match(/'referer':'(.*?)'/)[1];
            if(input.indexOf('mgtv')!=-1){
            var jk = 'https://plamgtvcache.ccyjjd.com/mgtv/api.php';
            }else{
            var jk = 'https://8090.gdkaman.com/jiexi09231/api.php';
            }
            var ph = 'url='+plink+'&referer='+ref+'&ref=1&time='+time+'&type='+''+'&other='+oth+'&ios=0';
            var cs = ph.replace(/\n/g,'');
            var json = JSON.parse(fetch(jk, { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: cs, method: 'POST' }));
            var url = (json.code == 200 ? json.url : '');
            if (url != '') {
            if(url.indexOf('titan.mgtv') > -1){url=url + ';{Referer@https://www.mgtv.com/}';}else if(url.indexOf('ykm3u8')!=-1){url=decodeURIComponent(url.split('?url=')[1]);}else{url=url};
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
            var url = html.match(/"url": "(.*?)"/)[1] + '#jhu.mp4';
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://www.mgtv.com}' : url);
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