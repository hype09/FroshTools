!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/administration/",n(n.s="tRoT")}({"+1CC":function(e,t){e.exports='{% block sw_version_status %}\n    <router-link :to="{ name: \'frosh.tools.index.index\' }" class="sw-version__status" :title="healthPlaceholder">\n        {% block sw_version_status_badge %}\n            <sw-color-badge v-if="health" :variant="healthVariant" :rounded="true"></sw-color-badge>\n        {% endblock %}\n    </router-link>\n{% endblock %}\n'},"7HMj":function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.index.title\')" :isLoading="isLoading" :large="true">\n\n        <template #toolbar>\n            \x3c!-- @todo: Make the refresh button fancy --\x3e\n            <sw-button variant="ghost" @click="refresh"><sw-icon :small="true" name="default-arrow-360-left"></sw-icon></sw-button>\n        </template>\n\n        <sw-data-grid\n            v-if="health"\n            :showSelection="false"\n            :showActions="false"\n            :dataSource="health"\n            :columns="columns">\n\n            <template #column-status="{ item }">\n                <sw-label variant="success" appearance="pill" v-if="item.state === \'STATE_OK\'" >\n                    {{ $tc(\'frosh-tools.good\') }}\n                </sw-label>\n                <sw-label variant="warning" appearance="pill" v-if="item.state === \'STATE_WARNING\'" >\n                    {{ $tc(\'frosh-tools.warning\') }}\n                </sw-label>\n                <sw-label variant="danger" appearance="pill" v-if="item.state === \'STATE_ERROR\'" >\n                    {{ $tc(\'frosh-tools.error\') }}\n                </sw-label>\n            </template>\n\n            <template #column-name="{ item }">\n                {{ $tc(item.snippet, 0, item.parameters) }}\n            </template>\n        </sw-data-grid>\n    </sw-card>\n</sw-card-view>\n'},"9G6E":function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.logs.title\')" :isLoading="isLoading" :large="true">\n        <sw-single-select\n            :options="logFiles"\n            labelProperty="name"\n            valueProperty="name"\n            v-model="selectedLogFile"\n            @change="onFileSelected"\n        ></sw-single-select>\n\n        <template #toolbar>\n            \x3c!-- @todo: Make the refresh button fancy --\x3e\n            <sw-button variant="ghost" @click="refresh"><sw-icon :small="true" name="default-arrow-360-left"></sw-icon></sw-button>\n        </template>\n\n        <sw-data-grid\n            :showSelection="false"\n            :showActions="false"\n            :dataSource="logEntries"\n            :columns="columns">\n        </sw-data-grid>\n\n        <sw-pagination\n            :total="totalLogEntries"\n            :limit="limit"\n            :page="page"\n            @page-change="onPageChange"\n        ></sw-pagination>\n    </sw-card>\n</sw-card-view>\n'},GDD8:function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.elasticsearch.title\')" :large="true"></sw-card>\n</sw-card-view>\n'},QKQn:function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.files.title\')" :isLoading="isLoading" :large="true">\n        <sw-alert variant="error" v-if="items.error">{{ items.error }}</sw-alert>\n\n        <sw-alert variant="success" v-if="items.ok">All files are not modified</sw-alert>\n\n        <sw-data-grid\n            v-if="items.files"\n            :showSelection="false"\n            :dataSource="items.files"\n            :columns="columns">\n        </sw-data-grid>\n    </sw-card>\n</sw-card-view>\n'},SZ7m:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},f=null,h="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){l=n,f=o||{};var i=r(e,t);return m(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o];(c=a[s.id]).refs--,n.push(c)}t?m(i=r(e,t)):i=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete a[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(w(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(w(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function w(e){var t,n,r=document.querySelector("style["+h+'~="'+e.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(d){var o=c++;r=s||(s=v()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=v(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function x(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(h,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},SzVU:function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.scheduledTaskOverview.title\')" :isLoading="isLoading" :large="true">\n\n        <template #toolbar>\n            \x3c!-- @todo: Make the refresh button fancy --\x3e\n            <sw-button variant="ghost" @click="refresh"><sw-icon :small="true" name="default-arrow-360-left"></sw-icon></sw-button>\n        </template>\n\n        <sw-entity-listing\n            :showSelection="false"\n            :fullPage="false"\n            :allowInlineEdit="true"\n            :allowEdit="false"\n            :allowDelete="false"\n            :showActions="true"\n            :repository="scheduledRepository"\n            :items="items"\n            :columns="columns">\n\n            <template #column-lastExecutionTime="{ item }">\n                {{ item.lastExecutionTime | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n            </template>\n            <template #column-nextExecutionTime="{ item, column, compact, isInlineEdit }">\n                <sw-data-grid-inline-edit\n                    v-if="isInlineEdit"\n                    :column="column"\n                    :compact="compact"\n                    :value="item[column.property]"\n                    @input="item[column.property] = $event">\n                </sw-data-grid-inline-edit>\n\n                <span v-else>\n                     {{ item.nextExecutionTime | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                </span>\n            </template>\n\n            <template #actions="{ item }">\n                <sw-context-menu-item variant="primary" @click="runTask(item)">\n                    {{ $tc(\'frosh-tools.runManually\') }}\n                </sw-context-menu-item>\n            </template>\n        </sw-entity-listing>\n    </sw-card>\n</sw-card-view>\n'},Zmlz:function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.cache.title\')" :isLoading="isLoading" :large="true">\n        <template #toolbar>\n            \x3c!-- @todo: Make the refresh button fancy --\x3e\n            <sw-button variant="ghost" @click="createdComponent"><sw-icon :small="true" name="default-arrow-360-left"></sw-icon></sw-button>\n        </template>\n\n        <sw-data-grid\n            :showSelection="false"\n            :dataSource="cacheFolders"\n            :columns="columns">\n\n            <template #column-name="{ item }">\n                <sw-label variant="success" appearance="pill" v-if="item.active" >\n                    {{ $tc(\'frosh-tools.active\') }}\n                </sw-label>\n                <sw-label variant="primary" appearance="pill" v-if="item.type" >\n                    {{ item.type }}\n                </sw-label>\n                {{ item.name }}\n            </template>\n\n            <template #column-size="{ item }">\n                {{ formatSize(item.size) }}\n            </template>\n\n            <template #column-freeSpace="{ item }">\n                {{ formatSize(item.freeSpace) }}\n            </template>\n\n            <template #actions="{ item }">\n                <sw-context-menu-item variant="danger" @click="clearCache(item)">\n                    {{ $tc(\'frosh-tools.clear\') }}\n                </sw-context-menu-item>\n            </template>\n        </sw-data-grid>\n    </sw-card>\n\n    <sw-card :title="$tc(\'frosh-tools.actions\')" :isLoading="isLoading" :large="true">\n        <sw-button variant="primary" @click="compileTheme">{{ $tc(\'frosh-tools.compileTheme\') }}</sw-button>\n    </sw-card>\n</sw-card-view>\n'},bqc8:function(e,t){e.exports='<sw-card-view>\n    <sw-card :title="$tc(\'frosh-tools.tabs.queue.title\')" :isLoading="isLoading" :large="true">\n        <template #toolbar>\n            \x3c!-- @todo: Make the refresh button fancy --\x3e\n            <sw-button variant="ghost" @click="refresh"><sw-icon :small="true" name="default-arrow-360-left"></sw-icon></sw-button>\n        </template>\n\n        <sw-entity-listing\n            :showSelection="false"\n            :fullPage="false"\n            :allowEdit="false"\n            :allowDelete="false"\n            :showActions="false"\n            :repository="queueRepository"\n            :items="queueEntries"\n            :columns="columns">\n        </sw-entity-listing>\n    </sw-card>\n\n    <sw-card title="Actions" :large="true">\n        <sw-button variant="danger" @click="showResetModal = true">{{ $tc(\'frosh-tools.resetQueue\') }}</sw-button>\n    </sw-card>\n\n    <sw-modal v-if="showResetModal" title="Reset Queue" variant="small" @modal-close="showResetModal = false">\n        Resetting Queue will remove all outgoing tasks.\n\n        <template #modal-footer>\n            <sw-button @click="showResetModal = false">Cancel</sw-button>\n            <sw-button variant="danger" @click="resetQueue">Reset</sw-button>\n        </template>\n    </sw-modal>\n</sw-card-view>\n'},hGM8:function(e,t,n){},l71W:function(e,t){e.exports='{% block sw_data_grid_inline_edit_type_unknown %}\n    <sw-datepicker\n        v-else-if="column.inlineEdit === \'date\'"\n        dateType="date"\n        v-model="currentValue">\n    </sw-datepicker>\n\n    <sw-datepicker\n        v-else-if="column.inlineEdit === \'datetime\'"\n        dateType="datetime"\n        v-model="currentValue">\n    </sw-datepicker>\n\n    {% parent() %}\n{% endblock %}\n'},nSmb:function(e,t,n){var r=n("hGM8");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("4de1a0ae",r,!0,{})},tRoT:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var u=Shopware.Classes.ApiService,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(l,e);var t,n,r,c=s(l);function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_action/frosh-tools";return o(this,l),c.call(this,e,t,n)}return t=l,(n=[{key:"getCacheInfo",value:function(){var e="".concat(this.getApiBasePath(),"/cache");return this.httpClient.get(e,{headers:this.getBasicHeaders()}).then((function(e){return u.handleResponse(e)}))}},{key:"clearCache",value:function(e){var t="".concat(this.getApiBasePath(),"/cache/").concat(e);return this.httpClient.delete(t,{headers:this.getBasicHeaders()}).then((function(e){return u.handleResponse(e)}))}},{key:"resetQueue",value:function(){var e="".concat(this.getApiBasePath(),"/queue");return this.httpClient.delete(e,{headers:this.getBasicHeaders()}).then((function(e){return u.handleResponse(e)}))}},{key:"runScheduledTask",value:function(e){var t="".concat(this.getApiBasePath(),"/scheduled-task/").concat(e);return this.httpClient.post(t,{},{headers:this.getBasicHeaders()}).then((function(e){return u.handleResponse(e)}))}},{key:"healthStatus",value:function(){var e="".concat(this.getApiBasePath(),"/health/status");return this.httpClient.get(e,{headers:this.getBasicHeaders()}).then((function(e){return u.handleResponse(e)}))}},{key:"getLogFiles",value:function(){var e="".concat(this.getApiBasePath(),"/logs/files");return this.httpClient.get(e,{headers:this.getBasicHeaders()}).then((function(e){return u.handleResponse(e)}))}},{key:"getLogFile",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,r="".concat(this.getApiBasePath(),"/logs/file");return this.httpClient.get(r,{params:{file:e,offset:t,limit:n},headers:this.getBasicHeaders()}).then((function(e){return e}))}},{key:"getShopwareFiles",value:function(){var e="".concat(this.getApiBasePath(),"/shopware-files");return this.httpClient.get(e,{headers:this.getBasicHeaders()}).then((function(e){return e}))}}])&&a(t.prototype,n),r&&a(t,r),l}(u),h=Shopware.Application;h.addServiceProvider("FroshToolsService",(function(e){var t=h.getContainer("init");return new f(t.httpClient,e.loginService)}));var d=n("l71W"),p=n.n(d);Shopware.Component.override("sw-data-grid-inline-edit",{template:p.a});var m=n("+1CC"),v=n.n(m);function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,s,"next",e)}function s(e){y(a,r,o,i,s,"throw",e)}i(void 0)}))}}Shopware.Component.override("sw-version",{template:v.a,inject:["FroshToolsService"],created:function(){var e=this;return b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkHealth();case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{health:null}},computed:{healthVariant:function(){var e,t="success",n=w(this.health);try{for(n.s();!(e=n.n()).done;){var r=e.value;"STATE_ERROR"!==r.state?"STATE_WARNING"===r.state&&"success"===t&&(t="warning"):t="error"}}catch(e){n.e(e)}finally{n.f()}return t},healthPlaceholder:function(){var e="Shop Status: Ok";if(null===this.health)return e;var t,n=w(this.health);try{for(n.s();!(t=n.n()).done;){var r=t.value;"STATE_ERROR"!==r.state?"STATE_WARNING"===r.state&&"Shop Status: Ok"===e&&(e="Shop Status: Issues, Check System Status"):e="Shop Status: May outage, Check System Status"}}catch(e){n.e(e)}finally{n.f()}return e}},methods:{checkHealth:function(){var e=this;return b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.FroshToolsService.healthStatus();case 2:e.health=t.sent,setInterval(b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.FroshToolsService.healthStatus();case 2:e.health=t.sent;case 3:case"end":return t.stop()}}),t)}))),1e4);case 4:case"end":return t.stop()}}),t)})))()}}});var x=n("7HMj"),S=n.n(x);function R(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){R(a,r,o,i,s,"next",e)}function s(e){R(a,r,o,i,s,"throw",e)}i(void 0)}))}}Shopware.Component.register("frosh-tools-tab-index",{inject:["FroshToolsService"],template:S.a,data:function(){return{isLoading:!0,health:null}},created:function(){this.createdComponent()},computed:{columns:function(){return[{property:"status",label:"frosh-tools.status",rawData:!0},{property:"name",label:"frosh-tools.name",rawData:!0}]}},methods:{refresh:function(){var e=this;return C(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.createdComponent();case 3:case"end":return t.stop()}}),t)})))()},createdComponent:function(){var e=this;return C(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.FroshToolsService.healthStatus();case 2:e.health=t.sent,e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()}}});var k=n("Zmlz"),T=n.n(k);function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){A(a,r,o,i,s,"next",e)}function s(e){A(a,r,o,i,s,"throw",e)}i(void 0)}))}}var F=Shopware,M=F.Component,_=F.Mixin,B=Shopware.Data.Criteria;M.register("frosh-tools-tab-cache",{template:T.a,inject:["FroshToolsService","repositoryFactory","themeService"],mixins:[_.getByName("notification")],data:function(){return{cacheInfo:null,isLoading:!0}},created:function(){var e=this;return P(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.createdComponent();case 1:case"end":return t.stop()}}),t)})))()},computed:{columns:function(){return[{property:"name",label:"frosh-tools.name",rawData:!0},{property:"size",label:"frosh-tools.used",rawData:!0},{property:"freeSpace",label:"frosh-tools.free",rawData:!0}]},cacheFolders:function(){return null===this.cacheInfo?[]:this.cacheInfo},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")}},methods:{createdComponent:function(){var e=this;return P(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.FroshToolsService.getCacheInfo();case 3:e.cacheInfo=t.sent,e.isLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},formatSize:function(e){var t=1024;if(Math.abs(e)<t)return e+" B";var n=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,o=Math.pow(10,1);do{e/=t,++r}while(Math.round(Math.abs(e)*o)/o>=t&&r<n.length-1);return e.toFixed(1)+" "+n[r]},clearCache:function(e){var t=this;return P(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.next=3,t.FroshToolsService.clearCache(e.name);case 3:return n.next=5,t.createdComponent();case 5:case"end":return n.stop()}}),n)})))()},compileTheme:function(){var e=this;return P(regeneratorRuntime.mark((function t(){var n,r,o,a,i,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new B).addAssociation("themes"),e.isLoading=!0,t.next=5,e.salesChannelRepository.search(n,Shopware.Context.api);case 5:r=t.sent,o=E(r),t.prev=7,o.s();case 9:if((a=o.n()).done){t.next=17;break}return i=a.value,s=i.extensions.themes.first(),t.next=14,e.themeService.assignTheme(s.id,i.id);case 14:e.createNotificationSuccess({message:"".concat(i.translated.name)+": "+e.$tc("frosh-tools.themecompiled")});case 15:t.next=9;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(7),o.e(t.t0);case 22:return t.prev=22,o.f(),t.finish(22);case 25:e.isLoading=!1;case 26:case"end":return t.stop()}}),t,null,[[7,19,22,25]])})))()}}});var j=n("bqc8"),O=n.n(j);function $(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){I(a,r,o,i,s,"next",e)}function s(e){I(a,r,o,i,s,"throw",e)}i(void 0)}))}}var q=Shopware,z=q.Component,G=q.Mixin,H=Shopware.Data.Criteria;z.register("frosh-tools-tab-queue",{template:O.a,inject:["repositoryFactory","FroshToolsService"],mixins:[G.getByName("notification")],data:function(){return{queueEntries:null,showResetModal:!1,isLoading:!0}},created:function(){this.createdComponent()},computed:{queueRepository:function(){return this.repositoryFactory.create("message_queue_stats")},columns:function(){return[{property:"name",label:"Name",rawData:!0},{property:"size",label:"Size",rawData:!0}]}},methods:{refresh:function(){var e=this;return N(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.createdComponent();case 3:case"end":return t.stop()}}),t)})))()},createdComponent:function(){var e=this;return N(regeneratorRuntime.mark((function t(){var n,r,o,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new H).addSorting(H.sort("size","DESC")),t.next=4,e.queueRepository.search(n,Shopware.Context.api);case 4:e.queueEntries=t.sent,r=$(e.queueEntries);try{for(r.s();!(o=r.n()).done;)a=o.value,i=a.name.split("\\"),a.name=i[i.length-1]}catch(e){r.e(e)}finally{r.f()}e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},resetQueue:function(){var e=this;return N(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.FroshToolsService.resetQueue();case 3:e.showResetModal=!1,e.createdComponent(),e.createNotificationSuccess({message:"The queue has been cleared"}),e.isLoading=!1;case 7:case"end":return t.stop()}}),t)})))()}}});var Q=n("SzVU"),U=n.n(Q);function V(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){V(a,r,o,i,s,"next",e)}function s(e){V(a,r,o,i,s,"throw",e)}i(void 0)}))}}var Z=Shopware,K=Z.Component,J=Z.Mixin,Y=Shopware.Data.Criteria;K.register("frosh-tools-tab-scheduled",{template:U.a,inject:["repositoryFactory","FroshToolsService"],mixins:[J.getByName("notification")],data:function(){return{items:null,showResetModal:!1,isLoading:!0}},created:function(){this.createdComponent()},computed:{scheduledRepository:function(){return this.repositoryFactory.create("scheduled_task")},columns:function(){return[{property:"name",label:"frosh-tools.name",rawData:!0,primary:!0},{property:"runInterval",label:"frosh-tools.interval",rawData:!0,inlineEdit:"number"},{property:"lastExecutionTime",label:"frosh-tools.lastExecutionTime",rawData:!0},{property:"nextExecutionTime",label:"frosh-tools.nextExecutionTime",rawData:!0,inlineEdit:"datetime"},{property:"status",label:"frosh-tools.status",rawData:!0}]}},methods:{refresh:function(){var e=this;return W(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.createdComponent();case 3:case"end":return t.stop()}}),t)})))()},createdComponent:function(){var e=this;return W(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new Y).addSorting(Y.sort("nextExecutionTime","ASC")),t.next=4,e.scheduledRepository.search(n,Shopware.Context.api);case 4:e.items=t.sent,e.isLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},runTask:function(e){var t=this;return W(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.prev=1,t.createNotificationInfo({message:t.$tc("frosh-tools.scheduledTaskStarted",0,{name:e.name})}),n.next=5,t.FroshToolsService.runScheduledTask(e.id);case 5:t.createNotificationSuccess({message:t.$tc("frosh-tools.scheduledTaskSucceed",0,{name:e.name})}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.createNotificationError({message:t.$tc("frosh-tools.scheduledTaskFailed",0,{name:e.name})});case 11:t.createdComponent();case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}});var X=n("GDD8"),ee=n.n(X),te=Shopware,ne=te.Component;te.Mixin,Shopware.Data.Criteria;ne.register("frosh-tools-tab-elasticsearch",{template:ee.a});var re=n("9G6E"),oe=n.n(re);function ae(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function ie(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){ae(a,r,o,i,s,"next",e)}function s(e){ae(a,r,o,i,s,"throw",e)}i(void 0)}))}}var se=Shopware,ce=se.Component,le=se.Mixin;ce.register("frosh-tools-tab-logs",{template:oe.a,inject:["FroshToolsService"],mixins:[le.getByName("notification")],data:function(){return{logFiles:[],selectedLogFile:null,logEntries:[],totalLogEntries:0,limit:25,page:1,isLoading:!0}},created:function(){this.createdComponent()},computed:{queueRepository:function(){return this.repositoryFactory.create("message_queue_stats")},columns:function(){return[{property:"date",label:"frosh-tools.date",rawData:!0},{property:"channel",label:"frosh-tools.channel",rawData:!0},{property:"level",label:"frosh-tools.level",rawData:!0},{property:"message",label:"frosh-tools.message",rawData:!0}]}},methods:{refresh:function(){var e=this;return ie(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.createdComponent();case 3:return t.next=5,e.onFileSelected();case 5:case"end":return t.stop()}}),t)})))()},createdComponent:function(){var e=this;return ie(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.FroshToolsService.getLogFiles();case 2:e.logFiles=t.sent,e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},onFileSelected:function(){var e=this;return ie(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.selectedLogFile){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.FroshToolsService.getLogFile(e.selectedLogFile,(e.page-1)*e.limit,e.limit);case 4:n=t.sent,e.logEntries=n.data,e.totalLogEntries=parseInt(n.headers["file-size"]);case 7:case"end":return t.stop()}}),t)})))()},onPageChange:function(e){var t=this;return ie(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.page=e.page,t.limit=e.limit,n.next=4,t.onFileSelected();case 4:case"end":return n.stop()}}),n)})))()}}});var ue=n("QKQn"),fe=n.n(ue);function he(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}var de=Shopware,pe=de.Component,me=de.Mixin;pe.register("frosh-tools-tab-files",{template:fe.a,inject:["repositoryFactory","FroshToolsService"],mixins:[me.getByName("notification")],data:function(){return{items:{},isLoading:!0}},created:function(){this.createdComponent()},computed:{columns:function(){return[{property:"name",label:"frosh-tools.name",rawData:!0,primary:!0}]}},methods:{createdComponent:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.FroshToolsService.getShopwareFiles();case 2:t.items=e.sent.data,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){he(a,r,o,i,s,"next",e)}function s(e){he(a,r,o,i,s,"throw",e)}i(void 0)}))})()}}});n("nSmb");var ve=n("yeCb"),we=n.n(ve);Shopware.Component.register("frosh-tools-index",{template:we.a}),Shopware.Module.register("frosh-tools",{type:"plugin",name:"frosh-tools.title",title:"frosh-tools.title",description:"",color:"#303A4F",icon:"default-device-dashboard",routes:{index:{component:"frosh-tools-index",path:"index",children:{index:{component:"frosh-tools-tab-index",path:"index",meta:{parentPath:"frosh.tools.index"}},cache:{component:"frosh-tools-tab-cache",path:"cache",meta:{parentPath:"frosh.tools.index"}},queue:{component:"frosh-tools-tab-queue",path:"queue",meta:{parentPath:"frosh.tools.index"}},scheduled:{component:"frosh-tools-tab-scheduled",path:"scheduled",meta:{parentPath:"frosh.tools.index"}},elasticsearch:{component:"frosh-tools-tab-elasticsearch",path:"elasticsearch",meta:{parentPath:"frosh.tools.index"}},logs:{component:"frosh-tools-tab-logs",path:"logs",meta:{parentPath:"frosh.tools.index"}},files:{component:"frosh-tools-tab-files",path:"files",meta:{parentPath:"frosh.tools.index"}}}}},settingsItem:[{group:"plugins",to:"frosh.tools.index.cache",icon:"default-action-settings",name:"frosh-tools.title"}]})},yeCb:function(e,t){e.exports="<sw-page class=\"frosh-tools\">\n    <template slot=\"content\">\n        <sw-container>\n            <sw-tabs :small=\"false\">\n                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.index' }\">\n                    {{ $tc('frosh-tools.tabs.index.title') }}\n                </sw-tabs-item>\n\n{#                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.index' }\">#}\n{#                    {{ $tc('frosh-tools.tabs.systemInfo.title') }}#}\n{#                </sw-tabs-item>#}\n\n                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.cache' }\">\n                    {{ $tc('frosh-tools.tabs.cache.title') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.scheduled' }\">\n                    {{ $tc('frosh-tools.tabs.scheduledTaskOverview.title') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.queue' }\">\n                    {{ $tc('frosh-tools.tabs.queue.title') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.logs' }\">\n                    {{ $tc('frosh-tools.tabs.logs.title') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.files' }\">\n                    {{ $tc('frosh-tools.tabs.files.title') }}\n                </sw-tabs-item>\n\n{#                <sw-tabs-item :route=\"{ name: 'frosh.tools.index.elasticsearch' }\">#}\n{#                    {{ $tc('frosh-tools.tabs.elasticsearch.title') }}#}\n{#                </sw-tabs-item>#}\n\n            </sw-tabs>\n        </sw-container>\n\n        <router-view></router-view>\n    </template>\n</sw-page>\n"}});