import{j as s,u as f,r as o,G as g,L as j}from"./index-DRuSMChq.js";import{S as h,P as N,r as b}from"./restaurant.adapter-B5UJ0i04.js";import{R as y}from"./restaurant.services-1VulX0Yf.js";const R=r=>{const{data:a,onClick:t=()=>{}}=r,n=()=>{t&&typeof t=="function"&&t()};return s.jsxs("div",{tabIndex:0,role:"button",className:"restaurant-item card card-compact w-full bg-base-100","data-testid":`restaurant-${a.id}`,"data-cy":`restaurant-${a.id}`,onClick:n,children:[s.jsx("figure",{children:s.jsx("img",{src:a.image,alt:`Restaurant ${a.name} front page`})}),s.jsxs("div",{className:"card-body flex flex-row gap-3",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx("figure",{className:"restaurant-logo relative",children:s.jsx("img",{src:a.logo,alt:`Restaurant ${a.name} logo`})})}),s.jsxs("div",{className:"basis-full",children:[s.jsx("h2",{className:"card-title poppins-medium text-base uppercase color--base mb-3",children:a.name}),s.jsx("h4",{className:"card-category-title poppins-regular text-base color--neutral-n300 block",children:a.category}),s.jsxs("p",{className:"block restaurant-info color--neutral-n300 text-sm lg:text-base",children:[s.jsxs("span",{className:"inline-flex items-center",children:[s.jsx("img",{src:h,className:"mr-2 info-icon",alt:"Start icon"}),`${a.ratings.average} (${a.ratings.total})`]}),s.jsxs("span",{className:"inline-flex items-center",children:[s.jsx("img",{src:N,className:"mr-2 info-icon",alt:"Pin map icon"}),a.formattedDistance]})]})]})]})]})},C=r=>{const a=f(),{restaurants:t,className:n="grid grid-cols-1 gap-6"}=r,d=(c,e)=>{a(`/restaurants/${c}`,{state:{restaurant:e}})};return s.jsx("div",{className:`restaurant-list ${n}`,"data-testid":"restaurant-list","data-cy":"restaurant-list",children:t.map(({catalog:c,...e})=>s.jsx(R,{data:e,onClick:()=>d(e.id,e)},e.id))})},v=r=>{const{userGeolocation:a,orderByClosestRestaurant:t=!1}=r||{},[n,d]=o.useState([]),[c,e]=o.useState(!1),[m,x]=o.useState(!1),p=i=>i.sort((l,u)=>l.distance-u.distance);return o.useEffect(()=>{a&&(async()=>{try{e(!0);const l=(await y.getRestaurants()).map(u=>b(u,a));d(t?p(l):l)}catch(i){throw x(!0),new Error(`Error fetching restaurants, [Error]: ${i}`)}finally{e(!1)}})()},[a]),{restaurants:n,isLoading:c,hasError:m}},S=()=>{const{state:{userGeolocation:r}}=o.useContext(g),{isLoading:a,restaurants:t}=v({userGeolocation:r,orderByClosestRestaurant:!0});return a?s.jsx(j,{}):s.jsxs("div",{className:"px-6",children:[s.jsx("h1",{className:"text-lg poppins-medium py-6 color--base",children:"Restaurantes"}),s.jsx(C,{restaurants:t})]})};export{S as default};
