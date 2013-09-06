const zcwc=64;const zcwd=20;const zcwe=zcwc;const zcwf=zcwd;const zcwg=0xffffffff;const zcwh=0;const zcwi=-1;const zcwj=zcwc-1;function zcwk(zcuj,src){zcuj.length=src.length;for(var zov=0;zov<src.length;zov++){zcuj[zov]=src[zov];}
};function zcwl(zcuj){for(var zov=0;zov<zcuj.length;zov++){zcuj[zov]=0;}
};function zcwm(){this.count=new Array(2);this.zcpq=new Array(5);this.zcwn=new Array(16);}
;zcwm.prototype={"assign":function(zcph){zcwk(this.count,zcph.count);zcwk(this.zcpq,zcph.zcpq);zcwk(this.zcwn,zcph.zcwn);}
,"clone":function(){var zcph=new zcwm();zcph["assign"](this);return zcph;}
,"clean":function(){zcwl(this.count);zcwl(this.zcpq);zcwl(this.zcwn);}
};function zcwo(zqb,zcmm){return(((zqb)<<zcmm)|((zqb)>>>(32-zcmm)));}
;function zcwp(zqb){return((zcwo((zqb),8)&0x00ff00ff)|(zcwo((zqb),24)&0xff00ff00));}
;function zcwq(zqb,zcob,zcwr){return(((zqb)&(zcob))^(~(zqb)&(zcwr)));}
;function zcws(zqb,zcob,zcwr){return((zqb)^(zcob)^(zcwr));}
;function zcwt(zqb,zcob,zcwr){return(((zqb)&(zcob))^((zqb)&(zcwr))^((zcob)&(zcwr)));}
;function zcwu(zcph){var zcmi=new Array(80),zov,zbxe,zccr,zaff,zcqp,zmk,zcqo;var zcwv=function(zcku,zvx){zcqo=zbxe;zbxe=zcwo(zbxe,5)+zcku(zccr,zaff,zcqp)+zmk+zvx+zcmi[zov];zmk=zcqp;zcqp=zaff;zaff=zcwo(zccr,30);zccr=zcqo;}
for(zov=0;zov<zcwc/4;++zov){zcmi[zov]=zcwp(zcph.zcwn[zov]);}
for(zov=zcwc/4;zov<80;++zov){zcmi[zov]=zcwo(zcmi[zov-3]^zcmi[zov-8]^zcmi[zov-14]^zcmi[zov-16],1);}
zbxe=zcph.zcpq[0];zccr=zcph.zcpq[1];zaff=zcph.zcpq[2];zcqp=zcph.zcpq[3];zmk=zcph.zcpq[4];for(zov=0;zov<20;++zov){zcwv(zcwq,0x5a827999);}
for(zov=20;zov<40;++zov){zcwv(zcws,0x6ed9eba1);}for(zov=40;zov<60;++zov){zcwv(zcwt,0x8f1bbcdc);}
for(zov=60;zov<80;++zov){zcwv(zcws,0xca62c1d6);}zcph.zcpq[0]+=zbxe;zcph.zcpq[1]+=zccr;zcph.zcpq[2]+=zaff;zcph.zcpq[3]+=zcqp;zcph.zcpq[4]+=zmk;}
;function zcww(zcph){zcph.count[0]=zcph.count[1]=0;zcph.zcpq[0]=0x67452301;zcph.zcpq[1]=0xefcdab89;zcph.zcpq[2]=0x98badcfe;zcph.zcpq[3]=0x10325476;zcph.zcpq[4]=0xc3d2e1f0;}
;function zcwx(zato,ztb,zcph){var zayq=(zcph.count[0]&zcwj);var zcwy=zcwc-zayq;var zcwz=0;if((zcph.count[0]+=ztb)<ztb){++(zcph.count[1]);}
while(ztb>=zcwy){for(var zov=0;zov<zcwy;zov++){var zcxa=Math.floor((zayq+zov)/4);var zcxb=(zayq+zov)%4;var zcxc=(zato[zcwz+zov]<<(zcxb*8));var zcxd=(0x000000ff<<(zcxb*8));zcph.zcwn[zcxa]=(zcph.zcwn[zcxa]&~zcxd)|zcxc;}
zcwz+=zcwy;ztb-=zcwy;zcwy=zcwc;zayq=0;zcwu(zcph);}
for(var zov=0;zov<ztb;zov++){var zcxa=Math.floor((zayq+zov)/4);var zcxb=(zayq+zov)%4;var zcxc=(zato[zcwz+zov]<<(zcxb*8));var zcxd=(0x000000ff<<(zcxb*8));zcph.zcwn[zcxa]=(zcph.zcwn[zcxa]&~zcxd)|zcxc;}
};var zcxe=[0x00000000,0x000000ff,0x0000ffff,0x00ffffff];var zcxf=[0x00000080,0x00008000,0x00800000,0x80000000];function zcxg(zcxh,zcph){var zov=zcph.count[0]&zcwj;zcph.zcwn[zov>>>2]=(zcph.zcwn[zov>>>2]&zcxe[zov&3])|zcxf[zov&3];if(zov>zcwc-9){if(zov<60){zcph.zcwn[15]=0;}
zcwu(zcph);zov=0;}else{zov=(zov>>2)+1;}while(zov<14){zcph.zcwn[zov++]=0;}
zcph.zcwn[14]=zcwp((zcph.count[1]<<3)|(zcph.count[0]>>>29));zcph.zcwn[15]=zcwp(zcph.count[0]<<3);zcwu(zcph);for(zov=0;zov<zcwd;++zov){zcxh[zov]=0xff&(zcph.zcpq[zov>>>2]>>>(8*(~zov&3)));}
};function zcxi(zcxh,zato,ztb){zcnp=new zcwm();zcww(zcnp);zcwx(zato,ztb,zcnp);zcxg(zcxh,zcnp);}
;function zcpg(){this.key=new Array(zcwe);this.zcph=new zcwm();this.zcno=0;}
;zcpg.prototype={"assign":function(zcph){zcwk(this.key,zcph.key);this.zcph["assign"](zcph.zcph);this.zcno=zcph.zcno;}
,"clean":function(){zcwl(this.key);this.zcph["clean"]();this.zcno=0;}
};function zcpn(zcnp){zcnp["clean"]();};function zcpo(key,zcpu,zcnp){if(zcnp.zcno==zcwg){return zcwi;}
if(zcnp.zcno+zcpu>zcwe){if(zcnp.zcno<=zcwe){zcww(zcnp.zcph);zcwx(zcnp.key,zcnp.zcno,zcnp.zcph);}
zcwx(key,zcpu,zcnp.zcph);}else{for(var zov=0;zov<zcpu;zov++){zcnp.key[zcnp.zcno+zov]=key[zov];}
}zcnp.zcno+=zcpu;return zcwh;};function zcpp(zato,zcoz,zcnp){if(zcnp.zcno!=zcwg){if(zcnp.zcno>zcwe){zcxg(zcnp.key,zcnp.zcph);zcnp.zcno=zcwf;}
for(var zov=zcnp.zcno;zov<zcwe;zov++){zcnp.key[zov]=0;}
for(var zov=0;zov<zcwe;++zov){zcnp.key[zov]^=0x36;}
zcww(zcnp.zcph);zcwx(zcnp.key,zcwe,zcnp.zcph);zcnp.zcno=zcwg;}
if(zcoz){zcwx(zato,zcoz,zcnp.zcph);}};function zcps(zcxj,zcxk,zcnp){var zcxl=new Array(zcwf);if(zcnp.zcno!=zcwg){zcpp(null,0,zcnp);}
zcxg(zcxl,zcnp.zcph);for(var zov=0;zov<zcwe;++zov){zcnp.key[zov]^=0x36^0x5c;}
zcww(zcnp.zcph);zcwx(zcnp.key,zcwe,zcnp.zcph);zcwx(zcxl,zcwf,zcnp.zcph);zcxg(zcxl,zcnp.zcph);for(zov=0;zov<zcxk;++zov){zcxj[zov]=zcxl[zov];}
};function zcxm(key,zcpu,zcxn,zcoz,zcxj,zcxk){var zcnp=new zcpg();zcpn(zcnp);zcpo(key,zcpu,zcnp);zcpp(zcxn,zcoz,zcnp);zcps(zcxj,zcxk,zcnp);}
;
