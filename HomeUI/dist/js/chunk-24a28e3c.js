(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a28e3c"],{"45a8":function(e,t,s){"use strict";s("c3fa")},"464d":function(e,t,s){"use strict";s("6e6c")},"6e6c":function(e,t,s){},"7db0":function(e,t,s){"use strict";var a=s("23e7"),i=s("b727").find,l=s("44d2"),n="find",u=!0;n in[]&&Array(1)[n]((function(){u=!1})),a({target:"Array",proto:!0,forced:u},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),l(n)},c3fa:function(e,t,s){},d6e4:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var a=s("2b0e"),i=s("b42e"),l=s("c637"),n=s("a723"),u=s("cf75"),r=Object(u["d"])({textTag:Object(u["c"])(n["t"],"p")},l["p"]),m=a["default"].extend({name:l["p"],functional:!0,props:r,render:function(e,t){var s=t.props,a=t.data,l=t.children;return e(s.textTag,Object(i["a"])(a,{staticClass:"card-text"}),l)}})},f03d:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-overlay",{attrs:{show:e.loadingPrice,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",[s("h4",[e._v(" Price Information: $"+e._s(e.beautifyValue(e.latestPrice,2))+" USD ")])]),s("vue-apex-charts",{attrs:{type:"area",height:"250",width:"100%",options:e.lineChart.chartOptions,series:e.lineChart.series}})],1)],1),s("b-row",{staticClass:"text-center"},[s("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[s("b-card",{attrs:{title:"Cumulus Rewards"}},[s("b-card-text",[e._v("10,000 FLUX Collateral")]),s("app-timeline",{staticClass:"mt-2"},[s("app-timeline-item",[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek/7))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.cumulusWeek*3/7))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*3/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1 invisible"},[e._v(" 0 KDA ")]),s("small",{staticClass:"mt-0 invisible"},[e._v("(0 USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*3/7+e.cumulusUSDRewardWeek/7))+" USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Day")])])]),s("app-timeline-item",[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.cumulusWeek*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1 invisible"},[e._v(" 0 KDA ")]),s("small",{staticClass:"mt-0 invisible"},[e._v("(0 USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*3+e.cumulusUSDRewardWeek))+" USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Week")])])]),s("app-timeline-item",[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek*e.weeksInAMonth))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek*e.weeksInAMonth*.1*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth*.1*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1 invisible"},[e._v(" 0 KDA ")]),s("small",{staticClass:"mt-0 invisible"},[e._v("(0 USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth*.1*3+e.cumulusUSDRewardWeek*e.weeksInAMonth))+" USD ")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" VPS Cost ~ 7 USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Month")])])])],1),s("b-row",[s("b-col",{staticClass:"border-top mt-2"},[s("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Profitability per month ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" Node only: $"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth*.1*3+e.cumulusUSDRewardWeek*e.weeksInAMonth-e.cumulusHostingCost))+" USD ")]),s("h4",{staticClass:"font-weight-bolder mb-50 invisible"},[e._v(" With KDA: 0 USD ")])],1)],1)],1)],1),s("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[s("b-card",{attrs:{title:"Nimbus Rewards"}},[s("b-card-text",[e._v("25,000 FLUX Collateral")]),s("app-timeline",{staticClass:"mt-2"},[s("app-timeline-item",{attrs:{variant:"warning"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek/7))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.nimbusWeek*3/7))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*3/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.kdaNimbusWeek/7))+" KDA ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDKDARewardWeek/7))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*3/7+e.nimbusUSDRewardWeek/7+e.nimbusUSDKDARewardWeek/7))+" USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Day")])])]),s("app-timeline-item",{attrs:{variant:"warning"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.nimbusWeek*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.kdaNimbusWeek))+" KDA ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDKDARewardWeek))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*3+e.nimbusUSDRewardWeek+e.nimbusUSDKDARewardWeek))+" USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Week")])])]),s("app-timeline-item",{attrs:{variant:"warning"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek*e.weeksInAMonth))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek*e.weeksInAMonth*.1*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.kdaNimbusWeek*e.weeksInAMonth))+" KDA ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDKDARewardWeek*e.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*3+e.nimbusUSDRewardWeek*e.weeksInAMonth+e.nimbusUSDKDARewardWeek*e.weeksInAMonth))+" USD ")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" VPS Cost ~ 13 USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Month")])])])],1),s("b-row",[s("b-col",{staticClass:"border-top mt-2"},[s("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Profitability per month ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" Node only: $"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*3+e.nimbusUSDRewardWeek*e.weeksInAMonth-e.nimbusHostingCost))+" USD ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" With KDA: $"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*3+e.nimbusUSDRewardWeek*e.weeksInAMonth+e.nimbusUSDKDARewardWeek*e.weeksInAMonth-e.nimbusHostingCost))+" USD ")])],1)],1)],1)],1),s("b-col",{attrs:{sm:"12",md:"12",lg:"4"}},[s("b-card",{attrs:{title:"Stratus Rewards"}},[s("b-card-text",[e._v("100,000 FLUX Collateral")]),s("app-timeline",{staticClass:"mt-2"},[s("app-timeline-item",{attrs:{variant:"danger"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek/7))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.stratusWeek*3/7))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*3/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.kdaStratusWeek/7))+" KDA ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDKDARewardWeek/7))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*3/7+e.stratusUSDRewardWeek/7+e.stratusUSDKDARewardWeek/7))+" USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Day")])])]),s("app-timeline-item",{attrs:{variant:"danger"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.stratusWeek*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.kdaStratusWeek))+" KDA ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDKDARewardWeek))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*3+e.stratusUSDRewardWeek+e.stratusUSDKDARewardWeek))+" USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Week")])])]),s("app-timeline-item",{attrs:{variant:"danger"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek*e.weeksInAMonth))+" FLUX ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek*e.weeksInAMonth*.1*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.kdaStratusWeek*e.weeksInAMonth))+" KDA ")]),s("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDKDARewardWeek*e.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*3+e.stratusUSDRewardWeek*e.weeksInAMonth+e.stratusUSDKDARewardWeek*e.weeksInAMonth))+" USD ")]),s("h6",{staticClass:"mb-0 mt-1"},[e._v(" VPS Cost ~ 25 USD ")])]),s("small",{staticClass:"text-muted"},[e._v("Per Month")])])])],1),s("b-row",[s("b-col",{staticClass:"border-top mt-2"},[s("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Profitability per month ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" Node only: $"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*3+e.stratusUSDRewardWeek*e.weeksInAMonth-e.stratusHostingCost))+" USD ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" With KDA: $"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*3+e.stratusUSDRewardWeek*e.weeksInAMonth+e.stratusUSDKDARewardWeek*e.weeksInAMonth-e.stratusHostingCost))+" USD ")])],1)],1)],1)],1)],1)],1)},i=[],l=s("2909"),n=s("1da1"),u=(s("b64b"),s("a9e3"),s("b680"),s("4de4"),s("7db0"),s("ac1f"),s("5319"),s("96cf"),s("205f")),r=s("d6e4"),m=s("6197"),c=s("a15b"),o=s("b28b"),b=s("9b03"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",e._g(e._b({staticClass:"app-timeline"},"ul",e.$attrs,!1),e.$listeners),[e._t("default")],2)},f=[],w={},k=w,_=(s("45a8"),s("2877")),v=Object(_["a"])(k,d,f,!1,null,"1fc4912e",null),h=v.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",e._g(e._b({staticClass:"timeline-item",class:["timeline-variant-"+e.variant,e.fillBorder?"timeline-item-fill-border-"+e.variant:null]},"li",e.$attrs,!1),e.$listeners),[e.icon?s("div",{staticClass:"timeline-item-icon d-flex align-items-center justify-content-center rounded-circle"},[s("feather-icon",{attrs:{icon:e.icon}})],1):s("div",{staticClass:"timeline-item-point"}),e._t("default",(function(){return[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("h6",{domProps:{textContent:e._s(e.title)}}),s("small",{staticClass:"timeline-item-time text-nowrap text-muted",domProps:{textContent:e._s(e.time)}})]),s("p",{staticClass:"mb-0",domProps:{textContent:e._s(e.subtitle)}})]}))],2)},U=[],C={props:{variant:{type:String,default:"primary"},title:{type:String,default:null},subtitle:{type:String,default:null},time:{type:String,default:null},icon:{type:String,default:null},fillBorder:{type:Boolean,default:!1}}},S=C,p=(s("464d"),Object(_["a"])(S,D,U,!1,null,"384df2b1",null)),y=p.exports,W=s("e009"),x=s("1321"),R=s.n(x),g=s("94c8"),A=s("bc3a"),V={components:{BCard:u["a"],BCardText:r["a"],BCardBody:m["a"],BRow:c["a"],BCol:o["a"],BOverlay:b["a"],AppTimeline:h,AppTimelineItem:y,VueApexCharts:R.a},directives:{Ripple:W["a"]},data:function(){var e=this;return{cumulusHostingCost:7,nimbusHostingCost:13,stratusHostingCost:25,weeksInAMonth:4.34812141,loadingPrice:!0,historicalPrices:[],cumulusWeek:0,nimbusWeek:0,stratusWeek:0,cumulusUSDRewardWeek:0,nimbusUSDRewardWeek:0,stratusUSDRewardWeek:0,nimbusUSDKDARewardWeek:0,stratusUSDKDARewardWeek:0,kdaNimbusWeek:0,kdaStratusWeek:0,latestPrice:0,lineChart:{series:[],chartOptions:{colors:[g["b"].primary],labels:["Price"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:0}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(t){return new Date(t).toLocaleString("en-GB",e.timeoptions)}},y:{formatter:function(t){return"$".concat(e.beautifyValue(t,2)," USD")}}}}}}},mounted:function(){this.getRates()},methods:{getRates:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A.get("https://vipdrates.zelcore.io/rates");case 2:s=t.sent,e.rates=s.data,e.getZelNodeCount();case 5:case"end":return t.stop()}}),t)})))()},getZelNodeCount:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,i,n,u,r,m,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.get("https://stats.runonflux.io/fluxhistorystats");case 3:s=t.sent,a=s.data.data,i=Object.keys(a),n=Math.max.apply(Math,Object(l["a"])(i)),u=a[n],r=u.cumulus,m=u.nimbus,c=u.stratus,o={},o["stratus-enabled"]=c,o["bamf-enabled"]=c,o["nimbus-enabled"]=m,o["super-enabled"]=m,o["cumulus-enabled"]=r,o["basic-enabled"]=r,e.generateEconomics(o),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},generateEconomics:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,i,l,n,u,r,m,c,o,b,d,f,w,k,_,v,h,D,U,C,S,p,y,W,x,R;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t.priceInformationLoading=!0,a=e["stratus-enabled"],i=e["nimbus-enabled"],l=e["cumulus-enabled"],s.next=7,A.get("https://stats.runonflux.io/kadena/eligiblestats/7");case 7:n=s.sent,u=n.data.data,r=2300,m=u.nimbus,c=u.stratus,o=m+4*c,b=Number((r/o).toFixed(4)),d=Number((r/o*4).toFixed(4)),f=5.625,w=9.375,k=22.5,_=720*f*7/l,v=720*w*7/i,h=720*k*7/a,D=t.getFiatRate("ZEL")*f,U=t.getFiatRate("ZEL")*w,C=t.getFiatRate("ZEL")*k,S=t.getFiatRate("KDA")*b,p=t.getFiatRate("KDA")*d,y=5040*D/l,W=5040*U/i,x=5040*C/a,t.cumulusWeek=_,t.nimbusWeek=v,t.stratusWeek=h,t.cumulusUSDRewardWeek=y,t.nimbusUSDRewardWeek=W,t.stratusUSDRewardWeek=x,t.nimbusUSDKDARewardWeek=S,t.stratusUSDKDARewardWeek=p,t.kdaNimbusWeek=b,t.kdaStratusWeek=d,R=t,A.get("https://api.coingecko.com/api/v3/coins/zelcash/market_chart?vs_currency=USD&days=30").then((function(e){R.historicalPrices=e.data.prices.filter((function(e){return e[0]>14832324e5}));for(var s=[],a=0;a<R.historicalPrices.length;a+=3){var i=R.historicalPrices[a];s.push(i),t.latestPrice=i[1]}R.lineChart.series=[{name:"Price",data:s}],t.loadingPrice=!1})),s.next=46;break;case 43:s.prev=43,s.t0=s["catch"](0),console.log(s.t0);case 46:case"end":return s.stop()}}),s,null,[[0,43]])})))()},getFiatRate:function(e){var t="USD",s=this.rates[0].find((function(e){return e.code===t}));void 0===s&&(s={rate:0});var a=this.rates[1][e];void 0===a&&(a=0);var i=s.rate*a;return i},beautifyValue:function(e){var t=e.toFixed(2);return t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},$=V,M=Object(_["a"])($,a,i,!1,null,null,null);t["default"]=M.exports}}]);