(function () {
    "use strict";

    angular.module("common.services")
           .factory("playerResource", ["$resource", "appSettings", playerResource]);

    function playerResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/players/:id", null,
            {
                'update': {
                    method: 'PUT'
                }
            });
    }

}());