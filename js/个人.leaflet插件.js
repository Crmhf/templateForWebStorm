/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: 个人.leaflet插件
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/4/20
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

L.Control.tempControl = L.Control.extend({
	options : {
		//设置初始出现的位置
		position : 'topright'
	},
	initialize : function(options){
		//将src对象的属性合并到options对象中并将其返回
		L.Util.extend(this.options, options)
	},
	//在地图上显示UI元素
	onAdd : function(map){
		//处理dom树的应用函数
		//设置className，并附加到container元素中
		this._container = L.DomUtil.create('div', 'leaflet-control-clegend')
		//创建图片元素
		var legendimg = document.createElement('img');
		legendimg.id = 'leaflet-control-clegend';
		legendimg.type = 'img';
		legendimg.src = "images/baseball-marker.png";
		this._legendimg = legendimg;
		//创建一个关闭按钮
		var closebutton = document.createElement('a');
		closebutton.id = 'leaflet-control-geosearch-close';
		closebutton.className = 'glyphicon glyphicon-remove';
		closebutton.text = '关闭';
		this._closeButton = closebutton;
		//将关闭按钮和图片添加到container元素中
		this._container.appendChild(this._closeButton);
		this._container.appendChild(this._legendimg);
		//注册关闭控件
		L.DomEvent.on(this._closeButton, 'click', this._onCloseControl, this);
		return this._container;
	},
	_onCloseControl : function(){
		this._map.options.Legend = false;
		this.removeFrom(this._map);
	},
});
var pop = new L.Control.Legend().addTo(map);
