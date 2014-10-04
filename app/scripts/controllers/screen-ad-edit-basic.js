'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditBasicController
 * @description
 * # ScreenAdEditBasicController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditBasicController', function ($scope) {
    $scope.$on('fileuploaddone', function(e, data){
        $scope.current.item.path = data.result.files[0].path;
    });
  });
