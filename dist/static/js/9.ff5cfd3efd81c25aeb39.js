webpackJsonp([9],{"7NPu":function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},Qe6x:function(e,t,s){var a=s("7NPu");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("8480eae6",a,!0)},RoUo:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("uUes"),i={data:function(){return{list:null,listLoading:!0,dialogFormVisible:!1,formLabelWidth:"120px",dialogTitle:"添加菜地",selectitem:"",sn:"",selectOptions:[],selectOptions2:[],status:1,gardenId:-1,currentPage:1,totalNum:1,searchSelect:null,selectOptionsStatus:[{id:0,name:"下架"},{id:1,name:"待售"},{id:2,name:"已售"},{id:3,name:"预售"}],searchObj:{type:-1,status:"",sn:"",gardenArea:""}}},created:function(){var e=this;Object(a.l)({page:0,size:100}).then(function(t){e.selectOptions=t.data.content,e.selectOptions2=t.data.content}),this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.q)({page:this.currentPage-1,size:10},this.searchObj).then(function(t){e.list=t.data.content,e.totalNum=t.data.totalElements,e.listLoading=!1})},handleFilter:function(){""==this.searchSn&&-1==this.searchSelect2&&-1!==this.searchStatus&&(this.searchObj.type=0),""!==this.searchSn&&-1==this.searchSelect2&&-1==this.searchStatus&&(this.searchObj.type=1),""==this.searchSn&&-1!==this.searchSelect2&&-1==this.searchStatus&&(this.searchObj.type=2),""!==this.searchSn&&-1==this.searchSelect2&&-1!==this.searchStatus&&(this.searchObj.type=3),""!==this.searchSn&&-1!==this.searchSelect2&&-1==this.searchStatus&&(this.searchObj.type=4),""==this.searchSn&&-1!==this.searchSelect2&&-1!==this.searchStatus&&(this.searchObj.type=5),""!==this.searchSn&&-1!==this.searchSelect2&&-1!==this.searchStatus&&(this.searchObj.type=6),this.fetchData()},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handleAdd:function(e,t){var s=this;1==e&&(this.selectitem=null,this.dialogTitle="添加菜地",this.status=1,this.sn="",this.gardenId=-1,this.dialogFormVisible=!0),-1==e&&(this.dialogTitle="修改菜地",this.list.forEach(function(e,a){if(e.gardenArea.id==t)return s.gardenId=e.id,s.selectitem=t,s.status=e.status,s.sn=e.sn,void(s.dialogFormVisible=!0)}))},areaSelect:function(e){switch(e){case 0:return"下架";case 1:return"待售";case 2:return"已售";case 3:return"预售"}},delIndex:function(e){var t=this;Object(a.e)(e).then(function(e){200==e.status?(t.$message({message:"删除成功",type:"success"}),t.fetchData()):t.$message({message:"删除失败",type:"warning"})})},handelErrorForm:function(){return this.selectitem?""!=this.sn||(this.$message({message:"编号不能为空",type:"warning"}),!1):(this.$message({message:"请选择菜地分区",type:"warning"}),!1)},submitRes:function(){var e=this;if(this.handelErrorForm()){var t="";this.selectOptions.forEach(function(s,a){s.id==e.selectitem&&(t=s.name)}),-1==this.gardenId?Object(a.b)({gardenArea:{id:this.selectitem},name:t,sn:this.sn,status:this.status}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"添加成功",type:"success"}),e.fetchData()):e.$message({message:"添加失败",type:"warning"})}):Object(a.h)({id:this.gardenId,gardenArea:{id:this.selectitem},name:t,sn:this.sn,status:this.status}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"修改成功",type:"success"}),e.fetchData()):e.$message({message:"修改失败",type:"warning"})})}else console.log("表单提交失败")}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,-1)}}},[e._v("添加")]),e._v("\n        \n    编号："),s("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请输入"},model:{value:e.searchObj.sn,callback:function(t){e.$set(e.searchObj,"sn",t)},expression:"searchObj.sn"}}),e._v("\n        \n    分区  "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"选择分区"},model:{value:e.searchObj.gardenArea,callback:function(t){e.$set(e.searchObj,"gardenArea",t)},expression:"searchObj.gardenArea"}},e._l(e.selectOptions2,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n        \n    状态  "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"选择分区"},model:{value:e.searchObj.status,callback:function(t){e.$set(e.searchObj,"status",t)},expression:"searchObj.status"}},e._l(e.selectOptionsStatus,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n        \n    "),s("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),s("br"),s("br"),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"序号",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"分区",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.gardenArea.name)+"\n      ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.sn)+"\n      ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.areaSelect(t.row.status))+"\n      ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("parseTime")(t.row.createTime))+"\n      ")]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(s){e.handleAdd(-1,t.row.gardenArea.id)}}},[e._v("编辑")]),e._v(" "),s("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(s){e.delIndex(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),s("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",[s("el-form-item",{attrs:{label:"菜地分区","label-width":"120px"}},[s("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:e.selectitem,callback:function(t){e.selectitem=t},expression:"selectitem"}},e._l(e.selectOptions,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v("\n           \n        "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入编号"},model:{value:e.sn,callback:function(t){e.sn=t},expression:"sn"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"状态","label-width":"120px"}},[s("el-radio-group",{model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[s("el-radio",{attrs:{label:0}},[e._v("下架")]),e._v(" "),s("el-radio",{attrs:{label:1}},[e._v("未售")]),e._v(" "),s("el-radio",{attrs:{label:2}},[e._v("已售")]),e._v(" "),s("el-radio",{attrs:{label:3}},[e._v("预售")])],1)],1),e._v(" "),s("el-form-item",{attrs:{"label-width":"50px"}},[s("div",{staticStyle:{"line-height":"30px","margin-right":"30px"}},[e._v("\n          （下架：小程序无法查看到该菜地；未售：已上架，但还未被购买；已售：已被购买；预售：已被锁定，3分钟后变为未售状态）\n        ")])])],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes()}}},[e._v("确 定")])],1)],1),e._v(" "),e.totalNum/10>1?s("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]};var l=s("VU/8")(i,n,!1,function(e){s("Qe6x")},"data-v-692f116c",null);t.default=l.exports}});