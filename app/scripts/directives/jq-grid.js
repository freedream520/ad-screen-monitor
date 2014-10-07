'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:jqGrid
 * @description
 * # jqGrid
 */
angular.module('adScreenMonitor')
  .directive('jqGrid', function () {
    var $ = window.$,
      _ = window._;

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        function activate(id){
          scope.$emit('execute', { id: id, action: 'start'});
        }
        function suspend(id){
          scope.$emit('execute', { id: id, action: 'pause'});
        }
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
        function getGridOptions(){
            return function(element){
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

                            //createActionButton(buttons, { href: '#/ad-report' }, ['icon-eye-open', 'icon'], '查看广告投放报表');
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
            };
        }
        var options = getGridOptions()(element), 
            pager = '';
        if(attrs.url){
            options.url = attrs.url;
        }
        if(attrs.datatype){
            options.datatype = attrs.datatype;
        }
        if(attrs.pager){
            pager = options.pager = attrs.pager;
        }
        element.jqGrid(options);
        if(pager){
            element.jqGrid('navGrid', pager, { edit: false, add: false, del: false});
        }
        scope.$on('search', function(e, data){
          element.jqGrid('setGridParam', { 
            url: attrs.url + '?screen=' + data.screen + '&active=' + data.active,
            page: 1
          }).trigger('reloadGrid');
        });
      }
    };
  });
