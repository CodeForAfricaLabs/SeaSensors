(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(150),s=a(494),c=a.n(s),m=a(162),u={resourceImage:{width:"100%",height:"786px",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url("+c.a+")",minWidth:"1024px",backgroundPosition:"50% 35%",top:"0",left:"0"}};function p(e){var t=e.classes;return i.a.createElement(m.a,{classes:t,subtitleTexts:"Lorem Ipsum Dolor sit.",mediaResources:"Media Resources."})}p.propTypes={classes:l.a.shape().isRequired};var f=Object(o.withStyles)(u)(p),d=a(175),g=a(177),h=(a(166),a(7)),x=a.n(h),k=a(144);function b(e){var t=e.classes,a=e.title,n=e.text,r=e.link,l=e.link2,o="";return l&&(o=i.a.createElement(k.a,{className:t.linkText},l)),i.a.createElement(k.b,{className:t.card},i.a.createElement(k.c,null,i.a.createElement(k.e,null,i.a.createElement(k.h,{gutterBottom:!0,variant:"h5",component:"h2",className:t.titleText},a),i.a.createElement(k.h,{component:"p",className:t.cardText},n))),i.a.createElement(k.d,null,i.a.createElement("div",{className:t.links},i.a.createElement(k.a,{size:"small",className:t.linkText},r),o)))}b.propTypes={classes:l.a.shape().isRequired,title:l.a.string.isRequired,text:l.a.string.isRequired,link:l.a.string.isRequired,link2:l.a.string.isRequired};var y=Object(o.withStyles)({card:{width:"315px",paddingLeft:"50px",height:"450.2px"},links:{display:"grid"},linkText:{width:"100%",color:"#77064c",height:"34.8px",fontSize:"16.8px",fontStyle:"normal",fontFamily:"Montserrat",fontWeight:"bold",lineHeight:"24.8px",fontStretch:"normal",textTransform:"none",letterSpacing:"0.6px"},titleText:{width:"242.4px",height:"69.7px",fontFamily:"Oswald",fontSize:"34px",fontWeight:"bold",fontStyle:"normal",fontStretch:"normal",lineHeight:"0.99",letterSpacing:"1.7px",color:"#023256",marginTop:"90px"},cardText:{width:"219.8px",height:"128.3px",fontFamily:"Montserrat",fontSize:"15px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"2.5",letterSpacing:"1px",color:"#023256"}})(b),v=[{title:"Data",text:"Lorem ipsum dolor sit amet conc tetur adipi scing elit lorem.",link:"Data Link 1"},{title:"Video",text:"Consec tetur adipisc ing elit lorem ipsum.",link:"Video Link 1",link2:"Video Link 2"},{title:"Research",text:"Lorem ipsum dolor sit amet conc tetur adipi scing elit",link:"Link to Gill’s research"},{title:"Visualisations",text:"Lorem ipsum dolor sit amet conse ctetur.",link:"Visualisation Link"}],S={cardStyle:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"#ffffff",boxShadow:"none",marginTop:"95px",marginBottom:"65px"},parentCard:{width:"100%",height:"auto",alignItems:"center",justifyContent:"center",backgroundColor:"#ffffff"}},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={resourceVideos:v},a}return x()(t,e),t.prototype.render=function(){var e=this.state.resourceVideos;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:S.parentCard},i.a.createElement("div",{style:S.cardStyle},e.map(function(e){return i.a.createElement(y,{key:e.title,title:e.title,text:e.text,link:e.link,link2:e.link2})}))))},t}(n.Component),w=a(158);a(165);t.default=Object(w.a)(function(){return i.a.createElement("div",{className:"main-container-parent"},i.a.createElement(f,null),i.a.createElement(E,null),i.a.createElement(d.a,null),i.a.createElement(g.a,null))})},162:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(144),s=a(150),c=a(163),m=a.n(c),u=a(174);function p(e){var t=e.subtitleTexts,a=e.mediaResources,n=e.classes;return i.a.createElement("div",{className:n.resourceImage},i.a.createElement(u.a,null),i.a.createElement("div",{className:n.parentHeaderText},i.a.createElement("div",{className:n.subTitle},i.a.createElement("div",{className:n.subtitleRule}),i.a.createElement(o.h,{variant:"body1",gutterBottom:!0,className:n.subtitleText},t)),i.a.createElement(o.h,{variant:"body1",gutterBottom:!0,className:n.mediaResources},a),i.a.createElement("div",{className:n.arrowBack},i.a.createElement("img",{src:m.a,alt:"Arrow back"}))))}p.propTypes={classes:l.a.shape().isRequired,subtitleTexts:l.a.string.isRequired,mediaResources:l.a.string.isRequired},t.a=Object(s.withStyles)({parentHeaderText:{position:"relative",top:"30%",padding:"0 5%"},subTitle:{display:"flex",position:"relative",alignItems:"center"},subtitleRule:{width:"22.5px",height:"2px",backgroundColor:"#ffffff",marginRight:"20px"},subtitleText:{height:" 24px",fontFamily:"Oswald",fontSize:"16px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.83",letterSpacing:"4.4px",color:"#ffffff"},mediaResources:{height:"115.5px",fontFamily:"Oswald",fontSize:"88px",fontWeight:"bold",fontStyle:"normal",fontStretch:"normal",letterSpacing:"0.8px",color:"#ffffff",marginBottom:"2em"},arrowBack:{transform:"rotate(180deg)",display:"flex",position:"relative",justifyContent:"flex-end"}})(p)},165:function(e,t,a){},166:function(e,t,a){"use strict";a(196)("link",function(e){return function(t){return e(this,"a","href",t)}})},196:function(e,t,a){var n=a(12),i=a(16),r=a(19),l=/"/g,o=function(e,t,a,n){var i=String(r(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},494:function(e,t,a){e.exports=a.p+"static/Turtle-d81fab8f414076f34a017f04dc373132.jpg"}}]);
//# sourceMappingURL=component---src-pages-resources-js-5f321f89052e1e0f558e.js.map