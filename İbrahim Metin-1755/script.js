
  const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png" },
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" },
    { ad: "GALATASARAY", src: "images/galatasaray.png"},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png" },
   
  

];
let eslesmeler=[];
let yildizCount = 0;
let maxChampionships = 0;
let maxChampTeam = null;


  for (const takim of takimlar) {
    if (takim.championships > maxChampionships) {
      maxChampionships = takim.championships;
      maxChampTeam = takim;
    }
}


const takim1=document.getElementById("takim1");
const yildiz=document.getElementById("yildiz");
const btnEslestir=document.getElementById("btnEslestir");



btnEslestir.addEventListener("click",eslestir);


function eslestir(){
 
    let rastgeleTakim1 = Math.floor(Math.random() * takimlar.length);
    takim1.src=takimlar[rastgeleTakim1].src;
    eslesmeler.push(takimlar[rastgeleTakim1].ad);
    takimlar.splice(rastgeleTakim1,1);

    yildizCount = takimlar[rastgeleTakim1].championships;
    yildiz.src = "images/images${yildizCount}.png";
    console.log(takimlar,eslesmeler);
}
