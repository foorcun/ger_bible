class Metin {

    constructor(metin) {
        this.metin = metin;
        this.metinDetermined = this.determinedArray()
        this.code = this.determinedArrayToCode()


    }



    analysis() {



        $("#analizSonrasi").append(this.code);

    }

    determinedArrayToCode() {
        var eklenecekKod = [];

        for (let index = 0; index < this.metinDetermined.length; index++) {

            if (this.determineType(this.metinDetermined[index]) == "Kelime") {

                var popoverTitle = this.metinDetermined[index].kelime
                
                
                var popoverBody = "English: " + this.metinDetermined[index].English + "; Turkce: " + this.metinDetermined[index].Turkce + "; Acıklama: " + this.metinDetermined[index].Acıklama + "; Bilme: " + this.metinDetermined[index].Bilme

                //color
                var color = this.color(this.metinDetermined[index].Bilme)





                eklenecekKod.push('<a href="#" ' + color + ' id="kelime' + index + '" data-toggle="popover" data-trigger="hover" title="' + popoverTitle + '" \
                data-content="'+ popoverBody + '\
                ">' + popoverTitle + '\
                </a><script type="text/javascript">$("#kelime' + index + '").popover(function () { });</script>');
                eklenecekKod.push(" ");


            } else if (this.determineType(this.metinDetermined[index]) == "KelimeWithNoktalama") {

                var popoverTitle = this.metinDetermined[index].kelime
                var popoverBody = "English: " + this.metinDetermined[index].English + "; Turkce: " + this.metinDetermined[index].Turkce + "; Acıklama: " + this.metinDetermined[index].Acıklama + "; Bilme: " + this.metinDetermined[index].Bilme
                //color
                var color = this.color(this.metinDetermined[index].Bilme)


                eklenecekKod.push('<a href="#" ' + color + ' id="kelime' + index + '" data-toggle="popover" data-trigger="hover" title="' + popoverTitle + '" \
                 data-content="'+ popoverBody + '\
                 ">' + popoverTitle + '</a><script type="text/javascript">$("#kelime' + index + '").popover(function () { });</script>');

                eklenecekKod.push(this.metinDetermined[index].noktalama);
                eklenecekKod.push(" ");

            }

        }

        return eklenecekKod

    }



    // arraydeki kelimeleri classlara classify eder
    determinedArray() {

        var metinArrayed = this.metinToArray()


        for (let index = 0; index < metinArrayed.length; index++) {
            metinArrayed[index] = this.determineWord(metinArrayed[index])
          

        }

        //console.log(metinArrayed)
        return metinArrayed

    }


    // girdi kelimeyi class classify eder
    determineWord(str) {



        // virgüllü kelime
        if (str.includes(",")) {
            var str = str.substring(0, (str.length - 1));


            var determinedKelime = new KelimeWithNoktalama(str, ",");

        }



        // noktalı kelime
        else if (str.includes(".")) {
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, ".");


            // ünlemli kelime
        }else if(str.includes("!")){
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, "!");

        }
         // soru işaretli kelime
        else if(str.includes("?")){
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, "?");

        } // cıft tırnak kelime
        else if(str.includes("\"")){
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, "\"");

        }

        // noktalı virgu kelime
        else if(str.includes(";")){
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, ";");

        }

        // iki nokta üst üste kelime
        else if(str.includes(":")){
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, ":");

        }



        else if (!str.includes(",") && !str.includes(".") && !str.includes("!")&& !str.includes(":") && !str.includes("?")&& !str.includes("\"")&& !str.includes(";")) {

            var determinedKelime = new Kelime(str);
        }

        return determinedKelime;

    }




    // girdi metini kaba array a convert eder
    metinToArray() {


        var metinArrayed = this.metin.split(" ");


        return metinArrayed

    }



    determineType(object) {

        if (object.constructor.name == "Kelime") {
            var type = "Kelime"


        } else if (object.constructor.name == "KelimeWithNoktalama") {
            var type = "KelimeWithNoktalama"

        }

        return type

    }



    color(Bilme) {

        var color = 'style="color:#000000;"' //siyah // default

        if (Bilme == "5") {

            //var color = 'style="color:#FF0000;"' //red
            var color = 'style="color:#29EF49;"' //red
        } else if (Bilme == "K") {
            var color = 'style="color:#FF0000;"' //red


        }
        else if (Bilme == "1") {
            var color = 'style="color:#F9EA37;"' //sarı


        }

        return color
    }





}


