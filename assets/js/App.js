import{useHook}from"./utils/useHook.js";const{useState,useEffect}=React;const{Route,Switch,useLocation}=ReactRouterDOM;// Components
import Header from"./components/header.js";import Nav from"./components/nav.js";import Cart from"./components/cart.js";import Email from"./components/email.js";import Footer from"./components/footer.js";// Pages
import Home from"./home.js";import Category from"./category.js";import Post from"./post.js";import Contact from"./contact.js";import Search from"./search.js";import ProductDetails from"./product-details.js";import PostDetails from"./post-details.js";export default function App(props){const{products,posts,rs,cart,isCartOpen}=useHook();const{pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0);},[pathname]);return/*#__PURE__*/React.createElement(React.Fragment,null,!(rs.xs||rs.sm)&&/*#__PURE__*/React.createElement(Header,null),/*#__PURE__*/React.createElement(Nav,null),isCartOpen&&/*#__PURE__*/React.createElement(Cart,null),/*#__PURE__*/React.createElement(Switch,null,/*#__PURE__*/React.createElement(Route,{path:"/danh-cho-cho/:url",children:/*#__PURE__*/React.createElement(ProductDetails,null)}),/*#__PURE__*/React.createElement(Route,{path:"/danh-cho-meo/:url",children:/*#__PURE__*/React.createElement(ProductDetails,null)}),/*#__PURE__*/React.createElement(Route,{path:"/bai-viet/:url",children:/*#__PURE__*/React.createElement(PostDetails,null)}),/*#__PURE__*/React.createElement(Route,{exact:true,path:"/danh-cho-cho",children:/*#__PURE__*/React.createElement(Category,{type:"dog"})}),/*#__PURE__*/React.createElement(Route,{exact:true,path:"/danh-cho-meo",children:/*#__PURE__*/React.createElement(Category,{type:"cat"})}),/*#__PURE__*/React.createElement(Route,{exact:true,path:"/bai-viet",children:/*#__PURE__*/React.createElement(Post,null)}),/*#__PURE__*/React.createElement(Route,{exact:true,path:"/lien-he",children:/*#__PURE__*/React.createElement(Contact,null)}),/*#__PURE__*/React.createElement(Route,{exact:true,path:"/tim-kiem",children:/*#__PURE__*/React.createElement(Search,null)}),/*#__PURE__*/React.createElement(Route,{exact:true,path:"/",children:/*#__PURE__*/React.createElement(Home,{cart:cart,products:products,posts:posts})}),/*#__PURE__*/React.createElement(Route,{path:"*",children:/*#__PURE__*/React.createElement("p",{style:{textAlign:"center"}},"Opps! Page not found!")})),/*#__PURE__*/React.createElement(Email,null),/*#__PURE__*/React.createElement(Footer,null));}