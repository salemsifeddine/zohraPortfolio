//there are diffrent ways to do this in javascript 


/*
//first methode with jquery 'library in javascript'
//check that the window has already loaded
$(window).ready(function(){
 
   // $('#selectOne').html(options);
   $("header menu a").on("click",function(e){

    //prevent the loading 
    e.preventDefault();

    //get the href attribute of the clicked 'a' tag
    var hrefAttr = this.getAttribute("href")

    //after geting the name we must replace the '/' slash to an empty string

    var sectionContentName= hrefAttr.replace("/","")

    //add .html extantion to the href arrtibute to makem it more dynamic
    var targetedPage= sectionContentName + '.html'

    //get the section tag in a variable
    var sectionDiv= $('section')

    //empty the section div before any implementation we do , before we append the content
    sectionDiv.html('')
    
    //append and load the section div 
    sectionDiv.load(targetedPage)
    
    
    
    
   })
  });

  */

//second, with normal javascript and using iframe

//put the a tags of the buttons of the menu in a variable
/*var aTags= document.querySelectorAll("menu a button")

aTags.addEventListener('click',function(e){
  //prevent to load the page
  e.preventDefault();

  //put the parent element a in a variable
  var ele = this.parentElement;

  //put the href value in a variable
  var href = ele.getAttribute('href');
  
  //replace the slash with an empty string
  var pageName= href.replace('/','');

  //put the section tag in variable
  var section = document.getElementById('section');

  //put the href +.html in a variable so we use it directly
  var htmlpage= pageName +".html"

  //iframe tag with the dynamic src
  //first we create an element iframe
  var iframe= document.createElement('iframe');
  
  //after creating iframe tag we set the attribute 
  iframe.setAttribute("src",htmlpage)
  

  //after this we append it to the section, but before this we must empty anything inside the section 
  section.innerHTML = ''
  section.append(iframe)
})

*/



//third way with XMLHttpResponse
//after this we are having the aTags in array, so must loop throug it
//the length of it is aTags.length = 3

window.onload=  function(){

  var aTags= document.querySelectorAll("menu a button")

  for( var i=0 ; i<aTags.length; i++){


    //first we must specify each one of them by saying aTags[i]
    
    aTags[i].addEventListener('click',function(e){

    //prevent to load the page
    e.preventDefault();

    //put the parent element a in a variable
    var ele = this.parentElement;

    //put the href value in a variable
    var href = ele.getAttribute('href');
    
    //replace the slash with an empty string
    var pageName= href.replace('/','');

    //put the section tag in variable
    var section = document.getElementById('section');

    //put the href +.html in a variable so we use it directly
    var htmlpage= pageName +".html"
      
    //we callback the send function
    send(section, htmlpage)
    
    })
  }
}


/*
  function of xmlhttprequest 
*/

//i create i function called send to make a callback after, container and pagename are parameters
function send(container, pagename){
  
  //we create a new XMLHttpRequest to load extern html page
  var xhr = new XMLHttpRequest();

  //on load and if the status is 200 means success render the response text
  xhr.onload = function(){

    if(this.status == 200){

      //render
      container.innerHTML = xhr.responseText;

    }
  };

  //we make a get request to open the targeted html page
  xhr.open('get',pagename);

  //lastly we send the html page
  xhr.send();
}

//when click on btn get href attribute and then add .jpg to get image name dynamically
//and then make it a background to the section div
var btnsheader = document.querySelectorAll('.btn')

//loop through the aaray of btns
btnsheader.forEach(btn=>{

  //on click on btn
  btn.addEventListener('click',function(){

    //get section div in array 
    var section=document.getElementsByTagName('section');

    //select our section
    var sectiondiv=section[0];

    //access the parent and get the href then replace and lower case
    var hrefmodified=btn.parentElement.getAttribute('href').replace('/','.').toLowerCase();

    //change the background
    sectiondiv.style.background='url('+ hrefmodified + 'jpg)';
   
    
  }
  )

})