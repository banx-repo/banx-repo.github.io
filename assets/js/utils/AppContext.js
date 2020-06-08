const{useState,useEffect}=React;const{useMediaQuery}=MediaQuery;const AppContext=React.createContext([{},()=>{}]);const AppProvider=props=>{const[state,setState]=useState({products:[],posts:[],cart:[],rs:{},isCartOpen:false});const set=props=>setState(prev=>{return{...prev,...props};});useEffect(()=>{fetch("products.json").then(rs=>rs.json()).then(rs=>set({products:rs})).catch(e=>set({error:true,errorDetails:e}));fetch("posts.json").then(rs=>rs.json()).then(rs=>set({posts:rs})).catch(e=>set({error:true,errorDetails:e}));fetch("menu.json").then(rs=>rs.json()).then(rs=>set({menu:rs})).catch(e=>set({error:true,errorDetails:e}));},[]);const xs=useMediaQuery({maxWidth:575});const sm=useMediaQuery({minWidth:576,maxWidth:767});const md=useMediaQuery({minWidth:768,maxWidth:991});const lg=useMediaQuery({minWidth:992,maxWidth:1199});const xl=useMediaQuery({minWidth:1200});useEffect(()=>{set({rs:{xs,sm,md,lg,xl}});},[xs,sm,md,lg,xl]);useEffect(()=>{const num=state.cart.map(({amount})=>amount).reduce((a,b)=>a+b,0);const total=state.cart.map(({product,amount})=>(product.sale?product.sale:product.price)*amount).reduce((a,b)=>a+b,0);const reduced=state.cart.map(({product,amount})=>(product.sale?product.price-product.sale:0)*amount).reduce((a,b)=>a+b,0);set({numOfProductsInCart:num});set({totalBill:total});set({totalReduced:reduced});},[state.cart]);if(state.error){return/*#__PURE__*/React.createElement("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},"Oop! T\u1EA3i d\u1EEF li\u1EC7u b\u1ECB l\u1ED7i, vui l\xF2ng th\u1EED t\u1EA3i l\u1EA1i trang nh\xE9!");}if(!state.products||!state.posts||!state.menu){return/*#__PURE__*/React.createElement("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},"\u0110ang t\u1EA3i trang, vui l\xF2ng \u0111\u1EE3i!");}return/*#__PURE__*/React.createElement(AppContext.Provider,{value:[state,set]},props.children);};export{AppContext,AppProvider};