var x=1;
var y=2;
var z=3;

var u=0;
var d=0;
var t=0;
var p=0;
var c;
function generar(){
	x =Math.round(Math.random()*(9));
	y =Math.round(Math.random()*(9));
	z =Math.round(Math.random()*(9));
	r()
	console.log(x , y , z)
}
function r(){
		if(x-y == 0){
		y = Math.round(Math.random()*(9));
		r()
	}

	if(x-z == 0){
		z = Math.round(Math.random()*(9));
	r()
}
	if(z-y == 0){
		y = Math.round(Math.random()*(9));
		r()
	}
}
function verificar(){
	u = document.getElementById('uno');
	d = document.getElementById('dos');
	t = document.getElementById('tres');
	c = document.getElementById('c');
	
	c.innerHTML = p=p+1;
	console.log(x , y , z);
	console.log(u, d , t);

	if(d.value == x || t.value == x ){
	document.getElementById('1').innerHTML=('primer número bien posicion incorrecta');
	}else if(u.value == x){
		document.getElementById('1').innerHTML=('primer número bien posicion correcta');
	} else if( u.value != x || t.value != x || d.value != x ) {
		document.getElementById('1').innerHTML=('primer número no tienes nada');
	}


	if(u.value == y || t.value == y ){
		document.getElementById('2').innerHTML=('segundo número bien pero posicion incorrecta');
	}else if( d.value == y){
		document.getElementById('2').innerHTML=('segundo número bien posicion correcta')
	}else if( u.value != y || t.value != y || d.value != y ) {
		document.getElementById('2').innerHTML=('segundo número no tienes nada');
	}

	if(u.value == z || d.value == z){
		document.getElementById('3').innerHTML=('tercer número bien pero posicion incorrecta');
	}else if(t.value == z ){
		document.getElementById('3').innerHTML=('tercer número bien posicion correcta')
	}else if( u.value != z || t.value != z || d.value != z ){
		document.getElementById('3').innerHTML=('tercer número no tienes nada');
	}
}