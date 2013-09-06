var zfmh="&aid=";function zfhp(zxs){var zfmi="";if(typeof(zxs)!="undefined"&&zxs!=""){zfmi+="p="+encodeURIComponent(zxs);}
else{zfmi+="p="+encodeURIComponent("1");}var zop=zgn+zfmh+zfga;var zrq=zuk(zop,zfmi,null,"POST");if(zrq.indexOf('<error')!=-1){var zne=zrq.indexOf("<errors>");zrq=zrq.substr(zne);var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else if(zfmj[0].getAttribute("type")==3){return new zro(zkc,"Need to create master password");}
else if(zfmj[0].getAttribute("type")==1){return new zro(1,"Wrong master password");}
else{return new zro(zkg,"Server error!");}}return new zro(zkg,"Unknown error");}
return new zro();};function zfgw(zra,zqy,zxs,zfmk){try{if(zqy.zqq()){var zatz=zfhp(zxs);if(!zatz[zcv]){return zatz;}
var zop=zgm+zfmh+zfga;var zfml="file_name="+encodeURIComponent(zqy.zqh()+zqy.zqp());zfml+="&rf_save_dir="+encodeURIComponent(zqy.zpk);var zfmm=zard["rf_cache_mpwd_until_logut_chk"];if(zqy.zpr()){var zfmn=zabj(zra,zqy.zqq()&&zxs);}
else if(zqy.zps()){}zfml+="&file_contents="+encodeURIComponent(zfmn);var zfmo=zuk(zop,zfml,null,"POST");if(zfmo.indexOf('<error')!=-1){var zne=zfmo.indexOf("<errors>");zfmo=zfmo.substr(zne);var zfmj=$(zfmo).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else if(zfmj[0].getAttribute("type")==1){return new zro(502,"Error while saving file");}
else if(zfmj[0].getAttribute("type")==7){return new zro(7,"file_name has wrong characters");}
else{return new zro(zkg,"Server error!");}}return new zro(zkg,"Unknown error");}
var zra=new zpc(zqy.m_Type,zqy.m_sName,zqy.znf,zqy.zpi,false,zqy.zpk);g_Settings.zdfo(zra);g_Settings.zdei(true);return new zro();}
else{if(zqy.zpq()||zqy.zps()){}else if(zqy.zpr()){var zop=zgm+zfmh+zfga;var zfml="file_name="+encodeURIComponent(zqy.zqh()+zqy.zqp());zfml+="&rf_save_dir="+encodeURIComponent(zqy.zpk);if(zqy.zpr()){var zfmn=zabj(zra,false);}
zfml+="&file_contents="+encodeURIComponent(zfmn);var zrq=zuk(zop,zfml,null,"POST");if(zrq.indexOf('<error')!=-1){var zne=zrq.indexOf("<errors>");zrq=zrq.substr(zne);var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else{return new zro(zkg,"Server error!");}}return new zro(zkg,"Unknown error");}
var zra=new zpc(zqy.m_Type,zqy.m_sName,zqy.znf,zqy.zpi,false,zqy.zpk);g_Settings.zdfo(zra);g_Settings.zdei(true);return new zro();}
}}catch(zmk){var ztl="ERROR in rf_SaveRawRfObjectOnServer "+zmk.toString();return new zro(zki,ztl);}
};function zfia(zyi,zri,zrj){try{var zrk=zyi.znd();var zdfn=zyi.znd(zri,zrj);var zop=zgr+zfmh+zfga+"&f="+encodeURIComponent(zrk)+"&t="+encodeURIComponent(zdfn);var zrq=zuk(zop,null,null,"GET");if(zrq.indexOf('<error')!=-1){var zne=zrq.indexOf("<errors>");zrq=zrq.substr(zne);var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==zke){return new zro(zke,zte("file_not_found"));}
else if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else if(zfmj[0].getAttribute("type")==zkf){return new zro(zkf,zte("folder_already_exists"));}
else{return new zro(zkg,"Server error!");}}return new zro(zkg,"Unknown error");}
return new zro();}catch(zmk){var ztl="ERROR in rf_RenameRfObjectOnServer "+zmk.toString();return new zro(zki,ztl);}
};function zfhy(zfhx){try{var zfml="dir="+encodeURIComponent(zfhx);var zop=zgs+zfmh+zfga;var zrq=zuk(zop,zfml,null,"POST");if(zrq.indexOf('<error')!=-1){var zne=zrq.indexOf("<errors>");zrq=zrq.substr(zne);var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==1){return new zro(zkg,"Cannot create folder!");}
else if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else if(zfmj[0].getAttribute("type")==2){return new zro(zkf,zte("folder_already_exists"));}
else{return new zro(zkg,"Server error!");}}return new zro(zkg,"Unknown error");}
return new zro();}catch(zmk){var ztl="ERROR in rf_CreateFolderOnServer "+zmk.toString();return new zro(zki,ztl);}
};function zfic(zyi){try{var zrk=zyi.znd();var zop=zgq+zfmh+zfga+"&f="+encodeURIComponent(zrk);var zrq=zuk(zop,null,null,"GET");if(zrq.indexOf('<error')!=-1){var zne=zrq.indexOf("<errors>");zrq=zrq.substr(zne);var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==3||zfmj[0].getAttribute("type")==zke){return new zro(zke,"File not found");}
else if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else{return new zro(zkg,"Server error!");}}return new zro(0,"Unknown error");}
return new zro();}catch(zmk){var ztl="ERROR in rf_DeleteRfObjectFromServer "+zmk.toString();return new zro(zki,ztl);}
};var zfmp=[];function zfhr(zato){try{var zoj=zato[zcr];var zfmq=zato[zcw];if(zfmq){zfmq=parseInt(zfmq);var zddo=zfmq&RfObjectType.RFTYPE_PASSCARD;var zddp=zfmq&RfObjectType.RFTYPE_IDENTITY;var zddq=zfmq&RfObjectType.RFTYPE_FOLDER;var zddr=zfmq&RfObjectType.RFTYPE_SAFENOTE;}
zfmp=[];var zfml="path="+encodeURIComponent(zgw)+"&filter="+encodeURIComponent(zoj);var zop=zgu+zfmh+zfga;var zfmo=zuk(zop,zfml,null,"POST");if(zfmo.indexOf('<error')!=-1){zuc("ERROR in Server Response in rf_searchForObjects function:\n"+zfmo);return null;}
var zne=zfmo.indexOf("<data>");zfmo=zfmo.substr(zne);var zfmr=$(zfmo).find("row");for(var zov=0;zov<zfmr.length;++zov){var zra=zfmr[zov];if(zra.getAttribute("file")!=null&&zra.getAttribute("file").toString()!=""){var zdcx=zra.getAttribute("file");var zdcy=new zpc();if(!zdcy.zrb(zdcx))continue;switch(zdcy.m_Type){case RfObjectType.RFTYPE_IDENTITY:if(zddp){zdcy.zpi=zra.getAttribute("protected");zfmp.push(zdcy);}
continue;case RfObjectType.RFTYPE_PASSCARD:zdcy.zpi=zra.getAttribute("protected");zfmp.push(zdcy);break;case RfObjectType.RFTYPE_SAFENOTE:continue;}
}else if(zra.getAttribute("folder")!=null&&zra.getAttribute("folder").toString()!=""){var zdcz=zra.getAttribute("folder");}
}return zfmp;}catch(zmk){var ztl="ERROR in rf_searchForObjects "+zmk.toString();return null;}
};function zfma(){try{var zop=zgg+zfmh+zfga;var zfmo=zuk(zop,null,null,"POST");if(!zfmo){var ztl="Cannot connect to RF Server. Check network connection. Response is null.";return new zro(zki,ztl);}
if(zfmo.indexOf('<error')!=-1){zfhu();return new zro(zkd);}
g_Settings.zdec(true);return new zro();}catch(zmk){var ztl="BG. *SERVER* ERROR in rf_checkLoginState "+zmk.toString();return new zro(zki,ztl);}
};function zfhu(){zffx=new znk();if(g_Settings){g_Settings.zdei();}
zarj="";zfmm="";zari="";zfkz('rf_logoff_occured',{}
);};function zfho(){try{var zcjr=zfma();if(zcjr[zcv]==false){return false;}
var zbat=g_Settings.zbau(zgw);if(!zbat){zbav(zgw);}
var zfms=g_Settings.zdec();return zfms;}catch(zmk){return false;}
};function zbav(zrd){try{var zfml="path="+encodeURIComponent(zrd)+"&filetypes="+encodeURIComponent("/;.RFP;.RFT;.rfn");var zop=zgh+zfmh+zfga;var zfmo=zuk(zop,zfml,null,"POST");if(!zfmo){var ztl="Cannot connect to Everywhere server. Check network connection.";return new zro(zki,ztl);}
if(zfmo.indexOf('<error')!=-1){zfhu();return new zro(zkd);}
if(zrd==""||zrd=="/"){g_Settings.zdec(true);}g_Settings.zdek(zfmo,zrd);return new zro();}
catch(zmk){var ztl="ERROR in rf_getOnlineData "+zmk.toString();return new zro(zki,ztl);}
};function zxq(zxr,zxs,zxt){return zfmt(zxr,zxs,zxt);}
;function zfmt(zxr,zxs,zxt){try{var zfmu=zard["rf_tie_session_chk"];if(zfmu==null||zfmu==undefined){zfmu=1;}
if(zfmu==false||zfmu=="false"){zfmu=0;}if(zfmu==true||zfmu=="true"){zfmu=1;}
var zfml="username="+encodeURIComponent(zxr)+"&password="+encodeURIComponent(zxs)+"&timeout="+parseInt(zxt)+"&tie_ip="+parseInt(zfmu);var zfmv="username="+encodeURIComponent(zxr)+"&password=****&timeout="+parseInt(zxt)+"&tie_ip="+parseInt(zfmu);var zfmo=zuk(zgf,zfml,null,"POST");if(zfmo==undefined||zfmo==null){var ztl="Connection error or server is offline";var zfmw=new zro(zki,ztl);zfmw[zdl]=zxt;zfkz('rf_login_result',{"res_obj":zfmw}
);return zfmw;}if(zfmo.indexOf('<error')!=-1){var zfmw=new zro(zrn,zte("You_have_entered_an_invalid_User_ID_and_or_Password"));zfmw[zdl]=zxt;zfkz('rf_login_result',{"res_obj":zfmw}
);return zfmw;}zarj=zard[zfgb];zari=zard[zfgc];try{var zne=zfmo.indexOf("<data>");zfmo=zfmo.substr(zne);var zfmx=$(zfmo).find("aid");if(zfmx&&zfmx[0]){zfga=zard["rf_aidkey"]=zfmx[0].innerText;}
zavr();}catch(zmk){}g_Settings.zdei();zbav(zgw);var zfmw=new zro();zfmw[zdl]=zxt;zard["rf_timeout_select"]=zxt;zfkz('rf_login_result',{"res_obj":zfmw}
);zflx();setTimeout(function(){zfkl(null);},2000);return zfmw;}
catch(zmk){var ztl="ERROR in rf_checkUserCreds "+zmk.toString();var zfmw=new zro(zki,ztl);zfmw[zdl]=zxt;zfkz('rf_login_result',{"res_obj":zfmw}
);return zfmw;}};function zxx(){return zfmy();};function zfmy(){try{var zop=zgi+zfmh+zfga;var zfmo=zuk(zop,null,null,"GET");var zne=zfmo.indexOf("<data>");zfmo=zfmo.substr(zne);if(zfmo.indexOf("error")!=-1){return false;}
zfhu();zflx(false);return true;}catch(zmk){}};function zdez(zbkn){try{var zato="";if(zbkn.password==""||zbkn.password=="undefined"||zbkn.password==null){zato=zfmz(zbkn.zdex,null,null,zbkn[zaz]);}
else{zato=zfmz(zbkn.zdex,zbkn.password,zbkn[zbf],zbkn[zaz]);}
if(!zato){return-1;}var zblk=zato.indexOf("<data>");if(zblk==-1){zblk=zato.indexOf("<errors>");}
zato=zato.substr(zblk);var zfna=false;var zfmj=$(zato).find("error");if(zfmj!=null&&zfmj[0]!=null){zfna=true;}
if(zfna){if(zfmj[0].getAttribute("type")==1){return 1;}
else if(zfmj[0].getAttribute("type")==2){return 2;}
else if(zfmj[0].getAttribute("type")==3){return 3;}
else if(zfmj[0].getAttribute("type")==4){return zkk;}
else if(zfmj[0].getAttribute("type")==5){return zkj;}
else if(zfmj[0].getAttribute("type")==zkd){zfhu();return zkd;}
else if(zfmj[0].getAttribute("type")==8){return zkb;}
else{alert("BG.*SERVER* Unknown response. getRfObjectFieldsFromServer. err.type="+zfmj[0].getAttribute("type"));return-1;}
}zbkn.zdew=zato;return 0;}catch(zmk){return-1;}};function zfmz(zyi,zxs,zfif,zaut){try{var zph=(zyi.zpk==zgw)?zyi.zpk:zyi.zpk+zgw;var zrk="";if(zyi.m_Type==RfObjectType.RFTYPE_IDENTITY){zrk=zyi.znf==RfObjectMode.RF_OBJ_MODE_DEF?zph+zyi.m_sName+".rft":zph+zyi.m_sName+".rfc";}
else if(zyi.m_Type==RfObjectType.RFTYPE_PASSCARD){zrk=zyi.znf==RfObjectMode.RF_OBJ_MODE_DEF?zph+zyi.m_sName+".rfp":zph+zyi.m_sName+".rfb";}
else if(zyi.m_Type==RfObjectType.RFTYPE_SAFENOTE){zrk=zph+zyi.m_sName+".rfn";}
var zfml="f="+encodeURIComponent(zrk);if(zfif==undefined||zfif==null){zfif=true;}
if(zxs!=null&&zfif!=null){if(zfif==false||zfif=='false'){zfml+="&p="+encodeURIComponent(zxs);}
else{zfml+="&p="+encodeURIComponent(zxs)+"&rf_savepasscheck=1";}
}zfml+="&detailview=1";if(zaut=="fill"){zfml+="&action=fill";}
var zop=zgj+zfmh+zfga;return zuk(zop,zfml,null,"POST");}
catch(zmk){}};function zfhv(zfnb){try{var zfml="p="+encodeURIComponent(zfnb)+"&rf_savepasscheck=1";var zop=zgo+zfmh+zfga;var zrq=zuk(zop,zfml,null,"POST");if(zrq.indexOf('<error')!=-1){var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else if(zfmj[0].getAttribute("type")==-13){return new zro(1001,"Access denied");}
else if(zfmj[0].getAttribute("type")==zkg){return new zro(zkg,"Enexpected error.");}
else{return new zro(zfmj[0].getAttribute("type"),"server error.");}
}return new zro(0,"Unknown error");}return new zro();}
catch(zmk){return false;}};function zfgz(zfnb){try{var zfml="";if(arguments.length==1){if(zfnb!=undefined){zfml+="p="+encodeURIComponent(zfnb);}
}var zop=zgn+zfmh+zfga;var zrq=zuk(zop,zfml,null,"POST");if(zrq.indexOf('<error')!=-1){var zne=zrq.indexOf("<errors>");zrq=zrq.substr(zne);var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==3){return new zro(zkc,"Need to create master password");}
else if(zfmj[0].getAttribute("type")==1){return new zro(1,"Wrong master password");}
else if(zfmj[0].getAttribute("type")==2){return new zro(1000,"Path not found");}
else if(zfmj[0].getAttribute("type")==zkd){zfhu();return new zro(zkd);}
else{return new zro(zkg,"Server error!");}}return new zro(0,"Unknown error");}
if(arguments.length==1){zffz=zfnb;}return new zro();}
catch(zmk){var ztl="ERROR in rf_SavePasscardCheckMP "+zmk.toString();return new zro(zki,ztl);}
};function zfha(zaus,zyi,zfnc,zfnd,zfnb){try{if(zfnd=="Home"){zfnd=zgw;}
var zacg=zfne(zaus,true,zfnc,zfnd,zfnb,zyi);return zacg;}
catch(zmk){}};function zfhb(zaus,zyi,zfnc,zfnd,zfnf,zfgx){try{if(zfnd=="Home"){zfnd=zgw;}
if(zfnc==""){return new zro(0,"Passcard Name cannot be empty.");}
if(zyi.m_Type==RfObjectType.RFTYPE_PASSCARD&&zyi.znf!=RfObjectMode.RF_OBJ_MODE_BOOKMARK){var zfhd=new zdgm();zfhd.zdgb.length=0;g_Settings.zdfy(zaus,zfhd);if(!zfhd.zdgb.length){}
var zfng=false;var zfnh=zfnd==zgw?zfnc:zrf(zfnd,1,zfnd.length)+"/"+zfnc;zfnh=zfnh.toLowerCase();if(zfgx==undefined||zfgx==false||zfgx==null){for(var zoy=0;zoy<zfhd.zdgb.length;++zoy){var zfni=zfhd.zdgb[zoy];var zdgi=zfni.zavg;if(zdgi.m_sName.toString().toLowerCase()==zfnh){zfng=true;break;}
}if(zfng){var zfnj=zte("savebar_savesuccess_msg1")+" \'"+zfnc+"\' "+zte("savebar_rewrite_msg1")+"\n"+zte("savebar_rewrite_msg2");var zacg=window.confirm(zfnj);if(!zacg){return new zro(0,"Passcard with this Name already exists.");}
}}}return zfne(zaus,zfnf,zfnc,zfnd,"",zyi);}catch(zmk){}
};function zfne(zaus,zfnf,zfnk,zfnd,zfnb,zfnl){try{var zfmm=zard["rf_cache_mpwd_until_logut_chk"];var zfml="passcard_name="+encodeURIComponent(zfnk)+"&rf_save_dir="+encodeURIComponent(zfnd);if(zfnf==1||zfnf=="true"||zfnf=="1"){zfml+="&set_mp=1";if(zfmm){zfml+="&rf_savepasscheck=1";}
if(zfnb!=""){zfml+="&p="+encodeURIComponent(zfnb);}
}if(zfnl.zbid!=undefined){zfml+="&rf_note="+encodeURIComponent(zfnl.zbid);}
if(zfnl.m_Type==RfObjectType.RFTYPE_PASSCARD){zfml+="&rf_referrer_url="+encodeURIComponent(zaus);if(zfnl.znf==RfObjectMode.RF_OBJ_MODE_BOOKMARK){zfml+="&bookmark_save=1&passcard_fields=1";}
else{zfml+="&passcard_fields=";var zfnm=zfnn(zaus,zfnl);zfml+=zfnm;}
}else if(zfnl.m_Type==RfObjectType.RFTYPE_SAFENOTE){zfml+="&rf_referrer_url="+encodeURIComponent("http://www.roboform.com");zfml+="&safenote_save=1&passcard_fields=";var zfno=encodeURIComponent(zfnl.zbib);zfml+=zfno;}
zfml+="&new_compile=1";var zop=zgl+zfmh+zfga;var zrq=zuk(zop,zfml,null,"POST");if(zrq.indexOf('<error')!=-1){if(zfnp(zrq)){return new zro(zkd);}
var zfmj=$(zrq).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==3){var zfnq=zfgz(zfnb);if(zfnq[zcv]==false){return zfnq;}
return new zro(zkc,"Need to create master password");}
}return new zro(0,"Unknown error in server response. Cannot save object");}
if(zfnl.m_Type==RfObjectType.RFTYPE_PASSCARD&&zfnl.znf!=RfObjectMode.RF_OBJ_MODE_BOOKMARK){g_Settings.zdgk(zaus);}
var zra=new zpc(zfnl.m_Type,zfnk,zfnl.znf,zfnf,false,zfnd);g_Settings.zdfo(zra);g_Settings.zdei(true);var zatz=new zro();zatz[zbw]=zte("savebar_savesuccess_msg1")+" \'"+zfnk+"\' "+zte("savebar_savesuccess_msg2");return zatz;}
catch(zmk){}};function zfnn(zaus,zyi){try{var zfnm=encodeURIComponent(zaus);var zdaj=zyi.m_lFields;for(var zov=0;zov<zdaj.length;zov++){var zvg=zdaj[zov];if(zvg.m_sName.toLowerCase()=="note$"){continue;}
zvg.m_sId="";zvg.m_sCaption="";if(isNaN(zvg.m_nOrderIndex)){zvg.m_nOrderIndex=0;}
zvg.m_nOrderIndex=parseInt(zvg.m_nOrderIndex);zvg.m_bDefaultValue=zvg.m_bDefaultValue==true?1:0;zvg.m_bDefaultValue=parseInt(zvg.m_bDefaultValue);zvg.m_field_type=parseInt(zvg.m_field_type);if(zvg.m_field_type==1&&zvg.m_sValue==""){zvg.m_sValue=" ";}
zfnm+="&"+encodeURIComponent(zvg.m_sName)+"###"+encodeURIComponent(zvg.m_field_type)+"###"+encodeURIComponent(zvg.m_sValue)+"###"+encodeURIComponent(zvg.m_nOrderIndex)+"###"+encodeURIComponent(zvg.m_sId)+"###"+encodeURIComponent(zvg.m_sCaption)+"###"+encodeURIComponent(zvg.m_bDefaultValue);}
zfnm=encodeURIComponent(encodeURIComponent(zfnm));return zfnm;}
catch(zmk){}};function zfhi(zrd,zfnr){try{var zfml="path="+encodeURIComponent(zrd)+"&filetypes="+encodeURIComponent("/")+"&recursive=1";var zop=zgh+zfmh+zfga;var zfmo=zuk(zop,zfml,null,"POST");if(zfmo.indexOf('<error')!=-1){if(zfnp(zfmo)){return new zro(zkd);}
return false;}var zne=zfmo.indexOf("<data>");zfmo=zfmo.substr(zne);var zfmr=$(zfmo).find("row");for(var zov=0;zov<zfmr.length;++zov){var zfns="";if(zrd==zgw){zfns="/"+zfmr[zov].getAttribute("folder");}
else{zfns=zrd+"/"+zfmr[zov].getAttribute("folder");}
zfnr.push(zfns);}return true;}catch(zmk){}};function zdge(zdgl,zfbe){try{var zfml="url="+encodeURIComponent(zdgl);var zop=zgk+zfmh+zfga;var zfmo=zuk(zop,zfml,null,"POST");if(zfmo.indexOf("<error")!=-1){if(zfnp(zfmo)){return new zro(zkd);}
return;}var zne=zfmo.indexOf("<data>");zfmo=zfmo.substr(zne);var zfmr=$(zfmo).find("row");for(var zov=0;zov<zfmr.length;++zov){var zra=zfmr[zov];var zdgf=zra.getAttribute("file");var zrh=zdgf.lastIndexOf('.');if(zrh<0){continue;}
var zpw=zrf(zdgf,zrh,zdgf.length);if(zpw!=""&&zpw.toLowerCase()==".rfp"){zfbe.push(zfmr[zov]);}
}}catch(zmk){}};function zfnp(zfmo){try{var zne=zfmo.indexOf("<errors>");if(zne!=-1){zfmo=zfmo.substr(zne);var zfmj=$(zfmo).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==zkd){zfhu();return true;}
}}return false;}catch(zmk){}};function zfhq(zbgd,zbge,zbgf,zpy,zbgg){try{var zfml="username="+encodeURIComponent(zbgd)+"&password="+encodeURIComponent(zbge)+"&password_retype="+encodeURIComponent(zbgf)+"&name="+encodeURIComponent(zpy)+"&email="+encodeURIComponent(zbgg);var zop=zgt+zfmh+zfga;var zfmo=zuk(zop,zfml,null,"POST");var zfnt;$(zfmo).find('error').each(function(){zfnt=$(this).text();}
);var zfmj=$(zfmo).find("error");if(zfmj!=null&&zfmj[0]!=null){if(zfmj[0].getAttribute("type")==302||zfmj[0].getAttribute("type")==304||zfmj[0].getAttribute("type")==306||zfmj[0].getAttribute("type")==311||zfmj[0].getAttribute("type")==312||zfmj[0].getAttribute("type")==309||zfmj[0].getAttribute("type")==313){var zfmw=new zro(zfmj[0].getAttribute("type"),zfmj.text());if(zdq){safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('rf_signup_result',{zfmw:zfmw}
);}else if(zdr){opera.extension.broadcastMessage({"msg":'rf_signup_result',zfjd:{zfmw:zfmw}
});}return zfmw;}else{var zfmw=new zro(zrn,zfmj.text());if(zdq){safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('rf_signup_result',{zfmw:zfmw}
);}else if(zdr){opera.extension.broadcastMessage({"msg":'rf_signup_result',zfjd:{zfmw:zfmw}
});}return zfmw;}}return zfmt(zbgd,zbge,0);}catch(zmk){var ztl="ERROR in rf_checkSignup "+zmk.toString();return new zro(zki,ztl);}
};
