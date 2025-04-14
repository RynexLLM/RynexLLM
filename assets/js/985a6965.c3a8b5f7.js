"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4086],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="Creating Your First Sequential Chain",l={unversionedId:"getting-started-tutorial/building-a-multi-step-chain",id:"getting-started-tutorial/building-a-multi-step-chain",title:"Creating Your First Sequential Chain",description:"Having problems? Don't worry, reach out on discord and we will help you out.",source:"@site/docs/getting-started-tutorial/04-building-a-multi-step-chain.md",sourceDirName:"getting-started-tutorial",slug:"/getting-started-tutorial/building-a-multi-step-chain",permalink:"/docs/getting-started-tutorial/building-a-multi-step-chain",draft:!1,editUrl:"https://github.com/sobelio/llm-chain/tree/main/docs/docs/getting-started-tutorial/04-building-a-multi-step-chain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Using Prompt Templates and Parameters",permalink:"/docs/getting-started-tutorial/using-prompt-templates-and-parameters"},next:{title:"Summarizing Text with Map-Reduce in LLM-Chain",permalink:"/docs/getting-started-tutorial/summarizing-text-with-map-reduce"}},s={},p=[{value:"Best Practices and Tips",id:"best-practices-and-tips",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-your-first-sequential-chain"},"Creating Your First Sequential Chain"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Having problems? Don't worry, reach out on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/kewN9Gtjt2"},"discord")," and we will help you out.")),(0,r.kt)("p",null,"Sequential chains in LLM-Chain allow you to execute a series of steps, with the output of each step feeding into the next one. This tutorial will guide you through creating a sequential chain, extending it with more steps, and provide some best practices and tips."),(0,r.kt)("p",null,"Here's a Rust program that demonstrates how to create a sequential chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use llm_chain::parameters;\nuse llm_chain::step::Step;\nuse llm_chain::traits::Executor as ExecutorTrait;\nuse llm_chain::{chains::sequential::Chain, prompt};\nuse llm_chain_openai::chatgpt::Executor;\n\n#[tokio::main(flavor = "current_thread")]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    // Create a new ChatGPT executor with the default settings\n    let exec = Executor::new()?;\n\n    // Create a chain of steps with two prompts\n    let chain: Chain = Chain::new(vec![\n        // First step: make a personalized birthday email\n        Step::for_prompt_template(\n            prompt!("You are a bot for making personalized greetings", "Make personalized birthday e-mail to the whole company for {{name}} who has their birthday on {{date}}. Include their name")\n        ),\n\n        // Second step: summarize the email into a tweet. Importantly, the text parameter becomes the result of the previous prompt.\n        Step::for_prompt_template(\n            prompt!( "You are an assistant for managing social media accounts for a company", "Summarize this email into a tweet to be sent by the company, use emoji if you can. \\n--\\n{{text}}")\n        )\n    ]);\n\n    // Run the chain with the provided parameters\n    let res = chain\n        .run(\n            // Create a Parameters object with key-value pairs for the placeholders\n            parameters!("name" => "Emil", "date" => "February 30th 2023"),\n            &exec,\n        )\n        .await\n        .unwrap();\n\n    // Print the result to the console\n    println!("{}", res.to_immediate().await?.as_content());\n    Ok(())\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We start by importing the necessary modules from the ",(0,r.kt)("inlineCode",{parentName:"p"},"llm_chain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"llm_chain_openai")," libraries.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The main async function is defined, using Tokio as the runtime.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Executor")," with the default settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," that contains two steps, each with a different prompt:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The first step has a prompt to make a personalized birthday email for a company."),(0,r.kt)("li",{parentName:"ul"},"The second step has a prompt to summarize the email into a tweet.")),(0,r.kt)("p",{parentName:"li"},"Both prompts use placeholders (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"{{name}}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{{date}}"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"{{text}}"),") that will be replaced with specific values later. Importantly, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"{{text}}")," will be replaced by result of the first step in the chain.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We run the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," with the provided parameters:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Parameters")," object with key-value pairs for the placeholders: ",(0,r.kt)("inlineCode",{parentName:"li"},'("name", "Emil")')," and ",(0,r.kt)("inlineCode",{parentName:"li"},'("date", "February 30th 2023")'),"."),(0,r.kt)("li",{parentName:"ul"},"We pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"Parameters")," object and the ",(0,r.kt)("inlineCode",{parentName:"li"},"Executor")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"run()")," method."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We unwrap the result and print it to the console."))),(0,r.kt)("h2",{id:"best-practices-and-tips"},"Best Practices and Tips"),(0,r.kt)("p",null,"When working with sequential chains, consider the following tips and best practices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use descriptive and clear instructions for the system role to help guide the LLM."),(0,r.kt)("li",{parentName:"ol"},"Keep the chain as short and simple as possible. Longer chains are harder to manage and debug."),(0,r.kt)("li",{parentName:"ol"},"Test each step independently before testing the entire sequence.")),(0,r.kt)("p",null,"For the next tutorial we will switch our focus from sequential to map-reduce chains. Map reduce chains are more complicated than sequential chains but allow us to do things that sequential chains can't. Stay tuned!"))}m.isMDXComponent=!0}}]);