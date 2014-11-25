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

  var mode = 0;
  //var rainOn = false;
  var test = HSVtoRGB(0.64, 0.15, 0.25);
  //------------------------------------------------


  var mySound1 = new buzz.sound('tone/a1.wav');
  var mySound2 = new buzz.sound('tone/a2.wav');
  var mySound3 = new buzz.sound('tone/a3.wav');
  var mySound4 = new buzz.sound('tone/a6.wav');
  var mySound5 = new buzz.sound('tone/b1.wav');
  var mySound6 = new buzz.sound('tone/c2.wav');
  var mySound7 = new buzz.sound('tone/cs2.wav');
  var mySound8 = new buzz.sound('tone/ding.wav');

  function setup() {

    createCanvas(w, h);
    smooth();
    frameRate(150); 

  }

  function draw() {
  

    drawBackground(); 
/*-------------------------------------------RAINBOW-----------------------------------*/
    noStroke();
   if (mode == 1){
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

  /*-----------------------------------------RAINBOW end-----------------------------------*/
  
  //drops initial 
  for (var i = 0; i < drops.length; i++) {
    drops[i].draw();
  
    if(keymode == 'a' || keymode == 'A') { drops[i].square(); }
    else drops[i].fall();
  }

  //particle_circle initial 
  for (var r = 0; r < P_circle.length; r++) {
       P_circle[r].draw();
         //

       if(keymode == 'z' || keymode == 'Z') {
        P_circle[r].falling();
        }
       if(keymode == 'v' || keymode == 'V') {
        P_circle[r].ball();  
     }
       if(key == ' ' ) P_circle[r].ball_2()
       else

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
 
   keymode = key;

   if(key=='p'|| key=='P'){
      mySound8.play();
      mode=0;
    }
   
   if(key=='o'|| key=='O'){
     mySound8.play();
     mode=1;
   }
    
   if (key == 'b' || key == 'B')    //raindrops
   {
      mode=0;
      for (var i = 0; i < 14; i++){
      var x = i*30+ width/3;
      var y = cloud1y/3;
      drops.push(new Particle(x, y));
      mySound4.play();
    
    }

   } 
   
   if( key == 'a' || key == 'A'){
      mySound2.play(); 
     
      var x = width/3;
      var y = height;
      drops.push(new Particle(x, y));
      
    }


    if( key == 'v'|| key == 'V'){
      
      var x = 1000;
      var y = 200;
      P_circle.push(new circle(x, y,100,120,300,230)); //x, y, sspeed,bc,BallSize,xc
      mySound6.play();
   
   }

   if( key == 'z'|| key == 'Z'){
      
      mySound3.play();
  
      var y = height/2;
      var x = width/2 ;

      P_circle.push(new circle(x, y,10,250,160,145)); //x, y, sspeed,bc,BallSize,xc
   }

   if( key == 'c'|| key == 'C'){
     
     mySound5.play();
    for (var i = 0; i < 5; i++){
      var x = i*50;
      var y = width/8;

      P_circle.push(new circle(x, y,5,120,24,170)); //x, y, sspeed,bc,BallSize,xc
  }

  if( key == 'x'|| key == 'X'){
    
      mySound8.play();
      var x = 100;
      var y = height/2;
      P_circle.push(new circle(x, y,-10,255,600,200)); //x, y, sspeed,cx,bs,yCopy
  }


   if(key == 'n'|| key == 'N'){ //night
  
   test = HSVtoRGB(0.64, 0.15, 0.25);
    mode=1;
   print('n was pressed')

    mySound1.play();
   } 

  if(key == 'm'|| key == 'M'){
   mySound1.play();
   print("Ｍ: " + test);
        

  } 


 }
} 
  /*else if (key == CODED) {
    if (keyCode == ENTER) {


    }
  }*/

  /*

  else if (keyCode == 13) {
  

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