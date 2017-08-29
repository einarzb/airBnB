app.controller('homeCtrl',
['$scope','homesFactory',

 function($scope, homesFactory) {
    $scope.homes = homesFactory.getData();

    $scope.nextHomes = function(){
        homesFactory.nextHomes();
        $scope.homes = homesFactory.getData();
    }
    $scope.prevHomes = function(){
        homesFactory.prevHomes();
        $scope.homes = homesFactory.getData();
    }

    $scope.sortBy = function(val){
        $scope.filterName = homesFactory.sortBy(val);
    }


  //inputs
    $scope.homeDesc;
    $scope.homePrice;
    $scope.homeLat;
    $scope.homeLng;
    $scope.roomNum;
    $scope.homeCity;
    $scope.bedNum;
    $scope.homeType;
    $scope.homeImage;
    $scope.homeId;
    $scope.pet = "pet friendly";
    $scope.owner = "Einar Barzilay";
    //ui-view
    $scope.resultsOnMap = false; //false-hide
    $scope.insertHome = false;
    $scope.searchHome = false;
    $scope.map = false;
    $scope.intro = true;

    //other
    $scope.date = new Date();

    //creats object and send it to service
    $scope.submitHome = function(){
       if($scope.homeDesc){
         //reveal results display
         $scope.resultsOnMap = true;
         $scope.insertHome = false;

         var newHome = {id:$scope.homeId, description: $scope.homeDesc, pet: $scope.pet, image:$scope.homeImage, beds:$scope.bedNum, price:$scope.homePrice, owner:$scope.owner, latitude:$scope.homeLat, city:$scope.homeCity, type:$scope.homeType, longitude:$scope.homeLng, rooms:$scope.roomNum};
         homesFactory.addHomeToList(newHome); //invoke service function
      } else {
        alert("pleas fill in fields... ")
      };
        //clear input fields
         $scope.homeDesc = "";
         $scope.homePrice = "";
         $scope.homeImage = "";
      };

      $scope.publishHome = function(){
        $scope.insertHome = true;
        $scope.searchHome = false;
        $scope.intro = false;
      }

      $scope.findHome = function(){
        $scope.intro = false;
        $scope.insertHome = false;
        $scope.searchHome = true;
        $scope.resultsOnMap = true;
      }

      $scope.back = function(){
        $scope.resultsOnMap = false; //false-hide
        $scope.insertHome = false;
        $scope.searchHome = false;
        $scope.intro = true;
        $scope.map = false;

      }

      $scope.showMap = function(){
        $scope.map = true;
        $scope.resultsOnMap = false; //false-hide
      }

      $scope.bookNow = function(){
        alert("dummy")
      }

      $scope.initMarker = function (map) {

         for (var i = 0; i < $scope.homes; i++) {

               var currentLocation = {
                lat: parseFloat($scope.homes[i].latitude),
                lng: parseFloat($scope.homes[i].longitude)
               };

               var markers = [];
               var marker = new google.maps.Marker({
                   position: currentLocation,
                   map: map
               });
               markers.push(marker)

        }//end for loop
      }//end initMarker

    //finds item to remove from the array and send it to service
    $scope.removeHomeFromList = function (index) {
      var removeConfirm;
        if (confirm("are you sure you've done it? you lazy fuck") == true) {
            removeConfirm = homesFactory.removeTaskFromList(index);
        } else {
            removeConfirm;
        }
    };
}]);
