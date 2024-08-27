"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"dev-setup",title:"Development Setup",sidebar_label:"Development Setup",sidebar_position:3},a="Contributing to llm-chain",l={unversionedId:"dev-setup",id:"dev-setup",title:"Development Setup",description:"First of all, thank you for considering contributing to our project! \ud83c\udf89 We are delighted to have you here and truly appreciate your interest in making our project even better. Your contributions and ideas are highly valued.",source:"@site/docs/development-setup.md",sourceDirName:".",slug:"/dev-setup",permalink:"/llm-chain/docs/dev-setup",draft:!1,editUrl:"https://github.com/sobelio/llm-chain/tree/main/docs/docs/development-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"dev-setup",title:"Development Setup",sidebar_label:"Development Setup",sidebar_position:3},sidebar:"sidebar",previous:{title:"Summarizing Text with Map-Reduce in LLM-Chain",permalink:"/llm-chain/docs/getting-started-tutorial/summarizing-text-with-map-reduce"}},u={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Before You Contribute",id:"before-you-contribute",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-llm-chain"},"Contributing to ",(0,o.kt)("inlineCode",{parentName:"h1"},"llm-chain")),(0,o.kt)("p",null,"First of all, thank you for considering contributing to our project! \ud83c\udf89 We are delighted to have you here and truly appreciate your interest in making our project even better. Your contributions and ideas are highly valued."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make your own fork of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sobelio/llm-chain"},(0,o.kt)("inlineCode",{parentName:"a"},"llm-chain")),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git clone")," your fork to your local machine."),(0,o.kt)("li",{parentName:"ol"},"Follow the instructions on the ",(0,o.kt)("a",{parentName:"li",href:"https://rustup.rs/"},"rustup website")," to install Rust."),(0,o.kt)("li",{parentName:"ol"},"Fetch the project's submodules with ",(0,o.kt)("inlineCode",{parentName:"li"},"git submodule update")),(0,o.kt)("li",{parentName:"ol"},"Test that everything went well with ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo test")),(0,o.kt)("li",{parentName:"ol"},"Make your changes in a new branch, following the coding guidelines and best practices."),(0,o.kt)("li",{parentName:"ol"},"Commit and push your changes to your fork."),(0,o.kt)("li",{parentName:"ol"},"Open a pull request against the main repository. \ud83d\ude80")),(0,o.kt)("h2",{id:"before-you-contribute"},"Before You Contribute"),(0,o.kt)("p",null,"We are open to new ideas and contributions that align with the project's goals and vision. However, if you're planning on working on something significantly different from what's already in the project, we strongly recommend getting in touch with us before you start."),(0,o.kt)("p",null,"You can reach out to us by opening an issue, starting a discussion, or sending an email. This way, we can discuss your ideas, provide guidance, and ensure that your efforts are more likely to be merged into the project."))}d.isMDXComponent=!0}}]);