(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},6076:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var r=s(260),a=s(8203),l=s(5155),i=s.n(l),n=s(7292),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5104)),"D:\\Lessons\\Learning\\next_project\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,638)),"D:\\Lessons\\Learning\\next_project\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Lessons\\Learning\\next_project\\app\\page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8626:(e,t,s)=>{Promise.resolve().then(s.bind(s,5104))},6778:(e,t,s)=>{Promise.resolve().then(s.bind(s,9145))},9145:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(5512),a=s(8009),l=s(507),i=s(4825);let n=(0,i.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),o=(0,i.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),d=({onCategorySelect:e,onPriceFilter:t})=>{let[s,l]=(0,a.useState)(!0),[i,d]=(0,a.useState)(window.innerWidth),[c,u]=(0,a.useState)(!0),[x,f]=(0,a.useState)(!0),[p,m]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(async()=>{let e=await fetch("https://fakestoreapi.com/products/categories");m(["All Categories",...await e.json()])})()},[]),(0,a.useEffect)(()=>{let e=()=>{d(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.useEffect)(()=>{i<640&&l(!1)},[i]),(0,r.jsxs)("div",{className:"relative w-full h-full",children:[(0,r.jsxs)("div",{className:`transition-all duration-300 overflow-hidden ${s?"w-96 h-full md:w-80 p-4 bg-[#fffbf0] border rounded-lg":"w-0"}`,children:[(0,r.jsx)("button",{onClick:()=>l(!1),className:"p-1 bg-[#fffbf0]  rounded text-2xl bold absolute top-1 right-1",children:(0,r.jsx)(n,{className:"text-2xl"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-bold text-2xl text-[#e8597e] hover:text-[#ff2a61]",children:"Filter By:"}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("button",{onClick:()=>u(!c),className:"w-full text-left font-semibold flex items-center justify-between",children:[(0,r.jsx)("span",{className:"text-lg text-[#8b374d] hover:text-[#ff2a61]",children:"Categories"}),(0,r.jsx)("span",{children:c?"▲":"▼"})]}),c&&(0,r.jsx)("ul",{className:"mt-2 pl-4 space-y-2",children:p.map((t,s)=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"hover:text-[#008080] text-[#36454f]",onClick:()=>e(t),children:t})},s))})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("button",{onClick:()=>f(!x),className:"w-full text-left font-semibold flex items-center justify-between",children:[(0,r.jsx)("span",{className:"text-lg text-[#8b374d] hover:text-[#ff2a61]",children:"Price Ranges"}),(0,r.jsx)("span",{children:x?"▲":"▼"})]}),x&&(0,r.jsx)("ul",{className:"mt-2 pl-4 space-y-2",children:[{label:"All Prices",value:""},{label:"$0 - $50",value:"0-50"},{label:"$51 - $100",value:"51-100"},{label:"$101 - $200",value:"101-200"},{label:"$201+",value:"201+"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"hover:text-[#008080] text-[#36454f]",onClick:()=>t(e.value),children:e.label})},e.value))})]})]})]}),!s&&(0,r.jsx)("button",{onClick:()=>l(!0),className:"p-1 bg-[#36454f] text-white rounded transition-all duration-300 absolute top-0 left-0 z-50",children:(0,r.jsx)(o,{className:"text-2xl"})})]})};var c=s(5103);let u=({images:e,imageWidth:t,imageHeight:s})=>{let[l,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let t=setInterval(()=>{i(t=>(t+1)%e.length)},3e3);return()=>clearInterval(t)},[e.length]),(0,r.jsxs)("div",{className:"relative w-full max-w-[100rem] h-96 mx-auto overflow-hidden rounded-lg mt-10 mb-10",children:[(0,r.jsx)("div",{className:"w-full flex transition-transform ease-in-out duration-500",style:{transform:`translateX(-${100*l}%)`},children:e.map((e,a)=>(0,r.jsx)("div",{className:"min-w-full",children:(0,r.jsx)(c.default,{src:e,alt:`Slide ${a+1}`,layout:"intrinsic",width:t,height:s,objectFit:"fit"})},a))}),(0,r.jsx)("button",{onClick:()=>{i(t=>(t-1+e.length)%e.length)},className:"absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#fffbf0] text-[#36454f] m-3 p-2 rounded-full",children:"❮"}),(0,r.jsx)("button",{onClick:()=>{i(t=>(t+1)%e.length)},className:"absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#fffbf0] text-[#36454f] m-3 p-2 rounded-full",children:"❯"})]})};var x=s(1403),f=s(2067);let p=()=>{let{productCounts:e,wishlist:t,totalCartCount:s,updateCartCount:i,toggleWishlist:n}=(0,x._)(),[o,c]=(0,a.useState)([]),[p,m]=(0,a.useState)("All Categories"),[h,g]=(0,a.useState)(""),[j,v]=(0,a.useState)(!1);(0,a.useEffect)(()=>{v(!0)},[]),(0,a.useEffect)(()=>{(async()=>{c(await (0,f.j)())})()},[]);let b=o.filter(e=>{let t="All Categories"===p||e.category===p,s=!0;return"0-50"===h?s=e.price>=0&&e.price<=50:"51-100"===h?s=e.price>50&&e.price<=100:"101-200"===h?s=e.price>100&&e.price<=200:"201+"===h&&(s=e.price>200),t&&s});return j?(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{images:["/images/slide1.jpg","/images/slide2.jpg","/images/slide3.png","/images/slide4.jpg"],imageWidth:1920,imageHeight:750}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)(d,{onCategorySelect:m,onPriceFilter:g})}),(0,r.jsx)("div",{className:"transition-all duration-300 w-full",children:(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mx-auto px-10",children:b.map(a=>(0,r.jsx)("div",{children:(0,r.jsx)(l.A,{id:a.id,image:a.image,title:a.title,price:a.price,description:a.description,rating:a.rating,category:a.category,onAddToCart:()=>i(a,0),onToggleWishlist:()=>n(a),cartCount:e[a.id]||0,isWishlisted:t.some(e=>e.id===a.id),totalCartCount:s})},a.id))})})]})]}):null}},507:(e,t,s)=>{"use strict";s.d(t,{A:()=>x});var r=s(5512),a=s(8009),l=s(5103),i=s(3323),n=s(6383),o=s(1910),d=s(8531),c=s.n(d),u=s(1403);let x=({id:e,image:t,title:s,price:d,rating:x,onToggleWishlist:f,isWishlisted:p=!1,description:m,category:h,onAddToCart:g,cartCount:j=0,totalCartCount:v=0})=>{let{updateCartCount:b}=(0,u._)(),[w,y]=(0,a.useState)(1);return(0,r.jsxs)("div",{className:"w-full h-[400px] rounded overflow-hidden shadow-lg bg-white relative",children:[(0,r.jsx)("button",{onClick:()=>{f&&f()},className:"absolute top-1 right-1 bg-[#fffbf0] rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none z-10",children:(0,r.jsx)(i.A,{size:24,className:`transition-all duration-300 ease-in-out transform ${p?"fill-[#e8597e] text-[#e8597e] scale-110":"text-[#8b374d] scale-100"}`})}),(0,r.jsxs)(c(),{href:`/product/${e}`,passHref:!0,children:[(0,r.jsx)("div",{className:"relative w-full h-56 cursor-pointer",children:(0,r.jsx)(l.default,{src:t,alt:s,layout:"fill",objectFit:"cover",className:"rounded-t-lg"})}),(0,r.jsxs)("div",{className:"px-6 py-4",children:[(0,r.jsx)("div",{className:"font-bold text-xl mb-2 truncate cursor-pointer hover:text-[#008080]",children:s}),(0,r.jsxs)("div",{className:"flex items-center mb-3",children:[(0,r.jsx)("span",{className:"text-gray-700 text-lg",children:x.rate}),(0,r.jsx)(n.A,{size:20,className:"fill-[#ff9529] text-[#ff9529] mx-2"}),(0,r.jsxs)("span",{className:"text-gray-500",children:["(",x.count," reviews)"]})]})]})]}),(0,r.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[(0,r.jsxs)("span",{className:"text-xl font-semibold",children:["$",d]}),(0,r.jsxs)("button",{onClick:()=>{b({id:e,image:t,title:s,price:d,rating:x,description:m,category:h,onAddToCart:g,onToggleWishlist:f,cartCount:j,isWishlisted:p,totalCartCount:v},w),y(1)},className:"text-[#36454f] hover:text-[#008080] focus:outline-none relative",children:[(0,r.jsx)(o.A,{size:24,className:"transition-all duration-300 ease-in-out transformtext-[#008080] scale-110"}),j>0&&(0,r.jsx)("span",{className:"absolute -top-2 -right-2 bg-[#ff2a61] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs",children:j})]})]})]})}},2067:(e,t,s)=>{"use strict";s.d(t,{j:()=>r});let r=async()=>{try{let e=await fetch("https://fakestoreapi.com/products");if(!e.ok)throw Error("Failed to fetch products");return await e.json()}catch(e){if(e instanceof Error)throw Error(e.message||"Something went wrong");throw Error("Something went wrong")}}},5104:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Lessons\\\\Learning\\\\next_project\\\\app\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Lessons\\Learning\\next_project\\app\\page.tsx","default")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,704,77,362],()=>s(6076));module.exports=r})();