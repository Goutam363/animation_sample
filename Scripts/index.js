const canvas=document.querySelector("canvas");
const c=canvas.getContext('2d');

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const mouse={
    x: window.innerWidth/2,
    y: window.innerHeight/2
}

const color_palate=['#A7D5F2','#590202','#8C0303','#5C5664','#024059','#0D0D0D','white'];

window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
})
window.addEventListener('resize',function(){
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
})

//utility functions
function randomIntFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomColor(color_palate){
    return color_palate[Math.floor(Math.random()*color_palate.length)];
}

//Objects
function Object(x,y,radius,color)
{
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.color=color;
    this.draw=function(){
        c.beginPath();
        c.strokeStyle=this.color;
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle=this.color;
        c.fill();
        // c.stroke();
        c.closePath();
    };
    this.update=function(){
        this.draw();
    };
}

//Implementation
function init(){

}

//Animation logo
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.fillText(" HTML CANVAS BOILERPLATE",mouse.x,mouse.y);
}

init();
animate();