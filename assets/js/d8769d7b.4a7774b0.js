/*! For license information please see d8769d7b.4a7774b0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[896823],{815217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(824246),r=n(511151);const a={id:"index",title:"Building Backends",sidebar_label:"Overview",description:"Building backends using the new backend system"},i="Overview",s={id:"backend-system/building-backends/index",title:"Building Backends",description:"Building backends using the new backend system",source:"@site/../docs/backend-system/building-backends/01-index.md",sourceDirName:"backend-system/building-backends",slug:"/backend-system/building-backends/index",permalink:"/docs/backend-system/building-backends/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-backends/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Building Backends",sidebar_label:"Overview",description:"Building backends using the new backend system"},sidebar:"docs",previous:{title:"Naming Patterns",permalink:"/docs/backend-system/architecture/naming-patterns"},next:{title:"Migration Guide",permalink:"/docs/backend-system/building-backends/migrating"}},c={},l=[{value:"Customization",id:"customization",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Services",id:"services",level:3},{value:"Custom Service Implementations",id:"custom-service-implementations",level:3},{value:"Split Into Multiple Backends",id:"split-into-multiple-backends",level:2}];function d(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",h1:"h1",code:"code",pre:"pre",h2:"h2",h3:"h3"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["NOTE: If you have an existing backend that is not yet using the new backend\nsystem, see ",(0,o.jsx)(t.a,{href:"/docs/backend-system/building-backends/migrating",children:"migrating"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["This section covers how to set up and customize your own Backstage backend. It covers some aspects of how backend instances fit into the larger system, but for a more in-depth explanation of the role of backends in the backend system, see ",(0,o.jsx)(t.a,{href:"/docs/backend-system/architecture/backends",children:"the architecture section"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["A minimal Backstage backend is very lightweight. It is a single package with a ",(0,o.jsx)(t.code,{children:"package.json"})," file and a ",(0,o.jsx)(t.code,{children:"src/index.ts"})," file, not counting surrounding tooling and documentation. The package is typically placed within the ",(0,o.jsx)(t.code,{children:"packages/backend"})," folder of a Backstage monorepo, but that is up to you. The backend package is part of any project created with ",(0,o.jsx)(t.code,{children:"@backstage/create-app"}),", so you typically do not need to create it yourself."]}),"\n",(0,o.jsxs)(t.p,{children:["When you create a new project with ",(0,o.jsx)(t.code,{children:"@backstage/create-app"}),", you'll get a backend package with a ",(0,o.jsx)(t.code,{children:"src/index.ts"})," that looks something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createBackend } from '@backstage/backend-defaults'; // Omitted in the examples below\n\nconst backend = createBackend();\n\nbackend.add(import('@backstage/plugin-app-backend/alpha'));\nbackend.add(import('@backstage/plugin-catalog-backend/alpha'));\nbackend.add(import('@backstage/plugin-scaffolder-backend/alpha'));\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),\n);\n\nbackend.start();\n"})}),"\n",(0,o.jsx)(t.p,{children:"There will be a couple more plugins and modules in the initial setup, but the overall layout is the same."}),"\n",(0,o.jsxs)(t.p,{children:["What we're doing in this file is creating a new backend using ",(0,o.jsx)(t.code,{children:"createBackend"}),", and then installing a collection of different plugins, modules, and services that we want to be part of that backend. Plugins are standalone features, modules augment existing plugins or modules, while services can be used to override behavior for deeper customizations. Each module can only target a single plugin, and that plugin must also be present in the same backend. Finally, we start up the backend by calling the ",(0,o.jsx)(t.code,{children:"start"})," method."]}),"\n",(0,o.jsx)(t.h2,{id:"customization",children:"Customization"}),"\n",(0,o.jsx)(t.p,{children:"Apart from installing existing plugins and modules in the backend, there are a couple of different ways in which you can customize your backend installation."}),"\n",(0,o.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["Perhaps the most accessible way is though static configuration, which you can read more about in the documentation for how to ",(0,o.jsx)(t.a,{href:"/docs/conf/writing",children:"write configuration"}),". Many different aspects of the backend can be configured, including both the behavior of the backend itself, as well as many plugins or modules. You'll need to refer to the documentation of each plugin or module to see what configuration is available. Also be sure to check out the documentation of the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/core-services/index",children:"core services"}),", as that also covers how to configure those."]}),"\n",(0,o.jsx)(t.h3,{id:"services",children:"Services"}),"\n",(0,o.jsxs)(t.p,{children:["Speaking of services, they are another important point of customization. Services allow you to make deeper and broader customizations of the backend. They are similar to ",(0,o.jsx)(t.a,{href:"/docs/api/utility-apis",children:"Utility APIs"})," in the frontend system, using dependency injection to make common functionality available to plugins and modules. You can read more about services in the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/architecture/services",children:"architecture section"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["There is a core set of services that must be installed in all backends, for things like logging, database access, serving HTTP, and so on. Luckily, all of these services are installed by default when you use ",(0,o.jsx)(t.code,{children:"createBackend"})," from the ",(0,o.jsx)(t.code,{children:"@backstage/backend-defaults"})," package, which is what you have in a standard setup."]}),"\n",(0,o.jsx)(t.p,{children:"All of these services can be replaced with your own implementations if you need to customize them. The simplest way to do this is to use the existing service implementations but with additional options. Many of the core services can be customized this way, but not all, as they don't all have meaningful options."}),"\n",(0,o.jsx)(t.p,{children:"For example, let's say we want to customize the core configuration service to enable remote configuration loading. That would look something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { rootConfigServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend();\n\nbackend.add(\n  rootConfigServiceFactory({\n    remote: { reloadIntervalSeconds: 60 },\n  }),\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will make it possible to pass URLs as configuration targets, and those URLs will be polled every 60 seconds for changes."}),"\n",(0,o.jsxs)(t.p,{children:["There is one exception to the above, which is the built-in ",(0,o.jsx)(t.code,{children:"PluginMetadataService"})," that is provided by the framework and is not possible to override."]}),"\n",(0,o.jsx)(t.h3,{id:"custom-service-implementations",children:"Custom Service Implementations"}),"\n",(0,o.jsx)(t.p,{children:"When overriding services you are not limited to the existing implementations, you can also provide your own custom service factories. This will let you globally override services with completely custom implementations, or build on existing implementations to add additional logic."}),"\n",(0,o.jsxs)(t.p,{children:["To override a service, you provide it in the ",(0,o.jsx)(t.code,{children:"services"})," option just like above, but this time we need to use ",(0,o.jsx)(t.code,{children:"createServiceFactory"})," to create our factory. For example, if you want to replace the default ",(0,o.jsx)(t.code,{children:"LoggerService"})," with your own, it might look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const backend = createBackend();\n\nbackend.add(\n  createServiceFactory({\n    service: coreServices.logger,\n    deps: {\n      rootLogger: coreServices.rootLogger,\n      plugin: coreServices.pluginMetadata,\n      config: coreServices.rootConfig,\n    },\n    factory({ rootLogger, plugin, config }) {\n      const labels = readCustomLogLabelsForPlugin(config, plugin); // custom logic\n      return rootLogger.child(labels);\n    },\n  }),\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"LoggerService"})," is responsible for creating a specialized logger instance for each plugin, while the ",(0,o.jsx)(t.code,{children:"RootLoggerService"})," is the actual logging implementation. The default implementation of ",(0,o.jsx)(t.code,{children:"LoggerService"})," will decorate the logger with a ",(0,o.jsx)(t.code,{children:"plugin"})," label that contains the plugin ID. Here in our custom implementation we read out additional labels from the configuration and add those as well."]}),"\n",(0,o.jsxs)(t.p,{children:["This example touches on the fact that services can have different scopes, being either scoped to individual plugins or the root backend instance. To read more about this, see the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/architecture/services",children:"architecture section"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"split-into-multiple-backends",children:"Split Into Multiple Backends"}),"\n",(0,o.jsxs)(t.p,{children:["A more advanced way to deploy Backstage is to split the backend plugins into multiple different backend deployments. Both the ",(0,o.jsx)(t.a,{href:"/docs/deployment/scaling",children:"deployment documentation"})," and ",(0,o.jsx)(t.a,{href:"/docs/overview/threat-model#trust-model",children:"Threat Model"})," explain the benefits of this, so here we'll focus on how to do it."]}),"\n",(0,o.jsxs)(t.p,{children:["To create a separate backend we need to create an additional backend package. This package will be built and deployed separately from your existing backend. There is currently no template to create a backend via ",(0,o.jsx)(t.code,{children:"yarn new"}),", so the quickest way is to copy the new package and modify. The naming is up to you and it depends on how you are splitting things and up. For this example we'll just use a simple suffix. You might end up with a directory structure like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'packages/\n  backend-a/\n    src/\n      index.ts\n    package.json <- "name": "backend-a"\n  backend-b/\n    src/\n      index.ts\n    package.json <- "name": "backend-b"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can now trim down the ",(0,o.jsx)(t.code,{children:"src/index.ts"})," files to only include the plugins and modules that you want to be part of that backend. For example, if you want to split out the scaffolder plugin, you might end up with something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const backend = createBackend();\n\nbackend.add(import('@backstage/plugin-app-backend/alpha'));\nbackend.add(import('@backstage/plugin-catalog-backend/alpha'));\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),\n);\nbackend.start();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And ",(0,o.jsx)(t.code,{children:"backend-b"}),", don't forget to clean up dependencies in ",(0,o.jsx)(t.code,{children:"package.json"})," as well:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const backend = createBackend();\n\nbackend.add(import('@backstage/plugin-scaffolder-backend/alpha'));\nbackend.start();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We've now split the backend into two separate deployments, but we still need to make sure that they can communicate with each other. This is the hard and somewhat tedious part, as Backstage currently doesn't provide an out of the box solution that solves this. You'll need to manually configure the two backends with custom implementations of the ",(0,o.jsx)(t.code,{children:"DiscoveryService"})," and have them return the correct URLs for each other. Likewise, you'll also need to provide a custom implementation of the ",(0,o.jsx)(t.code,{children:"DiscoveryApi"})," in the frontend, unless you surface the two backends via a proxy that handles the routing instead."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=k.prototype=new y;v.constructor=k,m(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return i=i(c=e),e=""===a?"."+E(c,0):a,x(i)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),R(i,t,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",x(e))for(var l=0;l<e.length;l++){var d=a+E(s=e[l],l);c+=R(s,t,r,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,t,r,d=a+E(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var o=[],r=0;return R(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},$={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=r,t.Profiler=i,t.PureComponent=k,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:r,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var o=n(667294);const r=o.createContext({});function a(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),o.createElement(r.Provider,{value:s},t)}}}]);