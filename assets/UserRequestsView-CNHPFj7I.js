import{T as U}from"./TheHeader-CH8uDAeO.js";import{_ as M}from"./BaseButton.vue_vue_type_script_setup_true_lang-B6G9Qu0Z.js";import{d as E,r as p,c as C,a as I,b as m,e as l,f as a,u as s,F as k,g as N,w as c,h as O,o as n,i as b,j as z,k as g,l as q}from"./index-CaVSI6px.js";import{u as A,_ as F}from"./parcelStore-BqWtYT0k.js";import{u as P,a as j,_ as y,b as H}from"./BaseDatePicker.vue_vue_type_script_setup_true_lang-z6IvZbAh.js";import{B as w,a as L}from"./BaseTextarea-CBO5QDPI.js";const Y={class:"d-flex flex-column h-100 w-100"},G={class:"d-flex align-items-center flex-grow-1 my-3 pe-3 overflow-y-auto","data-simplebar":""},J={key:0},K={key:1,class:"mt-4 text-center"},Q=l("br",null,null,-1),ae=E({__name:"UserRequestsView",setup(W){const x=window.history.length,v=O(),i=p(!1),d=p(!1),h=C(()=>u.sortedRequests(f.value));let o=I({id:"",dispatchDate:0,description:"",originCity:"",targetCity:"",parcelType:"",type:"",creatorId:"",creationDate:0});const f=p("by creation date"),D=p(["by sending date","by creation date"]),V=P(),T=A(),u=j(),_=C(()=>u.requests.filter(r=>r.creatorId===v.params.userId)),R=()=>{i.value=!1,u.updateRequest(o)},S=()=>{u.deleteRequest(o.id),d.value=!1},$=r=>{d.value=!0,o.id=r},B=r=>{i.value=!0;const e=u.currentRequest(r);o={...e,dispatchDate:e.dispatchDate}};return(r,e)=>(n(),m(k,null,[l("div",Y,[a(U,{title:"All your request","is-nav":!!s(x)},null,8,["is-nav"]),a(y,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=t=>f.value=t),"custom-label-class":"me-2",label:"sort:",class:"d-flex align-items-center mt-4",options:D.value},null,8,["modelValue","options"]),l("div",G,[_.value.length?(n(),m("div",J,[(n(!0),m(k,null,N(h.value,t=>(n(),b(F,{key:t.id,request:t,onDelete:$,onEdit:B},null,8,["request"]))),128))])):(n(),m("div",K,"There are no requests yet 😢"))]),a(M,{class:"mx-auto",title:"Create new request",onClick:e[1]||(e[1]=t=>s(z).push(`/${s(v).params.userId}/create`))})]),a(w,{"is-modal-open":i.value,size:"md",onClose:e[8]||(e[8]=t=>i.value=!1)},{body:c(()=>[l("form",null,[a(y,{modelValue:s(o).originCity,"onUpdate:modelValue":e[2]||(e[2]=t=>s(o).originCity=t),label:"Select the city from which the parcel is sent",class:"mt-4",options:s(V).cities},null,8,["modelValue","options"]),a(y,{modelValue:s(o).targetCity,"onUpdate:modelValue":e[3]||(e[3]=t=>s(o).targetCity=t),label:"Select the city to which the parcel is sent",class:"mt-4",options:s(V).cities},null,8,["modelValue","options"]),s(o).type=="order"?(n(),b(y,{key:0,modelValue:s(o).parcelType,"onUpdate:modelValue":e[4]||(e[4]=t=>s(o).parcelType=t),label:"Type of parcel",class:"mt-4",options:s(T).parcelTypes},null,8,["modelValue","options"])):g("",!0),a(H,{modelValue:s(o).dispatchDate,"onUpdate:modelValue":e[5]||(e[5]=t=>s(o).dispatchDate=t),label:"Date of dispatch",class:"create-delivery__datepicker mt-4","picked-data":s(o).parcelType},null,8,["modelValue","picked-data"]),s(o).type=="order"?(n(),b(L,{key:1,modelValue:s(o).description,"onUpdate:modelValue":e[6]||(e[6]=t=>s(o).description=t),label:"Parcel description",placeholder:"laptop",class:"mt-4"},null,8,["modelValue"])):g("",!0)])]),footer:c(()=>[l("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[7]||(e[7]=t=>i.value=!1)}," Close "),l("button",{type:"button",class:"btn btn-primary",onClick:R},"Save changes")]),_:1},8,["is-modal-open"]),a(w,{"is-modal-open":d.value,size:"md",onClose:e[10]||(e[10]=t=>d.value=!1)},{body:c(()=>[q(" Are you sure "),Q,q(" You want to delelte this erquest? ")]),footer:c(()=>[l("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[9]||(e[9]=t=>d.value=!1)}," Close "),l("button",{type:"button",class:"btn btn-danger",onClick:S},"delete")]),_:1},8,["is-modal-open"])],64))}});export{ae as default};
