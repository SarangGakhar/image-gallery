"use strict";




var image_container=document.querySelector('.image_info')
var btn_get_images=document.querySelector('.btn');

// btn_get_images.addEventListener("click",function(){


//     var ourrequest=new XMLHttpRequest();
// ourrequest.open('GET','https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09 ');

// ourrequest.onload=function(){
//     var ourdata=JSON.parse(ourrequest.responseText);
//     console.log(ourdata[0]);
//     render_html(ourdata);
// };

// ourrequest.send();


// });


var ourrequest=new XMLHttpRequest();
ourrequest.open('GET','https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09 ');

var ourdata;
ourrequest.onload=function(){
     ourdata=JSON.parse(ourrequest.responseText);
    //console.log(ourdata[0]);
    render_html(ourdata);
};

ourrequest.send();



var j=0;

var next=document.getElementById('next');
var prev=document.getElementById('previous');


next.addEventListener("click",function(){

    if(j<=4970){
        j+=24;

        render_html(ourdata);

        console.log("j++");
        
    }

});

prev.addEventListener("click",function(){

    if(j>=24){
        j=j-24;
        render_html(ourdata);
        console.log("j--");
     }

});


function render_html(data){

    
    //var htmlstring=data[0];


    for(var i=1;i<=24;i++){
        
        var sum=i+j;

        var full_img_id=`image${i}0`;
        var tmbnail_id=`image${i}1`;

        

        var img_full=document.getElementById(full_img_id);
        var img_tmbnail=document.getElementById(tmbnail_id);

        img_full.href=data[sum].url;
        img_tmbnail.src=data[sum].thumbnailUrl;

    }


    
  

}