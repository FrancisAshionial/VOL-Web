(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{1861:function(e,n,s){Promise.resolve().then(s.bind(s,7141))},7141:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var i=s(7437),t=s(9039),d=s(5741);function o(){let{data:e,error:n,isLoading:s}=(0,t.ZP)({cmd:"kubectl get no -o json"},e=>d.h.execPost(e));if(n)return(0,i.jsx)("div",{children:"Failed to load"});if(s)return(0,i.jsx)("div",{children:"Loading..."});let o=null==e?void 0:e.output;if(!o)return(0,i.jsx)("div",{children:"No data available"});let r=JSON.parse(atob(o));for(let e of r.items)console.log(e.metadata.labels);return(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4",children:r.items.map((e,n)=>(0,i.jsxs)("div",{className:"node",children:[(0,i.jsx)("div",{children:e.metadata.name}),(0,i.jsx)("div",{children:e.status.addresses.map(e=>e.address).join(", ")}),(0,i.jsx)("div",{children:e.status.conditions.map(e=>e.type).join(", ")}),(0,i.jsx)("div",{children:e.status.nodeInfo.osImage}),(0,i.jsx)("div",{children:e.status.nodeInfo.kernelVersion}),(0,i.jsx)("div",{children:e.status.nodeInfo.kubeletVersion}),(0,i.jsx)("div",{children:e.status.nodeInfo.containerRuntimeVersion})]},n))})}}},function(e){e.O(0,[868,39,741,971,23,744],function(){return e(e.s=1861)}),_N_E=e.O()}]);