(function (window){
    var byeSayer = {};
    var word = "Good Bye";
    
    byeSayer.speak = function (names) {
      console.log(word + " " + names);
    }
     
     window.byeSayer = byeSayer;
    })(window);