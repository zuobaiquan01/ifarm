webpackJsonp([9],{"4lsz":function(e,t,n){var a=n("g8Ds");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("0df02d4e",a,!0)},Tv1W:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("uUes"),i={data:function(){return{list:null,listLoading:!0,dialogFormVisible:!1,form:{name:""},currentPage:1,totalNum:1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.i)({page:this.currentPage-1,size:10}).then(function(t){e.list=t.data.content,e.totalNum=t.data.totalElements,e.list=e.list.map(function(t){return e.$set(t,"edit",!1),t.originalName=t.name,t}),e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},delArea:function(e){var t=this;Object(a.d)(e).then(function(e){200==e.status?(t.$message({message:"删除成功",type:"success"}),t.fetchData()):t.$message({message:"删除失败",type:"warning"})})},handleAdd:function(){this.dialogFormVisible=!0,this.form.name=""},submitRes:function(){var e=this;if(""==this.form.name)return this.$message({message:"分区名称不能为空",type:"warning"}),!1;Object(a.a)({name:this.form.name,garden:{id:1}}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"添加成功",type:"success"}),e.fetchData()):e.$message({message:"添加失败",type:"warning"})})},cancelEdit:function(e){e.name=e.originalName,e.edit=!1,this.$message({message:"已取消修改",type:"warning"})},confirmEdit:function(e){var t=this;if(""==e.name)return this.$message({message:"分区名称不能为空",type:"warning"}),!1;e.edit=!1,e.originalName=e.name,Object(a.f)({name:e.name,id:e.id}).then(function(e){200==e.status?t.$message({message:"修改成功",type:"success"}):t.$message({message:"修改失败",type:"warning"})})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd()}}},[e._v("添加")]),e._v(" "),n("br"),n("br"),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"300px",label:"分区名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}}),e._v(" "),n("el-button",{staticClass:"cancel-btn",attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:function(n){e.cancelEdit(t.row)}}},[e._v("取消")])]:n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check-outline"},on:{click:function(n){e.confirmEdit(t.row)}}},[e._v("确定")]):n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(e){t.row.edit=!t.row.edit}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(n){e.delArea(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"添加分区",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"分区名称","label-width":"120px"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes()}}},[e._v("确 定")])],1)],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(e){n("4lsz")},"data-v-6ec5a03e",null);t.default=o.exports},g8Ds:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.edit-input[data-v-6ec5a03e] {\n  padding-right: 100px;\n}\n.cancel-btn[data-v-6ec5a03e] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n",""])}});