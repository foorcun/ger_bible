class Kelime {

    constructor(kelime) {
        this.kelime = kelime;
        this.ID = this.searchID(this.kelime)

      
        


    }

    searchID(kelime) {

        var ID = null;

        for (let index = 0; index < localData.length; index++) {
            let checkWord = localData[index]["French"];
            if (kelime.toLowerCase() == checkWord) {
                /* console.log("bilirik"); */
                ID = checkWord.id
                this.datalar(index)

            

                break;
            }


        }







        ID = parseInt(ID)

        return ID
    }




    datalar(index){


        this.English = localData[index]["English"]
        this.Turkce = localData[index]["Türkçe"]
        this.Acıklama = localData[index]["Açıklama"]
        this.Bilme = localData[index]["Bilme"]
        





    }


}