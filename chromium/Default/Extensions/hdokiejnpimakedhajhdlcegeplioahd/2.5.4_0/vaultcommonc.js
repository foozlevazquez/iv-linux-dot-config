var tabnames="treepane ffpane identpane sharepane credmonpane entpane videopane".split(" "),g_activetab=null,g_lasttab="";this.inittabs=function(){g_activetab=document.getElementById("sites");g_activetab.className+=" activetab"};
this.ontabchange=function(b){for(var a=0;a<tabnames.length;a++)document.getElementById(tabnames[a])&&(document.getElementById(tabnames[a]).style.display="none",g_activetab&&(g_activetab.className=trim(g_activetab.className.replace("activetab",""))));a=document.getElementById("q")?document.getElementById("q"):document.getElementById("lpsearchstr");""!=g_lasttab&&a&&(""!=a.value&&"undefined"!=typeof maintabs)&&(a.value="",SearchTree(g_lasttab));a=b.getAttribute("tabid");document.getElementById(tabnames[a]).style.display=
"";g_lasttab=b.id;g_activetab=b;g_activetab.className+=" activetab";document.getElementById("expandcollapse")&&(document.getElementById("expandcollapse").style.display="0"==a?"":"none");document.getElementById("creategrouprow")&&(document.getElementById("creategrouprow").style.display="0"==a?"":"none");"ff"==g_lasttab&&populateff("");"ident"==g_lasttab&&populateident("");"shares"==g_lasttab&&"function"==typeof populateshares_remote&&populateshares_remote();"credmon"==g_lasttab&&populatealerts("");
"enterprise"==g_lasttab&&loadenterprise();"video"==g_lasttab?loadvideo():hidevideo();updateActionMenu(a)};
this.updateActionMenu=function(b){var a="Add Site;Add Profile;Add Identity;;Add Profile;;".split(";");document.getElementById("addsite").style.display="   none  none none none".split(" ")[b];document.getElementById("addsecurenote").style.display=" none none none none none none none".split(" ")[b];document.getElementById("addsitetext").innerHTML="undefined"!=typeof translations[a[b]]?translations[a[b]]:a[b]};
this.loadenterprise=function(){var b="undefined"!=typeof baseurl?baseurl:"",a=document.getElementById("entpane");if(!document.getElementById("entiframe")){var c=document.createElement("iframe");c.id="entiframe";c.type="content";c.className="overviewiframe";c.setAttribute("src",b+"enterprise_overview2.php");a.appendChild(c)}};
this.loadvideo=function(){var b="undefined"!=typeof baseurl?baseurl:"",a=document.getElementById("videopane");if(!document.getElementById("videoiframe")){var c=document.createElement("iframe");c.id="videoiframe";c.type="content";c.className="overviewiframe";c.setAttribute("src",b+"video_overview.php");a.appendChild(c)}};this.hidevideo=function(){try{var b=document.getElementById("videoiframe");if(b){var a=document.getElementById("videopane");a&&b.parentNode==a&&a.removeChild(b)}}catch(c){}};
this.populateffcommon=function(b,a){var c="undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl,k="undefined"!=typeof baseurl?baseurl:"",j=document.getElementById("ffpane");if(0==b.length&&"undefined"==typeof g_no_overview){if(!document.getElementById("ffiframe")){for(;j.children.length;)j.removeChild(j.children[0]);c=document.createElement("iframe");c.id="ffiframe";c.type="content";c.className="overviewiframe";c.setAttribute("src",k+"formfill_overview.php");c.setAttribute("frameborder","0");j.appendChild(c)}}else{for(;j.children.length;)j.removeChild(j.children[0]);
a=a.toLowerCase();k=document.createElement("table");k.className="vault-table";for(var g={},f=0;f<b.length;f++){var d=b[f],m="string"==typeof d.decprofilename?d.decprofilename:d.profilename;if(!(""!=a&&-1==m.indexOf(a))){var l=document.createElement("tr");l.className="table-row";var h=document.createElement("td"),e=document.createElement("td");0==f?(h.className+=" firstrowleft",e.className+=" firstrowright"):f==b.length-1&&(h.className+=" lastrowleft",e.className+=" lastrowright");e.align="right";
h.innerHTML="<a href='#' id='launchffid"+of(d.ffid)+"'><img src='"+c+"images/vaultff.png' style='border:0px'/>"+of(m)+"</a>";g["launchffid"+d.ffid]=function(){openff(this.id.substring(10));return!1};e.innerHTML="<a href='#' id='editffid"+of(d.ffid)+"' title='"+gs("Edit")+"'><img src='"+c+"images/vaultedit.png' style='border:0px'/></a> | ";g["editffid"+d.ffid]=function(){openff(this.id.substring(8));return!1};"undefined"==typeof g_hideprofilecopy&&(e.innerHTML+="<a href='#' id='copyffid"+of(d.ffid)+
"' title='"+gs("Copy")+"'><img src='"+c+"images/vaultcopy.png' style='border:0px'/></a> | ",g["copyffid"+d.ffid]=function(){copyff(this.id.substring(8));return!1});e.innerHTML+="<a href='#' id='deleteffid"+of(d.ffid)+"' title='"+gs("Delete")+"'><img src='"+c+"images/vaultdelete.png' style='border:0px'/></a>";g["deleteffid"+d.ffid]=function(){delff(this.id.substring(10));return!1};l.appendChild(h);l.appendChild(e);k.appendChild(l)}}j.appendChild(k);for(f in g)document.getElementById(f).onclick=g[f]}};
function populateidentcommon(b,a){for(var c=document.getElementById("identpane");c.children.length;)c.removeChild(c.children[0]);var k="undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl;a=a.toLowerCase();var j=document.createElement("table");j.className="vault-table";for(var g={},f=0;f<b.length;f++){var d=b[f],m="string"==typeof d.deciname?d.deciname:d.iname;if(!(""!=a&&-1==m.indexOf(a))){var l=document.createElement("tr");l.className="table-row";var h=document.createElement("td"),e=document.createElement("td");
0==f?(h.className+=" firstrowleft",e.className+=" firstrowright"):f==b.length-1&&(h.className+=" lastrowleft",e.className+=" lastrowright");e.align="right";h.innerHTML="<a href='#' id='launchident"+of(d.iid)+"'><img src='"+k+"images/vaultidentity.png' style='border:0px'/>"+of(m)+"</a>";g["launchident"+d.iid]=function(){openident(this.id.substring(11));return!1};e.innerHTML="<a href='#' id='editident"+of(d.iid)+"' title='"+gs("Edit")+"'><img src='"+k+"images/vaultedit.png' style='border:0px'/></a> | ";
g["editident"+d.iid]=function(){openident(this.id.substring(9));return!1};"undefined"==typeof g_hideidentcopy&&(e.innerHTML+="<a href='#' id='copyident"+of(d.iid)+"' title='"+gs("Copy")+"'><img src='"+k+"images/vaultcopy.png' style='border:0px'/></a> | ",g["copyident"+d.iid]=function(){copyident(this.id.substring(9));return!1});e.innerHTML+="<a href='#' id='deleteident"+of(d.iid)+"' title='"+gs("Delete")+"'><img src='"+k+"images/vaultdelete.png' style='border:0px'/></a>";g["deleteident"+d.iid]=function(){delident(this.id.substring(11));
return!1};l.appendChild(h);l.appendChild(e);j.appendChild(l)}}c.appendChild(j);for(f in g)document.getElementById(f).onclick=g[f]}function cleariframe(b){try{if(document.getElementById(b))for(;document.getElementById(b).children.length;)document.getElementById(b).removeChild(document.getElementById(b).children[0])}catch(a){}};