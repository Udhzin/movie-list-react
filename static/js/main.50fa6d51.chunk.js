(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),i=a.n(o),s=(a(13),a(7)),l=a(1),r=a(2),m=a(4),v=a(3),u=(a(14),a(15),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,o=t.addMovieToWillWatch,i=t.removeMovieFromWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:a.backdrop_path||a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path):"/movie-list-react/img/not_found.png",alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),c.a.createElement("progress",{min:0,max:100,value:10*a.vote_average})),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:n.bind(null,a)},"Delete Movie"),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),i(a)}},"Remove Will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),o(a)}},"Add Will Watch"))))}}]),a}(c.a.Component)),d=(a(16),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){a(e)}},o=function(e){return"nav-link ".concat(t===e?"active":"")};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:o("popularity.desc"),onClick:n("popularity.desc")},"Popularity Desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:o("revenue.desc"),onClick:n("revenue.desc")},"Revenue Asc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:o("vote_average.desc"),onClick:n("vote_average.desc")},"Vote Average Desc")))}}]),a}(c.a.Component)),p=(a(17),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e,t,a=this.props,n=a.page,o=a.total_pages,i=a.onChangePage,s=function(e){return function(){console.log("value",e),i(e)}};return c.a.createElement("nav",{"aria-label":"Page navigation"},c.a.createElement("ul",{className:"pagination justify-content-end"},c.a.createElement("li",{className:"page-item ".concat(1===n?"disabled":"")},c.a.createElement("span",{className:"page-link",onClick:s(n>=1?n-1:n)},"Previous")),(t=n,void console.log({currentPage:t})),c.a.createElement("li",{className:(e=n,"page-item ".concat(n===e?"active":""))},c.a.createElement("span",{className:"page-link",onClick:s(n)},n)),c.a.createElement("li",{className:"page-item ".concat(n===o?"disabled":"")},c.a.createElement("span",{className:"page-link",onClick:s(n!==o?n+1:n)},"Next"))))}}]),a}(c.a.Component)),h=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(s.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.onChangePage=function(t){e.setState({page:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"revenue.desc",page:1,total_pages:500},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t,a){t.sort_by===this.state.sort_by&&t.page===this.state.page||this.getMovies()}},{key:"shouldComponentUpdate",value:function(e,t,a){var n=e.sort_by,c=e.page;return n!==this.state.sort_by||c!==this.state.page}},{key:"getMovies",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(this.state.sort_by,"&page=").concat(this.state.page,"&total_pages=").concat(this.state.total_pages)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container p-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row mb-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement(d,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{page:this.state.page,onChangePage:this.onChangePage}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(u,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{page:this.state.page,onChangePage:this.onChangePage})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"row mb-3 pt-05"},"Will Watch: ",this.state.moviesWillWatch.length," Movies"))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.50fa6d51.chunk.js.map