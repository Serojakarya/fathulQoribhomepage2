// Mendefinisikan gambar
coinImg = "<img src='img/koin.png' style='height:7vw;vertical-align:middle'></img>  ";
liveImg = "<img src='img/live.png' style='height:7vw;vertical-align:middle'></img>  ";
lontong = "<img src='img/logo.png' style='float:left;width:100%'></img>";
lontong2 = "<img src='img/logo.png' style='width:60%'></img>";

// KOIN DAN NYAWA
koin = window.localStorage.getItem("koin");
nyawa = window.localStorage.getItem("nyawa");
score = window.sessionStorage.getItem("score");
if (koin == null) {
    window.localStorage.setItem("koin", "25");
    $("#bantu").html(coinImg + koin);
} else {
    $("#bantu").html(coinImg + koin);
};
if (nyawa == null) {
    window.localStorage.setItem("nyawa", "3");
    $("#nyawa").html(liveImg + nyawa);
} else {
    $("#nyawa").html(liveImg + nyawa);
};
if (score == null) {
    window.sessionStorage.setItem("score", "0");
    $("#myScore").html(score);
} else {
    $("#myScore").html(score);
};
$("#myScore, #targetScore").hide();

// Navigasi tombol KUIS
homeSukses = "window.location.href='index.html'";
homeGagal = "window.location.href='index.html'";
keluarOK = "$('#pesan').hide();$('#pesanBg').fadeToggle(200);";

function back() {
    window.location.href = 'index.html';
    window.sessionStorage.setItem("score", "0");
}

function menu() {
    $("#pesanImg").html("");
    $("#pesanMsg").html("<span style='font-size:8vw'><strong>" + appName + "</strong><br/>" + appDesc + "</span>");
    $("#pesan").css("background", "white");
    $("#pesan").css("color", "black");
    $("#pesan").css("lineHeight", "8vw");
    $("#okCak").hide();
    $("#btPop").html('<button class="ui-button" style="background:red;color:black;text-shadow:none" onclick="reset()">RESET </button><button class="ui-button" style="background:#FBBC05;color:white;text-shadow:none:display:none" onclick="Android.Exit()">KELUAR</button><button class="ui-button" style="background:#34A853;color:white;text-shadow:none" onclick="' + keluarOK + '">BATAL</button>')
    $("#pesan, #pesanBg").fadeToggle(200);
}

function reset() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function ulangi() {
    window.location.href = "index.html";
    window.localStorage.setItem("koin", "25");
    window.localStorage.setItem("nyawa", "3");
    window.sessionStorage.setItem("score", "0");
}

function intro() {
    $("#pesanImg").html(lontong2);
    $("#pesanMsg").html("<span style='line-height:6vw;font-size:6vw;color:red;'>Anda punya modal " + liveImg + "<strong>" + nyawa + " Nyawa</strong> dan " + coinImg + "<strong>" + koin + " Koin</strong>. Bantuan untuk buka satu huruf ( " + coinImg + " - 5 ), klik saja kotaknya. Bonus menanti di akhir level.</span>");
    $("#pesan").css("background", "#FBBC05");
    $("#okCak").show();
    $("#btPop").hide();
    $("#pesan, #pesanBg").fadeToggle(300);
}

function sukses() {
    // Tambah NYAWA
    nyawaDitambah = parseInt(nyawa) + 1;
    window.localStorage.setItem("nyawa", nyawaDitambah);
    koin = window.localStorage.getItem("nyawa");
    $("#nyawa").html(liveImg + nyawa);
    // PESAN SUKSES	
    $("#pesanImg").html(lontong2);
    $("#pesanMsg").html("<p style='font-size:6vw;'>MARVELOUS!<br/><img src='img/koin.png' style='height:10vw;vertical-align:text-top'></img> + 5<br/><img src='img/live.png' style='height:10vw;vertical-align:text-top'></img> + 1</p><button class='ui-button' style='background:#97B313;color:white;' onclick='back()'>BABAK SELANJUTNYA</button>");
    $("#pesan").css("background", "white");
    $("#okCak, #satu, #clear").hide();
    $("#pesan, #pesanBg").show();
    setLevel();
}

function YesNoQuest(index) {
    soalSekarang = window.sessionStorage.getItem('soal');
    babak = parseInt(window.localStorage.getItem('babak')) + 1;
    if (soalSekarang == null) {} else {
        kuis = index;
        judulLevel = "<strong>BABAK " + babak + "</strong>";
        tulisLevel = soalSekarang + "/" + soalPerLevel;
        $("#judulLevel").html(judulLevel);
        $("#level").html(tulisLevel);
        $("#pertanyaan").html(soal[kuis]);
        $("#pilihanA").html(pilihanA[kuis]);
        $("#pilihanB").html(pilihanB[kuis]);
        $("#pilihanC").html(pilihanC[kuis]);
        window.sessionStorage.setItem("coba", 0);
    }
}

function cek(inputJawaban) {
    jawabanku = inputJawaban;
    jawabannya = jawaban[kuis];
    if (jawabanku == "0") {
        timerOff();
        kurangiNyawa();
        gantiSoal();
    } else {
        if (jawabanku == jawabannya) {
            // Tambah SCORE
            scoreDitambah = parseInt(score) + 100;
            window.sessionStorage.setItem("score", scoreDitambah);
            score = window.sessionStorage.getItem("score");
            $("#myScore").html(score);
            // Tambah KOIN
            koinDitambah = parseInt(koin) + 5;
            window.localStorage.setItem("koin", koinDitambah);
            koin = window.localStorage.getItem("koin");
            $("#bantu").html(coinImg + koin);
            $("#pilihan" + jawabanku).css("background", "url('img/TBR.png')");
            $("#pilihan" + jawabanku).css("background-size", "100% 100%");
            timerOff();
            setTimeout(gantiSoal, 1000);
        } else {
            $("#pilihan" + jawabanku).css("background", "url('img/TBF.png')")
            $("#pilihan" + jawabanku).css("background-size", "100% 100%")
            timerOff();
            kurangiNyawa();
            if (window.localStorage.getItem("nyawa") == "0") {} else {
                setTimeout(gantiSoal, 1000)
            }
        }
    }
}

function gantiSoal() {
    $("#pilihanA, #pilihanB, #pilihanC").css("background", "url('img/TBN.png')");
    $("#pilihanA, #pilihanB, #pilihanC").css("background-size", "100% 100%");
    // SOAL SELANJUTNYA OTOMATIS
    setSoal = parseInt(window.sessionStorage.getItem("soal")) + 1;
    if (setSoal > soalPerLevel) {
        // BANDINGKAN SCORE DENGAN TARGET, JIKA BERHASIL NEXT LEVEL, JIKA TIDAK ULANGI
        skorKu = parseInt(window.sessionStorage.getItem("score"));
        levelIni = parseInt(window.localStorage.getItem("babak")) + 1;
        skorTarget = parseInt(eval("target" + levelIni));
        if (skorKu >= skorTarget) {
            // alert("lebih");
            // TULIS LEVEL YANG SUDAH DIKERJAKAN
            getBabak = parseInt(window.localStorage.getItem("babak")) + 1;
            window.localStorage.setItem("babak", getBabak);

            $("#pertanyaan").html("<span style='text-align:center;font-weight:bold;color:white;'><img style='width:60%' src='img/B.png'/><br/>SELAMAT!</span><button class='ui-button' style='color:black;background:yellow;margin:10%;width:80%;border-radius:5vw;font-size:6vw' onclick='back()'> SELANJUTNYA</button>");
            $(".kotakDepan").css("background", "none");
            $("#infoBar, #levelNow, #imgBack, #imgBuy, #imgPlayer, #pilihanA, #pilihanB, #pilihanC, #timer").hide();
            $("#myScore, #targetScore").show();
        } else {
            // alert("kurang");
            $("#pertanyaan").html("<span style='text-align:center;font-weight:bold;color:white;'><img style='width:60%' src='img/B.png'/><br/> GAGAL!</span><button class='ui-button' style='color:black;background:yellow;margin:10%;width:80%;border-radius:5vw;font-size:6vw' onclick='back()'>ULANGI</button>");
            $(".kotakDepan").css("background", "none");
            $("#infoBar, #levelNow, #imgBack, #imgBuy, #imgPlayer, #pilihanA, #pilihanB, #pilihanC, #timer").hide();
            $("#myScore, #targetScore").show();
        }
    } else {
        window.sessionStorage.setItem("soal", setSoal);
        soalSaiki = window.sessionStorage.getItem("soal");
        bukaSoal(soalSaiki);
        YesNoQuest(soalOk);
        timerOn();
    }
}

function kurangiNyawa() {
    if (nyawa <= 1) {
        if (nyawa <= 0) {
            $("#nyawa").html("0")
        };
        window.localStorage.setItem("nyawa", "0");
        nyawa = window.localStorage.getItem("nyawa");
        timerOff();
        $("#nyawa").html(liveImg + nyawa);

        $("#pertanyaan").html("<span style='text-align:center;font-weight:bold;color:white;'><img style='width:60%' src='img/B.png'/><br/> GAGAL!</span><button class='ui-button' style='color:black;background:yellow;margin:10%;width:80%;border-radius:5vw;font-size:6vw' onclick='back()'>ULANGI</button>");
        $(".kotakDepan").css("background", "none");
        $("#infoBar, #levelNow, #imgBack, #imgBuy, #imgPlayer, #pilihanA, #pilihanB, #pilihanC, #timer").hide();
        $("#myScore, #targetScore").show();
    } else {
        nyawaDikurang = parseInt(nyawa) - 1;
        window.localStorage.setItem("nyawa", nyawaDikurang);
        nyawa = window.localStorage.getItem("nyawa");
        $("#nyawa").html(liveImg + nyawa);
    }
}

function setLevel() {
    window.localStorage.setItem("babak", babakMain);
    window.localStorage.setItem("level", babakMain);
}

function gameOver() {
    level = window.localStorage.getItem("level");
    $("#pesanMsg").html("<span style='font-size:5vw'>ANDA SUDAH MENYELESAIKAN " + level + " . APA ANDA MAU RESET DATA DAN MAIN LAGI?</span>");
    $("#pesanMsg").css("color", "black");
    $("#pesan").css("background", "#ded530");
    $("#pesan, #pesanBg").fadeToggle(200);
    $("#okCak").hide();
    $("#btPop").html('<button class="ui-button-inline ui-button ui-shadow ui-corner-all ui-widget ui-button-inherit" style="background:green;color:white;" onclick="reset()">OK CAK</button><button class="ui-button-inline ui-button ui-shadow ui-corner-all ui-widget ui-button-inherit" style="background:black;color:white;display:none" onclick="Android.Exit()">KELUAR</button><button class="ui-button-inline ui-button ui-shadow ui-corner-all ui-widget ui-button-inherit" style="background:white;color:black;" onclick="' + keluarOK + '">BATAL</button>')
}

function buy() {
    koin = window.localStorage.getItem("koin");
    nyawa = window.localStorage.getItem("nyawa");
    dibulatkan = Math.floor(koin / 10);
    $("#pesanImg").html("");
    $("#pesanMsg").html("<span style='font-size:4vw;line-height:8vw;font-weight:bold;text-shadow:none'>Beli dengan koinmu<br/>1 " + liveImg + " = 10 " + coinImg + ".<br/><br/>Kamu akan memperoleh<br/>" + dibulatkan + " " + liveImg + " = " + dibulatkan * 10 + " " + coinImg + "</span>");
    $("#pesan, #pesanBg").fadeToggle(200);
    $("#okCak").hide();
    $("#btPop").show();
    $("#btPop").html('<button class="ui-button-inline ui-button ui-shadow ui-corner-all ui-widget ui-button-inherit" style="background:#4285F4;color:white;text-shadow:none" onclick="buyLive(' + dibulatkan + ')">TAMBAHKAN</button>')
}

function buyLive(liveWanted) {
    if (liveWanted == 0) {
        $("#pesanMsg").html("<span style='font-size:7vw;line-height:8vw;font-weight:bold; text-shadow:none'>Upps! Kamu belum bisa nambahin</span>");
        $("#btPop").hide();
        $("#okCak").show();
    } else {
        beliNyawa = parseInt(nyawa) + liveWanted;
        window.localStorage.setItem("nyawa", beliNyawa);
        $("#nyawa").html(liveImg + beliNyawa);

        bayarKoin = parseInt(koin) - (liveWanted * 10);
        window.localStorage.setItem("koin", bayarKoin);
        $("#bantu").html(coinImg + bayarKoin);
        $("#pesan, #pesanBg").fadeToggle(200);
        koin = window.localStorage.getItem("koin");

    }
}
