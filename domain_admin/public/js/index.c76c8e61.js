import{d as ue,A as ce,D as y,ab as me,ag as de,i as x,U as pe,h as fe,u as _e,B as be,G as he,n as ve,g as R,E as ee,f as ye,ah as U,l as Q,w as Ne,_ as te,ai as ge,a as Ve,c as ne,b as Ie,aj as q}from"./index.ac997403.js";/* empty css                */import{D as Ee,r as we,Y as Se,h as S,w as xe,f as ke,J as $e,o as v,c as k,K as W,u as s,P as Y,al as T,T as r,R as d,Q as F,M as X,U as G,j as Ce,a1 as $,a as B,V as De,aa as L,af as Pe,ag as Ae}from"./vendor-vue.a66d0420.js";import{e as Ue,u as Te,n as Fe,x as Re}from"./element-icon.581ee24f.js";import"./vendor-lib.1edac35d.js";const Be=100,Le=600,Z={beforeMount(t,l){let m=null,a=null;const p=()=>l.value&&l.value(),i=()=>{a&&(clearTimeout(a),a=null),m&&(clearInterval(m),m=null)};t.addEventListener("mousedown",f=>{f.button===0&&(p(),document.addEventListener("mouseup",i,{once:!0}),i(),a=setTimeout(()=>{m=setInterval(()=>{p()},Be)},Le))})}},Oe=ue({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ce,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:t=>t===null||y(t)||["min","max"].includes(t),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:t=>t>=0&&t===Number.parseInt(`${t}`,10)},validateEvent:{type:Boolean,default:!0}}),Me={[me]:(t,l)=>t!==l,blur:t=>t instanceof FocusEvent,focus:t=>t instanceof FocusEvent,[de]:t=>y(t)||x(t),[pe]:t=>y(t)||x(t)},Ke=["aria-label","onKeydown"],ze=["aria-label","onKeydown"],je={name:"ElInputNumber"},Ye=Ee({...je,props:Oe,emits:Me,setup(t,{expose:l,emit:m}){const a=t,{t:p}=fe(),i=_e("input-number"),f=we(),c=Se({currentValue:a.modelValue,userInput:null}),{formItem:h}=be(),g=S(()=>y(a.modelValue)&&D(a.modelValue,-1)<a.min),V=S(()=>y(a.modelValue)&&D(a.modelValue)>a.max),O=S(()=>{const e=H(a.step);return U(a.precision)?Math.max(H(a.modelValue),e):(e>a.precision,a.precision)}),E=S(()=>a.controls&&a.controlsPosition==="right"),C=he(),I=ve(),w=S(()=>{if(c.userInput!==null)return c.userInput;let e=c.currentValue;if(x(e))return"";if(y(e)){if(Number.isNaN(e))return"";U(a.precision)||(e=e.toFixed(a.precision))}return e}),M=(e,n)=>{if(U(n)&&(n=O.value),n===0)return Math.round(e);let o=String(e);const u=o.indexOf(".");if(u===-1||!o.replace(".","").split("")[u+n])return e;const P=o.length;return o.charAt(P-1)==="5"&&(o=`${o.slice(0,Math.max(0,P-1))}6`),Number.parseFloat(Number(o).toFixed(n))},H=e=>{if(x(e))return 0;const n=e.toString(),o=n.indexOf(".");let u=0;return o!==-1&&(u=n.length-o-1),u},D=(e,n=1)=>y(e)?M(e+a.step*n):c.currentValue,K=()=>{if(a.readonly||I.value||V.value)return;const e=a.modelValue||0,n=D(e);j(n)},z=()=>{if(a.readonly||I.value||g.value)return;const e=a.modelValue||0,n=D(e,-1);j(n)},J=(e,n)=>{const{max:o,min:u,step:_,precision:N,stepStrictly:P,valueOnClear:A}=a;let b=Number(e);if(x(e)||Number.isNaN(b))return null;if(e===""){if(A===null)return null;b=Ce(A)?{min:u,max:o}[A]:A}return P&&(b=M(Math.round(b/_)*_,N)),U(N)||(b=M(b,N)),(b>o||b<u)&&(b=b>o?o:u,n&&m("update:modelValue",b)),b},j=e=>{var n;const o=c.currentValue,u=J(e);o!==u&&(c.userInput=null,m("update:modelValue",u),m("input",u),m("change",u,o),a.validateEvent&&((n=h==null?void 0:h.validate)==null||n.call(h,"change").catch(_=>Q())),c.currentValue=u)},ae=e=>c.userInput=e,se=e=>{const n=e!==""?Number(e):"";(y(n)&&!Number.isNaN(n)||e==="")&&j(n),c.userInput=null},le=()=>{var e,n;(n=(e=f.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=f.value)==null?void 0:e.blur)==null||n.call(e)},oe=e=>{m("focus",e)},ie=e=>{var n;m("blur",e),a.validateEvent&&((n=h==null?void 0:h.validate)==null||n.call(h,"blur").catch(o=>Q()))};return xe(()=>a.modelValue,e=>{c.currentValue=J(e,!0),c.userInput=null},{immediate:!0}),ke(()=>{var e;const{min:n,max:o,modelValue:u}=a,_=(e=f.value)==null?void 0:e.input;if(_.setAttribute("role","spinbutton"),Number.isFinite(o)?_.setAttribute("aria-valuemax",String(o)):_.removeAttribute("aria-valuemax"),Number.isFinite(n)?_.setAttribute("aria-valuemin",String(n)):_.removeAttribute("aria-valuemin"),_.setAttribute("aria-valuenow",String(c.currentValue)),_.setAttribute("aria-disabled",String(I.value)),!y(u)&&u!=null){let N=Number(u);Number.isNaN(N)&&(N=null),m("update:modelValue",N)}}),$e(()=>{var e;const n=(e=f.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${c.currentValue}`)}),l({focus:le,blur:re}),(e,n)=>(v(),k("div",{class:Y([s(i).b(),s(i).m(s(C)),s(i).is("disabled",s(I)),s(i).is("without-controls",!e.controls),s(i).is("controls-right",s(E))]),onDragstart:n[0]||(n[0]=G(()=>{},["prevent"]))},[e.controls?W((v(),k("span",{key:0,role:"button","aria-label":s(p)("el.inputNumber.decrease"),class:Y([s(i).e("decrease"),s(i).is("disabled",s(g))]),onKeydown:T(z,["enter"])},[r(s(R),null,{default:d(()=>[s(E)?(v(),F(s(Ue),{key:0})):(v(),F(s(Te),{key:1}))]),_:1})],42,Ke)),[[s(Z),z]]):X("v-if",!0),e.controls?W((v(),k("span",{key:1,role:"button","aria-label":s(p)("el.inputNumber.increase"),class:Y([s(i).e("increase"),s(i).is("disabled",s(V))]),onKeydown:T(K,["enter"])},[r(s(R),null,{default:d(()=>[s(E)?(v(),F(s(Fe),{key:0})):(v(),F(s(Re),{key:1}))]),_:1})],42,ze)),[[s(Z),K]]):X("v-if",!0),r(s(ee),{id:e.id,ref_key:"input",ref:f,type:"number",step:e.step,"model-value":s(w),placeholder:e.placeholder,readonly:e.readonly,disabled:s(I),size:s(C),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[T(G(K,["prevent"]),["up"]),T(G(z,["prevent"]),["down"])],onBlur:ie,onFocus:oe,onInput:ae,onChange:se},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ge=ye(Ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const He=Ne(Ge);const Je={};function Qe(){let t=URL.createObjectURL(new Blob),l=t.toString();return URL.revokeObjectURL(t),l.substring(l.lastIndexOf("/")+1)}const qe={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:Je,form:{username:"",avatar_url:"",before_expire_days:0,email_list:""}}},computed:{},methods:{async getData(){const t=await this.$http.getUserInfo();if(t.code!=0)return;let l=t.data;this.form.username=l.username,this.form.avatar_url=l.avatar_url,this.form.before_expire_days=l.before_expire_days,this.form.email_list=l.email_list.join(`
`)},handleCancel(){this.$emit("on-cancel")},handleRandomAvatar(){let t=Qe();this.form.avatar_url="https://api.multiavatar.com/"+t+".png?apikey=mXMn18VQJxoH0P"},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),l={avatar_url:this.form.avatar_url,before_expire_days:this.form.before_expire_days,email_list:this.form.email_list.split(`
`)};const m=await this.$http.updateUserInfo(l);m.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(m.msg),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},We=B("img",{src:"https://api.multiavatar.com/domain-admin.png"},null,-1),Xe={class:"text-center"};function Ze(t,l,m,a,p,i){const f=Ve,c=ge,h=$("Refresh"),g=R,V=ne,O=He,E=ee,C=Ie,I=$("Select");return v(),k("div",null,[r(C,{ref:"form",model:p.form,rules:p.rules,"label-width":"160px"},{default:d(()=>[r(f,{label:"\u7528\u6237\u540D",prop:"username"},{default:d(()=>[B("span",null,De(p.form.username),1)]),_:1}),r(f,{label:"\u5934\u50CF",prop:"avatar_url"},{default:d(()=>[r(c,{src:p.form.avatar_url},{default:d(()=>[We]),_:1},8,["src"]),r(V,{class:"ml-md",onClick:i.handleRandomAvatar},{default:d(()=>[r(g,null,{default:d(()=>[r(h)]),_:1}),L("\u968F\u673A\u83B7\u53D6")]),_:1},8,["onClick"])]),_:1}),r(f,{label:"\u8FC7\u671F\u524D\u591A\u5C11\u5929\u63D0\u9192",prop:"before_expire_days"},{default:d(()=>[r(O,{modelValue:p.form.before_expire_days,"onUpdate:modelValue":l[0]||(l[0]=w=>p.form.before_expire_days=w),min:0,placeholder:"\u8BF7\u8F93\u5165\u8FC7\u671F\u524D\u591A\u5C11\u5929\u63D0\u9192"},null,8,["modelValue"])]),_:1}),r(f,{label:"\u90AE\u7BB1\u5217\u8868",prop:"email_list"},{default:d(()=>[r(E,{type:"textarea",rows:5,modelValue:p.form.email_list,"onUpdate:modelValue":l[1]||(l[1]=w=>p.form.email_list=w),placeholder:"\u90AE\u7BB1\u5217\u8868\uFF0C\u6BCF\u884C\u4E00\u4E2A"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),B("div",Xe,[r(V,{type:"primary",onClick:i.handleSubmit},{default:d(()=>[r(g,null,{default:d(()=>[r(I)]),_:1}),L("\u4FDD \u5B58")]),_:1},8,["onClick"])])])}const et=te(qe,[["render",Ze]]),tt={name:"user-edit",props:{},components:{DataForm:et},data(){return{id:null}},computed:{...Pe(q,{userInfo:"userInfo"})},methods:{...Ae(q,{updateUserInfo:"updateUserInfo"}),handleSuccess(){this.updateUserInfo()},async sendDomainInfoListEmail(){let t=this.$loading({fullscreen:!0});try{(await this.$http.sendDomainInfoListEmail()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{t.close()})}},async checkDomainCert(){let t=this.$loading({fullscreen:!0});try{(await this.$http.checkDomainCert()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{t.close()})}}},created(){this.id=this.$route.query.id}},nt={class:"app-container"},at={class:"flex"};function st(t,l,m,a,p,i){const f=$("Position"),c=R,h=ne,g=$("Promotion"),V=$("DataForm");return v(),k("div",nt,[B("div",at,[r(h,{class:"margin-left--auto",onClick:i.sendDomainInfoListEmail},{default:d(()=>[r(c,null,{default:d(()=>[r(f)]),_:1}),L("\u53D1\u9001\u90AE\u4EF6")]),_:1},8,["onClick"]),r(h,{class:"margin-left--auto",onClick:i.checkDomainCert},{default:d(()=>[r(c,null,{default:d(()=>[r(g)]),_:1}),L("\u8BC1\u4E66\u68C0\u67E5")]),_:1},8,["onClick"])]),r(V,{class:"mt-md",onOnSuccess:i.handleSuccess},null,8,["onOnSuccess"])])}const ct=te(tt,[["render",st]]);export{ct as default};
