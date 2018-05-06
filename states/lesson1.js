
WIDTH = 1000;
HEIGHT = 1000;
var color = '#6EF5DE';
var noOfCircles = 100;
var circles = [];
var canvas = document.getElementById('myCanvas');
canvas.width = WIDTH;
canvas.height =HEIGHT ;
var ctx = canvas.getContext('2d');
var col=['#E376C4','#6EF5DE','green','#E7932E','magenta'],
bounce=-1;

function Circle(x,y,sx,sy){
    
    this.x=x;
    this.y=y;
    this.sx=sx;
    this.sy=sy;
    this.r=20;
    
    this.drawCircle=function(color){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        ctx.fillStyle=color;
        ctx.fill();
    }
    
    this.moveCircle=function(){
        this.x+=this.sx;
        this.y+=this.sy;
        if(this.x+this.r > canvas.width){
            this.x=canvas.width-this.r;
            this.sx*=bounce;
        }
        else if(this.x-this.r<0){
            this.x=this.r;
            this.sx*=bounce;
        }
        if(this.y+this.r>canvas.height){
            this.y=canvas.height-this.r;
            this.sy*=bounce;
        }
        else if(this.y-this.r<0){
            this.y=this.r;
            this.sy*=bounce;
        }
    }

}

for(var i=0;i<noOfCircles;i++){
    var _x = Math.floor((Math.random()*(canvas.width-15)))+15,
        _y = Math.floor((Math.random()*(canvas.height-15)))+15,
        xspd = Math.floor((Math.random()*(5-0.5)))+0.5,
        yspd = Math.floor((Math.random()*(5-0.5)))+0.5,
        c=new Circle(_x,_y,xspd,yspd);
    circles.push(c);
    }

function changeState(num){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    circles=[];
    noOfCircles = num;
    for(var i=0;i<noOfCircles;i++){
        var _x = Math.floor((Math.random()*(WIDTH-15)))+15,
            _y = Math.floor((Math.random()*(HEIGHT-15)))+15,
            xspd = Math.floor((Math.random()*(5-0.5)))+0.5,
            yspd = Math.floor((Math.random()*(5-0.5)))+0.5,
            c=new Circle(_x,_y,xspd,yspd);
        circles.push(c);
    }
}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(circles.length==50) color = "#E7932E";
    if(circles.length==200) color = "#6EF5DE";
    if(circles.length==500) color = "#E376C4";

    for(var i=0;i<circles.length;i++){
        circles[i].drawCircle(color);
        circles[i].moveCircle();
    }
    requestAnimationFrame(update);
}


update();