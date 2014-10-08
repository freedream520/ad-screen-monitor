'use strict';

angular.module('adScreenMonitor')
.factory('enumService', function(){
    return{
        getSlotTypes:function(){
            return [
                { name:'carousel', description:'1#轮播位置' },
                { name:'fix', description:'2#固定位置' },
                { name:'scroll',description:'3#滚动位置'}
            ];
        },
        getMaterielTypes:function(){
            return[
                { name:'image_4_3', description:'图片物料（宽高比4：3）', slotType:'carousel' },
                { name:'video_4_3', description:'MP4视频物料（宽高比4：3）', slotType:'carousel' },
                { name:'image_2_3', description:'图片物料（宽高比2：3）', slotType:'fix' },
                { name:'text', description:'文本广告（少于25字）', slotType:'scroll' }
            ];
        }
    };
});