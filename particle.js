// rain drops
//  var drops=[];

function Particle(x, y) {
	this.x = x;   //width/2.5;
	this.y = y;   //height/2;
    this.h = 4;
	this.w = 2;
	this.rx=50;
	this.ry=50;
	this.ww=800;
	this.hh=800;
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
    if (this.y < this.h ) {

    	//mySound6.play();
		// play sound
	}
}
	
 Particle.prototype.square = function() {

    //fill(125,240,255);
    this.ww= this.x+0.1;
    this.hh=this.y+0.1;
    rect(this.x,this.x,this.ww,this.hh);
    this.y = this.y -10;

}
