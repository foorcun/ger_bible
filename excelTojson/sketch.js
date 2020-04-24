/* buraya javascritp kodlarımız gelecek - google drive boş dosya upload etmiyor die bir yorum bu */

var localData = ekler;

// 1957 kelimesi var 1958 den devam

console.log(ekler[0])





function downloadforJson() {

    var filename = "filename";
    /* var text = ','  +"{" + '"id": "23"' + ',' '"French": "r"' + ','+ '"English": "love"'+ ', \
    ' +  '"Türkçe": ""'+ ','+ '"Açıklama": ""'+ ','+  '"Bilme": "5" \
    ' + "}"; */
    var id = 1958;
    var word = "";
    var English ="";
    //var text =    ','  +"{" + '"id": "'+id+'"' + ',' + '"French" : "'+ word +'"' + ','+ '"English": ""'+ ','+'"Türkçe": ""'+ ','+ '"Açıklama": ""'+ ','+  '"Bilme": "5"' + "}";

    var toplamText = "";
    for (let index = 0; index < localData.length; index++) {
        word = localData[index]["German"].toLowerCase();
        English = localData[index]["English"];

     

        var text = ',' + "{" + '"id": "' + id + '"' + ',' + '"French" : "' + word + '"' + ',' + '"English": "' + English + '"' + ',' + '"Türkçe": ""' + ',' + '"Açıklama": ""' + ',' + '"Bilme": ""' + "}";
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