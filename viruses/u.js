var canvas,ctx,ban;
canvas = document.getElementsByTagName('canvas')[0];
ctx = canvas.getContext('2d');
canvas.width=canvas.height=200;
main();

function main(){
    var a,b,c,tim;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle="rgb(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    tim=new Date().getTime()/640;
    ban=0;
    rus(200,200,1,tim,0);
    requestAnimationFrame(main);
}

function rus(x,y,s,r,k){
    var a,b,c,px,py,r1,r2,han;
    han=50;
    if(k>2){
        a=(k*5+200)%360;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle="hsla("+a+",60%,50%,0.1)";
        ctx.beginPath();
        ctx.arc(x,y,han*s*2,0,Math.PI*2,0);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle="hsl("+a+",60%,30%)";
        ctx.beginPath();
        ctx.arc(x,y,han*s,0,Math.PI*2,0);
        ctx.fill();
    }
    ban++;
    if(s<0.3)return;
    k++;
    r1=0.87;
    r2=1-r1;
    r+=ban;
    px=Math.cos(r);
    py=Math.sin(r);
    rus(x+px*han*r2*s,y+py*han*r2*s,s*r1,r*1.2,k);
    r+=ban;
    px=Math.cos(r);
    py=Math.sin(r);
    r1=0.82;
    rus(x+px*han*(1+r1)*s,y+py*han*(1+r1)*s,s*r1,-r,k);
}