(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(50)},31:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),m=a(5),l=a(7),i=(a(31),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"/images/reactMovie_logo.png",alt:"rmdb-logo"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"/images/tmdb_logo.png",alt:"tmdb-logo"})))}),s=a(15),u=a(19),d=a(9),v=a(10),g=a(12),h=a(11),b=a(13),f="https://api.themoviedb.org/3/",p="053896d8add0d6b7e535a6220206fe71",E="http://image.tmdb.org/t/p/",N=(a(36),function(e){var t=e.image,a=e.title,n=e.text;return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n        39%,rgba(0,0,0,0)\n        41%,rgba(0,0,0,0.65)\n        100%),\n        url('".concat(t,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,a),c.a.createElement("p",null,n))))}),S=a(6),k=a.n(S),y=(a(38),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){var t=a.props.callback;a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){t(a.state.value)},500)},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state.value;return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(k.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:e})))}}]),t}(n.Component)),I=(a(39),function(e){var t=e.header,a=e.loading,n=e.children;return c.a.createElement("div",{className:"rmdb-grid"},t&&!a?c.a.createElement("h1",null,t):null,c.a.createElement("div",{className:"rmdb-grid-content"},n.map(function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))}),_=(a(40),function(e){var t=e.image,a=e.movieId,n=e.movieName,r=e.clickable;return c.a.createElement("div",{className:"rmdb-moviethumb"},r?c.a.createElement(m.b,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},c.a.createElement("img",{className:"clickable",src:t,alt:"moviethumb"})):c.a.createElement("img",{src:t,alt:"moviethumb"}))}),j=(a(41),function(e){var t=e.text,a=e.onClick;return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:a},c.a.createElement("p",null,t))}),O=(a(42),function(){return c.a.createElement("div",{className:"loader"})}),w=(a(43),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(f,"movie/popular?api_key=").concat(p,"&language=en-US&page=1"):"".concat(f,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(e),a.fetchItems(t)},a.loadMoreItems=function(){var e=a.state,t=e.searchTerm,n=e.currentPage,c="";a.setState({loading:!0}),c=""===t?"".concat(f,"movie/popular?api_key=").concat(p,"&language=en-US&page=").concat(n+1):"".concat(f,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(t,"&page=").concat(n+1),a.fetchItems(c)},a.fetchItems=function(e){var t=a.state,n=t.movies,c=t.heroImage,r=t.searchTerm;fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(u.a)(n),Object(u.a)(e.results)),heroImage:c||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages},function(){""===r&&sessionStorage.setItem("HomeState",JSON.stringify(a.state))})}).catch(function(e){return console.error("Error:",e)})},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(sessionStorage.getItem("HomeState")){var e=JSON.parse(sessionStorage.getItem("HomeState"));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(f,"movie/popular?api_key=").concat(p,"&language=en-US&page=1");this.fetchItems(t)}}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.heroImage,n=e.loading,r=e.currentPage,o=e.totalPages,m=e.searchTerm;return c.a.createElement("div",{className:"rmdb-home"},a?c.a.createElement("div",null,c.a.createElement(N,{image:"".concat(E).concat("w1280").concat(a.backdrop_path),title:a.original_title,text:a.overview}),c.a.createElement(y,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(I,{header:m?"Search Result":"Popular Movies",loading:n},t.map(function(e,t){return c.a.createElement(_,{key:t,clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),n?c.a.createElement(O,null):null,r<=o&&!n?c.a.createElement(j,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),t}(n.Component)),x=(a(44),function(e){var t=e.movie;return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,t)))}),T=(a(45),function(e){var t=e.movie,a=e.directors;return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:t.backdrop_path?"url('".concat(E).concat("w1280").concat(t.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(_,{image:t.poster_path?"".concat(E).concat("w500").concat(t.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,t.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,t.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*t.vote_average}),c.a.createElement("p",{className:"rmdb-score"},t.vote_average)),a.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),a.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)})),c.a.createElement(k.a,{className:"fa-film",name:"film",size:"5x"})))}),C=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},M=(a(46),function(e){var t=e.time,a=e.budget,n=e.revenue;return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",C(a))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",C(n)))))}),P=(a(47),function(e){var t=e.actor;return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:t.profile_path?"".concat(E).concat("w154").concat(t.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},t.name),c.a.createElement("span",{className:"rmdb-actor-character"},t.character))}),D=(a(48),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){var t=a.props.match.params.movieId;fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(f,"movie/").concat(t,"/credits?api_key=").concat(p);fetch(e).then(function(e){return e.json()}).then(function(e){var n=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:n,loading:!1},function(){localStorage.setItem("".concat(t),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;if(localStorage.getItem("".concat(e))){var t=JSON.parse(localStorage.getItem("".concat(e)));this.setState(Object(s.a)({},t))}else{this.setState({loading:!0});var a="".concat(f,"movie/").concat(e,"?api_key=").concat(p,"&language=en-US");this.fetchItems(a)}}},{key:"render",value:function(){var e=this.props.location.movieName,t=this.state,a=t.movie,n=t.directors,r=t.actors,o=t.loading;return c.a.createElement("div",{className:"rmdb-movie"},a?c.a.createElement("div",null,c.a.createElement(x,{movie:e}),c.a.createElement(T,{movie:a,directors:n}),c.a.createElement(M,{time:a.runtime,budget:a.budget,revenue:a.revenue})):null,r?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(I,{header:"Actors"},r.map(function(e,t){return c.a.createElement(P,{key:t,actor:e})}))):null,r||o?null:c.a.createElement("h1",null,"No movie found"),o?c.a.createElement(O,null):null)}}]),t}(n.Component)),R=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whooops. This page doesn't exist"))},U=function(){return c.a.createElement(m.a,{basename:"/moviedb-app/."},c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:w,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:D,exact:!0}),c.a.createElement(l.a,{component:R}))))};a(49);o.a.render(c.a.createElement(U,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8b87bfae.chunk.js.map