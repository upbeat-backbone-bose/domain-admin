import{h as d,E as u}from"./index.86982a38.js";import{E as p}from"./el-table-column.ca16c6b6.js";/* empty css                */import{a1 as c,o as a,Q as s,R as e,T as n}from"./vendor-vue.f93c5f70.js";const m={name:"ConnectStatus",props:{value:{type:Boolean,default:!1}},components:{},data(){return{}},computed:{},methods:{async getData(){},handleClick(){this.$emit("on-click")}},created(){}};function f(k,C,i,h,y,o){const r=c("SuccessFilled"),t=u,l=p,_=c("WarningFilled");return i.value?(a(),s(l,{key:0,underline:!1,type:"success",onClick:o.handleClick},{default:e(()=>[n(t,null,{default:e(()=>[n(r)]),_:1})]),_:1},8,["onClick"])):(a(),s(l,{key:1,underline:!1,type:"danger",onClick:o.handleClick},{default:e(()=>[n(t,null,{default:e(()=>[n(_)]),_:1})]),_:1},8,["onClick"]))}const v=d(m,[["render",f]]);export{v as _};
