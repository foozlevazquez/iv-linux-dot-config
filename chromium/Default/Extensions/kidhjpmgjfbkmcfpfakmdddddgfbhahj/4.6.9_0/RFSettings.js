if(zdt){}// Copyright (c) Mozilla Foundation http://www.mozilla.org/
if(!Array.prototype.map){Array.prototype.map=function(zbwp){var ztb=this.length>>>0;if(typeof zbwp!="function"){throw new TypeError();}
var zacg=new Array(ztb);var zbwq=arguments[1];for(var zov=0;zov<ztb;zov++){if(zov in this){zacg[zov]=zbwp.call(zbwq,this[zov],zov,this);}
}return zacg;};}if(typeof(zmd)!="undefined"){zuc=zmd.zuc;zpc=zmd.zpc;RfObjectMode=zmd.zyv;RfObjectType=zmd.zyw;}
function zcxo(){this.zcxp=10;this.zcxq=[];this.zcxr(this.zcxq);}
;zcxo.prototype.zcxr=function(arr){try{var zcxs=zckd();if(zcxs==null||zcxs==undefined){return;}
this.zcxt(zcxs);zcxs.transaction(function(zcxu){zcxu.executeSql("SELECT * FROM RfRecentlyUsed",[],function(zmj,zcxv){var zcxw=0;for(var zov=0;zov<zcxv.rows.length;zov++){var zpy=zcxv.rows.item(zov)["pcardname"];var zph=zcxv.rows.item(zov)["pcardpath"];var zcxx=zcxv.rows.item(zov)["isprotected"];if((zcxx==0.0)||(zcxx==0)||(zcxx=="0.0")||(zcxx=='false'))zcxx=false;if((zcxx==1.0)||(zcxx==1)||(zcxx=="1.0")||(zcxx=='true'))zcxx=true;var zra=new zpc(RfObjectType.RFTYPE_PASSCARD,zpy,RfObjectMode.RF_OBJ_MODE_DEF,zcxx,false,zph);zcxw++;arr.push(zra);}
},function(zcxy,zmj){console.log(zmj)})})}catch(zmk){}
};zcxo.prototype.zcxz=function(){this.zcxq.length=0;this.zcya();}
;zcxo.prototype.zcyb=function(){return this.zcxq;}
;zcxo.prototype.zcyc=function(zato){try{var zbkh=-1;for(var zne=0;zne<this.zcxq.length;zne++){var zra=this.zcxq[zne];if((zra.m_sName==zato.m_sName)&&(zra.zpk==zato.zpk)){zbkh=zne;break;}
}if(zbkh==-1){return false;}this.zcxq.splice(zbkh,1);this.zcya();return true;}
catch(zmk){}};zcxo.prototype.zcyd=function(zato){try{var zbkh=-1;for(var zne=0;zne<this.zcxq.length;zne++){var zra=this.zcxq[zne];if((zra.m_sName==zato.m_sName)&&(zra.zpk==zato.zpk)){zbkh=zne;break;}
}if(zbkh!=-1){this.zcxq.splice(zbkh,1);}this.zcxq.unshift(zato);if(this.zcxq.length>this.zcxp){this.zcxq.pop();}
this.zcya();}catch(zmk){}};zcxo.prototype.zcya=function(){this.zcye(this.zcxq);}
;zcxo.prototype.zcxt=function(zcxs){if(zcxs){zcxs.transaction(function(zsb){zsb.executeSql("CREATE TABLE IF NOT EXISTS RfRecentlyUsed (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, pcardname varchar(2000), pcardpath varchar(2000), isprotected varchar(10))",[])}
);}};zcxo.prototype.zcye=function(arr){try{var zcxs=zckd();this.zcxt(zcxs);if(!zcxs){return;}
zcxs.transaction(function(zsb){zsb.executeSql("DELETE FROM RfRecentlyUsed");for(var zaff=0;zaff<arr.length;zaff++){var zra=arr[zaff];zsb.executeSql("REPLACE INTO RfRecentlyUsed (pcardname, pcardpath,isprotected) VALUES (?, ?, ?)",[zra.m_sName,zra.zpk,zra.zpi],function(zcag,zcxy){}
,function(zcag,zcxy){console.log(zcxy)})}});}catch(zmk){}
};function zcyf(){this.zcyg=false;this.zcyh=false;this.zcyi="";this.zcyj=null;this.zcyk=null;}
;zcyf.prototype.zcyl=function(){return this.zcyg;}
;zcyf.prototype.zcym=function(zbbd){this.zcyg=zbbd;}
;zcyf.prototype.zcyn=function(){return this.zcyh;}
;zcyf.prototype.zcyo=function(zcyp){this.zcyh=zcyp;}
;zcyf.prototype.zcyq=function(){return this.zcyi;}
;zcyf.prototype.zcyr=function(zop){this.zcyi=zop;}
;zcyf.prototype.zcys=function(){return this.zcyj;}
;zcyf.prototype.zcyt=function(zra){this.zcyj=zra.clone();}
;zcyf.prototype.zcyu=function(){this.zcyj=null;};zcyf.prototype.zcyv=function(zra){if(zra.zavg.m_Type==RfObjectType.RFTYPE_PASSCARD){this.zcyk=zra.clone();}
};zcyf.prototype.zcyw=function(){this.zcyk=null;};zcyf.prototype.zcyx=function(){return this.zcyk;}
;if(typeof(zmd)!="undefined"){zmd.zcyf=zcyf;}function zbhz(zcyy){this.zavg=new zpc();this.zavg.m_Type=RfObjectType.RFTYPE_SAFENOTE;this.zbib="";this.zbmq="";this.zcyz=false;this.zcza=Math.floor(Math.random()*10001);if(arguments.length==1){this.zbmq=zcyy.zbmq;this.zcyz=zcyy.zcyz;this.zbib=zcyy.zbib;this.zavg=new zpc(zcyy.zavg);}
};zbhz.prototype.zczb=function(){try{this.zbib="";this.zavg=new zpc();this.zavg.m_Type=RfObjectType.RFTYPE_SAFENOTE;this.zbmq="";this.zcyz=false;}
catch(ztl){return;}};zbhz.prototype.zczc=function(zczd){this.zavg=zczd;}
;zbhz.prototype.zcze=function(){return this.zavg;}
;zbhz.prototype.zczf=function(zczg){this.zbib=zczg;}
;zbhz.prototype.zczh=function(){return this.zbib;}
;zbhz.prototype.zczi=function(zato){this.zbmq=zato;}
;zbhz.prototype.zczj=function(){return this.zbmq;}
;zbhz.prototype.zczk=function(zuz){try{if(zdr||zdp||zdu){this.zcyz=true;var zvg=$(zuz).find("field");if(!zvg){return false;}
var zuq=zvg[0];if(zuq){this.zczf(zuq.innerText);return true;}
}else if(zdt){this.zcyz=true;return true;}return false;}
catch(ztl){return false;}};zbhz.prototype.zczl=function(zczm){for(var zov=0;zov<zczm.length;zov++){var zcku=zczm[zov];if(zcku.m_sName==':txt'){this.zczf(zcku.m_sValue);}
}};zbhz.prototype.clone=function(){return(new zbhz()).assign(this);}
;zbhz.prototype.assign=function(zma){this.zbib=zma.zbib;this.zavg.assign(zma.zavg);return this;}
;zbhz.prototype.toString=function(){return"<< [SAFENOTE Object ID:"+this.zcza+"] NOTE_TEXT='"+this.zbib+"'>>";}
;zbhz.prototype.zczn=function(){return this.zcyz;}
;function zczo(zpy,zvv,zvu){this.m_sName=zpy;this.m_sValue=zvv;this.m_sMatches=zvu;}
;function zczp(zpy,zczq,zczr){this.m_sName=zpy;this.zbyq=zczq;this.m_lFields=[];this.zczs=zczr;}
;zczp.prototype.zczt=function(zbiw){this.m_lFields.push(zbiw);}
;function zczu(){this.m_lGroups=[];this.zbyo="";this.zcza=Math.floor(Math.random()*10001);}
;zczu.prototype.zczv=function(zbyp){this.m_lGroups.push(zbyp);}
;zczu.prototype.toString=function(){return"<### [CIdentity_Proxy]  ID:"+this.zcza+" Country:"+this.zbyo+" ###>";}
;function zbjy(zpy,zawl,zbbf,znh,zvv,zczw,zbja){this.m_sName=zpy||"";this.m_sCaption=zawl||"";this.m_sId=zbbf||"";this.m_sValue=zvv||"";this.m_nOrderIndex=0;this.m_field_type=zczw||RfFieldType.RfField_None;this.zbjz=false;this.m_bDefaultValue=zbja||false;if(isNaN(this.zbja)){this.zbja=true;}
};zbjy.prototype.zczx=function(zma){this.m_sName=zma.m_sName;this.m_sCaption=zma.m_sCaption;this.m_sId=zma.m_sId;this.m_sValue=zma.m_sValue;this.m_nOrderIndex=zma.m_nOrderIndex;this.m_field_type=zma.m_field_type;this.zbjz=zma.zbjz;this.m_bDefaultValue=zma.m_bDefaultValue;return this;}
;zbjy.prototype.clone=function(){return(new zbjy()).zczx(this);}
;zbjy.prototype.equals=function(zma){if(!zma)return false;return this.m_sName==zma.m_sName&&this.m_sCaption==zma.m_sCaption&&this.m_sId==zma.m_sId&&this.m_sValue==zma.m_sValue&&this.m_nOrderIndex==zma.m_nOrderIndex&&this.m_field_type==zma.m_field_type&&this.zbjz==zma.zbjz&&this.m_bDefaultValue==zma.m_bDefaultValue;}
;zbjy.prototype.zqh=function(){return this.m_sName;}
;zbjy.prototype.zczy=function(){return this.m_sValue;}
;zbjy.prototype.toString=function(){var zczz=this.m_field_type;if(this.m_field_type==RfFieldType.RfFieldText){zczz="TEXT";}
else if(this.m_field_type==RfFieldType.RfFieldPassword){zczz="PASSWORD";}
else if(this.m_field_type==RfFieldType.RfFieldCheckbox){zczz="CHECKBOX";}
else if(this.m_field_type==RfFieldType.RfFieldTextArea){zczz="TEXT_AREA";}
else if(this.m_field_type==RfFieldType.RfFieldSelect){zczz="SELECT";}
else if(this.m_field_type==RfFieldType.RfFieldRadioCheck){zczz="RADIO";}
return"<<CField>> NAME='"+this.m_sName+"'  CAPTION='"+this.m_sCaption+"'  VALUE='"+this.m_sValue+"' TYPE='"+zczz+"'  DEF_VALUE='"+this.m_bDefaultValue+"'  ORDER_IND:"+this.m_nOrderIndex+" ID='"+this.m_sId+"'";}
;if(typeof(zmd)!="undefined"){zmd.zbjy=zbjy;}function zbic(zcyy){this.m_sMatchURL="";this.m_sGotoURL="";this.m_lFields=[];this.zcyz=0;this.zdaa=0;this.zbid="";this.zdab=new Number();this.m_nNonemptyTextFields=0;this.m_nChangedTextFields=0;this.m_nPasswordFields=0;this.m_nNonemptyPasswordFields=0;this.zdac=0;this.zavg=new zpc();this.zavg.m_Type=RfObjectType.RFTYPE_PASSCARD;this.zbmq="";this.icon="";this.zdad=0;this.zdae=0;this.zcza=Math.floor(Math.random()*10001);if(arguments.length==1){this.m_sMatchURL=zcyy.m_sMatchURL;this.m_sGotoURL=zcyy.m_sGotoURL;this.zcyz=zcyy.zcyz;this.zdaa=zcyy.zdaa;this.zbid=zcyy.zbid;this.zdab=zcyy.zdab;this.m_nNonemptyTextFields=zcyy.m_nNonemptyTextFields;this.m_nChangedTextFields=zcyy.m_nChangedTextFields;this.m_nPasswordFields=zcyy.m_nPasswordFields;this.m_nNonemptyPasswordFields=zcyy.m_nNonemptyPasswordFields;this.zdac=zcyy.zdac;this.zbmq=zcyy.zbmq;this.zavg=new zpc(zcyy.zavg);this.m_lFields=zcyy.m_lFields.map(function(zra){var zdaf=new zbjy();zdaf.zczx(zra);return zdaf;}
);;}};zbic.prototype.zdag=function(text){this.zbid=text;}
;zbic.prototype.zdah=function(){return this.zbid;}
;zbic.prototype.toString=function(){var zczz=this.zavg.znf==RfObjectMode.RF_OBJ_MODE_DEF?"PASSCARD":"BOOKMARK";return"<<CPasscard>> "+zczz+" URL="+this.m_sMatchURL+" Fields="+this.m_lFields.length+" NOTE:"+this.zbid+"\nID:"+this.zcza;}
;zbic.prototype.zczk=function(zuz){try{var zdai=$(zuz).find("row");this.m_sMatchURL=this.m_sGotoURL=zdai[0].getAttribute("GotoURL");var zdaj=$(zuz).find("field");for(var zov=0;zov<zdaj.length;++zov){var zvg=zdaj[zov];var zdak=zvg.getAttribute("name");var zdal=0;if(zdak!=null){var zblk=zdak.indexOf("[");if(zblk!=-1){var zdam=zdak.substring(0,zblk);zdal=parseInt(zdak.substr(zblk+1,1));if(!isNaN(zdal)){zdak=zdam;}
else{zdal=0;}}this.zbjd(zdak,"","",zdal,zvg.textContent,zvg.getAttribute("type"),false);}
}if(zdr||zdp||zdq||zdu){var zdan=$(zuz).find("note");if(zdan){var zuq=zdan[0];if(zuq){this.zdag(zuq.innerText);}
}}else if(zdao){if(zuz.zbcs.zdan){this.zdag(zuz.zbcs.zdan.toString());}
}this.zcyz=true;return true;}catch(zmk){return false;}
};zbic.prototype.zczn=function(){return this.zcyz;}
;zbic.prototype.zbjd=function(zpy,zawl,zbbf,zbiy,zvv,zczw,zbja){try{var znh=zbiy||this.zdap(zpy);var zvg=new zbjy();zvg.m_sName=zpy;zvg.m_sCaption=zawl;zvg.m_sId=zbbf;zvg.m_nOrderIndex=parseInt(znh);zvg.m_sValue=zvv;zvg.m_field_type=zczw;zvg.m_bDefaultValue=zbja==true?1:0;this.m_lFields.push(zvg);}
catch(zmk){}};zbic.prototype.zdap=function(zpy){try{var zbiy=0;for(var zuq in this.zdab){if(zuq.toLowerCase()==zpy.toLowerCase()){var zblk=this.zdab[zuq];zbiy=parseInt(zblk)+1;break;}
}this.zdab[zpy]=zbiy;return zbiy;}catch(zmk){return 0;}
};zbic.prototype.zczb=function(zdaq){try{if(zdaq==null){zdaq=1;}
if(zdaq>=1){this.m_sMatchURL="";this.m_sGotoURL="";this.zdaa=false;this.zcyz=false;this.zavg.zqg();}
if(zdaq>=0){this.m_lFields.length=0;this.m_nNonemptyTextFields=0;this.m_nChangedTextFields=0;this.m_nPasswordFields=0;this.m_nNonemptyPasswordFields=0;this.zdac=false;this.icon="";this.zbid="";}
}catch(zmk){return;}};zbic.prototype.equals=function(zma){for(var zov=0;zov<this.zdar();zov++){var zdas=this.zdat(zov);var zdau=zdas.zqh();var zdav=zma.zdat(zdau);if(!zdas.equals(zdav)){return false;}
}return this.m_sMatchURL==zma.m_sMatchURL&&this.m_sGotoURL==zma.m_sGotoURL&&this.zdah()==zma.zdah();}
;zbic.prototype.zdat=function(zma){if(typeof zma=="number"){return this.zacf()[zma]||null;}
else{for(var zov=0;zov<this.zdar();zov++){if(this.zdat(zov).zqh()==zma){return this.zdat(zov);}
}return null;}};zbic.prototype.zdar=function(){return this.zacf().length;}
;zbic.prototype.zdaw=function(zbeb){this.icon=zbeb;}
;zbic.prototype.zdax=function(){return this.icon;}
;zbic.prototype.zczl=function(zdaj){this.m_lFields=zdaj;}
;zbic.prototype.zacf=function(){return this.m_lFields;}
;zbic.prototype.zday=function(zpy,zvv,zczw,zbja){this.zbjd(zpy,"","","",zvv,zczw,zbja);}
;zbic.prototype.zdaz=function(zdba){try{zdba.zdbb=false;zdba.zdbc=false;for(var zov=0;zov<this.m_lFields.length;zov++){var zdbd=this.m_lFields[zov];if(zdbd.m_field_type==RfFieldType.RfFieldPassword){zdba.zdbc=true;zdba.zdbe=zdbd.m_sValue;for(var zoy=zov;zoy>=0;zoy--){var zdbf=this.m_lFields[zoy];if((zdbf.m_field_type==RfFieldType.RfFieldText)||(zdbf.m_field_type==RfFieldType.RfField_None)||(zdbf.m_field_type==RfFieldType.RfFieldTextArea)||(zdbf.m_field_type==RfFieldType.RfFieldSelect)){zdba.zdbb=true;zdba.zdbg=zdbf.m_sValue;break;}
}return true;}}return false;}catch(zmk){return false;}
};zbic.prototype.zdbh=function(zdba,zbiy,zdbi){try{for(var zov=0;zov<this.m_lFields.length;zov++){if((zdba.zpy!="")&&(zdba.zpy!=zhp)){if(this.m_lFields[zov].m_sName.toLowerCase()==zdba.zpy.toLowerCase()){if(this.m_lFields[zov].m_nOrderIndex==zbiy){zdba.zvv=this.m_lFields[zov].m_sValue;this.m_lFields[zov].zbjz=true;return true;}
}}}return false;}catch(zmk){return false;}};zbic.prototype.zdbj=function(){try{for(var zov=0;zov<this.m_lFields.length;zov++){var zdbd=this.m_lFields[zov];if(zdbd.m_sName.toLowerCase()==zho.toLowerCase()||zdbd.m_sName.toLowerCase()==zhn.toLowerCase()){return true;}
}return false;}catch(zmk){return false;}};zbic.prototype.zdbk=function(zra){try{for(var zov=0;zov<this.m_lFields.length;zov++){var zdbd=this.m_lFields[zov];if(zra.zpy!=""&&zdbd.m_sName.toLowerCase()==zra.zpy.toLowerCase()&&zra.zpy!=zhp||zdbd.m_field_type==zra.zdbi){if(zdbd.m_nOrderIndex==zra.zbiy){zra.zvv=zdbd.m_sValue;return true;}
}}return false;}catch(zmk){return false;}};zbic.prototype.zdbl=function(){try{for(var zov=0;zov<this.m_lFields.length;zov++){var zdbd=this.m_lFields[zov];if(zdbd.m_sValue==zhr){return true;}
}return false;}catch(zmk){return false;}};zbic.prototype.zdbm=function(){try{for(var zov=0;zov<this.m_lFields.length;zov++){var zdbd=this.m_lFields[zov];if(zdbd.m_sName==zhu){return true;}
}return false;}catch(zmk){return false;}};zbic.prototype.zbzx=function(zra){try{var zdbn=new Object();zdbn.zpy=zhs;zdbn.zbiy=0;zdbn.zdbi=RfFieldType.RfField_None;zdbn.zvv="";if(!this.zdbk(zdbn)){zra.zbzc=new zbzd();return false;}
zra.zbzc=new zbzd(zdbn.zvv);return true;}catch(zmk){return false;}
};zbic.prototype.zdbo=function(zadw,zdbp){try{zdbp=false;for(var zov=0;zov<this.m_lFields.length;zov++){var zvg=this.m_lFields[zov];if(zvg.m_field_type==RfFieldType.RfFieldPassword&&zvg.m_sValue!=""&&zvg.m_sValue!=zhq&&zvg.m_sValue!=zhr){if(!zdbp&&!zvg.m_bDefaultValue){zdbp=true;}
if(zadw!=""&&zvg.m_sValue==zadw){return true;}zadw=zvg.m_sValue;}
}return false;}catch(zmk){return false;}};zbic.prototype.zdbq=function(zdbr){try{var zdbs=0;for(var zov=0;zov<this.m_lFields.length;zov++){var zvg=this.m_lFields[zov];if((zvg.m_field_type==RfFieldType.RfFieldPassword||zvg.m_sName==zho)){if(!zdbr){zdbs++;}
else if(!zvg.m_sValue==""&&zvg.m_sValue!=zhq&&zvg.m_sValue!=zhr){zdbs++;}
}}return zdbs;}catch(zmk){return 0;}};zbic.prototype.zdbt=function(zdbu){var zvv=zdbu.zdbv+":"+zdbu.zdbw+":"+zdbu.zdbx+":"+zdbu.zdby+":"+zdbu.zdbz;this.zday(zhs,zvv,RfFieldType.RfField_None,false);return true;}
;zbic.prototype.zdca=function(){return this.zcyz&&this.zdaa;}
;zbic.prototype.zdcb=function(){this.zcyz=true;this.zdaa=true;}
;zbic.prototype.zczi=function(zato){this.zbmq=zato;}
;zbic.prototype.zczj=function(){return this.zbmq;}
;zbic.prototype.zcze=function(){return this.zavg;}
;zbic.prototype.zczc=function(zdcc,zdcd){this.zavg=zdcc;}
;zbic.prototype.clone=function(){return(new zbic()).assign(this);}
;zbic.prototype.assign=function(zma){this.m_sMatchURL=zma.m_sMatchURL;this.m_sGotoURL=zma.m_sGotoURL;this.m_lFields=zma.m_lFields.map(function(zmb){return zmb.clone()}
);this.zdab=zma.zdab;this.m_nNonemptyTextFields=zma.m_nNonemptyTextFields;this.m_nChangedTextFields=zma.m_nChangedTextFields;this.m_nPasswordFields=zma.m_nPasswordFields;this.m_nNonemptyPasswordFields=zma.m_nNonemptyPasswordFields;this.zdac=zma.zdac;this.zbid=zma.zbid;this.icon=zma.icon;this.zavg.assign(zma.zavg);this.zcyz=zma.zcyz;this.zdaa=zma.zdaa;this.zcza=Math.floor(Math.random()*10001);this.zbmq=zma.zbmq;return this;}
;function zdce(){this.zdcf=new zmm();this.zdcg=new znk();return;}
;zdce.prototype.zdch=function(){try{this.zdcf.length=0;this.zdcg.length=0;this.zdcf.zmx();this.zdcg=new znk();}
catch(zmk){return;}};zdce.prototype.zdci=function(zato,zdcj,zdck,zdcl,zrd){try{this.zdcm(zato,zdcj,zdck,zdcl,zrd);return true;}
catch(zmk){return false;}};zdce.prototype.zdcm=function(zato,zdcn,zdco,zdcp,zrd){try{var zdcq=0;var zdcr=new Array();var zdcs=new Array();var zdct=new Array();var zdcu=new Array();var zbap=null;var zdcv=this.zdcf.zni(RfObjectType.RFTYPE_FOLDER);for(var zayq=0;zayq<zdcv.length;++zayq){if(zdcv[zayq].zpk.toLowerCase()==zrd.toLowerCase()){zbap=zdcv[zayq];zbap.zpj=true;break;}
}var zdcw=false;if(!zbap){zbap=new zpc(RfObjectType.RFTYPE_FOLDER,zrd,RfObjectMode.RF_OBJ_MODE__FIRST,false,true,zrd);zdcw=true;}
else{}var zbbh=$(zato).find("row");for(var zov=0;zov<zbbh.length;++zov){var zra=zbbh[zov];if(zra.getAttribute("file")!=null&&zra.getAttribute("file").toString()!=""){var zdcx=zra.getAttribute("file");var zdcy=new zpc();if(!zdcy.zrb(zdcx)){continue;}
switch(zdcy.m_Type){case RfObjectType.RFTYPE_IDENTITY:if(!zdcn){continue;}
zdcy.zpi=zra.getAttribute("protected");zdcs.push(zdcy);zdcq++;break;case RfObjectType.RFTYPE_PASSCARD:if(!zdcp){continue;}
zdcy.zpi=zra.getAttribute("protected");zdct.push(zdcy);zdcq++;break;case RfObjectType.RFTYPE_SAFENOTE:if(!zdco){continue;}
zdcy.zpi=zra.getAttribute("protected");zdcu.push(zdcy);zdcq++;break;}
}else if(zra.getAttribute("folder")!=null&&zra.getAttribute("folder").toString()!=""){var zdcz=zra.getAttribute("folder");var zdda=new zpc(RfObjectType.RFTYPE_FOLDER,zdcz,RfObjectMode.RF_OBJ_MODE__FIRST,false,false,zrd+zdcz);zdcr.push(zdda);}
}this.zddb(RfObjectType.RFTYPE_IDENTITY,zdcs,zbap,true);this.zddb(RfObjectType.RFTYPE_PASSCARD,zdct,zbap,true);this.zddb(RfObjectType.RFTYPE_SAFENOTE,zdcu,zbap,false);this.zddb(RfObjectType.RFTYPE_FOLDER,zdcr,zbap,false);if(zdcw){this.zdcf.zmy(zbap,RfObjectType.RFTYPE_FOLDER);zdcq++;}
return;}catch(zmk){return;}};zdce.prototype.zddb=function(zbaf,zddc,zddd,zdde){try{var zdcv=this.zdcf.zni(zbaf);var zddf=this.zdcg.znx(zddd);if(!zddf){zddf=new Array();}
else{}for(var zayq=0;zayq<zddc.length;zayq++){var zddg=zddc[zayq];var zpy=new zpc(zddg.m_Type,zddg.m_sName,zddg.znf,zddg.zpi,zddg.zpj,zddd.zpk);if(zddg.m_Type==RfObjectType.RFTYPE_FOLDER){var zph="";if(zddd.zpk==zgw){zph=zddd.zpk+zddg.m_sName;}
else{zph=zddd.zpk+zgw+zddg.m_sName;}zpy.zpk=zph;}this.zdcf.zmy(zpy,zbaf);zddf.push(zpy);}
if(zddc.length>0){this.zdcg.znt(zddd,zddf);}return;}
catch(zmk){return;}};zdce.prototype.zddh=function(zrd){try{var zdcv=this.zdcf.zni(RfObjectType.RFTYPE_FOLDER);for(var zov=0;zov<zdcv.length;++zov){var zddi=zdcv[zov];if(zddi.zpk.toLowerCase()==zrd.toLowerCase()){if(zddi.zpj==true){return zddi;}
}}return null;}catch(zmk){return null;}};zdce.prototype.zddj=function(zyi){try{var zrd=zyi.zpk;var zblk=zrd.lastIndexOf("/");if(zblk!=-1){zrd=zrd.substr(0,zblk);}
if(zrd==""){zrd=zgw;}var zbap=this.zddh(zrd);if(!zbap){return false;}
this.zdcf.zmy(zyi,zyi.m_Type);var zddf=this.zdcg.znx(zbap);if(!zddf){zddf=new Array();}
zddf.unshift(zyi);this.zdcg.znt(zbap,zddf);}catch(zmk){return false;}
};zdce.prototype.zddk=function(zyi){try{var zrd=zyi.zpk;if(zrd==""){zrd=zgw;}
var zbap=this.zddh(zrd);if(!zbap){return false;}this.zdcf.zmy(zyi,zyi.m_Type);var zddf=this.zdcg.znx(zbap);if(!zddf){zddf=new Array();}
zddf.unshift(zyi);this.zdcg.znt(zbap,zddf);}catch(zmk){return false;}
};zdce.prototype.zddl=function(zyi){try{var zblk=this.zdcf.zng(zyi);var zrd=zyi.zpk;if(zyi.m_Type==RfObjectType.RFTYPE_FOLDER){var zblk=zrd.lastIndexOf("/");if(zblk!=-1){zrd=zrd.substr(0,zblk);}
}if(zrd==""){zrd=zgw;}var zbap=this.zddh(zrd);if(!zbap){return false;}
var zddf=this.zdcg.znx(zbap);if(!zddf){return false;}
var position=-1;for(var zayq=0;zayq<zddf.length;++zayq){if(zddf[zayq].zqz(zyi)){zddf.splice(zayq,1);position=zayq;break;}
}this.zdcg.znt(zbap,zddf);}catch(zmk){return null;}
};zdce.prototype.zddm=function(zbaf,zddn,zrd){try{var zbap=this.zddh(zrd);if(!zbap){return null;}
if(!zddn){return null;}var zddf=this.zdcg.znx(zbap);if(!zddf){zddf=new Array();}
else{}zbaf=parseInt(zbaf);var zddo=zbaf&RfObjectType.RFTYPE_PASSCARD;var zddp=zbaf&RfObjectType.RFTYPE_IDENTITY;var zddq=zbaf&RfObjectType.RFTYPE_FOLDER;var zddr=zbaf&RfObjectType.RFTYPE_SAFENOTE;for(var zayq=0;zayq<zddf.length;++zayq){var zra=zddf[zayq];if(zddo!=0){if(zra.m_Type==RfObjectType.RFTYPE_PASSCARD){zddn.push(zra);}
}if(zddp!=0){if(zra.m_Type==RfObjectType.RFTYPE_IDENTITY){zddn.push(zra);}
}if(zddr!=0){if(zra.m_Type==RfObjectType.RFTYPE_SAFENOTE){zddn.push(zra);}
}if(zddo!=0||zddp!=0||zddr!=0){if(zra.m_Type==RfObjectType.RFTYPE_FOLDER){zddn.push(zra);}
}}return zbap;}catch(zmk){return null;}};function zdds(){this.zddt=new zdce();this.zddu=new znk();this.zddv=new znk();this.zddw=new znk();this.zddx=new Array();this.zddy=false;this.zddz={}
;this.zdea={};return;};zdds.prototype.zbau=function(zrd){try{var zdeb=this.zddt.zddh(zrd);return zdeb;}
catch(zmk){return false;}};zdds.prototype.zdec=function(zded){if(arguments.length==1){this.zddy=zded;if(zdp){var zdee=zded==true?'/images/robo32.ico':'/images/robo32logoff.ico';var zaty=new Object();zaty[zcm]=zdee;chrome.browserAction.setIcon(zaty);}
else if(zdq){for(var zov=0;zov<safari.extension.toolbarItems.length;zov++){if(safari.extension.toolbarItems[zov].zdef.indexOf('RFToolButton')!=-1){safari.extension.toolbarItems[zov].zbrk=zrr(zded==true?'images/robo16tbar.png':'images/robo16logoff1.png');}
}}else if(zdr){var zaxs=zded==true?'images/robo16.png':'images/robo16logoff1.png';zdeg.icon=zaxs;}
else if(zdu){}var zaty=new Object();if(zded==true){zaty[zbn]=zah;}
else{zaty[zbn]=zai;}zdeh("all",zaty,"all");}return this.zddy;}
;zdds.prototype.zdei=function(zdej){try{this.zddu=new znk();this.zddv=new znk();this.zddw=new znk();this.zddz={}
;this.zdea={};this.zddt.zdch();if(arguments.length==0){this.zdec(false);this.zddx.length=0;}
}catch(zmk){return;}};zdds.prototype.zdek=function(zato,zrd){try{var zne=zato.indexOf("<data>");zato=zato.substr(zne);this.zddt.zdci(zato,true,true,true,zrd);}
catch(zmk){return;}};zdds.prototype.zbax=function(zdel,zdem,zbaf){return this.zddt.zddm(zbaf,zdel,zdem);}
;zdds.prototype.zden=function(zdeo,zdep,zdeq){try{if(zdep.zqf()){return 0;}
var zra=new Object();zra[zco]=zdeo[zco];this.zder(zra,zdep,zdeq,"",false,"view");if(zra[zco]==null){return 0;}
if(zra[zco].zdca()){zdeo[zco]=zra[zco];return 1;}}
catch(zmk){}};zdds.prototype.zder=function(zdes,zdep,zdeq,zbge,zdet,zaut){try{if(zaut==undefined){zaut="view";}
var zatz=new Object();zatz[zcv]=true;if(zdep.zqf()){zatz[zcv]=false;return zatz;}
var zrk=zdep.znd();var zdeu=false;var zdev=null;switch(zdep.m_Type){case RfObjectType.RFTYPE_IDENTITY:zdev=this.zddv.znx(zrk);break;case RfObjectType.RFTYPE_PASSCARD:zdev=this.zddu.znx(zrk);break;case RfObjectType.RFTYPE_SAFENOTE:zdev=this.zddw.znx(zrk);break;default:zatz[zcv]=false;return zatz;break;}
if(!zdev){switch(zdep.m_Type){case RfObjectType.RFTYPE_IDENTITY:zdev=new Object();break;case RfObjectType.RFTYPE_PASSCARD:zdev=new zbic();break;case RfObjectType.RFTYPE_SAFENOTE:zdev=new zbhz();break;default:zatz[zcv]=false;return zatz;break;}
if(!zdev){zatz[zcv]=false;return zatz;}zdev.zavg=zdep;if(!zdeq){var zbkn=new Object();zbkn.zdew="";zbkn.zdex=zdep;zbkn.password=zbge;zbkn[zbf]=zdet;zbkn[zaz]=zaut;var zdey=zdez(zbkn);if(zdey!=0){zatz[zcv]=false;zatz[zbv]=zdey;zdes[zco]=zdev;return zatz;}
zdeq=zbkn.zdew;}zdev.zbmq=zdeq;zdeu=true;}else{if(!zdeq){zdeq=zdev.zbmq;}
}zdes[zco]=zdev;var zctw=false;if(zdeu==true){if(zdep.m_Type==RfObjectType.RFTYPE_IDENTITY){zdes[zco]=zuy(zdeq,zdep.znf==RfObjectMode.RF_OBJ_MODE_CONTACT);if(zdes[zco]){zctw=true;zdes[zco].zbmq=zdeq;if(!zdes[zco].zavg){zdes[zco].zavg=zdep;}
}}else{zctw=zdes[zco].zczk(zdeq);}if(zbge){if(zdep.m_Type!=RfObjectType.RFTYPE_PASSCARD||zaut!="fill"){if(zdep.m_Type==RfObjectType.RFTYPE_IDENTITY){this.zddv.znt(zrk,zdes[zco]);}
else if(zdep.m_Type==RfObjectType.RFTYPE_PASSCARD){this.zddu.znt(zrk,zdes[zco]);}
else if(zdep.m_Type==RfObjectType.RFTYPE_SAFENOTE){this.zddw.znt(zrk,zdes[zco]);}
}else{g_pSharedData.zcyv(zdes[zco]);}}else{if(zdep.m_Type!=RfObjectType.RFTYPE_PASSCARD||zaut!="fill"){if(zdep.m_Type==RfObjectType.RFTYPE_IDENTITY){this.zddv.znt(zrk,zdes[zco]);}
else if(zdep.m_Type==RfObjectType.RFTYPE_PASSCARD){this.zddu.znt(zrk,zdes[zco]);}
else if(zdep.m_Type==RfObjectType.RFTYPE_SAFENOTE){this.zddw.znt(zrk,zdes[zco]);}
}else{g_pSharedData.zcyv(zdes[zco]);}}}else{zctw=true;}
if(zctw==true){if(zdep.m_Type==RfObjectType.RFTYPE_IDENTITY){}
else{var zdfa=zdes[zco].zczn();}return zatz;}else{if(zdep.m_Type!=RfObjectType.RFTYPE_IDENTITY){zdes[zco].zczb();}
return zatz;}}catch(zmk){return false;}};zdds.prototype.zdfb=function(zbbd,zavy,zdfc,zop,zqy,zyi){try{this.zdfd();g_pSharedData.zcym(zbbd);g_pSharedData.zcyo(zavy);g_pSharedData.zcyr(zop);g_pSharedData.zcyt(zqy);g_pSharedData.zcyv(zyi);}
catch(zmk){}};zdds.prototype.zdfe=function(zra){zra.zbbd=g_pSharedData.zcyl();zra[zbj]=g_pSharedData.zcyn();zra.zop=g_pSharedData.zcyq();zra.zdff=false;zra.zcyk=g_pSharedData.zcyx();}
;zdds.prototype.zdfd=function(){g_pSharedData.zcym(false);g_pSharedData.zcyo(false);g_pSharedData.zcyr("");g_pSharedData.zcyu();g_pSharedData.zcyw();}
;zdds.prototype.zdfg=function(){g_pSharedData.zcyu();}
;zdds.prototype.zdfh=function(zbaf,zdfi){try{if(zbaf!=RfObjectType.RFTYPE_IDENTITY&&zbaf!=RfObjectType.RFTYPE_PASSCARD&&zbaf!=RfObjectType.RFTYPE_SAFENOTE){return new zpc();}
var zra=g_pSharedData.zcys();var zpy=zra.m_sName;var zna=zra.m_Type;var zdfj=zra.znf;var zph=zra.zpk;var zdfk=new zpc();if(zbaf==zna){zdfk.m_sName=zpy;zdfk.m_Type=zna;zdfk.znf=zdfj;zdfk.zpk=zph;if(zdfi){this.zdfg();}
}return zdfk;}catch(zmk){}};zdds.prototype.zdfl=function(zrj){try{var zbhy=new zpc();zbhy.m_Type=RfObjectType.RFTYPE_FOLDER;zbhy.znf=RfObjectMode.RF_OBJ_MODE__FIRST;var zblk=zrj.lastIndexOf("/");if(zblk!=-1){zbhy.m_sName=zrj.substr(zblk+1);zbhy.zpk=zrj;}
else{zbhy.m_sName=zrj;zbhy.zpk=zgw+zbhy.m_sName;}this.zddt.zddj(zbhy);this.zddx=new Array();return zbhy;}
catch(zmk){}};zdds.prototype.zdfm=function(zdep,zri,zrj){try{var zbhy=zdep.clone();zbhy.m_sName=zri;zbhy.zpk=zrj;var zdfn=zbhy.znd();var zacg=this.zdfo(zdep);this.zddt.zddl(zdep);this.zddz={}
;this.zdea={};if(zdep.m_Type==RfObjectType.RFTYPE_FOLDER){var zdfp=this.zdfl(zrj);return zdfp;}
this.zddt.zddk(zbhy);return zbhy;}catch(zmk){}};zdds.prototype.zdfq=function(zdep){try{var zacg=this.zdfo(zdep);this.zddt.zddl(zdep);this.zddz={}
;this.zdea={};}catch(zmk){}};zdds.prototype.zdfo=function(zdep){try{var zdfr=zdep;var zrk=zdep.znd();var zdev=null;switch(zdep.m_Type){case RfObjectType.RFTYPE_IDENTITY:zdev=this.zddv.znx(zrk);break;case RfObjectType.RFTYPE_PASSCARD:zdev=this.zddu.znx(zrk);break;case RfObjectType.RFTYPE_SAFENOTE:zdev=this.zddw.znx(zrk);break;case RfObjectType.RFTYPE_FOLDER:this.zddx=new Array();return false;break;default:return false;break;}
if(!zdev){return true;}var znz=false;switch(zdep.m_Type){case RfObjectType.RFTYPE_IDENTITY:znz=this.zddv.zny(zrk);break;case RfObjectType.RFTYPE_PASSCARD:znz=this.zddu.zny(zrk);break;case RfObjectType.RFTYPE_SAFENOTE:znz=this.zddw.zny(zrk);break;default:return false;break;}
var zdfs=znz==true?"":"NOT";return znz;}catch(zmk){}
};zdds.prototype.zdft=function(zdfu,zdfv){try{if(zdfu==""||zdfv==""){return false;}
var zdfw=new zoo(zdfu);var zdfx=new zoo(zdfv);if(!zdfw||!zdfx){return false;}
if(zdfw.zox!=zdfx.zox){return false;}if(zdfw.host==zdfx.host){return true;}
return false;}catch(zmk){return false;}};zdds.prototype.zdfy=function(zop,zdfz){try{var zop=zop.toString().toLowerCase();if(zop==""){return;}
var zdfw=new zoo(zop);var zdga=new String(zdfw.key("host"));if(zop=="about:blank"){zdga="about:blank";}
if(zdga in this.zddz){zdfz.zdgb=this.zddz[zdga];var zdgc=0;for(var zwv in zdfz.zdgb){if(typeof(zdfz.zdgb[zwv])=="object"){zdgc++;}
}zdfz.zdgb.length=zdgc;}else{var zdgd=new Array();zdge(zop,zdgd);for(var zayq=0;zayq<zdgd.length;++zayq){var zra=zdgd[zayq];var zdgf=zra.getAttribute("file");var zpy=zdgf.toString();zpy=zrf(zpy,0,zpy.length-4);var zbhw=zra.getAttribute("protected");var zdgg=zra.getAttribute("matched");var zdgh=zhe.RF_MATCH_TYPE_NULL;if(zdgg=="1"||zdgg=="true"){zdgh=zhe.RF_MATCH_TYPE_URL_EXACT;}
var zdgi=new zpc(RfObjectType.RFTYPE_PASSCARD,zpy,RfObjectMode.RF_OBJ_MODE__FIRST,zbhw);zdfz.zdgj(zdgi,zdgh,false,true,false,true);}
this.zddz[zdga]=zdfz.zdgb;var arr=this.zddz[zdga];}
}catch(zmk){}};zdds.prototype.zdgk=function(zop){try{var zdgl=zop.toString().toLowerCase();if(zdgl==""){return;}
var zdfw=new zoo(zop);var zdga=new String(zdfw.key("host"));if(zop=="about:blank"){zdga="about:blank";}
this.zddz[zdga]=null;var zdgd=new Array();var zdfz=new zdgm();zdfz.zdgb.length=0;zdge(zop,zdgd);for(var zayq=0;zayq<zdgd.length;++zayq){var zra=zdgd[zayq];var zdgf=zra.getAttribute("file");var zpy=zdgf.toString();zpy=zrf(zpy,0,zpy.length-4);var zbhw=zra.getAttribute("protected");var zdgg=zra.getAttribute("matched");var zdgh=zhe.RF_MATCH_TYPE_NULL;if(zdgg=="1"||zdgg=="true"){zdgh=zhe.RF_MATCH_TYPE_URL_EXACT;}
var zdgi=new zpc(RfObjectType.RFTYPE_PASSCARD,zpy,RfObjectMode.RF_OBJ_MODE__FIRST,zbhw);zdfz.zdgj(zdgi,zdgh,false,true,false,true);}
this.zddz[zdga]=zdfz.zdgb;}catch(zmk){}};function zdgn(){this.zdgo=zhe.RF_MATCH_TYPE_NULL;this.zavg=new zpc(RfObjectType.RFTYPE_PASSCARD);this.zdgp=false;this.zdgq=false;this.zdgr=false;this.zdgs=zhf.RfFieldsNotMatch;}
;zdgn.prototype.zqe=function(zdgt,zdgu,zdgv){try{if(zdgv){if(zdgt.zdgp&&!zdgu.zdgp){return-1;}
if(!zdgt.zdgp&&zdgu.zdgp){return 1;}if(zdgt.zdgo>=zhe.RF_MATCH_TYPE_URL_EXACT&&zdgu.zdgo<zhe.RF_MATCH_TYPE_URL_EXACT){return-1;}
else if(zdgu.zdgo>=zhe.RF_MATCH_TYPE_URL_EXACT&&zdgt.zdgo<zhe.RF_MATCH_TYPE_URL_EXACT){return 1;}
if(zdgt.zdgr!=zdgu.zdgr){return zdgt.zdgr?-1:1;}var zdgw=zdgu.zdgo-zdgt.zdgo;if(zdgw!=0){return zdgw;}
if(zdgt.zdgq!=zdgu.zdgq){return zdgt.zdgq?-1:1;}var zdgx=zdgu.zdgs-zdgt.zdgs;if(zdgx!=0){return zdgx;}
var zmc=new String(zdgt.zavg.m_sName);var zacg=zmc.localeCompare(zdgu.zavg.m_sName);return zacg;}
else{if(zdgt.zdgp&&!zdgu.zdgp){return-1;}if(!zdgt.zdgp&&zdgu.zdgp){return 1;}
if(zdgt.zdgr!=zdgu.zdgr){return zdgt.zdgr?-1:1;}if(zdgt.zdgq!=zdgu.zdgq){return zdgt.zdgq?-1:1;}
var zdgx=zdgu.zdgs-zdgt.zdgs;if(zdgx!=0){return zdgx;}
var zmc=new String(zdgt.zavg.m_sName);var zacg=zmc.localeCompare(zdgu.zavg.m_sName);return zacg;}
}catch(zmk){return null;}};function zdgm(){this.zdgb=new zoc();}
;zdgm.prototype.zdgj=function(zdgy,zdgz,zdha,zdhb,zdgv,zdhc){if(arguments.length==5||zdhc==null){zdhc=zhf.zdhd;}
return this.zdhe(zdgy,zdgz,zdha,zdhb,false,zdgv,zdhc);}
;zdgm.prototype.zdhe=function(zdgy,zdgz,zdha,zdhf,zdhb,zdgv,zdhc){try{if(arguments.length==6||zdhc==null){zdhc=zhf.zdhd;}
var zdhg=new zdgn();zdhg.zavg=zdgy;zdhg.zdgo=zdgz;zdhg.zdgq=zdha;zdhg.zdgr=zdhf;zdhg.zdgp=zdhb;zdhg.zdgs=zdhc;var zdhh=this.zdhi(zdgy);if(zdhh!=-1){var zdhj=this.zdgb[zdhh];var zdfr=new zdgn();var zdhk=zdfr.zqe(zdhg,zdhj,zdgv);if(zdhk>=0){return zdhh;}
else{this.zdgb.zod(zdhh);}}for(var zayq=0;zayq<this.zdgb.length;++zayq){var zdhj=this.zdgb[zayq];var zra=new zdgn();var zdhl=zra.zqe(zdhg,zdhj,zdgv);if(zdhl<0){}
}this.zdgb.push(zdhg);return this.zdgb.length;}catch(zmk){return null;}
};zdgm.prototype.zdhi=function(zdgy){try{for(var zayq=0;zayq<this.zdgb.length;++zayq){var zdhm=this.zdgb[zayq];if(zdhm.zavg.m_sName==zdgy.m_sName){return zayq;}
}return-1;}catch(zmk){return-1;}};zdgm.prototype.zdhn=function(zdho){}
;zdgm.prototype.zdhp=function(){try{var zdhq=0;for(var zayq=0;zayq<this.zdgb.length;++zayq){var zdhr=this.zdgb[zov];if(zdhr.zdgo>=zhe.RF_MATCH_TYPE_URL_EXACT){zdhq++;}
}return zdhq;}catch(zmk){return 0;}};
