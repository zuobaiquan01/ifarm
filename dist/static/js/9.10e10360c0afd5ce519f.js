webpackJsonp([9],{"3WDM":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},"9Jvk":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("vLgD");var r={data:function(){return{list:null,listLoading:!0,selectitem:"",sn:"",selectOptions:[{id:0,name:"买菜地"}],currentPage:1,totalNum:1,searchSelect:"",searchStatus:"",selectOptionsStatus:[{id:0,name:"未付款"},{id:1,name:"付款中"},{id:2,name:"已付款"},{id:3,name:"已退款"}],searchObj:{type:-1,searchStatus:-1,searchSelect:-1}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,function(e,t){var a="";switch(t.type){case-1:a="/api/order?sort=createTime,desc";break;case 0:a="/api/order?payStatus="+t.searchStatus+"&sort=createTime,desc";break;case 1:a="/api/order?status="+t.searchSelect+"&sort=createTime,desc";break;case 2:a="/api/order?status="+t.searchSelect+"&payStatus="+t.searchStatus+"&sort=createTime,desc"}return Object(s.a)({url:a,method:"get",params:e})}({page:this.currentPage-1,size:10},this.searchObj).then(function(t){e.list=t.data.content,e.totalNum=t.data.totalElements,e.listLoading=!1})},handleFilter:function(){-1==this.searchSelect&&-1!==this.searchStatus&&(this.searchObj.type=0,this.searchObj.searchStatus=this.searchStatus),-1!=this.searchSelect&&-1==this.searchStatus&&(this.searchObj.type=1,this.searchObj.searchSelect=this.searchSelect),-1!=this.searchSelect&&-1!=this.searchStatus&&(this.searchObj.type=2,this.searchObj.searchStatus=this.searchStatus,this.searchObj.searchSelect=this.searchSelect),this.fetchData()},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},payStatus:function(e){switch(e){case 0:return"未付款";case 1:return"付款中";case 2:return"已付款";case 3:return"已退款"}}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e._v("\n    状态  "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchStatus,callback:function(t){e.searchStatus=t},expression:"searchStatus"}},e._l(e.selectOptionsStatus,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n        \n    类型  "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchSelect,callback:function(t){e.searchSelect=t},expression:"searchSelect"}},e._l(e.selectOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n        \n    "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.orderSn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"购买类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        买菜地\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"费用",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.money)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.payStatus(t.row.payStatus))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"下单时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("parseTime")(t.row.createTime))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.creator.nickName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone||"--")+"\n      ")]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var c=a("VU/8")(r,n,!1,function(e){a("wbHj")},"data-v-46f5fd7c",null);t.default=c.exports},wbHj:function(e,t,a){var s=a("3WDM");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("70320222",s,!0)}});