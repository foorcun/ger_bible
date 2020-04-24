/* buraya javascritp kodlarımız gelecek - google drive boş dosya upload etmiyor die bir yorum bu */


// link to örnek site https://www.newsinslowgerman.com/series/5/season/1/chapter/7/intermediate


/* local data kelimeler */
var localData = kelimelerim;

//alert(localData[0].French)


function temizle(input) {

    temiz = input;
   /*  temiz = input.replace(/\./g, ""); // bunu temiz str ve input array burda arrayden str donuşsun diye var. çalışıyodu ben de bıraktım öylece. yoksa replace ile falan alakası yok kodun
    temiz = temiz.replace(/\./g, "");
    temiz = temiz.replace(/\,/g, "");
    temiz = temiz.replace(/\;/g, "");
    temiz = temiz.replace(/\?/g, "");
    temiz = temiz.replace(/\!/g, "");
    temiz = temiz.replace(/\:/g, "");
    temiz = temiz.replace(/\"/g, "");
    temiz = temiz.replace(/\(/g, "");
    temiz = temiz.replace(/\)/g, ""); */
    temiz = temiz.replace(/(\r\n|\n|\r)/gm, " "); 

return temiz;



}

textim = temizle(textim)

var uzunMetin = new Metin(textim)



// ready method makes sure the page is loaded so that we can modify the elements of DOM
jQuery(document).ready(function () {

    uzunMetin.analysis()

 





});










