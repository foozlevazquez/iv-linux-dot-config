var zcfi=20;var zcfj=8;var zask=zdr?300:20;var zcfk="rfpassword_generator_div";var zasq="rf_passgen_generate_btn";var zcdb=null;var zasr="rf_passgen_copy_btn";var zcdd=null;var zass="rf_passgen_fill_btn";var zcdf=null;var zcfl="rf_passgen_newpassw_txt";var zcfm="rf_passgen_strength_div_real";var zcfn="rf_pwd_generate_copycliboardp_chk";var zcdi="rf_pwd_generate_number_symbols";var zcdh=null;var zcdm="rf_pwd_generate_upper_chk";var zcdl=null;var zcdp="rf_pwd_generate_lower_chk";var zcdo=null;var zcdr="rf_pwd_generate_digits_chk";var zcdq=null;var zcdt="rf_pwd_generate_specialsymb_chk";var zcds=null;var zcdw="rf_pwd_generate_special_chars";var zcdv=null;var zast="rf_passgen_numernumber_lbl";var zcea="rf_pwd_generate_number_digits";var zcdz=null;var zcfo="err_passgener_msg";function zbcg(){try{zatq("n_popup_generatepwd_width",zfd,zfe);zbaz();var zazq=zazr();var zavk=document.getElementById(zcfk).innerHTML;zatr({"s_html":zaqt,"sTitle":zte("menu_Generate_Pass"),"b_pushtoArrays":false,"b_show_title":true,"b_show_back":true,"n_height":zfe,"n_width":zfd,"searchObj":{"bShowSearchBox":false,"isSearchResults":false,"s_searchquery":zkm}
,"parentId":zkm});setTimeout(function(){zatr({"s_html":zavk,"sTitle":zte("menu_Generate_Pass"),"b_pushtoArrays":true,"b_show_title":true,"b_show_back":true,"n_height":0,"n_width":0,"searchObj":{"bShowSearchBox":false,"isSearchResults":false,"s_searchquery":zkm}
,"parentId":zkm});if(zdr){document.getElementById("rf_passgen_clipchk_td").style.display=zaqe;}
document.getElementById(zcfo).innerHTML=zkm;if(!zard||zard.length==0){zard=zrv().getPrefs();}
var zcfp=zard[zle];if(!zcfp){zcfp="!@#$%^&";}document.getElementById(zcdi).value=parseInt(zard[zky]);document.getElementById(zcea).value=parseInt(zard[zkz]);document.getElementById(zcdm).checked=parseInt(zard[zla]);document.getElementById(zcdp).checked=parseInt(zard[zlc]);document.getElementById(zcdr).checked=parseInt(zard[zlb]);document.getElementById(zcdt).checked=parseInt(zard[zld]);document.getElementById(zcdw).value=zcfp;zcdu();if(!zdr){document.getElementById(zcfn).checked=parseInt(zard[zlf]);}
else{document.getElementById(zasr).style.visibility="hidden";}
document.getElementById(zasq).removeAttribute(zapz);if(!document.getElementById(zcdr).checked){document.getElementById(zcea).setAttribute(zapz,true);document.getElementById(zast).style.color="gray";}
else{document.getElementById(zcea).removeAttribute(zapz);document.getElementById(zast).style.color="black";}
zays(zazq);zcda();zcdc();},zask);}catch(zmk){}};function zcdu(zaun){var zcfq=document.getElementById(zcdt);zcfq.checked?document.getElementById(zcdw).removeAttribute("readonly"):document.getElementById(zcdw).setAttribute("readonly",true);document.getElementById(zcdw).style.color=zcfq.checked?"black":"grey";}
;function zcdy(zaun){try{var zcfr=document.getElementById(zcdw);var zcfs=zaun.zcft.zcfu("Text");var zcfv="~_!@#$%^&*()+=-[]\\\';,./{}|\":<>?";var zcfw=zcfs.length;for(var zov=0;zov<zcfw;zov++){var zcfx=zcfs[zov];var zcfy=zcfv.indexOf(zcfx);if(zcfy==-1){zcfs=zcfz(zcfs,zov,1);zov=0;zcfw=zcfw-1;}
}if(zcfs.length){var zcfx=zcfs[0];var zcfy=zcfv.indexOf(zcfx);if(zcfy==-1){zcfs=zcfz(zcfs,0,1);}
}zaun.zcft.zcga("text/plain",zcfs);setTimeout(function(){document.getElementById(zcdw).value=zcfs;}
,150);zaun.zcgb=false;return false;}catch(zmk){}};function zcfz(zmc,zta,zbet){return zmc.substring(0,zta)+zmc.substring(zta+zbet);}
function zcdx(zaun){var zcfr=document.getElementById(zcdw);if(zdr){var zcfx=String.fromCharCode(zaun.zaup);if((zaun.keyCode==8)||(zaun.zaup==0)&&(zaun.keyCode!=13)){return true;}
}else{var zcfx=String.fromCharCode(zaun.charCode);if((zaun.charCode==0)&&(zaun.keyCode!=13)){return true;}
}var zcfv="~_!@#$%^&*()+=-[]\\\';,./{}|\":<>?";var zcfy=zcfv.indexOf(zcfx);if(zcfy==-1){return false;}
if(zaun.target.value.length>30){return false;}var zcfs=zcfr.value;if(!zcfs.length){return true;}
var zcgc=zcfs.indexOf(zcfx);if(zcgc==-1){return true;}
return false;};function zcgd(){try{zbmm();zaul(false,undefined,zte("menu_Generate_Pass"),false);}
catch(zmk){}};function zcdc(){try{document.getElementById(zcfo).innerHTML=zkm;var zcge=document.getElementById(zcdi);var zwj=parseInt(zcge.value);if(zwj==0||zwj>zcfi){document.getElementById(zcfo).innerHTML=zte("wrong_number_of_characters");document.getElementById(zcdi).focus();var zcgf=zte("language");if(zcgf&&zcgf.toString()=="ja"){document.getElementById(zcfo).style.fontSize="6px";}
return;}var zcgg=document.getElementById(zcea);var zwk=parseInt(zcgg.value);if(zwk>zwj){document.getElementById(zcfo).innerHTML=zte("wrong_number_of_digits");document.getElementById(zcea).focus();var zcgf=zte("language");if(zcgf&&zcgf.toString()=="ja"){document.getElementById(zcfo).style.fontSize="6px";}
return;}var zcgh=zwd(document.getElementById(zcdm).checked,document.getElementById(zcdp).checked,document.getElementById(zcdr).checked,document.getElementById(zcdt).checked,document.getElementById(zcdw).value,zwj,zwk);document.getElementById(zcfl).value=zcgh;if(!zdr){var zcgi=document.getElementById(zcfn);if(zcgi.checked==true||zcgi.checked=='true'){zcgj.zcgk(zcgh);}
}zcgl(zcgh);}catch(zmk){}};function zcdn(zaun){try{zaun=zaun||window.event;var target=(zaun.target)?zaun.target:zaun.scrElement;var zcgm=target.checked;if(zcgm==false||zcgm=="false"){if(target.id==zcdr){document.getElementById(zcea).setAttribute(zapz,true);document.getElementById(zast).style.color="grey";}
if((!document.getElementById(zcdm).checked)&&(!document.getElementById(zcdp).checked)&&(!document.getElementById(zcdr).checked)){document.getElementById(zasq).setAttribute(zapz,true);return;}
}else{document.getElementById(zasq).removeAttribute(zapz);if(target.id==zcdr){document.getElementById(zcea).removeAttribute(zapz);document.getElementById(zast).style.color="black";}
}return;}catch(zmk){}};function zcdg(){var zcgn=document.getElementById(zcfl).value;var zaty=new Object();zaty[zce]=zarn;zaty[zdn]=zcgn;zrv().zxu(zaty);}
;function zcde(){var zato=document.getElementById(zcfl).value;zcgj.zcgk(zato);}
;function zbmm(){try{if(zdu){var arr={};}else{var arr=zrv().getPrefs();if(arr==null){return;}
}if((!document.getElementById(zcdm).checked)&&(!document.getElementById(zcdp).checked)&&(!document.getElementById(zcdr).checked)){document.getElementById(zcdr).checked=true;}
arr[zky]=zard[zky]=document.getElementById(zcdi).value;arr[zkz]=zard[zkz]=document.getElementById(zcea).value;arr[zla]=zard[zla]=document.getElementById(zcdm).checked?1:0;arr[zlb]=zard[zlb]=document.getElementById(zcdr).checked?1:0;arr[zlc]=zard[zlc]=document.getElementById(zcdp).checked?1:0;arr[zld]=zard[zld]=document.getElementById(zcdt).checked?1:0;arr[zle]=zard[zle]=document.getElementById(zcdw).value;if(!zdr){arr[zlf]=document.getElementById(zcfn).checked?1:0;}
if(zdu){zrv().zxk(arr,false);}else{zrv().zavr();}}
catch(zmk){}};function zcdk(event){var zauo=(event.which)?event.which:event.keyCode;if(zauo>31&&(zauo<48||zauo>57)){return false;}
return true;};function zcgo(){document.getElementById(zcfk).style.display=zaqe;zayt(zaiz);}
;function zcdj(zaun){var zcgp=this;if(!zcgp.value||parseInt(zcgp.value)==0){if(zcgp.getAttribute("id")==zcdi){zcgp.value="8";}
else{zcgp.value="1";}}};function zcgl(zcgq){var zcgr=zcgs(zcgq);var zcgt=Math.round(zcgr*200/100)+"px";document.getElementById(zcfm).style.width=zcgt;}
;function zcgs(zcgq){var zcgu=0;if(zcgq==zkm){return 0;}
if(zcgq.match(new RegExp(".*\\d.*\\d.*\\d"))){zcgu+=6;}
if(zcgq.match(new RegExp("[!,@,#,$,%,^,&,*,?,_,~]"))){zcgu+=6;}
if(zcgq.match(new RegExp(".*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~]"))){zcgu+=8;}
zcgu+=zcgq.length*3;if(zcgq.match(new RegExp("[a-z]"))){zcgu+=2;}
if(zcgq.match(new RegExp("[A-Z]"))){zcgu+=5;}if(zcgq.match(new RegExp("(?=.*[a-z])(?=.*[A-Z])"))){zcgu+=2;}
if(zcgq.match(new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])"))){zcgu+=2;}
if(zcgq.match(new RegExp("\\d"))){zcgu+=4;}if(zcgq.match(new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*,?,_,~])"))){zcgu+=2;}
zcgu*=2;if(zcgu<0){zcgu=0;}else if(zcgu>100){zcgu=100;}
return zcgu;};zcgj={};zcgj.createTextArea=function(zato){try{var zcgv=document.createElement("textarea");zcgv.style.position="absolute";zcgv.style.left="-100%";if(zato!=null){zcgv.innerText=zato;}
document.body.appendChild(zcgv);return zcgv;}catch(zmk){return null;}
};zcgj.zcgk=function(zato){try{if(zato==null){return;}
if(zato==zkm){zato=" ";}var zcgv=zcgj.createTextArea(zato);if(zcgv==null){return;}
zcgv.select();document.execCommand("Copy");document.body.removeChild(zcgv);}
catch(zmk){}};zcgj.zcgw=function(){try{var zcgv=zcgj.createTextArea();if(zcgv==null){return null;}
zcgv.focus();document.execCommand("Paste");var zato=zcgv.innerText;document.body.removeChild(zcgv);return zato;}
catch(zmk){return null;}};
