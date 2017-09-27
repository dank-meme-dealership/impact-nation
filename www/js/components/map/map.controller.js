(function () {
  angular
    .module('impactNation.map')
    .controller('MapController', MapController);

  function MapController(locationsService) {
    var $ctrl = this;
    initMap();

    function initMap() {
      $ctrl.mapOptions = {
        center: new google.maps.LatLng(28.432057, -81.470124),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        streetViewControl: true,
        zoomControl: true
      };

      $ctrl.map = new google.maps.Map(document.getElementById("map"), $ctrl.mapOptions);
      var centerControlDiv = document.createElement('div');
      centerControlDiv.index = 1;
      $ctrl.map.controls[google.maps.ControlPosition.RIGHT].push(centerControlDiv);
      $ctrl.centerControl = false;

      locationsService.getLocations().then(function (response) {
        setLocations(response.data);
      });
    }

    function setLocations(locations)
    {
      var pinIcon, marker;
      $ctrl.markers = [];
      _.each(locations, function(location)
      {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(location.lat, location.long),
          animation: google.maps.Animation.DROP,
          map: $ctrl.map,
          title: location.name,
          optimized: false,
          zIndex: 5
        });

        marker.addListener('click', function() {
          showInfoWindow(this);
        });
        $ctrl.markers.push(marker);
      });

      google.maps.event.addListener($ctrl.map, 'click', closeInfoWindow);
    }

    function showInfoWindow(marker) {
      closeInfoWindow();
      $ctrl.infoWindow = new google.maps.InfoWindow({
        content : marker.title
      });
      $ctrl.infoWindow.open($ctrl.map, marker);
    }

    function closeInfoWindow() {
      if ($ctrl.infoWindow) {
        $ctrl.infoWindow.close();
      }
    }
  }
})();
