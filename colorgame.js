var square=document.querySelectorAll(".square");
var a=document.querySelector(".a");
var message=document.querySelector("#message");
var square=document.querySelectorAll(".square");
var h1=document.querySelector(".find");
var a=document.querySelector(".a");
var header=document.querySelector("h1");
var colors=[];
for(x=0;x<square.length;x++)
{
	colors.push(rnd());
}
function rnd()
{
	var r=Math.floor(256*Math.random());
	var b=Math.floor(256*Math.random());
	var g=Math.floor(256*Math.random());
	return "rgb("+r+", "+b+", "+g+")";
}
var winningColor=Math.floor(6*Math.random());
h1.textContent=colors[winningColor].toUpperCase();
var x;
for(x=0;x<square.length;x++)
{
	square[x].style.backgroundColor=colors[x];
}
for(x=0;x<square.length;x++)
{
	square[x].addEventListener("click",function()
	{
		if(this.style.backgroundColor==colors[winningColor])
		{
			message.textContent="Winner";
			header.style.backgroundColor=colors[winningColor];
		}
		else
		{
			if(message.textContent=="Winner")
				window.location.href = window.location.href;
			else
			{
			this.style.backgroundColor="#232323";
			a.textContent="Reset Colors";
			message.textContent="Try again";
			}
		}
	});	
};
a.addEventListener("click",function(){
	location.reload(true);
	});
a.addEventListener("mouseenter",function(){
	a.style.backgroundColor="rgb(161, 175, 247)";
	a.style.fontWeight=800;
});

a.addEventListener("mouseleave",function(){
	a.style.backgroundColor="#ffffff";
	a.style.fontWeight=100;
});