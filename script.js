"use strict";

var image_container=document.querySelector('.image_info')
var btn_get_images=document.querySelector('.btn');

btn_get_images.addEventListener("click",function(){
    var ourrequest=new XMLHttpRequest();
ourrequest.open('GET','https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09 ');

ourrequest.onload=function(){
    var ourdata=JSON.parse(ourrequest.responseText);
    console.log(ourdata[0]);
    render_html(ourdata);
};

ourrequest.send();
});




function render_html(data){
    var htmlstring="";
    for(var i=0;i<data.length;i++){
        htmlstring+="<p>"+data[i].url+"<p>";
    }

    image_container.insertAdjacentHTML('afterend',htmlstring);

}