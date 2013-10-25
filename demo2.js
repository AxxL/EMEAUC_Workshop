require([
    "dojo/ready",
    "esri/map",
    "esri/arcgis/utils"
], function (Ready, Map, Utils) {
    
    Ready(function () {
        Utils.createMap("e6f2756610df44638332040ad3388fe0", "mapDiv").then(function (response) {
            var esriMap = response.map;
        });
    });
});
