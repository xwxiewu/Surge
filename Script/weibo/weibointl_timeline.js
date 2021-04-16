/*
[Script]
http-response ^https?://weibointl\.api\.weibo\.cn/portal\.php\?a=get_coopen_ads requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/weibointl_launch.js
http-response ^https?://api\.weibo\.cn/2/(statuses|groups)/(unread_hot_|friends_)?timeline requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/weibointl_timeline.js
[MITM]
hostname = weibointl.api.weibo.cn, api.weibo.cn
*/

let body = JSON.parse($response.body);

if (body["ad"]) body["ad"] = [];
if (body["advertises"]) body["advertises"] = [];
if (body["statuses"] && body["statuses"].length > 0) {
  let i = body["statuses"].length;
  while (i--) {
    if (body["statuses"][i]["ad_state"]) {
      delete body["statuses"][i];
    }
  }
}

$done({ body: JSON.stringify(body) });
