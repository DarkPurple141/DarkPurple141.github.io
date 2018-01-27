webpackJsonp([1],{"+6xg":function(t,e){},"/OIG":function(t,e){},"0BLv":function(t,e){},"1JI4":function(t,e){},"6d5r":function(t,e){},"7zKk":function(t,e){},ARhG:function(t,e){},B2U5:function(t,e){},C0ri:function(t,e){},D4uH:function(t,e,n){"use strict";var i={},s={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,n){var i="fa-"+(a++).toString(16);return e[n]=i,' id="'+i+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,s){var a=n||s;return a&&e[a]?"#"+e[a]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[e]=n}},icons:i},a=870711;var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(t){n("KFyI")},null,null);e.a=o.exports},KFyI:function(t,e){},KbNi:function(t,e){},"Ky+A":function(t,e,n){"use strict";(function(t){var i=n("Dd8w"),s=n.n(i);e.a={post:function(e){return{path:"/post/"+e+".json",resolve:function(e,n){var i=e.title,a=e.content,r=e.meta;return a=t.from(a,"base64").toString("ascii"),n.merge(s()({title:i,content:a},r))}}}}}).call(e,n("EuP9").Buffer)},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"Blog",function(){return qt}),n.d(i,"BlogFeed",function(){return Pt}),n.d(i,"BlogPost",function(){return Vt.a});var s=n("7+uW"),a=n("bm7V"),r=n.n(a),o=n("AYPi"),c=n.n(o),l=function(t){var e=!0;switch(t){case"Home":case"BlogSubject":case"Article":e=!1;break;default:e=!0}return e},u={data:function(){return{links:[]}},methods:{isTopLevelRoute:l},mounted:function(){var t=this;this.$router.options.routes.forEach(function(e){t.isTopLevelRoute(e.name)&&t.links.push({name:e.name,path:e.path})})}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",t._l(t.links,function(e){return n("li",[n("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var p=n("VU/8")(u,h,!1,function(t){n("Up5U")},"data-v-1af0261d",null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("svg",{staticClass:"logo",attrs:{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",transform:"scale("+(this.scalefactor||1)+")"}},[e("g",{attrs:{fill:this.fill,stroke:this.stroke}},[e("rect",{attrs:{x:"0",y:"0",width:"100",height:"100"}}),this._v(" "),e("text",{attrs:{x:"25",y:"50","text-anchor":"middle","alignment-baseline":"central",scale:"2"}},[this._v("A")]),this._v(" "),e("text",{attrs:{x:"75",y:"50","text-anchor":"middle","alignment-baseline":"central",scale:"2"}},[this._v("H")]),this._v(" "),e("line",{attrs:{x1:"50",y1:"25",x2:"50",y2:"75"}})])])])},staticRenderFns:[]};var m=n("VU/8")({props:["stroke","fill","scalefactor"]},d,!1,function(t){n("YjVL")},"data-v-4bce58ef",null).exports,g={name:"AppFooter",components:{Links:p,Logo:m},data:function(){return{icons:[{name:"twitter",url:"https://twitter.com/al_hinds"},{name:"medium",url:"https://medium.com/@al_hinds"},{name:"github",url:"https://github.com/DarkPurple141/"},{name:"bitbucket",url:"https://bitbucket.org/DarkPurple141/"},{name:"linkedin",url:"https://www.linkedin.com/in/alex-hinds-12449660/"}]}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("router-link",{staticClass:"highlight-logo",attrs:{to:{name:"Home"}}},[e("Logo",{attrs:{fill:"#ddd",stroke:"#ddd"}})],1),this._v(" "),e("Links"),this._v(" "),e("div",{staticClass:"social-icons"},this._l(this.icons,function(t){return e("a",{key:t.name,attrs:{href:t.url,target:"_blank"}},[e("icon",{staticClass:"icon-frame",attrs:{scale:"1.5"}},[e("icon",{class:t.name,attrs:{name:t.name}})],1)],1)})),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[e("p",[this._v("Copyright © Alexander Hinds 2017")]),this._v(" "),e("p",[this._v("All rights reserved.")])])}]};var v=n("VU/8")(g,f,!1,function(t){n("Rg57")},"data-v-ee5817da",null).exports,_={name:"NavLinks",data:function(){return{links:[]}},props:{open:{required:!0,type:Boolean}},methods:{isTopLevelRoute:l},mounted:function(){var t=this;this.$router.options.routes.forEach(function(e){t.isTopLevelRoute(e.name)&&t.links.push({name:e.name,path:e.path})})}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"right-nav"},[n("nav",{class:{"dropdown-open":t.open,dropdown:!t.open},on:{click:function(e){t.$emit("toggle")}}},[n("icon",{staticClass:"menu-icon",attrs:{name:t.open?"close":"reorder",scale:"1.5"}}),t._v(" "),n("div",{staticClass:"dropdown-content"},t._l(t.links,function(e){return n("router-link",{key:e.name,attrs:{to:e.path}},[n("h2",[t._v(t._s(e.name))])])}))],1),t._v(" "),n("nav",{staticClass:"fullscreen"},t._l(t.links,function(e){return n("router-link",{key:e.name,attrs:{to:e.path}},[t._v("\n         "+t._s(e.name)+"\n      ")])}))])},staticRenderFns:[]};var b={components:{Links:n("VU/8")(_,k,!1,function(t){n("7zKk")},"data-v-d08c9d16",null).exports},data:function(){return{open:!1}},methods:{toggleMenu:function(){this.open=!this.open}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("section",[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("\n            A | H\n      ")])],1),t._v(" "),n("Links",{attrs:{open:t.open},on:{toggle:function(e){t.toggleMenu()}}})],1)},staticRenderFns:[]};var y={name:"portfolio",components:{AppFooter:v,AppNav:n("VU/8")(b,w,!1,function(t){n("KbNi")},"data-v-1cf2058e",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},["Home"!=this.$route.name?e("AppNav"):this._e(),this._v(" "),e("router-view"),this._v(" "),e("AppFooter")],1)},staticRenderFns:[]};var S=n("VU/8")(y,j,!1,function(t){n("S2ef")},null,null).exports,x=n("/ocq"),C=[{stub:"I'm a designer and engineer.",content:"I believe good software is maintainable, testable, and shipped. I believe premature optimisation is evil. I don't forget the value of the aesthetic.",title:"Engineer",link:"Engineer",id:"tech",icon:"code"},{stub:"I'm a writer and journalist.",content:"I've written for print and online, worked in television and have produced and run multiple podcasts.",title:"Journalist",link:"Journalist",id:"media",icon:"newspaper-o"},{stub:"I'm a teacher and I blog.",content:"I teach computer science at UNSW. I like to bring people along on my dev journeys by blogging and explaining my process.",title:"Thinker",link:"Thinker",id:"writing",icon:"pencil"},{stub:"I've got a diverse skillset.",content:"I pride myself on being the bridge between the technical and non-technical. I can comfortably sit in both worlds.",title:"Problem Solver",link:"About",id:"skills",icon:"gears"}],I={content:"Got something cool on the boil? I'm interested. Hit me up.",description:"I’m a software engineer, formerly a journalist and producer who has worked across online, print and television media. I bring a unique set of skills and experience with nearly a decade in journalism; where the ability to quickly synthesise complex information was critical in a team-oriented environment; combined with a solid technical grounding in computer science and engineering.",languages:["python","java","javascript","c","css","html","markdown"],tools:["vuejs","paperjs","node","npm","linux","macOS","mongodb","postgresql","git"],tags:["about","bio","alexander-hinds","al-hinds"]},A={props:{title:{type:String,required:!0},content:{type:String,required:!0},stub:{type:String,required:!0},icon:{type:String},link:{type:String,required:!0}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("article",{staticClass:"header"},[e("icon",{attrs:{name:this.icon,scale:"2"}}),this._v(" "),e("h1",[e("router-link",{attrs:{to:{name:this.link}}},[this._v(this._s(this.title))])],1)],1),this._v(" "),e("article",{staticClass:"content"},[e("p",[e("span",[this._v(this._s(this.stub))]),this._v(" "+this._s(this.content))]),this._v(" "),e("router-link",{attrs:{to:{name:this.link}}},[this._v("< More >")])],1)])},staticRenderFns:[]};var $=n("VU/8")(A,R,!1,function(t){n("C0ri")},"data-v-101a6882",null).exports,U={props:{email:{type:Boolean},resume:{type:Boolean},copy:{type:Array}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("article",{staticClass:"lede"},[t.resume?n("aside",[n("p",[t._v("Honestly, I just came here for a resumé.")]),t._v(" "),n("a",{attrs:{href:"static/resume.pdf"}},[n("figure",[n("icon",{attrs:{scale:"2.5",name:"file"}})],1),t._v(" "),n("h3",[t._v("Resume.pdf")])])]):t._e(),t._v(" "),t._l(t.copy,function(e){return t.copy?n("p",[t._v(t._s(e))]):t._e()}),t._v(" "),t.email?n("a",{attrs:{href:"mailto:alex.hinds141@gmail.com"}},[n("figure",[n("icon",{attrs:{scale:"2.5",name:"envelope"}})],1),t._v(" "),n("h4",[t._v("alex.hinds141@gmail.com")])]):t._e()],2)])},staticRenderFns:[]};var F=n("VU/8")(U,E,!1,function(t){n("l1UJ")},"data-v-1ea245a4",null).exports,B={components:{Logo:m}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("Logo",{attrs:{scalefactor:1.5,stroke:"#2c3e50",fill:"#2c3e50"}}),this._v(" "),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#bio",expression:"'#bio'"}],attrs:{href:"#"}},[e("icon",{attrs:{scale:"1.5",name:"chevron-down"}})],1)],1)},staticRenderFns:[]};var T={name:"Home",components:{HomeCard:$,Splash:n("VU/8")(B,H,!1,function(t){n("B2U5")},"data-v-34644e39",null).exports,Seperator:F},data:function(){return{slides:C,bio:[]}},mounted:function(){this.bio=I.content.split("\n")}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Splash"),this._v(" "),e("Seperator",{attrs:{id:"bio",email:!0,copy:this.bio}}),this._v(" "),e("main",{staticClass:"banners"},this._l(this.slides,function(t){return e("HomeCard",{key:t.id,attrs:{title:t.title,stub:t.stub,content:t.content,icon:t.icon,link:t.link,id:t.id}})}))],1)},staticRenderFns:[]};var q=n("VU/8")(T,L,!1,function(t){n("fTZ2")},"data-v-6eb363cc",null).exports,P={name:"ArticleHeader",props:{img:{type:String},title:{type:String}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"banner"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var M=n("VU/8")(P,V,!1,function(t){n("hWRZ")},"data-v-a2b97196",null).exports,N={props:{language:{type:String}},computed:{img_link:function(){var t="";switch(this.language){case"c":t="static/images/icons/c.png";break;case"java":t="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg";break;case"javascript":t="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";break;case"python":t="https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg";break;case"html":t="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";break;case"css":t="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";break;case"node":t="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";break;case"vuejs":t="https://vuejs.org/images/logo.png";break;case"paperjs":t="static/images/icons/paperjs.jpg";break;case"npm":t="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg";break;case"mongodb":t="https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg";break;case"postgresql":t="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg";break;case"linux":t="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png";break;case"git":t="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png";break;case"macOS":t="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";break;case"markdown":t="static/images/icons/markdown.svg"}return t}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("img",{attrs:{title:this.language,src:this.img_link}})])},staticRenderFns:[]};var O=n("VU/8")(N,D,!1,function(t){n("nFN7")},"data-v-cafccf38",null).exports,z={props:{languages:{type:Array}},components:{LanguageIcon:O}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",this._l(this.languages,function(t){return e("li",{staticClass:"lang-icons"},[e("LanguageIcon",{attrs:{language:t}})],1)}))])},staticRenderFns:[]};var J=n("VU/8")(z,W,!1,function(t){n("6d5r")},"data-v-e8902016",null).exports,G={components:{ArticleHeader:M,LanguageIcons:J,Seperator:F},name:"About",data:function(){return{content:I}},computed:{lines:function(){return this.content.description.split("\n")}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ArticleHeader",{attrs:{title:"Skills"}}),t._v(" "),n("Seperator",{staticClass:"seperator",attrs:{resume:!0}}),t._v(" "),n("main",[n("section",{staticClass:"description"},[n("article",[t._m(0),t._v(" "),n("h2",[t._v("Hi, I'm Alex.")]),t._v(" "),t._l(t.lines,function(e){return n("p",[t._v("\n            "+t._s(e)+"\n         ")])})],2),t._v(" "),n("section",[n("aside",[n("h2",[t._v("Languages")]),t._v(" "),n("LanguageIcons",{attrs:{languages:t.content.languages}})],1),t._v(" "),n("aside",[n("h3",[t._v("Tools")]),t._v(" "),n("LanguageIcons",{attrs:{languages:t.content.tools}})],1)])])]),t._v(" "),n("Seperator",{staticClass:"seperator",attrs:{email:!0}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{attrs:{src:"static/images/profile.jpg",alt:"Alex Hinds profile"}})])}]};var Y=n("VU/8")(G,K,!1,function(t){n("aDca")},"data-v-794cf88c",null).exports,Z={props:{project:{type:Object,required:!0}},components:{LanguageIcons:J}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("header",[e("div",[e("h1",[this._v(this._s(this.project.name))])])]),this._v(" "),e("figure",{staticClass:"splash"},[e("img",{attrs:{src:this.project.images.large,alt:"large image related to topic"}})]),this._v(" "),e("figure",{staticClass:"support"},[e("img",{attrs:{src:this.project.images.small,alt:"small image related to topic"}})]),this._v(" "),e("summary",[e("div",[e("p",[this._v("\n            "+this._s(this.project.description.main)+"\n         ")])])]),this._v(" "),e("article",[e("aside",{staticClass:"description"},[e("LanguageIcons",{attrs:{languages:this.project.languages}}),this._v(" "),e("h2",[this._v("Background")]),this._v(" "),e("p",[this._v("\n            "+this._s(this.project.description.story)+"\n         ")]),this._v(" "),e("h3",{staticClass:"link"},[e("a",{attrs:{href:this.project.story,target:"_blank"}},[this._v("Full story..")])]),this._v(" "),e("div",{staticClass:"links"},[e("a",{attrs:{href:this.project.link,target:"_blank"}},[e("icon",{attrs:{scale:"2",name:"github"}})],1),this._v(" "),this.project.live?e("a",{attrs:{href:this.project.live,target:"_blank"}},[this._v("\n               Live\n            ")]):this._e()])],1)])])},staticRenderFns:[]};var X={copy:"I believe good software is maintainable, testable, and shipped. I believe premature optimisation is evil. I don't forget the value of the aesthetic.",projects:[{name:"Tank Hunter",images:{large:"static/images/projects/tanks/large.png",small:"static/images/projects/tanks/small.png"},languages:["javascript","css","html"],tools:["paper.js"],description:{main:"A little toy 2D game made to experiment with the paper.js vector graphics library. It was my first real foray into doing something substantial with JS. A lot of fun to fiddle with.",story:"Why do I like tanks? I have NFI, but I do and when I needed an idea to make a game just before the second year uni-break, I thought the idea of a tank game would be pretty friggin’ fun."},link:"https://github.com/DarkPurple141/Tank-Hunter-2D",live:"https://cheap-nation.surge.sh",story:"https://medium.com/alex-hinds-portfolio/making-an-html5-game-using-paper-js-dc05f51119d5"},{name:"Map Maker",images:{large:"static/images/projects/maps/large.jpg",small:"static/images/projects/maps/small.jpg"},languages:["python"],tools:["pygame"],description:{main:"I wanted to try my hand at random map generation for games. It was rough in parts, but I learnt a ton doing it.",story:"In every book I’ve ever read maps have helped to bring stories to life in a way that descriptions, and place-names never did total-justice to. They could be as simple as a few lines on a piece of paper, to highly technical documents. Whatever they were I loved them."},link:"https://github.com/DarkPurple141/Maps",story:"https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"},{name:"Sokoban",images:{large:"static/images/projects/sokoban/large.png",small:"static/images/projects/sokoban/small.png"},languages:["java"],tools:["junit","swing"],description:{main:"We built the puzzle game 'sokoban' as a major second year project. Four man team. Long nights, communication, project management - all key.",story:""},link:"https://github.com/DarkPurple141/sokoban",story:"https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"}]},tt={name:"Projects",components:{ProjectCard:n("VU/8")(Z,Q,!1,function(t){n("ARhG")},"data-v-55d06489",null).exports,ArticleHeader:M,Seperator:F},data:function(){return{copy:X.copy.split("\n"),projects:X.projects}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ArticleHeader",{attrs:{title:"Engineering"}}),this._v(" "),e("Seperator",{attrs:{copy:this.copy}}),this._v(" "),e("main",this._l(this.projects,function(t){return e("ProjectCard",{key:t.id,attrs:{project:t}})})),this._v(" "),e("Seperator",{attrs:{email:!0}})],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("fF05")},"data-v-78572dbe",null).exports,it={tags:["Media","media","journalism","writing"],content:[{name:"GetUp!",image:"static/images/getup.jpg",description:"Worked in communications and strategy for GetUp!, a political advocacy group in the lead-up to the 2010 election.",preview:{content:"On the 13th of August, 2010 the GetUp community took on the Commonwealth Electoral Act (1918) and won! The High Court has ruled that Howard-era laws that close the electoral rolls on the day that writs for an election are issued are invalid.",context:"Challenging the quickfire closing of the voting rolls, '10'"},year:"2009",link:"https://www.getup.org.au/"},{name:"FuturePLC",image:"static/images/cycling.jpg",description:"First full-time gig as a reporter and online editor with British Publisher Future PLC was a blast. Travel, commissioning and editing.",year:"2010-2011",link:"http://www.cyclingnews.com/",preview:{content:"He was a renegade in the early 90s when he tried to sway a culture of corruption in the Colombian political structure, and now as the newly appointed Minister of Sport he wants to put in policies that will set Colombia up for a long and rich era of sporting success.",context:"An interview with the Colombian Sports Minister in Bogota, '12'"}},{name:"SBS",image:"static/images/tv.jpg",description:"I jumped at the chance to join SBS as a journalist in 2011. Worked across televison and online, and went to the Tour de France in 2014.",link:"https://www.sbs.com.au/cyclingcentral/person/al-hinds",year:"2011-2016",preview:{content:"Its snake like bends carved into the steep mountain face are as synonymous with the Giro as they are with cycling. But as picturesque as the view down its 48 hairpins may be; this relentless slog is a cruel mountain to try and tame...",context:"A feature on the Passo dello Stelvio, '14'"},added:{name:"Podcasts, Opinions",image:"static/images/podcast.jpg",description:"SBS was also where I really began to find myself as columnist and opinion writer; developing a strong following which helped to launch a podcast in 2012, and allowed me to branch out and co-write my first book.",link:"https://www.sbs.com.au/cyclingcentral/person/al-hinds"}},{name:"Guardian Australia",image:"static/images/guardian.jpg",preview:{content:"Set to take place in a sold-out Key Arena, the fifth edition of ‘The International’ broke its own record this week when its prize-pool bubbled above the $US 11 million dollar mark after another surge in funding support from fans. That number could balloon to as high as $US 15 million on current trends before the tournament takes place in August...",context:"On the Dota World Championships, '15'"},description:"After leaving SBS I worked in a roving role for the Guardian Australia. The place oozed experience, and rigorous process. I learnt a lot.",link:"https://www.theguardian.com/profile/alex-hinds",year:"2015-2016"}]},st={props:{content:{type:Object,required:!0}}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("header",{staticClass:"child-card"},[e("div",[e("div",[e("h1",[this._v(this._s(this.content.name))]),this._v(" "),e("h3",[this._v(this._s(this.content.year))])])])]),this._v(" "),e("figure",{staticClass:"support child-card"},[e("img",{attrs:{src:this.content.image,alt:this.content.name+" image"}})]),this._v(" "),e("summary",{staticClass:"child-card"},[e("div",[e("div",[e("icon",{attrs:{scale:"1.5",name:"quote-left"}}),this._v(" "),e("p",[this._v("\n               "+this._s(this.content.description)+"\n            ")]),this._v(" "),e("icon",{attrs:{scale:"1.5",name:"quote-right"}})],1)])]),this._v(" "),e("aside",{staticClass:"child-card"},[e("div",[e("h2",[this._v("Excerpt")]),this._v(" "),e("p",[this._v('"'+this._s(this.content.preview.content)+'"')]),this._v(" "),e("p",{staticClass:"context"},[this._v("-"),e("em",[this._v(this._s(this.content.preview.context))])]),this._v(" "),e("h3",{staticClass:"link"},[e("a",{attrs:{href:this.content.link,target:"_blank"}},[this._v("More")])])])]),this._v(" "),this.content.added?e("article",{staticClass:"added child-card"},[e("figure",{staticClass:"support"},[e("img",{attrs:{src:this.content.added.image,alt:this.content.name+" image"}})]),this._v(" "),e("summary",[e("div",[e("icon",{attrs:{scale:"1.5",name:"quote-left"}}),this._v(" "),e("p",[this._v("\n               "+this._s(this.content.added.description)+"\n            ")]),this._v(" "),e("icon",{attrs:{scale:"1.5",name:"quote-right"}})],1)])]):this._e()])},staticRenderFns:[]};var rt={name:"Media",components:{ArticleHeader:M,Seperator:F,MediaCard:n("VU/8")(st,at,!1,function(t){n("j4Nf")},"data-v-2f33473b",null).exports},data:function(){return{lede:[],content:it.content}},mounted:function(){this.lede=C.filter(function(t){return"media"===t.id})[0].content.split("\n")}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ArticleHeader",{attrs:{title:"Journalism"}}),this._v(" "),e("Seperator",{staticClass:"seperator",attrs:{copy:this.lede}}),this._v(" "),e("main",this._l(this.content,function(t){return e("MediaCard",{key:t.name,staticClass:"card",attrs:{content:t}})})),this._v(" "),e("Seperator",{staticClass:"seperator",attrs:{email:!0}})],1)},staticRenderFns:[]};var ct=n("VU/8")(rt,ot,!1,function(t){n("blh9")},"data-v-646e6cdd",null).exports,lt={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1}},mounted:function(){window.DISQUS?this.reset(window.DISQUS):this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){e.setBaseConfig(this)}})},init:function(){var t=this,e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout(function(){var e=document,n=e.createElement("script");n.setAttribute("id","embed-disqus"),n.setAttribute("data-timestamp",+new Date),n.type="text/javascript",n.async=!0,n.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(n)},0)},setBaseConfig:function(t){var e=this;t.page.identifier=this.identifier||this.$route.path||window.location.pathname,t.page.url=this.url||this.$el.baseURI,this.title&&(t.page.title=this.title),this.remote_auth_s3&&(t.page.remote_auth_s3=this.remote_auth_s3),this.key&&(t.page.api_key=this.key),this.sso_config&&(t.sso=this.sso_config),t.callbacks.onReady=[function(){e.$emit("ready")}]}}},ut={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[]},ht=n("VU/8")(lt,ut,!1,null,null,null).exports,pt=n("EFqf"),dt=n.n(pt),mt=n("OEdS"),gt=n.n(mt),ft={name:"blog-post",props:{post:{type:String,required:!0}},resource:"BlogPost",components:{VueDisqus:ht},data:function(){return{title:"",content:"",published:"",description:"",commentsReady:!1}},computed:{markdown:function(){return dt()(this.content)}},watch:{markdown:function(){this.$nextTick(function(){return gt.a.highlightAll()})}},methods:{showComments:function(){var t=this;setTimeout(function(){t.commentsReady=!0},550)}},beforeMount:function(){this.$getResource("post",this.post).then(this.showComments)}},vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"blog"},[e("h1",{staticClass:"banner"},[this._v(this._s(this.title))]),this._v(" "),e("article",{staticClass:"blog-content",domProps:{innerHTML:this._s(this.markdown)}}),this._v(" "),e("router-link",{attrs:{to:{path:"/thinker"}}},[e("h3",[this._v("Back")])]),this._v(" "),e("footer",{staticClass:"comments"},[this.commentsReady?e("vue-disqus",{key:this.post,attrs:{shortname:"alhinds",identifier:this.post,url:"https://alhinds.com/#/thinker/read/"+this.post}}):this._e()],1)],1)},staticRenderFns:[]};var _t=n("VU/8")(ft,vt,!1,function(t){n("OEUR")},"data-v-8284239c",null).exports,kt={name:"blog-header",resource:"BlogPost",props:{post:Object},computed:{subjects:function(){return this.post.tags.split(" | ")}}},bt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("summary",[e("h4"),this._v(" "),e("h2",[this._v(this._s(this.post.title))]),this._v(" "),e("p",[this._v(this._s(this.post.description))]),this._v(" "),e("router-link",{attrs:{to:""+this.post.link}},[this._v("More")])],1)},staticRenderFns:[]};var wt={name:"blog-feed",resource:"BlogFeed",components:{BlogHeader:n("VU/8")(kt,bt,!1,function(t){n("+6xg")},"data-v-97668800",null).exports},props:{subject:{type:String,required:!0}},data:function(){return{posts:[],transition:"preview-appear"}},computed:{feed:function(){return this.posts}},methods:{prettyDate:function(t){return new Date(t).toString().split(" ").slice(0,4).join(" ").replace(/( \d+)$/,",$1")},stackPosts:function(t){var e=this,n=void 0;n=setInterval(function(){e.posts.push(t.shift()),t.length||(e.transition="preview",clearInterval(n))},125)},filterBy:function(t){var e=this;return t.filter(function(t){return-1!==t.tags.indexOf(e.subject)})}},beforeMount:function(){var t=this;this.$getResource("feed").then(function(e){return t.filterBy(e)}).then(function(e){t.stackPosts(e)}).catch(function(t){return console.error(t)})}},yt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{attrs:{tag:"ul",name:t.transition}},t._l(t.feed,function(e){return n("li",{key:e.id,staticClass:"preview"},[n("router-link",{attrs:{to:{path:"/thinker/read/"+e.id}}},[n("summary",[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("time",[t._v(t._s(t.prettyDate(e.date)))]),t._v(" "),n("p",[t._v(t._s(e.description))])])])],1)}))},staticRenderFns:[]};var jt={name:"Thinker",components:{Seperator:F,ArticleHeader:M,BlogPost:_t,WritingSubject:n("VU/8")(wt,yt,!1,function(t){n("1JI4")},"data-v-3b9bec90",null).exports},data:function(){return{subjects:[],transition:"preview-appear"}},props:{subject:String,post:String},computed:{feed:function(){var t=this;return this.subject?this.subjects.filter(function(e){return e.link==t.subject}):this.subjects}},resource:"Blog",beforeMount:function(){var t=this;this.$getResource("subjects").then(function(e){t.subjects=e})}},St={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.post?t._e():n("ArticleHeader",{attrs:{title:"Writing"}}),t._v(" "),n("main",[t.post?t._e():n("transition-group",{attrs:{tag:"section",name:t.transition}},t._l(t.feed,function(e){return n("article",{key:e.link},[n("summary",{staticClass:"theme"},[n("router-link",{attrs:{to:"/thinker/"+e.link}},[n("h1",[t._v(t._s(e.title))])])],1),t._v(" "),n("summary",{staticClass:"theme-list"},[n("ul",[n("li",{staticClass:"preview"},[n("WritingSubject",{attrs:{subject:e.link}})],1)])])])})),t._v(" "),t.post?n("BlogPost",{key:t.post,staticClass:"preview",attrs:{post:t.post}}):t._e()],1)],1)},staticRenderFns:[]};var xt=n("VU/8")(jt,St,!1,function(t){n("/OIG")},"data-v-1cdeb2da",null).exports;s.a.use(x.a);var Ct=new x.a({scrollBehavior:function(t,e,n){if(n)return n;var i={};return t.hash&&(i.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(i.x=0,i.y=0),i},routes:[{path:"/",name:"Home",component:q,meta:{scrollToTop:!0}},{path:"/engineer",name:"Engineer",component:nt,meta:{scrollToTop:!0}},{path:"/journo",name:"Journalist",component:ct,meta:{scrollToTop:!0}},{path:"/thinker",name:"Thinker",component:xt,meta:{scrollToTop:!0},props:!0},{path:"/thinker/:subject",name:"BlogSubject",component:xt,props:!0},{path:"/thinker/read/:post",name:"Article",component:xt,props:!0},{path:"/about",name:"About",component:Y,meta:{scrollToTop:!0}}]}),It=n("D4uH"),At=(n("Epmo"),n("0ueR"),n("acYx"),n("17Pr"),n("pYLg"),n("rKHj"),n("6nQT"),n("BIRJ"),n("Y32I"),n("Xd4/"),n("zFdT"),n("wvXX"),n("OHUv"),n("e0Rn"),n("r24w"),n("nZeE"),n("NG6g"),n("zL1c"),n("fZjL")),Rt=n.n(At),$t=n("//Fk"),Ut=n.n($t),Et=n("mvHQ"),Ft=n.n(Et),Bt=function(){var t={};return{has:function(e){return!!t[e]},get:function(e){return JSON.parse(t[e])},set:function(e,n){return t[e]=Ft()(n),Ut.a.resolve(n)}}}(),Ht=n("mB6w"),Tt=n.n(Ht),Lt={install:function(t,e){var n=e.endpoint,i=void 0===n?"":n,s=e.resources,a=void 0===s?{}:s;t.prototype.$getResource=function(t,e){var n=this,s=this.$options.resource;if(s&&a[s]&&a[s][t]){var r=a[s][t](e),o=r.path,c=r.resolve,l=i+o,u={pipe:function(t){return Ut.a.resolve(t)},merge:function(t){return Tt()(n.$data,t),Ut.a.resolve(t)},set:function(t){return Rt()(t).forEach(function(e){n.$set(n.$data,e,t[e])}),Ut.a.resolve(t)}};return Bt.has(l)?c(Bt.get(l),u):fetch(l).then(function(t){return t.json()}).then(function(t){return Bt.set(l,t)}).then(function(t){return c(t,u)})}}}},qt={subjects:function(){return{path:"/blogs.json",resolve:function(t,e){return e.pipe(t.results)}}}},Pt={feed:function(){return{path:"/feed.json",resolve:function(t,e){return e.pipe(t.results)}}}},Vt=n("Ky+A");n("0BLv"),n("bOLe"),n("aLiU"),n("xYSV");s.a.component("icon",It.a),s.a.use(r.a),s.a.use(c.a,{router:Ct,id:"UA-25942721-4"}),s.a.use(Lt,{resources:i,endpoint:"/static/api"}),s.a.config.productionTip=!1,new s.a({el:"#app",router:Ct,template:"<App/>",components:{App:S}})},OEUR:function(t,e){},Rg57:function(t,e){},S2ef:function(t,e){},Up5U:function(t,e){},YjVL:function(t,e){},aDca:function(t,e){},blh9:function(t,e){},fF05:function(t,e){},fTZ2:function(t,e){},hWRZ:function(t,e){},j4Nf:function(t,e){},l1UJ:function(t,e){},nFN7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eecce2d08c0350360739.js.map