webpackJsonp([6],{BRys:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gyMJ"),i={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(a.o)({page:this.currentPage-1,size:10}).then(function(e){t.list=e.data.content,t.totalNum=e.data.totalElements,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},delArticle:function(t){var e=this;Object(a.g)(t).then(function(t){200==t.status?(e.$message({message:"删除成功",type:"success"}),e.fetchData()):e.$message({message:"删除失败",type:"warning"})})},handleAdd:function(t,e){this.$router.push({path:"infoedit/"+e+"/"+t})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleAdd(1,-1)}}},[t._v("添加")]),t._v(" "),n("br"),n("br"),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(10*(t.currentPage-1)+e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"200",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){t.handleAdd(-1,e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(n){t.delArticle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var l=n("VU/8")(i,r,!1,function(t){n("oyTZ")},"data-v-ee99a258",null);e.default=l.exports},oyTZ:function(t,e,n){var a=n("stC2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("66968d4b",a,!0)},stC2:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.edit-input[data-v-ee99a258] {\r\n  padding-right: 100px;\n}\n.cancel-btn[data-v-ee99a258] {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\n}\r\n",""])}});