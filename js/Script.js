(function () {

    var names = ["Hans", "Alex", "John", "Patrick", "Messi", "Ronaldo", "Henry", "Valeria", "Zeck", "Peter"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSayer.speak(names[i]);
      } 
      else {
        helloSayer.speak(names[i]);
      }
    }
    
    })();