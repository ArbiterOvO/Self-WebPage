import{_ as f,h as g,r as h,a as o,c as l,b as r,n as d,F as u,i as x,g as I}from"./index-BYeA_NUh.js";const b="/Self-WebPage/assets/UNITY-CltyAeoQ.png",S="/Self-WebPage/assets/JAVA-CoTr3rsx.png",k="/Self-WebPage/assets/VUE-DZSSi5NO.png",w={class:"circleImage"},y=["onClick"],P={style:{width:"150px",height:"150px","border-radius":"50%"}},V=["src"],A=I('<div class="home-text" data-v-f65d7570><p class="title" data-v-f65d7570>欢迎来到我的站点</p><p class="content" data-v-f65d7570>此网站只用于项目和个人介绍</p></div><div class="icon" data-v-f65d7570><img src="'+b+'" data-v-f65d7570><img src="'+S+'" data-v-f65d7570><img src="'+k+'" data-v-f65d7570></div>',2),B={__name:"HomeView",setup(C){const m=e=>`translate(${300*Math.sin(e*Math.PI/180)+300}px, ${300-300*Math.cos(e*Math.PI/180)}px)`,p=g(()=>{let e=6,i=360/e,a=[];for(let s=0;s<e;s++)a.push(s*i);return a=a.map(s=>m(s)),a}),n=e=>new URL("/Self-WebPage/assets/home/"+e+".png",import.meta.url).href,t=h(1);var c=setInterval(()=>{t.value++,t.value>6&&(t.value=1)},3e3);const _=e=>e===t.value?"red solid 5px":"white solid 5px",v=()=>{clearTimeout(c),c=setInterval(()=>{t.value++,t.value>6&&(t.value=1)},3e3)};return(e,i)=>(o(),l(u,null,[r("div",w,[r("ul",{style:d({"background-image":"url("+n(t.value)+")"})},[(o(!0),l(u,null,x(p.value,(a,s)=>(o(),l("li",{key:a,style:d({transform:a,border:_(s+1)}),onClick:M=>(v(),t.value=s+1)},[r("div",P,[r("img",{src:n(s+1),width:"100%",height:"100%"},null,8,V)])],12,y))),128))],4)]),A],64))}},T=f(B,[["__scopeId","data-v-f65d7570"]]);export{T as default};
