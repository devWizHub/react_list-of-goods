(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,c=n(3),o=n.n(c),a=n(4),r=n(5),i=n(7),l=n(6),h=n(1),u=n.n(h),d=(n(12),n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var p=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:s.NONE},t.handleSortAlphabetically=function(){t.setState({sortType:s.ALPHABET})},t.handleSortByLength=function(){t.setState({sortType:s.LENGTH})},t.handleReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.handleReset=function(){t.setState({sortType:s.NONE,isReversed:!1})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.sortType,n=t.isReversed,c=[].concat(b),o=!n&&e===s.NONE,a="button is-warning ".concat(n?"":"is-light");return e===s.ALPHABET?c.sort():e===s.LENGTH&&c.sort((function(t,e){return t.length-e.length})),n&&c.reverse(),Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(e===s.ALPHABET?"":"is-light"),onClick:this.handleSortAlphabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(e===s.LENGTH?"":"is-light"),onClick:this.handleSortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:a,onClick:this.handleReverse,children:"Reverse"}),!o&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(u.a.Component);o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8972756a.chunk.js.map