/*
[Script]
http-response ^https?://weibointl\.api\.weibo\.cn/portal\.php\?a=get_coopen_ads requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/weibointl_launch.js
http-response ^https?://api\.weibo\.cn/2/(statuses|groups)/(unread_hot_|friends_)?timeline requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/weibointl_timeline.js
[MITM]
hostname = weibointl.api.weibo.cn, api.weibo.cn
*/

let body = JSON.parse($response.body);

body["data"]["display_ad"] = 0;

$done({ body: JSON.stringify(body) });
