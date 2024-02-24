import{a as v}from"./BaseDatePicker.vue_vue_type_script_setup_true_lang-BnLWbi2d.js";import{d as u,o as r,b as n,e,t as o,k as d,F as h,g as q,u as m,s as D,c as T,l as i,i as V,m as k}from"./index-ZZ5Ad1gM.js";const C=s=>{const l=new Date(s);return new Intl.DateTimeFormat("en-GB",{dateStyle:"short",timeStyle:"short"}).format(l)},_=s=>{const l=new Date(s);return new Intl.DateTimeFormat("en-GB",{dateStyle:"short"}).format(l)},S={key:0,class:"mb-1"},B={class:"list-group list-group-numbered list-group-item-warning"},x=u({__name:"BaseList",props:{label:{type:String,default:""},list:{type:Array,default:()=>[]}},setup(s){return(l,c)=>(r(),n(h,null,[s.label?(r(),n("p",S,[e("strong",null,o(s.label),1)])):d("",!0),e("ol",B,[(r(!0),n(h,null,q(s.list,a=>(r(),n("li",{key:a.id,class:"list-group-item"},o(`${a.originCity} > ${a.targetCity}, ${m(_)(a.dispatchDate)} | ${a.type}`),1))),128))])],64))}}),z={class:"card text-bg-warning mb-3"},$={class:"card-header d-flex align-items-center justify-content-between"},F={class:"card-title mb-0"},M=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",class:"bi bi-trash",viewBox:"0 0 16 16"},[e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),e("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1),H=[M],R=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",class:"bi bi-pencil",viewBox:"0 0 16 16"},[e("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"})],-1),L=[R],A={class:"card-body"},G={class:"card-text mb-2"},N=e("span",{class:"fw-bold me-1"},"From:",-1),I={class:"card-text mb-2"},j=e("span",{class:"fw-bold me-1"},"To:",-1),E={key:0,class:"card-text mb-2"},O=e("span",{class:"fw-bold me-1"},"parcel Type:",-1),P={class:"card-text mb-2"},U=e("span",{class:"fw-bold me-1"},"Date of sending:",-1),J={class:"card-text mb-2"},K=e("span",{class:"fw-bold me-1"},"Date of creation:",-1),Q={key:1,class:"card-text mb-2"},W=e("span",{class:"fw-bold me-1"}," Description: ",-1),ee=u({__name:"RequestCard",props:{request:{}},emits:["edit","delete"],setup(s,{emit:l}){const{request:c}=s,a=l,b=v(),{matchedRequests:f}=D(b),p=T(()=>f.value(c)),g=t=>t[0].toUpperCase()+t.slice(1),y=()=>{a("edit",c.id)},w=()=>{a("delete",c.id)};return(t,X)=>(r(),n("div",z,[e("div",$,[e("h5",F,o(`${g(t.request.type)} Request`),1),e("div",{class:"d-flex"},[e("button",{type:"button",class:"btn","aria-label":"delete",onClick:w},H),e("button",{type:"button",class:"btn","aria-label":"edit",onClick:y},L)])]),e("div",A,[e("p",G,[N,i(o(t.request.originCity),1)]),e("p",I,[j,i(o(t.request.targetCity),1)]),t.request.parcelType?(r(),n("p",E,[O,i(o(t.request.parcelType),1)])):d("",!0),e("p",P,[U,i(o(m(_)(t.request.dispatchDate)),1)]),e("p",J,[K,i(o(m(C)(t.request.creationDate)),1)]),t.request.description?(r(),n("p",Q,[W,i(" "+o(t.request.description),1)])):d("",!0),p.value.length?(r(),V(x,{key:2,label:"Simmilar requests:",list:p.value},null,8,["list"])):d("",!0)])]))}}),te=k("parcelStore",()=>({parcelTypes:["Gadgets","Drinks","Clothes","Medicines","Other"]}));export{ee as _,te as u};