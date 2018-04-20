webpackJsonp([1],{"40PX":function(t,e){},"4jBg":function(t,e){},B2U5:function(t,e){},D4uH:function(t,e,n){"use strict";var i={},a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,n){var i="fa-"+(s++).toString(16);return e[n]=i,' id="'+i+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,a){var s=n||a;return s&&e[s]?"#"+e[s]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[e]=n}},icons:i},s=870711;var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var r=n("VU/8")(a,o,!1,function(t){n("KFyI")},null,null);e.a=r.exports},GuNO:function(t,e){},J5cu:function(t,e){},KFyI:function(t,e){},"Ky+A":function(t,e,n){"use strict";(function(t){var i=n("Dd8w"),a=n.n(i);e.a={post:function(e){return{path:"/post/"+e+".json",resolve:function(e,n){var i=e.title,s=e.content,o=e.meta;return s=t.from(s,"base64").toString("ascii"),n.merge(a()({title:i,content:s},o))}}}}}).call(e,n("EuP9").Buffer)},LGYF:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"Blog",function(){return Ut}),n.d(i,"BlogFeed",function(){return qt}),n.d(i,"BlogPost",function(){return Lt.a});var a=n("7+uW"),s=n("bm7V"),o=n.n(s),r=n("AYPi"),c=n.n(r),l=function(t){var e=!0;switch(t){case"Home":case"BlogSubject":case"Article":e=!1;break;default:e=!0}return e},u={data:function(){return{links:[]}},methods:{isTopLevelRoute:l},mounted:function(){var t=this;this.$router.options.routes.forEach(function(e){t.isTopLevelRoute(e.name)&&t.links.push({name:e.name,path:e.path})})}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",t._l(t.links,function(e){return n("li",[n("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var d=n("VU/8")(u,p,!1,function(t){n("Up5U")},"data-v-1af0261d",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("svg",{staticClass:"logo",style:this.transformObj,attrs:{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:this.fill,stroke:this.stroke}},[e("rect",{attrs:{x:"0",y:"0",width:"100",height:"100"}}),this._v(" "),e("text",{attrs:{x:"25",y:"50","text-anchor":"middle","alignment-baseline":"central",scale:"2"}},[this._v("A")]),this._v(" "),e("text",{attrs:{x:"75",y:"50","text-anchor":"middle","alignment-baseline":"central",scale:"2"}},[this._v("H")]),this._v(" "),e("line",{attrs:{x1:"50",y1:"25",x2:"50",y2:"75"}})])])])},staticRenderFns:[]};var m=n("VU/8")({props:["stroke","fill","scalefactor"],computed:{transformObj:function(){return{transform:"scale("+(this.scalefactor||1)+")","-ms-transform":"'scale("+(this.scalefactor||1)+")'","-webkit-transform":"scale("+(this.scalefactor||1)+")","-moz-transform":"'scale("+(this.scalefactor||1)+")'","-o-transform":"'scale("+(this.scalefactor||1)+")'"}}}},h,!1,function(t){n("yR3K")},"data-v-21a8c8ef",null).exports,g={name:"AppFooter",components:{Links:d,Logo:m},data:function(){return{icons:[{name:"twitter",url:"https://twitter.com/al_hinds"},{name:"medium",url:"https://medium.com/@al_hinds"},{name:"github",url:"https://github.com/DarkPurple141/"},{name:"bitbucket",url:"https://bitbucket.org/DarkPurple141/"},{name:"linkedin",url:"https://www.linkedin.com/in/alex-hinds-12449660/"}]}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("router-link",{staticClass:"highlight-logo",attrs:{to:{name:"Home"}}},[e("Logo",{attrs:{fill:"#ddd",stroke:"#ddd"}})],1),this._v(" "),e("Links"),this._v(" "),e("div",{staticClass:"social-icons"},this._l(this.icons,function(t){return e("a",{key:t.name,attrs:{href:t.url,target:"_blank"}},[e("icon",{staticClass:"icon-frame",attrs:{scale:"1.5"}},[e("icon",{class:t.name,attrs:{name:t.name}})],1)],1)})),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[e("p",[this._v("Copyright © Alexander Hinds 2017")]),this._v(" "),e("p",[this._v("All rights reserved.")])])}]};var v=n("VU/8")(g,f,!1,function(t){n("Rg57")},"data-v-ee5817da",null).exports,_={name:"NavLinks",data:function(){return{links:[]}},props:{open:{required:!0,type:Boolean}},methods:{isTopLevelRoute:l},mounted:function(){var t=this;this.$router.options.routes.forEach(function(e){t.isTopLevelRoute(e.name)&&t.links.push({name:e.name,path:e.path})})}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"right-nav"},[n("nav",{class:{"dropdown-open":t.open,dropdown:!t.open},on:{click:function(e){t.$emit("toggle")}}},[n("icon",{staticClass:"menu-icon",attrs:{name:t.open?"close":"reorder",scale:"1.5"}}),t._v(" "),n("div",{staticClass:"dropdown-content"},t._l(t.links,function(e){return n("router-link",{key:e.name,attrs:{to:e.path}},[n("h2",[t._v(t._s(e.name))])])}))],1),t._v(" "),n("nav",{staticClass:"fullscreen"},t._l(t.links,function(e){return n("router-link",{key:e.name,attrs:{to:e.path}},[t._v("\n         "+t._s(e.name)+"\n      ")])}))])},staticRenderFns:[]};var b={components:{Links:n("VU/8")(_,y,!1,function(t){n("Z47b")},"data-v-e35588fc",null).exports},data:function(){return{open:!1}},methods:{toggleMenu:function(){this.open=!this.open}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("section",[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("\n            A | H\n      ")])],1),t._v(" "),n("Links",{attrs:{open:t.open},on:{toggle:function(e){t.toggleMenu()}}})],1)},staticRenderFns:[]};var w={name:"portfolio",components:{AppFooter:v,AppNav:n("VU/8")(b,k,!1,function(t){n("gFpe")},"data-v-7cd2318d",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},["Home"!=this.$route.name?e("AppNav"):this._e(),this._v(" "),e("router-view"),this._v(" "),e("AppFooter")],1)},staticRenderFns:[]};var S=n("VU/8")(w,j,!1,function(t){n("VQBr")},null,null).exports,x=n("/ocq"),I=[{stub:"I'm a designer and engineer.",content:"I believe good software is maintainable, testable, and shipped. I believe premature optimisation is evil. I don't forget the value of the aesthetic.",title:"Engineer",link:"Engineer",id:"tech",icon:"code"},{stub:"I'm a journalist.",content:"I've written for print and online, worked in television and have produced and run multiple podcasts.",title:"Journalist",link:"Journalist",id:"media",icon:"newspaper-o"},{stub:"I'm a teacher and I blog.",content:"I teach computer science at UNSW. I like to bring people along on my dev journeys by blogging and explaining my process.",title:"Writer",link:"Thinker",id:"writing",icon:"pencil"},{stub:"I've got a diverse skillset.",content:"I pride myself on being the bridge between the technical and non-technical. I can comfortably sit in both worlds.",title:"About",link:"About",id:"skills",icon:"gears"}],C={content:"Got something cool on the boil? I'm interested. Hit me up.",description:"I'm currently based in Sydney, Australia. I've always loved to build and create useful and exciting things and show them to the world.\nSoftware and the web have a magical way of giving this passion an outlet.\nI like to write and teach too. You can find various blogs of mine floating around and on this website.\nI'm a big fan of the open source community and love to chip in where I can. I'm always on the lookout for interesting projects to get involved with and passionate people to meet.",languages:["python","java","javascript","c","css","html","markdown"],tools:["vuejs","paperjs","node","npm","linux","macOS","mongodb","postgresql","git"],tags:["about","bio","alexander-hinds","al-hinds"]},A={props:{title:{type:String,required:!0},content:{type:String,required:!0},stub:{type:String,required:!0},icon:{type:String},link:{type:String,required:!0}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("article",{staticClass:"header"},[e("router-link",{staticClass:"header-link",attrs:{to:{name:this.link}}},[e("div",{staticClass:"inner"},[e("icon",{attrs:{name:this.icon,scale:"2"}}),this._v(" "),e("h1",[this._v(this._s(this.title))])],1)])],1),this._v(" "),e("article",{staticClass:"content"},[e("p",[e("span",[this._v(this._s(this.stub))]),this._v(" "+this._s(this.content))]),this._v(" "),e("router-link",{attrs:{to:{name:this.link}}},[this._v("< More >")])],1)])},staticRenderFns:[]};var $=n("VU/8")(A,R,!1,function(t){n("RXGN")},"data-v-60d9add4",null).exports,H={props:{email:{type:Boolean},resume:{type:Boolean},copy:{type:Array}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("article",{staticClass:"lede"},[t.resume?n("aside",[n("p",[t._v("Honestly, I just came here for a resumé.")]),t._v(" "),n("a",{attrs:{href:"/static/resume.pdf"}},[n("figure",[n("icon",{attrs:{scale:"2.5",name:"file"}})],1),t._v(" "),n("h3",[t._v("Resume.pdf")])])]):t._e(),t._v(" "),t.copy?n("aside",{staticClass:"copy"},t._l(t.copy,function(e){return n("p",[t._v(t._s(e))])})):t._e(),t._v(" "),t.email?n("a",{attrs:{href:"mailto:alex.hinds141@gmail.com"}},[n("figure",[n("icon",{attrs:{scale:"2.5",name:"envelope"}})],1),t._v(" "),n("h3",[t._v("alex.hinds141@gmail.com")])]):t._e()])])},staticRenderFns:[]};var F=n("VU/8")(H,E,!1,function(t){n("J5cu")},"data-v-ac7d309a",null).exports,T={components:{Logo:m}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("Logo",{attrs:{scalefactor:1.5,stroke:"#2c3e50",fill:"#2c3e50"}}),this._v(" "),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#bio",expression:"'#bio'"}],attrs:{href:"#"}},[e("icon",{attrs:{scale:"1.5",name:"chevron-down"}})],1)],1)},staticRenderFns:[]};var U={name:"Home",components:{HomeCard:$,Splash:n("VU/8")(T,B,!1,function(t){n("B2U5")},"data-v-34644e39",null).exports,Seperator:F},data:function(){return{slides:I,bio:[]}},mounted:function(){this.bio=C.content.split("\n")}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Splash"),this._v(" "),e("Seperator",{staticClass:"bio",attrs:{id:"bio",email:!0,copy:this.bio}}),this._v(" "),e("main",{staticClass:"banners"},this._l(this.slides,function(t){return e("HomeCard",{key:t.id,attrs:{title:t.title,stub:t.stub,content:t.content,icon:t.icon,link:t.link,id:t.id}})}))],1)},staticRenderFns:[]};var L=n("VU/8")(U,q,!1,function(t){n("40PX")},"data-v-21658955",null).exports,P={name:"ArticleHeader",props:{img:{type:String},title:{type:String}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"banner"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var M=n("VU/8")(P,V,!1,function(t){n("hWRZ")},"data-v-a2b97196",null).exports,D={props:{language:{type:String}},computed:{img_link:function(){var t="";switch(this.language){case"c":t="/static/images/icons/c.png";break;case"java":t="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg";break;case"javascript":t="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";break;case"python":t="https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg";break;case"html":t="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";break;case"css":t="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";break;case"node":t="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";break;case"vuejs":t="https://vuejs.org/images/logo.png";break;case"paperjs":t="/static/images/icons/paperjs.jpg";break;case"npm":t="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg";break;case"mongodb":t="https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg";break;case"postgresql":t="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg";break;case"linux":t="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png";break;case"git":t="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png";break;case"macOS":t="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";break;case"markdown":t="/static/images/icons/markdown.svg";break;case"less":t="http://lesscss.org/public/img/logo.png"}return t}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("img",{attrs:{title:this.language,src:this.img_link}})])},staticRenderFns:[]};var N=n("VU/8")(D,W,!1,function(t){n("esoH")},"data-v-05766d24",null).exports,z={props:{languages:{type:Array}},components:{LanguageIcon:N}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",this._l(this.languages,function(t){return e("li",{staticClass:"lang-icons"},[e("LanguageIcon",{attrs:{language:t}})],1)}))])},staticRenderFns:[]};var G=n("VU/8")(z,O,!1,function(t){n("c7Ed")},"data-v-492eb9f0",null).exports,J={components:{ArticleHeader:M,LanguageIcons:G,Seperator:F},name:"About",data:function(){return{content:C}},computed:{lines:function(){return this.content.description.split("\n")}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",[n("section",{staticClass:"description"},[n("article",[t._m(0),t._v(" "),n("h2",[t._v("Hi, I'm Alex.")]),t._v(" "),n("aside",t._l(t.lines,function(e){return n("p",[t._v(t._s(e))])}))]),t._v(" "),n("section",[n("aside",[n("h2",[t._v("Languages")]),t._v(" "),n("LanguageIcons",{attrs:{languages:t.content.languages}})],1),t._v(" "),n("aside",[n("h2",[t._v("Tools")]),t._v(" "),n("LanguageIcons",{attrs:{languages:t.content.tools}})],1)])])]),t._v(" "),n("Seperator",{staticClass:"seperator",attrs:{resume:!0}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{attrs:{src:"/static/images/profile.jpg",alt:"Alex Hinds profile"}})])}]};var Y=n("VU/8")(J,K,!1,function(t){n("b6Wy")},"data-v-96ab4190",null).exports,X={props:{project:{type:Object,required:!0}},data:function(){return{hover:{primary:!1,secondary:!1}}},components:{LanguageIcons:G}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",[n("div",[n("h1",[t._v(t._s(t.project.name))]),t._v(" "),n("time",[t._v(t._s(t.project.year))])])]),t._v(" "),n("figure",{staticClass:"splash",on:{mouseover:function(e){t.hover.primary=!0},mouseleave:function(e){t.hover.primary=!1}}},[n("img",{class:{greyscale:!t.hover.primary},attrs:{src:t.project.images.large,alt:"large image related to topic"}})]),t._v(" "),n("figure",{staticClass:"support",on:{mouseover:function(e){t.hover.secondary=!0},mouseleave:function(e){t.hover.secondary=!1}}},[n("img",{class:{greyscale:!t.hover.secondary},attrs:{src:t.project.images.small,alt:"small image related to topic"}})]),t._v(" "),n("summary",[n("div",[n("div",{staticClass:"summary"},[n("p",[t._v("\n               "+t._s(t.project.description.main)+"\n            ")])])])]),t._v(" "),n("article",[n("aside",{staticClass:"description"},[n("LanguageIcons",{attrs:{languages:t.project.languages}}),t._v(" "),n("h2",[t._v("Background")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.project.description.story)+"\n         ")]),t._v(" "),n("h3",{staticClass:"link"},[n("a",{attrs:{href:t.project.story,target:"_blank"}},[t._v("Full story..")])]),t._v(" "),n("div",{staticClass:"links"},[n("a",{attrs:{href:t.project.link,target:"_blank"}},[n("icon",{attrs:{scale:"2",name:"github"}})],1),t._v(" "),t.project.live?n("a",{attrs:{href:t.project.live,target:"_blank"}},[t._v("\n               Live\n            ")]):t._e()])],1)])])},staticRenderFns:[]};var Z={copy:"I'm a junior full-stack software engineer and UI/UX designer. I can develop an idea from scratch and turn it into a minimum viable product.\nMy skill is in bridging the gap between the dev team and the client. I can translate an idea into a technical solution -- and I can decode the technical jargon into terms a client can understand.\n",projects:[{name:"Sort Visualizer",year:2018,images:{large:"/static/images/projects/sorting/large.png",small:"/static/images/projects/sorting/small.jpg"},languages:["javascript","css","html"],tools:[],description:{main:"As preparation for an frontend interview I wanted to make something in pure javascript. This was an exercise in writing clean code, and making something fun. Plus it's educational.",story:"I need* to write something in depth about making this, but part of it came from wanting to explore the. concept of generators in an asynchronous context of javascript."},link:"https://github.com/DarkPurple141/sorting-algo-visualizer",live:"https://sorting.alhinds.com",story:"https://medium.com/@al_hinds/web-development-is-easy-right-6c27129d9764"},{name:"Tank Hunter",year:2016,images:{large:"/static/images/projects/tanks/large.png",small:"/static/images/projects/tanks/small.png"},languages:["javascript","css","html"],tools:["paper.js"],description:{main:"This is a little 2D game made to experiment with the paper.js vector graphics library. It was my first real foray into doing something substantial with JS. A lot of fun to fiddle with.",story:"Why do I like tanks? I have NFI, but I do and when I needed an idea to make a game just before the second year uni-break, I thought the idea of a tank game would be pretty friggin’ fun."},link:"https://github.com/DarkPurple141/Tank-Hunter-2D",live:" http://alhinds.com/Tank-Hunter-2D/",story:"https://medium.com/alex-hinds-portfolio/making-an-html5-game-using-paper-js-dc05f51119d5"},{name:"Map Maker",year:2016,images:{large:"/static/images/projects/maps/large.jpg",small:"/static/images/projects/maps/small.jpg"},languages:["python"],tools:["pygame"],description:{main:"I wanted to try my hand at random map generation for games. It was rough in parts, but I learnt a ton doing it.",story:"In every book I’ve ever read maps have helped to bring stories to life in a way that descriptions, and place-names never did total-justice to. They could be as simple as a few lines on a piece of paper, to highly technical documents. Whatever they were I loved them."},link:"https://github.com/DarkPurple141/Maps",story:"https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"},{name:"Baby Names",year:2017,images:{large:"/static/images/projects/baby/large.jpg",small:"/static/images/projects/baby/small.png"},languages:["node","css","vuejs"],description:{main:"A simple HTML-CSS-JS mix to help come up with a name for.. well basically anything. Well it started like that anyway.",story:"After many sleepless nights trying to figure out a name for my partner and I's first born, I resolved to what all good software engineers do. I built a mini-app."},link:"https://github.com/DarkPurple141/baby-names",live:"http://alhinds.com/baby-names/",story:"https://medium.com/alex-hinds-portfolio/making-an-html5-game-using-paper-js-dc05f51119d5"},{name:"Sokoban",year:2017,images:{large:"/static/images/projects/sokoban/large.png",small:"/static/images/projects/sokoban/small.png"},languages:["java"],tools:["junit","swing"],description:{main:"A Java project pulling together design patterns, game design, map generation. Four man team. Long nights, communication, project management - all key.",story:""},link:"https://github.com/DarkPurple141/sokoban",story:"https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"},{name:"Portfolio",year:2018,images:{large:"/static/images/projects/portfolio/large.png",small:"/static/images/projects/portfolio/small.png"},languages:["javascript","vuejs","npm","css","node"],tools:["less","vuejs","node"],description:{main:"This website tries to bring together eveything I've worked on. It's much more than a portfolio -- it itself is a culmination of me. What I can do. What I've done. Who I am.",story:""},live:"http://alhinds.com",link:"https://github.com/DarkPurple141/portfolio",story:"https://medium.com/@al_hinds/web-development-is-easy-right-6c27129d9764"}]},tt={name:"Projects",components:{ProjectCard:n("VU/8")(X,Q,!1,function(t){n("4jBg")},"data-v-3543ff84",null).exports,ArticleHeader:M,Seperator:F},data:function(){return{copy:Z.copy.split("\n"),projects:Z.projects}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ArticleHeader",{attrs:{title:"Engineering"}}),this._v(" "),e("Seperator",{attrs:{copy:this.copy}}),this._v(" "),e("main",this._l(this.projects,function(t){return e("ProjectCard",{key:t.id,attrs:{project:t}})})),this._v(" "),e("Seperator",{attrs:{email:!0}})],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("c0aK")},"data-v-75aa8ea6",null).exports,it={tags:["Media","media","journalism","writing"],copy:"I've been a journalist in one form or another for over a decade. I've worked for two national Australian broadcasters and an international newspaper. I've worked as a copywriter and subeditor, a reporter, and a commissioning editor. I'm highly adaptable and have delivered work across all sorts of subjects and media.",content:[{name:"GetUp!",image:"/static/images/getup.jpg",description:"Worked in communications and strategy for GetUp!, a political advocacy group in the lead-up to the 2010 election.",preview:{content:"On the 13th of August, 2010 the GetUp community took on the Commonwealth Electoral Act (1918) and won! The High Court has ruled that Howard-era laws that close the electoral rolls on the day that writs for an election are issued are invalid.",context:"Challenging the quickfire closing of the voting rolls, '10'"},year:"2009",link:"https://www.getup.org.au/"},{name:"FuturePLC",image:"/static/images/cycling.jpg",description:"First full-time gig as a reporter and online editor with British Publisher Future PLC was a blast. Travel, commissioning and editing.",year:"2010-2011",link:"http://www.cyclingnews.com/",preview:{content:"He was a renegade in the early 90s when he tried to sway a culture of corruption in the Colombian political structure, and now as the newly appointed Minister of Sport he wants to put in policies that will set Colombia..",context:"An interview with the Colombian Sports Minister in Bogota, '12'"}},{name:"SBS",image:"/static/images/tv.jpg",description:"I jumped at the chance to join SBS as a journalist in 2011. Worked across televison and online, and went to the Tour de France in 2014.",link:"https://www.sbs.com.au/cyclingcentral/person/al-hinds",year:"2011-2016",preview:{content:"Its seeminly endless bends are tranquil, even picturesque from above; but on a bike this 48-hairpin monster is among the cruelest mountains to try tame...",context:"A feature on the Passo dello Stelvio, '14'"},added:{name:"Podcasts, Opinions",image:"/static/images/podcast.jpg",description:"SBS was also where I really began to find myself as columnist and opinion writer; developing a strong following which helped to launch a podcast in 2012, and allowed me to branch out and co-write my first book.",link:"https://www.sbs.com.au/cyclingcentral/person/al-hinds"}},{name:"Guardian Australia",image:"/static/images/guardian.jpg",preview:{content:"Set to take place in a sold-out Key Arena, Seattle, the fifth edition of ‘The International’ broke its own record this week when its prize-pool bubbled above the $US 11 million dollar mark after another surge in funding support from fans.",context:"On the Dota World Championships, '15'"},description:"After leaving SBS I worked in a roving role for the Guardian Australia. The place oozed experience, and rigorous process. I learnt a lot.",link:"https://www.theguardian.com/profile/alex-hinds",year:"2015-2016"}]},at={props:{content:{type:Object,required:!0}},data:function(){return{hover:{primary:!1,secondary:!1}}}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",{staticClass:"child-card"},[n("div",[n("div",[n("h1",[t._v(t._s(t.content.name))]),t._v(" "),n("time",[t._v(t._s(t.content.year))])])])]),t._v(" "),n("figure",{staticClass:"support child-card",on:{mouseover:function(e){t.hover.primary=!0},mouseleave:function(e){t.hover.primary=!1}}},[n("img",{class:{greyscale:!t.hover.primary},attrs:{src:t.content.image,alt:t.content.name+" image"}})]),t._v(" "),n("summary",{staticClass:"child-card"},[n("div",[n("div",{staticClass:"summary"},[n("p",[t._v("\n               "+t._s(t.content.description)+"\n            ")])])])]),t._v(" "),n("aside",{staticClass:"child-card"},[n("div",[n("icon",{attrs:{scale:"1.5",name:"quote-left"}}),t._v(" "),n("p",[t._v(t._s(t.content.preview.content))]),t._v(" "),n("icon",{attrs:{scale:"1.5",name:"quote-right"}}),t._v(" "),n("p",{staticClass:"context"},[n("a",{staticClass:"link ",attrs:{href:t.content.link,target:"_blank"}},[t._v("\n                  -"),n("em",[t._v(t._s(t.content.preview.context)+"\n                  ")])])])],1)]),t._v(" "),t.content.added?n("article",{staticClass:"added child-card"},[n("figure",{staticClass:"support",on:{mouseover:function(e){t.hover.secondary=!0},mouseleave:function(e){t.hover.secondary=!1}}},[n("img",{class:{greyscale:!t.hover.secondary},attrs:{src:t.content.added.image,alt:t.content.name+" image"}})]),t._v(" "),n("summary",[n("div",[n("div",{staticClass:"summary"},[n("p",[t._v("\n                  "+t._s(t.content.added.description)+"\n               ")])])])])]):t._e()])},staticRenderFns:[]};var ot={name:"Media",components:{ArticleHeader:M,Seperator:F,MediaCard:n("VU/8")(at,st,!1,function(t){n("uouz")},"data-v-484efe95",null).exports},data:function(){return{lede:[],content:it.content}},mounted:function(){this.lede=it.copy.split("\n")}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ArticleHeader",{attrs:{title:"Journalism"}}),this._v(" "),e("Seperator",{staticClass:"seperator",attrs:{copy:this.lede}}),this._v(" "),e("main",this._l(this.content,function(t){return e("MediaCard",{key:t.name,staticClass:"card",attrs:{content:t}})})),this._v(" "),e("Seperator",{staticClass:"seperator",attrs:{email:!0}})],1)},staticRenderFns:[]};var ct=n("VU/8")(ot,rt,!1,function(t){n("GuNO")},"data-v-fe8ebd78",null).exports,lt={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1}},mounted:function(){window.DISQUS?this.reset(window.DISQUS):this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){e.setBaseConfig(this)}})},init:function(){var t=this,e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout(function(){var e=document,n=e.createElement("script");n.setAttribute("id","embed-disqus"),n.setAttribute("data-timestamp",+new Date),n.type="text/javascript",n.async=!0,n.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(n)},0)},setBaseConfig:function(t){var e=this;t.page.identifier=this.identifier||this.$route.path||window.location.pathname,t.page.url=this.url||this.$el.baseURI,this.title&&(t.page.title=this.title),this.remote_auth_s3&&(t.page.remote_auth_s3=this.remote_auth_s3),this.key&&(t.page.api_key=this.key),this.sso_config&&(t.sso=this.sso_config),t.callbacks.onReady=[function(){e.$emit("ready")}]}}},ut={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[]},pt=n("VU/8")(lt,ut,!1,null,null,null).exports,dt=n("EFqf"),ht=n.n(dt),mt=n("OEdS"),gt=n.n(mt),ft={name:"blog-post",props:{post:{type:String,required:!0}},resource:"BlogPost",components:{VueDisqus:pt},data:function(){return{title:"",content:"",published:"",description:"",commentsReady:!1}},computed:{markdown:function(){return ht()(this.content)}},watch:{markdown:function(){this.$nextTick(function(){return gt.a.highlightAll()})}},methods:{showComments:function(){var t=this;setTimeout(function(){t.commentsReady=!0},550)}},beforeMount:function(){this.$getResource("post",this.post).then(this.showComments)}},vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"blog"},[e("h1",{staticClass:"banner"},[this._v(this._s(this.title))]),this._v(" "),e("article",{staticClass:"blog-content",domProps:{innerHTML:this._s(this.markdown)}}),this._v(" "),e("router-link",{attrs:{to:{path:"/thinker"}}},[e("h3",[this._v("Back")])]),this._v(" "),e("footer",{staticClass:"comments"},[this.commentsReady?e("vue-disqus",{key:this.post,attrs:{shortname:"alhinds",identifier:this.post,url:"http://alhinds.com/thinker/read/?post="+this.post}}):this._e()],1)],1)},staticRenderFns:[]};var _t=n("VU/8")(ft,vt,!1,function(t){n("qmub")},"data-v-2971deb1",null).exports,yt={name:"blog-feed",resource:"BlogFeed",props:{subject:{type:String,required:!0}},data:function(){return{posts:[],transition:"preview-appear"}},computed:{feed:function(){return this.posts}},methods:{prettyDate:function(t){return new Date(t).toString().split(" ").slice(0,4).join(" ").replace(/( \d+)$/,",$1")},stackPosts:function(t){var e=this,n=void 0;n=setInterval(function(){e.posts.push(t.shift()),t.length||(e.transition="preview",clearInterval(n))},0)},filterBy:function(t){var e=this;return t.filter(function(t){return-1!==t.tags.indexOf(e.subject)})}},beforeMount:function(){var t=this;this.$getResource("feed").then(function(e){return t.filterBy(e)}).then(function(e){t.stackPosts(e)}).catch(function(t){return console.error(t)})}},bt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{attrs:{tag:"ul",name:t.transition}},t._l(t.feed,function(e){return n("li",{key:e.id,staticClass:"preview"},[n("router-link",{attrs:{to:{path:"/thinker/read/?post="+e.id}}},[n("summary",[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("time",[t._v(t._s(t.prettyDate(e.date)))]),t._v(" "),n("p",[t._v(t._s(e.description))])])])],1)}))},staticRenderFns:[]};var kt={name:"Thinker",components:{Seperator:F,ArticleHeader:M,BlogPost:_t,WritingSubject:n("VU/8")(yt,bt,!1,function(t){n("pKsv")},"data-v-8bb81302",null).exports},data:function(){return{subjects:[],copy:["I like to write and teach. I've always found trying to explain something to be the best test of truly grasping a concept.","I've learnt a ton reading, watching, listening to tidbits from some amazing minds along my own journey. My writing is a small part of paying that forward."],transition:"preview-appear"}},props:{subject:String,post:String},computed:{feed:function(){var t=this;return this.subject?this.subjects.filter(function(e){return e.link==t.subject}):this.subjects}},resource:"Blog",beforeMount:function(){var t=this;this.$getResource("subjects").then(function(e){t.subjects=e})}},wt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.post?t._e():n("ArticleHeader",{attrs:{title:"Writing"}}),t._v(" "),t.post?t._e():n("Seperator",{staticClass:"support",attrs:{copy:t.copy}}),t._v(" "),n("main",[t.post?t._e():n("transition-group",{attrs:{tag:"section",name:t.transition}},t._l(t.feed,function(e){return n("article",{key:e.link},[n("summary",{staticClass:"theme"},[n("router-link",{attrs:{to:"/thinker/"+e.link}},[n("h1",[t._v(t._s(e.title))])])],1),t._v(" "),n("summary",{staticClass:"theme-list"},[n("ul",[n("li",{staticClass:"preview"},[n("WritingSubject",{attrs:{subject:e.link}})],1)])])])})),t._v(" "),t.post?n("BlogPost",{key:t.post,staticClass:"preview",attrs:{post:t.post}}):t._e()],1)],1)},staticRenderFns:[]};var jt=n("VU/8")(kt,wt,!1,function(t){n("LGYF")},"data-v-cd7daee4",null).exports;a.a.use(x.a);var St=new x.a({scrollBehavior:function(t,e,n){if(n)return n;var i={};return t.hash&&(i.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(i.x=0,i.y=0),i},mode:"history",routes:[{path:"/",name:"Home",component:L,meta:{scrollToTop:!0}},{path:"/engineer",name:"Engineer",component:nt,meta:{scrollToTop:!0}},{path:"/journo",name:"Journalist",component:ct,meta:{scrollToTop:!0}},{path:"/thinker",name:"Thinker",component:jt,meta:{scrollToTop:!0},props:!0},{path:"/thinker/read/*",name:"Article",component:jt,props:function(t){return{post:t.query.post}}},{path:"/thinker/:subject",name:"BlogSubject",component:jt,props:!0},{path:"/about",name:"About",component:Y,meta:{scrollToTop:!0}}]}),xt=n("D4uH"),It=(n("Epmo"),n("0ueR"),n("acYx"),n("17Pr"),n("pYLg"),n("rKHj"),n("6nQT"),n("BIRJ"),n("Y32I"),n("Xd4/"),n("zFdT"),n("wvXX"),n("OHUv"),n("e0Rn"),n("r24w"),n("nZeE"),n("NG6g"),n("zL1c"),n("fZjL")),Ct=n.n(It),At=n("//Fk"),Rt=n.n(At),$t=n("mvHQ"),Ht=n.n($t),Et=function(){var t={};return{has:function(e){return!!t[e]},get:function(e){return JSON.parse(t[e])},set:function(e,n){return t[e]=Ht()(n),Rt.a.resolve(n)}}}(),Ft=n("mB6w"),Tt=n.n(Ft),Bt={install:function(t,e){var n=e.endpoint,i=void 0===n?"":n,a=e.resources,s=void 0===a?{}:a;t.prototype.$getResource=function(t,e){var n=this,a=this.$options.resource;if(a&&s[a]&&s[a][t]){var o=s[a][t](e),r=o.path,c=o.resolve,l=i+r,u={pipe:function(t){return Rt.a.resolve(t)},merge:function(t){return Tt()(n.$data,t),Rt.a.resolve(t)},set:function(t){return Ct()(t).forEach(function(e){n.$set(n.$data,e,t[e])}),Rt.a.resolve(t)}};return Et.has(l)?c(Et.get(l),u):fetch(l).then(function(t){return t.json()}).then(function(t){return Et.set(l,t)}).then(function(t){return c(t,u)}).catch(function(t){console.error(t),window.location.href="/thinker"})}}}},Ut={subjects:function(){return{path:"/blogs.json",resolve:function(t,e){return e.pipe(t.results)}}}},qt={feed:function(){return{path:"/feed.json",resolve:function(t,e){return e.pipe(t.results)}}}},Lt=n("Ky+A");n("rbYq"),n("bOLe"),n("aLiU"),n("xYSV");a.a.component("icon",xt.a),a.a.use(o.a),a.a.use(c.a,{router:St,id:"UA-25942721-4"}),a.a.use(Bt,{resources:i,endpoint:"/static/api"}),a.a.config.productionTip=!1,new a.a({el:"#app",router:St,template:"<App/>",components:{App:S}})},RXGN:function(t,e){},Rg57:function(t,e){},Up5U:function(t,e){},VQBr:function(t,e){},Z47b:function(t,e){},b6Wy:function(t,e){},c0aK:function(t,e){},c7Ed:function(t,e){},esoH:function(t,e){},gFpe:function(t,e){},hWRZ:function(t,e){},pKsv:function(t,e){},qmub:function(t,e){},rbYq:function(t,e){},uouz:function(t,e){},yR3K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8e3d0591f45b68456dfe.js.map