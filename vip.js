var thisURL = window.location.href,inum=1,vipOption;
var vipChannl = new Array(
//"http://yyygwz.com/index.php?url=",
//"https://api.47ks.com/webcloud/?v=",
//"http://www.wmxz.wang/index.php?url=",
//"http://000o.cc/jx/ty.php?url=",
//"http://www.vipjiexi.com/yun.php?url=",
//"http://q.z.vip.totv.72du.com/?url=",
//"http://aikan-tv.com/tong.php?url=",
//"http://www.yydy8.com/Common/?url=",
//"http://p2.api.47ks.com/webcloud/?v=",
//"http://www.wmxz.wang/video.php?url=",
//"http://aikan-tv.com/?url=",
//"https://jiexi.071811.cc/jx.php?url=",
"http://api.xfsub.com/index.php?url=",
//"http://api.baiyug.cn/vip/index.php?url=",
//"http://qtzr.net/s/?qt=",
//"http://www.sfsft.com/admin.php?url=",
//"https://www.yymeier.com/api.php?url="
"http://vip.jlsprh.com/index.php?url=",
"http://jx.vgoodapi.com/jx.php?url=",
"http://api.wlzhan.com/sudu/?url=",
"http://v.buy360.vip/cxjx.php?v=",
"http://vip.72du.com/api/?url=",
"http://api.nepian.com/ckparse/?url=",
"http://api.91exp.com/svip/?url=",
"http://qtzr.net/s/?qt=",
"http://www.chepeijian.cn/jiexi/vip.php?url=",
"http://www.wmxz.wang/video.php?url=",
"http://api.baiyug.cn/vip/index.php?url=",
"http://player.jidiaose.com/supapi/iframe.php?v=",
"http://api.pucms.com/index.php?url=",
"http://jiexi.92fz.cn/player/vip.php?url=",
"http://lookxw.com/yingzi/?url=",
"http://api.97kn.com/?url=",
);

for (x in vipChannl)
{
  vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';
}

function insVIP(emID,rID,index=0,height="100%"){
var gemID = document.getElementsByClassName(emID)[0];
var newNode = document.createElement("select");
newNode.setAttribute("title","原整理by MarIxs");
gemID.appendChild(newNode);
newNode.setAttribute("onchange", "replacePlayer(this,'"+rID+"','"+height+"')");
newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
if (index!=0){
  newNode.selectedIndex=index;
  setTimeout(function () {
    var event = document.createEvent("UIEvents"); 
    event.initUIEvent("change", true, true);      
    newNode.dispatchEvent(event);
  }, 1000);
}
}

function replacePlayer(e,rID,height="100%"){
    var playerID = document.getElementById(rID);
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height",height);
    newplayerID.src = e.value;
}
