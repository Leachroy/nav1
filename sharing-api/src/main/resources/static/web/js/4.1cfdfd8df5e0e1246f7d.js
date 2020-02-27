webpackJsonp([4],{"8wPo":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Q6dk"),n=a("viA7"),s=a("iNxE"),r=a("s8Ph"),c=a("dLd/"),o=a.n(c),l={name:"BlogCategoryTag",created:function(){this.getCategoryOrTagAndArticles()},watch:{$route:"getCategoryOrTagAndArticles"},data:function(){return{defaultAvatar:o.a,ct:{},article:{query:{tagId:"",categoryId:""}}}},computed:{title:function(){return"tag"===this.$route.params.type?this.ct.tagname+" - 标签 - ForSharing":this.ct.categoryname+" - 文章分类 - ForSharing"}},methods:{getCategoryOrTagAndArticles:function(){var t=this.$route.params.id;"tag"===this.$route.params.type?(this.getTagDetail(t),this.article.query.tagId=t):(this.getCategoryDetail(t),this.article.query.categoryId=t)},getCategoryDetail:function(t){var e=this;Object(r.c)(t).then(function(t){e.ct=t.data}).catch(function(t){"error"!==t&&e.$message({type:"error",message:"文章分类加载失败",showClose:!0})})},getTagDetail:function(t){var e=this;Object(s.c)(t).then(function(t){e.ct=t.data}).catch(function(t){"error"!==t&&e.$message({type:"error",message:"标签加载失败",showClose:!0})})},getArticlesByCategory:function(t){var e=this;Object(n.c)(t).then(function(t){e.articles=t.data}).catch(function(t){"error"!==t&&e.$message({type:"error",message:"文章加载失败",showClose:!0})})},getArticlesByTag:function(t){var e=this;Object(n.d)(t).then(function(t){e.articles=t.data}).catch(function(t){"error"!==t&&e.$message({type:"error",message:"文章加载失败",showClose:!0})})}},components:{ArticleScrollPage:i.a}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"me-ct-body",attrs:{"data-title":t.title}},[a("el-container",{staticClass:"me-ct-container"},[a("el-main",[a("div",{staticClass:"me-ct-title me-area"},["tag"===this.$route.params.type?[a("img",{staticClass:"me-ct-picture",attrs:{src:t.ct.avatar?t.ct.avatar:t.defaultAvatar}}),t._v(" "),a("h3",{staticClass:"me-ct-name"},[t._v(t._s(t.ct.tagname))])]:[a("img",{staticClass:"me-ct-picture",attrs:{src:t.ct.avatar?t.ct.avatar:t.defaultAvatar}}),t._v(" "),a("h3",{staticClass:"me-ct-name"},[t._v(t._s(t.ct.categoryname))]),t._v(" "),a("p",[t._v(t._s(t.ct.description))])],t._v(" "),a("span",{staticClass:"me-ct-meta"},[t._v(t._s(t.ct.articles)+" 文章")])],2),t._v(" "),a("div",{staticClass:"me-ct-articles"},[a("article-scroll-page",t._b({},"article-scroll-page",t.article,!1))],1)])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("R0Xj")},null,null);e.default=d.exports},HiUf:function(t,e){},Q6dk:function(t,e,a){"use strict";a("2hfY");var i={name:"ArticleItem",props:{id:Number,weight:Number,title:String,commentCounts:Number,viewCounts:Number,summary:String,author:Object,tags:Array,createDate:String},data:function(){return{}},methods:{view:function(t){this.$router.push({path:"/view/"+t})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"me-area",attrs:{"body-style":{padding:"16px"}}},[a("div",{staticClass:"me-article-header"},[a("a",{staticClass:"me-article-title",on:{click:function(e){return t.view(t.id)}}},[t._v(t._s(t.title))]),t._v(" "),t.weight>0?a("el-button",{staticClass:"me-article-icon",attrs:{type:"text"}},[t._v("置顶")]):t._e(),t._v(" "),a("span",{staticClass:"me-pull-right me-article-count"},[a("i",{staticClass:"me-icon-comment"}),t._v(" "+t._s(t.commentCounts)+"\n\t    ")]),t._v(" "),a("span",{staticClass:"me-pull-right me-article-count"},[a("i",{staticClass:"el-icon-view"}),t._v(" "+t._s(t.viewCounts)+"\n\t    ")])],1),t._v(" "),a("div",{staticClass:"me-artile-description"},[t._v("\n      "+t._s(t.summary)+"\n    ")]),t._v(" "),a("div",{staticClass:"me-article-footer"},[t.author?a("span",{staticClass:"me-article-author"},[a("i",{staticClass:"me-icon-author"}),t._v(" "+t._s(t.author.nickname)+"\n\t    ")]):t._e(),t._v(" "),t.tags.length?a("div",t._l(t.tags,function(e){return a("el-tag",{key:e.tagname,attrs:{size:"mini",type:"success"}},[t._v(t._s(e.tagname))])}),1):t._e(),t._v(" "),a("span",{staticClass:"me-pull-right me-article-count"},[a("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t._f("format")(t.createDate))+"\n\t    ")])])])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("z4CA")},"data-v-1f6d8f81",null).exports,r={props:{loading:Boolean,noData:Boolean,offset:Number},name:"index",mounted:function(){window.addEventListener("scroll",this.handleScroll,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},data:function(){return{scrollAction:{x:"undefined",y:"undefined"}}},methods:{handleScroll:function(t){if(!this.noData){var e=document.documentElement.scrollTop||document.body.scrollTop;document.getElementById("scroll-page");e+window.innerHeight>=this.$refs.scroll.offsetHeight+this.offset&&this.isDownDirection()&&(this.loading||this.$emit("load"))}},isDownDirection:function(){void 0===this.scrollAction.x&&(this.scrollAction.x=window.pageXOffset,this.scrollAction.y=window.pageYOffset);var t=this.scrollAction.x-window.pageXOffset,e=this.scrollAction.y-window.pageYOffset;if(this.scrollAction.x=window.pageXOffset,this.scrollAction.y=window.pageYOffset,t<0);else if(t>0);else if(e<0)return!0;return!1}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"scroll",staticStyle:{overflow:"hidden"},attrs:{id:"scroll-page"}},[this._t("default"),this._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticStyle:{height:"40px","margin-top":"10px","z-index":"1"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(245,245,245)"}})],2)},staticRenderFns:[]};var o=a("VU/8")(r,c,!1,function(t){a("HiUf")},"data-v-6ed96840",null).exports,l=a("viA7"),u={name:"ArticleScrollPage",props:{offset:{type:Number,default:100},page:{type:Object,default:function(){return{}}},query:{type:Object,default:function(){return{}}}},watch:{query:{handler:function(){this.noData=!1,this.articles=[],this.innerPage.pageNumber=1,this.getArticles()},deep:!0},page:{handler:function(){this.noData=!1,this.articles=[],this.innerPage=this.page,this.getArticles()},deep:!0}},created:function(){this.getArticles()},data:function(){return{loading:!1,noData:!1,innerPage:{pageSize:5,pageNumber:1,name:"a.createDate",sort:"desc"},articles:[]}},methods:{load:function(){this.getArticles()},view:function(t){this.$router.push({path:"/view/"+t})},getArticles:function(){var t=this;t.loading=!0,Object(l.b)(t.query,t.innerPage).then(function(e){var a=e.data;a&&a.length>0?(t.innerPage.pageNumber+=1,t.articles=t.articles.concat(a)):t.noData=!0}).catch(function(e){"error"!==e&&t.$message({type:"error",message:"文章加载失败!",showClose:!0})}).finally(function(){t.loading=!1})}},components:{"article-item":s,"scroll-page":o}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("scroll-page",{attrs:{loading:t.loading,offset:t.offset,"no-data":t.noData},on:{load:t.load}},t._l(t.articles,function(e){return a("article-item",t._b({key:e.id},"article-item",e,!1))}),1)},staticRenderFns:[]};var g=a("VU/8")(u,d,!1,function(t){a("WuNZ")},"data-v-37621ceb",null);e.a=g.exports},R0Xj:function(t,e){},WuNZ:function(t,e){},z4CA:function(t,e){}});
//# sourceMappingURL=4.1cfdfd8df5e0e1246f7d.js.map