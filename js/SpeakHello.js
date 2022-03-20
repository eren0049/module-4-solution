(function (window) {  
    var helloSayer = {};
    var word = "Hello";
    
    helloSayer.speak = function (names) {
      console.log(word + " " + names);
    }
        window.helloSayer = helloSayer;
    })(window);