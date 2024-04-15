import{j as s,u as g,r as o,G as f,L as h}from"./index-CNraNuhM.js";import{S as j,P as N,r as b}from"./restaurant.adapter-B5UJ0i04.js";import{R as y}from"./restaurant.services-D5dCCSO4.js";const R=r=>{const{data:t,onClick:a=()=>{}}=r,n=()=>{a&&typeof a=="function"&&a()};return s.jsxs("div",{tabIndex:0,role:"button",className:"restaurant-item card card-compact w-full bg-base-100","data-testid":`restaurant-${t.id}`,"data-cy":`restaurant-${t.id}`,onClick:n,children:[s.jsx("figure",{children:s.jsx("img",{src:t.image,alt:`Restaurant ${t.name} front page`})}),s.jsxs("div",{className:"card-body flex flex-row gap-3",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx("figure",{className:"restaurant-logo relative",children:s.jsx("img",{src:t.logo,alt:`Restaurant ${t.name} logo`})})}),s.jsxs("div",{className:"basis-full",children:[s.jsx("h2",{className:"card-title poppins-medium text-base uppercase color--base mb-3",children:t.name}),s.jsx("h4",{className:"card-category-title poppins-regular text-base color--neutral-n300 block",children:t.category}),s.jsxs("p",{className:"block restaurant-info color--neutral-n300 text-sm lg:text-base",children:[s.jsxs("span",{className:"inline-flex items-center",children:[s.jsx("img",{src:j,className:"mr-2 info-icon",alt:"Start icon"}),`${t.ratings.average} (${t.ratings.total})`]}),s.jsxs("span",{className:"inline-flex items-center",children:[s.jsx("img",{src:N,className:"mr-2 info-icon",alt:"Pin map icon"}),t.formattedDistance]})]})]})]})]})},C=r=>{const t=g(),{restaurants:a,className:n="grid grid-cols-1 gap-6"}=r,d=(c,e)=>{t(`/restaurants/${c}`,{state:{restaurant:e}})};return s.jsx("div",{className:`restaurant-list ${n}`,"data-testid":"restaurant-list","data-cy":"restaurant-list",children:a.map(({catalog:c,...e})=>s.jsx(R,{data:e,onClick:()=>d(e.id,e)},e.id))})},v=r=>{const{userGeolocation:t,orderByClosestRestaurant:a=!1}=r||{},[n,d]=o.useState([]),[c,e]=o.useState(!1),[m,x]=o.useState(!1),p=i=>i.sort((l,u)=>l.distance-u.distance);return o.useEffect(()=>{t&&(async()=>{try{e(!0);const l=(await y.getRestaurants()).map(u=>b(u,t));d(a?p(l):l)}catch(i){throw x(!0),new Error(`Error fetching restaurants, [Error]: ${i}`)}finally{e(!1)}})()},[t]),{restaurants:n,isLoading:c,hasError:m}},S=()=>{const{state:{userGeolocation:r}}=o.useContext(f),{isLoading:t,restaurants:a}=v({userGeolocation:r,orderByClosestRestaurant:!0});return t||a.length===0?s.jsx(h,{}):s.jsxs("div",{className:"px-6",children:[s.jsx("h1",{className:"text-lg poppins-medium py-6 color--base",children:"Restaurantes"}),s.jsx(C,{restaurants:a})]})};export{S as default};
