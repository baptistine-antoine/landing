(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{E5P1:function(e,t,n){e.exports={container:"_14IbC _2sCnE PrOBO _1CR66"}},zahQ:function(e,t,n){"use strict";n.r(t);var a=n("bnCs"),i=n("q1tI"),o=n.n(i),r=n("JlLI"),c=n("EYcW"),s=n("n53v"),p=n("/MKj"),d=n("Ty5D"),h=n("i6mb"),l=n("Sh83"),b=n("ZfPj"),O=n("d8i8"),f=n("TRoG"),u=n("2Fwo"),j=n("C8EU"),g=n("IQRp"),I=n("4YUS"),D=n("IVTL"),P=n("0K2+"),E=n("peh1"),m=n("QfYr"),F=n("rVA8"),S=n("NOoT"),A=n("x5qg");const C=e=>e,v=()=>{const e=Object(A.a)(),t=Object(F.a)();return Object(E.createSelector)((e,{routeData:n})=>t(n),(t,{locationState:n})=>e(t,n),(e,t)=>Object(a.pipeWith)(c.r(e,t,(e,{feedId:t,photoIds:n})=>({photoId:e,feedId:t,photoIds:n})),c.b(({photoId:e,feedId:t,photoIds:n})=>{const i=Object(a.pipeWith)(n,Object(S.c)(e));return c.o(i)&&Object(m.a)({error:new Error("Expected photo ID to exist in feed"),sentryExtra:{photoId:e,feedId:t}}),Object(a.pipeWith)(i,c.q(e=>n.length-(e+1)))})))},w=Object(D.a)()({shouldDisableInfiniteScroll:!1}),W=e=>{const t=e.pipe(g.E(([e,t,n,a,i,o,r])=>({shouldDisableInfiniteScroll:e,isDoneFetching:t,fetchDataParams:n,fetchDataAndBuildActions:a,dispatch:i,history:o,paginationRemainingOption:r}))),n=g.C(window,"scroll").pipe(g.v(l.f)),i=t.pipe(g.E(({paginationRemainingOption:e})=>e),g.t()).pipe(g.E(c.d(e=>e<=6)),g.t(),g.v(C)),o=t.pipe(g.E(e=>e.shouldDisableInfiniteScroll),g.t()),r=t.pipe(g.Q(g.G(g.l([n,o]).pipe(g.v(([e,t])=>!1===t)),i)),g.s(({fetchDataParams:e})=>e.page),g.v(({isDoneFetching:e})=>!1===e));return t.pipe(g.Q(r),g.I(({fetchDataParams:e,fetchDataAndBuildActions:t,dispatch:n,history:i})=>{const o=t(e).pipe(g.O(3));return Object(a.pipeWith)(o,g.Z(e=>{Object(p.b)(()=>{e.forEach(n)})},Object(b.b)(n,i)))}),g.J(g.d))};var B=Object(a.pipeWith)(e=>{const t=Object(a.pipeWith)(Object(i.useContext)(P.a),I.a),n=Object(a.pipeWith)(t.pathname,f.n,c.k()),o=Object(O.g)(t),r=Object(i.useMemo)(v,[]),s=Object(j.a)(e=>r(e,{routeData:n,locationState:o}));return Object(h.a)(W,void 0,[e.shouldDisableInfiniteScroll,e.isDoneFetching,e.fetchDataParams,e.fetchDataAndBuildActions,e.dispatch,e.history,s]),e.children},Object(p.c)(),d.h,e=>Object(u.a)(e,w)),x=n("E5P1"),y=n.n(x);const N=e=>o.a.createElement("div",{className:y.a.container},e),Q=({lastPageFetched:e,perPage:t,total:n})=>e>=(({total:e,perPage:t})=>Math.ceil(e/t))({total:n,perPage:t}),R=({lastPageFetched:e,perPage:t,orderBy:n})=>({page:e+1,perPage:t,orderBy:n});var J=class extends i.Component{constructor(){super(...arguments),this.renderFeed=(e,t)=>{const{fetchDataAndBuildActions:n,shouldDisableInfiniteScroll:a,renderItems:i,getScrollFooterEl:r}=this.props,c=R(e),p=Q(Object(s.f)(e,"lastPageFetched","perPage","total"));return o.a.createElement(B,{fetchDataAndBuildActions:n,fetchDataParams:c,isDoneFetching:p,shouldDisableInfiniteScroll:a},N(o.a.createElement(o.a.Fragment,null,i(t),!1===p&&r())))},this.renderFeedOrNoContent=(e,t)=>r.e(t)?this.props.getNoContentEl():this.renderFeed(e,t),this.renderPlaceholder=Object(a.pipe)(this.props.getPlaceholderEl,N)}render(){const{feedOption:e,feedItemsOption:t}=this.props;return Object(a.pipeWith)(c.r(e,t,this.renderFeedOrNoContent),c.l(this.renderPlaceholder))}};n.d(t,"default",(function(){return J}))}}]);
//# sourceMappingURL=feed.3ba07.js.map