var waktu = 10; //10 detik
document.getElementById("timer").innerHTML = waktu;

function timerOn(){
	hitungmundur = setInterval(function() {
		waktu--;
		if(waktu <= 0){
			cek("0");
		}else{document.getElementById("timer").innerHTML = waktu;}
	}, 1000);
}
function timerOff(){
	clearInterval(hitungmundur);
	waktu = 10;
	document.getElementById("timer").innerHTML = waktu;
}