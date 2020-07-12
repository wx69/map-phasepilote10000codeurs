(function(exports) {
  "use strict";
  
  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 14.693425,
        lng: -17.447938
      },
      zoom: 8
    });
  }
  
  exports.initMap = initMap;
})((this.window = this.window || {}));