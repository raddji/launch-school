function weatherCheck(weather) {
  // let weather = "";
  switch (weather) {
    case "sunny" :
      console.log("Yay!");
      break;
    case "rainy":
      console.log("Umbrellas!");
      break;
    default: 
      console.log("Stay home best!");
      // break;
  }
}

console.log(weatherCheck("rainy"));