webpackJsonp([12],{BxEh:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},Gneq:function(e,t,a){var n=a("BxEh");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("533370e2",n,!0)},O2Ox:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("uUes"),s={data:function(){return{list:null,listLoading:!0,selectitem:"",sn:"",selectOptions:[{id:-1,name:"全部"},{id:0,name:"买菜地"},{id:1,name:"买卡"}],currentPage:1,totalNum:1,searchSelect:-1,searchStatus:-1,selectOptionsStatus:[{id:-1,name:"全部"},{id:0,name:"过期"},{id:1,name:"未过期"}],searchObj:{type:-1,searchStatus:-1,searchSelect:-1}}},created:function(){var e=this;this.fetchData(),Object(n.i)({page:0,size:100}).then(function(t){e.selectOptions=t.data.content})},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(n.k)({page:this.currentPage-1,size:10}).then(function(t){e.list=t.data.content,e.totalNum=t.data.totalElements,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handleFilter:function(){-1==this.searchSelect&&-1!==this.searchStatus&&(this.searchObj.type=0,this.searchObj.searchStatus=this.searchStatus),-1!=this.searchSelect&&-1==this.searchStatus&&(this.searchObj.type=1,this.searchObj.searchSelect=this.searchSelect),-1!=this.searchSelect&&-1!=this.searchStatus&&(this.searchObj.type=2,this.searchObj.searchStatus=this.searchStatus,this.searchObj.searchSelect=this.searchSelect),this.fetchData()},compareTime:function(e){var t=new Date(e),a=new Date;return new Date(Date.parse(t))>a?"未过期":"已过期"},handleReport:function(e){this.$router.push({name:"report",params:{billid:e.id}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e._v("\n  状态  "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchStatus,callback:function(t){e.searchStatus=t},expression:"searchStatus"}},e._l(e.selectOptionsStatus,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n      \n  分区  "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchSelect,callback:function(t){e.searchSelect=t},expression:"searchSelect"}},e._l(e.selectOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n      \n  "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"菜地id",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.gardenItem.gardenArea.garden.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"分区",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.gardenItem.gardenArea.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.gardenItem.sn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"有效期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("parseTime")(t.row.startTime,"{y}-{m}-{d}")))]),e._v("-"),a("span",[e._v(e._s(e._f("parseTime")(t.row.endTime,"{y}-{m}-{d}"))+" ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.compareTime(t.row.endTime))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user.nickName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user?t.row.user.phone:t.row.address?t.row.address.phone:"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"默认收货地址",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.address?t.row.address.address:"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(a){e.handleReport(t.row)}}},[e._v("管家汇报")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var l=a("VU/8")(s,r,!1,function(e){a("Gneq")},"data-v-28a94525",null);t.default=l.exports}});