"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{5741:function(e,t,a){a.d(t,{h:function(){return f},cn:function(){return p}});var n=a(4839),r=a(6164);let o="http://localhost".replace(/\/+$/,"");class i{set config(e){this.configuration=e}get basePath(){return null!=this.configuration.basePath?this.configuration.basePath:o}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||function e(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(t).map(n=>(function t(a,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=r+(r.length?"[".concat(a,"]"):a);if(n instanceof Array){let e=n.map(e=>encodeURIComponent(String(e))).join("&".concat(encodeURIComponent(o),"="));return"".concat(encodeURIComponent(o),"=").concat(e)}return n instanceof Set?t(a,Array.from(n),r):n instanceof Date?"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(n.toISOString())):n instanceof Object?e(n,o):"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(String(n)))})(n,t[n],a)).filter(e=>e.length>0).join("&")}}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){let e=this.configuration.apiKey;if(e)return"function"==typeof e?e:()=>e}get accessToken(){let e=this.configuration.accessToken;if(e)return"function"==typeof e?e:async()=>e}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}constructor(e={}){this.configuration=e}}let s=new i;class l{withMiddleware(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let n=this.clone();return n.middleware=n.middleware.concat(...t),n}withPreMiddleware(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let n=t.map(e=>({pre:e}));return this.withMiddleware(...n)}withPostMiddleware(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let n=t.map(e=>({post:e}));return this.withMiddleware(...n)}isJsonMime(e){return!!e&&l.jsonRegex.test(e)}async request(e,t){let{url:a,init:n}=await this.createFetchParams(e,t),r=await this.fetchApi(a,n);if(r&&r.status>=200&&r.status<300)return r;throw new u(r,"Response returned an error code")}async createFetchParams(e,t){var a,n;let r,o=this.configuration.basePath+e.path;void 0!==e.query&&0!==Object.keys(e.query).length&&(o+="?"+this.configuration.queryParamsStringify(e.query));let i=Object.assign({},this.configuration.headers,e.headers);Object.keys(i).forEach(e=>void 0===i[e]?delete i[e]:{});let s={method:e.method,headers:i,body:e.body,credentials:this.configuration.credentials},l={...s,...await ("function"==typeof t?t:async()=>t)({init:s,context:e})};return(a=l.body,"undefined"!=typeof FormData&&a instanceof FormData||l.body instanceof URLSearchParams||(n=l.body,"undefined"!=typeof Blob&&n instanceof Blob))?r=l.body:r=this.isJsonMime(i["Content-Type"])?JSON.stringify(l.body):l.body,{url:o,init:{...l,body:r}}}clone(){let e=new this.constructor(this.configuration);return e.middleware=this.middleware.slice(),e}constructor(e=s){this.configuration=e,this.fetchApi=async(e,t)=>{let a,n={url:e,init:t};for(let e of this.middleware)e.pre&&(n=await e.pre({fetch:this.fetchApi,...n})||n);try{a=await (this.configuration.fetchApi||fetch)(n.url,n.init)}catch(e){for(let t of this.middleware)t.onError&&(a=await t.onError({fetch:this.fetchApi,url:n.url,init:n.init,error:e,response:a?a.clone():void 0})||a);if(void 0===a){if(e instanceof Error)throw new c(e,"The request failed and the interceptors did not return an alternative response");throw e}}for(let e of this.middleware)e.post&&(a=await e.post({fetch:this.fetchApi,url:n.url,init:n.init,response:a.clone()})||a);return a},this.middleware=e.middleware}}l.jsonRegex=RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$","i");class u extends Error{constructor(e,t){super(t),this.response=e,this.name="ResponseError"}}class c extends Error{constructor(e,t){super(t),this.cause=e,this.name="FetchError"}}class d extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}function h(e){for(let t of e)if("multipart/form-data"===t.contentType)return!0;return!1}class m{async value(){return this.transformer(await this.raw.json())}constructor(e,t=e=>e){this.raw=e,this.transformer=t}}class w extends l{async dockerPostRaw(e,t){let a;return h([{contentType:"multipart/form-data"}]),a=new URLSearchParams,null!=e.imageName&&a.append("imageName",e.imageName),null!=e.dockerfile&&a.append("dockerfile",e.dockerfile),new m(await this.request({path:"/docker",method:"POST",headers:{},query:{},body:a},t))}async dockerPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.dockerPostRaw(e,t);return await a.value()}async execPostRaw(e,t){let a;return h([{contentType:"multipart/form-data"}]),a=new URLSearchParams,null!=e.cmd&&a.append("cmd",e.cmd),new m(await this.request({path:"/exec",method:"POST",headers:{},query:{},body:a},t),e=>null==e?e:{output:e.output,error:e.error})}async execPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.execPostRaw(e,t);return await a.value()}async k8sCommandPostRaw(e,t){var a;let n={};return n["Content-Type"]="application/json",new m(await this.request({path:"/k8s/command",method:"POST",headers:n,query:{},body:null==(a=e.k8sCommandPostRequest)?a:{action:a.action,resource:a.resource,name:a.name,namespace:a.namespace}},t))}async k8sCommandPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.k8sCommandPostRaw(e,t);return await a.value()}async k8sLogGetRaw(e,t){if(null==e.podName)throw new d("podName",'Required parameter "podName" was null or undefined when calling k8sLogGet().');if(null==e.namespace)throw new d("namespace",'Required parameter "namespace" was null or undefined when calling k8sLogGet().');let a={};return null!=e.podName&&(a.podName=e.podName),null!=e.namespace&&(a.namespace=e.namespace),new m(await this.request({path:"/k8s/log",method:"GET",headers:{},query:a},t),e=>null==e?e:{error:e.error,output:e.output})}async k8sLogGet(e,t){let a=await this.k8sLogGetRaw(e,t);return await a.value()}async k8sNodeGetRaw(e){return new m(await this.request({path:"/k8s/node",method:"GET",headers:{},query:{}},e))}async k8sNodeGet(e){let t=await this.k8sNodeGetRaw(e);return await t.value()}async k8sPodGetRaw(e,t){if(null==e.podName)throw new d("podName",'Required parameter "podName" was null or undefined when calling k8sPodGet().');if(null==e.namespace)throw new d("namespace",'Required parameter "namespace" was null or undefined when calling k8sPodGet().');let a={};return null!=e.podName&&(a.podName=e.podName),null!=e.namespace&&(a.namespace=e.namespace),new m(await this.request({path:"/k8s/pod",method:"GET",headers:{},query:a},t))}async k8sPodGet(e,t){let a=await this.k8sPodGetRaw(e,t);return await a.value()}async k8sPodStatusGetRaw(e,t){let a={};return a["Content-Type"]="application/json",new m(await this.request({path:"/k8s/pod_status",method:"GET",headers:a,query:{},body:e.body},t))}async k8sPodStatusGet(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.k8sPodStatusGetRaw(e,t);return await a.value()}async k8sVcjobGetRaw(e,t){if(null==e.jobName)throw new d("jobName",'Required parameter "jobName" was null or undefined when calling k8sVcjobGet().');if(null==e.namespace)throw new d("namespace",'Required parameter "namespace" was null or undefined when calling k8sVcjobGet().');let a={};return null!=e.jobName&&(a.jobName=e.jobName),null!=e.namespace&&(a.namespace=e.namespace),new m(await this.request({path:"/k8s/vcjob",method:"GET",headers:{},query:a},t))}async k8sVcjobGet(e,t){let a=await this.k8sVcjobGetRaw(e,t);return await a.value()}async k8sVcjobStatusGetRaw(e,t){let a={};return a["Content-Type"]="application/json",new m(await this.request({path:"/k8s/vcjob/status",method:"GET",headers:a,query:{},body:e.body},t))}async k8sVcjobStatusGet(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.k8sVcjobStatusGetRaw(e,t);return await a.value()}async k8sYamlPostRaw(e,t){let a;if(null==e.file)throw new d("file",'Required parameter "file" was null or undefined when calling k8sYamlPost().');let n=h([{contentType:"multipart/form-data"}]);return a=n?new FormData:new URLSearchParams,null!=e.file&&a.append("file",e.file),new m(await this.request({path:"/k8s/yaml",method:"POST",headers:{},query:{},body:a},t))}async k8sYamlPost(e,t){let a=await this.k8sYamlPostRaw(e,t);return await a.value()}async manualPostRaw(e,t){let a;if(null==e.file)throw new d("file",'Required parameter "file" was null or undefined when calling manualPost().');if(null==e.cmd)throw new d("cmd",'Required parameter "cmd" was null or undefined when calling manualPost().');if(null==e.imageName)throw new d("imageName",'Required parameter "imageName" was null or undefined when calling manualPost().');let n=h([{contentType:"multipart/form-data"}]);return a=n?new FormData:new URLSearchParams,null!=e.file&&a.append("file",e.file),null!=e.cmd&&a.append("cmd",e.cmd),null!=e.imageName&&a.append("imageName",e.imageName),new m(await this.request({path:"/manual",method:"POST",headers:{},query:{},body:a},t),e=>null==e?e:{buildOutput:e.buildOutput,error:e.error})}async manualPost(e,t){let a=await this.manualPostRaw(e,t);return await a.value()}async yamlPostRaw(e,t){var a;let n={};return n["Content-Type"]="application/json",new m(await this.request({path:"/yaml",method:"POST",headers:n,query:{},body:null==(a=e.yamlPostRequest)?a:{filename:a.filename,content:a.content}},t))}async yamlPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.yamlPostRaw(e,t);return await a.value()}}function p(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,n.W)(t))}let f=new w(new i({basePath:"http://114.132.190.117:8081"}))}}]);