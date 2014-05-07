  var drops =[];
  var P_circle=[];

  var x1;
  var y1;

  var colorR = 0.01;
  var colorG = 0.5;
  var colorB = 1;

  var w = 1280;
  var h = 680;

  var cloud1x=w/3.1 ;
  var cloud1y=h/2.5;
  var cloud2x=(w/3.4);
  var cloud2y=h/3;
  var cloud1w= w/6;
  var cloud1h= h/8;
  var cloud2w= w/8.5;
  var cloud2h= h/12;

  var mode = 1;
  //var rainOn = false;
  var test = HSVtoRGB(.6, 0.15, 0.88);
  //------------------------------------------------

  var player = new Tone.Player("../audio/casio/A1.mp3");  

  var noise;// = new Tone.Noise();
  var filter;// = Tone.context.createBiquadFilter();
  var highpass;// = Tone.context.createBiquadFilter();

  


  function setup() {

    createCanvas(w, h);
    smooth();
    frameRate(150);
    noise = new Tone.Noise();
    filter = Tone.context.createBiquadFilter();
    highpass = Tone.context.createBiquadFilter();


    filter.type="lowpass";
    highpass.type="highpass";

    filter.frequency.value=0;
    filter.Q.value= 20;


    noise.connect(filter);
    filter.connect(highpass);
    highpass.toMaster();
    player.toMaster();


  }

  function draw() {


    drawBackground(); 

    noStroke();
   if (mode == 0){
    //rainbows
    var r=1;
  
    for (var i=0; i<7; i++) {
      var colorDiff = 0.098 ;
      
      var colors = HSVtoRGB(colorR+i*colorDiff, colorG, colorB);
      
      fill(colors.r, colors.g, colors.b+i);
      arc(w/1.5, h/2.5, 400 -i*50+i, 400 -i*50+i, PI, 2*PI);
    }

    //clouds
    fill(255,255,255);
    ellipse (cloud1x,cloud1y, cloud1w+r, cloud1h+r);
    ellipse (cloud2x, cloud2y, cloud2w+r, cloud2h+r);
    ellipse (w/1.15, cloud1y+30, cloud2w*1.5, cloud2h*2);
    ellipse (w/1.3, cloud1y+cloud2h, cloud2w, cloud2h);
  }

  //drops initial 
  for (var i = 0; i < drops.length; i++) {
   drops[i].draw();
   drops[i].fall();
  }

  //particle_circle initial 
  for (var r = 0; r < P_circle.length; r++) {
    P_circle[r].draw();
    P_circle[r].fall();
  }

  }

  function drawBackground(){
  background(test.r, test.g, test.b);
  rainOn = true;
  }

  /*-------------------------------------------KEY PRESSED-----------------------------------*/

  function keyPressed()

  {  
   println("PRESS: " + key);
   // if (key >= '0' && key <= '9'){
   //     mode = key - '0'; //48 - 48 = 0
   // }

   if(key=='p'|| key=='P'){
    
      mode=0;
  

   }
   if(key=='o'|| key=='O'){
     mode=1;
   }
   
    
   if (key == 'b' || key == 'B')    //raindrops
   {
      mode=0;
      for (var i = 0; i < 14; i++){
      var x = i*30+ width/3;
      var y = cloud1y/3;
      drops.push(new Particle(x, y));}
       
    rainSound(); 
   } 
 else if(   key == 'v' || key == 'V'){
        mode=1;
       for (var i = 0; i < 14; i++){
      var x = i*30+ width/3;
      var y = cloud1y/3;
      drops.push(new Particle(x, y));}
       
    rainSound(); }

   if( key == 'z'|| key == 'Z'){
      
      //var x = 0;
      var y = height-100;
      var xc ;
      P_circle.push(new circle(0, y,10,2,160,xc)); //x, y, sspeed,cx,bs,xCopy

   }

   if( key == 'c'|| key == 'C'){

    for (var i = 0; i < 5; i++){
      var x = i*50;
      var y = width/8;
      P_circle.push(new circle(x, y,10,160,16,0)); //x, y, sspeed,cx,bs,yCopy
    }
  }

  if( key == 'x'|| key == 'X'){
    
      var x = width;
      var y = height;
      P_circle.push(new circle(x, y,-10,255,400,0)); //x, y, sspeed,cx,bs,yCopy

   }

   if(key == 'n'|| key == 'N'){ //night

   test = HSVtoRGB(0.64, 0.15, 0.25);
   mode=1;
   page();
  } 


  else if(key == 'm'|| key == 'M'){

   test = HSVtoRGB(.0, 0.35, 0.91);
   page();
  } 

  else if (key == ' ') {

     test = HSVtoRGB(.6, 0.15, 0.88);
     page();

  }
}
  /*else if (key == CODED) {
    if (keyCode == ENTER) {


    }
  }*/

  /*

  else if (keyCode == 13) {
  
  }





  }

  /*-------------------------------------------KEY PRESSED END--------------------------------*/

  function rainSound(){

    var now = Tone.context.currentTime;

    for(var i=0; i<1; i++){

      var startTime = now + i*.125;
      filter.frequency.setValueAtTime(0, startTime);
      filter.frequency.linearRampToValueAtTime(950, startTime+.01);
      filter.frequency.linearRampToValueAtTime(0, startTime+ .1);
    }


  }


  function page(){

    var now = Tone.context.currentTime;

    for(var i=0; i<1; i++){

      var startTime = now + i*.5;
      filter.frequency.setValueAtTime(0, startTime);
      filter.frequency.linearRampToValueAtTime(1950, startTime+.01);
      filter.frequency.linearRampToValueAtTime(0, startTime+ .1);
    }

  }
  function rain(x,y){

    console.log(x);

    pushMatrix();
    translate(x,y);

      // 
      for (var x = cloud1h*2+150; x < cloud1h*4+150; x+=21) {
        for (var y = cloud1y; y < cloud2y; y+=15.75) {
          fill(25,240,255);
          //stroke(255);
          ellipse(x, y+55, 6, 7);
        } 
      }
      popMatrix();
    }


    function HSVtoRGB(h, s, v) {
      var r, g, b, i, f, p, q, t;
      if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
      }
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
      }
      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }
