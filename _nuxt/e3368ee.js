(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(t,e,n){"use strict";n.r(e);var c={name:"ListItem",props:["task"],methods:{doneStatus:function(t){this.$emit("doneStatus",t)},deleteTask:function(t){this.$emit("deleteTask",t)}}},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.task.id,staticClass:"list-item",class:{active:t.task.done}},[n("div",{staticClass:"list-item-checkbox",on:{click:function(e){return t.doneStatus(t.task.id)}}},[t.task.done?n("span",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fa","fa-check"]}})],1):t._e()]),t._v(" "),n("div",{staticClass:"list-item-text"},[t._v(t._s(t.task.text))]),t._v(" "),n("div",{staticClass:"list-item-trash",on:{click:function(e){return t.deleteTask(t.task.id)}}},[n("font-awesome-icon",{attrs:{icon:["fa","fa-trash"]}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);