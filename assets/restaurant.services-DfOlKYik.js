import{_ as c}from"./index-CCPWsplx.js";const i={config:{baseURL:"https://api.last.app/frontend-interview",isAPIMocked:!1}},{config:{baseURL:s,isAPIMocked:e}}=i,n=(async()=>{const{default:t}=await c(()=>import("./restaurants-DrtLZOcq.js"),[]);return t})(),f={getRestaurants:async()=>{if(e)return await n;try{const a=await(await fetch(`${s}/restaurants`)).json();return localStorage.setItem("restaurants",JSON.stringify(a)),a}catch(t){throw t}},getRestaurantById:async t=>{if(e)return(await n).find(({id:r})=>r===t);const a=localStorage.getItem("restaurants");if(a)return JSON.parse(a).find(r=>r.id===t);try{return await(await fetch(`${s}/restaurants/${t}`)).json()}catch(r){throw r}},getCatalogByRestaurantId:async t=>{var a;if(e)return(a=(await n).find(r=>r.id===t))==null?void 0:a.catalog;try{return await(await fetch(`${s}/restaurants/${t}/catalog`)).json()}catch(r){throw r}}};export{f as R};
