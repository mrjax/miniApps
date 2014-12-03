(function() {

  window.onload = function() {

    clear();
    var test = document.getElementById("test");
    test.innerHTML = "start";

    //Grab canvas context of canvas
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    //Grab original image
    var img = document.getElementById("sourceImg");
    canvas.width = img.clientWidth; 
    canvas.height = img.clientHeight;
    //!!Draw image onto canvas context
    ctx.drawImage(img, 0, 0);

    //Get image data
    var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
    ctx.putImageData(imgData,0,0);
    var data = imgData.data;

    var chunkHeight = 10,
        chunkWidth = 16,
        clrNum = 0,
        color = 'black';

    //With careful consideration for the edges of the image
    //and more careful usage of i, j in the context of each pixel having 4
    //entries into data[], I draw out each box based on the top left pixel's color    
    for(var i = 0; i*chunkHeight < data.length/canvas.width/4; i++){
      for(var j = 0; j*chunkWidth < data.length/canvas.height/4; j++){
          clrNum = i*canvas.width*chunkHeight*4 + j*chunkWidth*4;
          color = "rgb(" + data[clrNum] + "," + data[clrNum+1] + "," + data[clrNum+2] + ")";

          drawBox(j*chunkWidth, i*chunkHeight, chunkWidth, chunkHeight, color)
      }
    }
  }

  function findNearestColor( ){

    return
  }

  function drawBox(startX, startY, width, height, boxColor) {
    //if try to draw box that runs over edge of screen, compare and fix
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = boxColor;
    ctx.fillRect(startX, startY, width, height);
  }

  function clear() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#efefef";
    ctx.fillRect(0, 0, canvas.height, canvas.width);
  }

}());