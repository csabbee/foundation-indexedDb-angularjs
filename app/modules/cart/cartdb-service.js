'use strict';

/**
 * @ngdoc service
 * @name cart.cartDb
 * @description
 * # CartDb
 * Service in the cart module.
 * It is responsible for handling the storage of cart items on the client side for safety reason
 */
angular.module('cart')
  .service('CartDb', ['CartDbSettings', '$q', function CartDb(CartDbSettings, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var db;

    this.open = function () {
        var deferResult = $q.defer(),
            request = indexedDb.open(CartDbSettings.version, CartDbSettings.dbName);

        request.onsuccess = function (event) {
            // Better use "this" than "req" to get the result to avoid problems with
            // garbage collection.
            // db = req.result;
            db = this.result;
            deferResult.resolve('Database created');
        };

        request.onerror = function (event) {
            deferResult.reject(event);
        };

        request.onupgradeneeded = function (event) {
            var _db = e.target.result;

            var objectStore = _db.createObjectStore(CartDbSettings.schemaName, {keyPath: 'id', autoIncrement: true});

            CartDbSettings.schema.forEach(function (uniqueness, columnName){
                objectStore.createIndex( columnName, columnName, { unique: uniqueness });
            });
        };
        return deferResult.promise;
    };
  }]);
