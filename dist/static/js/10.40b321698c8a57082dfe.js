webpackJsonp([10],{A59N:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("gyMJ"),n={data:function(){return{list:null,listLoading:!0,dialogFormVisible:!1,dialogTitle:"添加banner",form:{title:"",coverUrl:"",id:-1},baseURL:"https://ifarm.iqiys.cn/api/oss",uploadData:{key:""},dialogVisible2:!1,dialogImageUrl:"",currentPage:1,totalNum:1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.m)({page:this.currentPage-1,size:10}).then(function(t){e.list=t.data.content,e.totalNum=t.data.totalElements,e.listLoading=!1})},delBanner:function(e){var t=this;Object(a.e)(e).then(function(e){200==e.status?(t.$message({message:"删除成功",type:"success"}),t.fetchData()):t.$message({message:"删除失败",type:"warning"})})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handlePictureCardPreview:function(e){this.dialogImageUrl=e.coverUrl,this.dialogVisible2=!0},handleAdd:function(e,t){var i=this;1==e&&(this.form.id=-1,this.dialogTitle="添加banner",this.form.title="",this.form.coverUrl="",this.dialogFormVisible=!0),-1==e&&(this.form.id=t,this.dialogTitle="修改banner",this.list.forEach(function(e,a){if(e.id==t)return i.form.title=e.title,i.form.coverUrl=e.coverUrl,void(i.dialogFormVisible=!0)}))},handleImagebeforeUpload:function(e){var t=e.name,i=t.substring(t.lastIndexOf(".")+1);this.uploadData.key=Date.parse(new Date)+"."+i},handleImageScucess:function(e,t,i){this.form.coverUrl=e.data},handelErrorForm:function(){return""==this.form.title?(this.$message({message:"图片标题不能为空",type:"warning"}),!1):""!=this.form.coverUrl||(this.$message({message:"图片不能为空",type:"warning"}),!1)},submitRes:function(){var e=this;this.handelErrorForm()?-1==this.form.id?Object(a.c)({coverUrl:this.form.coverUrl,title:this.form.title}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"添加成功",type:"success"}),e.fetchData()):e.$message({message:"添加失败",type:"warning"})}):Object(a.k)({coverUrl:this.form.coverUrl,title:this.form.title,id:this.form.id}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"修改成功",type:"success"}),e.fetchData()):e.$message({message:"修改失败",type:"warning"})}):console.log("表单提交失败")}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,-1)}}},[e._v("添加")]),e._v(" "),i("br"),i("br"),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"banner描叙",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"banner图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("img",{staticStyle:{"max-height":"150px","max-width":"150px",cursor:"pointer"},attrs:{src:t.row.coverUrl,alt:""},on:{click:function(i){e.handlePictureCardPreview(t.row)}}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(i){e.handleAdd(-1,t.row.id)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(i){e.delBanner(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{attrs:{model:e.form}},[i("el-form-item",{attrs:{label:"banner标题","label-width":"120px"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),i("div",[i("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"}},[e._v("banner图片")]),e._v(" "),i("el-upload",{staticClass:"upload-demo",attrs:{drag:"","before-upload":e.handleImagebeforeUpload,"on-success":e.handleImageScucess,action:e.baseURL,data:e.uploadData}},[i("i",{staticClass:"el-icon-upload"}),e._v(" "),i("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),i("em",[e._v("点击上传")])])])],1),e._v(" "),e.form.coverUrl?i("div",{staticStyle:{"margin-left":"120px"}},[i("img",{staticStyle:{"max-height":"200px",cursor:"pointer"},attrs:{src:e.form.coverUrl,alt:"",width:"80%",height:"80%"},on:{click:function(t){e.handlePictureCardPreview(e.form)}}})]):e._e(),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes()}}},[e._v("确 定")])],1)],1),e._v(" "),e.totalNum/10>1?i("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible2},on:{"update:visible":function(t){e.dialogVisible2=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(e){i("pZrR")},"data-v-609d8935",null);t.default=r.exports},cRAt:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.upload-container[data-v-609d8935] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.upload-container .image-uploader[data-v-609d8935] {\n    margin-left: 120px;\n    float: left;\n}\n.upload-container .image-preview[data-v-609d8935] {\n    width: 200px;\n    height: 200px;\n    position: relative;\n    border: 1px dashed #d9d9d9;\n    float: left;\n    margin-left: 50px;\n}\n.upload-container .image-preview .image-preview-wrapper[data-v-609d8935] {\n      position: relative;\n      width: 100%;\n      height: 100%;\n}\n.upload-container .image-preview .image-preview-wrapper img[data-v-609d8935] {\n        width: 100%;\n        height: 100%;\n}\n.upload-container .image-preview .image-preview-action[data-v-609d8935] {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      cursor: default;\n      text-align: center;\n      color: #fff;\n      opacity: 0;\n      font-size: 20px;\n      background-color: rgba(0, 0, 0, 0.5);\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s;\n      cursor: pointer;\n      text-align: center;\n      line-height: 200px;\n}\n.upload-container .image-preview .image-preview-action .el-icon-delete[data-v-609d8935] {\n        font-size: 36px;\n}\n.upload-container .image-preview:hover .image-preview-action[data-v-609d8935] {\n      opacity: 1;\n}\n",""])},pZrR:function(e,t,i){var a=i("cRAt");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("354eb7e9",a,!0)}});