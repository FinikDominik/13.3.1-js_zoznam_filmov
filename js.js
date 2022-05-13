let arr2= [];



let btnv = document.getElementById('vloz');
btnv.onclick = function(){
    
    let prvyzoznamf = [];
    let naz = document.getElementById("nfilm").value;
    let rok = document.getElementById("rokv").value;
    let her = document.getElementById("herci").value;
    arr2.push( ' Názov filmu: ' + naz + ' Rok vydania: ' + rok + ' Herci: ' + her );
    prvyzoznamf.push( ' Názov filmu: ' + naz + ' Rok vydania: ' + rok + ' Herci: ' + her );
    console.log('******* Aktuálny zoznam filmov *******');

    function addp(prvyzoznamf)
    {
        let par = document.createElement('p');
        par.setAttribute('style', 'border: 2px solid black');
        par.setAttribute('style','background-color: rgb(121, 139, 205);');
        par.appendChild(document.createTextNode(' Názov filmu: ' + naz));
        par.appendChild(document.createTextNode(' Rok vydania: ' + rok));
        par.appendChild(document.createTextNode(' Herci: ' + her));
        document.getElementById("filmy").appendChild(par);
    }
    if(naz && her && rok != null || ""){
        prvyzoznamf.forEach(addp);
        document.forms[0].reset();
        console.log(arr2); 
    }
    
    
}

let btndellast = document.getElementById('dellast');
btndellast.onclick = function(event){
    event.preventDefault();
    arr2.pop();
    console.log('******* Aktuálny zoznam filmov *******');
    console.log( arr2 )
    let menu = document.getElementById('filmy');
    menu.removeChild(menu.lastElementChild);
}
let btndelall = document.getElementById('delall');
btndelall.onclick = function(event){
    event.preventDefault();
    arr2.length = 0;
    console.log('******* Aktuálny zoznam filmov *******');
    console.log( 'Zoznam bol vymazaný' + arr2);
    let myDiv = document.getElementById("filmy");
    myDiv.innerHTML = "";
}
let f_name = document.folmular.film;
let R_name = document.folmular.rok_vydania;
let H_name = document.folmular.herci_;
let validmes = document.getElementById('mesage');
let validmes2 = document.getElementById('mesage2');
let validmes3 = document.getElementById('mesage3');

function valid(){
    if( f_name.value.length < 3 ){
        validmes.innerHTML = "pridaj viac znakov";
        validmes.style.color = "black";
        f_name.style.backgroundColor = "red";
        f_name.style.color = "white";
    }else if( f_name.value.length == 3 ){
        validmes.innerHTML = "OK";
        validmes.style.color = "black";
        f_name.style.backgroundColor = "rgb(10, 229, 25)";
        f_name.style.color = "black";
    }else if( f_name.value.length > 30 ){
        validmes.innerHTML = "Príliš dlhé";
        validmes.style.color = "black";
        f_name.style.backgroundColor = "red";
        f_name.style.color = "white";
    } 
}
function validrok(){
    if( R_name.value.length < 4 ){
        validmes2.innerHTML = "nespravny údaj";
        validmes2.style.color = "black";
        R_name.style.backgroundColor = "red";
        R_name.style.color = "white";
    }else if( R_name.value.length > 4 ){
        validmes2.innerHTML = "nespravny údaj";
        validmes2.style.color = "black";
        R_name.style.backgroundColor = "red";
        R_name.style.color = "white";
    }else if( R_name.value.length == 4 ){
        validmes2.innerHTML = "OK";
        validmes2.style.color = "black";
        R_name.style.backgroundColor = "rgb(10, 229, 25)";
        R_name.style.color = "black";
    }
}
function validher(){
    if( H_name.value.length < 6 ){
        validmes3.innerHTML = "nespravny údaj";
        validmes3.style.color = "black";
        H_name.style.backgroundColor = "red";
        H_name.style.color = "white";
    }
    if( H_name.value.length >= 6 ){
        validmes3.innerHTML = "OK";
        validmes3.style.color = "black";
        H_name.style.backgroundColor = "rgb(10, 229, 25)";
        H_name.style.color = "black";
    }
}





