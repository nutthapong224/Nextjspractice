(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6541)}])},9783:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",l="restore",u="server-patch",a="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},358:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(4005),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},880:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return h}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=n._(r(3935)),u=n._(r(4605)),a=r(3405),s=r(2269),c=r(5264);r(3213);let f=r(5734),d=n._(r(2854)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:u,decoding:a,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:g,fill:h,onLoadRef:m,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:b,onLoad:y,onError:j,...w}=e;return i.default.createElement("img",{...w,...getDynamicProps(f),loading:p,width:u,height:l,decoding:a,"data-nimg":h?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&handleLoading(e,d,m,v,_,g))},[r,d,m,v,_,j,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,d,m,v,_,g)},onError:e=>{b(!0),"empty"!==d&&_(!0),j&&j(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):i.default.createElement(u.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let h=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:u}=e,h=(0,i.useRef)(l);(0,i.useEffect)(()=>{h.current=l},[l]);let m=(0,i.useRef)(u);(0,i.useEffect)(()=>{m.current=u},[u]);let[v,_]=(0,i.useState)(!1),[b,y]=(0,i.useState)(!1),{props:j,meta:w}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:v,showAltText:b});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...j,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:y,ref:t}),w.priority?i.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2994:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),i=r(6722),l=r(4812),u=r(7822),a=r(9938),s=r(5017),c=r(5734),f=r(8503),d=r(7549),p=r(358),g=r(1417),h=r(9783),m=new Set;function prefetch(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:m,children:v,prefetch:_=null,passHref:b,replace:y,shallow:j,scroll:w,locale:P,onClick:x,onMouseEnter:S,onTouchStart:C,legacyBehavior:E=!1,...O}=e;r=v,E&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=o.default.useContext(c.RouterContext),R=o.default.useContext(f.AppRouterContext),M=null!=I?I:R,k=!I,L=!1!==_,N=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:A,as:T}=o.default.useMemo(()=>{if(!I){let e=formatStringOrUrl(u);return{href:e,as:m?formatStringOrUrl(m):e}}let[e,t]=(0,i.resolveHref)(I,u,!0);return{href:e,as:m?(0,i.resolveHref)(I,m):t||e}},[I,u,m]),z=o.default.useRef(A),D=o.default.useRef(T);E&&(n=o.default.Children.only(r));let F=E?n&&"object"==typeof n&&n.ref:t,[U,B,G]=(0,d.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(D.current!==T||z.current!==A)&&(G(),D.current=T,z.current=A),U(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[T,F,A,G,U]);o.default.useEffect(()=>{M&&B&&L&&prefetch(M,A,T,{locale:P},{kind:N},k)},[T,A,B,P,L,null==I?void 0:I.locale,M,k,N]);let K={ref:H,onClick(e){E||"function"!=typeof x||x(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,n,i,u,a,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,M,A,T,y,j,w,P,k,L)},onMouseEnter(e){E||"function"!=typeof S||S(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(L||!k)&&prefetch(M,A,T,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:N},k)},onTouchStart(e){E||"function"!=typeof C||C(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(L||!k)&&prefetch(M,A,T,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:N},k)}};if((0,a.isAbsoluteUrl)(T))K.href=T;else if(!E||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);K.href=t||(0,g.addBasePath)((0,s.addLocale)(T,e,null==I?void 0:I.defaultLocale))}return E?o.default.cloneElement(n,K):o.default.createElement("a",{...O,...K},r)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(517),i="function"==typeof IntersectionObserver,l=new Map,u=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3405:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(3213);let n=r(7736),o=r(2269);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let i,l,u,{src:a,sizes:s,unoptimized:c=!1,priority:f=!1,loading:d,className:p,quality:g,width:h,height:m,fill:v=!1,style:_,onLoad:b,onLoadingComplete:y,placeholder:j="empty",blurDataURL:w,fetchPriority:P,layout:x,objectFit:S,objectPosition:C,lazyBoundary:E,lazyRoot:O,...I}=e,{imgConf:R,showAltText:M,blurComplete:k,defaultLoader:L}=t,N=R||o.imageConfigDefault;if("allSizes"in N)i=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);i={...N,allSizes:e,deviceSizes:t}}let A=I.loader||L;delete I.loader,delete I.srcSet;let T="__next_img_default"in A;if(T){if("custom"===i.loader)throw Error('Image with src "'+a+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(x){"fill"===x&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!s&&(s=t)}let z="",D=getInt(h),F=getInt(m);if("object"==typeof(r=a)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(a)?a.default:a;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,w=w||e.blurDataURL,z=e.src,!v){if(D||F){if(D&&!F){let t=D/e.width;F=Math.round(e.height*t)}else if(!D&&F){let t=F/e.height;D=Math.round(e.width*t)}}else D=e.width,F=e.height}}let U=!f&&("lazy"===d||void 0===d);(!(a="string"==typeof a?a:z)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),i.unoptimized&&(c=!0),T&&a.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(c=!0),f&&(P="high");let B=getInt(g),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:C}:{},M?{}:{color:"transparent"},_),H=k||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:F,blurWidth:l,blurHeight:u,blurDataURL:w||"",objectFit:G.objectFit})+'")':'url("'+j+'")',K=H?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[c]})}}({config:i,src:a,unoptimized:c,width:D,quality:B,sizes:s,loader:A}),V={...I,loading:U?"lazy":d,fetchPriority:P,width:D,height:F,decoding:"async",className:p,style:{...G,...K},sizes:q.sizes,srcSet:q.srcSet,src:q.src},W={unoptimized:c,priority:f,placeholder:j,fill:v};return{props:V,meta:W}}},7736:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},5365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},unstable_getImgProps:function(){return unstable_getImgProps}});let n=r(8754),o=r(3405),i=r(3213),l=r(880),u=n._(r(2854)),unstable_getImgProps=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=l.Image},2854:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},6541:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return App}});var n=r(5893);r(5303),r(7294);var o=r(1664),i=r.n(o);r(7194);var l=r(5675),u=r.n(l);function Navbar(){return(0,n.jsxs)("nav",{children:[(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)(u(),{src:"/logo.png",width:50,height:50,alt:"logo"})}),(0,n.jsx)(i(),{href:"/",children:"หน้าแรก"}),(0,n.jsx)(i(),{href:"/about",children:"เกี่ยวกับเรา"}),(0,n.jsx)(i(),{href:"/product",children:"รายละเอียดสินค้า"})]})}function Footer(){return(0,n.jsx)("footer",{children:"copytight 2023|Nutthapong"})}function Layout(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Navbar,{}),t,(0,n.jsx)(Footer,{})]})}function App(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(Layout,{children:(0,n.jsx)(t,{...r})})}},7194:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d},default:function(){return Index}});var n=r(5893);r(7294);var o=r(9008),i=r.n(o),l=r(5675),u=r.n(l),a=r(8073),s=r.n(a),c=r(1664),f=r.n(c),d=!0;function Index(e){let{products:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:" สินค้าทั้งหมด | ณัฐพงศ์ "}),(0,n.jsx)("meta",{name:"keywords",content:"kongruksiam,ร้านค้า,ขายสินค้า"})]}),(0,n.jsx)("div",{className:s().container,children:t.map(e=>(0,n.jsx)("div",{children:(0,n.jsxs)(f(),{href:"/product/"+e.id,children:[(0,n.jsx)("h2",{className:s().title,children:e.title}),(0,n.jsx)(u(),{src:e.thumbnail,width:300,height:300,alt:e.title})]})},e.id))})]})}},5303:function(){},8073:function(e){e.exports={container:"Product_container__MYXFC",title:"Product_title__1e9TR"}},9008:function(e,t,r){e.exports=r(4605)},5675:function(e,t,r){e.exports=r(5365)},1664:function(e,t,r){e.exports=r(2994)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(8355)}),_N_E=e.O()}]);