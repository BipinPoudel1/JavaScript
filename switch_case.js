let weather= prompt("What is the weather like?");
switch(weather){
      case "sunny":
            document.write("Dress Lightly");
            break;
      
      case "cloudy":
            document.write("It may rain. Be prepared.");
            break;
      
      case "foggy":
            document.write("Cover Yourself.");
            break;

      case "rainny":
            document.write("Bring Umbrella");
            break;

      default:
            document.write("You're good to go.");
            
}