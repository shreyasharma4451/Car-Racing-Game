canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100 
car_height=90
car_x=10
car_y=10
car2_width=100 
car2_height=90
car2_x=10
car2_y=100
car1_img="car1.png"
car2_img="car2.png"
	background_image="background.jpg";
function add(){
    background_img_tag=new Image();
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_image
    car1_img_tag=new Image();
    car1_img_tag.onload=upload_car1;
    car1_img_tag.src=car1_img
    car2_img_tag=new Image();
    car2_img_tag.onload=upload_car2;
    car2_img_tag.src=car2_img

}
function upload_background(){
    ctx.drawImage(background_img_tag,0,0,canvas.width, canvas.height)
}
function upload_car1(){
    ctx.drawImage(car1_img_tag,car_x, car_y, car_width, car_height)
}
function upload_car2(){
    ctx.drawImage(car2_img_tag,car2_x, car2_y, car2_width, car2_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed)
    if(key_pressed=="38"){
        car1up();
        console.log("up")
    }
    if(key_pressed=="39"){
        car1right();
        console.log("right")
    }
    if(key_pressed=="40"){
        car1down();
        console.log("down")
    }
    if(key_pressed=="37"){
        car1left();
        console.log("left")
    }
    if(key_pressed=="87"){
        car2up();
        console.log("w")
    }
    if(key_pressed=="83"){
        car2down();
        console.log("s")
    }
    if(key_pressed=="65"){
        car2left();
        console.log("a")
    }
    if(key_pressed=="68"){
        car2right();
        console.log("d")
    }
}
function car1up()
{
    if(car_y>=0){
        car_y-=10;
        console.log("when up arrow pressed="+ car_x +"-"+ car_y)
        upload_background();
        upload_car1();
        upload_car2();     
    }
}
function car1down(){
    if(car_y <500){
        car_y +=10;
        console.log("when down arrow pressed, x=" +car_x +"-"+ car_y)
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1left(){
    if(car_x >=0){
        car_x-=10;
        console.log("when left arrow key pressed, x=" +car_x +"-"+ car_y)
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1right(){
    if(car_x <700){
        car_x +=10;
        console.log("when right arrow key pressed, x=" +car_x +"-"+car_y)
        upload_background();
        upload_car1();
        upload_car2();
    }
}
    function car2up()
{
    if(car2_y>=0){
        car2_y-=10;
        console.log("when up arrow pressed="+ car2_x +"-"+ car2_y)
        upload_background();
        upload_car2();     
        upload_car1();
    }
}
function car2down(){
    if(car2_y <500){
        car2_y +=10;
        console.log("when down arrow pressed, x=" +car2_x +"-"+ car2_y)
        upload_background();
        upload_car2();
        upload_car1();
    }
}
function car2left(){
    if(car2_x >=0){
        car2_x-=10;
        console.log("when left arrow key pressed, x=" +car2_x +"-"+ car2_y)
        upload_background();
        upload_car2();
        upload_car1();
    }
}
function car2right(){
    if(car2_x <700){
        car2_x +=10;
        console.log("when right arrow key pressed, x=" +car2_x +"-"+car2_y)
        upload_background();
        upload_car2();
         upload_car1();
    }
}
