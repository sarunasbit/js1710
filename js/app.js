let vardas = "jonas";
let pavarde = "jonaitis";
let asmensKodas = 38507131235;
// -----------------------------------------
let gimimoMenesis = asmensKodas.toString().slice(3,5);
let gimimoDiena = asmensKodas.toString().slice(5,7);
let gimimoMetai;
let gimimoVieta;
// -----------------------------------------
let hasReuirements = vardas.length > 3 && pavarde.length  > 5 && typeof(asmensKodas) === 'number' && asmensKodas.toString().length === 11 ? true : false;

if (hasReuirements){
    console.log(vardas.charAt(0).toUpperCase() + vardas.slice(1));
    console.log(pavarde.toUpperCase())
    switch(asmensKodas.toString().charAt(0)) {
        case "1":
        case "2":
            gimimoMetai = 20 + asmensKodas.toString().slice(1,3);
        break;
        case "3":
        case "4":
            gimimoMetai = 19 + asmensKodas.toString().slice(1,3);
        break;
        default:
            gimimoMetai = 0;
    }
    
    console.log(`${gimimoMetai}-${gimimoMenesis}-${gimimoDiena}`);
    
    switch(asmensKodas.toString().charAt(2)){
        case "1":
        case "2":
            gimimoVieta = "„Gimimo vieta: Lietuva“";
        break;
        case "3":
            gimimoVieta = "„Gimimo vieta: Užsienis“";
        break;
        default: 
        gimimoVieta = "„Gimimo vieta: Nežinoma“";
    }

    console.log(gimimoVieta)


} else {
    console.log("--Ilgio patikrinimas--")
}