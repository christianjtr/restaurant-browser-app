import{r as e}from"./index-hWLkKWNP.js";import{R as u}from"./restaurant.services-Ded-jnlH.js";const g=t=>{const[s,o]=e.useState(null),[n,a]=e.useState(!1),[l,c]=e.useState(!1);return e.useEffect(()=>{(async()=>{try{a(!0);const r=await u.getCatalogByRestaurantId(t);o(r)}catch(r){throw c(!0),new Error(`Error fetching restaurant catalog given Restaurant Id: ${t}, [Error]: ${r}`)}finally{a(!1)}})()},[]),{catalog:s,isLoading:n,hasError:l}},m=t=>e.createElement("svg",{width:24,height:24,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2453 2.93109C10.4458 3.13158 10.4458 3.45662 10.2453 3.65711L5.90247 7.99998L10.2453 12.3429C10.4458 12.5433 10.4458 12.8684 10.2453 13.0689C10.0449 13.2694 9.71981 13.2694 9.51933 13.0689L4.81345 8.36299C4.61297 8.16251 4.61297 7.83746 4.81345 7.63698L9.51933 2.93109C9.71981 2.73061 10.0449 2.73061 10.2453 2.93109Z",fill:"white"})),w=t=>{if(typeof t!="number")throw Error("Value provider is not a number");return new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(t)};export{m as S,w as f,g as u};