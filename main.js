
function Songs(NomeCantor, NomeMusica){
    this.NomeCantor = NomeCantor; 
    this.NomeMusica = NomeMusica;
   
    
}


 function TheBestSongs(NomeCantor, NomeMusica){
    Songs.call(this, NomeCantor, NomeMusica);
    this.best = function(){
        console.log('a melhor musica de'+ " " + this.NomeCantor + " " + "é" + " " + this.NomeMusica);
    }


 }

const Song1 = new TheBestSongs('NEFFEX', ' Things Are Gonna Get Better');
const Song2 = new TheBestSongs('Camila Cabello', 'Havana');
const Song3 = new TheBestSongs('Elley Duhé', ' MIDDLE OF THE NIGHT');

function BestSingersAndSongs(best){
    TheBestSongs.call(this, best);
    Song1.best();
    Song2.best();
    Song3.best();
}

BestSingersAndSongs();