//rain drops

function Particle(x, y) {
	this.x = x;   //width/2.5;
	this.y = y;   //height/2;
    this.h = 6;
	this.w = 4;
}

Particle.prototype.draw = function(){
   fill(25,240,255);
   ellipse(this.x,this.y,this.w,this.h);
	
}

Particle.prototype.fall = function() {
	
	this.y = this.y + 10;

	this.w = this.w+0.3;
	this.h = this.h+0.38;
	//this.x = this.x + 20;
    if (this.y > height) {


		// play sound
	}
}
