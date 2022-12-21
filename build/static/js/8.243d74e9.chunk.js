(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{224:function(t,e,n){"use strict";n.r(e);var a=n(14),s=n(3),r=n(1),c=n(2),o=n(18),i=n(6),l=n(13),u=n(35),p=n(25),d=function(t){var e=[].concat([{name:"ls",description:"lists directory content"},{name:"cd",description:"changes the current working directory"},{name:"clear",description:"clears the terminal screen"}],Object(p.a)(t.map((function(t){var e=" ";return t.subPathStrict[0]&&(e+=t.subPathStrict[1].name),{name:t.name[0]+e,description:t.description}})))),n=function(t){var e=t.map((function(t){return t.name.length})),n=Math.max.apply(Math,Object(p.a)(e));return t.map((function(t){return Array(n-t.name.length+1).join(" ")+"\t"}))}(e),a="These shell commands are defined internally.\nType <span class=\"style2\">'help'</span> to see this list.\n\n";return e.forEach((function(t,e){var s='<span class="style2">'.concat(t.name,"</span>").concat(n[e]).concat(t.description,"\n");a+=s})),"".concat(a,'\nAnd more "hidden" commands...')},h=[{name:["resume","./resume","resume.sh","./resume.sh"],action:{RESUME:""},response:"",subPathStrict:[!1],description:"view my resume"},{name:["projects","./projects","projects.app","./projects.app"],action:!1,response:"Under construction \ud83d\udea7\ud83d\udd28",subPathStrict:[!1],description:"checkout my projects"},{name:["neofetch"],action:!1,response:"<pre>".concat('\n<span class="style4">Aditya</span>@<span class="style4">portfolio</span>\n-----------------\n<span class="style2"></span><span class="style4">Name: </span><span class="style1">Aditya Sharma</span>\n<span class="style2"></span><span class="style4">Education: </span><span class="style1">Sophomore, B.Tech @ MUJ</span>\n<span class="style2"></span><span class="style4">CGPA: </span><span class="style1">8.79 </span>\n<span class="style2"></span><span class="style4">Interests: </span><span class="style1">Web-Dev / DevOps</span>\n<span class="style2"></span><span class="style4">Socials: </span><span class="style2"><a target="_blank" href="https://twitter.com/aadityatwt">Twitter</a> <span class="style1">/</span> <a target="_blank" href="https://www.linkedin.com/in/aditya-sharma-47b787201">LinkedIn</a> <span class="style1">/</span> <a target="_blank" href="https://www.github.com/adityassharma-ss/">Github</a></span>\n<span class="style2"></span><span class="style4">Contacts: </span><span class="style2"><a target="_blank" href="mailto:adityashf7@gmail.com?subject=%5BPortfolio%5D&body=Hey%20Aditya!%0D%0A%0D%0AHere\'s%20some%20remarks%20about%20your%20website%3A%20%3Cinsert%20your%20thoughts%20here%20%F0%9F%98%B3%3E%0D%0A%0D%0AFrom%20%3Cinsert%20your%20name%20here%3E">Email</a> <span class="style1">/</span> <a href="">Discord</a> <span class="style1">/</span> <a href="">Telegram</a></span>\n<span class="style4">Danger Zone: </span><span class="style7"><a target="_blank" href="/danger-zone">Do not click this</a></span>\n\n',"</pre>"),subPathStrict:[!1],description:"displays information about me in an aesthetic and visually pleasing way."},{name:["code"],action:!0,response:"",subPathStrict:[!0,{name:".",response:""}],description:"opens a VS code window for this website's source code"},{name:["danger"],action:!0,response:"",subPathStrict:[!1],description:'<span class="style7">\xaf\\_(\u30c4)_/\xaf</span>'},{name:["git"],action:!0,response:"",subPathStrict:[!0,{name:"log",response:""}],description:"lists my github projects"},{name:["twitter"],action:!0,response:'Visit: <a href="https://twitter.com/aadityatwt">aadityatwt</a>',subPathStrict:[!1],description:"checkout my Twitter profile"},{name:["github"],action:!0,response:'Visit: <a href="https://github.com/adityassharma-ss">aditya</a>',subPathStrict:[!1],description:"checkout my github profile"},{name:["linkedin"],action:!0,response:'Visit: <a href="https://www.linkedin.com/in/aditya-sharma-47b787201/">LinkedIn</a>',subPathStrict:[!1],description:"checkout my github profile"},{name:["help"],action:!0,response:"",subPathStrict:[!1],description:"displays this message "},{name:["uname"],action:!0,response:"Darwin MacBook-Pro.local 20.1.0 Darwin Kernel Version 20.1.0: Sun Jul 18 10:32:00 PDT 2021; root:xnu-7195.50.7~2/RELEASE_ARM64_T8101 arm64",subPathStrict:[!1],description:"prints the Darwin OS Kernel version / release / machine name. "},{name:["whoami"],action:!0,response:"Aditya Sharma <br/> I'm a Full Stack Developer & DevOps Engineer",subPathStrict:[!1],description:"prints the full name of the current administrator when invoked"}];h=h.map((function(t){return"help"===t.name[0]&&(t.response="<pre>".concat(d(h),"</pre>")),t}));var b,m,f,y,g,j,O,k,w,v,x=[{name:".github",link:"https://github.com/adityassharma-ss",folder:!0,executable:!1},{name:"src",link:"https://github.com/boidushya/aditya",folder:!0,executable:!1},{name:"resume.sh",link:"",folder:!1,executable:!0},{name:"projects.app",link:"",folder:!1,executable:!0}],S=Object(l.a)({ls:{validArgs:{"/":{action:null,response:"ls: cannot access System Volume Information: Permission Denied"},_dir:{action:null,response:(b=x,b.map((function(t){return'<span class="'.concat(t.folder?"style3":"".concat(t.executable?"style2":"style1"),'">').concat(t.link?'<a target="_blank" href="'.concat(t.link,'">').concat(t.name,"</a>"):"".concat(t.name),"</span>")})).join("  "))},default:{action:null,response:"ls: cannot access %arg%: Permission Denied"}}},cd:{validArgs:function(t){var e={_dir:{action:null,response:""},default:{action:null,response:"cd: cannot access %arg%: Permission Denied"},"~":{action:null,response:""}},n={};return t.forEach((function(t){n[t.name]={action:t.folder?{PATH:t.link}:null,response:t.folder?"":"zsh: cd: %arg%: Not a directory"}})),Object.keys(e).forEach((function(t){n[t]=e[t]})),n}(x)}},function(t){var e={};return t.forEach((function(t){var n={};t.name.forEach((function(a){var s=t.action?Object(u.a)({},t.name[0].toUpperCase(),""):null,r=t.response;n=Object(u.a)({},a,{validArgs:{_dir:{action:s,response:r},default:{action:s,response:r}}}),t.subPathStrict[0]&&(n[a].validArgs[t.subPathStrict[1].name]={action:s,response:t.subPathStrict[1].response}),e=Object(l.a)(Object(l.a)({},n),e)}))})),e}(h)),D=S,E=n(106),A=n(0),P=c.c.span(m||(m=Object(s.a)(["\n\ta {\n\t\tcolor: inherit;\n\t\tbackground: inherit;\n\t\ttext-decoration: none;\n\t}\n\t.style1 {\n\t\tcolor: ",";\n\t}\n\t.style2 {\n\t\tcolor: ",";\n\t}\n\t.style3 {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n\t.style4 {\n\t\tcolor: ",";\n\t}\n\t.style5 {\n\t\tcolor: ",";\n\t}\n\t.style6 {\n\t\tcolor: ",";\n\t}\n\t.style7 {\n\t\tbackground: ",";\n\t\tbackground-size: 1800% 1800%;\n\t\tanimation: rainbow 15s ease infinite;\n\n\t\t@keyframes rainbow {\n\t\t\t0% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\tbackground-position: 100% 19%;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t}\n\t\tcolor: ",";\n\t}\n"])),i.a.bodyFont1,i.a.bodyFont2,i.a.bodyFont2.darken(.75),i.a.bodyFont1,i.a.bodyFont3,i.a.bodyFont4,i.a.bodyFont5,i.a.easterEgg,i.a.bodyFont4),C=function(t){var e=Object(r.useContext)(o.a).setAlertHidden;return Object(r.useEffect)((function(){if(t.action)switch(Object.keys(t.action)[0]){case"PATH":window.open(t.action.PATH);break;case"CODE":document.location.href="/vscode";break;case"DANGER":document.location.href="/danger-zone";break;case"QEMU":document.location.href="/qemu";break;case"RESUME":document.location.href="/resume";break;case"PROJECTS":document.location.href="/projects";break;case"GIT":document.location.href="/git";break;case"HELP":e(!0)}}),[]),Object(A.jsx)(A.Fragment,{})},T=function(t){var e,n=t.split(" ");if(D.hasOwnProperty(n[0])){var a="",s="";return s=a=1===n.length?"_dir":D[n[0]].validArgs.hasOwnProperty(n[1])?n[1]:"default","default"===a&&(s=n[1]),function(t,e){var n=e.data,a=t.response;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(C,{action:t.action}),Object(A.jsx)(P,{dangerouslySetInnerHTML:{__html:a.replace(/%arg%/g,'<span class="style2">'.concat(Object(E.sanitize)(n),"</span>"))}})]})}(D[n[0]].validArgs[a],{data:s})}return e=t,Object(A.jsxs)(P,{children:["zsh: command not found:"," ",Object(A.jsx)("span",{className:"style2",children:Object(E.sanitize)(e)})]})},F=n(78),_=n(150),M=(n(141),Object(c.c)(_.a)(f||(f=Object(s.a)(['\n\tfont-family: "Hack", monospace;\n\tcolor: ',";\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ",";\n\t}\n\tpadding: 0.2rem 0.4rem 0 0.4rem;\n\tline-height: 1.5;\n\twidth: 100%;\n\tmax-height: 80vh;\n\toverflow-x: hidden;\n"])),i.a.bodyFont1,i.a.scrollbarThumb)),H=Object(c.c)(_.a)(y||(y=Object(s.a)(["\n\t// white-space: pre;\n\toverflow: auto;\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ",";\n\t}\n\t// &::-webkit-scrollbar-track {\n\t// \tborder-radius: 10px;\n\t// \tbackground-color: inherit;\n\t// }\n\n\t// &::-webkit-scrollbar {\n\t// \twidth: 0.1rem;\n\t// \theight: 0.5rem;\n\t// \tbackground-color: inherit;\n\t// }\n\n\t// &::-webkit-scrollbar-thumb {\n\t// \tborder-radius: 10px;\n\t// \tbackground-color: ",";\n\t// }\n"])),i.a.scrollbarThumb,i.a.scrollbarThumb),I=c.c.input(g||(g=Object(s.a)(["\n\tfont-family: inherit;\n\tbackground: inherit;\n\tfont-size: inherit;\n\tcolor: inherit;\n\tborder: none;\n\toutline: none;\n\tcaret-color: transparent;\n\twidth: 0;\n\tmax-width: 100ch;\n\t&::selection {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n"])),i.a.bodyBg,i.a.bodyBg.negate()),L=c.c.span(j||(j=Object(s.a)(["\n\tdisplay: flex;\n"]))),z=Object(c.d)(O||(O=Object(s.a)(["\n\tfrom, to {\n\t\tbackground: ",";\n\t}\n\n\t50% {\n\t\tbackground: transparent;\n\t}\n"])),i.a.bodyFont1),R=Object(c.b)(k||(k=Object(s.a)(["\n\tanimation: "," 1s step-end infinite;\n"])),z),X=c.c.div(w||(w=Object(s.a)(["\n\tdisplay: ",";\n\twidth: 1ch;\n\tbackground: ",";\n\tmargin: 0.1rem 0.3rem;\n\tz-index: 2;\n\t","\n"])),(function(t){return t.disabled?"none":"auto"}),i.a.bodyFont1,(function(t){return!t.typing&&R})),B=c.c.label(v||(v=Object(s.a)(["\n\tcolor: ",";\n"])),i.a.labelColor),U=function(t){var e=Object(r.useState)(""),n=Object(a.a)(e,2),s=n[0],c=n[1],i=Object(r.useContext)(o.a),l=i.commands,u=i.setCommand,p=i.path,d=Object(r.useState)(l.length),h=Object(a.a)(d,2),b=h[0],m=h[1],f=Object(r.useState)(!1),y=Object(a.a)(f,2),g=y[0],j=y[1],O=Object(r.useState)(!1),k=Object(a.a)(O,2),w=k[0],v=k[1],x=Object(r.useRef)(),S=Object(r.useRef)(),D=localStorage.getItem("hideHelp");return Object(r.useEffect)((function(){w||(x.current.focus(),x.current.addEventListener("select",(function(t){t.target.selectionStart=t.target.selectionEnd})),x.current.addEventListener("mousedown",(function(t){t.preventDefault()})))}),[]),Object(r.useEffect)((function(){if(!D){var t=new Date,e=setInterval((function(){var e=Math.floor((new Date-t)/1e3);5!==Math.floor(e/60)||w||(c("help"),x.current.style.width=x.current.value.length+"ch")}),1e3);return function(){clearInterval(e)}}}),[w,D]),Object(r.useEffect)((function(){var t=setTimeout((function(){return j(!1)}),200);return function(){return clearTimeout(t)}}),[g]),Object(A.jsxs)(L,{children:[Object(A.jsx)(B,{htmlFor:"input",dangerouslySetInnerHTML:{__html:Object(E.sanitize)(p)}}),Object(A.jsx)(I,{id:"input",type:"text",ref:x,value:s,onBlur:function(t){w||t.target.focus()},onKeyDown:function(e){var n=!1;e.ctrlKey&&(n=!0);var a=parseFloat(S.current.style.transform.slice(11)),r=x.current.value.length,o=Math.abs(Math.floor(a));switch(e.key){case"ArrowLeft":o<=r&&!n?(j(!0),S.current.style.transform="translateX(".concat(a-1,"ch)")):e.preventDefault();break;case"Delete":1===o||n?e.preventDefault():S.current.style.transform="translateX(".concat(a+1,"ch)");break;case"Home":o<=r?S.current.style.transform="translateX(".concat(-r-.5,"ch)"):e.preventDefault();break;case"End":1!==o?S.current.style.transform="translateX(-0.5ch)":e.preventDefault();break;case"ArrowRight":1===o||n?e.preventDefault():(j(!0),S.current.style.transform="translateX(".concat(a+1,"ch)"));break;case"ArrowUp":if(b>0){m(b-1);var i=l[b-1];c(i),e.target.style.width=i.length+"ch",S.current.style.transform="translateX(".concat(-i.length-.5,"ch)")}break;case"ArrowDown":if(b<=l.length-1)if(b===l.length-1)c(""),e.target.style.width="0ch",S.current.style.transform="translateX(-0.5ch)";else{m(b+1);var p=l[b+1];c(p),e.target.style.width=p.length+"ch",S.current.style.transform="translateX(".concat(-p.length-.5,"ch)")}break;case"Enter":v(!0),t.setData(s),t.setChild(t.child+1),u(s)}},onChange:function(t){t.preventDefault(),t.target.value.length<=100&&(c(t.target.value.toLowerCase()),j(!0),t.target.style.width=t.target.value.length+"ch")},spellCheck:!1,autoComplete:"off",autoCorrect:"off"}),Object(A.jsx)(X,{ref:S,typing:g,disabled:w,style:{transform:"translateX(-0.5ch)"}})]})},V=function(t){return Object(A.jsx)(H,{children:t.content})},J=function(t){var e=Object(r.useState)(""),n=Object(a.a)(e,2),s=n[0],c=n[1],o=Object(r.useState)(""),i=Object(a.a)(o,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){if(l.length){"clear"===l.trim().toLowerCase()&&(t.setActive(!1),t.setChild(1));var e=T(l.trim());c(e)}}),[l,t]),Object(A.jsxs)(M,{children:[Object(A.jsx)(U,{setChild:t.setChild,child:t.child,setData:u,path:t.path}),Object(A.jsx)(V,{content:s})]})};e.default=function(){var t=Object(r.useState)(1),e=Object(a.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(!0),o=Object(a.a)(c,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){l(!0)}),[i]),Object(A.jsx)(F.a,{children:Object(A.jsx)(M,{children:Array.from(Array(n).keys()).map((function(t){return Object(A.jsx)(J,{setChild:s,setActive:l,child:n},0===t?i&&t:t)}))})})}},78:function(t,e,n){"use strict";var a,s=n(3),r=(n(1),n(2)),c=n(6),o=n(0),i=r.c.div(a||(a=Object(s.a)(["\n\tdisplay: flex;\n\tflex: 1;\n\tmax-width: 100%;\n\tmin-height: 32rem;\n\theight: 100%;\n\tborder-radius: 0 0 0.3rem 0.3rem;\n\tborder: 1px solid ",";\n"])),c.a.bodyBorder);e.a=function(t){return Object(o.jsx)(i,{children:t.children})}}}]);
//# sourceMappingURL=8.243d74e9.chunk.js.map