(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{9480:function(e,i,n){Promise.resolve().then(n.bind(n,9012))},9012:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return l}});var t=n(7437),a=n(9039),s=n(2907);function l(){let{data:e,error:i,isLoading:n}=(0,a.ZP)({cmd:"kubectl get vcjob -o json"},e=>s.h.execPost(e));if(i)return(0,t.jsx)("div",{children:"Failed to load"});if(n)return(0,t.jsx)("div",{children:"Loading..."});let l=null==e?void 0:e.output;if(!l)return(0,t.jsx)("div",{children:"No data available"});let r=JSON.parse(atob(l));return console.log(r),(0,t.jsx)("div",{className:"flex flex-wrap",children:r.items.map((e,i)=>(0,t.jsxs)("div",{className:"vcjob",children:[(0,t.jsx)("div",{children:e.apiVersion}),(0,t.jsx)("div",{children:e.metadata.name}),(0,t.jsx)("div",{children:e.metadata.namespace}),(0,t.jsx)("div",{children:e.status.state.lastTransitionTime})]},i))})}}},function(e){e.O(0,[868,39,907,971,23,744],function(){return e(e.s=9480)}),_N_E=e.O()}]);