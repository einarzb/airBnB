app.factory('usersFactory', function(){

  var usersFactory = {};
  var users = [
            { "id": 1,"img": "https://robohash.org/quamlaborealias.jpg?size=50x50&set=set4", "first_name": "Alfred", "last_name": "Carslake", "telephone": "acarslake0@patch.com" },
            { "id": 2,"img": "https://robohash.org/veritatismaximehic.png?size=50x50&set=set4", "first_name": "Alphard", "last_name": "Gilliland", "telephone": "agilliland1@shutterfly.com" },
            { "id": 3,"img": "https://robohash.org/inventorelaudantiumsimilique.png?size=50x50&set=set4", "first_name": "Ebony", "last_name": "Clymo", "telephone": "eclymo2@lycos.com" },
            { "id": 4,"img": "https://robohash.org/inciduntmagnamvoluptatem.png?size=50x50&set=set4", "first_name": "Hilliary", "last_name": "Birtwhistle", "telephone": "hbirtwhistle3@biblegateway.com" },
            { "id": 5,"img": "https://robohash.org/sintveliterror.bmp?size=50x50&set=set4", "first_name": "Verene", "last_name": "Marney", "telephone": "vmarney4@mayoclinic.com" },
            { "id": 6,"img": "https://robohash.org/utdolorrepellat.bmp?size=50x50&set=set4", "first_name": "Joycelin", "last_name": "Fontes", "telephone": "jfontes5@soup.io" },
            { "id": 7,"img": "https://robohash.org/expeditasolutaamet.png?size=50x50&set=set4", "first_name": "Keeley", "last_name": "Watkiss", "telephone": "kwatkiss6@gmpg.org" },
            { "id": 8,"img": "https://robohash.org/molestiaedoloresarchitecto.bmp?size=50x50&set=set4", "first_name": "Giusto", "last_name": "Krysiak", "telephone": "gkrysiak7@facebook.com" },
            { "id": 9,"img": "https://robohash.org/ettemporibusmaiores.png?size=50x50&set=set4", "first_name": "May", "last_name": "Gough", "telephone": "mgough8@bravesites.com" },
            { "id": 10,"img": "https://robohash.org/eosmagnammaiores.png?size=50x50&set=set4", "first_name": "Priscella", "opl;": "Misk", "telephone": "pmisk9@howstuffworks.com" }
];

  // usersFactory.addUserToList = function(newUser){
  //    users.push(newHome);
  //    console.log(newUser);
  //    console.log(users);
  // };
  //
  // usersFactory.removeUserFromList = function (index) {
  //     users.splice(index, 1);
  //     console.log(index);
  // };

  usersFactory.getUsers = function(){
      return users;
  }

  return usersFactory;

});
