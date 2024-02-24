import{T as D}from"./TheHeader-ztNZRtdJ.js";import{_ as S}from"./BaseButton.vue_vue_type_script_setup_true_lang-BVpjQWTa.js";import{u as U,_ as h}from"./parcelStore-CXdca0UY.js";import{d as M,r as p,a as E,c as N,b as m,e as a,f as l,F as C,g as A,u as s,w as c,h as O,o as n,i as b,j as z,k as g,l as k}from"./index-ZZ5Ad1gM.js";import{B as q,a as F}from"./BaseTextarea-oTZ4KgD2.js";import{u as I,a as P,_ as y,b as j}from"./BaseDatePicker.vue_vue_type_script_setup_true_lang-BnLWbi2d.js";const H={class:"d-flex flex-column w-100 h-100"},L={class:"d-flex align-items-center flex-grow-1 my-3 pe-3 overflow-y-auto","data-simplebar":""},Y={key:0},G={key:1,class:"flex-grow-1 mt-5 text-center"},J=a("br",null,null,-1),se=M({__name:"AllRequestsView",setup(K){const x=O(),r=p(!1),i=p(!1);let o=E({id:"",dispatchDate:0,description:"",originCity:"",targetCity:"",parcelType:"",type:"",creatorId:"",creationDate:0});const f=p("by creation date"),w=p(["by sending date","by creation date"]),v=I(),T=U(),d=P(),V=N(()=>d.sortedRequests(f.value)),_=()=>{r.value=!1,d.updateRequest(o)},R=()=>{d.deleteRequest(o.id),i.value=!1},$=u=>{i.value=!0,o.id=u},B=u=>{r.value=!0,o=d.requests.find(t=>t.id===u)};return(u,e)=>(n(),m(C,null,[a("div",H,[l(D,{title:"All created requests"}),l(y,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=t=>f.value=t),"custom-label-class":"me-2",label:"sort:",class:"d-flex align-items-center mt-4",options:w.value},null,8,["modelValue","options"]),a("div",L,[V.value.length?(n(),m("div",Y,[(n(!0),m(C,null,A(V.value,t=>(n(),b(h,{key:t.id,request:t,onDelete:$,onEdit:B},null,8,["request"]))),128))])):(n(),m("p",G,"There are no requests yet 😢"))]),l(S,{class:"mx-auto",title:"Create new request",onClick:e[1]||(e[1]=t=>s(z).push(`/${s(x).params.userId}/create`))})]),l(q,{"is-modal-open":r.value,size:"md",onClose:e[8]||(e[8]=t=>r.value=!1)},{body:c(()=>[a("form",null,[l(y,{modelValue:s(o).originCity,"onUpdate:modelValue":e[2]||(e[2]=t=>s(o).originCity=t),label:"Select the city from which the parcel is sent",class:"mt-4",options:s(v).cities},null,8,["modelValue","options"]),l(y,{modelValue:s(o).targetCity,"onUpdate:modelValue":e[3]||(e[3]=t=>s(o).targetCity=t),label:"Select the city to which the parcel is sent",class:"mt-4",options:s(v).cities},null,8,["modelValue","options"]),s(o).type=="order"?(n(),b(y,{key:0,modelValue:s(o).parcelType,"onUpdate:modelValue":e[4]||(e[4]=t=>s(o).parcelType=t),label:"Type of parcel",class:"mt-4",options:s(T).parcelTypes},null,8,["modelValue","options"])):g("",!0),l(j,{modelValue:s(o).dispatchDate,"onUpdate:modelValue":e[5]||(e[5]=t=>s(o).dispatchDate=t),label:"Date of dispatch",class:"create-delivery__datepicker mt-4","picked-data":s(o).parcelType},null,8,["modelValue","picked-data"]),s(o).type=="order"?(n(),b(F,{key:1,modelValue:s(o).description,"onUpdate:modelValue":e[6]||(e[6]=t=>s(o).description=t),label:"Parcel description",placeholder:"laptop",class:"mt-4"},null,8,["modelValue"])):g("",!0)])]),footer:c(()=>[a("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[7]||(e[7]=t=>r.value=!1)}," Close "),a("button",{type:"button",class:"btn btn-primary",onClick:_},"Save changes")]),_:1},8,["is-modal-open"]),l(q,{"is-modal-open":i.value,size:"md",onClose:e[10]||(e[10]=t=>i.value=!1)},{body:c(()=>[k(" Are you sure "),J,k(" You want to delelte this erquest? ")]),footer:c(()=>[a("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[9]||(e[9]=t=>i.value=!1)}," Close "),a("button",{type:"button",class:"btn btn-danger",onClick:R},"delete")]),_:1},8,["is-modal-open"])],64))}});export{se as default};
