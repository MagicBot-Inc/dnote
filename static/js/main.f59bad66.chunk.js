(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){e.exports=n(343)},341:function(e,t,n){e.exports=n.p+"static/media/template.813e434a.png"},343:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(98),l=n.n(o),c=n(66),u=n(68),i=n(18),m=n(67);m.a.init(c.a);var s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),o=t[0],l=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),p=s[0],g=s[1],d=Object(a.useState)("none"),h=Object(u.a)(d,2),F=h[0],E=h[1];return r.a.createElement(i.View,{activePanel:"home",popout:"making"===F?r.a.createElement(i.ScreenSpinner,null):null},r.a.createElement(i.Panel,{id:"home"},r.a.createElement(i.PanelHeader,null,"\u041d\u0415\u0441\u0434\u0430\u043c"),r.a.createElement(i.FormLayout,{style:{background:"white"}},"shared"===F?r.a.createElement(i.FormStatus,{title:"\u0423\u0440\u0430!",style:{background:"#528bcc",color:"white"}},"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430!"):null,"sharingError"===F?r.a.createElement(i.FormStatus,{title:"\u0416\u0430\u043b\u044c!",state:"error"},"\u041c\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0432\u043e\u0439 \u0442\u043e\u043a\u0435\u043d, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u043e\u0440\u0438"):null,"error"===F?r.a.createElement(i.FormStatus,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",state:"error"},"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430..."):null,r.a.createElement(i.Input,{top:"\u0418\u043c\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430, \u0438\u0437-\u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435 \u0441\u0434\u0430\u0448\u044c",value:o,onChange:function(e){return l(e.currentTarget.value.length<=16?e.currentTarget.value:o)}}),r.a.createElement(i.Input,{top:"\u041f\u0440\u0435\u0434\u043c\u0435\u0442 / \u044d\u043a\u0437\u0430\u043c\u0435\u043d \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0441\u0434\u0430\u0448\u044c",value:p,onChange:function(e){return g(e.currentTarget.value.length<=16?e.currentTarget.value:p)}})),r.a.createElement(i.FixedLayout,{vertical:"bottom",style:{margin:15,paddingRight:30}},r.a.createElement(i.Button,{size:"xl",onClick:function(){E("making"),m.a.generateStoryFromTemplate(n(341),[{font:"96px Arial Black",align:"center",color:"#FFFFFF",value:o,x:540,y:1133},{font:"68px Arial",align:"center",color:"#FFFFFF",value:p,x:540,y:1494}]).then(function(e){m.a.shareStory(6999763,e,{add_to_news:!0}).then(function(){return E("shared")}).catch(function(e){console.error(e),1===e.error_code?E("sharingError"):E("error")})})}},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"))))};n(342);c.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(s,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.f59bad66.chunk.js.map