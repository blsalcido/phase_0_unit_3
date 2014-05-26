
$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'})

//makes the background pink

//RELEASE 1:
  //Add code here to select elements of the DOM 
 var header = $('h1')



//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
  header.css({'font-family': 'Verdana'})
  header.css({'font-size': '3em'})


//RELEASE 3: Event Listener
  // Add the code for the event listener here 
 

  $('img').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://www.mister-toad.com/photos/frog/Hyla_regilla2')

  })  


 
//RELEASE 4 : Experiment on your own
 

   $('img').on('mouseout', function(e){
     e.preventDefault()
    $(this).attr('src', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ0cZinaUQdQHLIwcAMhTTRzRi9apl85o-Wct8GFIKQ7X6NnHAgA')
  })

   $('img').click(function(){
  	$('#pic2').animate({height:"500px"});
  })

 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.



