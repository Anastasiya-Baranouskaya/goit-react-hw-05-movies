(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{69:function(t,e,c){"use strict";c.r(e);var a=c(58),s=c(70),n=c.n(s),i=c(0),r=c(3),h=c(59),o=c(1);e.default=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),c=e[0],s=e[1],j=Object(r.h)().movieId;return Object(i.useEffect)((function(){Object(h.a)({movieId:j}).then((function(t){return s(t.cast)})).catch((function(t){return console.log(t.message)}))}),[j]),Object(o.jsx)(o.Fragment,{children:c&&Object(o.jsx)("ul",{className:n.a.list,children:c.map((function(t){return Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:t.profile_path?"".concat("https://image.tmdb.org/t/p/w500").concat(t.profile_path):"https://t4.ftcdn.net/jpg/01/86/29/31/240_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg",alt:t.name,width:"120px"}),Object(o.jsx)("h4",{children:"Name"}),Object(o.jsx)("p",{className:n.a.text,children:t.name}),Object(o.jsx)("h4",{children:"Character"}),Object(o.jsx)("p",{className:n.a.text,children:t.character})]},t.cast_id)}))})})}},70:function(t,e,c){t.exports={list:"Cast_list__fJpqT",text:"Cast_text__3XZHO"}}}]);
//# sourceMappingURL=cast-subpage.0b725920.chunk.js.map