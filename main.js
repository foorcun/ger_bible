var localData = kelimelerim;



// masal link https://www.ndr.de/fernsehen/service/leichte_sprache/Rapunzel,rapunzelleichtesprache100.html



var input = "";
var temiz = "";
var son = "";
var kelimeler = [];

var bil = 0;

var jsonaKelimeler = [];
var jsonText = "";





function analiz() {

    $("#textArea").hide();
    $("#analizSonrasi").show();
    input = $("#exampleFormControlTextarea1").val();
    /* console.log(input); */
    temizle();
    /* console.log(temiz); */
    ayır();
    /* console.log(son); */
    /* checkWords(son) */
    checkWords(input)
    /* writeToAnaliz("analiz div"); */



    //href='javascript:bil0();'>5</a> \

    for (let index = 0; index < kelimeler.length; index++) {
        var word = kelimeler[index][0];
        var idWord = index;
        var html5 = "<div id='kelime5' class='btn-group dropdown'>\
        <button id='"+ idWord + "' type='button' class='btn btn-success dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' \
        aria-expanded='false'>" + word + "</button> \
        <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'> <a id='"+ idWord + "' class='dropdown-item' href='javascript:bil5(" + idWord + ");'>5</a> \
        <a class='dropdown-item' href='#'>1</a>\
        <a class='dropdown-item' href='javascript:bilK("+ idWord +");'>K</a>\
        <a class='dropdown-item' href='#'>Açıklama</a>\
        </div></div>";
        var html1 = "<div id='kelime1' class='btn-group dropdown'>\
        <button id='"+ idWord + "' type='button' class='btn btn-warning dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' \
        aria-expanded='false'>" + word + "</button> \
        <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'> <a id='"+ idWord + "' class='dropdown-item' href='#'>5</a> \
        <a class='dropdown-item' href='javascript:bil5("+ idWord + ");'>1</a>\
        <a class='dropdown-item' href='javascript:bilK("+ idWord + ");'>K</a>\
        <a class='dropdown-item' href='#'>Açıklama</a>\
        </div></div>";

        var htmlK = "<div id='kelimeK' class='btn-group dropdown'>\
        <button id='"+ idWord + "' type='button' class='btn btn-danger dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' \
        aria-expanded='false'>" + word + "</button> \
        <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'> <a id='"+ idWord + "' class='dropdown-item' href='#'>5</a> \
        <a class='dropdown-item' href='javascript:bil5("+ idWord + ");'>1</a>\
        <a class='dropdown-item' href='javascript:bilK("+ idWord + ");'>K</a>\
        <a class='dropdown-item' href='#'>Açıklama</a>\
        </div></div>";
        var html0 = "<div id='kelime0' class='btn-group dropdown'>\
        <button id='"+ idWord + "' type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' \
        aria-expanded='false' >" + word + "</button> \
        <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'> <a id='"+ idWord + "' class='dropdown-item' \
        href='javascript:bil0("+ idWord + ");'>5</a> \
        <a class='dropdown-item' href='javascript:bil1("+ idWord + ");' >1</a>\
        <a class='dropdown-item' href='javascript:bilK("+ idWord +");'>K</a>\
        <a class='dropdown-item' href='#'>Açıklama</a>\
        </div></div>";


        if (kelimeler[index][1] == "5") {
            /* console.log(kelimeler[index][1]); */
            /* var word = word.fontcolor("green"); */
            /*  writeToAnaliz(word); */
            $("#analizSonrasi").append(html5);
            bil = bil + 1;

        } else if (kelimeler[index][1] == "1") {
            $("#analizSonrasi").append(html1);
            bil = bil + 1;

        }else if (kelimeler[index][1] == "K") {
            $("#analizSonrasi").append(htmlK);
            bil = bil + 1;

        }
        else {

            $("#analizSonrasi").append(html0);

        }


    }


    /*  <div class="col-sm">
     <div class="btn-group" role="group" aria-label="Basic example">
         <button type="button" class="btn btn-secondary" onclick="analiz()">Analiz et</button>
     </div> */






    writeToInfo(kelimeler.length, bil);


}


function newText() {
    $("#exampleFormControlTextarea1").removeData(); // nasıl oluyossa gereksiz div çizgilerinden kurtarıyor
    /* $("#exampleFormControlTextarea1").text(""); */

    $("#textArea").show();
    $("#analizSonrasi").hide();

}



function bilinmeyenOTO(){
    //alert("tiklandım")
    console.log(kelimeler[0][1])

    var kelSet = new Array()

    for (let index = 0; index < kelimeler.length; index++) {
        console.log(kelimeler[0][1])
        if (kelimeler[index][1] === 0) {

            var flag =0;
           for (let i = 0; i < kelSet.length; i++) {

            //kelSet.push(kelimeler[index])

            if(kelSet[i][0]==kelimeler[index][0]){
                flag=1
                

            }
               
           }

           if(flag==1){

            //alert("eş kelime")
           }else
           {
               kelSet.push(kelimeler[index])
           }

            
        }
    }

    console.log(kelSet)
    downloadforJsonOTO(kelSet)

}

function temizle() {


    temiz = input.replace(/\./g, ""); // bunu temiz str ve input array burda arrayden str donuşsun diye var. çalışıyodu ben de bıraktım öylece. yoksa replace ile falan alakası yok kodun
    temiz = temiz.replace(/\./g, "");
    temiz = temiz.replace(/\,/g, "");
    temiz = temiz.replace(/\;/g, "");
    temiz = temiz.replace(/\?/g, "");
    temiz = temiz.replace(/\!/g, "");
    temiz = temiz.replace(/\"/g, "");
    temiz = temiz.replace(/\(/g, "");
    temiz = temiz.replace(/\)/g, "");
    temiz = temiz.replace(/(\r\n|\n|\r)/gm, " "); 





}


function ayır() {

    /* son = temiz.split(" "); */
    input = temiz.split(" ");

}


function writeToAnaliz(text) {
    $("#analizSonrasi").text(text);

}

function writeToInfo(sayı, bil) {
    $("#kelimeSayısı").text("kelimeSayısı: " + sayı);
    $("#bilmeOran").text("bilme oranı: " + (bil / sayı).toFixed(2));


}

function checkWords(arr1) { // input kelimeleri bildiğimiz kelimelerle kıysalayıp bilme puanımızı ekler




    /* kelimeler.push([value_1, value2]); */
    for (let index = 0; index < arr1.length; index++) {
        kelimeler.push([arr1[index], 0]);

    }
    /* console.log(kelimeler); */


    for (let i = 0; i < kelimeler.length; i++) {
        let input = kelimeler[i][0];
        /*  console.log(input); */


        for (let index = 0; index < localData.length; index++) {
            let kelimem = localData[index]["French"];
            /*  console.log(kelimem); */
            if (input.toLowerCase() == kelimem) {
                /* console.log("bilirik"); */
                if (localData[index]["Bilme"] == 5) {
                    kelimeler[i][1] = 5;

                } else if (localData[index]["Bilme"] == 1) {
                    kelimeler[i][1] = 1;
                } else if (localData[index]["Bilme"] == "K") {
                    kelimeler[i][1] = "K";
                }

                break;
            }



        }

    }
    /* console.log(kelimeler); */

}




function bil5() {
    /* console.log("readyyy"); */
    /* $('#bil5').click(function () { console.log("5 e tıklandım."); return false; }); */
    /*  $('[id*=bil5]').click(function () { console.log("5 e tıklandım."); return false; });
     $('[id*=bil0]').click(function () { console.log("0 e tıklandım."); return false; }); */
    console.log("5 e tıklandım.");

}

function bil1(idWord) {
    /* console.log("bilmedik kelimeye tıklandım."); */
    console.log("kelime şu: ")

    /*  console.log(idWord); */
    var kelime = $('#' + idWord).text();
    console.log(kelime);
    jsonaKelimeler.push([kelime, 1])

    /* jsonaEkle(); */




}

function bilK(idWord) {
    /* console.log("bilmedik kelimeye tıklandım."); */
    console.log("kelime şu: ")

    /*  console.log(idWord); */
    var kelime = $('#' + idWord).text();
    console.log(kelime);
    jsonaKelimeler.push([kelime, "K"])

    /* jsonaEkle(); */




}




function bil0(idWord) {
    /* console.log("bilmedik kelimeye tıklandım."); */
    console.log("kelime şu: ")

    /*  console.log(idWord); */
    var kelime = $('#' + idWord).text();
    console.log(kelime);
    jsonaKelimeler.push([kelime, 5])

    /* jsonaEkle(); */




}







function tiki() {
    $('#aaa').click(function () { console.log("tıklandım."); return false; });
}



/* function download() {

   /*  $("#savebtn").click(function () {
        var blob = new Blob(["text t3easdfsadk faskdfasdf"])
    }); */


/*         var blob = new Blob(["text t3easdfsadk faskdfasdf"],
        {type:"text/plain;charset=utf-8"});
        saveas(blob,"ceysoooon.txt")

}  */






/* function download(filename, text) { */
/* function download() {

    var filename = "filename";
    var text = " ben textinmmmmm";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
 */





function jsonaEkle(word) {

    jsonaKelimeler.push(word);

    console.log(jsonaKelimeler);


}


function downloadforJson() {

    var filename = "filename";
    /* var text = ','  +"{" + '"id": "23"' + ',' '"French": "r"' + ','+ '"English": "love"'+ ', \
    ' +  '"Türkçe": ""'+ ','+ '"Açıklama": ""'+ ','+  '"Bilme": "5" \
    ' + "}"; */
    var id = localData.length + 1;
    var word = "";
    var bilme = 5;
    //var text =    ','  +"{" + '"id": "'+id+'"' + ',' + '"French" : "'+ word +'"' + ','+ '"English": ""'+ ','+'"Türkçe": ""'+ ','+ '"Açıklama": ""'+ ','+  '"Bilme": "5"' + "}";

    var toplamText = "";
    for (let index = 0; index < jsonaKelimeler.length; index++) {
        word = jsonaKelimeler[index][0].toLowerCase();
        bilme = jsonaKelimeler[index][1];

        /*   if (word=="") {
              alert("jsona boş kelime eklenmeye çalışıldı.")
              break;            
          } */


        var text = ',' + "{" + '"id": "' + id + '"' + ',' + '"French" : "' + word + '"' + ',' + '"English": ""' + ',' + '"Türkçe": ""' + ',' + '"Açıklama": ""' + ',' + '"Bilme": "' + bilme + '"' + "}";
        toplamText = toplamText + text;
        console.log(toplamText);

        id = id + 1;

    }









    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(toplamText));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);




    //#################### buraya  json file kelimeleri yazma loop u gelcek

    /* jsonaKelimeler=[]; */

}




function downloadforJsonOTO(kelSet) {

    var filename = "filename";
    /* var text = ','  +"{" + '"id": "23"' + ',' '"French": "r"' + ','+ '"English": "love"'+ ', \
    ' +  '"Türkçe": ""'+ ','+ '"Açıklama": ""'+ ','+  '"Bilme": "5" \
    ' + "}"; */
    var id = localData.length + 1;
    var word = "";
    var bilme = 5;
    //var text =    ','  +"{" + '"id": "'+id+'"' + ',' + '"French" : "'+ word +'"' + ','+ '"English": ""'+ ','+'"Türkçe": ""'+ ','+ '"Açıklama": ""'+ ','+  '"Bilme": "5"' + "}";

    var toplamText = "";
    for (let index = 0; index < kelSet.length; index++) {
        word = kelSet[index][0].toLowerCase();
        bilme = "K";

        /*   if (word=="") {
              alert("jsona boş kelime eklenmeye çalışıldı.")
              break;            
          } */


        var text = ',' + "{" + '"id": "' + id + '"' + ',' + '"French" : "' + word + '"' + ',' + '"English": ""' + ',' + '"Türkçe": ""' + ',' + '"Açıklama": ""' + ',' + '"Bilme": "' + bilme + '"' + "}";
        toplamText = toplamText + text;
        console.log(toplamText);

        id = id + 1;

    }









    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(toplamText));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);




    //#################### buraya  json file kelimeleri yazma loop u gelcek

    /* jsonaKelimeler=[]; */

}