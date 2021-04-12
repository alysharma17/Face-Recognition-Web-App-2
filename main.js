
Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:3000
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_photo() {
    Webcam.snap(function(data_uri){
        var image="<img id='photo' src='"+data_uri+"'>";
document.getElementById("result").innerHTML=image;

    });
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jSHQpKaCK/model.json", function modelLoaded(){
    console.log("model loaded");
})