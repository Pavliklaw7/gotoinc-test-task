import{d as n,x as c,h as d,r as u,o as m,b as h,e as t,t as a,l as v,f as _,u as o,v as p}from"./index-CaVSI6px.js";import{_ as f}from"./BaseButton.vue_vue_type_script_setup_true_lang-B6G9Qu0Z.js";const b={class:"toast-container position-fixed top-0 end-0 p-3"},w={class:"toast-header"},g=t("div",{class:"me-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-archive",viewBox:"0 0 16 16"},[t("path",{d:"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"})])],-1),x={class:"me-auto"},y=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),V={class:"toast-body"},k=n({__name:"BaseToast",props:{title:{type:String,default:"Title"},text:{type:String,default:"Hello, world! This is a toast message."}},setup(s){const i=c(),r=d(),l=u(!0);return(z,e)=>(m(),h("div",b,[t("div",{id:"liveToast",class:p(["toast",{show:l.value}]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",w,[g,t("strong",x,a(s.title),1),y]),t("div",V,[v(a(s.text)+" ",1),_(f,{class:"create-delivery-request__submit mt-2",type:"submit",title:"View my requests",size:"sm",onClick:e[0]||(e[0]=B=>o(i).push(`/${o(r).params.userId}/requests`))})])],2)]))}});export{k as _};
