var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
player_object="";
block_object="";
function playerUpload(){

fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToHeight(140);
player_object.scaleToWidth(150);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
});
}
function blockUpload(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToHeight(block_height);
        block_object.scaleToWidth(block_width);
        block_object.set({
        top:player_y,left:player_x
        });
        canvas.add(block_object);
        });
        }

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
console.log(e);
keypressed=e.keyCode;
if (e.shiftKey==true && keypressed=="80") {
 console.log("shift & p keys are pressed together");
 block_width= block_width+10;
 block_height= block_height+10;
 document.getElementById("current_width").innerHTML=block_width;
 document.getElementById("current_height").innerHTML=block_height;
}
if (e.shiftKey==true && keypressed=="77") {
    console.log("shift & m keys are pressed together");
    block_width= block_width-10;
    block_height= block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
   }
   if(keypressed=="38"){
     console.log("Up arrow key is pressed");
   }
   if(keypressed=="40"){
    console.log("Down arrow key is pressed");
  }
  if(keypressed=="37"){
    console.log("Left arrow key is pressed");
  }
  if(keypressed=="39"){
    console.log("Right arrow key is pressed");
  }
  if(keypressed=="87"){
    console.log("W key is pressed");
    blockUpload("wall.jpg");
  }
  if(keypressed=="76"){
    console.log("L key is pressed");
    blockUpload("light_green.png");
  }
  if(keypressed=="71"){
    console.log("G key is pressed");
    blockUpload("ground.png");
  }
  if(keypressed=="67"){
    console.log("C key is pressed");
    blockUpload("cloud.jpg");
  }
  if(keypressed=="89"){
    console.log("Y key is pressed");
    blockUpload("yellow_wall.png");
  }
  if(keypressed=="82"){
    console.log("R key is pressed");
    blockUpload("roof.jpg");
  }
  if(keypressed=="85"){
    console.log("U key is pressed");
    blockUpload("unique.png");
  }
  if(keypressed=="68"){
    console.log("D key is pressed");
    blockUpload("dark_green.png");
  }
  if(keypressed=="84"){
    console.log("T key is pressed");
    blockUpload("trunk.jpg");
  }
}
