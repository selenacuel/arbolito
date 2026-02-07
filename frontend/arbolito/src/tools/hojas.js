<script>
//<[CDATA[
// Fall v2.0 By MaxxBlade - http://www.maxxblade.co.uk/fall
var fallObjects=new Array();function newObject(url,height,width){fallObjects[fallObjects.length]=new Array(url,height,width)
} numObjs=15, waft=100, fallSpeed=5, wind=-1;

newObject("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi97LW0Q7-I-cQJcfFF-AN7x9eTLCr4CwdGGXOw-2dwqO4Ug9Ta7nGFmiRc2MURyBh1MeEJkdSlK3a9L6QTZdMV5Mx2M0TXNUtRII6d0on_YB969Mozws0cEK4cxDgaWRDVZHzZXq2iSX8/s100/hoja1.png",29,15);
newObject("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIb3SiHXLP19kViKdPjZVksBDUvs1NzgQXRYZ4tlyG_P1kZQDj0UkQ28svfHlfGU4aqvZiXn8wo_wfnxF8_ZywRlPgVVnXK6bhPVqlFX6Rj2toSZF_cH22gedFYhuw62IkTs2OyVu_W20/s100/hoja2.png",27,23);
newObject("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXlrtWqnNiJ1PC7Db7h9kxuAL1qCw3qWjS2P4UQAgpAtR4TxK6LGGItctxwueX-_JMwgZZWNpQGjbnpWEeYnD7mW2uy4hqbu_vFVGtqLrgm0Ucqzi4fklBCNr2hphMuu0HHbeH6bd5-2o/s100/hoja3.png",46,15);
newObject("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiN9pbU7Ur87UDjvfXPbROs6ooKLUNl7YC5KRRarYmUzR1RuaCwLZ2VGDOKGmO2Nrwi9MQqJBnd2tQXp3H4K31T-5Lilt0pzgPktS1YB_04c22ED8UBJy6oMcXTmjm9C7D5y2pYRG_0jMQ/s100/hoja4.png",36,33);
function winSize(){winWidth=(moz)?window.innerWidth:document.body.clientWidth}winHeight=(moz)?window.innerHeight:document.body.clientHeight;&rbrace
function fallObject(num,vari,nu){
objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2])}
if(nu==1){document.write('<img id="fO'+i+'" style="position:absolute;z-index:9;background:none;border:0;padding:0;box-shadow:none;" src="'+fallObjects[vari][0]+'">') }
"{}
function fall(){
vas (i=0)i<numObjs)i++){
 fallingObject=document.getElementById('fO'+i)
}if((objects[i][1](winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8])))){fallObject(i,objects[i][6],0)
}objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
with(fallingObject.style){ top=objects[i][1]+winOffset+"px"}left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+"px";}
}
setTimeout("fall()",31);
}
var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;winSize();
for (i=0;i<numObjs"}"i++){fallObject(i,parseInt(Math.random()*fallObjects.length),1)}
window.onresize=winSize;fall();
//]]
</script>