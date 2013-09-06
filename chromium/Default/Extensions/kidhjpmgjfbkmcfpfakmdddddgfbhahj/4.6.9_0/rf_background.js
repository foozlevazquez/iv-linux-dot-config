var g_currUrl="";var g_pSharedData=null;var g_Settings=null;var zffu=null;var zffv=null;var zard={}
;var zdeg=null;var zffw={};var zffx=new znk();var zed=navigator.appVersion.indexOf('Windows')!=-1;var zee=navigator.appVersion.indexOf('Mac')!=-1;var zef=navigator.appVersion.indexOf('Linux')!=-1;var zcgz=navigator.appVersion.indexOf('X11')!=-1;var zrt=null;var zenh=Math.floor(Math.random()*10001);var zffy=1;var zffz="";var zsf="";var zarj="";var zari="";var zfga="";var zfgb="rf_active_identity_name";var zfgc="rf_active_identity_path";var zfgd=0;function zfge(){try{g_Settings=new zdds();g_pSharedData=new zcyf();g_Settings.zdei(true);if(zdr){var zfgf={zfgg:false,zaxo:"RoboForm Lite",zbeb:"images/robo16.png",popup:{href:"rf_toolstrip.html",zfgh:zeg,zbfo:zeh}
};zdeg=opera.contexts.toolbar.createItem(zfgf);opera.contexts.toolbar.addItem(zdeg);zdeg.onclick=zfgi;}
if(zdq){safari.application.addEventListener('command',zfgj,false);safari.application.addEventListener('message',zbwv,false);}
else if(zdr){opera.extension.addEventListener("message",zbwv,false);}
else if(zdu){window.external.mxGetRuntime().zaso(zxe,zbwv)}
zfgk(true);zffv=new zcxo();zsd();}catch(zmk){}};if(zdu){var zfgl=window.external.mxGetRuntime();var zfgm=zfgl.create("mx.browser");zfgm.zfgn=function(zra){if(zra.type=="TAB_SWITCH"){var tabs=window.external.mxGetRuntime().create("mx.browser").tabs;zfgo(zra.zfgp);}
else if(zra.type=="PAGE_CLOSED"){var zfgq=zra.id;var zbip=zffx.znx(zfgq);zffx.zny(zfgq);zfgr(zfgq);}
else if(zra.type=="ON_NAVIGATE"){var tabs=window.external.mxGetRuntime().create("mx.browser").tabs;}
else if(zra.type=="PAGE_LOADED"){}else{}};};function zber(zavj){zdeg.popup.width=zavj.width;zdeg.popup.height=zavj.height;}
;function zfgi(zmk){zdeg.popup.width=zeg;zdeg.popup.height=zeh;}
;function zckd(){try{if(zffu!=null){return zffu;}if(window.openDatabase){zffu=openDatabase("roboform","1.0","RoboForm Local Database",2E5);if(!zffu){}
}else{}return zffu;}catch(zmk){return zffu;}};function zfgk(zfgs){try{if(zfgs){zfgt();}
var zcxs=zckd();zfgu(zcxs);if(zcxs==null||zcxs==undefined){return;}
zcxs.transaction(function(zcxu){zcxu.executeSql("SELECT * FROM RoboformPreferences",[],function(zmj,zcxv){zfgt();var zcxw=0;for(var zov=0;zov<zcxv.rows.length;zov++){var zpy=zcxv.rows.item(zov)["prefname"];var value=zcxv.rows.item(zov)["prefvalue"];zcxw++;zard[zpy]=value;}
zarj=zard[zfgb];zari=zard[zfgc];zfga=zard["rf_aidkey"];zavr();}
,function(zcxy,zmj){console.log(zmj)})})}catch(zmk){}
};function zxg(){return getPrefs();};function getPrefs(){return zard;}
;function zfgt(){zard={};zard["rf_pwd_protect_chk"]=true;zard["rf_timeout_select"]=20;zard[zky]=8;zard[zkz]=1;zard[zla]=1;zard[zlc]=1;zard[zlb]=1;zard[zlf]=0;zard[zle]="!@#$%^&";zard[zld]=1;zard["rf_show_auto_savebar_chk"]=true;zard["rf_last_generated_pwd"]="";zard["rf_match_pcard_action"]="action_login";zard[zfgb]="";zard[zfgc]="";zard["rf_tie_session_chk"]=true;zard["rf_fill_empty_fields_chk"]=false;zard[zli]=false;zard["rf_cache_mpwd_until_logut_chk"]=1;zard["rf_loginsBookmarksJointly_chk"]=true;zard["rf_aidkey"]="";zard["rf_offer_save_another_pcard_chk"]=false;zard[zlh]=235;zard[zlg]=220;zard[zlj]=79;zard[zlk]="alt"
zard[zll]=70;zard[zlm]="control_shift";zard[zln]=48;zard[zlo]="alt";zard[zlp]=189;zard[zlq]="alt";zard[zlr]=187;zard[zls]="alt";zard[zlt]=80;zard[zlu]="alt";zard[zlv]=33;zard[zlw]="alt";zard[zlx]=34;zard[zly]="alt";}
;function zfgu(zbfn){if(zbfn){zbfn.transaction(function(zsb){zsb.executeSql("CREATE TABLE IF NOT EXISTS RoboformPreferences (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, prefname varchar(255), prefvalue varchar(255), UNIQUE (prefname))",[])}
);}};function zavr(){var zcxs=zckd();zfgu(zcxs);if(!zcxs){return;}
zcxs.transaction(function(zsb){for(var zsc in zard){zsb.executeSql("REPLACE INTO RoboformPreferences (prefname, prefvalue) VALUES (?, ?)",[zsc,zard[zsc]],function(zcag,zcxy){}
,function(zcag,zcxy){console.log(zcxy)})}});};function zyb(zavj){try{var zarn=zavj[zce];var zyi=zavj[zct];if(zyi.zavg.m_Type==RfObjectType.RFTYPE_IDENTITY){var zfgv=new zpc(parseInt(zyi.zavg.m_Type),zyi.zavg.m_sName,parseInt(zyi.zavg.znf),zyi.zavg.zpi,zyi.zavg.zpj,zyi.zavg.zpk);var zatz=zfgw(zyi,zfgv,zavj[zdn],zavj[zbf]);zatz[zbu]=zavj;return zatz;}
}catch(zmk){}};function zya(zavj){try{var zarn=zavj[zce];var zccl=zavj[zbc];var zbge=zavj[zdn];var zaus=zavj[zdf];var zfgx=zavj[zdd];var zyi=zavj[zct];if(zyi.zavg.m_Type==RfObjectType.RFTYPE_PASSCARD){var zbdx=new zpc(parseInt(zyi.zavg.m_Type),zyi.zavg.m_sName,parseInt(zyi.zavg.znf),zccl,zyi.zavg.zpj,zyi.zavg.zpk);}
else if(zyi.zavg&&zyi.zavg.m_Type==RfObjectType.RFTYPE_SAFENOTE){var zbdx=new zpc(parseInt(zyi.zavg.m_Type),zyi.zavg.m_sName,parseInt(zyi.zavg.znf),zccl,zyi.zavg.zpj,zyi.zavg.zpk);}
if(zbdx.m_Type==RfObjectType.RFTYPE_PASSCARD){zbdx.m_lFields=zyi.m_lFields;zbdx.zbid=zyi.zbid;}
else if(zbdx.m_Type==RfObjectType.RFTYPE_SAFENOTE){zbdx.zbib=zyi.zbib;}
if(zbge!=undefined){var zfgy=zfgz(zbge);if(zfgy[zcv]==true){var zatz=zfha(zaus,zbdx,zbdx.m_sName,zbdx.zpk,zbge);zatz[zbu]=zavj;zatz[zco]=zbdx;return zatz;}
else{zfgy[zco]=zbdx;zfgy[zbu]=zavj;if(zfgy[zbv]==1){zfgy[zbv]=2;}
return zfgy;}}else{var zatz=zfhb(zaus,zbdx,zbdx.m_sName,zbdx.zpk,zccl,zfgx);zatz[zbu]=zavj;zatz[zco]=zbdx;return zatz;}
}catch(zmk){}};function zfhc(zbiq,zfgq){try{if(zard["rf_show_auto_savebar_chk"]!=undefined&&(zard["rf_show_auto_savebar_chk"]==false||zard["rf_show_auto_savebar_chk"]=='false')){return;}
var zfhd=new zdgm();g_Settings.zdfy(zbiq.m_sMatchURL,zfhd);if(zfhd.zdgb&&zfhd.zdgb.length>0){if(zard["rf_offer_save_another_pcard_chk"]==false||zard["rf_offer_save_another_pcard_chk"]=='false'){return;}
}var zfhe=zfhf(zbiq.m_sMatchURL,zfhd.zdgb);zfhg();var arr=g_Settings.zddx;var zcxx=zard["rf_pwd_protect_chk"];var zaty=new Object();zaty[zbn]=zad;zaty[zct]=arr;zaty[zck]=zfhe.toString();zaty[zbc]=zcxx;zdeh(zfgq,zaty,"all");}
catch(zmk){}};function zyd(zato){return zfhg(zato);}
;function zfhg(zato){try{var zfhh=false;if(g_Settings.zddx.length==0){zfhh=true;}
if(zfhh==true){g_Settings.zddx.push("Home");var zbel=zfhi(zgw,g_Settings.zddx);}
var zatz=new Object();zatz[zbu]=zato;zatz[zcv]=zbel;zatz[zbx]=g_Settings.zddx;return zatz;}
catch(zmk){}};function zfhf(zfct,zfhj){try{if(zfct.indexOf("?")!=-1){zfct=zfct.substr(0,zfct.indexOf("?"));}
var zdfw=new zoo(zfct);var zpy=new String(zdfw.key("host"));var zfhk=false;var zfhl=10000;var zfhm=zpy;for(var zblk=0;zblk<zfhl;++zblk){zfhm=zblk==0?zpy:zpy+" - "+zblk.toString();if(!zfhn(zfhm,zfhj)){break;}
}zpy=zfhm;return zpy;}catch(zmk){return"";}};function zfhn(zpy,zfhj){try{for(var zov=0;zov<zfhj.length;++zov){var zot=zfhj[zov];var zbdu=zot.zavg.m_sName;if(zpy.toLowerCase()==zbdu.toLowerCase()){return true;}
}return false;}catch(zmk){return false;}};function zxn(zato){return zfho();}
;function zys(zato){var zbge=zato[zdn];return zfhp(zbge);}
;function zyr(zato){var zbgd=zato[zdj];var zbge=zato[zdn];var zbgf=zato[zdk];var zpy=zato[zcg];var zbgg=zato[zdi];return zfhq(zbgd,zbge,zbgf,zpy,zbgg);}
;function zyq(zato){var zbej=zfhr(zato);var zatz=new Object();zatz[zbu]=zato;zatz[zct]=zbej;return zatz;}
;function zyk(zato){zfhs(zato);};function zfhs(zato){try{var zpy=zato[zcg];var zbqr=zato[zbd];var zbqp=zato[zch];var zph=zato[zcm];var zbqq=zato[zcn];if(zbqr){zarj=zpy;zari=zph;zard[zfgb]=zarj;zard[zfgc]=zari;zavr();return;}
if(zard[zfgb]==zbqp&&zard[zfgc]==zbqq){zard[zfgb]=zpy;zard[zfgc]=zph;zavr();}
zarj=zpy;zari=zph;}catch(zmk){}};function zbff(){return{zarj:zarj,zari:zari}
;};function zbfe(){try{if(zarj!=""){var zauz=new zpc();zauz.m_Type=RfObjectType.RFTYPE_IDENTITY;zauz.zpk=zari;zauz.m_sName=zarj;var zaty=new Object();zaty[zbf]=null;zaty[zaz]="view";zaty[zdn]="";zaty[zct]=zauz;var zatz=zyc(zaty);if(zatz[zcv]==true){return;}
if(zatz[zcv]==false){if(zatz[zbv]==1||zatz[zbv]==2){return;}
else if(zatz[zbv]==3){zarj="";zari="";zfht();return;}
else{return;}}return;}zfht();}catch(zmk){}};function zfht(){try{var zph=zgw;var zbap=g_Settings.zbau(zph);if(!zbap){var zatz=zbav(zph);if(zatz[zcv]==false){if(zatz[zbv]==zkd){zfhu();if(zdr){opera.extension.broadcastMessage({"msg":"rf_logoff_occured"}
);}}return;}}var zbao=new Array();g_Settings.zbax(zbao,zph,RfObjectType.RFTYPE_IDENTITY);for(var zne=0;zne<zbao.length;zne++){var zbkn=zbao[zne];if(zbkn.m_Type==RfObjectType.RFTYPE_IDENTITY){zarj=zbkn.m_sName;zari=zbkn.zpk;break;}
}}catch(zmk){}};function zyn(zavj){var zatz=zfhv(zavj[zdn]);zatz[zbu]=zavj;return zatz;}
;function zxy(zavj){try{var zarn=zavj[zce];var zph=zavj[zcm];var zbhe=zavj[zcu];var zbap=g_Settings.zbau(zph);if(!zbap){var zatz=zbav(zph);if(zatz[zcv]==false){zatz[zbu]=zavj;return zatz;}
}else{}var zbao=new Array();g_Settings.zbax(zbao,zph,zbhe);var zatz=new Object();zatz[zcv]=true;zatz[zbb]=zbao;zatz[zbu]=zavj;zatz[zcq]=zard;zatz[zbz]=zarj;zatz[zca]=zari;zatz[zdg]=g_currUrl;return zatz;}
catch(zmk){}};function zyf(zdqz){return zfhw(zdqz);}
;function zfhw(zavj){try{var zfhx=zavj["relative_path"];var zatz=zfhy(zfhx);if(zatz[zcv]==true){var zdfp=g_Settings.zdfl(zfhx);zatz[zco]=zdfp;}
zatz[zbu]=zavj;return zatz;}catch(zmk){}};function zxz(zato){return zfhz(zato);}
;function zfhz(zato){try{var zyi=zato[zct];var zri=zato[zcg];var zrj=zato[zcm];if(zdr||zdu){var zyi=new zpc(zyi);}
var zatz=zfia(zyi,zri,zrj);if(zatz[zcv]==true){var zfib=g_Settings.zdfm(zyi,zri,zrj);zatz[zco]=zfib;if(zyi&&zyi.m_Type==RfObjectType.RFTYPE_PASSCARD&&zyi.znf==RfObjectMode.RF_OBJ_MODE_DEF){zffv.zcyc(zyi);zffv.zcyd(zfib);}
}zatz[zbu]=zato;return zatz;}catch(zmk){}};function zyo(zato){return zdfq(zato);}
;function zdfq(zato){try{var zyi=zato[zct];var zatz=zfic(zyi);if(zatz[zcv]==true){if(zyi.m_Type!=RfObjectType.RFTYPE_NONE){g_Settings.zdfq(zyi);if(zyi&&zyi.m_Type==RfObjectType.RFTYPE_PASSCARD&&zyi.znf==RfObjectMode.RF_OBJ_MODE_DEF){zffv.zcyc(zyi);}
}}zatz[zbu]=zato;return zatz;}catch(zmk){}};function zym(zato){return zfid(zato);}
;function zfid(zato){var zatz=new Object();zffv.zcxz();var arr=zffv.zcyb();zatz[zbu]=zato;zatz["arr"]=arr;zatz[zcv]=true;return zatz;}
;function zyl(zato){return zfie(zato);};function zfie(zato){try{var zatz=new Object();var arr=zffv.zcyb();zatz[zbu]=zato;zatz[zcv]=true;zatz["arr"]=arr;return zatz;}
catch(zmk){}};function zyc(zato){try{var zdep=zato[zct];var zbge=zato[zdn];var zfif=zato[zbf];var zaut=zato[zaz];if(zaut==undefined){zaut="view";}
if(zdr||zdu){var zdep=new zpc(zdep);}if(zdep&&zdep.m_Type==RfObjectType.RFTYPE_PASSCARD&&zdep.znf==RfObjectMode.RF_OBJ_MODE_DEF){zffv.zcyd(zdep);}
var zfig=new Object();if(zdep.m_Type==RfObjectType.RFTYPE_PASSCARD){zfig[zco]=new zbic();}
else if(zdep.m_Type==RfObjectType.RFTYPE_IDENTITY){zfig[zco]=new Object();}
else if(zdep.m_Type==RfObjectType.RFTYPE_SAFENOTE){zfig[zco]=new zbhz();}
var zatz=g_Settings.zder(zfig,zdep,null,zbge,zfif,zaut);zatz[zco]=zfig[zco];zatz[zbu]=zato;return zatz;}
catch(zmk){}};function zye(zavj){try{var zbii=zavj[zdm];var zarn=zavj[zce];var zbij=zavj[zbf];var zyi=zavj[zct];var zauz=new zpc(zyi);if(zbij!=null){zard["rf_cache_mpwd_until_logut_chk"]=zbij;zavr();}
var zaty=new Object();zaty[zbf]=zbij;zaty[zdn]=zbii;zaty[zaz]="fill";zaty[zct]=zauz;var zatz=zyc(zaty);zatz[zbu]=zavj;if(zatz[zcv]==true){zfih(zatz[zco],zavj);}
return zatz;}catch(zmk){}};function zfih(zfii,zavj){var zavy=zavj[zbj];var zbmn=zavj[zcp];if(zsf==""){zsd();}
var zfij=new zczu();var zbnu=zfii.zacf();var zbnv=zbnu.zack;for(var zne=0;zne<zbnv.length;++zne){var zboq=zbnv[zne];var zbof=zboq.m_sName;var zbog=zbnu.zboh(zbof);for(var zboi=0;zboi<zbog.length;zboi++){var zacv=zbog[zboi];var zfik=new zczp(zbof,zacv,zbog.length);for(var zbkg=0;zbkg<zboq.m_lFields.length;++zbkg){var zbnj=zboq.m_lFields[zbkg];var zvg=zbnu.zada(zbnj);if(!zvg){continue;}
var zadb=zvg.zbpa;var zbpb=false;if(zbof=="Location"&&zbnj=="Country"){zbpb=true;}
else if(zadb.zadd()){continue;}var zwb=zvg.zadh(zbnu,zacv);if(zbof=="Location"&&zbnj=="Country"){zfij.zbyo=zwb;}
var zfil=new zczo(zbnj,zwb,"");zfik.zczt(zfil);}zfij.zczv(zfik);}
}var zbqc=zbnu.zadj();if(zbqc){var zfik=new zczp("Custom","Main",1);for(var znh=0;znh<zbqc;znh++){var zvg=zbnu.zadl(znh);var zvu=zvg.zadc().zadg();var zbnk=zvg.zadh(zbnu,"Main");var zbnj=zvg.zadp;var zfil=new zczo(zbnj,zbnk,zvu);zfik.zczt(zfil);}
zfij.zczv(zfik);}zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zaf;zaty[zbj]=zavy;zaty[zcp]=zbmn;zaty[zct]=zfij;zaty[zcx]=zsf;zaty[zdh]=zard[zli];zaty[zbh]=zard["rf_fill_empty_fields_chk"];zdeh(zfin(tab),zaty,"all");}
);};function zyp(zato){zbxw(zato);};function zbxw(zato){zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zan;zaty[zbs]=zato;zdeh(zfin(tab),zaty,"all");}
);};function zxv(zato){zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zar;zaty[zaz]=zato[zaz];zdeh(zfin(tab),zaty,"all");}
);};function zxu(zato){zfio(zato);};function zfio(zato){var zfip=zato[zdn];var zbiq=new zbic();zbiq.zbjd(zho,"","",0,zfip,RfFieldType.RfFieldPassword,0);zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zag;zaty[zdh]=zard[zli];zaty[zcl]=zbiq;zaty[zbj]=false;zdeh(zfin(tab),zaty,"all");}
);};function zyg(zato){return zfiq(zato);};function zfiq(zato){try{var zyi=zato[zct];var zavw=zato[zbl];var zavx=zato[zbk];var zavy=zato[zbj];var zavz=zato[zbm];var zfif=zato[zbf];var zxs=zato[zdm];var zyi=new zpc(zyi);if(zyi&&zyi.m_Type==RfObjectType.RFTYPE_PASSCARD&&zyi.znf==RfObjectMode.RF_OBJ_MODE_DEF){zffv.zcyd(zyi);}
g_Settings.zdfd();if(zavw==false){var zfig=new Object();zfig[zco]=new zbic();var zatz=g_Settings.zder(zfig,zyi,null,zxs,zfif,"fill");if(zatz[zcv]==true){if(zdu){var zfir=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();var zfis=zfin(zfir);var zaty=new Object();zaty[zbn]=zae;zaty[zdh]=zard[zli];zaty[zcl]=zfig[zco];zaty[zbj]=zavy;zdeh(zfis,zaty,"all");}
else{zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zae;zaty[zdh]=zard[zli];zaty[zcl]=zfig[zco];zaty[zbj]=zavy;zdeh(zfin(tab),zaty,"all");}
);}}zatz[zbu]=zato;return zatz;}var zaty=new Object();zaty[zbf]=zfif;zaty[zaz]="fill";zaty[zdn]=zxs;zaty[zct]=zyi;var zatz=zyc(zaty);if(zatz[zcv]==false){zatz[zbu]=zato;return zatz;}
var zbir=zatz[zco].m_sGotoURL;g_Settings.zdfb(zavx,zavy,false,zbir,zyi,zatz[zco]);if((zbir.indexOf("http://")!=-1)||(zbir.indexOf("https://")!=-1)){zfit(zbir,zavz);}
else{if(zbir=="about:blank"){zfit(zbir,zavz);}else{if(zbir.indexOf("www")==0){zfit(zbir,zavz);}
else{alert("Error. Incorrect Url: "+zbir);}}}zatz[zbu]=zato;zatz[zcv]=true;return zatz;}
catch(zmk){var zatz=new Object();zatz[zcv]=false;zatz[zbv]=0;return zatz;}
};function zxw(){zfiu();};function zfiu(){g_Settings.zdei(true);;}
;if(zdp){chrome.extension.onConnect.addListener(function(port){try{if(!port){return;}
var tab=port.tab||(port.sender&&port.sender.tab);if(!tab||!tab.id){return;}
port.onDisconnect.addListener(zfiv);zfiw();var zfis=tab.id;if(typeof(zffw[zfis])=="undefined"||!zffw[zfis]){zffw[zfis]=new Array();}
var zdgc=zffw[zfis].length;zffw[zfis][zdgc]=port;var zaty=new Object();zaty[zbn]=zas;zaty[zbt]=zdgc;zdeh(zfis,zaty,zdgc);if(g_Settings.zdec()){var zfix=new Object();zfix[zbn]=zah;zdeh("all",zfix,"all");}
port.onMessage.addListener(zfiy);if(port[zcg]=="true"){setTimeout(function(){zfiz(zfis,tab.url);}
,1500);var zbip=zffx.znx(zfis);if(zbip!=null){zfhc(zbip,zfis);}
}}catch(zmk){}});};function zfiy(zfja,port){if(zfja==null||!port){return;}
var tab=port.tab||(port.sender&&port.sender.tab);if(!tab||!tab.id){return;}
zfjb(tab.id,zfja,0,port)};function zfiv(port){if(!port){return;}
var tab=port.tab||(port.sender&&port.sender.tab);if(!tab||!tab.id){return;}
zfjb(tab.id,null,1,port);}function zfjc(zfjd){try{if(zdq){for(var zoy=0;zoy<safari.application.browserWindows.length;zoy++){var zfje=safari.application.browserWindows[zoy];for(var zov=0;zov<zfje.tabs.length;++zov){var zfjf=zfin(zfje.tabs[zov]);zdeh(zfjf,zfjd,"all");}
}}else if(zdr){var zfjg=opera.extension.windows.getAll();for(var zoy=0;zoy<zfjg.length;zoy++){var zfje=zfjg[zoy];for(var zov=0;zov<zfje.tabs.length;++zov){var zfjf=zfin(zfje.tabs[zov]);zdeh(zfjf,zfjd,"all");}
}}}catch(zmk){}};function zfiz(zfis,zfjh){try{var zra=new Object();g_Settings.zdfe(zra);var zbbd=zra.zbbd;var zcyp=zra[zbj];var zfji=zra.zop;var zdff=zra.zdff;if(!zbbd){return;}
if(zbbd&&g_Settings.zdft(zfji,zfjh)){var zfjj=g_Settings.zdfh(RfObjectType.RFTYPE_PASSCARD,false);var zfig=new Object();zfig[zco]=new zbic();var zfjk=g_Settings.zder(zfig,zfjj,null,"",false,"fill");if(!zfjk[zcv]&&zra.zcyk){zfig[zco]=zra.zcyk.clone();}
g_Settings.zdfd();var zaty=new Object();zaty[zbn]=zae;zaty[zdh]=zard[zli];zaty[zcl]=zfig[zco];zaty[zbj]=zcyp;zdeh(zfis,zaty,"all");}
else{}}catch(zmk){}};function zfjb(zfgq,message,zfjl,port){try{if(zfjl){zfgr(zfgq,port);return;}
if(typeof(message[zbn])=="undefined"){return;}if(!zfjm(zfgq,message,port)){}
}catch(zmk){}};function zfjn(zfjo,zfjp,message,zfjq){if(zfjo==""&&zfjp==""){return;}
var zfjr=message[zcb];var zfjs=message[zba];var zfjt=message[zdc];var zfju=message[zbq];var zfjv=message[zbr];if(zfjs=="false"){zfjs=false;}
if(zfjt=="false"){zfjt=false;}if(zfju=="false"){zfju=false;}
if(zfjv=="false"){zfjv=false;}if(typeof zfjp!="string"){zfjp="";}
zfjp=zfjp.split("_");var zfjw=false;var zfjx=false;var zdof=false;var zfjy=false;for(var zclw in zfjp){if(zfjp[zclw]=="control"){zfjw=true;}
if(zfjp[zclw]=="meta"){zfjy=true;}if(zfjp[zclw]=="alt"){zfjx=true;}
if(zfjp[zclw]=="shift"){zdof=true;}}if(zfjo==zfjr&&zfjs==zfjx&&zfjv==zfjy&&zfju==zfjw&&zfjt==zdof){switch(zfjq){case"FILL_IDENTITY":var zauz=new zpc();zauz.m_Type=RfObjectType.RFTYPE_IDENTITY;zauz.zpk=zari;zauz.m_sName=zarj;var zaty=new Object();zaty[zce]=0;zaty[zcp]=0;zaty[zct]=zauz;zaty[zbj]=false;zaty[zbf]=null;zaty[zdm]=null;var zatz=zye(zaty);if(zatz[zcv]==false){if(zatz[zbv]==1||zatz[zbv]==2){var zatp=zatz[zbv]==1?"":"Wrong master password";zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zau;zaty[zcf]=zatz;zatz[zbw]=zatp;zdeh(zfin(tab),zaty,"all");}
);return;}else if(zatz[zbv]==zkd){return;}}break;case"SHOW_OPTIONS":var zaty=new Object();zaty[zce]=0;zaty[zbm]=true;if(zdr){zaty[zdg]="options.html";}
else{zaty[zdg]="rf_prefs.html";}zxo(zaty);break;case"GENERATE_FILL_PWD":var zwj=parseInt(zard[zky]);var zwk=parseInt(zard[zkz]);var zfjz=zard[zla];var zfka=zard[zlc];var zwg=zard[zlb];var zwh=zard[zld];var zcfp=zard[zle];var zfkb=zwd(zfjz,zfka,zwg,zwh,zcfp,zwj,zwk);var zaty=new Object();zaty[zce]=0;zaty[zdn]=zfkb;zxu(zaty);break;case"SET_FIELDS":var zaty=new Object();zaty[zaz]=rfjs_EnRfSetClearFields.RF_SET_FIELDS;zxv(zaty);break;case"CLEAR_FIELDS":var zaty=new Object();zaty[zaz]=rfjs_EnRfSetClearFields.RF_CLEAR_FIELDS;zxv(zaty);break;case"RESET_FIELDS":var zaty=new Object();zaty[zaz]=rfjs_EnRfSetClearFields.RF_RESET_FIELDS;zxv(zaty);break;case"FILL_NEXT_LOGIN":zfkc(true);break;case"FILL_PREV_LOGIN":zfkc(false);break;default:break;}
}};function zfkc(zfkd){try{var zara=[];zara=zbdq();var zwr=zara.length;if(!zwr){return;}
var zfke=zfgd;var zbdx=zara[zfgd].zavg;if(zfkd){if(zfgd+1==zwr){zfgd=0;}
else{zfgd++;}}else{if(zfgd==0){zfgd=zwr-1;}else{zfgd--;}
}var zaty=new Object();zaty[zct]=zbdx;zaty[zce]=0;zaty[zci]=0;zaty[zbj]=false;zaty[zbf]=null;zaty[zdm]=null;zaty[zbl]=false;zaty[zbk]=true;zaty[zbm]=false;var zatz=zyg(zaty);if(zatz[zcv]==false){if(zatz[zbv]==1||zatz[zbv]==2){var zatp=zatz[zbv]==1?"":"Wrong master password";zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zaw;zaty[zcf]=zatz;zatz[zbw]=zatp;zaty[zay]=zfke;zdeh(zfin(tab),zaty,"all");}
);return;}else if(zatz[zbv]==zkd){return;}}}catch(zmk){}
};function zfjm(zfgq,message,port){try{switch(message[zbn]){case zax:var zfkf=message[zbf];var zbge=message[zdn];var zbxh=message[zay];var zara=[];zara=zbdq();var zwr=zara.length;if(!zwr){return;}
var zbdx=zara[zbxh].zavg;var zaty=new Object();zaty[zct]=zbdx;zaty[zce]=0;zaty[zci]=0;zaty[zbj]=false;zaty[zbf]=zfkf;zaty[zdm]=zbge;zaty[zbl]=false;zaty[zbk]=true;zaty[zbm]=false;var zatz=zyg(zaty);if(zatz[zcv]==false){if(zatz[zbv]==1||zatz[zbv]==2){var zatp=zatz[zbv]==1?"":"Wrong master password";zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zaw;zaty[zcf]=zatz;zatz[zbw]=zatp;zaty[zay]=zbxh;zdeh(zfin(tab),zaty,"all");}
);return;}else if(zatz[zbv]==zkd){return;}}break;case zav:var zfkf=message[zbf];var zbge=message[zdn];var zauz=new zpc();zauz.m_Type=RfObjectType.RFTYPE_IDENTITY;zauz.zpk=zari;zauz.m_sName=zarj;var zaty=new Object();zaty[zce]=0;zaty[zcp]=0;zaty[zct]=zauz;zaty[zbj]=false;zaty[zbf]=zfkf;zaty[zdm]=zbge;var zatz=zye(zaty);if(zatz[zcv]==false){if(zatz[zbv]==1||zatz[zbv]==2){var zatp=zatz[zbv]==1?"":"Wrong master password";zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zau;zaty[zcf]=zatz;zatz[zbw]=zatp;zdeh(zfin(tab),zaty,"all");}
);return;}else if(zatz[zbv]==zkd){return;}}break;case zak:zfjn(zard[zlj],zard[zlk],message,"SHOW_OPTIONS");zfjn(zard[zll],zard[zlm],message,"FILL_IDENTITY");zfjn(zard[zlr],zard[zls],message,"SET_FIELDS");zfjn(zard[zln],zard[zlo],message,"CLEAR_FIELDS");zfjn(zard[zlp],zard[zlq],message,"RESET_FIELDS");zfjn(zard[zlt],zard[zlu],message,"GENERATE_FILL_PWD");zfjn(zard[zlv],zard[zlw],message,"FILL_NEXT_LOGIN");zfjn(zard[zlx],zard[zly],message,"FILL_PREV_LOGIN");break;case zao:var zfhd=new zdgm();var zbbr=message[zct].m_sMatchURL;g_Settings.zdfy(zbbr,zfhd);var zfhe=zfhf(zbbr,zfhd.zdgb);message["pcardName"]=zfhe;if(zdp){var zaty=new Object();zaty["message_name"]=zao;zaty["rf_message"]=message;chrome.extension.sendMessage(zaty);}
else if(zdr){zfkg(zao,{zatz:message});}else if(zdu){var zxi={}
;zxi[zda]=message[zda];zxi[zcc]=message[zcc];zxi["pcardName"]=zfhe;zxi["match_url"]=zbbr;zxi[zct]=message[zct];var zfix={}
;zfix[zcv]=zxi;setTimeout(function(){zfkg("save_object_manually_result",zfix);}
,10);}break;case zac:var zbip=zffx.znx(zfgq);zffx.zny(zfgq);zbip=zffx.znx(zfgq);break;case zam:var zbiq=message[zcl];if(zbiq.m_sMatchURL==""){zfim(null,function(tab){zbiq.m_sMatchURL=tab.url;}
);}var zbip=zffx.znx(zfgq);zffx.zny(zfgq);zbip=zffx.znx(zfgq);zffx.znt(zfgq,zbiq);var zbip=zffx.znx(zfgq);if(zbip!=null){}
break;case zab:var zfkf=message[zbf];var zbge=message[zdn];if(zfkf!=null){zard["rf_cache_mpwd_until_logut_chk"]=zfkf;zavr();}
var zatz=zfgz(zbge);zatz[zbf]=zard["rf_cache_mpwd_until_logut_chk"];if(zatz[zcv]==false){zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zal;zaty[zcf]=zatz;zdeh(zfin(tab),zaty,"all");}
);}else{var zbip=zffx.znx(zfgq);zbip.m_Type=RfObjectType.RFTYPE_PASSCARD;zbip.znf=RfObjectMode.RF_OBJ_MODE_DEF;var zatz=zfha(zbip.m_sMatchURL,zbip,message[zcg],message[zcm],message[zdn]);if(zatz[zcv]==true){zffx.zny(zfgq);}
zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zal;zaty[zcf]=zatz;zdeh(zfin(tab),zaty,"all");}
);}break;case zaq:var zatz=zfhv(message[zdn]);zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zaj;zatz[zdn]=message[zdn];zaty[zcf]=zatz;zdeh(zfin(tab),zaty,"all");}
);break;case zap:var zpy=message[zcg];var zbip=zffx.znx(zfgq);var zpf=message[zbc];zard["rf_pwd_protect_chk"]=zpf;zavr();zbip.m_Type=RfObjectType.RFTYPE_PASSCARD;zbip.znf=RfObjectMode.RF_OBJ_MODE_DEF;if(message[zcm]=="Home"){message[zcm]=zgw;}
var zbge=message[zdn];var zatz=null;if(zbge){zatz=zfha(zbip.m_sMatchURL,zbip,zpy,message[zcm],zbge);}
else{zatz=zfhb(zbip.m_sMatchURL,zbip,zpy,message[zcm],zpf,true);}
if(zatz[zcv]==true){var zra=new zpc(RfObjectType.RFTYPE_PASSCARD,zpy,RfObjectMode.RF_OBJ_MODE_DEF,zpf,false,message[zcm]);zffv.zcyd(zra);zffx.zny(zfgq);}
zatz[zbf]=zard["rf_cache_mpwd_until_logut_chk"];zfim(null,function(tab){var zaty=new Object();zaty[zbn]=zal;zaty[zcf]=zatz;zdeh(zfin(tab),zaty,"all");}
);break;case zaa:var tab=port.tab||(port.sender&&port.sender.tab);if(!tab||!tab.id){return;}
if(message["url"]==tab.url){}break;default:return false;break;}
return true;}catch(zmk){return false;}};function zdeh(zfgq,message,zfkh){try{if(zfgq=="all"){for(var tab in zffw){if(zffw[tab]){zdeh(tab,message,"all");}
}return;}if(typeof(zffw[zfgq])=="undefined"||!zffw[zfgq]){return;}
var zfki=true;for(var zov in zffw[zfgq]){if(typeof(zfkh)=='undefined'){if(!zfki){continue;}
zfki=false;}else if(zfkh!='all'&&zfkh!=zov){continue;}
if(zdp){zffw[zfgq][zov].postMessage(message);}else if(zdq){message[zbt]=zov;if(zffw[zfgq][zov].page){zffw[zfgq][zov].page.dispatchMessage('rf_message',message);}
}else if(zdr){message[zbt]=zov;message["msg_name"]="rf_message";try{if(zffw[zfgq][zov].postMessage){zffw[zfgq][zov].postMessage(message);}
}catch(zmk){}}else if(zdu){message[zbt]=zov;var zfkj={}
;zfkj["msg_name"]="rf_message";zfkj["data"]=message;message[zbt]=zov;window.external.mxGetRuntime().zxj(zov,zfkj)}
}}catch(zmk){}};function zxo(zato){zfit(zato[zdg],zato[zbm]);}
;function zfit(zfeq,zfkk){try{if(zdp){if(zfkk){chrome.tabs.create({"url":zfeq}
,null);}else{chrome.tabs.getSelected(null,function(zbfn){chrome.tabs.update(zbfn.id,{"url":zfeq}
);});}}else if(zdq){if(zfkk==undefined){zfkk=false;}
if(zfkk==true){var tab=safari.application.activeBrowserWindow.openTab();tab.url=zfeq;}
else{var tab=safari.application.activeBrowserWindow.activeTab;tab.url=zfeq;}
var zra=new Object();zra.url=zfeq;setTimeout(function(){zfkl(zra);}
,300);}else if(zdr){if(zfkk){opera.extension.tabs.create({"url":zfeq,"focused":true}
);}else{var zfkm=opera.extension.tabs.getFocused();zfkm.update({"url":zfeq}
);}}else if(zdu){if(zfkk){window.external.mxGetRuntime().create("mx.browser").tabs.newTab({url:zfeq,zfkn:true,position:'last'}
);}else{var zfkm=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();zfkm.navigate(zfeq);}
}}catch(zmk){}};function zfko(){zfit(zrr("about.html"),true);}
;function zfkp(){zfit(zrr("rf_login.html"),true);}
;function zfkq(){zfit(zrr("rf_passcards_tree.html?types=2"),true);}
;function zfkr(){zfit(zrr("rf_passcards_tree.html?types=1"),true);}
;function zfks(){zfit(zrr("rf_master_pwd.html"),true);}
;function zfkt(){zfit(zrr("rf_pwdgenerator.html"),false);}
;function zfku(){zfit(zrr("rf_signup.html"),false);}
;function zfkv(){zfit(zhb+zte("language"),false);}
;function zfkw(){zfit(zrr("rf_prefs.html"),true);}
;function zfkg(zfkx,zxi){try{if(zdq){safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(zfkx,zxi);}
else if(zdr){opera.extension.broadcastMessage({"msg":zfkx,zfjd:zxi}
);}else if(zdu){var zfky={};zfky["msg_type"]=zfkx;zfky["data"]=zxi;window.external.mxGetRuntime().zxj(zxf,zfky);}
}catch(zmk){}};function zfkz(zfla,zfjd){try{if(zdq){for(var zoy=0;zoy<safari.application.browserWindows.length;zoy++){var zfje=safari.application.browserWindows[zoy];for(var zov=0;zov<zfje.tabs.length;++zov){zfje.tabs[zov].page.dispatchMessage(zfla,zfjd);}
}}else if(zdr){opera.extension.broadcastMessage({"msg":zfla,zfjd:zfjd}
);}else if(zdu){var zfky={};zfky["msg_type"]=zfla;zfky["data"]=zfjd;window.external.mxGetRuntime().zxj(zxf,zfky);}
}catch(zmk){}};function zfim(zbxe,zevy){if(zdp){chrome.tabs.getSelected(zbxe,zevy);}
else if(zdq){zevy(safari.application.activeBrowserWindow.activeTab);}
else if(zdr){zevy(opera.extension.tabs.getFocused());}
else if(zdu){var zfir=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();zevy(zfir);}
};function zckq(zflb,zflc){zfgd=0;zfim(null,function(tab){zfld(tab,zflb,zflc);}
);};function zfld(tab,zflb,zflc){try{if(zdp){zfgd=0;setTimeout(function(){chrome.tabs.remove(zfin(tab));}
,zflc);}else if(zdq){setTimeout(function(){tab.close();}
,zflc);}else if(zdr){setTimeout(function(){tab.close();}
,zflc);}}catch(zmk){}};if(zdp){if(chrome.windows.onFocusChanged){chrome.windows.onFocusChanged.addListener(function(zfle){if(zfle!=chrome.windows.WINDOW_ID_NONE){if(chrome.tabs.query){chrome.tabs.query({"windowId":zfle,"active":true}
,function(tabs){if(tabs.length==1){zfgo(tabs[0]);}
});}}});};if(chrome.windows.onRemoved){chrome.windows.onRemoved.addListener(function(zfle){}
);}if(chrome.tabs.onActivated){chrome.tabs.onActivated.addListener(function(zflf){zfgd=0;}
);}chrome.tabs.onSelectionChanged.addListener(function(zfgq,tab){chrome.tabs.get(zfgq,function(tab){zfgo(tab);}
);});chrome.tabs.onRemoved.addListener(function(zfgq,zejq){var zbip=zffx.znx(zfgq);zffx.zny(zfgq);zbip=zffx.znx(zfgq);zfgr(zfgq);}
);};if(zdr){opera.extension.addEventListener("disconnect",function(event){}
,false);opera.extension.tabs.addEventListener("focus",function(event){zfgo(event.tab);}
,false);opera.extension.tabs.addEventListener("close",function(event){if(event.tab&&event.tab.id){var zfgq=event.tab.id;var zbip=zffx.znx(zfgq);zffx.zny(zfgq);zbip=zffx.znx(zfgq);zfgr(zfgq);}
},false);};function zflg(zbxe){if(zdu){var zop=zbxe["topurl"];var zbbs=zbxe["get_top"];var tabs=window.external.mxGetRuntime().create("mx.browser").tabs;for(var zov=0;zov<tabs.length;zov++){var zflh=tabs.getTab(zov);if(zflh.url==zop){var zfgq=zfin(zflh);return zfgq;}
}if(zbbs==true){return-1;}else{var zfli=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();if(zfli){var zfgq=zfin(zfli);return zfgq;}
return-1;}}else if(zdr){var zfjg=opera.extension.windows.getAll();for(var zflj=0;zflj<zfjg.length;zflj++){var zflk=zfjg[zflj];var zfll=zflk.tabs.getAll();for(var zflm=0;zflm<zfll.length;zflm++){if(zbxe.data.message.topurl==zfll[zflm].url){var zfgq=zfin(zfll[zflm]);return zfgq;}
}}if(zbxe.data.message.get_top==true){return-1;}else{var zfli=opera.extension.tabs.getFocused();var zfln;if(zfli){var zfgq=zfin(zfli);return zfgq;}
return-1;}}else{return zfin(zflo(zbxe));}};function zfin(tab){if(zdp){return tab.id;}
else if(zdq){if(typeof(tab.RFData)=='undefined'){tab.RFData=zffy++;zffw[tab.RFData]=tab;}
return tab.RFData;}else if(zdr){if(typeof(tab.id)!="undefined"){return tab.id;}
for(var zflp in zffw){if(zffw[zflp].url==tab.url){return zflp;}
}var zne=zffy++;zffw[zne]=tab;return zne;}else if(zdu){if(typeof(tab.id)!="undefined"){return tab.id;}
}};function zflq(zbxe){if(zdu){return zbxe["topurl"];}
else{return zdr?zbxe.data.message.topurl:zbxe.target.url;}
};function zflo(zbxe){if(zdu){var zop=zbxe.topurl;var tabs=window.external.mxGetRuntime().create("mx.browser").tabs;for(var zov=0;zov<tabs.length;zov++){var zflh=tabs.getTab(zov);if(zflh.url==zop){return zflh;}
}return null;}else{return zdr?zbxe.source:zbxe.target;}
};function zfgr(zfgq,port){if(zdq){for(var zov in zffw){for(var zoy in zffw[zov]){if(typeof(zffw[zov][zoy].zfje)=='undefined'||!zffw[zov][zoy].zfje){delete zffw[zov];}
break;}}}else if(zdu){if(zffw[zfgq]){delete zffw[zfgq];}
}else if(zdr){if(typeof(zffw[zfgq])!="undefined"){delete zffw[zfgq];}
}else if(zdp){zfgd=0;if(typeof(zffw[zfgq])!="undefined"){if(typeof(zffw[zfgq].length)!="undefined"&&zffw[zfgq].length&&zffw[zfgq].length==1){delete zffw[zfgq];}
else if(!port){delete zffw[zfgq];}else{var zflr=zffw[zfgq];if(!zflr){return;}
for(var zov=0;zov<zflr.length;zov++){var zpb=zflr[zov];if(zpb.portId_==port.portId_){zffw[zfgq].splice(zov,1);break;}
}}}}};function zfiw(){try{if(zdp){chrome.tabs.getSelected(null,zfgo);}
}catch(zmk){}};function zfgo(tab){try{if(!tab){g_currUrl="";return;}
if(zdp){zfgd=0;if(tab.url.startsWith("chrome-devtools")){return;}
if(tab.url==""||tab.url.startsWith("chrome://")||tab.url.startsWith("chrome-")){g_currUrl="";return;}
g_currUrl=tab.url;return;}else if(zdr){if(!tab.url){g_currUrl="";return;}
g_currUrl=tab.url;return;}else if(zdu){var zfls=tab;var tabs=window.external.mxGetRuntime().create("mx.browser").tabs;var zfli=tabs.getTabById(zfls);if(zfli){if(zfli.url=="about:blank"){g_currUrl="";return;}
g_currUrl=zfli.url;}else{for(var zov=0;zov<tabs.length;zov++){var zflh=tabs.getTab(zov);if(zflh.id==zfls){if(zflh.url=="about:blank"){g_currUrl="";return;}
g_currUrl=zflh.url;break;}}}}}catch(zmk){}};function zflt(){if(zdp){return zflu;}
else if(zdq){return safari.application.activeBrowserWindow.activeTab.url;}
else if(zdr){}};function zflv(url){zflu=url;};function zflw(){}
;if(zdp||zdq){window.top.log=function(zrq){console.log(zrq);}
;}function zfgj(event){try{if(!zdq){return;}if(event.command=='RFToolButtonClick'){if(!zfho()){zfkp();}
else{zflx(false);zfly();}}}catch(zmk){}};function zflx(zflz){try{if(!zdq){return;}
for(var zov=0;zov<safari.extension.bars.length;zov++){if(safari.extension.bars[zov].zdef=='RFMenu'){safari.extension.bars[zov].label=zte('RoboForm_Menu');if(zflz){}
if(zflz){var zcjr=zfma();if(zcjr[zcv]==false){safari.extension.bars[zov].hide();return;}
}safari.extension.bars[zov].contentWindow.redraw_menu();}
}}catch(zmk){}};function zfly(zfmb){try{if(!zdq){return;}
if(zfmb==undefined||zfmb==null){zfmb=true;}for(var zov=0;zov<safari.extension.bars.length;zov++){if(safari.extension.bars[zov].zfje==safari.application.activeBrowserWindow&&safari.extension.bars[zov].zdef=='RFMenu'){if(zfmb==false){safari.extension.bars[zov].show();}
else if(zfmb==true&&safari.extension.bars[zov].visible){safari.extension.bars[zov].hide();}
else{safari.extension.bars[zov].show();}}}}catch(zmk){}
};function zfmc(zrq,zbge){try{if(!zdq){return;}for(var zov=0;zov<safari.extension.bars.length;zov++){if(safari.extension.bars[zov].zdef=='RFMenu'){safari.extension.bars[zov].contentWindow.tbar_set_err_msg(zrq,zbge);}
}}catch(zmk){}};function zfkl(zato){try{if(zdq){var zfln=safari.application.activeBrowserWindow.activeTab.url;if(zfln!=g_currUrl){g_currUrl=zfln;zfmd();}
}if(zdr){var zfli=opera.extension.tabs.getFocused();var zfln;if(zfli){zfln=zfli.url;}
if(zfln!=g_currUrl){g_currUrl=zfln;}}}catch(zmk){}
};function zfmd(){try{if(!zdq){return;}for(var zov=0;zov<safari.extension.bars.length;zov++){if(safari.extension.bars[zov].zdef=='RFMenu'){safari.extension.bars[zov].contentWindow.redraw_matching_passcards(g_currUrl);}
}}catch(zmk){}};function zbdq(){try{var zfax=new zdgm();zfax.zdgb.length=0;if(g_currUrl&&g_currUrl!=""&&g_currUrl.startsWith("safari")){return zfax.zdgb;}
g_Settings.zdfy(g_currUrl,zfax);return zfax.zdgb;}
catch(zmk){}};function zbwv(event){try{var zavj=null;var zazk="";if(zdq){zazk=event.name;zavj=event.message;}
else if(zdr){zazk=event.data.msg;zavj=event.data.message;event.name=event.data.msg;event.message=event.data.message;}
else if(zdu){zazk=event["msg_type"];zavj=event["data"];event.message=event;event.name=event["name"];}
if(zazk=="rf_fill_password"){zfio(zavj);}else if(zazk=='rf_get_prefs_array'){var zra={}
;for(var zfme in zard){zra[zfme.toString()]=zard[zfme.toString()];}
zfkg('rf_get_prefs_array_result',{"arr":zra});}else if(zazk=='rf_write_pref_array'){var zra=zavj.arr;for(var zfme in zra){zard[zfme.toString()]=zra[zfme];}
zavr();if(zavj["refresh"]){zflx(false);}}else if(zazk=="login_check"){var zcjr=zfma();if(zdu){if(zcjr[zcv]==false){}
else{zbfe();}var zaty=new Object();zaty["result"]=zcjr;zaty["prefs"]=zard;zaty["g_current_identity_name"]=zarj;zaty["g_current_identity_path"]=zari;zfkg('check_is_online_result',zaty);}
}else if(zazk=='rf_do_login'){var zbfx=zxq(zavj["userId"],zavj["password"],zavj[zdl]);if(zbfx[zcv]==true&&zdr){zdeg.icon="images/robo16.png";zbfe();}
if(zbfx[zcv]==true&&zdu){zbfe();}}else if(zazk=="rf_openPageUrl_action"){if(zdr){zfit(zrr(zavj.url),zavj[zbm]);zdeg.popup.width=zeg;zdeg.popup.height=zeh;}
else if(zdu){zfit(zrr(zavj[zdg]),zavj[zbm]);}}else if(zazk=='rf_message'){var zfjf=zflg(event);var zflh=zflo(event);zfjb(zfjf,event.message,0,{tab:zflh}
);}else if(zazk=='rf_connect'){var zbbs=false;var zfjf=zflg(event);var zfmf=zflq(event);if(zfjf==-1){return;}
if(zdq){if(event.message.name==event.target.url){zfgr();zffw[zfjf]=new Array();zbbs=true;}
}else if(zdr||zdu){if(event.message["get_top"]==true&&event.message["name"]==event.message["topurl"]){zffw[zfjf]=new Array();zbbs=true;}
}if(typeof(zffw[zfjf])=="undefined"||!zffw[zfjf]){zffw[zfjf]=new Array();}
var zfkh=event.message[zbt];var zfmg=zflo(event);if(zfmg==null){return;}
var zdgc=zffw[zfjf].length;zfmg.portId_=zfkh;zffw[zfjf][zfkh]=zfmg;var zaty=new Object();zaty[zbn]=zas;zaty[zbt]=zfkh;zaty[zcd]=zsh;zdeh(zfjf,zaty,zfkh);if(g_Settings.zdec()){var zfix=new Object();zfix[zbn]=zah;zdeh(zfjf,zfix,"all");}
if(event["topurl"]==zfmf){setTimeout(function(){zfiz(zfjf,event["topurl"]);}
,2500);var zbip=zffx.znx(zfjf);if(zbip!=null){zfhc(zbip,zfjf);}
}}else if(zazk=="rf_logoff_account"){var zbfx=zxx();var zaty={}
;zaty[zcv]=zbfx;zfkz('rf_logoff_account_result',zaty);}
else if(zazk=='rf_RenameRfOnlineObject_action'){var zauz=new zpc(zavj[zct]);var zatz=zxz(zavj);var zfix={}
;zfix[zcv]=zatz;zfkz('rf_RenameRfOnlineObject_result',zfix);if(zauz.m_Type==RfObjectType.RFTYPE_FOLDER){zfhg();var arr=g_Settings.zddx;var zaty=new Object();zaty[zbn]=zat;zaty[zct]=arr;zfjc(zaty);}
}else if(zazk=="rf_SavePasscardToServer_action"){var zyi=zavj[zct];if(zyi.zavg.m_Type==RfObjectType.RFTYPE_PASSCARD){var zbdx=new zpc(parseInt(zyi.zavg.m_Type),zyi.zavg.m_sName,parseInt(zyi.zavg.znf),zyi.zavg.zpi,zyi.zavg.zpj,zyi.zavg.zpk);}
else if(zyi.zavg&&zyi.zavg.m_Type==RfObjectType.RFTYPE_SAFENOTE){var zbdx=new zpc(parseInt(zyi.zavg.m_Type),zyi.zavg.m_sName,parseInt(zyi.zavg.znf),zyi.zavg.zpi,zyi.zavg.zpj,zyi.zavg.zpk);}
if(zbdx.m_Type==RfObjectType.RFTYPE_PASSCARD){zbdx.m_lFields=zyi.m_lFields;zbdx.zbid=zyi.zbid;}
else if(zbdx.m_Type==RfObjectType.RFTYPE_SAFENOTE){zbdx.zbib=zyi.zbib;}
if(zavj[zdn]!=undefined){var zfgy=zfgz(zavj[zdn]);if(zfgy[zcv]==true){var zatz=zfha(zavj[zdf],zbdx,zavj[zck],zavj[zcz],zavj[zdn]);zatz[zbu]=zavj;zatz[zco]=zbdx;var zfix={}
;zfix[zcv]=zatz;zfkg('rf_SavePasscardToServer_result',zfix);}
else{zfgy[zco]=zbdx;zfgy[zbu]=zavj;if(zfgy[zbv]==1){zfgy[zbv]=2;}
var zfix={};zfix[zcv]=zfgy;zfkg('rf_SavePasscardToServer_result',zfix);}
}else{var zatz=zfhb(zavj[zdf],zbdx,zavj[zck],zavj[zcz],zavj[zbc],zavj[zdd]);zatz[zbu]=zavj;zatz[zco]=zbdx;var zfix={}
;zfix[zcv]=zatz;zfkg('rf_SavePasscardToServer_result',zfix);}
}else if(zazk=="rf_get_ObjectFields_action"){var zatz=zyc(zavj);var zfix={}
;zfix[zcv]=zatz;zfkg('rf_get_ObjectFields_result',zfix);}
else if(zazk=="rf_get_folders_array"){var zatz=zyd(zavj);var zfix={}
;zfix[zcv]=zatz;zfkg('updatefolderslist_manualdlg',zfix);}
else if(zazk=="rf_CreateNewFolder_action"){var zatz=zyf(zavj);var zfix={}
;zfix[zcv]=zatz;zfkz('rf_CreateNewFolder_result',zfix);if(zatz[zcv]==true){zfhg();var arr=g_Settings.zddx;var zaty=new Object();zaty[zbn]=zat;zaty[zct]=arr;zfjc(zaty);}
}else if(zazk=="get_matching_passcards_list"){var zfax=new zdgm();zfax.zdgb.length=0;if(g_currUrl&&g_currUrl!=""&&((g_currUrl.startsWith("safari"))||(g_currUrl.startsWith("widget"))||(g_currUrl.startsWith("mxaddon")))){var zaty=new Object();zaty[zct]=zfax.zdgb;zfkg('matching_pcards_result',zaty);return;}
if(zdr){if(opera.extension.tabs.getFocused()==undefined){var zaty=new Object();zaty[zct]=zfax.zdgb;zfkg('matching_pcards_result',zaty);return;}
}else if(zdu){var zfkm=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();if(!zfkm){var zaty=new Object();zaty[zct]=zfax.zdgb;zfkg('matching_pcards_result',zaty);return;}
}if(g_currUrl!=null){g_Settings.zdfy(g_currUrl,zfax);}
var zaty=new Object();zaty[zct]=zfax.zdgb;zfkg('matching_pcards_result',zaty);}
else if(zazk=="rf_createMasterPassword_action"){var zatz=zyn(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkg('rf_create_masterpassword_response',zaty);}
else if(zazk=='rf_DeleteRfOnlineObject_action'){zavj[zct]=new zpc(zavj[zct]);var zatz=zyo(zavj);var zfix=new Object();zfix[zcv]=zatz;zfkz('rf_DeleteRfOnlineObject_result',zfix);if(zatz[zcv]==true&&zavj[zct].m_Type==RfObjectType.RFTYPE_FOLDER){zfhg();var arr=g_Settings.zddx;var zaty=new Object();zaty[zbn]=zat;zaty[zct]=arr;zfjc(zaty);}
}else if(zazk=="rf_SaveRawObject_action"){var zarn=zavj[zce];var zatz=zyb(zavj);var zfix={}
;zfix[zcv]=zatz;zfkz('rf_SaveRawObjectToServer_result',zfix);}
else if(zazk=='rf_NavigateFillSubmit_action'){var zatz=zyg(zavj);var zfix={}
;zfix[zcv]=zatz;zfkg('rf_NavigateFillSubmit_result',zfix);}
else if(zazk=="rf_set_reset_fields"){zxv(zavj);}else if(zazk=="rf_clear_local_cache"){zxw();}
else if(zazk=='rf_set_active_identity_action'){zyk(zavj);var zaty=new Object();zaty[zcv]=true;zfkg('rf_set_active_identity_result',zaty);}
else if(zazk=="rf_fill_current_identity"){var zatz=zye(zavj);var zfix={}
;zfix[zcv]=zatz;zfkg('rf_fill_current_identity_result',zfix);}
else if(zazk=="rf_ClearRecentlyused_action"){var zatz=zym(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkz('rf_ClearRecentlyused_result',zaty);}
else if(zazk=="rf_getRecentlyused_action"){var zatz=zyl(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkz('rf_getRecentlyused_result',zaty);}
else if(zazk=="rf_call_savemanual_dialog"){zyp(zavj);}
else if(zazk=="rf_server_search_action"){var zatz=zyq(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkz('rf_server_search_action_result',zaty);}
else if(zazk=='rf_get_folder_content'){var zatz=zxy(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkz('rf_folder_content_retreived_result',zaty);}
else if(zazk=='rf_do_signup'){var zatz=zyr(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkz('rf_do_signup_result',zaty);}
else if(zazk=='rf_check_masterpwd'){var zatz=zys(zavj);var zaty=new Object();zaty[zcv]=zatz;zfkz('rf_check_masterpwd_result',zaty);}
else if(zazk=="session_expire"){if(zdr){zdeg.icon="images/robo16logoff1.png";zfhu();opera.extension.broadcastMessage({"msg":"rf_logoff_occured"}
);}}else if(zazk=="focus"){setTimeout(function(){zfkl(zavj);}
,300);}else{}}catch(zmk){}};window.addEventListener("load",zfge,true);
