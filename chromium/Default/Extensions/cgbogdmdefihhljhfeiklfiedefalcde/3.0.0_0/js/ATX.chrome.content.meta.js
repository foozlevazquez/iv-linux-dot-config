
var at_ogTitle,at_ogUrl,at_ogDescription,at_ogImage;init();function init(){var tags=document.getElementsByTagName("meta");for(var i=0;i<tags.length;i++){var nodes=tags[i].attributes;for(var j=0;j<nodes.length;j++){var property=(nodes.getNamedItem("property")&&typeof(nodes.getNamedItem("property"))!=undefined)?nodes.getNamedItem("property").value:"";switch(property){case"og:title":at_ogTitle=nodes.getNamedItem("content").value;break;case"og:description":at_ogDescription=nodes.getNamedItem("content").value;break;case"og:url":at_ogUrl=nodes.getNamedItem("content").value;break;case"og:image":at_ogImage=nodes.getNamedItem("content").value;break;default:break;}}}
chrome.extension.sendRequest({message:"metaTags",tags:{title:at_ogTitle,url:at_ogUrl,image:at_ogImage,description:at_ogDescription}});}