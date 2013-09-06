var zaa="clearCS";var zab="checkmaspassword";var zac="closeautosavebar";var zad="createsavetoolbar";var zae="fillfields";var zaf="fillforms";var zag="fillpassword_field";var zah="login";var zai="logoff";var zaj="maspasswordsaveresult";var zak="rf_hotkey";var zal="passcardsaveresult";var zam="SAVE";var zan="save_manual_fields";var zao="save_object_manual";var zap="savepasscard";var zaq="savenewmaspassword";var zar="setclear_fields";var zas="setdocnum";var zat="updatefolderslist";var zau="show_master_password_dialog_for_identity";var zav="fill_identity_from_hotkeys";var zaw="show_master_password_dialog_for_passcard";var zax="fill_matchcard_from_hotkeys";var zay="matchcard_currentindex";var zaz="action";var zba="altKey";var zbb="arr";var zbc="b_protect";var zbd="b_setManualy";var zbe="bAddToTree";var zbf="bcache";var zbg="bDeleteAction";var zbh="fillonlyempty";var zbi="bNewObject";var zbj="bSubmit";var zbk="bFill";var zbl="bNavigate";var zbm="bNewWindow";var zbn="cmd";var zbo="ctrl_focus";var zbp="ctrl_err";var zbq="ctrlKey";var zbr="metaKey";var zbs="dataObj";var zbt="docnum";var zbu="eventData";var zbv="err_number";var zbw="err_msg";var zbx="foldersArray";var zby="func_name";var zbz="g_current_identity_name";var zca="g_current_identity_path";var zcb="keyCode";var zcc="isTop";var zcd="language_data";var zce="m_nPageIndex";var zcf="msg";var zcg="name";var zch="name_old";var zci="objID";var zcj="parentID";var zck="pass_name";var zcl="passcard";var zcm="path";var zcn="path_old";var zco="pObject";var zcp="phonePrefixValue";var zcq="prefs";var zcr="query";var zcs="rf_mode";var zct="rf_object";var zcu="rf_type";var zcv="result";var zcw="rffilter";var zcx="rules";var zcy="s_dialog";var zcz="s_folder";var zda="s_title";var zdb="selected_path";var zdc="shiftKey";var zdd="suppressOverWrite";var zde="tree_id";var zdf="url_match";var zdg="url_open";var zdh="hightlight_filled_fields";var zdi="account_email";var zdj="user_account_id";var zdk="account_pwd_repeat";var zdl="logofftime";var zdm="mastpass";var zdn="pwd";var zdo=null;var zdp=false;var zdq=false;var zdr=false;var zds=false;var zdt=false;var zdu=false;var zdv=(new Date).getTime();if(typeof(opera)!="undefined"){zdr=true;}
if(typeof(chrome)!="undefined"){zdp=true;if(typeof(window.navigator.vendor)!="undefined"){if(window.navigator.vendor.indexOf("Opera")!=-1){zds=true;}
}}if(typeof(zdw)!="undefined"){zdu=true;}if(zdt){zdx.security.zdz.zea("UniversalXPConnect");zdx.security.zdz.zea("UniversalPreferencesRead");}
var zeb="version";var zec="1.01.2000";if(zdp){if(zds){zeb="3.0.1";zec="July 10, 2013";}
else{zeb="4.6.9";zec="August 9, 2013";}}else if(zdt){zeb="3.5.1";zec="June 21, 2013";}
else if(zdq){zeb="1.0.2";zec="November 4, 2010";}else if(zdr){zeb="2.2.2";zec="February 6, 2013";}
else if(zdu){zeb="1.0.5.22";zec="May 22, 2013";}var zed=navigator.appVersion.indexOf('Windows')!=-1;var zee=navigator.appVersion.indexOf('Mac')!=-1;var zef=navigator.appVersion.indexOf('Linux')!=-1;var zeg="250px";var zeh="40px";if(zdr){var zei="250px";var zej="200px";}
else if(zdp){var zei="250px";var zej="178px";}if(zdr){var zek="335px";var zel="245px";}
else if(zdp){var zek="319px";var zel="245px";}var zem="325px";var zen="235px";var zeo="335px";var zep="265px";var zeq="360px";var zer="160px";var zes="250px";var zet="445px";var zeu="250px";var zev=525;var zew="525px";var zex="350px";var zey="600px";var zez="325px";var zfa="340px";var zfb="325px";var zfc="175px";if(zdr){var zfd="297px";var zfe="320px";}
else if(zdp){var zfd="290px";var zfe="330px";}if(zdr){var zff="185px";var zfg="250px";}
else if(zdp){var zff="165px";var zfg="250px";}var zfh="250px";if(zdr){var zfi="400px";}
else if(zdp){var zfi="386px";}var zfj="250px";if(zdr){var zfk="390px";}
else if(zdp){var zfk="386px";}var zfl="250px";if(zdr){var zfm="200px";}
else if(zdp){var zfm="200px";}var zfn="250px";var zfo="280px";var zfp="310px";var zfq="350px";var zfr="312px";var zfs="370px";var zft="312px";var zfu="280px";var zfv="342px";var zfw="207px";var zfx="342px";var zfy="370px";var zfz="600px";var zga="500px";var zgb="690px";var zgc="515px";var zgd="https://online.roboform.com";if(zdr){var zge="is_opera_plugin=1";}
else if(zdp){var zge="is_chrome_plugin=1";}else if(zdt){var zge="is_firefox_plugin=1";}
else if(zdq){var zge="is_safari_plugin=1";}else if(zdu){var zge="is_maxthon_plugin=1";}
var zgf=zgd+"/requests/accountLogin.php?"+zge;var zgg=zgd+"/requests/checkLogin.php?"+zge;var zgh=zgd+"/requests/getFileList.php?"+zge;var zgi=zgd+"/requests/checkLogin.php?c=logout&"+zge;var zgj=zgd+"/requests/filePreview.php?"+zge;var zgk=zgd+"/requests/getMatchingPasscards.php?"+zge;var zgl=zgd+"/requests/saveRFFile.php?"+zge;var zgm=zgd+"/requests/saveRawRFFile.php?"+zge;var zgn=zgd+"/requests/checkMasterPassword.php?"+zge;var zgo=zgd+"/requests/createMasterPassword.php?"+zge;var zgp=zgd+"/requests/saveRFFileWithMPCheck.php?"+zge;var zgq=zgd+"/requests/fileDelete.php?"+zge;var zgr=zgd+"/requests/fileRename.php?"+zge;var zgs=zgd+"/requests/createFolder.php?"+zge;var zgt=zgd+"/requests/accountChange.php?lang="+window.navigator.language+"&"+zge;var zgu=zgd+"/requests/getFilteredFileList.php?"+zge;var zgv="online.roboform";var zgw="/";var zgx="https://online.roboform.com/faq";var zgy="http://www.roboform.com/tell-friend.html";var zgz="http://www.roboform.com/php/pums/rfprepay.php?lang=en";var zha="http://www.roboform.com/php/pums/pums_usrlogfrm.php?lang=";var zhb="http://support.roboform.com/php/rtss/main/?lang="+window.navigator.language;var zhc="https://online.roboform.com/";if(zdr){var zhd="http://www.roboform.com/platforms/browsers/opera";}
else if(zdp){if(zds){var zhd="http://www.roboform.com/platforms/browsers/opera";}
else{var zhd="http://www.roboform.com/platforms/browsers/google-chrome";}
}else if(zdt){var zhd="http://www.roboform.com/platforms/browsers/firefox";}
else if(zdu){var zhd="http://www.roboform.com/";}var RfObjectType={"RFTYPE_NONE":0,"RFTYPE_IDENTITY":1,"RFTYPE_PASSCARD":2,"RFTYPE_SAFENOTE":4,"RFTYPE_PSEUDE_FIRST":1024,"RFTYPE_SEARCH_QUERY":2048,"RFTYPE_FOLDER":4096,"RFTYPE_INSTANCE":8192,"RFTYPE_PSEUDE_LAST":16384
}
;var RfObjectMode={"RF_OBJ_MODE__FIRST":256,"RF_OBJ_MODE_DEF":256,"RF_OBJ_MODE_BOOKMARK":257,"RF_OBJ_MODE_QUERY":272,"RF_OBJ_MODE_CONTACT":512,"RF_OBJ_MODE_USERDATA":1535,"RF_OBJ_MODE_BLOCK_PC_OLD":1536,"RF_OBJ_MODE_BLOCK_PC":1537,"RF_OBJ_MODE__LAST":1537,"RF_OBJ_MODE_ALL":32678,"RF_OBJ_MODE_ALL_NONPARAMETRIC":36864}
;var RfFieldType={"RfField_None":0,"RfFieldText":1,"RfFieldPassword":2,"RfFieldCheckbox":3,"RfFieldRadioCheck":4,"RfFieldRadio":5,"RfFieldTextArea":6,"RfFieldSelect":7,"RfField_Last":8
}
;var zhe={"RF_MATCH_TYPE_NULL":0,"RF_MATCH_TYPE_BLOCKING":1,"RF_MATCH_TYPE_DOMAIN":2,"RF_MATCH_TYPE_SERVER":3,"RF_MATCH_TYPE_PAGE":19,"RF_MATCH_TYPE_URL_EXACT":20}
;var zhf={"RfFieldsNotMatch":0,"RfFieldsMatchSome":1,"RfFieldsMatchNames":2,"RfFieldsMatchNamesAndValues":3
}
;var rfjs_EnRfSetClearFields={"RF_CLEAR_FIELDS":0,"RF_SET_FIELDS":1,"RF_RESET_FIELDS":2
}
;var rfjs_PageStatus={"RfPageInitial":0,"RfPageLoading":1,"RfPageInteractive":2,"RfPageComplete":3}
;var EnResultCode={"enSuccess":0,"enFoundNoButtons":1,"enFilledNoForms":2,"enFilledTwoOrMoreForms":3
}
;var FillRetCode={"FillCodeUndefined":0,"FillCodeTryAgain":1,"FillCodeNoFormsFound":2,"FillCodeBlockingPasscard":3,"FillCodeNoMatchingFields":4,"FillCodeNoDifferentFields":5,"FillCodeFieldNonEmpty":6,"FillCodeFieldFilled":7}
;var zhg="_fieldformat$";var zhh="Priority$";var zhi="Prompt$";var zhj="MultistepLoginEntry$";var zhk="MultistepLoginID$";var zhl="name$";var zhm="index$";var zhn="User ID$";var zho="Password$";var zhp="-no-name-";var zhq="$DefaultValue$";var zhr="$AnyValueHere$";var zhs="Submit$";var zht="SubmitCoords$";var zhu="LoginTip$";var zhv=16;var zhw=17;var zhx=18;var zhy=9;var zhz=13;var zia=13;var zib=5;var zic=200;var zid=3;var zie=270;var zif=1024;var zig=30;var zih=20;var zii=40000;var zij=49999;var zik=-1;var zil=0;var zim=1024;var zin=2048;var zio=0;var zip=1;var ziq=2;var zir=0;var zis=8;var zit=512;var ziu=0;var ziv=4;var ziw=256;var zix=32787;var ziy=32791;var ziz=32815;var zja=32865;var zjb=32864;var zjc=32995;var zjd=35075;var zje=35382;var zjf=35383;var zjg=36507;var zjh=36604;var zji=36620;var zjj=18;var zjk=80;var zjl=145;var zjm=197;var zjn=290;var zjo=467;var zjp=470;var zjq=0;var zjr=1;var zjs=2;var zjt=54000;var zju=32980;var zjv=32999;var zjw=33002;var zjx=33001;var zjy=33000;var zjz=32985;var zka=36392;var zkb=8;var zkc=100;var zkd=403;var zke=404;var zkf=601;var zkg=501;var zkh=502;var zki=-1;var zkj=5;var zkk=4;var zkl=2;var zkm="";const zkn="chrome://xpirftoolbar/skin/passcard16_unprot.png";const zko="chrome://xpirftoolbar/skin/passcard16_prot.png";const zkp="chrome://xpirftoolbar/skin/contact.png";const zkq="chrome://xpirftoolbar/skin/contact16_unprot.png";const zkr="chrome://xpirftoolbar/skin/identity16_unprot.png";const zks="chrome://xpirftoolbar/skin/identity16_prot.png";const zkt="chrome://xpirftoolbar/skin/safenote_16_unprot.png";const zku="chrome://xpirftoolbar/skin/safenote_16.png";const zkv="chrome://xpirftoolbar/skin/folderrf.png";const zkw="chrome://xpirftoolbar/skin/bookmark16_unprot.png";const zkx="chrome://xpirftoolbar/skin/bookmark16_prot.png";var zky="rf_pwd_generate_number_symbols";var zkz="rf_pwd_generate_number_digits";var zla="rf_pwd_generate_upper_chk";var zlb="rf_pwd_generate_digits_chk";var zlc="rf_pwd_generate_lower_chk";var zld="rf_pwd_generate_specialsymb_chk";var zle="rf_pwd_generate_special_chars";var zlf="rf_pwd_generate_copycliboardp_chk";var zlg="rf_safenoteobj_note_height";var zlh="rf_safenoteobj_note_width";var zli="rf_highlight_filledflds_chk";var zlj="rf_HK_showoptionsKeyCode";var zlk="rf_HK_showoptionsMods";var zll="rf_HK_fillidentityKeyCode";var zlm="rf_HK_fillidentityMods";var zln="rf_HK_clearfieldsKeyCode";var zlo="rf_HK_clearfieldsMods";var zlp="rf_HK_resetfieldsKeyCode";var zlq="rf_HK_resetfieldsMods";var zlr="rf_HK_setfieldsKeyCode";var zls="rf_HK_setfieldsMods";var zlt="rf_HK_generatefillPwdKeyCode";var zlu="rf_HK_generatefillPwdMods";var zlv="rf_HK_fill_pcard_nextKeyCode";var zlw="rf_HK_fill_pcard_nextMods";var zlx="rf_HK_fill_pcard_prevKeyCode";var zly="rf_HK_fill_pcard_prevMods";function zlz(zma){return zma.map(function(zmb){return zmb}
);};if(!String.prototype.startsWith){String.prototype.startsWith=function(zmc){return(this.match("^"+zmc)==zmc);}
;}if(!String.prototype.endsWith){String.prototype.endsWith=function(zmc){return(this.match(zmc+"$")==zmc);}
;}if(!String.prototype.trimLeft){String.prototype.trimLeft=function(){return this.replace(new RegExp("^\\s+"),"");}
;}if(!String.prototype.trimRight){String.prototype.trimRight=function(){return this.replace(new RegExp("\\s+$"),"");}
;}if(typeof(zmd)!="undefined"){var zme=new RegExp("^(.*?)([^\\/]*?)(\\.[^\\.\\/]*)?$");var zmf=new RegExp("^(.*?)([^\\/]*?)(\\.[^\\.\\/]*)?$");}
function zmg(zmh,zmi){try{var zmj=function(){};zmj.prototype=zmi.prototype;zmh.prototype=new zmj();zmh.prototype.constructor=zmh;zmh.superclass=zmi.prototype;}
catch(zmk){}};function zml(zmc){if(zmc==zkm||zmc==null){return false;}
if(zmc.indexOf("/")!=-1||zmc.indexOf("<")!=-1||zmc.indexOf(">")!=-1||zmc.indexOf(String.fromCharCode(92))!=-1||zmc.indexOf("?")!=-1||zmc.indexOf(":")!=-1||zmc.indexOf(String.fromCharCode(34))!=-1||zmc.indexOf("*")!=-1||zmc.indexOf("|")!=-1){return true;}
return false;};function zmm(){this.zmn=new Array();this.zmo=new Array();this.zmp=new Array();this.zmq=new Array();this.zmr=new Array();this.zms=new Array();this.zmt=new Array();this.zmu=new Array();this.zmv=new Array();}
;zmm.prototype.zmw=function(){return this.zmn.length+this.zmo.length+this.zmp.length+this.zmq.length+this.zmr.length+this.zms.length+this.zmt.length+this.zmu.length+this.zmv.length;}
;zmm.prototype.zmx=function(){this.zmn.length=0;this.zmo.length=0;this.zmp.length=0;this.zmq.length=0;this.zmr.length=0;this.zms.length=0;this.zmt.length=0;this.zmu.length=0;this.zmv.length=0;}
;zmm.prototype.zmy=function(zmz,zna){try{switch(zna){case RfObjectType.RFTYPE_IDENTITY:this.zmo.push(zmz);break;case RfObjectType.RFTYPE_PASSCARD:this.zmp.push(zmz);break;case RfObjectType.RFTYPE_SAFENOTE:this.zmq.push(zmz);break;case RfObjectType.RFTYPE_FOLDER:this.zmt.push(zmz);break;case RfObjectType.RFTYPE_INSTANCE:this.zmu.push(zmz);break;default:break;}
}catch(zmk){}};zmm.prototype.znb=function(zmz){try{switch(zmz.m_Type){case RfObjectType.RFTYPE_IDENTITY:var znc=zmz.znd();for(var zne=0;zne<this.zmo.length;++zne){if(this.zmo[zne].znf!=zmz.znf){continue;}
if(znc==this.zmo[zne].znd()){return zne;}}break;case RfObjectType.RFTYPE_PASSCARD:var znc=zmz.znd();for(var zne=0;zne<this.zmp.length;++zne){if(this.zmp[zne].znf!=zmz.znf){continue;}
if(znc==this.zmp[zne].znd()){return zne;}}break;case RfObjectType.RFTYPE_FOLDER:var znc=zmz.znd();for(var zne=0;zne<this.zmt.length;++zne){if(this.zmt[zne].znf!=zmz.znf){continue;}
if(znc==this.zmt[zne].znd()){return zne;}}break;case RfObjectType.RFTYPE_SAFENOTE:var znc=zmz.znd();for(var zne=0;zne<this.zmq.length;++zne){if(this.zmq[zne].znf!=zmz.znf){continue;}
if(znc==this.zmq[zne].znd()){return zne;}}break;case RfObjectType.RFTYPE_INSTANCE:break;default:break;}
return-1;}catch(zmk){}};zmm.prototype.zng=function(zmz){try{switch(zmz.m_Type){case RfObjectType.RFTYPE_IDENTITY:var znh=this.znb(zmz);if(znh==-1){return-1;}
this.zmo.splice(znh,1);return znh;case RfObjectType.RFTYPE_PASSCARD:var znh=this.znb(zmz);if(znh==-1){return-1;}
this.zmp.splice(znh,1);return znh;case RfObjectType.RFTYPE_SAFENOTE:var znh=this.znb(zmz);if(znh==-1){return-1;}
this.zmq.splice(znh,1);return znh;case RfObjectType.RFTYPE_FOLDER:var znh=this.znb(zmz);if(znh==-1){return-1;}
this.zmt.splice(znh,1);return znh;case RfObjectType.RFTYPE_INSTANCE:break;default:break;}
return-1;}catch(zmk){}};zmm.prototype.zni=function(znj){try{switch(znj){case RfObjectType.RFTYPE_IDENTITY:return this.zmo;case RfObjectType.RFTYPE_PASSCARD:return this.zmp;case RfObjectType.RFTYPE_SAFENOTE:return this.zmq;case RfObjectType.RFTYPE_FOLDER:return this.zmt;case RfObjectType.RFTYPE_INSTANCE:return this.zmu;default:break;}
return null;}catch(zmk){}};function znk(){this.znl="<#HashMapHashkeyPerfix>";this.znm="<#HashMapHashcodeField>";this.znn();}
;znk.prototype={zno:0,};znk.prototype.znn=function(){this.znp={}
;this.znq=0;this.zno+=1;this.znr=this.zno;};znk.prototype.zns=function(){return this.znm+this.znr;}
;znk.prototype.znt=function(key,value){var znu;if(key&&value){var znv;if(typeof(key)==="number"||typeof(key)==="string"){znv=key;}
else{znv=key[this.zns()];if(znw in key)znv=key[znw];}
if(znv){znu=this.znp[znv];}else{this.znq+=1;znv=this.znl+this.znq;var znw=this.zns();key[znw]=znv;}
this.znp[znv]=[key,value];}return znu===undefined?undefined:znu[1];}
;znk.prototype.znx=function(key){try{var value;if(key){var znv;if(typeof(key)==="number"||typeof(key)==="string"){znv=key;}
else{var znw=this.zns();if(znw in key){znv=key[znw];}
}if(znv){value=this.znp[znv];}}return value===undefined?undefined:value[1];}
catch(zmk){return undefined;}};znk.prototype.zny=function(key){var znz=false;if(key){var znv;if(typeof(key)==="number"||typeof(key)==="string"){znv=key;}
else{znv=key[this.zns()];}if(znv){var znu=this.znp[znv];this.znp[znv]=undefined;if(znu!==undefined){key[this.zns()]=undefined;znz=true;}
}}return znz;};znk.prototype.each=function(zoa,zob){var key;for(key in this.znp){if(zoa.call(this.znp[key][1],this.znp[key][0],this.znp[key][1])===false)break;}
return this;};znk.prototype.toString=function(){return"CSibMap";}
;function zoc(){zoc.superclass.constructor.apply(this,arguments);}
;zmg(zoc,Array);zoc.prototype.zod=function(znh){try{return zoc.superclass.splice.call(this,znh,1);}
catch(zmk){return undefined;}};zoc.prototype.zoe=function(znh,zof){try{if(znh==0){var zog=zoc.superclass.unshift.call(this,zof);return this;}
return zoc.superclass.splice.call(this,znh,0,zof);}
catch(zmk){return undefined;}};zoc.prototype.zoh=function(zof){try{return zoc.superclass.unshift.call(this,zof);}
catch(zmk){return undefined;}};zoc.prototype.zoi=function(zoj,zok){try{if(zok==null){zok=0;}
else if(zok<0){zok=Math.max(0,this.length+zok);}for(var zne=zok;zne<this.length;zne++){if(this[zne]===zoj)return zne;}
return-1;}catch(zmk){return-1;}};zoc.prototype.zol=function(zom){try{for(var zne in this){if(this[zne]==zom)return this[zne];}
}catch(zmk){}return null;};zoc.prototype.zon=function(){try{return this[0];}
catch(zmk){return null;}};zoc.prototype.toString=function(){return this==undefined?"NULL":this.length;}
;function zoo(zop){this["keysNumber"]=14;this["segments"]={}
;this["parsed"]={};this["options"]={"url":zop,"key":["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],"q":{"name":"queryKey","parser":new RegExp("(?:^|&)([^&=]*)=?([^&]*)","g")}
,"parser":{"strict":new RegExp("^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*):?([^:@]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)"),"loose":new RegExp("^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)")}
};this["domainsSuffix"]=[".com",".ru",".de",".co.uk",".uk",".org",".edu",".net",".fm",".at",".hu",".gov",".sk",".au",".fi",".us",".dk",".pl"];this["domainsPrefix"]=["www.","www2."];this["options"]["url"]=zop;this.zoq();return;}
;zoo.prototype.zoq=function(){this["parsed"]=this.zor();this.zos();}
;zoo.prototype.zor=function(){try{var zop=this["options"]["url"];var zmc='';try{zmc=decodeURIComponent(zop);}
catch(zmk){zop=zop.substr(0,zop.lastIndexOf("/"));zmc=decodeURIComponent(zop);}
var zot=this["options"]["parser"]["strict"].exec(zmc);var zou={}
;var zov=this["keysNumber"];while(zov--){zou[this["options"]["key"][zov]]=zot[zov]||"";}
zou[this["options"]["q"]["name"]]={};zou["length"]=zot["length"];return zou;}
catch(zmk){}};zoo.prototype.key=function(zow){try{if(!this["parsed"].length){this.zoq();}
if(zow=="base"){if(this["parsed"].port!==null&&this["parsed"].port!==""){return this["parsed"].zox+"://"+this["parsed"].host+":"+this["parsed"].port+"/";}
else{return this["parsed"].zox+"://"+this["parsed"].host+"/";}
}if(zow=="host"){if(this["parsed"].host!=""){for(var zoy=0;zoy<this["domainsPrefix"].length;++zoy){if(this["parsed"].host.toString().startsWith(this["domainsPrefix"][zoy])){this["parsed"].host=this["parsed"].host.substr(this["domainsPrefix"][zoy].length);}
}for(var zov=0;zov<this["domainsSuffix"].length;++zov){if(this["parsed"].host.toString().endsWith(this["domainsSuffix"][zov])){this["parsed"].host=this["parsed"].host.substr(0,this["parsed"].host.lastIndexOf(this["domainsSuffix"][zov]));var znh=this["parsed"].host.lastIndexOf(".");if(znh!=-1){this["parsed"].host=this["parsed"].host.substr(znh+1);}
return this["parsed"].host;}}}}return(this["parsed"][zow]==="")?null:this["parsed"][zow];}
catch(zmk){alert("ERROR in jQuery_url.key. "+zmk);}
};zoo.prototype.zoz=function(zmz){if(!this["parsed"].length){this.zoq();}
return(this["parsed"].zpa[zmz]===null)?null:this["parsed"].zpa[zmz];}
;zoo.prototype.zos=function(){var zpb=this["parsed"].path;this["segments"]=[];this["segments"]=this["parsed"].path.length==1?{}
:(zpb.charAt(zpb.length-1)=="/"?zpb.substring(1,zpb.length-1):path=zpb.substring(1)).split("/");}
;function zpc(znj,zpd,zpe,zpf,zpg,zph){this.m_sName="";this.m_Type=RfObjectType.RFTYPE_NONE;this.znf=RfObjectMode.RF_OBJ_MODE_DEF;this.zpi=false;this.zpj=false;this.zpk="";if(typeof(arguments[0])!="undefined"&&arguments[0]instanceof Array){var arr=zlz(arguments[0]);this.m_sName=arguments[1]||arr.pop();this.zpk=arr;if(this.m_sName.match(new RegExp("^(.*)\\.(.*)$"))){this.m_Type=this.zpl('.'+RegExp.$2);this.znf=this.zpm('.'+RegExp.$2);this.m_sName=RegExp.$1;}
return;}if(arguments.length==3){this.m_sName=zpd;this.m_Type=znj;this.znf=zpe;return;}
if(arguments.length==4){this.m_sName=zpd;this.m_Type=znj;this.znf=zpe;this.zpi=zpf|false;return;}
if(arguments.length==6){this.m_Type=znj;this.znf=zpe;if(zpf==0)zpf=false;this.zpi=zpf;this.zpj=zpg;try{var znh=zpd.lastIndexOf("/");if(znh!=-1&&zpd.length>1){this.zpk=zpd.substr(0,znh);this.m_sName=zpd.substr(znh+1);if(this.m_Type==RfObjectType.RFTYPE_FOLDER){this.zpk=zph;}
}else{this.m_sName=zpd;this.zpk=zph;}}catch(zmk){}
return;}if(arguments.length==1&&typeof(arguments[0])=="object"){var zoz=arguments[0];this.m_sName=znj.m_sName==undefined?"":znj.m_sName;this.m_Type=znj.m_Type==undefined?RfObjectType.RFTYPE_NONE:parseInt(znj.m_Type);this.znf=znj.znf==undefined?RfObjectMode.RF_OBJ_MODE_DEF:parseInt(znj.znf);this.zpk=znj.zpk==undefined?"":znj.zpk;this.zpi=znj.zpi==undefined?false:znj.zpi;return;}
};zpc.prototype.toString=function(){var zpn=this.m_Type;if(this.m_Type==RfObjectType.RFTYPE_IDENTITY){zpn=this.znf==RfObjectMode.RF_OBJ_MODE_DEF?"IDENTITY":"CONTACT";}
else if(this.m_Type==RfObjectType.RFTYPE_PASSCARD){zpn=this.znf==RfObjectMode.RF_OBJ_MODE_DEF?"PASSCARD":"BOOKMARK";}
else if(this.m_Type==RfObjectType.RFTYPE_FOLDER){zpn="FOLDER";}
else if(this.m_Type==RfObjectType.RFTYPE_SAFENOTE){zpn="SAFENOTE";}
else if(this.m_Type==RfObjectType.RFTYPE_NONE){zpn="NONE";}
return"<### [CRfObjectName]  NAME='"+this.m_sName+"'  TYPE="+zpn+"  PROTECTED="+this.zpi+" bGetData="+this.zpj+" PATH='"+this.zpk+"' MODE="+this.znf+" ###>";}
;zpc.prototype.clone=function(){return(new zpc()).assign(this);}
;zpc.prototype.assign=function(zpp){this.m_sName=zpp.m_sName;this.m_Type=zpp.m_Type;this.znf=zpp.znf;this.zpi=zpp.zpi;this.zpj=zpp.zpj;if(zdt){this.zpk=zlz(zpp.zpk);}
else{this.zpk=zpp.zpk;}return this;};zpc.prototype.zpq=function(){return this.m_Type==RfObjectType.RFTYPE_PASSCARD;}
;zpc.prototype.zpr=function(){return this.m_Type==RfObjectType.RFTYPE_IDENTITY;}
;zpc.prototype.zps=function(){return this.m_Type==RfObjectType.RFTYPE_SAFENOTE;}
;zpc.prototype.zpt=function(){return this.m_Type==RfObjectType.RFTYPE_FOLDER;}
;zpc.prototype.zpu=function(){return this.znf==RfObjectMode.RF_OBJ_MODE_BOOKMARK;}
;zpc.prototype.zpv=function(){return this.znf==RfObjectMode.RF_OBJ_MODE_CONTACT;}
;zpc.prototype.zpl=function(zpw){return({'.rft':RfObjectType.RFTYPE_IDENTITY,'.rfc':RfObjectType.RFTYPE_IDENTITY,'.rfp':RfObjectType.RFTYPE_PASSCARD,'.rfx':RfObjectType.RFTYPE_PASSCARD,'.rfb':RfObjectType.RFTYPE_PASSCARD,'.rfn':RfObjectType.RFTYPE_SAFENOTE}
[zpw.toLowerCase()])||RfObjectType.RFTYPE_NONE;};zpc.prototype.zpm=function(zpw){return({'.rft':RfObjectMode.RF_OBJ_MODE_DEF,'.rfc':RfObjectMode.RF_OBJ_MODE_CONTACT,'.rfp':RfObjectMode.RF_OBJ_MODE_DEF,'.rfx':RfObjectMode.RF_OBJ_MODE_BLOCK_PC,'.rfb':RfObjectMode.RF_OBJ_MODE_BOOKMARK,'.rfn':RfObjectMode.RF_OBJ_MODE_DEF}
[zpw.toLowerCase()])||RfObjectMode.RF_OBJ_MODE_DEF;}
;zpc.prototype.zpx=function(zpy,zpw){try{var zpz=zpw;zpz=zpz.toLowerCase();if(zpz.length==3&&zpz[0]!='.'){zpz="."+zpz;}
if(zpz==".rft"){this.m_Type=RfObjectType.RFTYPE_IDENTITY;this.znf=RfObjectMode.RF_OBJ_MODE_DEF;return true;}
else if(zpz==".rfc"){this.m_Type=RfObjectType.RFTYPE_IDENTITY;this.znf=RfObjectMode.RF_OBJ_MODE_CONTACT;return true;}
else if(zpz==".rfp"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;if(zpy.substr(9)=="-Blocked-"||zpy.substr(6)=="-Blkd-"){this.znf=RfObjectMode.RF_OBJ_MODE_BLOCK_PC_OLD;}
else{this.znf=RfObjectMode.RF_OBJ_MODE_DEF;}return true;}
else if(zpz==".rfx"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;this.znf=RfObjectMode.RF_OBJ_MODE_BLOCK_PC;return true;}
else if(zpz==".rfb"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;this.znf=RfObjectMode.RF_OBJ_MODE_BOOKMARK;return true;}
else if(zpz==".rfn"){this.m_Type=RfObjectType.RFTYPE_SAFENOTE;this.znf=RfObjectMode.RF_OBJ_MODE_DEF;return true;}
else if(zpz==".rfq"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;this.znf=RfObjectMode.RF_OBJ_MODE_QUERY;return true;}
return false;}catch(zmk){return false;}};zpc.prototype.zqa=function(zqb,zqc){var zqd=(this.znf>>8)-(zqb.znf>>8);if(zqd!=0){return zqd;}
zqd=zqc?this.m_sName==zqb.m_sName:this.m_sName.toLowerCase()==zqb.m_sName.toLowerCase();if(zqd!=0){return zqd;}
return(this.znf&255)-(zqb.znf&255);};zpc.prototype.zqe=function(zqb){return this.zqa(zqb,false);}
;zpc.prototype.zqf=function(){return this.m_sName=="";}
;zpc.prototype.zqg=function(){this.m_sName="";this.znf=RfObjectMode.RF_OBJ_MODE_DEF;}
;zpc.prototype.zqh=function(){return this.m_sName;}
;zpc.prototype.zqi=function(zqj){this.m_sName=zqj;}
;zpc.prototype.zqk=function(){return this.zpk;};zpc.prototype.zql=function(zqm){this.zpk=[].concat(zqm);}
;zpc.prototype.zqn=function(){return this.zpk.join('/');}
;zpc.prototype.zqo=function(zph){this.zpk=zph.length?zph.split('/'):[];}
;zpc.prototype.zqp=function(){if(this.zpq()){if(this.znf==RfObjectMode.RF_OBJ_MODE_BLOCK_PC){return'.rfx';}
else if(this.znf==RfObjectMode.RF_OBJ_MODE_BOOKMARK){return'.rfb';}
else if(this.znf==RfObjectMode.RF_OBJ_MODE_QUERY){return'.rfq';}
else{return'.rfp';}}else if(this.zpr()){if(this.zpv()){return'.rfc';}
else{return'.rft';}}else if(this.zps()){return'.rfn';}
else{return"";}};zpc.prototype.zqq=function(){return!!this.zpi;}
;zpc.prototype.zqr=function(zqs){this.zpi=!!zqs;};zpc.prototype.zqt=function(){return this.zpq()&&(this.zpu()?(this.zqq()?zkx:zkw):(this.zqq()?zko:zkn))||this.zpr()&&(this.zpv()?(this.zqq()?zkp:zkq):(this.zqq()?zks:zkr))||this.zps()&&(this.zqq()?zku:zkt)||this.zpt()&&zkv||"";}
;zpc.prototype.zqu=function(){return(this.zqn()==''?'':(this.zqn()+"/"))+this.zqh()+this.zqp();}
;zpc.prototype.zqv=function(){return this.zqk().concat(this.zqh()+this.zqp());}
;zpc.prototype.zqw=function(){if(this.zpu()){return'roboformlite_bookmarkObj_menupopup';}
if(this.zpq()){return'roboformlite_passcardObj_menupopup';}
if(this.zpr()){return(this.zpv()==true)?'roboformlite_contactObj_menupopup':'roboformlite_identityObj_menupopup';}
if(this.zps()){return'roboformlite_safenoteObj_menupopup';}
if(this.zpt()){return'roboformlite_folderObj_menupopup';}
return'';};zpc.zqx=function(zqm,zpy){zqm=zlz(zqm);var zqy=new zpc();zqy.m_sName=zpy||zqm.pop()||"";zqy.m_Type=RfObjectType.RFTYPE_FOLDER;zqy.znf=RfObjectMode.RF_OBJ_MODE_DEF;zqy.zpi=false;zqy.zpk=zqm;return zqy;}
;zpc.prototype.zqz=function(zra){if(this.m_Type!=zra.m_Type){return false;}
if(this.znf!=zra.znf){return false;}if(zra.znd()!=this.znd()){return false;}
return true;};zpc.prototype.equals=function(zma){return this.zqu()==zma.zqu()&&this.zqq()==zma.zqq();}
;zpc.prototype.zrb=function(zrc){try{this.m_Type=RfObjectType.RFTYPE_NONE;this.znf=RfObjectMode.RF_OBJ_MODE_DEF;this.m_sName="";var zph=new String(zrc);var zrd=""
var zpy="";var zre=zph.lastIndexOf('\\');if(zre>=0){zrd=zph.substr(zre+1);zpy=zrf(zph,zre+1);}
else{zpy=zph;}var zrg=zph.lastIndexOf('/');if(zrg>=0){zpy=zph.substr(zrg+1);zrd=zrf(zph,zrg+1);}
else{zpy=zph;}var zrh=zpy.lastIndexOf('.');if(zrh<0){return false;}
var zpw=zrf(zpy,zrh,zpy.length);zpy=zpy.substr(0,zrh);if(!this.zpx(zpy,zpw)){return false;}
this.m_sName=zpy;zrd="/"+zrd;if(zrd.length>1){zrd=zrd.substr(0,zrd.length-1);}
this.zpk=zrd;return true;}catch(zmk){return false;}
};zpc.prototype.zpx=function(zpy,zpw){try{var zpz=zpw;zpz=zpz.toLowerCase();if(zpz.length==3&&zpz[0]!='.'){zpz="."+zpz;}
if(zpz==".rft"){this.m_Type=RfObjectType.RFTYPE_IDENTITY;this.znf=RfObjectMode.RF_OBJ_MODE_DEF;return true;}
else if(zpz==".rfc"){this.m_Type=RfObjectType.RFTYPE_IDENTITY;this.znf=RfObjectMode.RF_OBJ_MODE_CONTACT;return true;}
else if(zpz==".rfp"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;if(zpy.substr(9)=="-Blocked-"||zpy.substr(6)=="-Blkd-"){this.znf=RfObjectMode.RF_OBJ_MODE_BLOCK_PC_OLD;}
else{this.znf=RfObjectMode.RF_OBJ_MODE_DEF;}return true;}
else if(zpz==".rfx"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;this.znf=RfObjectMode.RF_OBJ_MODE_BLOCK_PC;return true;}
else if(zpz==".rfb"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;this.znf=RfObjectMode.RF_OBJ_MODE_BOOKMARK;return true;}
else if(zpz==".rfn"){this.m_Type=RfObjectType.RFTYPE_SAFENOTE;this.znf=RfObjectMode.RF_OBJ_MODE_DEF;return true;}
else if(zpz==".rfq"){this.m_Type=RfObjectType.RFTYPE_PASSCARD;this.znf=RfObjectMode.RF_OBJ_MODE_QUERY;return true;}
return false;}catch(zmk){return false;}};zpc.prototype.znd=function(zri,zrj){try{var zpy="";if(zri==undefined||zri==null||zri==""){zpy=this.m_sName;}
else{zpy=zri;}var zph="";if(zrj==undefined||zrj==null||zrj==""){zph=this.zpk;}
else{zph=zrj;}zph=(zph==zgw)?zph:zph+zgw;if(zph.startsWith("//")){zph=zph.substr(1);}
var zrk="";if(this.m_Type==RfObjectType.RFTYPE_IDENTITY){zrk=this.znf==RfObjectMode.RF_OBJ_MODE_DEF?zph+zpy+".rft":zph+zpy+".rfc";}
else if(this.m_Type==RfObjectType.RFTYPE_PASSCARD){zrk=this.znf==RfObjectMode.RF_OBJ_MODE_DEF?zph+zpy+".rfp":zph+zpy+".rfb";}
else if(this.m_Type==RfObjectType.RFTYPE_SAFENOTE){zrk=zph+zpy+".rfn";}
else if(this.m_Type==RfObjectType.RFTYPE_FOLDER){zrk=zph;}
else if(this.m_Type==RfObjectType.RFTYPE_NONE){zrk=zph+zpy;}
return zrk;}catch(zmk){return"";}};if(typeof(zmd)!="undefined"){zmd.zrl=function(){this.znn();}
zmd.zrl.prototype={znl:"<#HashMapHashkeyPerfix>",znm:"<#HashMapHashcodeField>",zno:0,znn:function(){this.znp={}
;this.znq=0;this.zno+=1;this.znr=this.zno;},zns:function(){return this.znm+this.znr;}
,znt:function(key,value){var znu;if(key&&value){var znv;if(typeof(key)==="number"||typeof(key)==="string"){znv=key;}
else{var znw=this.zns();if(znw in key)znv=key[znw];}
if(znv){znu=this.znp[znv];}else{this.znq+=1;znv=this.znl+this.znq;var znw=this.zns();key[znw]=znv;}
this.znp[znv]=[key,value];}return znu===undefined?undefined:znu[1];}
,znx:function(key){try{var value;if(key){var znv;if(typeof(key)==="number"||typeof(key)==="string"){znv=key;}
else{var znw=this.zns();if(znw in key){znv=key[znw];}
}if(znv){value=this.znp[znv];}}return value===undefined?undefined:value[1];}
catch(zmk){return undefined;}},zny:function(key){var znz=false;if(key){var znv;if(typeof(key)==="number"||typeof(key)==="string"){znv=key;}
else{znv=key[this.zns()];}if(znv){var znu=this.znp[znv];this.znp[znv]=undefined;if(znu!==undefined){key[this.zns()]=undefined;znz=true;}
}}return znz;},each:function(zoa,zob){var key;for(key in this.znp){if(zoa.call(this.znp[key][1],this.znp[key][0],this.znp[key][1])===false)break;}
return this;},toString:function(){return"RFJSibMapJS"
}
};}var zrm="Session is expired. You need to relogin.";var zrn=100;function zro(zrp,zrq){this[zbw]="";this[zbv]=0;this[zcv]=true;if(arguments.length==1){if(zrp==zkd){this[zbw]=zrm;this[zbv]=zkd;this[zcv]=false;}
return;}if(arguments.length==2){this[zbw]=zrq;this[zbv]=zrp;this[zcv]=false;return;}
};zro.prototype.toString=function(){return"RESULT: "+this[zcv]+"  Err_Number:"+this[zbv]+" MSG:"+this[zbw];}
;function zrr(zop){if(zdp){return chrome.extension.getURL(zop);}
else if(zdq){var zrs='';if(typeof(zrt)!='undefined'&&zrt){zrs=zrt;}
return safari.extension.baseURI+zop;}else if(zdr){return zop;}
else if(zdu){if(zop.startsWith("http")){return zop;}
else{return window.external.mxGetRuntime().zru()+zop;}
}};function zrv(){if(zdo!=null){return zdo;}try{if(zdp){if(typeof(chrome.extension.getBackgroundPage)=="function"){zdo=chrome.extension.getBackgroundPage();if(zdo!=null){return zdo;}
else{}}else{}var zrw=chrome.extension.getViews();for(var zrx in zrw){if(typeof(zrw[zrx].zry)=="function"){zdo=zrw[zrx];return zdo;}
}}else if(zdq){if(typeof(safari.extension.globalPage)!='undefined'){zdo=safari.extension.globalPage.contentWindow;return zdo;}
zdo=new zrz();return zdo;}else if(zdr){zdo=opera.extension.bgProcess;return zdo;}
else if(zdu){zdo=new zrz();return zdo;}return null;}
catch(zmk){}return null;};function zsa(zsb){var zsc="";switch(zsb){case"Roboform_Online_Authentication":zsc="RoboForm Everywhere Authentication";break;case"Enter_your_RoboForm_Online_User_ID_and_Password":zsc="Enter your RoboForm Everywhere User ID and Password:";break;case"You_have_entered_an_invalid_User_ID_and_or_Password":zsc="You have entered an invalid User ID and/or Password";break;case"password":zsc="Password:";break;case"auto_logoff":zsc="Auto Logoff";break;case"RFJS_SIGNUP_LINK":zsc="Sign Up for RoboForm Everywhere account";break;case"RFJS_CAPTION_SIGNUP":zsc="Signup RoboForm Everywhere";break;case"CL_ENTER_DESIRED_LOGIN":zsc="User ID";break;case"CL_ENTER_DESIRED_PASSWORD":zsc="Password";break;case"CL_RETYPE_DESIRED_PASSWORD":zsc="Confirm Password";break;case"CL_NAME":zsc="Name";break;case"CL_EMAIL":zsc="Email";break;case"BUTTON_SUBMIT":zsc="Submit";break;case"TEXT_BACK":zsc="Back";break;case"TEXT_NOT_MP_HINT1":zsc="Please <b style=\"color:red;\">memorize</b> your User ID and Password (6-30 characters) as they are required to access your RoboForm Everywhere account.";break;case"TEXT_NOT_MP_HINT":zsc="Your RoboForm Everywhere password <b>must differ</b> from your RoboForm Master Password for security reasons.";break;case"TEXT_EMAIL_HINT":zsc="Please enter your correct Email as it is used to verify certain account actions.";break;case"menu_Generate_Pass":zsc="Generate Password";break;case"Generate":zsc="Generate";break;case"Fill":zsc="Fill";break;case"Copy_pwd":zsc="Copy";break;case"Number_of_symbols":zsc="Number of symbols";break;case"Minimal_Number_of_digits":zsc="Minimal Number of digits";break;case"Copy_Password_to_Clipboard":zsc="Copy Password to Clipboard";break;case"generate_Pass_helptext1":if(zdu){zsc="Password has been generated. Click <b>Fill</b> to fill password";}
else{zsc="Password has been generated. Click Fill to";}
break;case"generate_Pass_helptext2":if(zdu){zsc="field in the browser.";}
else{zsc="fill password field in the browser. Click Copy";}
break;case"generate_Pass_helptext3":if(zdu){zsc="Click <b>Copy</b> to copy it to Clipboard. Click <b>Generate</b> to";}
else{zsc="to copy it to Clipboard. Click Generate to";}
break;case"generate_Pass_helptext4":zsc="generate new password.";break;case"wrong_number_of_characters":zsc="Wrong number of characters";break;case"wrong_number_of_digits":zsc="Wrong number of digits";break;case"General":zsc="General Options";break;case"Security":zsc="Security";break;case"Session_Timeout":zsc="Session Timeout";break;case"Automatically_Logoff_after_idle":zsc="Automatically Logoff after idle";break;case"Save_Options":zsc="Save Options";break;case"Password_protect_passcard":zsc="Protect new Logins with the Master Password";break;case"Notifications":zsc="Notifications";break;case"Show_AutoSave_Notification_Bar":zsc="Show AutoSave Notification Bar";break;case"Tie_session_IP":zsc="Tie session identifier to IP address";break;case"min":zsc="min";break;case"month":zsc="month";break;case"weeks":zsc="weeks";break;case"week":zsc="week";break;case"day":zsc="day";break;case"days":zsc="days";break;case"hour":zsc="hour";break;case"hours":zsc="hours";break;case"form_fill_section":zsc="Fill Forms";break;case"form_fill_empty_fields":zsc="Fill only empty fields";break;case"Login":zsc="Login";break;case"Login_in_new_tab":zsc="Login in New Tab";break;case"menu_gotofill":zsc="Go \u0026 Fill";break;case"menu_goto":zsc="Go To";break;case"menu_matching_fill":zsc="Fill Forms";break;case"menu_matching_fillsubmit":zsc="Fill\u0026Submit";break;case"menu_matching_passcards":zsc="Matching Passcards";break;case"Matching_Passcards_Options":zsc="Matching Passcards Options";break;case"Matching_Passcard_def_action":zsc="Select default action for Matching Passcards, while clicking on RoboForm toolbar:";break;case"cache_mast_password_lbl_options":zsc="Cache Master password until logoff";break;case"Recently_Used":zsc="Recenlty Used";break;case"Recently_used_logins":zsc="Show Recently Used Logins";break;case"Recently_Items_Count":zsc="Last Logins:";break;case"offer_to_save_another_pcard":zsc="Offer to save passcard if already exists for this domain";break;case"hot_keys_section":zsc="Keyboard";break;case"hotkeys_open_Options":zsc="Show Options";break;case"hotkeys_fill_identity":zsc="Fill in active Identity";break;case"highlight_filled_fields":zsc="Highlight filled fields";break;case"generate_fill_pwd":zsc="Generate and Fill Password";break;case"fill_next_login":zsc="Fill in Next Login (if several)";break;case"fill_previous_login":zsc="Fill in Previous Login (if several)";break;case"savebar_info_label":zsc="Would you like to save info as:";break;case"savebar_inhome_label":zsc="in";break;case"savebar_protect_ckbox":zsc="Password-protect";break;case"savebar_save_btn":zsc="Save";break;case"savebar_close_btn":zsc="Close";break;case"savebar_createmp_caption":zsc="RoboForm Setup Master Password";break;case"savebar_createmp_password":zsc="Master Password:";break;case"savebar_wrong_mp_text":zsc="Please enter your RoboForm Master Password";break;case"savebar_createmp_text1":zsc="To password-protect your logins you have to setup";break;case"savebar_createmp_text2":zsc="Master Password";break;case"savebar_createmp_confirm":zsc="Confirm Password:";break;case"savebar_savesuccess_msg1":zsc="Passcard";break;case"savebar_savesuccess_msg2":zsc="was successfully saved.";break;case"savebar_rewrite_msg1":zsc="already exists.";break;case"savebar_rewrite_msg2":zsc="This will overwrite it. OK to proceed?";break;case"mast_pwd_created_ok":zsc="Master Password was created";break;case"mast_pwd_limit":zsc="Password must be between 6 and 50 symbols";break;case"master_password_empty":zsc="Master Password cannot be empty";break;case"master_password_confirm_error":zsc="Cannot confirm Master Password";break;case"menu_Help":zsc="Help";break;case"menu_help_rfonline":zsc="RoboForm Everywhere";break;case"menu_help_faq":zsc="Entire FAQ";break;case"menu_help_rfhome":zsc="RoboForm Home";break;case"menu_help_tellfriend":zsc="Tell a Friend";break;case"menu_help_support":zsc="Support";break;case"menu_help_about":zsc="About";break;case"menu_help_buy":zsc="Buy RoboForm Pro";break;case"menu_help_activate":zsc="Activate RoboForm Pro";break;case"cancel_btn":zsc="Cancel";break;case"login_btn":zsc="Login";break;case"go_back":zsc="Go Back";break;case"Yes":zsc="Yes";break;case"No":zsc="No";break;case"alert_delete_msg":zsc="Are you sure you want to delete";break;case"create_symbol_restrict":zsc="Symbols  /\<> are not allowed";break;case"RoboForm_Chrome_Extension":zsc="RoboForm Lite Chrome Extension";break;case"RoboForm_Safari_Extension":zsc="RoboForm Lite Safari Extension";break;case"RoboForm_Opera_Extension":zsc="RoboForm Lite Opera Extension";break;case"RoboForm_Maxthon_Extension":zsc="RoboForm Lite Maxthon Extension";break;case"Version":zsc="Version:";break;case"Build":zsc="Build:";break;case"session_expire":zsc="Your session has timed out. Please sign in again.";break;case"Person":zsc="Person";break;case"location":zsc="Location";break;case"Business":zsc="Business";break;case"credit_card":zsc="Credit Card";break;case"bank_account":zsc="Bank Account";break;case"Car":zsc="Car";break;case"Custom":zsc="Custom";break;case"Authentication":zsc="Authentication";break;case"View_identity":zsc="View identity";break;case"The_following_information_about":zsc="The following information about";break;case"is_available_for_viewing":zsc="is available for viewing";break;case"select_group_instance":zsc="Select Group Instance";break;case"password_change_text1":zsc="Change RoboForm Master Password. Your data will NOT";break;case"password_change_text2":zsc="be resaved with the new password.";break;case"password_old":zsc="Old Password:";break;case"Change_Master_Password":zsc="Change Master Password";break;case"Roboform_Master_Password":zsc="RoboForm Master Password";break;case"master_password_wrong1":zsc="You have entered an invalid RoboForm Master Password. Please try again.";break;case"master_password_wrong":zsc="<br />You have entered an invalid RoboForm Master <br /> Password. Please try again.";break;case"Setup_Master_Password":zsc="Setup Master Password";break;case"Enter_Master_Password":zsc="Enter Master Password";break;case"mp_createmp_text":zsc="To password-protect your data you have to setup<br />master password";break;case"Master_Password_is_required":zsc="Master Password is required";break;case"master_password_not_created":zsc="Master Password is not created yet";break;case"master_password_dual":zsc="Cannot view, as only the 1st part of dual MasterPassword is entered";break;case"password_protected1":zsc="This object is password protected. Please enter";break;case"password_protected2":zsc="your RoboForm Master Password to use this object.";break;case"cache_mast_pwd":zsc="Use this password until logoff";break;case"menu_user_data":zsc="All Everywhere Data";break;case"menu_matching_fill_submit":zsc="Fill \u0026 Submit";break;case"menu_matching_edit":zsc="Edit";break;case"menu_Options":zsc="Options";break;case"menu_Logoff":zsc="Logoff";break;case"Delete":zsc="Delete";break;case"menu_Logins":zsc="Logins";break;case"Search":zsc="Search";break;case"menu_Identity":zsc="Identities";break;case"Select":zsc="(select)";break;case"tbar_matching":zsc="(matching)";break;case"identity_def_tbar":zsc="(identity)";break;case"menu_Identity_tbr_tip_def":if(zdq){zsc="Set active identity in Tools/Identities";}
else if(zdp||zdu){zsc="Set active identity";}else if(zdr){zsc="Set active identity";}
break;case"menu_Identity_tbr_tip_act":zsc="Click for filling fields";break;case"Login_Tooltip":zsc="Login to RoboForm Everywhere";break;case"menu_Logoff_Tooltip":zsc="Logout from RoboForm Everywhere account";break;case"menu_Logins_Tooltip":zsc="Click for opening passcards list";break;case"Match_Cards_Tooltip":zsc="Matching Passcards list. You can change default action in Options page";break;case"menu_Tools":zsc="Tools";break;case"save_close":zsc="Close";break;case"Rename":zsc="Rename";break;case"Edit":zsc="Edit";break;case"filt_passcards":zsc="Passcards";break;case"filt_identities":zsc="Identities";break;case"filt_safenotes":zsc="Safe Notes";break;case"editor_note_lbl":zsc="Note:";break;case"View":zsc="View";break;case"New_Folder":if(zdq){zsc="New Folder";}
else if(zdp||zdu){zsc="New Folder...";}else if(zdr){zsc="New Folder";}
break;case"Fields":zsc="Fields";break;case"add_new_folder":zsc="Folder";break;case"new_safenote":zsc="Safenote";break;case"new_login":zsc="Passcard";break;case"new_contact":zsc="Contact";break;case"new_identity":zsc="Identity";break;case"new_bookmark":zsc="Bookmark";break;case"add_new_object":zsc="Add...";break;case"Clear_Search":zsc="Clear";break;case"Filter":zsc="Filter";break;case"Copy_full":zsc="Copy";break;case"Paste":zsc="Paste object";break;case"Cut":zsc="Cut object";break;case"found_objects":zsc="objects were found";break;case"file_not_found":zsc="File Not Found!";break;case"folder_already_exists":zsc="Folder with the same name already exists.";break;case"Set_as_active":zsc="Set as default";break;case"create_new":zsc="Create new ";break;case"create_dlg_title":zsc="Create new object";break;case"save_obj_success":zsc="Object was successfully saved.";break;case"save_as_bookmark":zsc="Save as Bookmark";break;case"new_identity_name":zsc="New Identity name";break;case"new_passcard_name":zsc="New Passcard name";break;case"new_bookmark_name":zsc="New Bookmark name";break;case"new_contact_name":zsc="New Contact name";break;case"new_safenote_name":zsc="New Safenote name";break;case"menu_expand_popup":zsc="Expand";break;case"rename_folder":zsc="Rename Folder";break;case"rename_passcard":zsc="Rename-Move";break;case"create_folder":zsc="Create New Folder";break;case"folder_name":zsc="Folder Name:";break;case"user_id":zsc="User ID:";break;case"language":zsc="en";break;case"RoboForm_Menu":zsc="RoboForm Menu";break;case"menu_contacts":zsc="Contacts";break;case"menu_bookmarks":zsc="Bookmarks";break;case"menu_clear_fields":zsc="Clear Fields";break;case"menu_reset_fields":zsc="Reset Fields";break;case"menu_set_fields":zsc="Set Fields";break;case"menu_sync":zsc="Sync with RoboForm Everywhere";break;case"menu_change_pwd":zsc="Change Master Password";break;case"Show_logins_bmarks_together":zsc="Show Logins and Bookmarks together";break;case"menu_Save":zsc="Save";break;case"save_manual_title":zsc="Save Roboform Object";break;case"menu_Tools":zsc="Tools";break;case"menu_recently_used":zsc="Recently Used";break;case"menu_clear_recused":zsc="Clear List";break;case"menu_without_prefix":zsc="Without Prefix";break;case"menu_national_prefix":zsc="National Prefix";break;case"menu_country_code":zsc="Country Code";break;default:zsc=zsb;break;}
return zsc;};function zsd(){try{var zse=new XMLHttpRequest();zse.open("GET",zrr('rf_f1.js'),false);zse.send(null);zsf=zse.responseText;}
catch(zmk){}};if(zdq||zdr){var zsg=false;var zsh='';var zrt=window.navigator.language;var zsi={'':'Default',zsj:'English',zsk:'Russian'
}
;zsl(zrt);};function zsl(zrs){try{if(zsg){return;}
zsg=true;if(zrs==''){zrs=navigator.zrs;zrs=zrs.replace('-','_');if(zrs=='es_MX'){zrs='es_419';}
if(typeof(zsi[zrs])=='undefined'){zrs=zrs.substring(0,2);}
if(typeof(zsi[zrs])=='undefined'){for(var zov in zsi){if(zov.substring(0,2)==zrs){zrs=zov;break;}
}}if(typeof(zsi[zrs])=='undefined'){zrs='en_US';}}
if(zrs=="ru-RU"){zrs="ru";}if(zrs=="en"||zrs=="en-US"){zrs="en_US";}
var zse=new XMLHttpRequest();var zsm="";if(zdq){zsm=safari.extension.baseURI;}
else if(zdr){zsm="";}zse.open("GET",zsm+'_locales/'+zrs+'/messages.js',false);zse.send(null);zsh=zse.responseText;eval(zsh);}
catch(zmk){}};function zsn(zso){if(zme.exec(zso)){return RegExp.$3;}
else{return"";}};function zsp(zph,zsq){zsq=zsq||{}
;if(zmf.exec(zph)){zsq.path=RegExp.$1;zsq.name=RegExp.$2;zsq.zsr=RegExp.$3;}
else{zsq.path=zsq.name=zsq.zsr="";}return zsq;};function zss(zst,zsu,zsv){var zsw=zst.substr(0,zsu);var zsx=zsu<=zst.length;var zsy=zsv.length==zsu;var zsz=zsw==zsv;return zsx&&zsy&&zsz;}
;function zrf(zmc,zta,ztb){if(zta<0||ztb<0){return"";}
var ztc,ztd=String(zmc).length;if(zta+ztb>ztd){ztc=ztd;}
else{ztc=zta+ztb;}return String(zmc).substring(zta,ztc);}
;function zte(ztf){try{var key=ztf.replace(new RegExp("[^a-zA-Z0-9_]","g"),"_");var zmc="";if(typeof(chrome)!='undefined'&&typeof(chrome.i18n)!="undefined"&&typeof(chrome.i18n.getMessage)=="function"){zmc=chrome.i18n.getMessage(key);}
else if(typeof(ztg)!='undefined'){if(typeof(ztg[key])!='undefined'&&typeof(ztg[key].message)!='undefined'){zmc=ztg[key].message;}
}if(typeof(zmc)=="undefined"||zmc==null){zmc="";}if(zmc==""){zmc=zsa(ztf);}
return zmc;}catch(zmk){return zsa(ztf);};};if(typeof(zmd)!="undefined"){zmd.zth=function(name,zob){try{var zti=document.getElementById("strings_roboform");if(zti){var ztj=zti.ztk(name,zob);return ztj;}
return name;}catch(ztl){zmd.ztm("ERROR Localize_String: "+ztl.message+" "+name+" "+zob);return name;}
};}var ztn=false;if(typeof(zmd)!="undefined"){zmd.zto=function(ztp){var ztq=ztp["aMessage"];var ztr=ztp["aSourceName"];var zts=ztp["aSourceLine"];var ztt=ztp["aLineNumber"];var ztu=ztp["aColumnNumber"];var ztv=ztp["aFlags"]||0;var ztw=ztp["aCategory"]||"RoboForm Lite Error";var ztx=(new Date).getTime()-zdv;var zty=Cc["@mozilla.org/consoleservice;1"].getService(Ci.nsIConsoleService);var ztz=Cc["@mozilla.org/scripterror;1"].createInstance(Ci.nsIScriptError);var zua=new Date().toUTCString()+'\n'+ztx+" : "+ztq;ztz.init(zua,ztr,zts,ztt,ztu,ztv,ztw);if(ztn){zty.zub(ztz);}
};}function zuc(zud,zue){if(!ztn){return;}var ztx=(new Date).getTime()-zdv;if(typeof(opera)!="undefined"&&typeof(opera.postError)!="undefined"){opera.postError(new Date().toUTCString()+'\n'+ztx+" : (RF_LITE) "+zud);}
else if(zdp||zdu){console.log(new Date().toUTCString()+'\n'+ztx+" : (RF_LITE) "+zud);}
else{zuf.ztm(new Date().toUTCString()+'\n'+ztx+" : (RF_LITE TRACE) "+zud);}
if(zue==true){alert(zud);}};function ztm(zrq,zue){var ztx=(new Date).getTime()-zdv;if(typeof(opera)!="undefined"&&typeof(opera.postError)!="undefined"){opera.postError(new Date().toUTCString()+'\n'+ztx+" : (RF_LITE) "+zrq);}
else if(zdp||zdu){console.log(new Date().toUTCString()+'\n'+ztx+" : (RF_LITE) "+zrq);}
else{if(ztn){zuf.ztm(new Date().toUTCString()+'\n'+ztx+" : (RF_LITE) "+zrq);}
}if(zue==true){alert(zrq);}};if(typeof(zmd)!="undefined"){zmd.zug=function(ztl,zuh){var zui=typeof(ztl.zuj)=="undefined"?"":ztl.zuj;}
;}function zuk(zop,zul,zum,zun){try{var zuo=false;if(window.XMLHttpRequest){zuo=new XMLHttpRequest();if(zuo.overrideMimeType){zuo.overrideMimeType('text/xml');}
}else if(window.ActiveXObject){}if(!zuo){return false;}
zuo.open(zun,zop,false);zuo.setRequestHeader("Content-type","application/x-www-form-urlencoded");zuo.send(zul);if(zuo.status==200){if(zum){zum.call(this,zuo.responseText);}
return zuo.responseText;}return null;}catch(zmk){}
};function zup(zuq,zur,zus){if(zur){zus.style.display="none";setTimeout(function(){zut(zuq,1);}
,0);setTimeout(function(){zut(zuq,4);},200);setTimeout(function(){zut(zuq,5);}
,250);setTimeout(function(){zut(zuq,6);},300);setTimeout(function(){zut(zuq,7);}
,350);setTimeout(function(){zut(zuq,8);},400);setTimeout(function(){zut(zuq,9);}
,450);setTimeout(function(){zut(zuq,10);},500);}else{setTimeout(function(){zut(zuq,10);}
,0);setTimeout(function(){zut(zuq,9);},200);setTimeout(function(){zut(zuq,8);}
,250);setTimeout(function(){zut(zuq,7);},300);setTimeout(function(){zut(zuq,6);}
,400);setTimeout(function(){zut(zuq,5);},600);setTimeout(function(){zut(zuq,4);}
,800);setTimeout(function(){zut(zuq,3);},1000);}};function zut(zuu,zuv){var zuw=zuu;var zux=zuv/10;zuw.style.opacity=zux;if(zuv==1){zuw.style.display="block";zuw.style.opacity="0.3";}
};function zuy(zuz,zva){try{var zvb=null;if(zdr){zvb=$(zuz).find("Group");}
else{zvb=$(zuz).find("group");}if(!zvb){return null;}
var zvc="";for(var zov=0;zov<zvb.length;++zov){var zvd=zvb[zov];var zve=zvd.getAttribute("type");if(zve&&zve=="Location"){var zvf=zdr?zvd.childNodes.length:zvd.children.length;for(var zne=0;zne<zvf;++zne){var zvg=zdr?zvd.childNodes[zne]:zvd.children[zne];if(zdr){if(zvg.zvh&&zvg.nodeType==1){var zpy=zvg.getAttribute("name");if(zpy=="Country"){zvc=zvg.innerText;break;}
}}else{var zpy=zvg.getAttribute("name");if(zpy=="Country"){zvc=zvg.innerText;break;}
}}break;}}var zvi=zva?"":"+";var zvj=new zvk({"World Regions":zvc,"Use for Form Filling":zvi,"App Upload":""
}
);var zvf=zvb.length;for(var zne=0;zne<zvf;++zne){var zvl=zvb[zne];var zvm=zvl.getAttribute("name");var zvn=zvl.getAttribute("type");zvj.zvo(zvn,zvm);}
for(var zov=0;zov<zvb.length;++zov){var zvl=zvb[zov];var zvp=zvl.getAttribute("name");var zvq=zvl.getAttribute("type");if(zvq=="CustomFields"){var zvf=zdr?zvl.childNodes.length:zvl.children.length;for(var zne=0;zne<zvf;++zne){var zvr=zdr?zvl.childNodes[zne]:zvl.children[zne];if(zdr){}
else{var zvs=zvr.getAttribute("name");var zvt=zvr.children.length;var zvu="";var zvv="";var zvw=false;for(var zvx=0;zvx<zvt;zvx++){var zvy=zvr.children[zvx];var zvz=zvy.getAttribute("name");if(zvz=="Field Value"){zvv=zvy.innerText;}
if(zvz=="Other Matches"){zvu=zvy.innerText;if(zvu.indexOf("\\n")!=-1){zvu=zvu.split("\\n").join("; ");zvw=true;}
}}zvj.zwa(zvs,zvu,zvv,zvw);}}}else{var zvf=zdr?zvl.childNodes.length:zvl.children.length;for(var zne=0;zne<zvf;++zne){var zvg=zdr?zvl.childNodes[zne]:zvl.children[zne];if(zdr){if(zvg.zvh&&zvg.nodeType==1){var zvz=zvg.getAttribute("name");var zwb=zvg.innerText;zvj.zwc(zvz,zwb,zvp,zvq);}
}else{var zvz=zvg.getAttribute("name");var zwb=zvg.innerText;zvj.zwc(zvz,zwb,zvp,zvq);}
}}}return zvj;}catch(ztl){return null;}};function zwd(zwe,zwf,zwg,zwh,zwi,zwj,zwk){try{var zwl=zkm;var zwm="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var zwn="abcdefghijklmnopqrstuvwxyz";var zwo="123456789";if(zwe==true||zwe=='true'){zwl+=zwm;}
if(zwf==true||zwf=='true'){zwl+=zwn;}if(zwg==true||zwg=='true'){zwl+=zwo;}
if(zwh==true||zwh=='true'){zwl+=zwi;}var zwp=new Array();for(var zov=0;zov<zwj;zov++){zwp[zov]='0';}
var zwq=zwk;var zwr=zwj;var zra=new Object();zra.zws=zwj;if(zwg==true||zwg=='true'){for(var zwt=0;zwt<zwq;++zwt){zwu(zwp,zra,zwo,zwj);}
}if(zwe==true||zwe=='true'){zwu(zwp,zra,zwm,zwj);}
if(zwf==true||zwf=='true'){zwu(zwp,zra,zwn,zwj);}for(var zwv=0;zwv<zwj;zwv++){if(zwp[zwv]=='0'){zwp[zwv]=zww(zwl);}
}var zwx=zkm;for(var zov=0;zov<zwj;zov++){zwx+=zwp[zov];}
return zwx;}catch(zmk){}};function zwy(zwz){return Math.floor(Math.random()*(zwz+1));}
;function zwu(zxa,zra,zwl,zws){try{if(zra.zws==0){return;}
var zxb=0;var zxc=1000000;while(true){zxc--;if(zxc==0){break;}
zxb=zwy(zws);if(zxa[zxb]=='0'){var zxd=zww(zwl);zxa[zxb]=zxd;zra.zws--;break;}
}}catch(zmk){}};function zww(zst){var zne=zwy(zst.length-1);return zst[zne];}
;var zxe="rflite_toBG";var zxf="rflite_fromBG";function zrz(){this.zgd="https://online.roboform.com";this.zxg=function(zxh){if(zdq){safari.self.tab.dispatchMessage('rf_get_prefs_array',{arr:zxh}
);}else if(zdr){opera.extension.postMessage({"msg":"rf_get_prefs_array",message:{arr:zxh}
});}else if(zdu){var zxi={};zxi["msg_type"]="rf_get_prefs_array";zxi["data"]={"arr":zxh}
;window.external.mxGetRuntime().zxj(zxe,zxi);}};this.zxk=function(zra,zxl){if(zdq){safari.self.tab.dispatchMessage('rf_write_pref_array',{arr:zra,zxm:zxl}
);}else if(zdr){opera.extension.postMessage({"msg":"rf_write_pref_array",message:{arr:zra,zxm:zxl}
});}else if(zdu){var zxi={};zxi["msg_type"]="rf_write_pref_array";zxi["data"]={"arr":zra,"refresh":zxl}
;window.external.mxGetRuntime().zxj(zxe,zxi);}};this.zxn=function(){if(zdq){}
else if(zdr){}else if(zdu){var zxi={};zxi["msg_type"]="login_check";zxi["data"]={}
;window.external.mxGetRuntime().zxj(zxe,zxi);}};this.zxo=function(zxp){if(zdq){}
else if(zdr){opera.extension.postMessage({"msg":"rf_openPageUrl_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_openPageUrl_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zxq=function(zxr,zxs,zxt){if(zdq){safari.self.tab.dispatchMessage('rf_do_login',{zxr:zxr,zxs:zxs,"logofftime":zxt}
);}else if(zdr){opera.extension.postMessage({"msg":"rf_do_login",message:{"userId":zxr,"password":zxs,"logofftime":zxt}
});}else if(zdu){var zxi={};zxi["msg_type"]="rf_do_login";zxi["data"]={"userId":zxr,"password":zxs,"logofftime":zxt}
;window.external.mxGetRuntime().zxj(zxe,zxi);}};this.zxu=function(zxp){if(zdq){}
else if(zdr){opera.extension.postMessage({"msg":"rf_fill_password",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_fill_password";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zxv=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_set_reset_fields",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_set_reset_fields";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zxw=function(zxp){if(zdu){var zxi={};zxi["msg_type"]="rf_clear_local_cache";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zxx=function(zxp){if(zdu){var zxi={};zxi["msg_type"]="rf_logoff_account";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zxy=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_get_folder_content",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_get_folder_content";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zxz=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_RenameRfOnlineObject_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_RenameRfOnlineObject_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zya=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_SavePasscardToServer_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_SavePasscardToServer_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyb=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_SaveRawObject_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_SaveRawObject_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyc=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_get_ObjectFields_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_get_ObjectFields_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyd=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_get_folders_array",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_get_folders_array";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zye=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_fill_current_identity",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_fill_current_identity";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyf=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_CreateNewFolder_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_CreateNewFolder_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyg=function(zxp){if(zdq){var zyh=zyi.m_sName;var zyj=zyi.m_Type;var znf=zyi.znf;var zpk=zyi.zpk;}
else if(zdr){opera.extension.postMessage({"msg":"rf_NavigateFillSubmit_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_NavigateFillSubmit_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyk=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_set_active_identity_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_set_active_identity_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyl=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_getRecentlyused_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_getRecentlyused_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zym=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_ClearRecentlyused_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_ClearRecentlyused_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyn=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_createMasterPassword_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_createMasterPassword_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyo=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_DeleteRfOnlineObject_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_DeleteRfOnlineObject_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyp=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_call_savemanual_dialog",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_call_savemanual_dialog";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyq=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_server_search_action",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_server_search_action";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zyr=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_do_signup",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_do_signup";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};this.zys=function(zxp){if(zdq){}else if(zdr){opera.extension.postMessage({"msg":"rf_check_masterpwd",message:zxp}
);}else if(zdu){var zxi={};zxi["msg_type"]="rf_check_masterpwd";zxi["data"]=zxp;window.external.mxGetRuntime().zxj(zxe,zxi);}
};};function zyt(){};if(typeof(zmd)!="undefined"){zmd.zyu="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";zmd.zpc=zpc;zmd.zyv=RfObjectMode;zmd.zyw=RfObjectType;zmd.zyx=RfFieldType;zmd.zhe=zhe;zmd.zhf=zhf;zmd.rfjs_EnRfSetClearFields=rfjs_EnRfSetClearFields;zmd.zhn=zhn;zmd.zho=zho;zmd.zhp=zhp;zmd.zhq=zhq;zmd.zhr=zhr;zmd.zhs=zhs;zmd.zht=zht;zmd.zhu=zhu;zmd.rfjs_PageStatus=rfjs_PageStatus;zmd.zyy=EnResultCode;zmd.zyz=FillRetCode;zmd.zoc=zoc;zmd.znk=znk;zmd.zgh=zgh;zmd.zgi=zgi;zmd.zgj=zgj;zmd.zgk=zgk;zmd.zgl=zgl;zmd.zgn=zgn;zmd.zgo=zgo;zmd.zgp=zgp;zmd.zgq=zgq;zmd.zgr=zgr;zmd.zgs=zgs;zmd.zgt=zgt;zmd.zgu=zgu;zmd.zgg=zgg;zmd.zgf=zgf;zmd.zgd=zgd;zmd.zhv=zhv;zmd.zhw=zhw;zmd.zhx=zhx;zmd.zhy=zhy;zmd.zhz=zhz;zmd.zig=zig;zmd.zih=zih;zmd.zkb=zkb;zmd.zkc=zkc;zmd.zkd=zkd;zmd.zke=zke;zmd.zkf=zkf;zmd.zkg=zkg;zmd.zki=zki;zmd.zkj=zkj;zmd.zkk=zkk;zmd.zdp=zdp;zmd.zdu=zdu;zmd.zdq=zdq;zmd.zdr=zdr;zmd.zdt=zdt;zmd.zsn=zsn;zmd.zkl=zkl;zmd.zza="smpenc.rfo";zmd.zro=zro;zmd.zgm=zgm;zmd.zgv=zgv;zmd.zkh=zkh;zmd.zzb=3;zmd.zzc=1;zmd.zzd=2;zmd.zze=1;zmd.zzf=6;zmd.zzg=1;zmd.zzh=2;zmd.zzi=3;zmd.zgx=zgx;zmd.zhb=zhb;zmd.zhd=zhd;zmd.zgy=zgy;zmd.zhc=zhc;zmd.zec=zec;zmd.zss=zss;zmd.zuc=zuc;zmd.ztm=ztm;zmd.zml=zml;}

