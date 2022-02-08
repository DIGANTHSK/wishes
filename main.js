var canavas = new fabric.canavas('myCANAVAS')
var x= document.getElementById('myAUDdio')

function new_image()
{
fabric.image.fromURL('birthdayImage.jpg', function(_Img) {
block_image_object = _Img;

block_image_object.scaletoWidth(700);
block_image_object.scaletoheight(510);
block_image_object.set({
top:0,
left: 0
});

}

function playSound(){
	x.play() ;
}