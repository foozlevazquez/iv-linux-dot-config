var zzj={zzk:0,zzl:1,zzm:2,zzn:3,zzo:4,zzp:5,zzq:6,zzr:3,zzs:-1
}
;var zzt={zzu:0,zzv:1,zzw:2
};var RfFieldType={zzx:0,zzy:1,zzz:2,zaaa:3,zaab:4,zaac:5,zaad:6,zaae:7,zaaf:8
}
;var zaag={zaah:0,zaai:1
};const zaaj='@'.charCodeAt(0);var zid=3;var zhl="name$";var zhm="index$";const zaak="Basic Auth$";const zaal="New Account$";const zaam="Note$";const zaan="Default$";const zaao="Script$";const zaap="PasscardUniqueID$";const zaaq="PasscardsBefore$";const zaar="PasscardsAfter$";const zaas="Icon$";const zaat="-NoAutoFill-";const zaau="-NoAutoFillFromIdentity-";const zaav="-NoAutoFillFromPasscard-";const zaaw="-NoAutoSave-";const zaax="Source Object Name$";const zaay="\x12\x06\x10\x13";const zaaz="\x01\r\n";const zaba="&[RfDf]";const zabb="MASTER PASSWORD FILE";const zabc="{Offline}";const zabd="{Bookmark}";const zabe="{Win32Dlg}";const zabf="\r\n";var zhg="_fieldformat$";var zabg="1";var zabh=zhg+zabg+"#";var zabi=0;zabj=function(zabk,zxs){try{zabk.zabl=0;zabk.zabm=0;zabk.zabn=0;zabk.zabo=0;zabk.zabp=0;zabk.zabq=0;zabk.zabr=[];zabk.zabs=[];zabk.zabt=[];zabk.zabu=zabv;zabk.zabw=zabx;zabk.zaby=zabz;if(zxs){zabk.zabu(zxs);zabk.zabl=1;zabk.zabm=1;zabk.zabn=zzj.zzn;zabk.zabo=zzt.zzu;}
return zaca.apply(zabk,[false]);}catch(ztl){throw(ztl);}
};function zabz(zacb,zacc,zacd){var zace=this.zacf();var zacg="";for(var zach in zace.m_mOptionValues){var zaci=zace.m_mOptionValues[zach];zacg+='=OPTION= "'+zach+'" = "'+zaci+'";'+zabf;}
var zacj=zace.zack;for(var zov=0;zov<zacj.length;zov++){var zacl=zacj[zov];var zacm=zace.zacn[zacl.m_sName];if(!zacm){continue;}
var zaco=zacl.m_sName+'## = "'+zacm.zacp+'";'+zabf;zacg+=zaco;}
var zacb=false;var zacq="";var zacr="";var zacs={}
;for(var zov=0;zov<zacj.length;zov++){var zacl=zacj[zov];var zacm=zace.zacn[zacl.m_sName];if(!zacm){continue;}
var zact=zacm.zacu;for(var zacv in zact){var zacw=zact[zacv];var zacx=zacl.m_lFields;if(zacb&&!zacv){continue;}
for(var zvx=0;zvx<zacx.length;zvx++){var zacy=zacx[zvx];var zacz=zace.zada(zacy);var zadb=zacz.zadc();if((zadb.zadd()&&zadb.zade().length==0)||zadb.zadf(zacy)){continue;}
var zvu=zadb.zadg();var zaco=zacv?zacr:zacq;if(zacv!="Main"){zaco+=zacl.m_sName+"#"+zacv+"#";}
zaco+=zacy+' = "';if(zacb){zaco+='";';}else{var zvv="";if(!zadb.zadd()){zacs[zacl.m_sName]=zacv;zvv=zacz.zadh(zace,zacv);zvv=zadi(zvv);}
zaco+=zvv+'"'+(zvu?' : "'+zvu+'"':'')+";";}zaco+="\r\n";if(zacv)zacr=zaco;else zacq=zaco;if(zacb){break;}
}}}if(!zacb){}zacg+=zacq+zacr;for(var znh=0;znh<zace.zadj();znh++){var zadk=zace.zadl(znh);var zadm=zadk.zadc();var zadn=zadk.zadc().zado();var zvu=zadm.zadg();var zvv=zadk.zadh(zace,"Main");var zpy=zadk.zadp;var zadq=zvu==""?"":": \""+zvu+"\" ";var zadr=zadm.zads()==2?" MULTILINE":"";var zaco="\""+zpy+"\" "+zadq+"= \""+zvv+"\""+zadr+";\r\n";zacg+=zaco;}
return zacg;};function zadi(zvv){try{var zadt="";for(var znh=0;znh<zvv.length;znh++){switch(zvv[znh]){case'\n':zadt+="\\n";break;case'\r':zadt+="\\n";if(znh+1<zvv.length&&zvv[znh+1]=='\n')znh++;break;case'%':zadt+="%%";break;case'"':zadt+="\"\"";break;case'$':zadt+="$$";break;case'\\':zadt+="\\\\";break;default:zadt+=zvv[znh];break;}
}return zadt;}catch(ztl){}};function zaca(zadu){var zadv=[];if(this.zabl){if(zadu){}
else{if(this.zabw().length==0){}if(this.zabn>=zzj.zzr&&this.zabo==zzt.zzv){var zadw=this.zabw();var zadx=zadw.indexOf('\\');if(zadx<zabi||zadx>=zadw.length-1){zady=zzt.zzu;}
}}var zadz=this.zaby(true,true,false);var zady=this.zabo;var zaea=zaeb(this.zabn);if(this.zabn>=zzj.zzr){var zaec='';zaec=this.zabn+","+zady+"\1";zadz=zaec+zadz;}
zadz=zaed(zadz);zaee(zaea,zaay,zadz,zadv,null,zzj.zzk,zzt.zzu);if(zadu){if(this.zabp){var ztf=this.zaby(false,false,false);if(ztf!=this.zabs){throw{message:"CPasscard::StorePasscard: raw Data mismatch: [["+ztf+"]], loaded:[["+this.zabs+"]]"}
;}}this.zabr=zaed(this.zabr);zaee("",zaef(this.zabw()),this.zabr,zadv,null,zzj.zzs,zady);}
else{var zaeg=this.zaby(false,false,false);zaeg=zaed(zaeg);zaee("",this.zabw(),zaeg,zadv,null,this.zabn,zady);}
}else{var zaeg=this.zaby(false,true,false);zaeh("@PROTECTED@",zaeg,zadv,false,null);}
return zadv.join('');};function zaee(zaei,zadw,zaej,zadv,zaek,zael,zaem){var zaen=zaed(zadw);if(zaek){zadv.push(zaek);}
var zaea=zaei+zabf;var zaeo=[];if(zael==zzj.zzs){zaeo=zaej;}
else if(zael>=zzj.zzr){zaep(zaej,zaeo,zaen,zael,zaem,'\\');}
else{var key=zaeq(zadw);var zaer=zaen.concat(zaed(zaaz),zaej);if(zael==zzj.zzm){var zaes=zaeq(zaay);if(!zaet(zaer,zaeo,zaes,key)){throw{message:"Cannot encrypt a file: 3DES: report to ask@roboform.com"}
;}}else{if(!zaeu(zaer,zaeo,key)){throw{message:"Cannot encrypt a file: 1DES: report to ask@roboform.com"}
;}}}var zaev=zaea+zaef(zaeo);var zaew=50;var zaex=0;while(zaev.length-zaex>zaew){var zaey=zaev.substr(zaex,zaew)+zabf;zadv.push(zaey);zaex+=zaew;}
var zaez=zaev.substr(zaex)+zabf;zadv.push(zaez);};function zaeb(zael){switch(zael){case zzj.zzk:return"+PROTECTED-11+";case zzj.zzl:case zzj.zzm:return"+PROTECTED-13+";default:return"+PROTECTED-2+";}
};function zaeh(zaea,zafa,zadv,zafb,zaek){if(zafb){zadv.push(zaek);}
zadv.push(zaea+zabf);var zafc=zafd(zafa);var zaew=50;var zaex=0;while(zafc.length-zaex>zaew){zadv.push(zafc.substr(zaex,zaew)+zabf);zaex+=zaew;}
zadv.push(zafc.substr(zaex)+zabf);return true;};function zafd(zmc){var zafe='';for(var zov=0;zov<zmc.length;++zov){var zaff=0xffff&~zmc.charCodeAt(zov);zafe+=String.fromCharCode(((zaff>>>12)&0x3F)+zaaj,((zaff>>>6)&0x3F)+zaaj,(zaff&0x3F)+zaaj);}
return zafe;};function zabx(){return zafg(this.zafh);}
;function zabv(zadw){this.zafh=zafi(zadw);};function zafi(zst){var arr=zst.split('');var zacg=arr.map(function(zaff){zaff=zaff.charCodeAt(0);var zafj=String.fromCharCode(((zaff&0x5555)<<1)|((zaff&0xAAAA)>>>1));return zafj;}
);zacg=zacg.join('');return zacg;};function zafg(ztf){if(typeof(Array.map)!="undefined"){return(Array.map(ztf,function(zmb){zmb=zmb.charCodeAt(0);return String.fromCharCode(((zmb&0x5555)<<1)|((zmb&0xAAAA)>>>1));}
).join(''));}else if(typeof(Array.prototype.map)!="undefined"){var zafk=Array.prototype.map;return(zafk.call(ztf,function(zmb){zmb=zmb.charCodeAt(0);return String.fromCharCode(((zmb&0x5555)<<1)|((zmb&0xAAAA)>>>1));}
).join(''));}};
