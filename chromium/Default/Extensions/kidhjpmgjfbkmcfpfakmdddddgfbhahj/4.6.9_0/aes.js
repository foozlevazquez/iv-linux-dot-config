const zcma=16;const zcmb=zcma>>2;const zcmc=4*zcma;const zcmd=0x011b;const zcme=0x1b;const zcmf=0;const zcmg=1;function zcmh(zcmi){return[zcmi(0x63),zcmi(0x7c),zcmi(0x77),zcmi(0x7b),zcmi(0xf2),zcmi(0x6b),zcmi(0x6f),zcmi(0xc5),zcmi(0x30),zcmi(0x01),zcmi(0x67),zcmi(0x2b),zcmi(0xfe),zcmi(0xd7),zcmi(0xab),zcmi(0x76),zcmi(0xca),zcmi(0x82),zcmi(0xc9),zcmi(0x7d),zcmi(0xfa),zcmi(0x59),zcmi(0x47),zcmi(0xf0),zcmi(0xad),zcmi(0xd4),zcmi(0xa2),zcmi(0xaf),zcmi(0x9c),zcmi(0xa4),zcmi(0x72),zcmi(0xc0),zcmi(0xb7),zcmi(0xfd),zcmi(0x93),zcmi(0x26),zcmi(0x36),zcmi(0x3f),zcmi(0xf7),zcmi(0xcc),zcmi(0x34),zcmi(0xa5),zcmi(0xe5),zcmi(0xf1),zcmi(0x71),zcmi(0xd8),zcmi(0x31),zcmi(0x15),zcmi(0x04),zcmi(0xc7),zcmi(0x23),zcmi(0xc3),zcmi(0x18),zcmi(0x96),zcmi(0x05),zcmi(0x9a),zcmi(0x07),zcmi(0x12),zcmi(0x80),zcmi(0xe2),zcmi(0xeb),zcmi(0x27),zcmi(0xb2),zcmi(0x75),zcmi(0x09),zcmi(0x83),zcmi(0x2c),zcmi(0x1a),zcmi(0x1b),zcmi(0x6e),zcmi(0x5a),zcmi(0xa0),zcmi(0x52),zcmi(0x3b),zcmi(0xd6),zcmi(0xb3),zcmi(0x29),zcmi(0xe3),zcmi(0x2f),zcmi(0x84),zcmi(0x53),zcmi(0xd1),zcmi(0x00),zcmi(0xed),zcmi(0x20),zcmi(0xfc),zcmi(0xb1),zcmi(0x5b),zcmi(0x6a),zcmi(0xcb),zcmi(0xbe),zcmi(0x39),zcmi(0x4a),zcmi(0x4c),zcmi(0x58),zcmi(0xcf),zcmi(0xd0),zcmi(0xef),zcmi(0xaa),zcmi(0xfb),zcmi(0x43),zcmi(0x4d),zcmi(0x33),zcmi(0x85),zcmi(0x45),zcmi(0xf9),zcmi(0x02),zcmi(0x7f),zcmi(0x50),zcmi(0x3c),zcmi(0x9f),zcmi(0xa8),zcmi(0x51),zcmi(0xa3),zcmi(0x40),zcmi(0x8f),zcmi(0x92),zcmi(0x9d),zcmi(0x38),zcmi(0xf5),zcmi(0xbc),zcmi(0xb6),zcmi(0xda),zcmi(0x21),zcmi(0x10),zcmi(0xff),zcmi(0xf3),zcmi(0xd2),zcmi(0xcd),zcmi(0x0c),zcmi(0x13),zcmi(0xec),zcmi(0x5f),zcmi(0x97),zcmi(0x44),zcmi(0x17),zcmi(0xc4),zcmi(0xa7),zcmi(0x7e),zcmi(0x3d),zcmi(0x64),zcmi(0x5d),zcmi(0x19),zcmi(0x73),zcmi(0x60),zcmi(0x81),zcmi(0x4f),zcmi(0xdc),zcmi(0x22),zcmi(0x2a),zcmi(0x90),zcmi(0x88),zcmi(0x46),zcmi(0xee),zcmi(0xb8),zcmi(0x14),zcmi(0xde),zcmi(0x5e),zcmi(0x0b),zcmi(0xdb),zcmi(0xe0),zcmi(0x32),zcmi(0x3a),zcmi(0x0a),zcmi(0x49),zcmi(0x06),zcmi(0x24),zcmi(0x5c),zcmi(0xc2),zcmi(0xd3),zcmi(0xac),zcmi(0x62),zcmi(0x91),zcmi(0x95),zcmi(0xe4),zcmi(0x79),zcmi(0xe7),zcmi(0xc8),zcmi(0x37),zcmi(0x6d),zcmi(0x8d),zcmi(0xd5),zcmi(0x4e),zcmi(0xa9),zcmi(0x6c),zcmi(0x56),zcmi(0xf4),zcmi(0xea),zcmi(0x65),zcmi(0x7a),zcmi(0xae),zcmi(0x08),zcmi(0xba),zcmi(0x78),zcmi(0x25),zcmi(0x2e),zcmi(0x1c),zcmi(0xa6),zcmi(0xb4),zcmi(0xc6),zcmi(0xe8),zcmi(0xdd),zcmi(0x74),zcmi(0x1f),zcmi(0x4b),zcmi(0xbd),zcmi(0x8b),zcmi(0x8a),zcmi(0x70),zcmi(0x3e),zcmi(0xb5),zcmi(0x66),zcmi(0x48),zcmi(0x03),zcmi(0xf6),zcmi(0x0e),zcmi(0x61),zcmi(0x35),zcmi(0x57),zcmi(0xb9),zcmi(0x86),zcmi(0xc1),zcmi(0x1d),zcmi(0x9e),zcmi(0xe1),zcmi(0xf8),zcmi(0x98),zcmi(0x11),zcmi(0x69),zcmi(0xd9),zcmi(0x8e),zcmi(0x94),zcmi(0x9b),zcmi(0x1e),zcmi(0x87),zcmi(0xe9),zcmi(0xce),zcmi(0x55),zcmi(0x28),zcmi(0xdf),zcmi(0x8c),zcmi(0xa1),zcmi(0x89),zcmi(0x0d),zcmi(0xbf),zcmi(0xe6),zcmi(0x42),zcmi(0x68),zcmi(0x41),zcmi(0x99),zcmi(0x2d),zcmi(0x0f),zcmi(0xb0),zcmi(0x54),zcmi(0xbb),zcmi(0x16)];}
;function zcmj(zqb,zblk,zbsl){zqb[zblk]=zbsl&0xff;zqb[zblk+1]=(zbsl>>>8)&0xff;zqb[zblk+2]=(zbsl>>>16)&0xff;zqb[zblk+3]=(zbsl>>>24)&0xff;}
;function zcmk(zqb,zblk){return(zqb[zblk]+(zqb[zblk+1]<<8)+(zqb[zblk+2]<<16)+(zqb[zblk+3]<<24));}
;function zcml(zqb,zcmm){return 0xff&(zqb>>>(8*zcmm));}
;function zcmn(zqb,tab,zcmo,zcmp,zaff){return(tab[0][zcml(zcmo(zqb,0,zaff),zcmp(0,zaff))]
^tab[1][zcml(zcmo(zqb,1,zaff),zcmp(1,zaff))]
^tab[2][zcml(zcmo(zqb,2,zaff),zcmp(2,zaff))]
^tab[3][zcml(zcmo(zqb,3,zaff),zcmp(3,zaff))]);}
;function zcmq(zcmr,zcms,zcmt,zcmu){return((zcmu<<24)|(zcmt<<16)|(zcms<<8)|zcmr);}
;function zcmv(zqb,zafj,zaff){return zqb;};function zcmw(zafj,zaff){return zafj;}
;function zcmx(zafj,zaff){return((8+zafj-zaff)&3);}
;function zcmy(zqb,zaff){return zcmn(zqb,zcmz,zcmv,zcmx,zaff);}
;function zcna(zqb){return((zqb<<1)^(((zqb>>>7)&1)*zcmd));}
;function zcnb(zqb){return(zcna(zqb)^zqb);};function zcnc(zpb){return zcmq(zpb,0,0,0);}
;function zcnd(zpb){return zcmq(0,zpb,0,0);};function zcne(zpb){return zcmq(0,0,zpb,0);}
;function zcnf(zpb){return zcmq(0,0,0,zpb);};function zcng(zpb){return zcmq(zcna(zpb),zpb,zpb,zcnb(zpb));}
;function zcnh(zpb){return zcmq(zcnb(zpb),zcna(zpb),zpb,zpb);}
;function zcni(zpb){return zcmq(zpb,zcnb(zpb),zcna(zpb),zpb);}
;function zcnj(zpb){return zcmq(zpb,zpb,zcnb(zpb),zcna(zpb));}
;var zcnk=[zcnc(0x01),zcnc(0x02),zcnc(0x04),zcnc(0x08),zcnc(0x10),zcnc(0x20),zcnc(0x40),zcnc(0x80),zcnc(0x1b),zcnc(0x36)];var zcmz=[zcmh(zcnc),zcmh(zcnd),zcmh(zcne),zcmh(zcnf)];var zcnl=[zcmh(zcng),zcmh(zcnh),zcmh(zcni),zcmh(zcnj)];function zcnm(zcnn,zcno,zcnp){var zcnq=new Array(8);zcnp.zcnr=zcma;if(((zcno&7)||zcno<16||zcno>32)&&((zcno&63)||zcno<128||zcno>256)){zcnp.zcns=0;return zcmf;}
zcno>>>=(zcno<128?2:5);zcnp.zcnr=(zcnp.zcnr&~3)|1;zcnp.zcnt[0]=zcnq[0]=zcmk(zcnn,0);zcnp.zcnt[1]=zcnq[1]=zcmk(zcnn,4);zcnp.zcnt[2]=zcnq[2]=zcmk(zcnn,8);zcnp.zcnt[3]=zcnq[3]=zcmk(zcnn,12);var zcnu=function(zvx,zov){zvx[4*(zov)+4]=zcnq[0]^=zcmy(zcnq[3],3)^zcnk[zov];zvx[4*(zov)+5]=zcnq[1]^=zcnq[0];zvx[4*(zov)+6]=zcnq[2]^=zcnq[1];zvx[4*(zov)+7]=zcnq[3]^=zcnq[2];}
var zcnv=function(zvx,zov){zvx[4*(zov)+4]=zcnq[0]^=zcmy(zcnq[3],3)^zcnk[zov];zvx[4*(zov)+5]=zcnq[1]^=zcnq[0];zvx[4*(zov)+6]=zcnq[2]^=zcnq[1];zvx[4*(zov)+7]=zcnq[3]^=zcnq[2];}
var zcnw=function(zvx,zov){zvx[6*(zov)+6]=zcnq[0]^=zcmy(zcnq[5],3)^zcnk[zov];zvx[6*(zov)+7]=zcnq[1]^=zcnq[0];zvx[6*(zov)+8]=zcnq[2]^=zcnq[1];zvx[6*(zov)+9]=zcnq[3]^=zcnq[2];zvx[6*(zov)+10]=zcnq[4]^=zcnq[3];zvx[6*(zov)+11]=zcnq[5]^=zcnq[4];}
var zcnx=function(zvx,zov){zvx[6*(zov)+6]=zcnq[0]^=zcmy(zcnq[5],3)^zcnk[zov];zvx[6*(zov)+7]=zcnq[1]^=zcnq[0];zvx[6*(zov)+8]=zcnq[2]^=zcnq[1];zvx[6*(zov)+9]=zcnq[3]^=zcnq[2];}
var zcny=function(zvx,zov){zvx[8*(zov)+8]=zcnq[0]^=zcmy(zcnq[7],3)^zcnk[zov];zvx[8*(zov)+9]=zcnq[1]^=zcnq[0];zvx[8*(zov)+10]=zcnq[2]^=zcnq[1];zvx[8*(zov)+11]=zcnq[3]^=zcnq[2];zvx[8*(zov)+12]=zcnq[4]^=zcmy(zcnq[3],0);zvx[8*(zov)+13]=zcnq[5]^=zcnq[4];zvx[8*(zov)+14]=zcnq[6]^=zcnq[5];zvx[8*(zov)+15]=zcnq[7]^=zcnq[6];}
var zcnz=function(zvx,zov){zvx[8*(zov)+8]=zcnq[0]^=zcmy(zcnq[7],3)^zcnk[zov];zvx[8*(zov)+9]=zcnq[1]^=zcnq[0];zvx[8*(zov)+10]=zcnq[2]^=zcnq[1];zvx[8*(zov)+11]=zcnq[3]^=zcnq[2];}
switch(zcno){case 4:zcnu(zcnp.zcnt,0);zcnu(zcnp.zcnt,1);zcnu(zcnp.zcnt,2);zcnu(zcnp.zcnt,3);zcnu(zcnp.zcnt,4);zcnu(zcnp.zcnt,5);zcnu(zcnp.zcnt,6);zcnu(zcnp.zcnt,7);zcnu(zcnp.zcnt,8);zcnv(zcnp.zcnt,9);zcnp.zcns=10;break;case 6:zcnp.zcnt[4]=zcnq[4]=zcmk(zcnn+16);zcnp.zcnt[5]=zcnq[5]=zcmk(zcnn+20);zcnw(zcnp.zcnt,0);zcnw(zcnp.zcnt,1);zcnw(zcnp.zcnt,2);zcnw(zcnp.zcnt,3);zcnw(zcnp.zcnt,4);zcnw(zcnp.zcnt,5);zcnw(zcnp.zcnt,6);zcnx(zcnp.zcnt,7);zcnp.zcns=12;break;case 8:zcnp.zcnt[4]=zcnq[4]=zcmk(zcnn+16);zcnp.zcnt[5]=zcnq[5]=zcmk(zcnn+20);zcnp.zcnt[6]=zcnq[6]=zcmk(zcnn+24);zcnp.zcnt[7]=zcnq[7]=zcmk(zcnn+28);zcny(zcnp.zcnt,0);zcny(zcnp.zcnt,1);zcny(zcnp.zcnt,2);zcny(zcnp.zcnt,3);zcny(zcnp.zcnt,4);zcny(zcnp.zcnt,5);zcnz(zcnp.zcnt,6);zcnp.zcns=14;break;default:;}
return zcmg;};function zcoa(zcob,zqb,zvx,zaff){zcob[zaff]=zcmk(zqb,4*zaff)^zvx[zaff];}
;function zcoc(zcob,zqb,zaff){zcmj(zcob,4*zaff,zqb[zaff]);}
;function zcod(zcob,zqb,zvx){zcoa(zcob,zqb,zvx,0);zcoa(zcob,zqb,zvx,1);zcoa(zcob,zqb,zvx,2);zcoa(zcob,zqb,zvx,3);}
;function zcoe(zcob,zqb){zcoc(zcob,zqb,0);zcoc(zcob,zqb,1);zcoc(zcob,zqb,2);zcoc(zcob,zqb,3);}
;function zcof(zqb,zafj,zaff){return zqb[(zafj+zaff)%zcmb];}
;function zcog(zcob,zqb,zvx,zaff){zcob[zaff]=zvx[zaff]^zcmn(zqb,zcnl,zcof,zcmw,zaff);}
;function zcoh(zcob,zqb,zvx,zaff){zcob[zaff]=zvx[zaff]^zcmn(zqb,zcmz,zcof,zcmw,zaff);}
;function zcoi(zcoj,zcob,zqb,zvx){zcoj(zcob,zqb,zvx,0);zcoj(zcob,zqb,zvx,1);zcoj(zcob,zqb,zvx,2);zcoj(zcob,zqb,zvx,3);}
;function zcok(zcol,zcom,zcnp){var zcmr=new Array(4),zcms=new Array(4);var zcon=0;var zvx=zcnp.zcnt;if(!(zcnp.zcnr&1)){return zcmf;}
zcod(zcmr,zcol,[zvx[zcon],zvx[zcon+1],zvx[zcon+2],zvx[zcon+3]]);zcon+=(zcnp.zcns-9)*zcmb;switch(zcnp.zcns){case 14:zcoi(zcog,zcms,zcmr,[zvx[zcon-4*zcmb],zvx[zcon-4*zcmb+1],zvx[zcon-4*zcmb+2],zvx[zcon-4*zcmb+3]]);zcoi(zcog,zcmr,zcms,[zvx[zcon-3*zcmb],zvx[zcon-3*zcmb+1],zvx[zcon-3*zcmb+2],zvx[zcon-3*zcmb+3]]);case 12:zcoi(zcog,zcms,zcmr,zcon-2*zcmb);zcoi(zcog,zcmr,zcms,zcon-zcmb);case 10:zcoi(zcog,zcms,zcmr,[zvx[zcon],zvx[zcon+1],zvx[zcon+2],zvx[zcon+3]]);zcoi(zcog,zcmr,zcms,[zvx[zcon+zcmb],zvx[zcon+zcmb+1],zvx[zcon+zcmb+2],zvx[zcon+zcmb+3]]);zcoi(zcog,zcms,zcmr,[zvx[zcon+2*zcmb],zvx[zcon+2*zcmb+1],zvx[zcon+2*zcmb+2],zvx[zcon+2*zcmb+3]]);zcoi(zcog,zcmr,zcms,[zvx[zcon+3*zcmb],zvx[zcon+3*zcmb+1],zvx[zcon+3*zcmb+2],zvx[zcon+3*zcmb+3]]);zcoi(zcog,zcms,zcmr,[zvx[zcon+4*zcmb],zvx[zcon+4*zcmb+1],zvx[zcon+4*zcmb+2],zvx[zcon+4*zcmb+3]]);zcoi(zcog,zcmr,zcms,[zvx[zcon+5*zcmb],zvx[zcon+5*zcmb+1],zvx[zcon+5*zcmb+2],zvx[zcon+5*zcmb+3]]);zcoi(zcog,zcms,zcmr,[zvx[zcon+6*zcmb],zvx[zcon+6*zcmb+1],zvx[zcon+6*zcmb+2],zvx[zcon+6*zcmb+3]]);zcoi(zcog,zcmr,zcms,[zvx[zcon+7*zcmb],zvx[zcon+7*zcmb+1],zvx[zcon+7*zcmb+2],zvx[zcon+7*zcmb+3]]);zcoi(zcog,zcms,zcmr,[zvx[zcon+8*zcmb],zvx[zcon+8*zcmb+1],zvx[zcon+8*zcmb+2],zvx[zcon+8*zcmb+3]]);zcoi(zcoh,zcmr,zcms,[zvx[zcon+9*zcmb],zvx[zcon+9*zcmb+1],zvx[zcon+9*zcmb+2],zvx[zcon+9*zcmb+3]]);default:;}
zcoe(zcom,zcmr);return zcmg;};function zcoo(){this.zcnt=new Array(zcmc);this.zcns=0;this.zcnr=0;}
;this.zcop=function(){this.zcoq=16;this.zcor=0,this.zcos=0;this.zcot=new Array(this.zcoq);this.zcou=new Array(this.zcoq);this.zcov=new zcoo();}
;this.zcop.prototype={"Init":function(zcow){this.zcor=(zcow<32)?16:((zcow<48)?24:32);for(var zov=0;zov<this.zcov.zcnt.length;zov++){this.zcov.zcnt[zov]=0;}
this.zcov.zcns=0;this.zcov.zcnr=0;for(var zov=0;zov<this.zcot.length;zov++){this.zcot[zov]=0;}
this.zcos=this.zcoq;},"GetMinBlockSize":function(){return 1;}
,"GetKeyLength":function(){return this.zcor;},"SetKey":function(key){zcnm(key,this.zcor,this.zcov);}
,"SetIV":function(zcox,zcoy){for(var zov=0;zov<Math.min(zcoy,this.zcot.length);zov++){this.zcot[zov]=zcox[zov];}
},"Encrypt":function(zato,zcoz){this["EncDecData"](zato,zcoz);}
,"Decrypt":function(zato,zcoz){this["EncDecData"](zato,zcoz);}
,"EncDecData":function(zato,ztb){var zov=0,zayq=this.zcos;while(zov<ztb){if(zayq==this.zcoq){var zoy=0;while(zoy<8&&!++this.zcot[zoy]){++zoy;}
zcok(this.zcot,this.zcou,this.zcov);zayq=0;}zato[zov++]^=this.zcou[zayq++];}
this.zcos=zayq;}};