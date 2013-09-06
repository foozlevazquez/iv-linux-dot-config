var zzj={zzk:0,zzl:1,zzm:2,zzn:3,zzo:4,zzp:5,zzq:6,zzr:3,zzs:-1
}
;var zzt={zzu:0,zzv:1,zzw:2
};var zcte='\0';var zctf=2;var zcra=8192;var zcrb=(1<<0);var zcrc=(0*zcrb);var zcrd=(1*zcrb);var zcre=(1<<1);var zcrf=(0*zcre);var zcrg=(1*zcre);var zcrh=0;var zcri=1;var zcrj=2;var zcrk=3;zctg=function(zcth,zcti){var zctj=zaed(zcth);var zctk=[];var zctl=Math.floor((zcth.length+3)/4)*3;var zctm=(zctl+7)&~7;var zcsc=zctn(zctj);zcsc.length=zctm;zcsc=zcto(zcsc,zcti);for(var zov=0;zov<zctm;zov+=2){zctk[zov/2]=((zcsc[zov+1]<<8)|0xFF&zcsc[zov]);}
return zaef(zctk);};function zctn(zcth){var zcqc=[];var ztb=zcth.length;for(var zov=0,zoy=0;zov<ztb;zov+=4,zoy+=3){var zctp=zcth[zov]-32;var zctq=zov+1<ztb?zcth[zov+1]-32:0;var zctr=zov+2<ztb?zcth[zov+2]-32:0;var zcts=zov+3<ztb?zcth[zov+3]-32:0;zcqc[zoy]=((zctp&0x3f)+((zctq&0x03)<<6));zcqc[zoy+1]=((zctq>>2&0x0f)+((zctr&0x0f)<<4));zcqc[zoy+2]=((zctr>>4&0x03)+((zcts&0x3f)<<2));}
return zcqc;};function zcto(zcsc,zcti){var key=zcti||zctt();var zctu=[];for(var zov=0;zov<zcsc.length;zov+=zcra){var zctv=zcsc.slice(zov,zov+zcra);var zctw=zmd.zcsz(key,zctv,zcrd|zcrg);zctu.push(zctv);if(zctw!=zcrh){return false;}
}return Array.concat.apply(null,zctu);};function zaeu(zcth,zctx,zcti){var zctm=((zcth.length+1)*2+7)&~7;var zcty=[];for(var zov=0;2*zov<zctm;zov++){zcty[2*zov]=zov<zcth.length?zcth[zov]:0;zcty[2*zov+1]=0;}
zcty=zctz(zcty,zcti);zcua(zcty,zctx);return true;}
;function zctz(zcsc,zcti){var key=zcti||zctt(key);var zctu=[];for(var zov=0;zov<zcsc.length;zov+=zcra){var zctv=zcsc.slice(zov,zov+zcra);var zctw=zcsz(key,zctv,zcrc|zcrg);zctu.push(zctv);if(zctw!=zcrh){return false;}
}var zcqc=[];for(var zne=0;zne<zctu.length;zne++){zcqc=zcqc.concat(zctu[zne]);}
return zcqc;};function zcua(zcth,zctx){var zctm=((zcth.length+2)/3)*4+1;var zcub=0;var zcuc=0;var zcud=0;for(var zxb=0;zxb<zcth.length;zxb++){var zcue=8;var zcuf=zcth[zxb];while(zcue>0){zcud|=(zcuf&(0x3f>>>zcuc))<<zcuc;if(zcue+zcuc>=6){zctx[zcub++]=(zcud+32)&0xff;zcuf>>>=6-zcuc;zcue-=6-zcuc;zcud=0;zcuc=0;}
else{zcuc+=zcue;zcue=0;}}}if(zcuc>0){zctx[zcub++]=(zcud+32)&0xff;}
};function zaeq(zadw){var key=new Array(8);for(var znh=0;znh<8;znh++){var zaff=zadw.charCodeAt(znh)||0;key[znh]=(zcug(zaff)+zcuh(zaff));}
zcsw(key);return key;};function zcuh(zcmi){return zcmi&0xff;}
;function zcug(zcmi){return zcmi>>8;};function zctt(key){var zov;for(zov=0;zov<11;zov++);key[0]=zov;key[1]=(key[0]+13);key[2]=(key[0]*(key[1]>>1)-29);key[3]=(key[0]*125/key[0]);key[4]=(((key[0]>>2)|5)>>1);key[5]=(((key[4]*key[4])<<1)*3);key[6]=((key[5]*key[5])-2);key[7]=((key[6]>>3)*7+key[4]);zcsw(key);}
function zcui(zcuj,src,ztb){for(var zov=0;zov<ztb;zov++){zcuj[zov]=src[zov];}
};function zcuk(zcul){switch(zcul){case zzj.zzn:return new zcop();case zzj.zzo:return new zcum();case zzj.zzp:return new zcun();}
throw{message:"invalig cipher code "+zcul};};function zcuo(zcul,zcup,zcuq,zcur,zcus,zcut,zcuu,zcuv){var zcuw=[0,0];var zcux=zcus.length;var zcpq=new Array(zcux);var zcuy=zcuk(zcul);var zcuz=new zcpa();if(!zcuz["Init"](zcuy,zcuu,zcuq,zcuw)){throw{message:"---RfDecodeAndDecrypt: init failed: pwdlen="+zcva}
;}if(zcuw[0]!=zcur[0]||zcuw[1]!=zcur[1]){throw{message:"masterpassdlg-password-wrong-err"}
;}zcuz["Decrypt"](zcut);zcuz["Done"](zcpq,zcux);zcut=zaef(zcut);for(var zov=0;zov<zcux;zov++){if(zcpq[zov]!=zcus[zov]){throw{message:"---RfDecodeAndDecrypt: HASH mismatch, wrong password or corrupted Data"}
;}}var zcvb=zcut.indexOf('\0');if(zcvb==-1){throw{message:"---RfDecodeAndDecrypt: no terminating null byte in actual Data\n"}
;}zcvb++;var zcvc=zcut.substr(zcvb);if(zcup==zzt.zzv){var zcvd=zcvc.indexOf(0);if(zcvd!=-1){throw{message:"RfDecodeAndDecrypt: invalid Data format\n"}
;}if(!zcve){zcvf=true;}else if(zcuv!=zcvc.substr(0,zcvd-1)){throw{message:"RfDecodeAndDecrypt: dual password second part mismatch\n"}
;}zcvc.splice(0,zcvd);}var zws=zcvc.indexOf('\0');if(zws>0){zcvc=zcvc.substr(0,zws);}
return zcvg(zcvc);};function zcvh(zcth,zadw,zcul,zcup,zcvf){var zctj=zaed(zcth);var zaen=zaed(zadw);zcvf=false;var zcvi='\\';var zcvj=zctn(zctj);var zcve=false;var zcuu=[];var zcuv=[];switch(zcup){default:case zzt.zzu:zcuu=zmd.zcvk(zaen);break;case zzt.zzv:{var zxb=zaen.indexOf(zcvi);if(zxb<0){zcuu=zmd.zcvk(zaen);}
else{zcuu=zmd.zcvk(zaen.substr(0,zxb));zcuv=zmd.zcvk(zaen.substr(zxb+1));zcve=true;}
}break;}var zcva=zcuu.length;var zcvl=(zcva<32)?8:((zcva<48)?12:16);var zcux=10;var zcuq=zcvj.splice(0,zcvl);var zcur=zcvj.splice(0,zctf);var zcus=zcvj.splice(0,zcux);var zcut=zcvj;return zaef(zcuo(zcul,zcup,zcuq,zcur,zcus,zcut,zcuu,zcuv));}
;function zaep(zcth,zctx,zadw,zcul,zcup,zcvi){var zcvm=zcvk(zcth);var zcvn=zcvm.length;var zcuu=[];var zcuv=[];var zcvo=0;switch(zcup){default:case zzt.zzu:zcuu=zcvk(zadw);break;case zzt.zzv:var zauj=zadw.split(zcvi);zcuu=zcvk(zauj[0]);zcuv=zcvk(zauj[1]);zcvo=zcuv.length+1;break;}
var zcuy=zcuk(zcul);var zcvp=zcuy.GetMinBlockSize();var zcva=zcuu.length;var zcvl=(zcva<32)?8:((zcva<48)?12:16);var zcvq=new zcpa();var zcux=zcvq.GetHashLength();var zcvr=zcvl+zctf+zcux;var zcvs=zcvn+1+zcvo;zcvs=Math.floor((zcvs+zcvp-1)/zcvp)*zcvp;var zcvt=zcvs+zcvp+1;zcvt=(zcvt+1023)&~1023;var zctm=zcvr+zcvt;var zcvu=Math.floor((zctm+2)/3)*3-zctm;zcvt+=zcvu;zcvt=Math.floor(zcvt/zcvp)*zcvp;zctm+=zcvu;var zcvv=zcvt-zcvs;var zcuq=[];var zcvw=new Array(zctf);var zcvx=[];var zcvy=[];var zcvc=[];for(var zov=0;zov<zcvl;zov++){zcuq[zov]=Math.floor(Math.random()*0xff);}
for(var zov=0;zov<zcvv;zov++){zcvy[zov]=Math.floor(Math.random()*0xff);}
for(var zov=0;zov<zcvv-1;zov++){if(zcvy[zov]==0){var zaff=(zov+1)&0xff||1;zcvy[zov]=zaff;}
}zcvy[zcvv-1]=0;if(!zcvq["Init"](zcuy,zcuu,zcuq,zcvw)){throw{message:"RfEncryptAndEncode: init failed: pwdlen="+zcva}
;}if(zcup==zzt.zzv){zcvy=zcvy.concat(zcuv,0);}zcui(zcvc,zcvm,zcvn);zcvc[zcvn]=0;zcvy=zcvy.concat(zcvc);zcvq["Encrypt"](zcvy,zcvt);zcvq["Done"](zcvx,zcux);var zcvj=zcuq.concat(zcvw);zcvj=zcvj.concat(zcvx);zcvj=zcvj.concat(zcvy);zcua(zcvj,zctx);return true;}
;function zcvk(zmc){if(zmc instanceof Array){zmc=zaef(zmc);}
var zcsn,zov,ztb,zaff;zcsn="";ztb=zmc.length;for(zov=0;zov<ztb;zov++){zaff=zmc.charCodeAt(zov);if((zaff>=0x0001)&&(zaff<=0x007F)){zcsn+=zmc.charAt(zov);}
else if(zaff>0x07FF){zcsn+=String.fromCharCode(0xE0|((zaff>>12)&0x0F));zcsn+=String.fromCharCode(0x80|((zaff>>6)&0x3F));zcsn+=String.fromCharCode(0x80|((zaff>>0)&0x3F));}
else{zcsn+=String.fromCharCode(0xC0|((zaff>>6)&0x1F));zcsn+=String.fromCharCode(0x80|((zaff>>0)&0x3F));}
}zcsn=zaed(zcsn);return zcsn;};function zaed(zmc){var zbxe=[];for(var zov=0;zov<zmc.length;zov++){zbxe[zov]=zmc.charCodeAt(zov);}
return zbxe;};this.zcvg=function(ztf){return zaed(zcvz(ztf));}
;function zcvz(zcwa){var zcwb="";var zov=0;var zaff=0;var zctq=0;var zctr=0;var zcts=0;while(zov<zcwa.length){zaff=zcwa.charCodeAt(zov);if(zaff<128){zcwb+=String.fromCharCode(zaff);zov++;}
else if((zaff>191)&&(zaff<224)){zctr=zcwa.charCodeAt(zov+1);zcwb+=String.fromCharCode(((zaff&31)<<6)|(zctr&63));zov+=2;}
else{zctr=zcwa.charCodeAt(zov+1);zcts=zcwa.charCodeAt(zov+2);zcwb+=String.fromCharCode(((zaff&15)<<12)|((zctr&63)<<6)|(zcts&63));zov+=3;}
}return zcwb;};
