//ball ball ball

function circle(x, y, speed,bc,bs,xc) {
	this.x = x;   //location of x
	this.y = y;   //location of y
	this.xCopy=xc; //control the speed of sin/cos
	this.theta = 0;
	this.speed = speed;
	this.ballcolor= bc;
    this.ballsize=bs;
}

circle.prototype.draw = function(){
   fill(this.ballcolor,146,135);
   ellipse(this.x,this.y,this.ballsize,this.ballsize);
   
}

circle.prototype.fall = function() {

	
	this.y = sin(this.theta)*150 +240;

	this.theta+=0.1;
	this.x+=this.speed; //fade outttttt !! YAYAYA !!
	this.xCopy= cos(this.theta)*100;   //rotate

    if (this.theta> 20) {

    	this.x=width+300;
    	this.y=width+300;
		
	}
}