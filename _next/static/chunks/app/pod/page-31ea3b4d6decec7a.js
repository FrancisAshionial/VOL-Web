(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{8603:function(e,t,n){Promise.resolve().then(n.bind(n,9969))},9969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7437),i=n(9039),s=n(2907);function d(){let{data:e,error:t,isLoading:n}=(0,i.ZP)({cmd:"kubectl get po -o json"},e=>s.h.execPost(e));if(t)return(0,a.jsx)("div",{children:"Failed to load"});if(n)return(0,a.jsx)("div",{children:"Loading..."});let d=null==e?void 0:e.output;if(!d)return(0,a.jsx)("div",{children:"No data available"});let r=JSON.parse(atob(d));for(let e of r.items)console.log(e.metadata.labels);return(0,a.jsx)("div",{className:"flex flex-wrap",children:r.items.map((e,t)=>(0,a.jsxs)("div",{className:"p-4 border border-gray-300 rounded-md m-4",children:[(0,a.jsx)("div",{children:e.metadata.name}),(0,a.jsx)("div",{children:e.metadata.namespace}),(0,a.jsx)("div",{children:e.status.phase}),(0,a.jsx)("div",{children:e.status.podIP}),(0,a.jsx)("div",{children:e.status.containerStatuses.map(e=>e.name).join(", ")})]},t))})}}},function(e){e.O(0,[868,39,907,971,23,744],function(){return e(e.s=8603)}),_N_E=e.O()}]);