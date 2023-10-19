function e(e,t){return Object.keys(t).forEach(function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n,i,r,o,s,a,l,c,u,h,f,d,p,g,m,_,v,b,y,w,E,A,x,O,C,T=globalThis,k={};t(k,"popperGenerator",()=>e0),t(k,"detectOverflow",()=>eB),t(k,"createPopperBase",()=>e1),t(k,"createPopper",()=>e2),t(k,"createPopperLite",()=>e3);var S={};t(S,"top",()=>j),t(S,"bottom",()=>L),t(S,"right",()=>D),t(S,"left",()=>I),t(S,"auto",()=>P),t(S,"basePlacements",()=>$),t(S,"start",()=>N),t(S,"end",()=>M),t(S,"clippingParents",()=>R),t(S,"viewport",()=>F),t(S,"popper",()=>q),t(S,"reference",()=>H),t(S,"variationPlacements",()=>W),t(S,"placements",()=>z),t(S,"beforeRead",()=>B),t(S,"read",()=>V),t(S,"afterRead",()=>U),t(S,"beforeMain",()=>K),t(S,"main",()=>X),t(S,"afterMain",()=>Q),t(S,"beforeWrite",()=>Y),t(S,"write",()=>G),t(S,"afterWrite",()=>J),t(S,"modifierPhases",()=>Z);var j="top",L="bottom",D="right",I="left",P="auto",$=[j,L,D,I],N="start",M="end",R="clippingParents",F="viewport",q="popper",H="reference",W=/*#__PURE__*/$.reduce(function(e,t){return e.concat([t+"-"+N,t+"-"+M])},[]),z=/*#__PURE__*/[].concat($,[P]).reduce(function(e,t){return e.concat([t,t+"-"+N,t+"-"+M])},[]),B="beforeRead",V="read",U="afterRead",K="beforeMain",X="main",Q="afterMain",Y="beforeWrite",G="write",J="afterWrite",Z=[B,V,U,K,X,Q,Y,G,J],ee={};function et(e){return e?(e.nodeName||"").toLowerCase():null}function en(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ei(e){var t=en(e).Element;return e instanceof t||e instanceof Element}function er(e){var t=en(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function eo(e){// IE 11 has no ShadowRoot
if("undefined"==typeof ShadowRoot)return!1;var t=en(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}t(ee,"applyStyles",()=>es),t(ee,"arrow",()=>eC),t(ee,"computeStyles",()=>ej),t(ee,"eventListeners",()=>eD),t(ee,"flip",()=>eV),t(ee,"hide",()=>eX),t(ee,"offset",()=>eQ),t(ee,"popperOffsets",()=>eY),t(ee,"preventOverflow",()=>eG);var es={name:"applyStyles",enabled:!0,phase:"write",fn:// and applies them to the HTMLElements such as popper and arrow
function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];er(r)&&et(r)&&(// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(r.style,n),Object.keys(i).forEach(function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var i=t.elements[e],r=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});er(i)&&et(i)&&(Object.assign(i.style,o),Object.keys(r).forEach(function(e){i.removeAttribute(e)}))})}}// eslint-disable-next-line import/no-unused-modules
,requires:["computeStyles"]};function ea(e){return e.split("-")[0]}var el=Math.max,ec=Math.min,eu=Math.round;function eh(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ef(){return!/^((?!chrome|android).)*safari/i.test(eh())}function ed(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),r=1,o=1;t&&er(e)&&(r=e.offsetWidth>0&&eu(i.width)/e.offsetWidth||1,o=e.offsetHeight>0&&eu(i.height)/e.offsetHeight||1);var s=(ei(e)?en(e):window).visualViewport,a=!ef()&&n,l=(i.left+(a&&s?s.offsetLeft:0))/r,c=(i.top+(a&&s?s.offsetTop:0))/o,u=i.width/r,h=i.height/o;return{width:u,height:h,top:c,right:l+u,bottom:c+h,left:l,x:l,y:c}}function ep(e){var t=ed(e),n=e.offsetWidth,i=e.offsetHeight;// Use the clientRect sizes if it's not been transformed.
return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-i)&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function eg(e,t){var n=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t))return!0;// Give up, the result is false
if(n&&eo(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;// $FlowFixMe[prop-missing]: need a better way to handle this...
i=i.parentNode||i.host}while(i)}return!1}function em(e){return en(e).getComputedStyle(e)}function e_(e){// $FlowFixMe[incompatible-return]: assume body is always available
return((ei(e)?e.ownerDocument:e.document)||window.document).documentElement}function ev(e){return"html"===et(e)?e:// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(eo(e)?e.host:null)||e_(e)// fallback
}function eb(e){return er(e)&&"fixed"!==em(e).position?e.offsetParent:null}// `.offsetParent` reports `null` for fixed elements, while absolute elements
function ey(e){for(var t=en(e),n=eb(e);n&&["table","td","th"].indexOf(et(n))>=0&&"static"===em(n).position;)n=eb(n);return n&&("html"===et(n)||"body"===et(n)&&"static"===em(n).position)?t:n||// return the containing block
function(e){var t=/firefox/i.test(eh());if(/Trident/i.test(eh())&&er(e)&&"fixed"===em(e).position)return null;var n=ev(e);for(eo(n)&&(n=n.host);er(n)&&0>["html","body"].indexOf(et(n));){var i=em(n);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}// Gets the closest ancestor positioned element. Handles some edge cases,
(e)||t}function ew(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function eE(e,t,n){return el(e,ec(t,n))}function eA(){return{top:0,right:0,bottom:0,left:0}}function ex(e){return Object.assign({},eA(),e)}function eO(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var eC={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,r=e.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=ea(n.placement),l=ew(a),c=[I,D].indexOf(a)>=0?"height":"width";if(o&&s){var u,h=ex("number"!=typeof(u="function"==typeof(u=r.padding)?u(Object.assign({},n.rects,{placement:n.placement})):u)?u:eO(u,$)),f=ep(o),d="y"===l?j:I,p="y"===l?L:D,g=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],m=s[l]-n.rects.reference[l],_=ey(o),v=_?"y"===l?_.clientHeight||0:_.clientWidth||0:0,b=h[d],y=v-f[c]-h[p],w=v/2-f[c]/2+(g/2-m/2),E=eE(b,w,y);n.modifiersData[i]=((t={})[l]=E,t.centerOffset=E-w,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&eg(t.elements.popper,i)&&(t.elements.arrow=i)}// eslint-disable-next-line import/no-unused-modules
,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function eT(e){return e.split("-")[1]}var ek={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
function eS(e){var t,n,i,r,o,s,a,l=e.popper,c=e.popperRect,u=e.placement,h=e.variation,f=e.offsets,d=e.position,p=e.gpuAcceleration,g=e.adaptive,m=e.roundOffsets,_=e.isFixed,v=f.x,b=void 0===v?0:v,y=f.y,w=void 0===y?0:y,E="function"==typeof m?m({x:b,y:w}):{x:b,y:w};b=E.x,w=E.y;var A=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),O=I,C=j,T=window;if(g){var k=ey(l),S="clientHeight",P="clientWidth";k===en(l)&&"static"!==em(k=e_(l)).position&&"absolute"===d&&(S="scrollHeight",P="scrollWidth"),(u===j||(u===I||u===D)&&h===M)&&(C=L,w-=(_&&k===T&&T.visualViewport?T.visualViewport.height:k[S])-c.height,w*=p?1:-1),(u===I||(u===j||u===L)&&h===M)&&(O=D,b-=(_&&k===T&&T.visualViewport?T.visualViewport.width:k[P])-c.width,b*=p?1:-1)}var $=Object.assign({position:d},g&&ek),N=!0===m?(t={x:b,y:w},n=en(l),i=t.x,r=t.y,{x:eu(i*(o=n.devicePixelRatio||1))/o||0,y:eu(r*o)/o||0}):{x:b,y:w};return(b=N.x,w=N.y,p)?Object.assign({},$,((a={})[C]=x?"0":"",a[O]=A?"0":"",a.transform=1>=(T.devicePixelRatio||1)?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",a)):Object.assign({},$,((s={})[C]=x?w+"px":"",s[O]=A?b+"px":"",s.transform="",s))}var ej={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=n.adaptive,o=n.roundOffsets,s=void 0===o||o,a={placement:ea(t.placement),variation:eT(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===i||i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,eS(Object.assign({},a,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===r||r,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,eS(Object.assign({},a,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},eL={passive:!0},eD={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,o=void 0===r||r,s=i.resize,a=void 0===s||s,l=en(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(e){e.addEventListener("scroll",n.update,eL)}),a&&l.addEventListener("resize",n.update,eL),function(){o&&c.forEach(function(e){e.removeEventListener("scroll",n.update,eL)}),a&&l.removeEventListener("resize",n.update,eL)}}// eslint-disable-next-line import/no-unused-modules
,data:{}},eI={left:"right",right:"left",bottom:"top",top:"bottom"};function eP(e){return e.replace(/left|right|bottom|top/g,function(e){return eI[e]})}var e$={start:"end",end:"start"};function eN(e){return e.replace(/start|end/g,function(e){return e$[e]})}function eM(e){var t=en(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function eR(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return ed(e_(e)).left+eM(e).scrollLeft}function eF(e){// Firefox wants us to check `-x` and `-y` variations as well
var t=em(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function eq(e,t){void 0===t&&(t=[]);var n,i=function e(t){return["html","body","#document"].indexOf(et(t))>=0?t.ownerDocument.body:er(t)&&eF(t)?t:e(ev(t))}(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),o=en(i),s=r?[o].concat(o.visualViewport||[],eF(i)?i:[]):i,a=t.concat(s);return r?a:a.concat(eq(ev(s)))}function eH(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function eW(e,t,n){var i,r,o,s,a,l,c,u,h,f;return t===F?eH(function(e,t){var n=en(e),i=e_(e),r=n.visualViewport,o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;var c=ef();(c||!c&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a+eR(e),y:l}}(e,n)):ei(t)?((i=ed(t,!1,"fixed"===n)).top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i):eH((r=e_(e),s=e_(r),a=eM(r),l=null==(o=r.ownerDocument)?void 0:o.body,c=el(s.scrollWidth,s.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=el(s.scrollHeight,s.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),h=-a.scrollLeft+eR(r),f=-a.scrollTop,"rtl"===em(l||s).direction&&(h+=el(s.clientWidth,l?l.clientWidth:0)-c),{width:c,height:u,x:h,y:f}))}// A "clipping parent" is an overflowable container with the characteristic of
function ez(e){var t,n=e.reference,i=e.element,r=e.placement,o=r?ea(r):null,s=r?eT(r):null,a=n.x+n.width/2-i.width/2,l=n.y+n.height/2-i.height/2;switch(o){case j:t={x:a,y:n.y-i.height};break;case L:t={x:a,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:l};break;case I:t={x:n.x-i.width,y:l};break;default:t={x:n.x,y:n.y}}var c=o?ew(o):null;if(null!=c){var u="y"===c?"height":"width";switch(s){case N:t[c]=t[c]-(n[u]/2-i[u]/2);break;case M:t[c]=t[c]+(n[u]/2-i[u]/2)}}return t}function eB(e,t){void 0===t&&(t={});var n,i,r,o,s,a,l=t,c=l.placement,u=void 0===c?e.placement:c,h=l.strategy,f=void 0===h?e.strategy:h,d=l.boundary,p=void 0===d?R:d,g=l.rootBoundary,m=void 0===g?F:g,_=l.elementContext,v=void 0===_?q:_,b=l.altBoundary,y=l.padding,w=void 0===y?0:y,E=ex("number"!=typeof w?w:eO(w,$)),A=v===q?H:q,x=e.rects.popper,O=e.elements[void 0!==b&&b?A:v],C=(n=ei(O)?O:O.contextElement||e_(e.elements.popper),s=(o=[].concat("clippingParents"===p?(i=eq(ev(n)),ei(r=["absolute","fixed"].indexOf(em(n).position)>=0&&er(n)?ey(n):n)?i.filter(function(e){return ei(e)&&eg(e,r)&&"body"!==et(e)}):[]):[].concat(p),[m]))[0],(a=o.reduce(function(e,t){var i=eW(n,t,f);return e.top=el(i.top,e.top),e.right=ec(i.right,e.right),e.bottom=ec(i.bottom,e.bottom),e.left=el(i.left,e.left),e},eW(n,s,f))).width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a),T=ed(e.elements.reference),k=ez({reference:T,element:x,strategy:"absolute",placement:u}),S=eH(Object.assign({},x,k)),I=v===q?S:T,P={top:C.top-I.top+E.top,bottom:I.bottom-C.bottom+E.bottom,left:C.left-I.left+E.left,right:I.right-C.right+E.right},N=e.modifiersData.offset;if(v===q&&N){var M=N[u];Object.keys(P).forEach(function(e){var t=[D,L].indexOf(e)>=0?1:-1,n=[j,L].indexOf(e)>=0?"y":"x";P[e]+=M[n]*t})}return P}var eV={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var r=n.mainAxis,o=void 0===r||r,s=n.altAxis,a=void 0===s||s,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,p=void 0===d||d,g=n.allowedAutoPlacements,m=t.options.placement,_=ea(m)===m,v=l||(_||!p?[eP(m)]:function(e){if(ea(e)===P)return[];var t=eP(e);return[eN(e),t,eN(t)]}(m)),b=[m].concat(v).reduce(function(e,n){var i,r,o,s,a,l,f,d,m,_,v,b;return e.concat(ea(n)===P?(r=(i={placement:n,boundary:u,rootBoundary:h,padding:c,flipVariations:p,allowedAutoPlacements:g}).placement,o=i.boundary,s=i.rootBoundary,a=i.padding,l=i.flipVariations,d=void 0===(f=i.allowedAutoPlacements)?z:f,0===(v=(_=(m=eT(r))?l?W:W.filter(function(e){return eT(e)===m}):$).filter(function(e){return d.indexOf(e)>=0})).length&&(v=_),Object.keys(b=v.reduce(function(e,n){return e[n]=eB(t,{placement:n,boundary:o,rootBoundary:s,padding:a})[ea(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),y=t.rects.reference,w=t.rects.popper,E=new Map,A=!0,x=b[0],O=0;O<b.length;O++){var C=b[O],T=ea(C),k=eT(C)===N,S=[j,L].indexOf(T)>=0,M=S?"width":"height",R=eB(t,{placement:C,boundary:u,rootBoundary:h,altBoundary:f,padding:c}),F=S?k?D:I:k?L:j;y[M]>w[M]&&(F=eP(F));var q=eP(F),H=[];if(o&&H.push(R[T]<=0),a&&H.push(R[F]<=0,R[q]<=0),H.every(function(e){return e})){x=C,A=!1;break}E.set(C,H)}if(A)for(var B=p?3:1,V=function(e){var t=b.find(function(t){var n=E.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return x=t,"break"},U=B;U>0&&"break"!==V(U);U--);t.placement!==x&&(t.modifiersData[i]._skip=!0,t.placement=x,t.reset=!0)}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"],data:{_skip:!1}};function eU(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eK(e){return[j,D,L,I].some(function(t){return e[t]>=0})}var eX={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,s=eB(t,{elementContext:"reference"}),a=eB(t,{altBoundary:!0}),l=eU(s,i),c=eU(a,r,o),u=eK(l),h=eK(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}// eslint-disable-next-line import/no-unused-modules
},eQ={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,r=n.offset,o=void 0===r?[0,0]:r,s=z.reduce(function(e,n){var i,r,s,a,l,c;return e[n]=(i=t.rects,s=[I,j].indexOf(r=ea(n))>=0?-1:1,l=(a="function"==typeof o?o(Object.assign({},i,{placement:n})):o)[0],c=a[1],l=l||0,c=(c||0)*s,[I,D].indexOf(r)>=0?{x:c,y:l}:{x:l,y:c}),e},{}),a=s[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=s}// eslint-disable-next-line import/no-unused-modules
},eY={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[n]=ez({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},eG={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,r=n.mainAxis,o=n.altAxis,s=n.boundary,a=n.rootBoundary,l=n.altBoundary,c=n.padding,u=n.tether,h=void 0===u||u,f=n.tetherOffset,d=void 0===f?0:f,p=eB(t,{boundary:s,rootBoundary:a,padding:c,altBoundary:l}),g=ea(t.placement),m=eT(t.placement),_=!m,v=ew(g),b="x"===v?"y":"x",y=t.modifiersData.popperOffsets,w=t.rects.reference,E=t.rects.popper,A="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,x="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(y){if(void 0===r||r){var T,k="y"===v?j:I,S="y"===v?L:D,P="y"===v?"height":"width",$=y[v],M=$+p[k],R=$-p[S],F=h?-E[P]/2:0,q=m===N?w[P]:E[P],H=m===N?-E[P]:-w[P],W=t.elements.arrow,z=h&&W?ep(W):{width:0,height:0},B=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eA(),V=B[k],U=B[S],K=eE(0,w[P],z[P]),X=_?w[P]/2-F-K-V-x.mainAxis:q-K-V-x.mainAxis,Q=_?-w[P]/2+F+K+U+x.mainAxis:H+K+U+x.mainAxis,Y=t.elements.arrow&&ey(t.elements.arrow),G=Y?"y"===v?Y.clientTop||0:Y.clientLeft||0:0,J=null!=(T=null==O?void 0:O[v])?T:0,Z=$+X-J-G,ee=$+Q-J,et=eE(h?ec(M,Z):M,$,h?el(R,ee):R);y[v]=et,C[v]=et-$}if(void 0!==o&&o){var en,ei,er="x"===v?j:I,eo="x"===v?L:D,es=y[b],eu="y"===b?"height":"width",eh=es+p[er],ef=es-p[eo],ed=-1!==[j,I].indexOf(g),eg=null!=(ei=null==O?void 0:O[b])?ei:0,em=ed?eh:es-w[eu]-E[eu]-eg+x.altAxis,e_=ed?es+w[eu]+E[eu]-eg-x.altAxis:ef,ev=h&&ed?(en=eE(em,es,e_))>e_?e_:en:eE(h?em:eh,es,h?e_:ef);y[b]=ev,C[b]=ev-es}t.modifiersData[i]=C}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"]},eJ={placement:"bottom",modifiers:[],strategy:"absolute"};function eZ(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function e0(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,o=void 0===r?eJ:r;return function(e,t,n){void 0===n&&(n=o);var r,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},eJ,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],l=!1,c={state:s,setOptions:function(n){var r,l,h,f,d,p="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},o,s.options,p),s.scrollParents={reference:ei(e)?eq(e):e.contextElement?eq(e.contextElement):[],popper:eq(t)};// properties
var g=(l=Object.keys(r=[].concat(i,s.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),h=new Map,f=new Set,d=[],l.forEach(function(e){h.set(e.name,e)}),l.forEach(function(e){f.has(e.name)||function e(t){f.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!f.has(t)){var n=h.get(t);n&&e(n)}}),d.push(t)}(e)}),Z.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));// Strip out disabled modifiers
return s.orderedModifiers=g.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,i=e.effect;if("function"==typeof i){var r=i({state:s,name:t,instance:c,options:void 0===n?{}:n});a.push(r||function(){})}}),c.update()},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(eZ(t,n)){// Store the reference and popper rects to be read by modifiers
s.rects={reference:(r=ey(n),o="fixed"===s.options.strategy,a=er(r),d=er(r)&&(h=eu((u=r.getBoundingClientRect()).width)/r.offsetWidth||1,f=eu(u.height)/r.offsetHeight||1,1!==h||1!==f),p=e_(r),g=ed(t,d,o),m={scrollLeft:0,scrollTop:0},_={x:0,y:0},(a||!a&&!o)&&(("body"!==et(r)||eF(p))&&(m=(i=r)!==en(i)&&er(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:eM(i)),er(r)?(_=ed(r,!0),_.x+=r.clientLeft,_.y+=r.clientTop):p&&(_.x=eR(p))),{x:g.left+m.scrollLeft-_.x,y:g.top+m.scrollTop-_.y,width:g.width,height:g.height}),popper:ep(n)},// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
s.reset=!1,s.placement=s.options.placement,// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var i,r,o,a,u,h,f,d,p,g,m,_,v=0;v<s.orderedModifiers.length;v++){if(!0===s.reset){s.reset=!1,v=-1;continue}var b=s.orderedModifiers[v],y=b.fn,w=b.options,E=void 0===w?{}:w,A=b.name;"function"==typeof y&&(s=y({state:s,options:E,name:A,instance:c})||s)}}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){c.forceUpdate(),e(s)}))})})),r},destroy:function(){u(),l=!0}};if(!eZ(e,t))return c;function u(){a.forEach(function(e){return e()}),a=[]}return c.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}}var e1=/*#__PURE__*/e0(),e2=e0({defaultModifiers:[eD,eY,ej,es,eQ,eV,eG,eC,eX]}),e3=e0({defaultModifiers:[eD,eY,ej,es]});// eslint-disable-next-line import/no-unused-modules
e(k,S),e(k,ee);/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const e9=new Map,e4={set(e,t,n){e9.has(e)||e9.set(e,new Map);let i=e9.get(e);// make it clear we only want one instance per element
// can be removed later when multiple key/instances are fine to be used
if(!i.has(t)&&0!==i.size){// eslint-disable-next-line no-console
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,n)},get:(e,t)=>e9.has(e)&&e9.get(e).get(t)||null,remove(e,t){if(!e9.has(e))return;let n=e9.get(e);n.delete(t),0===n.size&&e9.delete(e)}},e5="transitionend",e6=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),e7=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e8=e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e))return e},te=e=>{if(!e)return 0;// Get transition-duration of the element
let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e),i=Number.parseFloat(t),r=Number.parseFloat(n);return(// Return 0 if element or transition duration is not found
i||r?(// If multiple durations are defined, take the first
t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*1e3):0)},tt=e=>{e.dispatchEvent(new Event(e5))},tn=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),ti=e=>// it's a jQuery object or a node element
    tn(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e6(e)):null,tr=e=>{if(!tn(e)||0===e.getClientRects().length)return!1;let t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){let t=e.closest("summary");if(t&&t.parentNode!==n||null===t)return!1}return t},to=e=>!!(!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled"))||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),ts=e=>{if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?ts(e.parentNode):null},ta=()=>{},tl=e=>{e.offsetHeight;// eslint-disable-line no-unused-expressions
},tc=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,tu=[],th=e=>{"loading"===document.readyState?(tu.length||document.addEventListener("DOMContentLoaded",()=>{for(let e of tu)e()}),tu.push(e)):e()},tf=()=>"rtl"===document.documentElement.dir,td=e=>{th(()=>{let t=tc();/* istanbul ignore if */if(t){let n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}})},tp=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,tg=(e,t,n=!0)=>{if(!n){tp(e);return}let i=te(t)+5,r=!1,o=({target:n})=>{n===t&&(r=!0,t.removeEventListener(e5,o),tp(e))};t.addEventListener(e5,o),setTimeout(()=>{r||tt(t)},i)},tm=(e,t,n,i)=>{let r=e.length,o=e.indexOf(t);return(// if the element does not exist in the list return an element
// depending on the direction and if cycle is allowed
-1===o?!n&&i?e[r-1]:e[0]:(o+=n?1:-1,i&&(o=(o+r)%r),e[Math.max(0,Math.min(o,r-1))]))},t_=/[^.]*(?=\..*)\.|.*/,tv=/\..*/,tb=/::\d+$/,ty={};let tw=1;const tE={mouseenter:"mouseover",mouseleave:"mouseout"},tA=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);/**
 * Private methods
 */function tx(e,t){return t&&`${t}::${tw++}`||e.uidEvent||tw++}function tO(e){let t=tx(e);return e.uidEvent=t,ty[t]=ty[t]||{},ty[t]}function tC(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function tT(e,t,n){let i="string"==typeof t,r=tj(e);return tA.has(r)||(r=e),[i,i?n:t||n,r]}function tk(e,t,n,i,r){var o,s,a;if("string"!=typeof t||!e)return;let[l,c,u]=tT(t,n,i);// in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
// this prevents the handler from being dispatched the same way as mouseover or mouseout does
t in tE&&(o=c,c=function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return o.call(this,e)});let h=tO(e),f=h[u]||(h[u]={}),d=tC(f,c,l?n:null);if(d){d.oneOff=d.oneOff&&r;return}let p=tx(c,t.replace(t_,"")),g=l?(s=c,function t(i){let r=e.querySelectorAll(n);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a of r)if(a===o)return tD(i,{delegateTarget:o}),t.oneOff&&tL.off(e,i.type,n,s),s.apply(o,[i])}):(a=c,function t(n){return tD(n,{delegateTarget:e}),t.oneOff&&tL.off(e,n.type,a),a.apply(e,[n])});g.delegationSelector=l?n:null,g.callable=c,g.oneOff=r,g.uidEvent=p,f[p]=g,e.addEventListener(u,g,l)}function tS(e,t,n,i,r){let o=tC(t[n],i,r);o&&(e.removeEventListener(n,o,!!r),delete t[n][o.uidEvent])}function tj(e){return tE[// allow to get the native events from namespaced events ('click.bs.button' --> 'click')
e=e.replace(tv,"")]||e}const tL={on(e,t,n,i){tk(e,t,n,i,!1)},one(e,t,n,i){tk(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;let[r,o,s]=tT(t,n,i),a=s!==t,l=tO(e),c=l[s]||{},u=t.startsWith(".");if(void 0!==o){// Simplest case: handler is passed, remove that listener ONLY.
if(!Object.keys(c).length)return;tS(e,l,s,o,r?n:null);return}if(u)for(let n of Object.keys(l))!function(e,t,n,i){let r=t[n]||{};for(let[o,s]of Object.entries(r))o.includes(i)&&tS(e,t,n,s.callable,s.delegationSelector)}(e,l,n,t.slice(1));for(let[n,i]of Object.entries(c)){let r=n.replace(tb,"");(!a||t.includes(r))&&tS(e,l,s,i.callable,i.delegationSelector)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;let i=tc(),r=tj(t),o=t!==r,s=null,a=!0,l=!0,c=!1;o&&i&&(s=i.Event(t,n),i(e).trigger(s),a=!s.isPropagationStopped(),l=!s.isImmediatePropagationStopped(),c=s.isDefaultPrevented());let u=tD(new Event(t,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&s&&s.preventDefault(),u}};function tD(e,t={}){for(let[n,i]of Object.entries(t))try{e[n]=i}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>i})}return e}/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */function tI(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function tP(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const t$={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${tP(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${tP(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(let i of n){let n=i.replace(/^bs/,"");t[n=n.charAt(0).toLowerCase()+n.slice(1,n.length)]=tI(e.dataset[i])}return t},getDataAttribute:(e,t)=>tI(e.getAttribute(`data-bs-${tP(t)}`))};/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Class definition
 */class tN{// Getters
static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=tn(t)?t$.getDataAttribute(t,"config"):{};// try to parse
return{...this.constructor.Default,..."object"==typeof n?n:{},...tn(t)?t$.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,i]of Object.entries(t)){let t=e[n],r=tn(t)?"element":e7(t);if(!new RegExp(i).test(r))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`)}}}/**
 * Class definition
 */class tM extends tN{constructor(e,t){if(super(),!(e=ti(e)))return;this._element=e,this._config=this._getConfig(t),e4.set(this._element,this.constructor.DATA_KEY,this)}// Public
dispose(){for(let e of(e4.remove(this._element,this.constructor.DATA_KEY),tL.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[e]=null}_queueCallback(e,t,n=!0){tg(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}// Static
static getInstance(e){return e4.get(ti(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */const tR=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");// The only valid content that could double as a selector are IDs or classes,
// so everything starting with `#` or `.`. If a "real" URL is used as the selector,
// `document.querySelector` will rightfully complain it is invalid.
// See https://github.com/twbs/bootstrap/issues/32273
if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?e6(n.trim()):null}return t},tF={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let n=[],i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},// TODO: this is now unused; remove later along with prev()
next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!to(e)&&tr(e))},getSelectorFromElement(e){let t=tR(e);return t&&tF.findOne(t)?t:null},getElementFromSelector(e){let t=tR(e);return t?tF.findOne(t):null},getMultipleElementsFromSelector(e){let t=tR(e);return t?tF.find(t):[]}},tq=(e,t="hide")=>{let n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;tL.on(document,n,`[data-bs-dismiss="${i}"]`,function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),to(this))return;let r=tF.getElementFromSelector(this)||this.closest(`.${i}`),o=e.getOrCreateInstance(r);// Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
o[t]()})},tH=".bs.alert",tW=`close${tH}`,tz=`closed${tH}`;/**
 * Class definition
 */class tB extends tM{// Getters
static get NAME(){return"alert"}// Public
close(){let e=tL.trigger(this._element,tW);if(e.defaultPrevented)return;this._element.classList.remove("show");let t=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,t)}// Private
_destroyElement(){this._element.remove(),tL.trigger(this._element,tz),this.dispose()}// Static
static jQueryInterface(e){return this.each(function(){let t=tB.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */tq(tB,"close"),/**
 * jQuery
 */td(tB);const tV='[data-bs-toggle="button"]';/**
 * Class definition
 */class tU extends tM{// Getters
static get NAME(){return"button"}// Public
toggle(){// Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}// Static
static jQueryInterface(e){return this.each(function(){let t=tU.getOrCreateInstance(this);"toggle"===e&&t[e]()})}}/**
 * Data API implementation
 */tL.on(document,"click.bs.button.data-api",tV,e=>{e.preventDefault();let t=e.target.closest(tV),n=tU.getOrCreateInstance(t);n.toggle()}),/**
 * jQuery
 */td(tU);const tK=".bs.swipe",tX=`touchstart${tK}`,tQ=`touchmove${tK}`,tY=`touchend${tK}`,tG=`pointerdown${tK}`,tJ=`pointerup${tK}`,tZ={endCallback:null,leftCallback:null,rightCallback:null},t0={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};/**
 * Class definition
 */class t1 extends tN{constructor(e,t){if(super(),this._element=e,!e||!t1.isSupported())return;this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents()}// Getters
static get Default(){return tZ}static get DefaultType(){return t0}static get NAME(){return"swipe"}// Public
dispose(){tL.off(this._element,tK)}// Private
_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),tp(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&tp(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tL.on(this._element,tG,e=>this._start(e)),tL.on(this._element,tJ,e=>this._end(e)),this._element.classList.add("pointer-event")):(tL.on(this._element,tX,e=>this._start(e)),tL.on(this._element,tQ,e=>this._move(e)),tL.on(this._element,tY,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}// Static
static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const t2=".bs.carousel",t3=".data-api",t9="next",t4="prev",t5="left",t6="right",t7=`slide${t2}`,t8=`slid${t2}`,ne=`keydown${t2}`,nt=`mouseenter${t2}`,nn=`mouseleave${t2}`,ni=`dragstart${t2}`,nr=`load${t2}${t3}`,no=`click${t2}${t3}`,ns="carousel",na="active",nl=".active",nc=".carousel-item",nu=nl+nc,nh={ArrowLeft:t6,ArrowRight:t5},nf={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},nd={interval:"(number|boolean)",// TODO:v6 remove boolean support
keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};/**
 * Class definition
 */class np extends tM{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=tF.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ns&&this.cycle()}// Getters
static get Default(){return nf}static get DefaultType(){return nd}static get NAME(){return"carousel"}// Public
next(){this._slide(t9)}nextWhenVisible(){// FIXME TODO use `document.visibilityState`
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&tr(this._element)&&this.next()}prev(){this._slide(t4)}pause(){this._isSliding&&tt(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){tL.one(this._element,t8,()=>this.cycle());return}this.cycle()}}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){tL.one(this._element,t8,()=>this.to(e));return}let n=this._getItemIndex(this._getActive());if(n===e)return;let i=e>n?t9:t4;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}// Private
_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tL.on(this._element,ne,e=>this._keydown(e)),"hover"===this._config.pause&&(tL.on(this._element,nt,()=>this.pause()),tL.on(this._element,nn,()=>this._maybeEnableCycle())),this._config.touch&&t1.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of tF.find(".carousel-item img",this._element))tL.on(e,ni,e=>e.preventDefault());this._swipeHelper=new t1(this._element,{leftCallback:()=>this._slide(this._directionToOrder(t5)),rightCallback:()=>this._slide(this._directionToOrder(t6)),endCallback:()=>{"hover"===this._config.pause&&(// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}})}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=nh[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=tF.findOne(nl,this._indicatorsElement);t.classList.remove(na),t.removeAttribute("aria-current");let n=tF.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(na),n.setAttribute("aria-current","true"))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),i=e===t9,r=t||tm(this._getItems(),n,i,this._config.wrap);if(r===n)return;let o=this._getItemIndex(r),s=t=>tL.trigger(this._element,t,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:o}),a=s(t7);if(a.defaultPrevented||!n||!r)return;let l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;let c=i?"carousel-item-start":"carousel-item-end",u=i?"carousel-item-next":"carousel-item-prev";r.classList.add(u),tl(r),n.classList.add(c),r.classList.add(c),this._queueCallback(()=>{r.classList.remove(c,u),r.classList.add(na),n.classList.remove(na,u,c),this._isSliding=!1,s(t8)},n,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return tF.findOne(nu,this._element)}_getItems(){return tF.find(nc,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return tf()?e===t5?t4:t9:e===t5?t9:t4}_orderToDirection(e){return tf()?e===t4?t5:t6:e===t4?t6:t5}// Static
static jQueryInterface(e){return this.each(function(){let t=np.getOrCreateInstance(this,e);if("number"==typeof e){t.to(e);return}if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */tL.on(document,no,"[data-bs-slide], [data-bs-slide-to]",function(e){let t=tF.getElementFromSelector(this);if(!t||!t.classList.contains(ns))return;e.preventDefault();let n=np.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){n.to(i),n._maybeEnableCycle();return}if("next"===t$.getDataAttribute(this,"slide")){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()}),tL.on(window,nr,()=>{let e=tF.find('[data-bs-ride="carousel"]');for(let t of e)np.getOrCreateInstance(t)}),/**
 * jQuery
 */td(np);const ng=".bs.collapse",nm=`show${ng}`,n_=`shown${ng}`,nv=`hide${ng}`,nb=`hidden${ng}`,ny=`click${ng}.data-api`,nw="show",nE="collapse",nA="collapsing",nx=`:scope .${nE} .${nE}`,nO='[data-bs-toggle="collapse"]',nC={parent:null,toggle:!0},nT={parent:"(null|element)",toggle:"boolean"};/**
 * Class definition
 */class nk extends tM{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=tF.find(nO);for(let e of n){let t=tF.getSelectorFromElement(e),n=tF.find(t).filter(e=>e===this._element);null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}// Getters
static get Default(){return nC}static get DefaultType(){return nT}static get NAME(){return"collapse"}// Public
toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e!==this._element).map(e=>nk.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning)return;let t=tL.trigger(this._element,nm);if(t.defaultPrevented)return;for(let t of e)t.hide();let n=this._getDimension();this._element.classList.remove(nE),this._element.classList.add(nA),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let i=n[0].toUpperCase()+n.slice(1),r=`scroll${i}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(nA),this._element.classList.add(nE,nw),this._element.style[n]="",tL.trigger(this._element,n_)},this._element,!0),this._element.style[n]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;let e=tL.trigger(this._element,nv);if(e.defaultPrevented)return;let t=this._getDimension();for(let e of(this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,tl(this._element),this._element.classList.add(nA),this._element.classList.remove(nE,nw),this._triggerArray)){let t=tF.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(nA),this._element.classList.add(nE),tL.trigger(this._element,nb)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(nw)}// Private
_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=ti(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(nO);for(let t of e){let e=tF.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=tF.find(nx,this._config.parent);// remove children if greater depth
return tF.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}// Static
static jQueryInterface(e){let t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=nk.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw TypeError(`No method named "${e}"`);n[e]()}})}}/**
 * Data API implementation
 */tL.on(document,ny,nO,function(e){for(let t of(("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault(),tF.getMultipleElementsFromSelector(this)))nk.getOrCreateInstance(t,{toggle:!1}).toggle()}),/**
 * jQuery
 */td(nk);/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const nS="dropdown",nj=".bs.dropdown",nL=".data-api",nD="ArrowDown",nI=`hide${nj}`,nP=`hidden${nj}`,n$=`show${nj}`,nN=`shown${nj}`,nM=`click${nj}${nL}`,nR=`keydown${nj}${nL}`,nF=`keyup${nj}${nL}`,nq="show",nH='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',nW=`${nH}.${nq}`,nz=".dropdown-menu",nB=tf()?"top-end":"top-start",nV=tf()?"top-start":"top-end",nU=tf()?"bottom-end":"bottom-start",nK=tf()?"bottom-start":"bottom-end",nX=tf()?"left-start":"right-start",nQ=tf()?"right-start":"left-start",nY={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},nG={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};/**
 * Class definition
 */class nJ extends tM{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,// TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
this._menu=tF.next(this._element,nz)[0]||tF.prev(this._element,nz)[0]||tF.findOne(nz,this._parent),this._inNavbar=this._detectNavbar()}// Getters
static get Default(){return nY}static get DefaultType(){return nG}static get NAME(){return nS}// Public
toggle(){return this._isShown()?this.hide():this.show()}show(){if(to(this._element)||this._isShown())return;let e={relatedTarget:this._element},t=tL.trigger(this._element,n$,e);if(!t.defaultPrevented){// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let e of[].concat(...document.body.children))tL.on(e,"mouseover",ta);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(nq),this._element.classList.add(nq),tL.trigger(this._element,nN,e)}}hide(){if(to(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}// Private
_completeHide(e){let t=tL.trigger(this._element,nI,e);if(!t.defaultPrevented){// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))tL.off(e,"mouseover",ta);this._popper&&this._popper.destroy(),this._menu.classList.remove(nq),this._element.classList.remove(nq),this._element.setAttribute("aria-expanded","false"),t$.removeDataAttribute(this._menu,"popper"),tL.trigger(this._element,nP,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!tn(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw TypeError(`${nS.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===k)throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:tn(this._config.reference)?e=ti(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=k.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains(nq)}_getPlacement(){let e=this._parent;if(e.classList.contains("dropend"))return nX;if(e.classList.contains("dropstart"))return nQ;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";// We need to trim the value because custom properties can also include spaces
let t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?nV:nB:t?nK:nU}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(t$.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...tp(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){let n=tF.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(e=>tr(e));n.length&&// if target isn't included in items (e.g. when expanding the dropdown)
// allow cycling to get the last item in case key equals ARROW_UP_KEY
tm(n,t,e===nD,!n.includes(t)).focus()}// Static
static jQueryInterface(e){return this.each(function(){let t=nJ.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;let t=tF.find(nW);for(let n of t){let t=nJ.getInstance(n);if(!t||!1===t._config.autoClose)continue;let i=e.composedPath(),r=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!r||"outside"===t._config.autoClose&&r||t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let o={relatedTarget:t._element};"click"===e.type&&(o.clickEvent=e),t._completeHide(o)}}static dataApiKeydownHandler(e){// If not an UP | DOWN | ESCAPE key => not a dropdown command
// If input/textarea && if key is other than ESCAPE => not a dropdown command
let t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,i=["ArrowUp",nD].includes(e.key);if(!i&&!n||t&&!n)return;e.preventDefault();// TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
let r=this.matches(nH)?this:tF.prev(this,nH)[0]||tF.next(this,nH)[0]||tF.findOne(nH,e.delegateTarget.parentNode),o=nJ.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(// else is escape and we check if it is shown
e.stopPropagation(),o.hide(),r.focus())}}/**
 * Data API implementation
 */tL.on(document,nR,nH,nJ.dataApiKeydownHandler),tL.on(document,nR,nz,nJ.dataApiKeydownHandler),tL.on(document,nM,nJ.clearMenus),tL.on(document,nF,nJ.clearMenus),tL.on(document,nM,nH,function(e){e.preventDefault(),nJ.getOrCreateInstance(this).toggle()}),/**
 * jQuery
 */td(nJ);/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const nZ="backdrop",n0="show",n1=`mousedown.bs.${nZ}`,n2={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,// if false, we use the backdrop helper without adding any element to the dom
rootElement:"body"// give the choice to place backdrop under different elements
},n3={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};/**
 * Class definition
 */class n9 extends tN{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}// Getters
static get Default(){return n2}static get DefaultType(){return n3}static get NAME(){return nZ}// Public
show(e){if(!this._config.isVisible){tp(e);return}this._append();let t=this._getElement();this._config.isAnimated&&tl(t),t.classList.add(n0),this._emulateAnimation(()=>{tp(e)})}hide(e){if(!this._config.isVisible){tp(e);return}this._getElement().classList.remove(n0),this._emulateAnimation(()=>{this.dispose(),tp(e)})}dispose(){this._isAppended&&(tL.off(this._element,n1),this._element.remove(),this._isAppended=!1)}// Private
_getElement(){if(!this._element){let e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return(// use getElement() with the default "body" to get a fresh Element on each instantiation
e.rootElement=ti(e.rootElement),e)}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),tL.on(e,n1,()=>{tp(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){tg(e,this._getElement(),this._config.isAnimated)}}const n4=".bs.focustrap",n5=`focusin${n4}`,n6=`keydown.tab${n4}`,n7="backward",n8={autofocus:!0,trapElement:null// The element to trap focus inside of
},ie={autofocus:"boolean",trapElement:"element"};/**
 * Class definition
 */class it extends tN{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}// Getters
static get Default(){return n8}static get DefaultType(){return ie}static get NAME(){return"focustrap"}// Public
activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tL.off(document,n4),tL.on(document,n5,e=>this._handleFocusin(e)),tL.on(document,n6,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tL.off(document,n4))}// Private
_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=tF.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===n7?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?n7:"forward")}}/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const ii=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ir=".sticky-top",io="padding-right",is="margin-right";/**
 * Class definition
 */class ia{constructor(){this._element=document.body}// Public
getWidth(){// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),// give padding to element to balance the hidden scrollbar width
this._setElementAttributes(this._element,io,t=>t+e),// trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
this._setElementAttributes(ii,io,t=>t+e),this._setElementAttributes(ir,is,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,io),this._resetElementAttributes(ii,io),this._resetElementAttributes(ir,is)}isOverflowing(){return this.getWidth()>0}// Private
_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){let i=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);let r=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(r))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&t$.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=t$.getDataAttribute(e,t);// We only want to remove the property if the value is `null`; the value can also be zero
if(null===n){e.style.removeProperty(t);return}t$.removeDataAttribute(e,t),e.style.setProperty(t,n)})}_applyManipulationCallback(e,t){if(tn(e)){t(e);return}for(let n of tF.find(e,this._element))t(n)}}const il=".bs.modal",ic=`hide${il}`,iu=`hidePrevented${il}`,ih=`hidden${il}`,id=`show${il}`,ip=`shown${il}`,ig=`resize${il}`,im=`click.dismiss${il}`,i_=`mousedown.dismiss${il}`,iv=`keydown.dismiss${il}`,ib=`click${il}.data-api`,iy="modal-open",iw="show",iE="modal-static",iA={backdrop:!0,focus:!0,keyboard:!0},ix={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};/**
 * Class definition
 */class iO extends tM{constructor(e,t){super(e,t),this._dialog=tF.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ia,this._addEventListeners()}// Getters
static get Default(){return iA}static get DefaultType(){return ix}static get NAME(){return"modal"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;let t=tL.trigger(this._element,id,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(iy),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;let e=tL.trigger(this._element,ic);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(iw),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){tL.off(window,il),tL.off(this._dialog,il),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}// Private
_initializeBackDrop(){return new n9({isVisible:!!this._config.backdrop,// 'static' option will be translated to true, and booleans will keep their value,
isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new it({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let t=tF.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),tl(this._element),this._element.classList.add(iw),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tL.trigger(this._element,ip,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){tL.on(this._element,iv,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),tL.on(window,ig,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),tL.on(this._element,i_,e=>{// a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
tL.one(this._element,im,t=>{if(this._element===e.target&&this._element===t.target){if("static"===this._config.backdrop){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(iy),this._resetAdjustments(),this._scrollBar.reset(),tL.trigger(this._element,ih)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){let e=tL.trigger(this._element,iu);if(e.defaultPrevented)return;let t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;// return if the following background transition hasn't yet completed
"hidden"===n||this._element.classList.contains(iE)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(iE),this._queueCallback(()=>{this._element.classList.remove(iE),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}/**
   * The following methods are used to handle overflowing modals
   */_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=tf()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){let e=tf()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}// Static
static jQueryInterface(e,t){return this.each(function(){let n=iO.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw TypeError(`No method named "${e}"`);n[e](t)}})}}/**
 * Data API implementation
 */tL.on(document,ib,'[data-bs-toggle="modal"]',function(e){let t=tF.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tL.one(t,id,e=>{e.defaultPrevented||tL.one(t,ih,()=>{tr(this)&&this.focus()})});// avoid conflict when clicking modal toggler while another one is open
let n=tF.findOne(".modal.show");n&&iO.getInstance(n).hide();let i=iO.getOrCreateInstance(t);i.toggle(this)}),tq(iO),/**
 * jQuery
 */td(iO);const iC=".bs.offcanvas",iT=".data-api",ik=`load${iC}${iT}`,iS="show",ij="showing",iL="hiding",iD=".offcanvas.show",iI=`show${iC}`,iP=`shown${iC}`,i$=`hide${iC}`,iN=`hidePrevented${iC}`,iM=`hidden${iC}`,iR=`resize${iC}`,iF=`click${iC}${iT}`,iq=`keydown.dismiss${iC}`,iH={backdrop:!0,keyboard:!0,scroll:!1},iW={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};/**
 * Class definition
 */class iz extends tM{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}// Getters
static get Default(){return iH}static get DefaultType(){return iW}static get NAME(){return"offcanvas"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;let t=tL.trigger(this._element,iI,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ia().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ij),this._queueCallback(()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(iS),this._element.classList.remove(ij),tL.trigger(this._element,iP,{relatedTarget:e})},this._element,!0))}hide(){if(!this._isShown)return;let e=tL.trigger(this._element,i$);e.defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(iL),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(iS,iL),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ia().reset(),tL.trigger(this._element,iM)},this._element,!0))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}// Private
_initializeBackDrop(){// 'static' option will be translated to true, and booleans will keep their value
let e=!!this._config.backdrop;return new n9({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{if("static"===this._config.backdrop){tL.trigger(this._element,iN);return}this.hide()}:null})}_initializeFocusTrap(){return new it({trapElement:this._element})}_addEventListeners(){tL.on(this._element,iq,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}tL.trigger(this._element,iN)}})}// Static
static jQueryInterface(e){return this.each(function(){let t=iz.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */tL.on(document,iF,'[data-bs-toggle="offcanvas"]',function(e){let t=tF.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),to(this))return;tL.one(t,iM,()=>{// focus on trigger when it is closed
tr(this)&&this.focus()});// avoid conflict when clicking a toggler of an offcanvas, while another is open
let n=tF.findOne(iD);n&&n!==t&&iz.getInstance(n).hide();let i=iz.getOrCreateInstance(t);i.toggle(this)}),tL.on(window,ik,()=>{for(let e of tF.find(iD))iz.getOrCreateInstance(e).show()}),tL.on(window,iR,()=>{for(let e of tF.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&iz.getOrCreateInstance(e).hide()}),tq(iz),/**
 * jQuery
 */td(iz);const iB={// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},iV=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),iU=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,iK=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?!iV.has(n)||!!iU.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},iX={allowList:iB,content:{},// { selector : text ,  selector2 : text2 , }
extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},iQ={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},iY={entry:"(string|element|function|null)",selector:"(string|element)"};/**
 * Class definition
 */class iG extends tN{constructor(e){super(),this._config=this._getConfig(e)}// Getters
static get Default(){return iX}static get DefaultType(){return iQ}static get NAME(){return"TemplateFactory"}// Public
getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement("div");for(let[t,n]of(e.innerHTML=this._maybeSanitize(this._config.template),Object.entries(this._config.content)))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}// Private
_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},iY)}_setContent(e,t,n){let i=tF.findOne(n,e);if(i){if(!(t=this._resolvePossibleFunction(t))){i.remove();return}if(tn(t)){this._putElementInTemplate(ti(t),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(t);return}i.textContent=t}}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);let i=new window.DOMParser,r=i.parseFromString(e,"text/html"),o=[].concat(...r.body.querySelectorAll("*"));for(let e of o){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let i=[].concat(...e.attributes),r=[].concat(t["*"]||[],t[n]||[]);for(let t of i)iK(t,r)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return tp(e,[this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const iJ=new Set(["sanitize","allowList","sanitizeFn"]),iZ="fade",i0="show",i1=".modal",i2="hide.bs.modal",i3="hover",i9="focus",i4={AUTO:"auto",TOP:"top",RIGHT:tf()?"left":"right",BOTTOM:"bottom",LEFT:tf()?"right":"left"},i5={allowList:iB,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},i6={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};/**
 * Class definition
 */class i7 extends tM{constructor(e,t){if(void 0===k)throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),// Private
this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,// Protected
this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}// Getters
static get Default(){return i5}static get DefaultType(){return i6}static get NAME(){return"tooltip"}// Public
enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),tL.off(this._element.closest(i1),i2,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;let e=tL.trigger(this._element,this.constructor.eventName("show")),t=ts(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;// TODO: v6 remove this or make it optional
this._disposePopper();let i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));let{container:r}=this._config;// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),tL.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(i0),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))tL.on(e,"mouseover",ta);this._queueCallback(()=>{tL.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(!this._isShown())return;let e=tL.trigger(this._element,this.constructor.eventName("hide"));if(e.defaultPrevented)return;let t=this._getTipElement();// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if(t.classList.remove(i0),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))tL.off(e,"mouseover",ta);this._activeTrigger.click=!1,this._activeTrigger[i9]=!1,this._activeTrigger[i3]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tL.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}// Protected
_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();// TODO: remove this check in v6
if(!t)return null;t.classList.remove(iZ,i0),// TODO: v6 the following can be achieved with CSS only
t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=e8(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(iZ),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new iG({...this._config,content:// to override config.content in case of popover
e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}// Private
_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(iZ)}_isShown(){return this.tip&&this.tip.classList.contains(i0)}_createPopper(e){let t=tp(this._config.placement,[this,e,this._element]),n=i4[t.toUpperCase()];return k.createPopper(this._element,e,this._getPopperConfig(n))}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return tp(e,[this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{// Pre-set Popper's placement attribute in order to read the arrow sizes properly.
// Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...tp(this._config.popperConfig,[t])}}_setListeners(){let e=this._config.trigger.split(" ");for(let t of e)if("click"===t)tL.on(this._element,this.constructor.eventName("click"),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t.toggle()});else if("manual"!==t){let e=t===i3?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),n=t===i3?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");tL.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?i9:i3]=!0,t._enter()}),tL.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?i9:i3]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},tL.on(this._element.closest(i1),i2,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=t$.getDataAttributes(this._element);for(let e of Object.keys(t))iJ.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:ti(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);// In the future can be replaced with:
// const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
// `Object.fromEntries(keysWithDifferentValues)`
return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}// Static
static jQueryInterface(e){return this.each(function(){let t=i7.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * jQuery
 */td(i7);const i8={...i7.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},re={...i7.DefaultType,content:"(null|string|element|function)"};/**
 * Class definition
 */class rt extends i7{// Getters
static get Default(){return i8}static get DefaultType(){return re}static get NAME(){return"popover"}// Overrides
_isWithContent(){return this._getTitle()||this._getContent()}// Private
_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}// Static
static jQueryInterface(e){return this.each(function(){let t=rt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * jQuery
 */td(rt);const rn=".bs.scrollspy",ri=`activate${rn}`,rr=`click${rn}`,ro=`load${rn}.data-api`,rs="active",ra="[href]",rl=".nav-link",rc=`${rl}, .nav-item > ${rl}, .list-group-item`,ru={offset:null,// TODO: v6 @deprecated, keep it for backwards compatibility reasons
rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},rh={offset:"(number|null)",// TODO v6 @deprecated, keep it for backwards compatibility reasons
rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};/**
 * Class definition
 */class rf extends tM{constructor(e,t){super(e,t),// this._element is the observablesContainer and config.target the menu links wrapper
this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}// Getters
static get Default(){return ru}static get DefaultType(){return rh}static get NAME(){return"scrollspy"}// Public
refresh(){for(let e of(this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver(),this._observableSections.values()))this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}// Private
_configAfterMerge(e){return(// TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
e.target=ti(e.target)||document.body,// TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e)}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(// unregister any previous listeners
tL.off(this._config.target,rr),tL.on(this._config.target,rr,ra,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:i,behavior:"smooth"});return}// Chrome 60 doesn't support `scrollTo`
n.scrollTop=i}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}// The logic of selection
_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;for(let o of(this._previousScrollData.parentScrollTop=i,e)){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}let e=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;// if we are scrolling down, pick the bigger offsetTop
if(r&&e){// if parent isn't scrolled, let's keep the first visible item, breaking the iteration
if(n(o),!i)return;continue}// if we are scrolling up, pick the smallest offsetTop
r||e||n(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=tF.find(ra,this._config.target);for(let t of e){// ensure that the anchor has an id and is not disabled
if(!t.hash||to(t))continue;let e=tF.findOne(decodeURI(t.hash),this._element);// ensure that the observableSection exists & is visible
tr(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(rs),this._activateParents(e),tL.trigger(this._element,ri,{relatedTarget:e}))}_activateParents(e){// Activate dropdown parents
if(e.classList.contains("dropdown-item")){tF.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(rs);return}for(let t of tF.parents(e,".nav, .list-group"))// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
for(let e of tF.prev(t,rc))e.classList.add(rs)}_clearActiveClass(e){e.classList.remove(rs);let t=tF.find(`${ra}.${rs}`,e);for(let e of t)e.classList.remove(rs)}// Static
static jQueryInterface(e){return this.each(function(){let t=rf.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */tL.on(window,ro,()=>{for(let e of tF.find('[data-bs-spy="scroll"]'))rf.getOrCreateInstance(e)}),/**
 * jQuery
 */td(rf);const rd=".bs.tab",rp=`hide${rd}`,rg=`hidden${rd}`,rm=`show${rd}`,r_=`shown${rd}`,rv=`click${rd}`,rb=`keydown${rd}`,ry=`load${rd}`,rw="ArrowRight",rE="ArrowDown",rA="Home",rx="active",rO="fade",rC="show",rT=".dropdown-toggle",rk=`:not(${rT})`,rS=`.nav-link${rk}, .list-group-item${rk}, [role="tab"]${rk}`,rj='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',rL=`${rS}, ${rj}`,rD=`.${rx}[data-bs-toggle="tab"], .${rx}[data-bs-toggle="pill"], .${rx}[data-bs-toggle="list"]`;/**
 * Class definition
 */class rI extends tM{constructor(e){if(super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),!this._parent)return;// Set up initial aria attributes
this._setInitialAttributes(this._parent,this._getChildren()),tL.on(this._element,rb,e=>this._keydown(e))}// Getters
static get NAME(){return"tab"}// Public
show(){// Shows this elem and deactivate the active sibling if exists
let e=this._element;if(this._elemIsActive(e))return;// Search for active tab on same parent to deactivate it
let t=this._getActiveElem(),n=t?tL.trigger(t,rp,{relatedTarget:e}):null,i=tL.trigger(e,rm,{relatedTarget:t});i.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}// Private
_activate(e,t){e&&(e.classList.add(rx),this._activate(tF.getElementFromSelector(e)),this._queueCallback(()=>{if("tab"!==e.getAttribute("role")){e.classList.add(rC);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tL.trigger(e,r_,{relatedTarget:t})},e,e.classList.contains(rO)))}_deactivate(e,t){e&&(e.classList.remove(rx),e.blur(),this._deactivate(tF.getElementFromSelector(e)),this._queueCallback(()=>{if("tab"!==e.getAttribute("role")){e.classList.remove(rC);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tL.trigger(e,rg,{relatedTarget:t})},e,e.classList.contains(rO)))}_keydown(e){let t;if(!["ArrowLeft",rw,"ArrowUp",rE,rA,"End"].includes(e.key))return;e.stopPropagation(),e.preventDefault();let n=this._getChildren().filter(e=>!to(e));if([rA,"End"].includes(e.key))t=n[e.key===rA?0:n.length-1];else{let i=[rw,rE].includes(e.key);t=tm(n,e.target,i,!0)}t&&(t.focus({preventScroll:!0}),rI.getOrCreateInstance(t).show())}_getChildren(){// collection of inner elements
return tF.find(rL,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){for(let n of(this._setAttributeIfNotExists(e,"role","tablist"),t))this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),// set attributes to the related panel too
this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=tF.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains("dropdown"))return;let i=(e,i)=>{let r=tF.findOne(e,n);r&&r.classList.toggle(i,t)};i(rT,rx),i(".dropdown-menu",rC),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(rx)}// Try to get the inner element (usually the .nav-link)
_getInnerElement(e){return e.matches(rL)?e:tF.findOne(rL,e)}// Try to get the outer element (usually the .nav-item)
_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}// Static
static jQueryInterface(e){return this.each(function(){let t=rI.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */tL.on(document,rv,rj,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),to(this)||rI.getOrCreateInstance(this).show()}),/**
 * Initialize on focus
 */tL.on(window,ry,()=>{for(let e of tF.find(rD))rI.getOrCreateInstance(e)}),/**
 * jQuery
 */td(rI);const rP=".bs.toast",r$=`mouseover${rP}`,rN=`mouseout${rP}`,rM=`focusin${rP}`,rR=`focusout${rP}`,rF=`hide${rP}`,rq=`hidden${rP}`,rH=`show${rP}`,rW=`shown${rP}`,rz="hide",rB="show",rV="showing",rU={animation:"boolean",autohide:"boolean",delay:"number"},rK={animation:!0,autohide:!0,delay:5e3};/**
 * Class definition
 */class rX extends tM{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}// Getters
static get Default(){return rK}static get DefaultType(){return rU}static get NAME(){return"toast"}// Public
show(){let e=tL.trigger(this._element,rH);e.defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(rz),tl(this._element),this._element.classList.add(rB,rV),this._queueCallback(()=>{this._element.classList.remove(rV),tL.trigger(this._element,rW),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){if(!this.isShown())return;let e=tL.trigger(this._element,rF);e.defaultPrevented||(this._element.classList.add(rV),this._queueCallback(()=>{this._element.classList.add(rz),this._element.classList.remove(rV,rB),tL.trigger(this._element,rq)},this._element,this._config.animation))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(rB),super.dispose()}isShown(){return this._element.classList.contains(rB)}// Private
_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t){this._clearTimeout();return}let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tL.on(this._element,r$,e=>this._onInteraction(e,!0)),tL.on(this._element,rN,e=>this._onInteraction(e,!1)),tL.on(this._element,rM,e=>this._onInteraction(e,!0)),tL.on(this._element,rR,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}// Static
static jQueryInterface(e){return this.each(function(){let t=rX.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */tq(rX),/**
 * jQuery
 */td(rX);var rQ="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==T?T:"undefined"!=typeof self?self:{};function rY(e,t){return e(t={exports:{}},t.exports),t.exports}var rG=rY(function(e){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t);// eslint-disable-line no-undef
}),rJ=rY(function(e){var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t);// eslint-disable-line no-undef
});rJ.version;var rZ=function(e){return"object"==typeof e?null!==e:"function"==typeof e},r0=function(e){if(!rZ(e))throw TypeError(e+" is not an object!");return e},r1=function(e){try{return!!e()}catch(e){return!0}},r2=!r1(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),r3=rG.document,r9=rZ(r3)&&rZ(r3.createElement),r4=function(e){return r9?r3.createElement(e):{}},r5=!r2&&!r1(function(){return 7!=Object.defineProperty(r4("div"),"a",{get:function(){return 7}}).a}),r6=function(e,t){var n,i;if(!rZ(e))return e;if(t&&"function"==typeof(n=e.toString)&&!rZ(i=n.call(e))||"function"==typeof(n=e.valueOf)&&!rZ(i=n.call(e))||!t&&"function"==typeof(n=e.toString)&&!rZ(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},r7=Object.defineProperty,r8={f:r2?Object.defineProperty:function(e,t,n){if(r0(e),t=r6(t,!0),r0(n),r5)try{return r7(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},oe=r2?function(e,t,n){return r8.f(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})}:function(e,t,n){return e[t]=n,e},ot={}.hasOwnProperty,on=function(e,t){return ot.call(e,t)},oi=0,or=Math.random(),oo=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++oi+or).toString(36))},os=rY(function(e){var t="__core-js_shared__",n=rG[t]||(rG[t]={});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:rJ.version,mode:"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})}),oa=os("native-function-to-string",Function.toString),ol=rY(function(e){var t=oo("src"),n="toString",i=(""+oa).split(n);rJ.inspectSource=function(e){return oa.call(e)},(e.exports=function(e,n,r,o){var s="function"==typeof r;s&&(on(r,"name")||oe(r,"name",n)),e[n]!==r&&(s&&(on(r,t)||oe(r,t,e[n]?""+e[n]:i.join(String(n)))),e===rG?e[n]=r:o?e[n]?e[n]=r:oe(e,n,r):(delete e[n],oe(e,n,r)));// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,n,function(){return"function"==typeof this&&this[t]||oa.call(this)})}),oc=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},ou=function(e,t,n){if(oc(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}},oh="prototype",of=function(e,t,n){var i,r,o,s,a=e&of.F,l=e&of.G,c=e&of.S,u=e&of.P,h=e&of.B,f=l?rG:c?rG[t]||(rG[t]={}):(rG[t]||{})[oh],d=l?rJ:rJ[t]||(rJ[t]={}),p=d[oh]||(d[oh]={});for(i in l&&(n=t),n)// export native or passed
o=(// contains in native
(r=!a&&f&&void 0!==f[i])?f:n)[i],// bind timers to global for call from export context
s=h&&r?ou(o,rG):u&&"function"==typeof o?ou(Function.call,o):o,f&&ol(f,i,o,e&of.U),d[i]!=o&&oe(d,i,s),u&&p[i]!=o&&(p[i]=o)};rG.core=rJ,// type bitmap
of.F=1,of.G=2,of.S=4,of.P=8,of.B=16,of.W=32,of.U=64,of.R=128;var od={}.toString,op=function(e){return od.call(e).slice(8,-1)},og=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==op(e)?e.split(""):Object(e)},om=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e},o_=function(e){return og(om(e))},ov=Math.ceil,ob=Math.floor,oy=function(e){return isNaN(e=+e)?0:(e>0?ob:ov)(e)},ow=Math.min,oE=function(e){return e>0?ow(oy(e),9007199254740991):0;// pow(2, 53) - 1 == 9007199254740991
},oA=Math.max,ox=Math.min,oO=os("keys"),oC=function(e,t,n){for(var i,r=o_(e),o=oE(r.length),s=(i=oy(i=n))<0?oA(i+o,0):ox(i,o);o>s;s++)if(s in r&&r[s]===t)return s||0;return -1},oT=oO[n="IE_PROTO"]||(oO[n]=oo(n)),ok=function(e,t){var n,i=o_(e),r=0,o=[];for(n in i)n!=oT&&on(i,n)&&o.push(n);// Don't enum bug & hidden keys
for(;t.length>r;)on(i,n=t[r++])&&(~oC(o,n)||o.push(n));return o},oS="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),oj=Object.keys||function(e){return ok(e,oS)},oL={f:Object.getOwnPropertySymbols},oD={f:{}.propertyIsEnumerable},oI=function(e){return Object(om(e))},oP=Object.assign,o$=!oP||r1(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=oP({},e)[n]||Object.keys(oP({},t)).join("")!=i})?function(e,t){for(var n=oI(e),i=arguments.length,r=1,o=oL.f,s=oD.f;i>r;)for(var a,l=og(arguments[r++]),c=o?oj(l).concat(o(l)):oj(l),u=c.length,h=0;u>h;)a=c[h++],(!r2||s.call(l,a))&&(n[a]=l[a]);return n}:oP;// 19.1.3.1 Object.assign(target, source)
of(of.S+of.F,"Object",{assign:o$});var oN=rY(function(e){var t=os("wks"),n=rG.Symbol,i="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=i&&n[e]||(i?n:oo)("Symbol."+e))}).store=t}),oM=oN("match"),oR=function(e){var t;return rZ(e)&&(void 0!==(t=e[oM])?!!t:"RegExp"==op(e))},oF=oN("species"),oq=function(e,t){var n,i=r0(e).constructor;return void 0===i||void 0==(n=r0(i)[oF])?t:oc(n)},oH=function(e,t){var n,i,r=String(om(e)),o=oy(t),s=r.length;return o<0||o>=s?"":(n=r.charCodeAt(o))<55296||n>56319||o+1===s||(i=r.charCodeAt(o+1))<56320||i>57343?r.charAt(o):r.slice(o,o+2)},oW=function(e,t,n){return t+(n?oH(e,t).length:1)},oz=oN("toStringTag"),oB="Arguments"==op(function(){return arguments}()),oV=function(e,t){try{return e[t]}catch(e){}},oU=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=oV(t=Object(e),oz))?n:oB?op(t):"Object"==(i=op(t))&&"function"==typeof t.callee?"Arguments":i},oK=RegExp.prototype.exec,oX=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==oU(e))throw TypeError("RegExp#exec called on incompatible receiver");return oK.call(e,t)},oQ=function(){var e=r0(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},oY=RegExp.prototype.exec,oG=String.prototype.replace,oJ=oY,oZ="lastIndex",o0=(i=/a/,r=/b*/g,oY.call(i,"a"),oY.call(r,"a"),0!==i[oZ]||0!==r[oZ]),o1=void 0!==/()??/.exec("")[1];(o0||o1)&&(oJ=function(e){var t,n,i,r;return o1&&(n=RegExp("^"+this.source+"$(?!\\s)",oQ.call(this))),o0&&(t=this[oZ]),i=oY.call(this,e),o0&&i&&(this[oZ]=this.global?i.index+i[0].length:t),o1&&i&&i.length>1&&// for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
// eslint-disable-next-line no-loop-func
oG.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i});var o2=oJ;of({target:"RegExp",proto:!0,forced:o2!==/./.exec},{exec:o2});var o3=oN("species"),o9=!r1(function(){// #replace needs built-in support for named groups.
// #match works fine because it just return the exec results, even if it has
// a "grops" property.
var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),o4=(s=(o=/(?:)/).exec,o.exec=function(){return s.apply(this,arguments)},2===(a="ab".split(o)).length&&"a"===a[0]&&"b"===a[1]),o5=function(e,t,n){var i=oN(e),r=!r1(function(){// String methods call symbol-named RegEp methods
var t={};return t[i]=function(){return 7},7!=""[e](t)}),o=r?!r1(function(){// Symbol-named RegExp methods call .exec
var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
n.constructor={},n.constructor[o3]=function(){return n}),n[i](""),!t}):void 0;if(!r||!o||"replace"===e&&!o9||"split"===e&&!o4){var s=/./[i],a=n(om,i,""[e],function(e,t,n,i,o){return t.exec===o2?r&&!o?{done:!0,value:s.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),l=a[0],c=a[1];ol(String.prototype,e,l),oe(RegExp.prototype,i,2==t?function(e,t){return c.call(e,this,t)}:function(e){return c.call(e,this)})}},o6=Math.min,o7=[].push,o8="split",se="length",st="lastIndex",sn=!r1(function(){RegExp(4294967295,"y")});// @@split logic
o5("split",2,function(e,t,n,i){var r;return r="c"=="abbc"[o8](/(b)*/)[1]||4!="test"[o8](/(?:)/,-1)[se]||2!="ab"[o8](/(?:ab)*/)[se]||4!="."[o8](/(.?)(.?)/)[se]||"."[o8](/()()/)[se]>1||""[o8](/.?/)[se]?function(e,t){var i,r,o,s=String(this);if(void 0===e&&0===t)return[];// If `separator` is not a regex, use native split
if(!oR(e))return n.call(s,e,t);for(var a=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=void 0===t?4294967295:t>>>0,h=RegExp(e.source,l+"g");(i=o2.call(h,s))&&(!((r=h[st])>c)||(a.push(s.slice(c,i.index)),i[se]>1&&i.index<s[se]&&o7.apply(a,i.slice(1)),o=i[0][se],c=r,!(a[se]>=u)));)h[st]===i.index&&h[st]++;// Avoid an infinite loop
return c===s[se]?(o||!h.test(""))&&a.push(""):a.push(s.slice(c)),a[se]>u?a.slice(0,u):a}:"0"[o8](void 0,0)[se]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[// `String.prototype.split` method
// https://tc39.github.io/ecma262/#sec-string.prototype.split
function(n,i){var o=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,o,i):r.call(String(o),n,i)},// `RegExp.prototype[@@split]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(e,t){var o=i(r,e,this,t,r!==n);if(o.done)return o.value;var s=r0(e),a=String(this),l=oq(s,RegExp),c=s.unicode,u=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(sn?"y":"g"),h=new l(sn?s:"^(?:"+s.source+")",u),f=void 0===t?4294967295:t>>>0;if(0===f)return[];if(0===a.length)return null===oX(h,a)?[a]:[];for(var d=0,p=0,g=[];p<a.length;){h.lastIndex=sn?p:0;var m,_=oX(h,sn?a:a.slice(p));if(null===_||(m=o6(oE(h.lastIndex+(sn?0:p)),a.length))===d)p=oW(a,p,c);else{if(g.push(a.slice(d,p)),g.length===f)return g;for(var v=1;v<=_.length-1;v++)if(g.push(_[v]),g.length===f)return g;p=d=m}}return g.push(a.slice(d)),g}]});// 7.2.2 IsArray(argument)
var si=Array.isArray||function(e){return"Array"==op(e)},sr=oN("species"),so=function(e){var t;return si(e)&&("function"==typeof(t=e.constructor)&&(t===Array||si(t.prototype))&&(t=void 0),rZ(t)&&null===(t=t[sr])&&(t=void 0)),void 0===t?Array:t},ss=function(e,t,n){for(var i,r,o,s,a=oI(e),l=og(a),c=ou(t,n,3),u=oE(l.length),h=0,f=(i=e,r=u,new(so(i))(r));u>h;h++)h in l&&(s=c(l[h],h,a),1)&&(f[h]=s);return f};of(of.P+!((l=[].map)&&r1(function(){// eslint-disable-next-line no-useless-call
l.call(null,function(){},1)}))*of.F,"Array",{// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(e/* , thisArg */){return ss(this,e,arguments[1])}});var sa=Math.max,sl=Math.min,sc=Math.floor,su=/\$([$&`']|\d\d?|<[^>]*>)/g,sh=/\$([$&`']|\d\d?)/g;// @@replace logic
o5("replace",2,function(e,t,n,i){return[// `String.prototype.replace` method
// https://tc39.github.io/ecma262/#sec-string.prototype.replace
function(i,r){var o=e(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,o,r):n.call(String(o),i,r)},// `RegExp.prototype[@@replace]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
function(e,t){var r=i(n,e,this,t);if(r.done)return r.value;var o=r0(e),s=String(this),a="function"==typeof t;a||(t=String(t));var l=o.global;if(l){var c=o.unicode;o.lastIndex=0}for(var u=[];;){var h=oX(o,s);if(null===h||(u.push(h),!l))break;""===String(h[0])&&(o.lastIndex=oW(s,oE(o.lastIndex),c))}for(var f="",d=0,p=0;p<u.length;p++){// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var g,m=String((h=u[p])[0]),_=sa(sl(oy(h.index),s.length),0),v=[],b=1;b<h.length;b++)v.push(void 0===(g=h[b])?g:String(g));var y=h.groups;if(a){var w=[m].concat(v,_,s);void 0!==y&&w.push(y);var E=String(t.apply(void 0,w))}else E=// https://tc39.github.io/ecma262/#sec-getsubstitution
function(e,t,i,r,o,s){var a=i+e.length,l=r.length,c=sh;return void 0!==o&&(o=oI(o),c=su),n.call(s,c,function(n,s){var c;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(a);case"<":c=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return n;if(u>l){var h=sc(u/10);if(0===h)return n;if(h<=l)return void 0===r[h-1]?s.charAt(1):r[h-1]+s.charAt(1);return n}c=r[u-1]}return void 0===c?"":c})}(m,s,_,v,y,t);_>=d&&(f+=s.slice(d,_)+E,d=_+m.length)}return f+s.slice(d)}]});var sf=rY(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The name of the HTML attribute that holds the element key
 * (e.g. `<div key="foo">`). The attribute value, if it exists, is then used
 * as the default key when importing an element.
 * If null, no attribute value is used as the default key.
 */let n="key",i=!1,r=!1,o=!1;/**
 * Asserts that a value exists and is not null or undefined. goog.asserts
 * is not used in order to avoid dependencies on external code.
 * @param val The value to assert is truthy.
 * @returns The value.
 */function s(e){if(!e)throw Error("Expected value to be defined");// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
return e}/**
 * Makes sure that there is a current patch context.
 * @param functionName The name of the caller, for the error message.
 */function a(e){if(!o)throw Error("Cannot call "+e+"() unless in patch.")}/**
 * Makes sure that the caller is not where attributes are expected.
 * @param functionName The name of the caller, for the error message.
 */function l(e){if(i)throw Error(e+"() can not be called between elementOpenStart() and elementOpenEnd().")}/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param functionName The name of the caller, for the error message.
 */function c(e){if(r)throw Error(e+"() may not be called inside an element that has called skip().")}/**
 * Makes sure that the caller is where attributes are expected.
 * @param functionName The name of the caller, for the error message.
 */function u(e){if(!i)throw Error(e+"() can only be called after calling elementOpenStart().")}/**
 * Updates the state of being in an attribute declaration.
 * @param value Whether or not the patch is in an attribute declaration.
 * @return the previous value.
 */function h(e){let t=i;return i=e,t}/**
 * Updates the state of being in a skip element.
 * @param value Whether or not the patch is skipping the children of a
 *    parent node.
 * @return the previous value.
 */function f(e){let t=r;return r=e,t}/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A cached reference to the hasOwnProperty function.
 */let d=Object.prototype.hasOwnProperty;/**
 * A constructor function that will create blank objects.
 */function p(){}/**
 * Creates an map object without a prototype.
 * @returns An Object that can be used as a map.
 */function g(){return new p}/**
 * Truncates an array, removing items up until length.
 * @param arr The array to truncate.
 * @param length The new length of the array.
 */function m(e,t){for(;e.length>t;)e.pop()}p.prototype=Object.create(null);/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={default:"__default"};/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param el The element to apply the attribute to.
 * @param name The attribute's name.
 * @param value The attribute's value.
 */function v(e,t,n){if(null==n)e.removeAttribute(t);else{let i=0===t.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===t.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":null;i?e.setAttributeNS(i,t,String(n)):e.setAttribute(t,String(n))}}/**
 * A publicly mutable object to provide custom mutators for attributes.
 * NB: The result of createMap() has to be recast since closure compiler
 * will just assume attributes is "any" otherwise and throws away
 * the type annotation set by tsickle.
 */let b=g();/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param el The Element to apply the attribute to.
 * @param name The attribute's name.
 * @param value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */function y(e,t,n){let i=b[t]||b[_.default];i(e,t,n)}// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
b[_.default]=/**
 * Updates a single attribute on an Element.
 * @param el The Element to apply the attribute to.
 * @param name The attribute's name.
 * @param value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */function(e,t,n){let i=typeof n;"object"===i||"function"===i?e[t]=n:v(e,t,n)},b.style=/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param el The Element to apply the style for.
 * @param name The attribute's name.
 * @param  style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */function(e,t,n){// MathML elements inherit from Element, which does not have style. We cannot
// do `instanceof HTMLElement` / `instanceof SVGElement`, since el can belong
// to a different document, so just check that it has a style.
s("style"in e);let i=e.style;if("string"==typeof n)i.cssText=n;else for(let e in i.cssText="",n){var r;d.call(n,e)&&(r=n[e],e.indexOf("-")>=0?i.setProperty(e,r):i[e]=r)}};/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w={nodesCreated:null,nodesDeleted:null};/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A context object keeps track of the state of a patch.
 */class E{constructor(){this.created=[],this.deleted=[]}markCreated(e){this.created.push(e)}markDeleted(e){this.deleted.push(e)}/**
     * Notifies about nodes that were created during the patch operation.
     */notifyChanges(){w.nodesCreated&&this.created.length>0&&w.nodesCreated(this.created),w.nodesDeleted&&this.deleted.length>0&&w.nodesDeleted(this.deleted)}}/**
 * Checks if the node is an Element. This is faster than an instanceof check.
 * @param node The node to check.
 * @return Whether or not the node is an Element.
 */function A(e){return 1===e.nodeType}/**
 * @param this
 * @returns The root node of the DOM tree that contains this node.
 */let x="undefined"!=typeof Node&&Node.prototype.getRootNode||function(){let e=this,t=e;for(;e;)t=e,e=e.parentNode;return t};/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Keeps track of information needed to perform diffs for a given DOM node.
 */class O{constructor(e,t,n){/**
         * An array of attribute name/value pairs, used for quickly diffing the
         * incomming attributes to see if the DOM node's attributes need to be
         * updated.
         */this._attrsArr=null,/**
         * Whether or not the statics have been applied for the node yet.
         */this.staticsApplied=!1,this.nameOrCtor=e,this.key=t,this.text=n}hasEmptyAttrsArr(){let e=this._attrsArr;return!e||!e.length}getAttrsArr(e){return this._attrsArr||(this._attrsArr=/**
 * Creates an array for a desired initial size. Note that the array will still
 * be empty.
 * @param initialAllocationSize The initial size to allocate.
 * @returns An empty array, with an initial allocation for the desired size.
 */function(e){let t=Array(e);return m(t,0),t}(e))}}/**
 * Initializes a NodeData object for a Node.
 * @param node The Node to initialized data for.
 * @param nameOrCtor The NameOrCtorDef to use when diffing.
 * @param key The Key for the Node.
 * @param text The data of a Text node, if importing a Text node.
 * @returns A NodeData object with the existing attributes initialized.
 */function C(e,t,n,i){let r=new O(t,n,i);return e.__incrementalDOMData=r,r}/**
 * Imports single node and its subtree, initializing caches, if it has not
 * already been imported.
 * @param node The node to import.
 * @param fallbackKey A key to use if importing and no key was specified.
 *    Useful when not transmitting keys from serverside render and doing an
 *    immediate no-op diff.
 * @returns The NodeData for the node.
 */function T(e,t){if(e.__incrementalDOMData)return e.__incrementalDOMData;let i=A(e)?e.localName:e.nodeName,r=n,o=A(e)&&null!=r?e.getAttribute(r):null,s=A(e)?o||t:null,a=C(e,i,s);return A(e)&&/**
 * Records the element's attributes.
 * @param node The Element that may have attributes
 * @param data The Element's data
 */function(e,t){let n=e.attributes,i=n.length;if(!i)return;let r=t.getAttrsArr(i);// Use a cached length. The attributes array is really a live NamedNodeMap,
// which exists as a DOM "Host Object" (probably as C++ code). This makes the
// usual constant length iteration very difficult to optimize in JITs.
for(let e=0,t=0;e<i;e+=1,t+=2){let i=n[e],o=i.name,s=i.value;r[t]=o,r[t+1]=s}}(e,a),a}/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The default match function to use, if one was not specified when creating
 * the patcher.
 * @param matchNode The node to match against, unused.
 * @param nameOrCtor The name or constructor as declared.
 * @param expectedNameOrCtor The name or constructor of the existing node.
 * @param key The key as declared.
 * @param expectedKey The key of the existing node.
 * @returns True if the node matches, false otherwise.
 */function k(e,t,n,i,r){// Key check is done using double equals as we want to treat a null key the
// same as undefined. This should be okay as the only values allowed are
// strings, null and undefined so the == semantics are not too weird.
return t==n&&i==r}let S=null,j=null,L=null,D=null,I=[],P=k,$=[],N=[];/**
 * Clears out any unvisited Nodes in a given range.
 * @param maybeParentNode
 * @param startNode The node to start clearing from, inclusive.
 * @param endNode The node to clear until, exclusive.
 */function M(e,t,n){let i=t;for(;i!==n;){let t=i.nextSibling;e.removeChild(i),S.markDeleted(i),i=t}}/**
 * @return The next Node to be patched.
 */function R(){return j?j.nextSibling:L.firstChild}/**
 * Changes to the first child of the current node.
 */function F(){L=j,j=null}/**
 * Changes to the parent of the current node, removing any unvisited children.
 */function q(){M(L,R(),null),j=L,L=L.parentNode}/**
 * Changes to the next sibling of the current node.
 */function H(){j=R()}/**
 * Aligns the virtual Node definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param nameOrCtor The name or constructor for the Node.
 * @param key The key used to identify the Node.
 */function W(e,t){let n;H();let i=/**
 * Finds the matching node, starting at `node` and looking at the subsequent
 * siblings if a key is used.
 * @param matchNode The node to start looking at.
 * @param nameOrCtor The name or constructor for the Node.
 * @param key The key used to identify the Node.
 * @returns The matching Node, if any exists.
 */function(e,t,n){if(!e)return null;let i=e;do if(/**
 * Checks whether or not the current node matches the specified nameOrCtor and
 * key. This uses the specified match function when creating the patcher.
 * @param matchNode A node to match the data to.
 * @param nameOrCtor The name or constructor to check for.
 * @param key The key used to identify the Node.
 * @return True if the node matches, false otherwise.
 */function(e,t,n){let i=T(e,n);return P(e,t,i.nameOrCtor,n,i.key)}(i,t,n))return i;while(n&&(i=i.nextSibling))return null}(j,e,t),r=i||(n="#text"===e?/**
 * Creates a Text Node.
 * @param doc The document with which to create the Element.
 * @returns The newly created Text.
 */function(e){let t=e.createTextNode("");return C(t,"#text",null),t}(D):/**
 * Creates an Element and initializes the NodeData.
 * @param doc The document with which to create the Element.
 * @param parent The parent of new Element.
 * @param nameOrCtor The tag or constructor for the Element.
 * @param key A key to identify the Element.
 * @returns The newly created Element.
 */function(e,t,n,i){let r;if("function"==typeof n)r=new n;else{let i="svg"===n?"http://www.w3.org/2000/svg":"math"===n?"http://www.w3.org/1998/Math/MathML":null==t?null:"foreignObject"===T(t,void 0).nameOrCtor?null:t.namespaceURI;r=i?e.createElementNS(i,n):e.createElement(n)}return C(r,n,i),r}(D,L,e,t),S.markCreated(n),n);// If we are at the matching node, then we are done.
r!==j&&(I.indexOf(r)>=0?/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param parentNode
 * @param node
 * @param referenceNode
 */function(e,t,n){let i=t.nextSibling,r=n;for(;null!==r&&r!==t;){let t=r.nextSibling;e.insertBefore(r,i),r=t}}(L,r,j):L.insertBefore(r,j),j=r)}/**
 * Makes sure that the current node is an Element with a matching nameOrCtor and
 * key.
 *
 * @param nameOrCtor The tag or constructor for the Element.
 * @param key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return The corresponding Element.
 */function z(e,t){return W(e,t),F(),L}/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 * @returns The Element that was just closed.
 */function B(){return f(!1),q(),j}/**
 * @returns The current Element being patched.
 */function V(){return a("currentElement"),l("currentElement"),L}/**
 * Returns a patcher function that sets up and restores a patch context,
 * running the run function with the provided data.
 * @param run The function that will run the patch.
 * @param patchConfig The configuration to use for the patch.
 * @returns The created patch function.
 */function U(e,t={}){let{matches:n=k}=t;return(t,r,a)=>{let l=S,c=D,u=I,d=$,p=N,g=j,m=L,_=P,v=!1,b=!1;D=t.ownerDocument,S=new E,P=n,$=[],N=[],j=null,L=t.parentNode,I=/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param node The reference node to get the activeElement for.
 * @param root The root to get the focused path until.
 * @returns The path of focused parents, if any exist.
 */function(e,t){let n=/**
 * @param node The node to get the activeElement for.
 * @returns The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */function(e){let t=x.call(e);return 11===t.nodeType||9===t.nodeType?t.activeElement:null}(e);return n&&e.contains(n)?/**
 * @param  node The node to start at, inclusive.
 * @param  root The root ancestor to get until, exclusive.
 * @return The ancestry of DOM nodes.
 */function(e,t){let n=[],i=e;for(;i!==t;){let e=s(i);n.push(e),i=e.parentNode}return n}(n,t):[]}(t,L),v=h(!1),b=f(!1),o=null!=S;try{let n=e(t,r,a);return!/**
 * Makes sure the patch closes virtual attributes call
 */function(){if(i)throw Error("elementOpenEnd() must be called after calling elementOpenStart().")}(),n}finally{S.notifyChanges(),D=c,S=l,P=_,$=d,N=p,j=g,L=m,I=u,h(v),f(b),o=null!=S}}}/**
 * Creates a patcher that patches the document starting at node with a
 * provided function. This function may be called during an existing patch operation.
 * @param patchConfig The config to use for the patch.
 * @returns The created function for patching an Element's children.
 */function K(e){return U((e,t,n)=>(j=e,F(),t(n),q(),!/**
 * Makes sure that a patch closes every node that it opened.
 * @param openElement
 * @param root
 */function(e,t){if(e===t)return;let n=e,i=[];for(;n&&n!==t;)i.push(n.nodeName.toLowerCase()),n=n.parentNode;throw Error("One or more tags were not closed:\n"+i.join("\n"))}(j,e),e),e)}/**
 * Creates a patcher that patches an Element with the the provided function.
 * Exactly one top level element call should be made corresponding to `node`.
 * @param patchConfig The config to use for the patch.
 * @returns The created function for patching an Element.
 */function X(e){return U((e,t,n)=>{let i={nextSibling:e},r=null,o=null;return r=e.nextSibling,o=e.previousSibling,j=i,t(n),L||console.warn("patchOuter requires the node have a parent if there is a key."),!/**
 * Checks that a call to patchOuter actually patched the element.
 * @param maybeStartNode The value for the currentNode when the patch
 *     started.
 * @param maybeCurrentNode The currentNode when the patch finished.
 * @param expectedNextNode The Node that is expected to follow the
 *    currentNode after the patch;
 * @param expectedPrevNode The Node that is expected to preceed the
 *    currentNode after the patch.
 */function(e,t,n,i){let r=s(e),o=s(t),a=o.nextSibling===n&&o.previousSibling===i,l=o.nextSibling===r.nextSibling&&o.previousSibling===i;if(!a&&!l&&o!==r)throw Error("There must be exactly one top level call corresponding to the patched element.")}(i,j,r,o),L&&M(L,R(),e.nextSibling),i===j?null:j},e)}let Q=K(),Y=X(),G=[],J=0;/**
 * TODO(tomnguyen): This is a bit silly and really needs to be better typed.
 * @param fn A function to call.
 * @param a The first argument to the function.
 * @param b The second argument to the function.
 * @param c The third argument to the function.
 */function Z(e,t,n,i){G.push(e),G.push(t),G.push(n),G.push(i)}/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Used to keep track of the previous values when a 2-way diff is necessary.
 * This object is cleared out and reused.
 */let ee=g(),et=g();/**
 * @param element The Element to diff the attrs for.
 * @param data The NodeData associated with the Element.
 */function en(e,t){let n=N,i=t.getAttrsArr(n.length);!/**
 * Calculates the diff between previous and next values, calling the update
 * function when an item has changed value. If an item from the previous values
 * is not present in the the next values, the update function is called with a
 * value of `undefined`.
 * @param prev The previous values, alternating name, value pairs.
 * @param next The next values, alternating name, value pairs.
 * @param updateCtx The context for the updateFn.
 * @param updateFn A function to call when a value has changed.
 */function(e,t,n,i){let r=!e.length,o=0;for(;o<t.length;o+=2){let s=t[o];if(r)e[o]=s;else if(e[o]!==s)break;let a=t[o+1];(r||e[o+1]!==a)&&(e[o+1]=a,Z(i,n,s,a))}// Items did not line up exactly as before, need to make sure old items are
// removed. This should be a rare case.
if(o<t.length||o<e.length){let r=o;for(o=r;o<e.length;o+=2)ee[e[o]]=e[o+1];for(o=r;o<t.length;o+=2){let r=t[o],s=t[o+1];ee[r]!==s&&Z(i,n,r,s),e[o]=r,e[o+1]=s,delete ee[r]}for(let r in m(e,t.length),ee)Z(i,n,r,void 0),delete ee[r]}!/**
 * Flushes the changes buffer, calling the functions for each change.
 */function(){// A change may cause this function to be called re-entrantly. Keep track of
// the portion of the buffer we are consuming. Updates the start pointer so
// that the next call knows where to start from.
let e=J,t=G.length;J=t;for(let n=e;n<t;n+=4){let e=G[n];e(G[n+1],G[n+2],G[n+3])}J=e,m(G,e)}()}(i,n,e,y),m(n,0)}/**
 * Applies the statics. When importing an Element, any existing attributes that
 * match a static are converted into a static attribute.
 * @param node The Element to apply statics for.
 * @param data The NodeData associated with the Element.
 * @param statics The statics array.
 */function ei(e,t,n){if(t.staticsApplied||(t.staticsApplied=!0,!n||!n.length))return;if(t.hasEmptyAttrsArr()){for(let t=0;t<n.length;t+=2)y(e,n[t],n[t+1]);return}for(let e=0;e<n.length;e+=2)et[n[e]]=e+1;let i=t.getAttrsArr(0),r=0;for(let e=0;e<i.length;e+=2){let t=i[e],o=i[e+1],s=et[t];if(s){// For any attrs that are static and have the same value, make sure we do
// not set them again.
n[s]===o&&delete et[t];continue}// For any attrs that are dynamic, move them up to the right place.
i[r]=t,i[r+1]=o,r+=2}for(let t in // Anything after `j` was either moved up already or static.
m(i,r),et)y(e,t,n[et[t]]),delete et[t]}/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param nameOrCtor The Element's tag or constructor.
 * @param key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param statics An array of attribute name/value pairs of the static
 *     attributes for the Element. Attributes will only be set once when the
 *     Element is created.
 */function er(e,t,n){let i=$;l("elementOpenStart"),h(!0),i[0]=e,i[1]=t,i[2]=n}/**
 * Buffers an attribute, which will get applied during the next call to
 * `elementOpen`, `elementOpenEnd` or `applyAttrs`.
 * @param name The of the attribute to buffer.
 * @param value The value of the attribute to buffer.
 */function eo(e,t){let n=N;a("attr"),n.push(e),n.push(t)}/**
 * Closes an open tag started with elementOpenStart.
 * @return The corresponding Element.
 */function es(){let e=$;u("elementOpenEnd"),h(!1);let t=z(e[0],e[1]),n=T(t,void 0);return ei(t,n,e[2]),en(t,n),m(e,0),t}/**
 * @param  nameOrCtor The Element's tag or constructor.
 * @param  key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param statics An array of attribute name/value pairs of the static
 *     attributes for the Element. Attributes will only be set once when the
 *     Element is created.
 * @param varArgs, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return The corresponding Element.
 */function ea(e,t,// element is a string and every even element is any, but this is hard.
n,...i){l("elementOpen"),c("elementOpen"),er(e,t,n);for(let e=3;e<arguments.length;e+=2)eo(arguments[e],arguments[e+1]);return es()}/**
 * Closes an open virtual Element.
 *
 * @param nameOrCtor The Element's tag or constructor.
 * @return The corresponding Element.
 */function el(e){l("elementClose");let t=B();return!/**
 * Makes sure that tags are correctly nested.
 * @param currentNameOrCtor
 * @param nameOrCtor
 */function(e,t){if(e!==t)throw Error('Received a call to close "'+t+'" but "'+e+'" was open.')}(T(t,void 0).nameOrCtor,e),t}/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.applyAttr=v,t.applyProp=/**
 * Applies a property to a given Element.
 * @param el The element to apply the property to.
 * @param name The property's name.
 * @param value The property's value.
 */function(e,t,n){e[t]=n},t.attributes=b,t.alignWithDOM=W,t.close=B,t.createPatchInner=K,t.createPatchOuter=X,t.currentElement=V,t.currentPointer=/**
 * @return The Node that will be evaluated for the next instruction.
 */function(){// TODO(tomnguyen): assert that this is not null
return a("currentPointer"),l("currentPointer"),R()},t.open=z,t.patch=Q,t.patchInner=Q,t.patchOuter=Y,t.skip=/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */function(){/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param functionName The name of the caller, for the error message.
 * @param previousNode
 */(function(e,t){if(null!==t)throw Error(e+"() must come before any child declarations inside the current element.")})("skip",j),f(!0),j=L.lastChild},t.skipNode=H,t.setKeyAttributeName=function(e){n=e},t.clearCache=/**
 * Clears all caches from a node and all of its children.
 * @param node The Node to clear the cache for.
 */function e(t){t.__incrementalDOMData=null;for(let n=t.firstChild;n;n=n.nextSibling)e(n)},t.getKey=/**
 * Gets the key for a Node. note that the Node should have been imported
 * by now.
 * @param node The node to check.
 * @returns The key used to create the node.
 */function(e){return s(e.__incrementalDOMData),T(e,void 0).key},t.importNode=/**
 * Imports node and its subtree, initializing caches.
 * @param node The Node to import.
 */function e(t){T(t);for(let n=t.firstChild;n;n=n.nextSibling)e(n)},t.isDataInitialized=/**
 * @param node The node to check.
 * @returns True if the NodeData already exists, false otherwise.
 */function(e){return!!e.__incrementalDOMData},t.notifications=w,t.symbols=_,t.applyAttrs=/**
 * Applies the currently buffered attrs to the currently open element. This
 * clears the buffered attributes.
 */function(){let e=V(),t=T(e,void 0);en(e,t)},t.applyStatics=/**
 * Applies the current static attributes to the currently open element. Note:
 * statics should be applied before calling `applyAtrs`.
 * @param statics The statics to apply to the current element.
 */function(e){let t=V(),n=T(t,void 0);ei(t,n,e)},t.attr=eo,t.elementClose=el,t.elementOpen=ea,t.elementOpenEnd=es,t.elementOpenStart=er,t.elementVoid=/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param nameOrCtor The Element's tag or constructor.
 * @param key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param statics An array of attribute name/value pairs of the static
 *     attributes for the Element. Attributes will only be set once when the
 *     Element is created.
 * @param varArgs Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return The corresponding Element.
 */function(e,t,// element is a string and every even element is any, but this is hard.
n,...i){return ea.apply(null,arguments),el(e)},t.key=/**
 * Allows you to define a key after an elementOpenStart. This is useful in
 * templates that define key after an element has been opened ie
 * `<div key('foo')></div>`.
 * @param key The key to use for the next call.
 */function(e){let t=$;u("key"),s(t),t[1]=e},t.text=/**
 * Declares a virtual Text at this point in the document.
 *
 * @param value The value of the Text.
 * @param varArgs
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return The corresponding text node.
 */function(e,...t){l("text"),c("text");let n=(W("#text",null),j),i=T(n,void 0);if(i.text!==e){i.text=e;let t=e;for(let e=1;e<arguments.length;e+=1){/*
             * Call the formatter function directly to prevent leaking arguments.
             * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
             */let n=arguments[e];t=n(t)}// Setting node.data resets the cursor in IE/Edge.
n.data!==t&&(n.data=t)}return n}});sf&&sf.__esModule&&Object.prototype.hasOwnProperty.call(sf,"default")&&sf.default,sf.applyAttr;var sd=sf.applyProp,sp=sf.attributes;sf.alignWithDOM,sf.close,sf.createPatchInner,sf.createPatchOuter,sf.currentElement,sf.currentPointer,sf.open;var sg=sf.patch;sf.patchInner,sf.patchOuter,sf.skip,sf.skipNode,sf.setKeyAttributeName,sf.clearCache,sf.getKey,sf.importNode,sf.isDataInitialized,sf.notifications,sf.symbols,sf.applyAttrs,sf.applyStatics,sf.attr;var sm=sf.elementClose,s_=sf.elementOpen;sf.elementOpenEnd,sf.elementOpenStart;var sv=sf.elementVoid;sf.key;var sb=sf.text;sp.caretpos=function(e,t,n){e.setSelectionRange(n,n)},sp.value=sd;var sy=function(e,t,n){if(e.suggestions.length>0&&e.focused){// unselectable=on is a IE11 workaround,
// which makes it possible to use an eventual scroll bar on suggestions list.
s_("ul","",["class","dawa-autocomplete-suggestions","role","listbox","unselectable","on"]);for(var i=function(i){var r=e.suggestions[i],o="dawa-autocomplete-suggestion";e.selected===i&&(o+=" dawa-selected"),s_("li","",["role","option"],"class",o,"onmousedown",function(e){t(i),e.preventDefault()});var s=r.forslagstekst.split("\n");if(s=s.map(function(e){return e.replace(/ /g,"\xa0")}),n){sb(s[0]);for(var a=1;a<s.length;++a)sv("br"),sb(s[a])}else sb(s.join(", "));sm("li")},r=0;r<e.suggestions.length;++r)i(r);sm("ul")}},sw=function(e,t,n,i){sg(e,function(){sy(t,n,i)})};function sE(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(i.key),i)}}c="keys",u=(rJ.Object||{})[c]||Object[c],(h={})[c]=function(e){return oj(oI(e))},of(of.S+of.F*r1(function(){u(1)}),"Object",h);// 19.1.3.6 Object.prototype.toString()
var sA={};sA[oN("toStringTag")]="z",sA+""!="[object z]"&&ol(Object.prototype,"toString",function(){return"[object "+oU(this)+"]"},!0);var sx=function(e,t,n,i){if(!(e instanceof t)||void 0!==i&&i in e)throw TypeError(n+": incorrect invocation!");return e},sO=function(e,t,n,i){try{return i?t(r0(n)[0],n[1]):t(n);// 7.4.6 IteratorClose(iterator, completion)
}catch(t){var r=e.return;throw void 0!==r&&r0(r.call(e)),t}},sC={},sT=oN("iterator"),sk=Array.prototype,sS=oN("iterator"),sj=rJ.getIteratorMethod=function(e){if(void 0!=e)return e[sS]||e["@@iterator"]||sC[oU(e)]},sL=rY(function(e){var t={},n={},i=e.exports=function(e,i,r,o,s){var a,l,c,u,h=s?function(){return e}:sj(e),f=ou(r,o,i?2:1),d=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");// fast case for arrays with default iterator
if(void 0!==h&&(sC.Array===h||sk[sT]===h)){for(a=oE(e.length);a>d;d++)if((u=i?f(r0(l=e[d])[0],l[1]):f(e[d]))===t||u===n)return u}else for(c=h.call(e);!(l=c.next()).done;)if((u=sO(c,f,l.value,i))===t||u===n)return u};i.BREAK=t,i.RETURN=n}),sD=function(e,t,n){var i=void 0===n;switch(t.length){case 0:return i?e():e.call(n);case 1:return i?e(t[0]):e.call(n,t[0]);case 2:return i?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return i?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return i?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)},sI=rG.document,sP=sI&&sI.documentElement,s$=rG.process,sN=rG.setImmediate,sM=rG.clearImmediate,sR=rG.MessageChannel,sF=rG.Dispatch,sq=0,sH={},sW="onreadystatechange",sz=function(){var e=+this;// eslint-disable-next-line no-prototype-builtins
if(sH.hasOwnProperty(e)){var t=sH[e];delete sH[e],t()}},sB=function(e){sz.call(e.data)};sN&&sM||(sN=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return sH[++sq]=function(){// eslint-disable-next-line no-new-func
sD("function"==typeof e?e:Function(e),t)},y(sq),sq},sM=function(e){delete sH[e]},"process"==op(s$)?y=function(e){s$.nextTick(ou(sz,e,1))}:sF&&sF.now?y=function(e){sF.now(ou(sz,e,1))}:sR?(E=(w=new sR).port2,w.port1.onmessage=sB,y=ou(E.postMessage,E,1)):rG.addEventListener&&"function"==typeof postMessage&&!rG.importScripts?(y=function(e){rG.postMessage(e+"","*")},rG.addEventListener("message",sB,!1)):y=sW in r4("script")?function(e){sP.appendChild(r4("script"))[sW]=function(){sP.removeChild(this),sz.call(e)}}:function(e){setTimeout(ou(sz,e,1),0)});var sV={set:sN},sU=sV.set,sK=rG.MutationObserver||rG.WebKitMutationObserver,sX=rG.process,sQ=rG.Promise,sY="process"==op(sX);// 25.4.1.5 NewPromiseCapability(C)
function sG(e){var t,n;this.promise=new e(function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i}),this.resolve=oc(t),this.reject=oc(n)}var sJ={f:function(e){return new sG(e)}},sZ=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}},s0=rG.navigator,s1=s0&&s0.userAgent||"",s2=function(e,t){if(r0(e),rZ(t)&&t.constructor===e)return t;var n=sJ.f(e);return(0,n.resolve)(t),n.promise},s3=r8.f,s9=oN("toStringTag"),s4=oN("species"),s5=oN("iterator"),s6=!1;try{var s7=[7][s5]();s7.return=function(){s6=!0},// eslint-disable-next-line no-throw-literal
Array.from(s7,function(){throw 2})}catch(e){}var s8=sV.set,ae=function(){var e,t,n,i=function(){var i,r;for(sY&&(i=sX.domain)&&i.exit();e;){r=e.fn,e=e.next;try{r()}catch(i){throw e?n():t=void 0,i}}t=void 0,i&&i.enter()};// Node.js
if(sY)n=function(){sX.nextTick(i)};else if(sK&&!(rG.navigator&&rG.navigator.standalone)){var r=!0,o=document.createTextNode("");new sK(i).observe(o,{characterData:!0}),n=function(){o.data=r=!r};// environments with maybe non-completely correct, but existent Promise
}else if(sQ&&sQ.resolve){// Promise.resolve without an argument throws an error in LG WebOS 2
var s=sQ.resolve(void 0);n=function(){s.then(i)};// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
}else n=function(){// strange IE + webpack dev server bug - use .call(global)
sU.call(rG,i)};return function(i){var r={fn:i,next:void 0};t&&(t.next=r),e||(e=r,n()),t=r}}(),at="Promise",an=rG.TypeError,ai=rG.process,ar=ai&&ai.versions,ao=ar&&ar.v8||"",as=rG[at],aa="process"==oU(ai),al=function(){},ac=x=sJ.f,au=!!function(){try{// correct subclassing with @@species support
var e=as.resolve(1),t=(e.constructor={})[oN("species")]=function(e){e(al,al)};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(aa||"function"==typeof PromiseRejectionEvent)&&e.then(al) instanceof t&&0!==ao.indexOf("6.6")&&-1===s1.indexOf("Chrome/66")}catch(e){}}(),ah=function(e){var t;return!!rZ(e)&&"function"==typeof(t=e.then)&&t},af=function(e,t){if(!e._n){e._n=!0;var n=e._c;ae(function(){for(var i=e._v,r=1==e._s,o=0;n.length>o;)!function(t){var n,o,s,a=r?t.ok:t.fail,l=t.resolve,c=t.reject,u=t.domain;try{a?(r||(2==e._h&&ag(e),e._h=1),!0===a?n=i:(u&&u.enter(),n=a(i),u&&(u.exit(),s=!0)),n===t.promise?c(an("Promise-chain cycle")):(o=ah(n))?o.call(n,l,c):l(n)):c(i)}catch(e){u&&!s&&u.exit(),c(e)}}(n[o++]);// variable length - can't use forEach
e._c=[],e._n=!1,t&&!e._h&&ad(e)})}},ad=function(e){s8.call(rG,function(){var t,n,i,r=e._v,o=ap(e);if(o&&(t=sZ(function(){aa?ai.emit("unhandledRejection",r,e):(n=rG.onunhandledrejection)?n({promise:e,reason:r}):(i=rG.console)&&i.error&&i.error("Unhandled promise rejection",r)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
e._h=aa||ap(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},ap=function(e){return 1!==e._h&&0===(e._a||e._c).length},ag=function(e){s8.call(rG,function(){var t;aa?ai.emit("rejectionHandled",e):(t=rG.onrejectionhandled)&&t({promise:e,reason:e._v})})},am=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),af(t,!0))},a_=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw an("Promise can't be resolved itself");(t=ah(e))?ae(function(){var i={_w:n,_d:!1};// wrap
try{t.call(e,ou(a_,i,1),ou(am,i,1))}catch(e){am.call(i,e)}}):(n._v=e,n._s=1,af(n,!1))}catch(e){am.call({_w:n,_d:!1},e);// wrap
}}};au||(// 25.4.3.1 Promise(executor)
as=function(e){sx(this,as,at,"_h"),oc(e),A.call(this);try{e(ou(a_,this,1),ou(am,this,1))}catch(e){am.call(this,e)}},// eslint-disable-next-line no-unused-vars
(A=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(e,t,n){for(var i in t)ol(e,i,t[i],void 0);return e}(as.prototype,{// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(e,t){var n=ac(oq(this,as));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=aa?ai.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&af(this,!1),n.promise},// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(e){return this.then(void 0,e)}}),O=function(){var e=new A;this.promise=e,this.resolve=ou(a_,e,1),this.reject=ou(am,e,1)},sJ.f=ac=function(e){return e===as||e===C?new O(e):x(e)}),of(of.G+of.W+!au*of.F,{Promise:as}),(f=as)&&!on(f=f.prototype,s9)&&s3(f,s9,{configurable:!0,value:at}),d=rG[at],r2&&d&&!d[s4]&&r8.f(d,s4,{configurable:!0,get:function(){return this}}),C=rJ[at],// statics
of(of.S+!au*of.F,at,{// 25.4.4.5 Promise.reject(r)
reject:function(e){var t=ac(this);return(0,t.reject)(e),t.promise}}),of(of.S+!au*of.F,at,{// 25.4.4.6 Promise.resolve(x)
resolve:function(e){return s2(this,e)}}),of(of.S+!(au&&function(e,t){if(!s6)return!1;var n=!1;try{var i=[7],r=i[s5]();r.next=function(){return{done:n=!0}},i[s5]=function(){return r},e(i)}catch(e){}return n}(function(e){as.all(e).catch(al)}))*of.F,at,{// 25.4.4.1 Promise.all(iterable)
all:function(e){var t=this,n=ac(t),i=n.resolve,r=n.reject,o=sZ(function(){var n=[],o=0,s=1;sL(e,!1,function(e){var a=o++,l=!1;n.push(void 0),s++,t.resolve(e).then(function(e){!l&&(l=!0,n[a]=e,--s||i(n))},r)}),--s||i(n)});return o.e&&r(o.v),n.promise},// 25.4.4.4 Promise.race(iterable)
race:function(e){var t=this,n=ac(t),i=n.reject,r=sZ(function(){sL(e,!1,function(e){t.resolve(e).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}});var av={params:{},minLength:2,retryDelay:500,renderCallback:function(){/*eslint no-console: 0*/console.error("No renderCallback supplied")},initialRenderCallback:function(){/*eslint no-console: 0*/console.error("No initialRenderCallback supplied")},type:"adresse",baseUrl:"https://dawa.aws.dk",adgangsadresserOnly:!1,stormodtagerpostnumre:!0,supplerendebynavn:!0,fuzzy:!0,fetchImpl:function(e,t){var n,i;return(n="".concat(e,"?").concat(Object.keys(t).map(function(e){var n=t[e];return"".concat(e,"=").concat(encodeURIComponent(n))}).join("&")),i=i={mode:"cors"},new Promise(function(e,t){var r=new XMLHttpRequest,o=[],s=[],a={},l=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:l,headers:{keys:function(){return o},entries:function(){return s},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase() in a}}}};for(var c in r.open(i.method||"get",n,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),s.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),e(l())},r.onerror=t,r.withCredentials="include"==i.credentials,i.headers)r.setRequestHeader(c,i.headers[c]);r.send(i.body||null)})).then(function(e){return e.json()})}},ab=/*#__PURE__*/function(){var e,t;function n(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),e=Object.assign({},av,e||{}),this.options=e,this.state={currentRequest:null,pendingRequest:null},this.selected=null}return e=[{key:"_getAutocompleteResponse",value:function(e,t,n,i,r,o){var s=Object.assign({},this.options.params,{q:e,type:this.options.type,caretpos:t,supplerendebynavn:r,stormodtagerpostnumre:o,multilinje:!0});return this.options.fuzzy&&(s.fuzzy=""),i&&(s.adgangsadresseid=i),n&&(s.startfra="adgangsadresse"),this.options.fetchImpl("".concat(this.options.baseUrl,"/autocomplete"),s)}},{key:"_scheduleRequest",value:function(e){null!==this.state.currentRequest?this.state.pendingRequest=e:(this.state.currentRequest=e,this._executeRequest())}},{key:"_executeRequest",value:function(){var e,t,n=this,i=this.state.currentRequest,r=null,o=!1;if(i.selected){var s=i.selected;if(s.type!==this.options.type)r="adgangsadresse"===s.type?s.data.id:null,o="vejnavn"===s.type,e=s.tekst,t=s.caretpos;else{this.options.selectCallback(s),this.selected=s,this._requestCompleted();return}}else e=i.text,t=i.caretpos;if(i.selectedId){var a={id:i.selectedId,type:this.options.type};return this.options.fetchImpl("".concat(this.options.baseUrl,"/autocomplete"),a).then(function(e){return n._handleResponse(i,e)},function(e){return n._handleFailedRequest(i,e)})}i.selected||i.text.length>=this.options.minLength?this._getAutocompleteResponse(e,t,o,r,this.options.supplerendebynavn,this.options.stormodtagerpostnumre).then(function(e){return n._handleResponse(i,e)},function(e){return n._handleFailedRequest(i,e)}):this._handleResponse(i,[])}},{key:"_handleFailedRequest",value:function(e,t){var n,i=this;return console.error("DAWA request failed",t),(n=this.options.retryDelay,new Promise(function(e){return setTimeout(e,n)})).then(function(){i.state.pendingRequest||i._scheduleRequest(e),i._requestCompleted()})}},{key:"_handleResponse",value:function(e,t){if(e.selected){if(1===t.length){var n=t[0];n.type===this.options.type?this.options.selectCallback(n):this.state.pendingRequest||(this.state.pendingRequest={selected:n})}else this.options.renderCallback&&this.options.renderCallback(t)}else e.selectedId?1===t.length&&(this.selected=t[0],this.options.initialRenderCallback(t[0].tekst)):this.options.renderCallback&&this.options.renderCallback(t);this._requestCompleted()}},{key:"_requestCompleted",value:function(){this.state.currentRequest=this.state.pendingRequest,this.state.pendingRequest=null,this.state.currentRequest&&this._executeRequest()}},{key:"setRenderCallback",value:function(e){this.options.renderCallback=e}},{key:"setInitialRenderCallback",value:function(e){this.options.initialRenderCallback=e}},{key:"setSelectCallback",value:function(e){this.options.selectCallback=e}},{key:"update",value:function(e,t){this._scheduleRequest({text:e,caretpos:t})}},{key:"select",value:function(e){this._scheduleRequest({selected:e})}},{key:"selectInitial",value:function(e){this._scheduleRequest({selectedId:e})}},{key:"destroy",value:function(){}}],sE(n.prototype,e),t&&sE(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(),ay=0/0,aw=/^\s+|\s+$/g,aE=/^[-+]0x[0-9a-f]+$/i,aA=/^0b[01]+$/i,ax=/^0o[0-7]+$/i,aO=parseInt,aC="object"==typeof rQ&&rQ&&rQ.Object===Object&&rQ,aT="object"==typeof self&&self&&self.Object===Object&&self,ak=aC||aT||Function("return this")(),aS=Object.prototype.toString,aj=Math.max,aL=Math.min,aD=function(){return ak.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function aI(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function aP(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==aS.call(t))return ay;if(aI(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=aI(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(aw,"");var i=aA.test(e);return i||ax.test(e)?aO(e.slice(2),i?2:8):aE.test(e)?ay:+e}p=document.getElementById("dawa-autocomplete-input"),g=Object.assign({select:function(){return null}},g={select:function(e){console.log("Valgt adresse: "+e.tekst)},params:{postnr:"2630|2640"}}),(m=["baseUrl","minLength","params","fuzzy","stormodtagerpostnumre","supplerendebynavn","type"].reduce(function(e,t){return g.hasOwnProperty(t)&&(e[t]=g[t]),e},{})).type||(g.adgangsadresserOnly?m.type="adgangsadresse":m.type="adresse"),_=new ab(m),v=function(e,t){return _.update(e,t)},b=function(e,t){var n,i=t.onSelect,r=t.onTextChange,o=t.render||sw,s=!1,a="",l=0,c=document.createElement("div");e.parentNode.insertBefore(c,e.nextSibling);var u=function(e,t){(a!==e||l!==t)&&(r(e,t),a=e,l=t)},h={caretpos:2,inputText:"",selected:0,focused:document.activeElement===e,suggestions:[]},f=function(e){var t=e.value,n=e.selectionStart;h.caretpos=n,h.inputText=t,u(t,n)},d=function(e){var t=h.suggestions[e];h.inputText=t.tekst,h.caretpos=t.caretpos,h.suggestions=[],i(t),n(!0)},p=function(e){var t=window.event?e.keyCode:e.which;if(h.suggestions.length>0&&h.focused){// down (40)
if(40===t)h.selected=(h.selected+1)%h.suggestions.length,n();else if(38===t)h.selected=(h.selected-1+h.suggestions.length)%h.suggestions.length,n();else{if(13!==t&&9!==t)return!0;d(h.selected)}return e.preventDefault(),!1}},g=function(){h.focused=!0,n()},m=function(){return h.focused=!1,n(),!1},_=function(e){f(e.target)},v=function(e){return f(e.target)},b=!1,y=!1;return(n=function(n){n&&(y=!0),b||(b=!0,requestAnimationFrame(function(){s||(b=!1,y&&(e.value=h.inputText,e.setSelectionRange(h.caretpos,h.caretpos)),y=!1,o(c,h,function(e){return d(e)},t.multiline))}))})(),e.addEventListener("keydown",p),e.addEventListener("blur",m),e.addEventListener("focus",g),e.addEventListener("input",_),e.addEventListener("mouseup",v),e.setAttribute("aria-autocomplete","list"),e.setAttribute("autocomplete","off"),{destroy:function(){s=!0,e.removeEventListener("keydown",p),e.removeEventListener("blur",m),e.removeEventListener("focus",g),e.removeEventListener("input",_),e.removeEventListener("mouseup",v),sg(c,function(){}),c.remove()},setSuggestions:function(e){h.suggestions=e,h.selected=0,n()},selectAndClose:function(e){h.inputText=e,h.caretpos=e.length,h.suggestions=[],h.selected=0,n(!0)}}}(p,{onSelect:function(e){_.select(e)},onTextChange:v=g.debounce?/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var i,r,o,s,a,l,c=0,u=!1,h=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function d(t){var n=i,o=r;return i=r=void 0,c=t,s=e.apply(o,n)}function p(e){var n=e-l,i=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||h&&i>=o}function g(){var e,n,i,r=aD();if(p(r))return m(r);// Restart the timer.
a=setTimeout(g,(e=r-l,n=r-c,i=t-e,h?aL(i,o-n):i))}function m(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(a=void 0,f&&i)?d(e):(i=r=void 0,s))}function _(){var e,n=aD(),o=p(n);if(i=arguments,r=this,l=n,o){if(void 0===a)return(// Reset any `maxWait` timer.
c=e=l,// Start the timer for the trailing edge.
a=setTimeout(g,t),u?d(e):s);if(h)return(// Handle invocations in a tight loop.
a=setTimeout(g,t),d(l))}return void 0===a&&(a=setTimeout(g,t)),s}return t=aP(t)||0,aI(n)&&(u=!!n.leading,o=(h="maxWait"in n)?aj(aP(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),_.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=r=a=void 0},_.flush=function(){return void 0===a?s:m(aD())},_}(v,g.debounce,{maxWait:500}):v,render:g.render,multiline:g.multiline||!1}),_.setRenderCallback(function(e){return b.setSuggestions(e)}),_.setSelectCallback(function(e){b.selectAndClose(e.tekst),g.select(e)}),_.setInitialRenderCallback(function(e){return b.selectAndClose(e)}),g.id&&_.selectInitial(g.id);//# sourceMappingURL=index.7a590732.js.map

//# sourceMappingURL=index.7a590732.js.map
