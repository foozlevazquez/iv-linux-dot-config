var zdq=false;var zdp=false;var zdr=false;var zdu=false;var zcgx=null;var zcgy=null;var zed=navigator.appVersion.indexOf('Windows')!=-1;var zee=navigator.appVersion.indexOf('Mac')!=-1;var zef=navigator.appVersion.indexOf('Linux')!=-1;var zcgz=navigator.appVersion.indexOf('X11')!=-1;var zcha="images/rf_options24_24.png";var zchb="images/opt_security24_24.png";var zchc="images/match24_24.png";var zchd="images/form_fill21_21.png";var zche="images/hotkeys24_24.png";var zchf=350;var zchg=121;var zchh=768;var zchi="save_prefs_btn";var zchj=null;var zchk="cancel_prefs_btn";var zchl=null;var zchm="prefs_btns";var zchn=null;var zcho="mp_div_loader";var zchp=null;var zchq="prefs_body";var zchr="rf_legend_general";var zchs="rf_loginsBookmarksJointly_label";var zcht="rf_loginsBookmarksJointly_chk";var zchu="rf_tie_session_label";var zchv="rf_tie_session_chk";var zchw="rf_cache_mastpwd_label";var zchx="rf_cache_mpwd_until_logut_chk";var zchy="rf_show_bar_label";var zchz="rf_show_auto_savebar_chk";var zcia="rf_logoff_label";var zcib="rf_timeout_select";var zcic="rf_legend_form_filling";var zcid="rf_fill_empty_label";var zcie="rf_fill_empty_fields_chk";var zcif="rf_highlight_filled_lbl";var zcig="rf_highlight_filledflds_chk";var zcih="rf_legend_security";var zcii="rf_protect_label";var zcij="rf_pwd_protect_chk";var zcik="rf_offer_save_another_lbl";var zcil="rf_offer_save_another_pcard_chk";var zcim="rf_legend_hotkeys";var zcin="hotkeys_showoptions_lbl";var zcio="rf_HK_showoptions";var zcip="hotkeys_fillidentity_lbl";var zciq="rf_HK_fillidentity";var zcir="hotkeys_clearfields_lbl";var zcis="rf_HK_clearfields";var zcit="hotkeys_resetfields_lbl";var zciu="rf_HK_resetfields";var zciv="hotkeys_setfields_lbl";var zciw="rf_HK_setfields";var zcix="hotkeys_generatefillPwd_lbl";var zciy="rf_HK_generatefillPwd";var zciz="hotkeys_fill_pcard_nextlbl";var zcja="rf_HK_fill_pcard_next";var zcjb="hotkeys_fill_pcard_prevlbl";var zcjc="rf_HK_fill_pcard_prev";var zcjd="general";var zcje="security";var zcjf="form_fill";var zcjg="hot_keys";var zcjh="rf_pasc_recently_count";var zcji="rf_match_pcard_action";var zcjj="rf_legend_matching";window.addEventListener("load",zcjk,true);if(typeof(safari)!="undefined"&&typeof(safari.self.addEventListener)!="undefined"){safari.self.addEventListener("message",zcjl,false);zdq=true;var tabs=new Array(zcjd,zcje,"matching_passcards",zcjf);}
if(typeof(chrome)!="undefined"){var tabs=new Array(zcjd,zcje,zcjf,zcjg);zdp=true;}
if(typeof(zdw)!="undefined"){var tabs=new Array(zcjd,zcje,zcjf,zcjg);zdu=true;window.external.mxGetRuntime().zaso(zxf,zcjl)}
if(typeof(opera)!="undefined"){opera.extension.addEventListener('message',zcjl,false);var tabs=new Array(zcjd,zcje,zcjf);zdr=true;}
function zcjm(){var zcjn={"general":{"icon":zcha,"title":zcgx("General"),"cmd":zcjd}
,"security":{"icon":zchb,"title":zcgx("Security"),"cmd":zcje}
,"form_fill":{"icon":zchd,"title":zcgx("form_fill_section"),"cmd":zcjf}
,"hot_keys":{"icon":zche,"title":zcgx("hot_keys_section"),"cmd":zcjg}
};if(zdq){zcjn["matching_passcards"]={"icon":zchc,"title":zcgx("menu_matching_passcards"),"cmd":"matching_passcards"}
;}var zavk="";for(var zra in zcjn){if(zcjn[zra]==null){zavk+='<div id="menu'+zra+'" class="menuspacer"><div></div></div>';continue;}
zavk+='<div id="menu'+zra+'" displaytab="'+zra+'" class="menubutton"><div class="menubuttontext" style="background:url('+zcjn[zra]["icon"]+') no-repeat 2px 4px;">'+zcjn[zra]["title"]+"</div></div>";}
document.getElementById("prefs_menu").innerHTML=zavk;setTimeout(function(){var zcjo=document.getElementById("prefs_menu").getElementsByTagName('div');for(var zov=0;zov<zcjo.length;zov++){var zcjp=zcjo[zov];if(zcjp.hasAttribute("displaytab")){zcjp.addEventListener("click",function(){for(var zra in tabs){var zbfn=tabs[zra];document.getElementById("menu"+zbfn).className="menubutton";document.getElementById(zbfn).style.display="none";}
this.className="menubutton2";document.getElementById(this.getAttribute("displaytab")).style.display="block";}
,false);}}},0);};function zbcf(zsc){for(var zra in tabs){var zbfn=tabs[zra];document.getElementById("menu"+zbfn).className="menubutton";document.getElementById(zbfn).style.display="none";}
document.getElementById("menu"+zsc).className="menubutton2";document.getElementById(zsc).style.display="block";}
;function zcjq(){var zcjr=document.getElementById("rf_recently_used_chk");document.getElementById(zcjh).disabled=!zcjr.checked;document.getElementById("rf_pasc_recently_lbl").style.color=zcjr.checked==true?'black':'grey';}
;function zcjs(zbfn){return document.getElementById(zbfn).value;}
;function zcjt(zcju,zavo){document.getElementById(zavo).value=zcju.zard[zavo];}
;function zcjv(value,zcjw){try{var zcjx=document.getElementsByName(zcjw);for(var zcjy=0;zcjy<zcjx.length;zcjy++){if(zcjx[zcjy].value==value){zcjx[zcjy].setAttribute("checked");break;}
}}catch(zmk){}};function zcjz(zcjw){var zcjx=document.getElementsByName(zcjw);for(var zcjy=0;zcjy<zcjx.length;++zcjy){if(zcjx[zcjy].checked==true){return zcjx[zcjy].value;}
}};function zavl(value,zavo){try{if(value==false||value=="false"){document.getElementById(zavo).removeAttribute("checked");}
}catch(zmk){}};function zcka(zbfn){return document.getElementById(zbfn).checked?true:false;}
;function zckb(zbfp,zavo,zcag){try{var zuq=document.getElementById(zavo);if(zavo==zcib){zuq.selectedIndex=3;}
for(var zblk=0;zblk<zuq.options.length;zblk++){if(zbfp==zuq.options[zblk].value){zuq.selectedIndex=zblk;break;}
}}catch(zmk){}};function zckc(zsb){var zbfn=document.getElementById(zsb);return zbfn.options[zbfn.selectedIndex].value;}
;function zckd(){try{if(!zdq){return;}if(zcgy!=null){return zcgy;}
if(window.openDatabase){zcgy=openDatabase("roboform","1.0","RoboForm Local Database",2E5);if(!zcgy){}
}else{}return zcgy;}catch(zmk){return zcgy;}};function zcke(zbfo){try{var zckf=screen.availWidth;var zckg=screen.availHeight;var zckh=0;var zcki=document.getElementById("opt_div_dialog_section");zcki.style.top=zchg+29+"px";var zckj=zcki.style.top;zckj=zckj.replace("px","");zckh=Math.abs(parseInt(zckj));if(zckg<=zchh){zbfo=zbfo-100;zchp.style.top=zckh+zbfo+10+"px";}
else{zchp.style.top=zckh+zbfo+50+"px";}zcki.style.height=zbfo+"px";zcki.style.maxHeight=zbfo+"px";zcki.style.minHeight=zbfo+"px";zchn.style.top=zckh+zbfo-27+"px";var zaxx=zcki.style.height;zaxx=zaxx.replace("px","");var zckk=Math.abs(parseInt(zaxx));if(zdq){document.getElementById("mp_dialog_bottom_border").style.top=zckk-9+"px";}
}catch(zmk){}};function zcjk(){try{zchp=document.getElementById(zcho);zchn=document.getElementById(zchm);zchj=document.getElementById(zchi);zchj.addEventListener('mouseover',zben,false);zchj.addEventListener('mouseout',zbem,false);zchj.addEventListener('click',function(){zckl();return false;}
,false);zchl=document.getElementById(zchk);zchl.addEventListener('mouseover',zben,false);zchl.addEventListener('mouseout',zbem,false);zchl.addEventListener('click',function(){zckm();return false;}
,false);zcgx=zte;document.getElementById(zchq).setAttribute("unselectable","on");document.getElementById(zchr).setAttribute("unselectable","on");document.getElementById(zchs).setAttribute("unselectable","on");document.getElementById(zchu).setAttribute("unselectable","on");document.getElementById(zchw).setAttribute("unselectable","on");document.getElementById(zchy).setAttribute("unselectable","on");document.getElementById(zcia).setAttribute("unselectable","on");document.getElementById(zcih).setAttribute("unselectable","on");document.getElementById(zcii).setAttribute("unselectable","on");document.getElementById(zcik).setAttribute("unselectable","on");document.getElementById(zcic).setAttribute("unselectable","on");document.getElementById(zcid).setAttribute("unselectable","on");document.getElementById(zcif).setAttribute("unselectable","on");document.getElementById(zcim).setAttribute("unselectable","on");document.getElementById(zcin).setAttribute("unselectable","on");document.getElementById(zcip).setAttribute("unselectable","on");document.getElementById(zcir).setAttribute("unselectable","on");document.getElementById(zcit).setAttribute("unselectable","on");document.getElementById(zciv).setAttribute("unselectable","on");document.getElementById(zcix).setAttribute("unselectable","on");document.getElementById(zciz).setAttribute("unselectable","on");document.getElementById(zcjb).setAttribute("unselectable","on");zchn.setAttribute("unselectable","on");document.getElementById("mp_div_top_section").style.display="block";document.getElementById("mp_div_bottom_section").style.display="block";zchp.style.display="none";zcke(zchf);if(zchj.value!=undefined){zchj.setAttribute("value",zcgx("savebar_save_btn"));zchl.setAttribute("value",zcgx("cancel_btn"));}
if(zchj.innerText!=undefined){zchj.innerText=zcgx("savebar_save_btn");zchl.innerText=zcgx("cancel_btn");}
document.getElementById(zchr).innerHTML=zcgx("General");document.getElementById(zchs).innerHTML=zcgx("Show_logins_bmarks_together");document.getElementById(zchu).innerHTML=zcgx("Tie_session_IP");document.getElementById(zchw).innerHTML=zcgx("cache_mast_password_lbl_options");document.getElementById(zchy).innerHTML=zcgx("Show_AutoSave_Notification_Bar");document.getElementById(zcia).innerHTML=zcgx("Automatically_Logoff_after_idle")+":";document.getElementById(zcih).innerHTML=zcgx("Save_Options");document.getElementById(zcii).innerHTML=zcgx("Password_protect_passcard");document.getElementById(zcik).innerHTML=zcgx("offer_to_save_another_pcard");document.getElementById(zcic).innerHTML=zcgx("form_fill_section");document.getElementById(zcid).innerHTML=zcgx("form_fill_empty_fields");document.getElementById(zcif).innerHTML=zcgx("highlight_filled_fields");document.getElementById(zcim).innerHTML=zcgx("hot_keys_section");document.getElementById(zcin).innerHTML=zcgx("hotkeys_open_Options");document.getElementById(zcip).innerHTML=zcgx("hotkeys_fill_identity");document.getElementById(zcir).innerHTML=zcgx("menu_clear_fields");document.getElementById(zcit).innerHTML=zcgx("menu_reset_fields");document.getElementById(zciv).innerHTML=zcgx("menu_set_fields");document.getElementById(zcix).innerHTML=zcgx("generate_fill_pwd");document.getElementById(zciz).innerHTML=zcgx("fill_next_login");document.getElementById(zcjb).innerHTML=zcgx("fill_previous_login");document.getElementById(zcjj).innerHTML=zcgx("Matching_Passcards_Options");document.getElementById("rf_action_login_label").innerHTML=zcgx("Login");document.getElementById("rf_action_login_newtab_label").innerHTML=zcgx("Login_in_new_tab");document.getElementById("rf_action_navigate_fill_label").innerHTML=zcgx("menu_gotofill");document.getElementById("rf_action_navigate_label").innerHTML=zcgx("menu_goto");document.getElementById("rf_action_fill_label").innerHTML=zcgx("menu_matching_fill");document.getElementById("rf_action_fill_submit_label").innerHTML=zcgx("menu_matching_fill_submit");document.getElementById("rf_matchcard_action_label").innerHTML=zcgx("Matching_Passcard_def_action");document.getElementById("opt_1min").innerHTML="1 "+zcgx("min");document.getElementById("opt_5min").innerHTML="5 "+zcgx("min");document.getElementById("opt_10min").innerHTML="10 "+zcgx("min");document.getElementById("opt_20min").innerHTML="20 "+zcgx("min");document.getElementById("opt_60min").innerHTML="1 "+zcgx("hour");document.getElementById("opt_180min").innerHTML="3 "+zcgx("hours");document.getElementById("opt_480min").innerHTML="8 "+zcgx("hours");document.getElementById("opt_1440min").innerHTML="1 "+zcgx("days");document.getElementById("opt_4320min").innerHTML="3 "+zcgx("days");document.getElementById("opt_10080min").innerHTML="1 "+zcgx("week");document.getElementById("opt_20160min").innerHTML="2 "+zcgx("weeks");document.getElementById("opt_43200min").innerHTML="1 "+zcgx("month");zcjm();var zatz=zrv().zxg();zckn(zatz);zbcf(zcjd);zcko(zcio);zcko(zciq);zcko(zcis);zcko(zciu);zcko(zciw);zcko(zciy);zcko(zcja);zcko(zcjc);return;}
catch(zmk){}};function zckn(zatz){if(!zatz){return;}
zckp(zatz);};function zckm(){try{if(zdu){var zbqu=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();setTimeout(function(){zbqu.close();}
,50);}else{setTimeout(function(){zrv().zckq(false,0);}
,50);}}catch(zmk){}};function zckr(arr){arr[zcij]=zcka(zcij);arr[zchz]=zcka(zchz);arr[zchv]=zcka(zchv);arr[zcie]=zcka(zcie);arr[zchx]=zcka(zchx);arr[zcht]=zcka(zcht);arr[zcil]=zcka(zcil);arr[zcib]=zckc(zcib);arr[zcig]=zcka(zcig);if(zdq){arr[zcji]=zcjz(zcji);}
for(var zcks in zckt){arr[zcks]=zckt[zcks];}};function zckl(){try{zchp.style.display="block";document.body.style.cursor="wait";zchj.style.cursor="wait";if(zdu){var zbfz={}
;zckr(zbfz);zrv().zxk(zbfz,false);}else{var arr=zrv().getPrefs();if(arr!=null){zckr(arr);zrv().zavr();}
}setTimeout(function(){document.getElementById(zcho).style.display="none";}
,800);setTimeout(function(){zup(document.getElementById(zchq),false);}
,1000);setTimeout(function(){document.body.style.cursor="default";if(zdu){var zbqu=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();setTimeout(function(){zbqu.close();}
,0);}else{zrv().zckq(false,0);}},2000);}catch(zmk){zchp.style.display="none";zchj.style.cursor="default";document.body.style.cursor="default";}
};function zcjl(zbgl){try{var zazk="";var zavj=null;if(zdq){zazk=zbgl.name;zavj=zbgl.message;}
else if(zdr){zazk=zbgl.data["msg"];zavj=zbgl.data.messageObj;}
else if(zdu){zazk=zbgl["msg_type"];zavj=zbgl["data"];}
if(zazk=="rf_get_prefs_array_result"){var zxh=zavj["arr"];zckn(zxh);}
}catch(zmk){}};function zckp(arr){zavl(arr[zcij],zcij);zavl(arr[zchz],zchz);zavl(arr[zchv],zchv);zavl(arr[zcie],zcie);zavl(arr[zchx],zchx);zavl(arr[zcht],zcht);zavl(arr[zcil],zcil);zckb(arr[zcib],zcib);zavl(arr[zcig],zcig);if(zdq){zcjv(arr[zcji],zcji);}
for(var zcku in arr){if(zcku.startsWith("rf_HK")){zckt[zcku]=arr[zcku];}
}zckv(zcio);zckv(zciq);zckv(zcis);zckv(zciu);zckv(zciw);zckv(zciy);zckv(zcja);zckv(zcjc);}
;function zbem(){if(this.getAttribute("disabled")){this.className=zaqc;return;}
else{this.className="btn_default_class";this.style.backgroundColor='#f0f0f0';return;}
};function zben(){if(this.getAttribute("disabled")){return;}
else{this.className="btn_mouseover_class";this.style.backgroundColor='#ffffff';return;}
};var zckw=8;var zckx=127;var zcky=46;var zckz=32;var zcla=91;var zckt=[];var zclb=112;var zclc=113;var zcld=114;var zcle=115;var zclf=116;var zclg=117;var zclh=118;var zcli=119;var zclj=120;var zclk=121;var zcll=122;var zclm=123;function zcko(zcln){document.getElementById(zcln).onkeypress=function(){return false}
;document.getElementById(zcln).addEventListener("keyup",function(){zclo(zcln,event);}
);document.getElementById(zcln).addEventListener("blur",function(){zclo(zcln,event);}
);document.getElementById(zcln).addEventListener("keydown",function(){zclp(zcln,event);}
);};function zclp(zclq,zclr){var zcls="";zcls+=zclr.ctrlKey?"control":"";zcls+=zclr.metaKey?(zcls!=""?"_":"")+"meta":"";zcls+=zclr.altKey?(zcls!=""?"_":"")+"alt":"";zcls+=zclr.shiftKey?(zcls!=""?"_":"")+"shift":"";if(zcls==""||zcls=="shift"){zcls=zee?"meta":"alt";}
if(zclr.keyCode==zckw||zclr.keyCode==zckx||zclr.keyCode==zcky){zckt[zclq+"KeyCode"]=0;}
else if(zclr.keyCode<=zckz||zclr.keyCode==zcla||(zclr.keyCode>=zclb&&zclr.keyCode<=zclm)){return;}
else{zckt[zclq+"KeyCode"]=zclr.keyCode!=0?zclr.keyCode:zclr.charCode;}
zckt[zclq+"Mods"]=zcls;zckv(zclq);};function zckv(zclq){var zclt=zclq;var zclu=zckt[zclq+"KeyCode"];var zclv=document.getElementById(zclq);var zvv="";if(zclu!=0){zclq=zckt[zclq+"Mods"];if(typeof zclq!="string"){zclq="";}
zclq=zclq.split("_");for(var zclw in zclq){if(zclq[zclw]=="control"){zvv+="Ctrl"+"+";}
if(zclq[zclw]=="meta"){zvv+="Meta"+"+";}if(zclq[zclw]=="alt"){zvv+="Alt"+"+";}
if(zclq[zclw]=="shift"){zvv+="Shift"+"+";}}}if(zclu!=0){zclu=parseInt(zclu);switch(zclu){case 33:zvv+="Page Up";break;case 34:zvv+="Page Down";break;case 35:zvv+="End";break;case 36:zvv+="Home";break;case 37:zvv+="Left";break;case 38:zvv+="Up";break;case 39:zvv+="Right";break;case 40:zvv+="Down";break;case 189:zvv+="-";break;case 219:zvv+="[";break;case 220:zvv+="\\";break;case 221:zvv+="]";break;case 186:zvv+=";";break;case 222:zvv+="'";break;case 188:zvv+=",";break;case 187:zvv+="+";break;case 190:zvv+=".";break;case 191:zvv+="/";break;case 106:zvv+="*";break;case 192:zvv+="~";break;case 124:zvv+="Print Screen";break;default:zvv+=String.fromCharCode(zclu).toUpperCase();break;}
zclv.value=zvv;}else{zclv.value="";}};function zclo(zclx,zclr){if(zckt[zclx+"KeyCode"]<zckz){zckt[zclx+"Mods"]="";zckv(zclx);}
zclr.cancelBubble=true;zclr.stopPropagation();};