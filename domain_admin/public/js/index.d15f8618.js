import{_ as C,d as $,r as A}from"./index.e0ac06b9.js";import{a5 as i,ak as I,S as j,o as y,c as v,X as t,R as a,a as u,Z as w,Q as k,V as F,W as m,aD as z,aE as E,aa as N}from"./vendor-vue.a1692e4d.js";import{C as B}from"./ConnectStatus.8bceeb89.js";import{F as q}from"./vendor-lib.f70cdf99.js";import"./element-icon.e40e8117.js";import"./element-plus.4f78adc4.js";const H={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},K={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:H,form:{domain:""}}},computed:{},methods:{async getData(){if(this.loading=!0,this.row){let o={id:this.row.id},l=(await this.$http.getDomainById(o)).data;this.form.domain=l.domain}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),s={domain:this.form.domain},l=null;this.row?(s.id=this.row.id,l=await this.$http.updateDomainById(s)):l=await this.$http.addDomain(s),l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},L={class:"text-center"};function P(o,s,l,h,n,c){const _=i("el-input"),r=i("el-form-item"),p=i("el-form"),g=i("el-button"),D=I("loading");return j((y(),v("div",null,[t(p,{ref:"form",model:n.form,rules:n.rules,"label-width":"80px"},{default:a(()=>[t(r,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[t(_,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":s[0]||(s[0]=b=>n.form.domain=b),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),u("div",L,[t(g,{onClick:c.handleCancel},{default:a(()=>[w("\u53D6 \u6D88")]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:c.handleSubmit},{default:a(()=>[w("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[D,n.loading]])}const Q=C(K,[["render",P]]),W={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Q},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function X(o,s,l,h,n,c){const _=i("DataForm"),r=i("el-dialog");return y(),k(r,{title:c.dialogTitle,modelValue:c.dialogVisible,"onUpdate:modelValue":s[0]||(s[0]=p=>c.dialogVisible=p),width:"400px",center:"","append-to-body":""},{default:a(()=>[c.dialogVisible?(y(),k(_,{key:0,row:l.row,onOnCancel:c.handleClose,onOnSuccess:c.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):F("",!0)]),_:1},8,["title","modelValue"])}const T=C(W,[["render",X]]);const Z={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:B},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}}}}},computed:{},methods:{async getData(){if(this.row){let o={id:this.row.id};const s=await this.$http.getDomainById(o);if(s.code!=0)return;let l=s.data;this.form.domain=l.domain,this.form.domain_url=l.domain_url,this.form.ip=l.ip,this.form.start_time=l.start_time,this.form.expire_time=l.expire_time,this.form.check_time=l.check_time,this.form.connect_status=l.connect_status,this.form.total_days=l.total_days,this.form.expire_days=l.expire_days,this.form.create_time=l.create_time,this.form.update_time=l.update_time,this.form.detail={issuer:l.detail.issuer||{},subject:l.detail.subject||{}}}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),s={domain:this.form.domain,domain_url:this.form.domain_url,ip:this.form.ip,start_time:this.form.start_time,expire_time:this.form.expire_time,check_time:this.form.check_time,connect_status:this.form.connect_status,total_days:this.form.total_days,expire_days:this.form.expire_days,create_time:this.form.create_time};this.row&&(s.id=this.row.id);const l=await this.$Http.function(s);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg),this.$nextTick(()=>{o.close()})},async handleUpdateRowDomainInfo(){let o=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),s={id:this.row.id};(await this.$http.updateDomainCertInfoById(s)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),o.close()}},created(){this.getData()}},G=o=>(z("data-v-06d20cb8"),o=o(),E(),o),J={class:"domain-detail"},M={class:"grid grid-cols-2 mt-sm"},Y={class:"truncate"},ee={class:"truncate"},te={class:"truncate"},le={class:"flex justify-between flex-1"},ae=G(()=>u("span",null," \u66F4\u65B0",-1)),se={class:"truncate"},ne={class:"truncate"},oe={class:"truncate"},ie={class:"text-center mt-md"};function re(o,s,l,h,n,c){const _=i("el-link"),r=i("el-form-item"),p=i("ConnectStatus"),g=i("el-form"),D=i("Refresh"),b=i("el-icon"),x=i("el-button");return y(),v("div",J,[u("div",M,[t(g,{ref:"form",model:n.form,"label-width":"130px"},{default:a(()=>[t(r,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[t(_,{underline:!1,href:n.form.domain_url,target:"_blank"},{default:a(()=>[w(m(n.form.domain),1)]),_:1},8,["href"])]),_:1}),t(r,{label:"ip",prop:"ip"},{default:a(()=>[u("span",null,m(n.form.ip||"-"),1)]),_:1}),t(r,{label:"\u57DF\u540D\u8FDE\u63A5\u72B6\u6001",prop:"connect_status"},{default:a(()=>[t(p,{value:n.form.connect_status},null,8,["value"])]),_:1}),t(r,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time"},{default:a(()=>[u("span",null,m(n.form.create_time||"-"),1)]),_:1}),t(r,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"create_time"},{default:a(()=>[u("span",null,m(n.form.update_time||"-"),1)]),_:1}),t(r,{label:"\u9881\u53D1\u8005.\u516C\u7528\u540D",prop:"expire_days"},{default:a(()=>[u("span",Y,m(n.form.detail.issuer.CN||"-"),1)]),_:1}),t(r,{label:"\u9881\u53D1\u8005.\u7EC4\u7EC7",prop:"expire_days"},{default:a(()=>[u("span",ee,m(n.form.detail.issuer.O||"-"),1)]),_:1}),t(r,{label:"\u9881\u53D1\u8005.\u7EC4\u7EC7\u5355\u4F4D",prop:"expire_days"},{default:a(()=>[u("span",te,m(n.form.detail.issuer.OU||"-"),1)]),_:1})]),_:1},8,["model"]),t(g,{ref:"form",model:n.form,"label-width":"130px"},{default:a(()=>[t(r,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"start_time"},{default:a(()=>[u("span",null,m(n.form.start_time||"-"),1)]),_:1}),t(r,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"expire_time"},{default:a(()=>[u("span",null,m(n.form.expire_time||"-"),1)]),_:1}),t(r,{label:"\u8BC1\u4E66\u68C0\u67E5\u65F6\u95F4",prop:"check_time"},{default:a(()=>[u("div",le,[u("span",null,m(n.form.check_time||"-"),1),t(_,{underline:!1,type:"primary",onClick:c.handleUpdateRowDomainInfo},{default:a(()=>[t(b,null,{default:a(()=>[t(D)]),_:1}),ae]),_:1},8,["onClick"])])]),_:1}),t(r,{label:"\u6709\u6548\u671F\u603B\u5929\u6570",prop:"total_days"},{default:a(()=>[u("span",null,m(n.form.total_days||"-"),1)]),_:1}),t(r,{label:"\u8FC7\u671F\u5269\u4F59\u5929\u6570",prop:"expire_days"},{default:a(()=>[u("span",null,m(n.form.expire_days||"-"),1)]),_:1}),t(r,{label:"\u9881\u53D1\u5BF9\u8C61.\u516C\u7528\u540D",prop:"expire_days"},{default:a(()=>[u("span",se,m(n.form.detail.subject.CN||"-"),1)]),_:1}),t(r,{label:"\u9881\u53D1\u5BF9\u8C61.\u7EC4\u7EC7",prop:"expire_days"},{default:a(()=>[u("span",ne,m(n.form.detail.subject.O||"-"),1)]),_:1}),t(r,{label:"\u9881\u53D1\u5BF9\u8C61.\u7EC4\u7EC7\u5355\u4F4D",prop:"expire_days"},{default:a(()=>[u("span",oe,m(n.form.detail.subject.OU||"-"),1)]),_:1})]),_:1},8,["model"])]),u("div",ie,[t(x,{type:"primary",onClick:c.handleCancel},{default:a(()=>[w("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const ce=C(Z,[["render",re],["__scopeId","data-v-06d20cb8"]]),de={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:ce},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function ue(o,s,l,h,n,c){const _=i("DataForm"),r=i("el-dialog");return y(),k(r,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:c.dialogVisible,"onUpdate:modelValue":s[0]||(s[0]=p=>c.dialogVisible=p),width:"900px",center:"","append-to-body":"",onClose:c.handleDialogClose},{default:a(()=>[c.dialogVisible?(y(),k(_,{key:0,row:l.row,onOnCancel:c.handleClose,onOnSuccess:c.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):F("",!0)]),_:1},8,["modelValue","onClose"])}const me=C(de,[["render",ue]]),_e={name:"",components:{DataFormDialog:T,DataDetailDialog:me,ConnectStatus:B},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1}},methods:{handleEditRow(o){this.currentRow=o,this.dialogVisible=!0},async handleDeleteClick(o){let s={id:o.id};const l=await this.$http.deleteDomainById(s);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg)},async handleStatusChange(o){let s={id:o.id};const l=await this.$Http.function(s);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg)},async handleUpdateRowDomainInfo(o){let s=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),l={id:o.id};(await this.$http.updateDomainCertInfoById(l)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),s.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){this.$emit("on-success")},handleShowDetail(o){this.currentRow=o,this.dialogDetailVisible=!0}},created(){}};function pe(o,s,l,h,n,c){const _=i("el-link"),r=i("el-table-column"),p=i("ConnectStatus"),g=i("el-progress"),D=i("Refresh"),b=i("el-icon"),x=i("Edit"),S=i("Delete"),V=i("el-popconfirm"),O=i("el-table"),R=i("DataFormDialog"),U=i("DataDetailDialog");return y(),v("div",null,[t(O,{data:l.list,stripe:"",border:""},{default:a(()=>[t(r,{label:"\u57DF\u540D","header-align":"center",align:"center",prop:"domain"},{default:a(d=>[t(_,{underline:!1,href:d.row.domain_url,target:"_blank"},{default:a(()=>[w(m(d.row.domain),1)]),_:2},1032,["href"])]),_:1}),t(r,{label:"ip\u5730\u5740","header-align":"center",align:"center",width:"140",prop:"ip"},{default:a(d=>[u("span",null,m(d.row.ip||"-"),1)]),_:1}),t(r,{label:"\u8FDE\u63A5\u72B6\u6001","header-align":"center",align:"center",width:"90",prop:"connect_status"},{default:a(d=>[t(p,{value:d.row.connect_status,onOnClick:f=>c.handleShowDetail(d.row)},null,8,["value","onOnClick"])]),_:1}),t(r,{label:"\u6709\u6548\u671F\u5929\u6570","header-align":"center",align:"center",width:"140",prop:"total_days"},{default:a(d=>[d.row.percentage?(y(),k(g,{key:0,percentage:d.row.percentage,"show-text":!1,status:d.row.percentage_status},null,8,["percentage","status"])):F("",!0),u("span",null,m(d.row.expire_days||"-")+" / "+m(d.row.total_days||"-"),1)]),_:1}),t(r,{label:"\u521B\u5EFA\u65F6\u95F4","header-align":"center",align:"center",width:"110",prop:"create_time"},{default:a(d=>[u("span",null,m(d.row.create_time_label||"-"),1)]),_:1}),t(r,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"110",prop:"check_time"},{default:a(d=>[u("span",null,m(d.row.check_time_label||"-"),1)]),_:1}),t(r,{label:"\u66F4\u65B0",width:"60","header-align":"center",align:"center"},{default:a(d=>[t(_,{underline:!1,type:"primary",onClick:f=>c.handleUpdateRowDomainInfo(d.row)},{default:a(()=>[t(b,null,{default:a(()=>[t(D)]),_:1})]),_:2},1032,["onClick"])]),_:1}),t(r,{label:"\u7F16\u8F91",width:"60","header-align":"center",align:"center"},{default:a(d=>[t(_,{underline:!1,type:"primary",onClick:f=>c.handleEditRow(d.row)},{default:a(()=>[t(b,null,{default:a(()=>[t(x)]),_:1})]),_:2},1032,["onClick"])]),_:1}),t(r,{label:"\u5220\u9664",width:"60",align:"center",prop:"tag"},{default:a(({row:d})=>[t(V,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:f=>c.handleDeleteClick(d)},{reference:a(()=>[t(_,{underline:!1,type:"danger"},{default:a(()=>[t(b,null,{default:a(()=>[t(S)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),t(R,{visible:n.dialogVisible,"onUpdate:visible":s[0]||(s[0]=d=>n.dialogVisible=d),row:n.currentRow,onOnSuccess:c.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"]),t(U,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":s[1]||(s[1]=d=>n.dialogDetailVisible=d),onOnSuccess:c.handleDetailSuccess},null,8,["row","visible","onOnSuccess"])])}const he=C(_e,[["render",pe]]),fe={name:"domain-list",props:{},components:{DataFormDialog:T,DataTable:he},data(){return{dataApi:$,list:[],total:0,page:1,size:20,keyword:"",loading:!0,dialogVisible:!1,export_to_file_url:A($.exportDomainToFile)}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let o={page:this.page,size:this.size,keyword:this.keyword};const s=await this.$http.getDomainList(o);s.code==0?(this.list=s.data.list.map(l=>(l.expire_days&&l.total_days?l.percentage=l.expire_days/l.total_days*100:l.percentage=null,l.percentage_status="exception",l.expire_days>=30?l.percentage_status="":l.expire_days>=3&&(l.percentage_status="warning"),l)),this.total=s.data.total):this.$msg.error(e.msg),this.loading=!1},async updateAllDomainCertInfoOfUser(){let o=this.$loading({fullscreen:!0});(await this.$http.updateAllDomainCertInfoOfUser()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()),o.close()},async handleHttpRequest(o){let s=this.$loading({fullscreen:!0}),l=new FormData;l.append("file",o.file);const h=await this.$http.importDomainFromFile(l);h.code==0&&(this.$msg.success(`\u5BFC\u5165\u6210\u529F\uFF1A${h.data.count}`),this.resetData()),s.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){let s=(await this.$http.getAllDomainListOfUser()).data.list.map(h=>h.domain).join(`
`);var l=new Blob([s],{type:"text/plain;charset=utf-8"});q.saveAs(l,"domain.txt")},handleSearch(){this.resetData()}},created(){this.getData()}},ge={class:"app-container"},be={class:"flex justify-between"},we={class:"flex"};function ye(o,s,l,h,n,c){const _=i("Plus"),r=i("el-icon"),p=i("el-button"),g=i("Search"),D=i("el-input"),b=i("Refresh"),x=i("Upload"),S=i("el-upload"),V=i("Download"),O=i("DataTable"),R=i("el-pagination"),U=i("DataFormDialog"),d=I("loading");return y(),v("div",ge,[u("div",be,[u("div",null,[t(p,{type:"primary",onClick:c.handleAddRow},{default:a(()=>[t(r,null,{default:a(()=>[t(_)]),_:1}),w("\u6DFB\u52A0")]),_:1},8,["onClick"]),t(D,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":s[0]||(s[0]=f=>n.keyword=f),placeholder:"\u8F93\u5165\u57DF\u540D",onKeypress:N(c.handleSearch,["enter"])},{append:a(()=>[t(p,{onClick:c.handleSearch},{default:a(()=>[t(r,null,{default:a(()=>[t(g)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress"])]),u("div",we,[t(p,{onClick:c.updateAllDomainCertInfoOfUser},{default:a(()=>[t(r,null,{default:a(()=>[t(b)]),_:1}),w("\u5168\u90E8\u66F4\u65B0")]),_:1},8,["onClick"]),t(S,{class:"ml-sm",action:"action",limit:1,"show-file-list":!1,"http-request":c.handleHttpRequest},{default:a(()=>[t(p,null,{default:a(()=>[t(r,null,{default:a(()=>[t(x)]),_:1}),w("\u5BFC\u5165")]),_:1})]),_:1},8,["http-request"]),t(p,{class:"ml-sm",onClick:c.handleExportToFile},{default:a(()=>[t(r,null,{default:a(()=>[t(V)]),_:1}),w("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),j(t(O,{class:"mt-md",list:n.list,onOnSuccess:c.resetData},null,8,["list","onOnSuccess"]),[[d,n.loading]]),t(R,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:page-size":s[1]||(s[1]=f=>n.size=f),"current-page":n.page,"onUpdate:current-page":s[2]||(s[2]=f=>n.page=f),onCurrentChange:c.getData},null,8,["total","page-size","current-page","onCurrentChange"]),t(U,{visible:n.dialogVisible,"onUpdate:visible":s[3]||(s[3]=f=>n.dialogVisible=f),onOnSuccess:c.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const Ve=C(fe,[["render",ye]]);export{Ve as default};
