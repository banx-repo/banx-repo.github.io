import{AppContext}from"./AppContext.js";const{useContext}=React;const useHook=()=>{const[state,set]=useContext(AppContext);const openCart=()=>{set({isCartOpen:!state.isCartOpen});};const addToCart=product=>{if(state.cart.map(item=>item.product.id).includes(product.id)){const index=state.cart.findIndex(item=>item.product.id===product.id);const prev=[].concat(state.cart);prev[index].amount++;set({cart:prev});}else{set({cart:[...state.cart,{product,amount:1}]});}openCart();};const removeProductFromCart=id=>{const cart=state.cart.filter(({product})=>product.id!=id);console.log(cart);set({cart});};const changeAmount=(index,action)=>{const cart=[].concat(state.cart);if(action==="add"){cart[index].amount++;}if(action==="minus"&&cart[index].amount>1){cart[index].amount--;}set({cart:cart});};return{products:state.products,posts:state.posts,menu:state.menu,rs:state.rs,cart:state.cart,isCartOpen:state.isCartOpen,addToCart,removeProductFromCart,changeAmount,openCart,numOfProductsInCart:state.numOfProductsInCart,totalBill:state.totalBill,totalReduced:state.totalReduced};};export{useHook};