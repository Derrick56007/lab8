function initMap() {
    // add your code here

    L.mapquest.key = 'QKJgWM50iUAB7L2HitjGtmLCdDbXEavf';

    var map = L.mapquest.map('map', {
        center: [32.878797, -117.235918],
        center: [32.8788, -117.2359],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoom: 14,
    });


    L.marker([32.88, -117.237]).addTo(map);
}