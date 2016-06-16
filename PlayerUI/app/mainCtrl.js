(function () {
    "use strict";

    angular.module("playerApp")
           .controller("mainCtrl", ["playerResource", mainCtrl]);

    function mainCtrl(playerResource) {
        var vm = this;
        vm.title = "Player List";
        vm.selectedPlayer = null;
        vm.search = {
            firstName: "",
            lastName: ""
        };
        vm.calOpened = false
        vm.addNewRecord = false;
        //loadPlayers();

        vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.calOpened = !vm.calOpened;
        }

        function loadPlayers() {
            playerResource.query(function (data) {
                vm.players = data;
            })
        }

        vm.addNew = function () {
            playerResource.get({ id: 0 }, function (data) {
                vm.newPlayer = data;
                vm.addNewRecord = true;
            }, errorFunction)            
        }

        vm.searchPlayers = function () {
            playerResource.query({ firstName: vm.search.firstName, lastName: vm.search.lastName }, function (data) {
                vm.players = data;
            })
        }

        vm.resetSearch = function () {
            vm.search = {
                firstName: "",
                lastName: ""
            };
        }

        vm.selectionChanged = function (player) {
            vm.selectedPlayer = angular.copy(player);
        }
        
        vm.selectionCancel = function () {
            vm.selectedPlayer = null;
        }

        vm.SaveNew = function(newPlayer)
        {
            newPlayer.$save(function (data) {
                alert("new record saved.");
                vm.searchPlayers();
                vm.addNewRecord = null;
            }, errorFunction)
        }

        vm.savePlayer = function () {
            vm.selectedPlayer.$update({ id: vm.selectedPlayer.id }, function (data) {
                loadPlayers();
                vm.selectedPlayer = null;
            }, errorFunction)
        }

        vm.SaveCancel = function () {
            vm.addNewRecord = null;
        }

        vm.deletePlayer = function (player) {
            var response = confirm("Are you sure you want to delete '" + player.firstName + " " + player.lastName + "?");
            if(response) {
                player.$delete({ id: player.id}, function (data) {
                    vm.searchPlayers(); 
                }, errorFunction);
            }
        }

        function errorFunction(response) {
            alert("Error in saving... please try again.");
            vm.selectedPlayer = null;
        }
    }
}());