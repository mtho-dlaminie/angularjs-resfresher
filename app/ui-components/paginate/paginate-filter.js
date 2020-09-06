'use strict'

angular.module('movieDB.paginate-filter', [])
    .filter('paginate', () => {
        return (arr, currentPage, pageSize) => {
            try{
                return arr.slice((currentPage-1)*pageSize, currentPage*pageSize);
            }catch(err){
                return err;
            }
            
        }
    })