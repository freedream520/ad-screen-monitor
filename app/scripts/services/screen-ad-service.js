'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.screenAdService
 * @description
 * # screenAdService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('screenAdService', function () {
    var $ = window.$,
      _ = window._;

    // Public API here
    var items = [
      { id: '1', title: '广告屏上投放的广告1', active: true, start: '2014-09-20 13:36', end: '2014-09-20 13:36' },
      { id: '2', title: '广告屏上投放的广告1', active: true, start: '2014-09-20 13:36', end: '2014-09-20 13:36' },
      { id: '3', title: '广告屏上投放的广告1', active: true, start: '2014-09-20 13:36', end: '2014-09-20 13:36' },
      { id: '4', title: '广告屏上投放的广告1', active: true, start: '2014-09-20 13:36', end: '2014-09-20 13:36' },
      { id: '5', title: '广告屏上投放的广告1', active: true, start: '2014-09-20 13:36', end: '2014-09-20 13:36' }
    ];

    function createActionButton(buttons, attrs, classes, title){
        var arr = [];
        for(var key in attrs){
            if(attrs.hasOwnProperty(key)){
                arr.push([key, attrs[key]].join('='));
            }
        }
        var template = '<a <%= attrs %> class="<%= classes %>" data-toggle="tooltip" data-placement="top" title="<%= title %>"></a>';
        classes.push('action');
        classes.push('glyphicon');
        var data = {
            title: title,
            attrs: arr.join(' '),
            classes: classes.join(' ')
        };
        var compiled = _.template(template);
        buttons.push(compiled(data));
    }
    function executeControl(data){
      console.log(data);
    }
    function activate(spu){
        var data = {
            spu: spu,
            type: 'start'
        };
        executeControl(data);
    }
    function suspend(spu){
        var data = {
            spu: spu,
            type: 'pause'
        };
        executeControl(data);
    }

    // Public API here
    return {
      getOptions: function(element){
        return {
            colNames:['id', '广告主题', '开始投放', '结束投放', '', 'active'],
            colModel:[
                {name:'id', hidden: true },
                {name:'title', index:'title', width:500, align:'left' },
                {name:'start', index:'start', width:120, align:'center' },
                {name:'end', index:'end', width:120, align:'center' },
                {name:'action', index:'action', width:100, align:'center' },
                {name:'active', index:'active', hidden: true }
            ],
            loadComplete: function(){
                var i, data, ids = element.jqGrid('getDataIDs');
                for(i = 0; i < ids.length; i++){
                    data = element.jqGrid('getRowData', ids[i]);
                    var buttons = [];
                    var id = data.id || '',
                        active = data.active || 0;

                    createActionButton(buttons, { href: '#/screen-ad-edit/' + id }, ['icon-edit', 'icon'], '修改广告信息');
                    if(active * 1){
                        createActionButton(buttons, { id: id, active: '1' }, ['icon-pause', 'icon'], '暂停广告投放');
                    }else{
                        createActionButton(buttons, { id: id, active: '0' }, ['icon-play', 'icon'], '激活广告投放');
                    }
                    element.jqGrid('setRowData', ids[i], { action: buttons.join('') });
                }
                $('span[active=0]', element).click(function(){
                    activate($(this).attr('id'));
                });
                $('span[active=1]', element).click(function(){
                    suspend($(this).attr('id'));
                });
                $('span[data-toggle="tooltip"]').tooltip({});
            },
            width: '100%',
            height: '100%',
            rowNum: 20,
            rowList: [20, 30, 50],
            viewrecords: false,
            hidegrid: false
        };
      },
      getList: function () {
        return items;
      },
      addItem: function(item){
        items.push(item);
      },
      updateItem: function(item){
        var i;
        for(i = 0; i < items.length; i++){
          if(items[i].id === item.id){
            items[i] = item;
            return;
          }
        }
      },
      getItem: function(id){
        var item = {
          id: '',
          title: '',
          description: '',
          group: '1'
        };
        if(id){
          var i;
          for(i = 0; i < items.length; i++){
            if(items[i].id === id){
              item = items[i];
            }
          }
        }
        return item;
      }
    };
  });
