'use strict';

/**
 * @ngdoc service
 * @name cart.CartDbSettings
 * @description
 * # CartDbSettings
 * Cart database configuration settings
 */
angular.module('cart')
  .value('CartDbSettings', {
    version: 1,
    dbName: 'cart',
    schemaName: 'items',
    /** Using ES6's Map here
     * map.set( 'columnName', isUnique);
     */
    schema: (function () {
        var map = new Map();
        map.set('foodId', true);
        map.set('amount', false);

        return map;
    })()
  });
