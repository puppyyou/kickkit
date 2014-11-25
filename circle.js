//ball ball ball

function circle(x, y, speed,bc,bs,xc) {
	this.x = x;   //location of x
	this.y = y;   //location of y
	this.ballcolorG=xc; //control the speed of sin/cos
	this.theta = 0;
	this.speed = speed;
	this.ballcolorR= bc;
    this.ballsize=bs;
}

circle.prototype.draw = function(){
   fill(this.ballcolorR,this.ballcolorG,135);
   ellipse(this.x,this.y,this.ballsize,this.ballsize);
   
}

circle.prototype.fall = function() {
    
    //this.ballcolor = 50;
	
	this.y = sin(this.theta)*100 +240;
    this.theta+=0.1;
	this.x+=this.speed; //fade outttttt !! YAYAYA !!	
}


circle.prototype.falling = function() {
    
    //fill(125,140,255);
	this.y = sin(this.theta)*150 +240;
    this.x = cos(this.theta)*150 +240; //fade outttttt !! YAYAYA !!
    this.theta+=0.1;	

    if (this.theta>50){
    	this.x= width+500;
    	this.y=-500;
    }
}

circle.prototype.ball = function(){

	

	this.x= cos(this.theta)*100+400;   //bouncing !!
	this.y += this.speed; 
    this.theta+=0.01;
}


//-------------------------------//

//ball ball ball

// function circle(x, y, speed,bc,bs) {
// 	this.x = x;   //location of x
// 	this.y = y;   //location of y 
// 	this.theta = 0;
// 	this.speed = speed;
// 	this.ballcolor= bc;
//     this.ballsize=bs;
// }

// circle.prototype.draw = function(){
//    fill(this.ballcolor,146,135);
//    ellipse(this.x,this.y,this.ballsize,this.ballsize);
   
// }

// circle.prototype.fall = function() {

	
// 	this.y = sin(this.theta)*150 +240;
//     this.theta+=0.01;
// 	this.x+=this.speed; //fade outttttt !! YAYAYA !!
	
// }

// circle.prototype.ball = function(){

// 	this.y = cos(this.theta)*150+400;
// 	this.x= sin(this.theta)*150 +400;   //rotate
//     this.theta+=0.1;
// }

// circle.prototype.ball_2 = function(){

// 	this.y = sin(this.theta)*150+400;
// 	this.x= cos(this.theta)*150 +400;   //rotate
//     this.theta+=0.1;

// }
