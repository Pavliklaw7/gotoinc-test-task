import{d as o,b as t,t as l,k as d,e as c,v as u,o as a}from"./index-CaVSI6px.js";const b={key:0,class:"mb-1"},m=["disabled"],k=o({__name:"BaseButton",props:{title:{type:String,default:"Submit"},label:{type:String,default:""},size:{type:String,default:"lg"},type:{type:String,default:"button"},disabled:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:n}){const i=()=>{s("click")},s=n;return(r,f)=>(a(),t("div",null,[e.label?(a(),t("label",b,l(e.label),1)):d("",!0),c("button",{class:u([`btn btn-${e.size} btn-warning`,{"w-100":e.fullWidth}]),disabled:e.disabled,onClick:i},l(e.title),11,m)]))}});export{k as _};
