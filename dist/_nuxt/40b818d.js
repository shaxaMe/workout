(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,4],{452:function(t,e,n){t.exports=n.p+"img/cloudrain.98f8731.svg"},453:function(t,e,n){t.exports=n.p+"img/sun.54833a1.svg"},454:function(t,e,n){t.exports=n.p+"img/rainsun.4b4cdb0.svg"},455:function(t,e,n){t.exports=n.p+"img/rain.b818396.svg"},456:function(t,e,n){t.exports=n.p+"img/twicerain.6f2caa1.svg"},457:function(t,e,n){t.exports=n.p+"img/snow.6557c4e.svg"},458:function(t,e,n){t.exports=n.p+"img/cloud.0b1dc2d.png"},459:function(t,e,n){"use strict";n.r(e);n(32),n(41),n(63),n(64),n(42),n(16),n(33);var r=n(23),o=n(57);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c={data:function(){return{weekNames:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],monthNames:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],icons:{1e3:n(453),1003:n(452),1063:n(454),1189:n(455),1006:n(456),1183:n(452),1198:n(457)}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.b)(["weeklyData"])),methods:{returnDate:function(t){if(t){var e=t.split("-");return e[e.length-1]}},replaceWeekNames:function(t){if(t){var e=new Date(t);return this.weekNames[e.getDay()]}},replaceMonthNames:function(t){if(t){var e=new Date(t);return this.monthNames[e.getMonth()]}}}},d=c,m=n(26),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"py-4 px-1"},[e("div",{staticClass:"box-shadow w-full bg-white top-border card-container px-4 py-4"},t._l(t.weeklyData,(function(n,i){var r;return e("div",{staticClass:"rounded-[10px] card-bg px-3 py-2 w-full",class:{"box-shadow-card":1==i}},[e("p",{staticClass:"text-black text-lg font-medium"},[t._v(t._s(0==i?"Сегодня":1==i?"Завтра":t.replaceWeekNames(n.date)))]),t._v(" "),e("p",{staticClass:"color-ligth text-md font-light"},[t._v(t._s(t.returnDate(n.date))+" "+t._s(t.replaceMonthNames(n.date)))]),t._v(" "),e("div",{staticClass:"max-w-[30px] max-h-[30px] mt-1"},[e("img",{staticClass:"w-full h-full",attrs:{src:t.icons[null==n||null===(r=n.day)||void 0===r||null===(r=r.condition)||void 0===r?void 0:r.code],alt:n.day.condition.text}})]),t._v(" "),e("p",{staticClass:"text-lg text-black font-medium"},[t._v(t._s(n.day.maxtemp_c)+"°")]),t._v(" "),e("p",{staticClass:"text-[0.8em] color-ligth font-medium"},[t._v(t._s(n.day.mintemp_c)+"°")]),t._v(" "),e("p",{staticClass:"text-[0.8em] color-ligth font-medium"},[t._v(t._s(n.day.condition.text))])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center px-5 py-6"},[e("button",{staticClass:"bg-blue btn-shadow rounded-[5px] text-white px-4 py-2"},[t._v("На неделю ")]),t._v(" "),e("button",{staticClass:"bg-ligth-white btn-shadow rounded-[5px] text-black px-4 py-2"},[t._v("Отменить")])])}],!1,null,null,null);e.default=component.exports},461:function(t,e,n){"use strict";n.r(e);n(50),n(32),n(41),n(63),n(64),n(42),n(16),n(33);var r=n(23),o=(n(103),n(57));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c={data:function(){return{url_base:"https://api.weatherapi.com/v1/",query:"Tashkent",weather:{},coords:{},weeknes:[],icons:{1e3:n(453),1003:n(452),1063:n(454),1189:n(455),1006:n(456),1183:n(452),1198:n(457)}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.b)(["api_key"])),methods:{getTime:function(t){var e=new Date(t),n=e.getHours(),r=e.getMinutes();return"".concat(n<10?"0"+n:n,":").concat(r<10?"0"+r:r)},getWeather:function(){var t=this,q=this.query||"Tashkent";this.$axios.get("".concat(this.url_base,"current.json?q=").concat(q,"&key=").concat(this.api_key)).then((function(e){t.weather=e.data,t.getDatafor7days(q)})).catch((function(t){console.log(t)}))},getDatafor7days:function(q){var t=this;this.$axios.get("".concat(this.url_base,"forecast.json?q=").concat(q,"&key=").concat(this.api_key,"&days=7")).then((function(e){t.weeknes=e.data.forecast.forecastday,t.$store.dispatch("setWeeklyData",t.weeknes)}))}},watch:{$route:function(t){var e=t.query.cityName;this.query=e,this.getWeather()}},created:function(){this.$route.query.cityName&&(this.query=this.$route.query.cityName),this.getWeather()}},d=c,m=n(26),component=Object(m.a)(d,(function(){var t,e,r,o,l,c,d,m,x,v,f=this,h=f._self._c;return h("div",{staticClass:"w-full flex items-stretch justify-between p-5 max-xl:flex-col"},[h("div",{staticClass:"rounded-[20px] bg-ligth-white box-shadow p-4 max-w-[400px] w-full max-xl:max-w-full max-xl:px-6 max-xl:py-4"},[h("div",{staticClass:"flex justify-between gap-1 items-center"},[h("div",[h("span",{staticClass:"text-blue-400 text-8xl font-medium max-md:text-6xl"},[f._v(f._s(null===(t=f.weather)||void 0===t||null===(t=t.current)||void 0===t?void 0:t.temp_c)+"°")]),f._v(" "),h("p",{staticClass:"text-black font-normal text-[2.5em] max-md:text-[1.5rem]"},[f._v("Сегодня")])]),f._v(" "),h("div",{staticClass:"w-28 h-28 max-md:w-20 max-md:h-20"},[h("img",{staticClass:"w-full h-full",attrs:{src:f.icons[null===(e=f.weather)||void 0===e||null===(e=e.current)||void 0===e||null===(e=e.condition)||void 0===e?void 0:e.code],alt:"#"}})])]),f._v(" "),h("div",{staticClass:"mt-3"},[h("p",{staticClass:"font-normal color-gray text-2xl mb-1 max-md:text-lg"},[f._v("Время: "+f._s(null!==(r=f.weather)&&void 0!==r&&null!==(r=r.location)&&void 0!==r&&r.localtime?f.getTime(f.weather.location.localtime):"-"))]),f._v(" "),h("p",{staticClass:"font-normal color-gray text-2xl max-md:text-lg"},[f._v("Город: "+f._s(null===(o=f.weather)||void 0===o||null===(o=o.location)||void 0===o?void 0:o.name))])])]),f._v(" "),h("div",{staticClass:"rounded-[20px] box-shadow bg-ligth-white p-4 max-w-[750px] w-full relative overflow-hidden max-xl:max-w-full max-xl:px-6 max-xl:py-4 max-xl:mt-5"},[h("img",{staticClass:"absolute top-0 right-0 max-md:z-20 max-md:rounded-lg max-md:relative",attrs:{src:n(458),alt:"cloud"}}),f._v(" "),h("div",{staticClass:"flex justify-between gap-1 items-center relative z-10"},[h("div",{staticClass:"mt-4 p-1"},[h("div",{staticClass:"flex gap-4 my-1 items-center justify-start p-1 max-md:flex-wrap"},[h("div",{staticClass:"shadow-items w-9 h-9 p-2 flex justify-center items-center rounded-full"},[h("nuxtIcon",{attrs:{name:"termometr",width:"16px",height:"25px"}})],1),f._v(" "),h("span",{staticClass:"text-black text-sm max-md:text-md"},[f._v("Температура")]),f._v(" "),h("p",{staticClass:"text-sm color-gray max-md:text-md"},[f._v(f._s(null===(l=f.weather)||void 0===l||null===(l=l.current)||void 0===l?void 0:l.temp_c)+"° - ощущается как "+f._s(null===(c=f.weather)||void 0===c||null===(c=c.current)||void 0===c?void 0:c.feelslike_c)+"°")])]),f._v(" "),h("div",{staticClass:"flex gap-4 my-1 items-center justify-start p-1 max-md:flex-wrap"},[h("div",{staticClass:"shadow-items w-9 h-9 p-2 flex justify-center items-center rounded-full"},[h("nuxtIcon",{attrs:{name:"blow",width:"16px",height:"20px"}})],1),f._v(" "),h("span",{staticClass:"text-black text-sm max-md:text-md"},[f._v("Давление ")]),f._v(" "),h("p",{staticClass:"text-sm color-gray max-md:text-md"},[f._v(f._s(null===(d=f.weather)||void 0===d||null===(d=d.current)||void 0===d?void 0:d.pressure_mb)+" мм ртутного столба - нормальное")])]),f._v(" "),h("div",{staticClass:"flex gap-4 my-1 items-center justify-start p-1 max-md:flex-wrap"},[h("div",{staticClass:"shadow-items w-9 h-9 p-2 flex justify-center items-center rounded-full"},[h("nuxtIcon",{attrs:{name:"pressure",width:"16px",height:"20px"}})],1),f._v(" "),h("span",{staticClass:"text-black text-sm max-md:text-md max-md:flex-1"},[f._v("Осадки")]),f._v(" "),h("p",{staticClass:"text-sm color-gray max-md:text-md max-md:w-full"},[f._v(f._s((null===(m=f.weather)||void 0===m||null===(m=m.current)||void 0===m?void 0:m.precip_mm)>0?(null===(x=f.weather)||void 0===x||null===(x=x.current)||void 0===x?void 0:x.precip_mm)+" мм":"Без осадков"))])]),f._v(" "),h("div",{staticClass:"flex gap-4 my-1 items-center justify-start p-1 max-md:flex-wrap"},[h("div",{staticClass:"shadow-items w-9 h-9 p-2 flex justify-center items-center rounded-full"},[h("nuxtIcon",{attrs:{name:"wind",width:"16px",height:"20px"}})],1),f._v(" "),h("span",{staticClass:"text-black text-sm max-md:text-md max-md:flex-1"},[f._v("Ветер")]),f._v(" "),h("p",{staticClass:"text-sm color-gray max-md:text-md"},[f._v(f._s(null===(v=f.weather)||void 0===v||null===(v=v.current)||void 0===v?void 0:v.wind_mph)+" м/с юго-запад - легкий ветер")])])])])])])}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,n){t.exports=n.p+"img/Headlogo.e339253.png"},480:function(t,e,n){"use strict";n.r(e);n(459);var r={name:"IndexPage",head:function(){return{title:"weather",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"},{hid:"og-description",property:"og:description",content:"weatherapp,downloads and launches AWeather,sets an alarm of weather events,gets notification,Snow / Rainy,Thunderstorm"},{hid:"og-image",property:"og:image",content:n(462)}],link:[{rel:"icon",type:"image/x-icon",href:"/HeadLogo.svg"}]}}},o=n(26),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"index-page w-full h-full"},[t("CurrentBar"),this._v(" "),t("Weeknes")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CurrentBar:n(461).default,Weeknes:n(459).default})}}]);