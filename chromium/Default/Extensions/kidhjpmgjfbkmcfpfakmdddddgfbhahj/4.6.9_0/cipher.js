function zcpa(){this.zcpb=32;this.zcpc=128;this.zcpd=0;this.zcpe=null;this.zcpf=new zcpg();}
;zcpa.prototype={"Init":function(zcph,zbfu,zcpi,zcpj){if(zbfu.length>this.zcpc){return false;}
this.zcpe=zcph;this.zcpd=zbfu.length;zcph["Init"](zbfu.length);var zcpk=zcph.GetKeyLength();var zcpl=zcpm(zbfu,zcpi,1000,2*zcpk+zcpj.length);zcph.SetIV(zcpi,zcpi.length);zcph.SetKey(zcpl);zcpn(this.zcpf);zcpo(zcpl.slice(zcpk,zcpk+zcpk),zcpk,this.zcpf);for(var zov=0;zov<zcpj.length;zov++){zcpj[zov]=zcpl[2*zcpk+zov];}
return true;},"Encrypt":function(zato,zcoz){zcpp(zato,zcoz,this.zcpf);this.zcpe["Encrypt"](zato,zcoz);}
,"Decrypt":function(zato){this.zcpe["Decrypt"](zato,zato.length);zcpp(zato,zato.length,this.zcpf);}
,"Done":function(zcpq,zcpr){zcps(zcpq,zcpr,this.zcpf);}
,"GetHashLength":function(){return 10;},"GetMinBlockSize":function(){return this.zcpe.GetMinBlockSize();}
};function zcpm(zxs,zcpi,zcpt,zcpu){var zcpv=new Array(64);var zcpw=new Array(64);if(zxs.length>64){zxs=zcpx(zxs,zxs.length);}
for(var zov=0;zov<64;++zov){zcpv[zov]=zxs[zov]^0x36;zcpw[zov]=zxs[zov]^0x5C;}
var key=[];var zcpy=Math.ceil(zcpu/20);for(var zcpz=1;zcpz<=zcpy;zcpz++){var zcqa=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var zcqb=zcpi.concat([zcpz>>24&0x0f,zcpz>>16&0x0f,zcpz>>8&0x0f,zcpz&0x0f]);var zcpq=zcpx(zcpv.concat(zcqb),64+zcqb.length);zcpq=zcpx(zcpw.concat(zcpq),64+20);for(var zoy=0;zoy<zcpq.length;++zoy){zcqa[zoy]^=zcpq[zoy];}
for(var zov=1;zov<zcpt;++zov){zcpq=zcpx(zcpv.concat(zcpq),64+zcpq.length);zcpq=zcpx(zcpw.concat(zcpq),64+20);for(var zoy=0;zoy<zcpq.length;++zoy){zcqa[zoy]^=zcpq[zoy];}
}key.push(zcqa);}var zcqc=[];for(var zne=0;zne<key.length;zne++){zcqc=zcqc.concat(key[zne]);}
zcqc=zcqc.slice(0,zcpu);return zcqc;};var zcpx=function(zqb,ztb){zqb=zaef(zqb);var zcpq=zcqd(zqb);return zaed(zcpq);}
;function zcqd(ztf){return zcqe(zcqf(zcqg(ztf),ztf.length*8));}
;function zcqg(zbkk){var zcqh=Array(zbkk.length>>2);for(var zov=0;zov<zcqh.length;zov++){zcqh[zov]=0;}
for(var zov=0;zov<zbkk.length*8;zov+=8){zcqh[zov>>5]|=(zbkk.charCodeAt(zov/8)&0xFF)<<(24-zov%32);}
return zcqh;};function zcqi(zcqj,zcjy){return(zcqj<<zcjy)|(zcqj>>>(32-zcjy));}
;function zcqk(zqb,zcob){var zcql=(zqb&0xFFFF)+(zcob&0xFFFF);var zcqm=(zqb>>16)+(zcob>>16)+(zcql>>16);return(zcqm<<16)|(zcql&0xFFFF);}
;function zcqe(zbkk){var zcqh="";for(var zov=0;zov<zbkk.length*32;zov+=8){zcqh+=String.fromCharCode((zbkk[zov>>5]>>>(24-zov%32))&0xFF);}
return zcqh;};function zcqn(zcqo,zccr,zaff,zcqp){if(zcqo<20){return(zccr&zaff)|((~zccr)&zcqp);}
if(zcqo<40){return zccr^zaff^zcqp;}if(zcqo<60){return(zccr&zaff)|(zccr&zcqp)|(zaff&zcqp);}
return zccr^zaff^zcqp;};function zcqq(zcqo){return(zcqo<20)?1518500249:(zcqo<40)?1859775393:(zcqo<60)?-1894007588:-899497514;}
;function zcqf(zqb,ztb){zqb[ztb>>5]|=0x80<<(24-ztb%32);zqb[((ztb+64>>9)<<4)+15]=ztb;var zcmi=Array(80);var zbxe=1732584193;var zccr=-271733879;var zaff=-1732584194;var zcqp=271733878;var zmk=-1009589776;for(var zov=0;zov<zqb.length;zov+=16){var zcqr=zbxe;var zcqs=zccr;var zcqt=zaff;var zcqu=zcqp;var zcqv=zmk;for(var zoy=0;zoy<80;zoy++){if(zoy<16){zcmi[zoy]=zqb[zov+zoy];}
else{zcmi[zoy]=zcqi(zcmi[zoy-3]^zcmi[zoy-8]^zcmi[zoy-14]^zcmi[zoy-16],1);}
var zcqo=zcqk(zcqk(zcqi(zbxe,5),zcqn(zoy,zccr,zaff,zcqp)),zcqk(zcqk(zmk,zcmi[zoy]),zcqq(zoy)));zmk=zcqp;zcqp=zaff;zaff=zcqi(zccr,30);zccr=zbxe;zbxe=zcqo;}
zbxe=zcqk(zbxe,zcqr);zccr=zcqk(zccr,zcqs);zaff=zcqk(zaff,zcqt);zcqp=zcqk(zcqp,zcqu);zmk=zcqk(zmk,zcqv);}
return Array(zbxe,zccr,zaff,zcqp,zmk);};
