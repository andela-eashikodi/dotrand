"use strict";

angular.module('dotrand-app')
  .factory('Toast', function(){
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "onclick": null,
      "preventDuplicates": true,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "2000",
      "extendedTimeOut": "1000",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
    return {
      successToast: function(msg) {
        toastr.success(msg);
      },
      errorToast: function(msg) {
        toastr.error(msg);
      },
      infoToast: function(msg) {
        toastr.info(msg);
      },
      warningToast: function(msg) {
        toastr.warning(msg);
      }
    };
  });