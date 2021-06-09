(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3XbYI",total:"Cart_total__2wtQ0",actions:"Cart_actions__i_wbT","button--alt":"Cart_button--alt__rpkne",button:"Cart_button__1DL-M"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__1qXgh",icon:"HeaderCartButton_icon__32vn3",badge:"HeaderCartButton_badge__J5RvH",bump:"HeaderCartButton_bump__1yJwV"}},function(e,t,n){e.exports={meal:"MealItem_meal__3nEqd",description:"MealItem_description__3B3Fl",price:"MealItem_price__3OrXn"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1hxb0",modal:"Modal_modal__35yzs","slide-down":"Modal_slide-down__1Y-3K"}},,function(e,t,n){e.exports={header:"Header_header__162sX","main-image":"Header_main-image__3JoF7"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1BoY2"}},function(e,t,n){e.exports={card:"Card_card__3e7FN"}},function(e,t,n){e.exports={input:"Input_input__1d8rl"}},function(e,t,n){e.exports={form:"MealItemForm_form__1dhCZ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3LxNT","meals-appear":"AvailableMeals_meals-appear__3LxfD"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=(n(20),n(14)),s=n(1),i=n.n(s),d=n(0),l=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},o=n(4),m=n.n(o),j=function(e){var t=e.onClick;return Object(d.jsxs)("button",{className:m.a.button,onClick:t,children:[Object(d.jsx)("span",{className:m.a.icon,children:Object(d.jsx)(l,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:m.a.badge,children:"3"})]})},u=n.p+"static/media/meals.2971f633.jpg",b=n(8),p=n.n(b),x=function(e){var t=e.onShowCart;return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsxs)("header",{className:p.a.header,children:[Object(d.jsx)("h1",{children:"ReactMeals"}),Object(d.jsx)(j,{onCLick:t})]}),Object(d.jsx)("div",{className:p.a["main-image"],children:Object(d.jsx)("img",{src:u,alt:"mealsImg"})})]})},h=n(9),_=n.n(h),O=function(){return Object(d.jsxs)("section",{className:_.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Deliverd to You."}),Object(d.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),Object(d.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})},f=n(10),v=n.n(f),g=function(e){var t=e.children;return Object(d.jsx)("div",{className:v.a.card,children:t})},y=n(15),N=n(11),C=n.n(N),w=function(e){var t=e.label,n=e.input;return Object(d.jsxs)("div",{className:C.a.input,children:[Object(d.jsx)("label",{htmlFor:n.id,children:t}),Object(d.jsx)("input",Object(y.a)({id:n.id},n))]})},M=n(12),I=n.n(M),B=function(e){var t=e.id;return Object(d.jsxs)("form",{className:I.a.form,children:[Object(d.jsx)(w,{label:"Amount",input:{id:"amount_".concat(t),type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"})]})},H=n(5),F=n.n(H),k=function(e){var t=e.id,n=e.name,a=e.description,c=e.price,r="$".concat(c.toFixed(2));return Object(d.jsxs)("li",{className:F.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:n}),Object(d.jsx)("div",{className:F.a.description,children:a}),Object(d.jsx)("div",{className:F.a.price,children:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)(B,{id:t})})]})},A=n(13),L=n.n(A),S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],z=function(){var e=S.map((function(e){return Object(d.jsx)(k,{description:e.description,price:e.price,name:e.name,id:e.id},e.id)}));return Object(d.jsx)("section",{className:L.a.meals,children:Object(d.jsx)(g,{children:Object(d.jsx)("ul",{children:e})})})},J=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(z,{})]})},Y=n(6),D=n.n(Y),E=function(e){return Object(d.jsx)("div",{className:D.a.backdrop})},X=function(e){var t=e.children;return Object(d.jsx)("div",{className:D.a.modal,children:Object(d.jsx)("div",{className:D.a.content,children:t})})},T=function(e){var t=e.children;return Object(d.jsxs)(i.a.Fragment,{children:[c.a.createPortal(Object(d.jsx)(E,{}),document.getElementById("modal")),c.a.createPortal(Object(d.jsx)(X,{children:t}),document.getElementById("modal"))]})},q=n(2),P=n.n(q),R=function(){var e=[{id:"c1",name:"sushi",amount:2,price:22.99}].map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}));return Object(d.jsxs)(T,{children:[Object(d.jsx)("ul",{className:P.a["cart-items"],children:e}),Object(d.jsxs)("div",{className:P.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:"35.99"})]}),Object(d.jsxs)("div",{className:P.a.actions,children:[Object(d.jsx)("button",{className:P.a["button--alt"],children:"Close"}),Object(d.jsx)("button",{className:P.a.button,children:"Order"})]})]})},V=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];console.log(n);return Object(d.jsxs)(s.Fragment,{children:[n&&Object(d.jsx)(R,{onClose:function(){a(!1)}}),Object(d.jsx)(x,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(J,{})})]})};c.a.render(Object(d.jsx)(V,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.b1c56e5a.chunk.js.map