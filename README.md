# Weather NODE API

A terminal app built with node.js that requests data from a weather API <i>[(openweathermap)](openweathermap.org)</i>
<br>

<b>This apps has args that provide different data according to your wishes.</b>

<b>--location, -l:</b> Returns the temperature of the city. <i>Required</i>

<b>--wind, -w:</b> Returns the speed wind

<b>--coord, -c:</b> Returns coordinates of the city

<b>--unit, -u:</b> Type of unit -> 2 inputs Cel or Far. <i>By default <b>Cel</b></i>

<b>--all, -all:</b> Returns all the information of previous arguments.

<br>

#### A basic example of use could be the next command:

 ```node app.js -l Valencia```

 
 #### If you want to get all the information about a location you only have to add -all to the previous command:

 ```node app.js -all -l Valencia```


