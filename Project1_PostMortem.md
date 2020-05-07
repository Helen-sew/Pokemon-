# Project 1 - Post Mortem 

## My process and approach :-

My approach was to complete HTML and CSS fast and allocate the rest of time 
on JavaScript to make the game works


* step 1 - read course materials and online resources to understand how to retrive API data from external website. Understand what is JSON Data. Use $.getJSON method to retrive the data image from PokeApi website. Still need more understanding on how to structure the API request. 

* step 2 learned how to use constructor function to create object. Revisited the course materials on this subject. Created a Bulbasaur object using constructor function. 

* step 3 hardcoded all the buttons in HTML and style in CSS. To append the object properties to each button. To start the default metric of 10 for hunger, play and sleep buttons. To start the game with default metric of 0 for age. 

* step 4 created toFeed function and append to feed button and attched the click event listener to feed button to increase the count. Created feelHungry function to decrease the metric. If the metric is 5, alert "I'm hungry, feed me now!". If feedCount is 0, activate gameover modal. Used setInterval funcion to reduce the metric by every 3 seconds. 

* step 5 - repeated step 4 to set up toPlay function with click event listener. Created feelBored function to decrease the metric with setInterval function. 

* step 6 - repeated step 4 to set up toSleep function with click event listener. Created feelSleepy function to decrease the metric with setInterval function. 

* step 7 - set up turn off light button. Attached button with click event listener. Then used toggleClass to toggle between 2 images (i.e. day and night) and used setTimeout function to toggel back the image after 5 seconds. 

* step 8 - set up toAge function to add the counter and append to the age button. Used setInterval function to incease the counter every 8 seconds. 

* step 9 - set up toGrow function to incease the size of the Bulbasaur. Used setInterval and clearInterval function to increase 20px every 50 seconds and clear interval once hits max of 250px. 

* step 10 - set up toMove function to animate the Bulbasaur to move left and top with speed of 8 seconds. Use setInterval function to start the movement after 8 seconds after the game started. 

* step 11 - set up toMultiply function to duplicate the same image and reassign it with new id so that we will behave differently from the original image. 

* step 12 - set up reset button with click event listner to reset the game to default level. 

* step 13 - set up modal for start game and game over messages. 



### What I will do differently next time? 

1.  To improve on my css, try to use flexbox 

2.  To refactor my code. There are many duplication of the functions (e.g. step 4, 5 and 6). I should create one generic function and use it to create step 4, 5 and 6. 

3. To improve on the execution part of the game to make it more player friendly. 

4. Find the game is incomplete. Need to initiate the game properly with start button rather than the game started itself in the background. When one of the metric hits 0, it should stop the game altogther. 


### Approach that went well in this project that i would repeat next time?

1. organise the code with one function with one task. 


## code and code Design

### What is my code and program design in the project would i do differently next time? 

I've totally negleted the program design and jumped right away into coding. 
I should have spent some time on wireframing and understand the program by writing out a brief descrption of the program's purpose. Which involves understanding its inputs, processing and outputs. This might help me to visualize the program running on a computer. I can imagine what the monitor will look like, what the user must enter with the keyboard, and what processing or changes will be made. 
lastly, to use flowchart or pseudocode to document down the logic or algorithm of each function in my program. Understand the logic and planning the algorithm on paper before start to code. 



 ## Unit 1 Post Mortem 

In this whole journey of unit 1, i have  developed a habit of googling for resources and solutions. In event that I have lack of understanding of that particular topic. 
 
I have spent a big chuck of time to improve on my fundamental skills of Javascripts/  Hopefully, i will continue to maintain this habit. I personally feel that with stronger fundamental skill will save me a lot of time when come to doing actual coding of program. 

course materials and level are good. 


















