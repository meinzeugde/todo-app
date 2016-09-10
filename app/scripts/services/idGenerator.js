'use strict';

angular.module('todoApp')

  .service('appendId',
    [function() {
      /**
       * @tribute: http://stackoverflow.com/a/34168882/3710107
       **/
      var uniqueId = function() {
        var idStrLen = 8;  // desired length of Id
        var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + ""; // always start with a letter -- base 36 makes for a nice shortcut
        idStr += (new Date()).getTime().toString(36) + ""; // add a timestamp in milliseconds (base 36 again) as the base
        // similar to above, complete the Id using random, alphanumeric characters
        do {
          idStr += (Math.floor((Math.random() * 35))).toString(36);
        } while (idStr.length < idStrLen);

        return (idStr);
      };

      return function(hash) {
        return _.merge(hash, {id: uniqueId()})
      }
    }
    ]);
