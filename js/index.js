window.onload=function(){
	var 
  canvas=document.querySelector("#canvas"),
	ctx=canvas.getContext("2d"),
  /*存储落子的数据*/
  qizi={},
  /*存储该落子的颜色*/
  kaiguan=localStorage.x?false:true,
  times=document.querySelector('#time');
  /*画棋盘*/
  var huaqipan=function(){
    ctx.clearRect(0,0,640,640);
     for(var i=0;i<15;i++){
     /* var li=ctx.createLinearGradient(0,40.5+i*40,600,40.5+i*40);
      li.addColorStop(0.5,"red");
      li.addColorStop(1,"blue");
      ctx.strokeStyle=li;*/
      ctx.beginPath();
      ctx.moveTo(40,40.5+i*40);
      ctx.lineTo(600,40.5+i*40);
      ctx.stroke();

      /*var lis=ctx.createLinearGradient(40.5+i*40,40,40.5+i*40,600);
      lis.addColorStop(0.5,"green");
      lis.addColorStop(1,"purple");
      ctx.strokeStyle=lis;*/
      ctx.beginPath();
      ctx.moveTo(40.5+i*40,40);
      ctx.lineTo(40.5+i*40,600);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(317,320);
      ctx.arc(320,320,3,0,Math.PI*2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(157,160);
      ctx.arc(160,160,3,0,Math.PI*2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(477,160);
      ctx.arc(480,160,3,0,Math.PI*2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(157,480);
      ctx.arc(160,480,3,0,Math.PI*2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(477,480);
      ctx.arc(480,480,3,0,Math.PI*2);
      ctx.fill();
    }
  }
  huaqipan();
   /* var arr=[160.5,480.5];
    for(var i=0;i<arr.length;i++){
    	for(var j=0;j<arr.length;j++){
    		ctx.beginPath();
    		ctx.arc()
    	}
    }*/
    //颜色渐变
    /*var lingrad=ctx.createLinearGradient(20,320,620,320);
    lingrad.addColorStop(0,"red");
    lingrad.addColorStop(0.2,"orange");
    lingrad.addColorStop(0.4,"yellow");
    lingrad.addColorStop(0.6,"green");
    lingrad.addColorStop(0.8,"blue");
    lingrad.addColorStop(1,"purple");

    ctx.lineWidth=3;
    ctx.lineCap="round";
    //线条渐变
    ctx.strokeStyle=lingrad;
    //矩形渐变
    ctx.fillStyle=lingrad;
    ctx.fillRect(20,20,300,50);

    ctx.beginPath();
    ctx.moveTo(20,320);
    ctx.lineTo(620,320);
    ctx.stroke();*/
    //径向渐变
	 /*
       x   number  落子x坐标
       y   number  落子y坐标
       color  boolean  true代表黑子  false代表白子
   */
   /* var luozi=function(x,y,color){
    	var zx=40.5+40*x;
    	var zy=40.5+40*y;

    	var black = ctx.createRadialGradient(zx,zy,1,zx,zy,18); 
    	black.addColorStop(0.1, '#555');
     black.addColorStop(1, 'black');

     var white = ctx.createRadialGradient(zx,zy,1,zx,zy,18); 
     white.addColorStop(0.1, '#fff');
     white.addColorStop(1, '#ccc');

     ctx.shadowOffsetX=1;
     ctx.shadowOffsetY=1;
     ctx.shadowblur=2;
     ctx.shadowColor="rgba(0,0,0,0.4)";

     ctx.fillStyle=color?black:white;
     ctx.beginPath();
     ctx.arc(zx,zy,18,0,Math.PI*2);
     ctx.fill();
    }*/
   /**********计时器*************/
  //选出画布元素
  var clock=document.querySelector('#clock');
  //画笔
  ctxtwo=clock.getContext('2d');
  var a=0;
  var drawclock=function(){
    ctxtwo.clearRect(0,0,300,300);
    ctxtwo.save();
  //移动画布的原点到中心
  ctxtwo.translate(150,150);
  //设置样式
  ctxtwo.lineWidth=8;
  ctxtwo.strokeStyle="#7DADA1";
  //开始画表盘
  ctxtwo.beginPath();
  ctxtwo.arc(0,0,120,0,Math.PI*2);
  ctxtwo.stroke();
  //刻度
  ctxtwo.save();//改变画布的状态
  ctxtwo.lineWidth=4;
  ctxtwo.lineCap="round";
  for(var i=1;i<61;i++){
    ctxtwo.rotate(Math.PI/30);
    ctxtwo.beginPath();
    if(i%5==0){
      ctxtwo.strokeStyle="orange";
      ctxtwo.lineWidth=3;
      ctxtwo.moveTo(95,0);
    }else{
      ctxtwo.strokeStyle="#FBAD6C";
      ctxtwo.lineWidth=2;
      ctxtwo.moveTo(100,0);
    }
    ctxtwo.lineTo(110,0);
    ctxtwo.stroke();
  }
  ctxtwo.restore();
  //秒针
  ctxtwo.save();
  ctxtwo.rotate(Math.PI/30*a);
  a++;
  if(a==61){
    a=1;
  }
  ctxtwo.lineWidth=3;
  ctxtwo.lineCap="round";
  ctxtwo.strokeStyle="#EB6A34";
  ctxtwo.beginPath();
  ctxtwo.moveTo(0,-85);
  ctxtwo.lineTo(0,35);
  ctxtwo.moveTo(10,45);
  ctxtwo.arc(0,45,10,0,Math.PI*2,true);
  ctxtwo.moveTo(0,-85);
  ctxtwo.lineTo(7,-65);
  ctxtwo.moveTo(0,-85);
  ctxtwo.lineTo(-7,-65);
  ctxtwo.stroke();
  ctxtwo.restore();
  //圆心点
  ctxtwo.fillStyle="#7A6E6C";
  ctxtwo.beginPath();
  ctxtwo.arc(0,0,3,0,Math.PI*2);
  ctxtwo.fill();

  ctxtwo.restore();
  //requestAnimationFrame(drawclock);
  }
  drawclock();
  var buttons=document.querySelector('.button');
  buttons.onclick=function(){
      aa=setInterval(function(){
        drawclock();
        //requestAnimationFrame(drawclock);
      },1000);
  }
   /*黑子白子为图片老师*/
   var qizia=document.querySelector("#sucai");
   var luozi=function(x,y,color){
      var zx=40.5+40*x;
      var zy=40.5+40*y;
      if(color){
        //ctx.drawImage(qizia,0,0,36,36,zx,zy,36,36);
      var black = ctx.createRadialGradient(zx,zy,1,zx,zy,18); 
      black.addColorStop(0.1, '#555');
      black.addColorStop(1, 'black');
    }else{
        //ctx.drawImage(qizia,37,0,36,36,zx,zy,36,36);
       var white = ctx.createRadialGradient(zx,zy,1,zx,zy,18); 
       white.addColorStop(0.1, '#fff');
       white.addColorStop(1, '#ccc');
     }
       ctx.shadowOffsetX=1;
       ctx.shadowOffsetY=1;
       ctx.shadowblur=2;
       ctx.shadowColor="rgba(0,0,0,0.4)";

       ctx.fillStyle=color?black:white;
       ctx.beginPath();
       ctx.arc(zx,zy,18,0,Math.PI*2);
       ctx.fill();
   }

   canvas.onclick=function(e){
      var x=Math.round((e.offsetX-40.5)/40);
      var y=Math.round((e.offsetY-40.5)/40);
      if(qizi[x+"_"+y]){return;};
      luozi(x,y,kaiguan);
      qizi[x+"_"+y]=kaiguan?"black":"white";
      if(kaiguan){
        if(panduan(x,y,"black")){
            times.innerHTML=a+'秒';
            clearInterval(aa);
            alert("黑子赢");
          if(confirm("是否再来一局")){
            a=0;
            drawclock();
            times.innerHTML='';
            localStorage.clear();
            qizi={};
            huaqipan();
            kaiguan=true;
            return;
          }else{
            canvas.onclick=null;
          }
        }
      }else{
             if(panduan(x,y,"white")){
              times.innerHTML=a+'秒';
              clearInterval(aa);
              alert("白子赢");
            if(confirm("是否再来一局")){
              a=0;
              drawclock();
              times.innerHTML='';
              localStorage.clear();
              qizi={};
              huaqipan();
              kaiguan=true;
              return;
            }else{
              canvas.onclick=null;
            }
          }
        }
      kaiguan=!kaiguan;
      localStorage.data=JSON.stringify(qizi);
      if(!kaiguan){
        localStorage.x=1;
      }else{
        localStorage.removeItem("x");
      }
   }

  /*五子棋核心逻辑算法*/
  var xy2id=function(x,y){
    return x+"_"+y;
  }
  var panduan=function(x,y,color){
      var shuju=filter(color);
      var tx,ty,hang=1;shu=1;zuoxie=1;youxie=1;
      tx=x;ty=y;while(shuju[xy2id(tx-1,ty)]){tx--;hang++};
      tx=x;ty=y;while(shuju[xy2id(tx+1,ty)]){tx++;hang++};
      console.log(hang);
      if(hang>=5){return true;}
      tx=x;ty=y;while(shuju[xy2id(tx,ty-1)]){ty--;shu++};
      tx=x;ty=y;while(shuju[xy2id(tx,ty+1)]){ty++;shu++};
      if(shu>=5){return true;}
      tx=x;ty=y;while(shuju[xy2id(tx+1,ty-1)]){tx++;ty--;youxie++};
      tx=x;ty=y;while(shuju[xy2id(tx-1,ty+1)]){tx--;ty++;youxie++};
      if(youxie>=5){return true;}
      tx=x;ty=y;while(shuju[xy2id(tx-1,ty-1)]){tx--;ty--;zuoxie++};
      tx=x;ty=y;while(shuju[xy2id(tx+1,ty+1)]){tx++;ty++;zuoxie++};
      if(zuoxie>=5){return true;}
  }
  var filter=function(color){
    var r={};
    for(var i in qizi){
      if(qizi[i]==color){
        r[i]=qizi[i];
      }
    }
    return r;
  }
   /*如果本地存储中有棋盘数据，读取这些数据并绘制到页面中*/
   if(localStorage.data){
     	qizi=JSON.parse(localStorage.data);
     	for(var i in qizi){
     		var x=i.split("_")[0];
     		var y=i.split("_")[1];
     		luozi(x,y,(qizi[i]=="black")?true:false);
     	}
   }
   canvas.ondblclick=function(e){
   	  e.stopPropagation();
   }
   document.ondblclick=function(){
	   	localStorage.clear();
	   	location.reload();
   }
   //清除本地缓存是在console控制台调用localStorage.clear();
   //把字符串转换为对象：JSON.parse();
  // 把对象转换为字符串：JSON.stringify();
  /* luozi(4,3,true);
   luozi(5,5,false);*/
   //黑子白子为图片自己
   /*var luozi=function(x,y,img){
	   	if(img=="white"){
	   	    var white=new Image();
	   	    white.src="./imgs/white.png";
	   	    white.onload=function(){
	   	    	ctx.drawImage(white,40.5+40*x-18,40.5+40*y-18);
	   	    }
	   	}
	   	if(img=="black"){
	   	    var black=new Image();
	   	    black.src="./imgs/black.png";
	   	    black.onload=function(){
	   	    	ctx.drawImage(black,40.5+40*x-18,40.5+40*y-18);
	   	    }
	   	}
   }
   var qizi={};
   var kaiguan=true;
   canvas.onclick=function(e){
   	 var x=Math.round((e.offsetX-40.5)/40);
     var y=Math.round((e.offsetY-40.5)/40);
     if(qizi[x+"_"+y]){return;};
     if(kaiguan){
     	luozi(x,y,"black");
     	qizi[x+"_"+y]=true;
     	kaiguan=false;
     }else{
     	luozi(x,y,"white");
     	qizi[x+"_"+y]=true;
     	kaiguan=true;
     }
   }*/
  
}