const{Array:l,Object:p,BigUint64Array:u,Promise:m,Proxy:i,RegExp:L,WeakMap:M,crypto:H,requestAnimationFrame:g,requestIdleCallback:b,cancelAnimationFrame:f}=window,y=(()=>{let e=0,t=-1;const n=[],o=64,r=new u(o),a=()=>{H.getRandomValues(r),p.assign(n,l.from(r).map(c=>c.toString(36)).join("").match(/.{16}/g)),t=n.length,e=0};return a(),()=>{const c=n[e];return e++,e===t&&a(),c}})(),F=`stval${y()}`,j=new L(F),T=new M,s={},B=(e,t)=>{const n=e;return(...o)=>{n(...o),t(...o)}},K=e=>{const t=T.get(e)},w=e=>{},x=e=>{const t=e.join(secretTag);return t in s||(s[t]=w(e)),t},h=new i(({raw:e},...t)=>new i(new m(n=>{}),{}),{}),A={function(e){const t=e(h)},object(e){}},S=e=>(A[typeof e]?.(e),[()=>{}]),R=()=>{},O=e=>{const t=R(),n=e();return[()=>{const r=n()[0],a=T.get(r)||x(r),c=s[a]}]},d=(e,t)=>{let n=-1;const o=t.attatchShadow({mode:"close"});o.innerHTML="";const r=()=>{n=g(r),e()};return r(),[()=>(f(n),!0)]},C=(e,t)=>{let n=!1;const[o]=S(t),[r]=d(o,e);return{close(){n=n?!0:r()}}};export const write=(e,t)=>C(e,t);