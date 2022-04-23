const perNote1=0.3;
const perNote2=0.3;
const perNote3=0.4;
let outcomeNote;
let paragraph;


const honor = document.getElementById('button1');
const win = document.getElementById('button2');
const recover = document.getElementById('button3');
const misses = document.getElementById('button4');



   
    

function calculateHonor(){
    
    let name=document.getElementById("name").value;
    let noteOne=parseFloat(document.getElementById("noteOne").value);
    let noteTwo=parseFloat(document.getElementById("noteTwo").value);

    if (name.length<=3 || name.length>=15) {
          alert("El campo no puede estar vacío. Ni tener caracter menor que 3 ni mayor de 15");
    
    }
    if (noteOne<0 || noteOne>5) {
        alert("El campo no puede ser menor que 0, ni mayor que 5.");
   
    }
    if (noteTwo<0 || noteTwo>5) {
        alert("El campo no puede ser menor que 0, ni mayor que 5.");
   
    }
    

    outcomeNote=(noteOne*perNote1)+(noteTwo*perNote2);
    let sum=4-outcomeNote;
    let sum2=(sum*100)/40

    if (sum2>4 && sum2<5) {
        setTimeout(() => {
            paragraph=document.getElementById("paragraph");
            paragraph.textContent=(`${name} Puede estar en el cuadro de honor con una nota minima de ${sum2}`);
            paragraph.style.color="blue"
            
        }, 5000);
        
       
        
    
    }
  
}


function calculateWin(){
    let name=document.getElementById("name").value;
    let noteOne=parseFloat(document.getElementById("noteOne").value);
    let noteTwo=parseFloat(document.getElementById("noteTwo").value);


    outcomeNote=(noteOne*perNote1)+(noteTwo*perNote2);
    let sum=3.5-outcomeNote;
    let sum2=(sum*100)/40

    if (name.length<=3 || name.length>=15) {
        alert("El campo no puede estar vacío. Ni tener caracter menor que 3 ni mayor de 15");
  
  }
  if (noteOne<0 || noteOne>5) {
      alert("El campo no puede ser menor que 0, ni mayor que 5.");
 
  }
  if (noteTwo<0 || noteTwo>5) {
      alert("El campo no puede ser menor que 0, ni mayor que 5.");
 
  }
    if (sum2>3.4 && sum2<5) {
        setTimeout(() => {
            paragraph=document.getElementById("paragraph");
            paragraph.textContent=(`${name} Puede ganar la materia con una nota minima de ${sum2}`);
            paragraph.style.color="green"
            
        }, 5000);
        
    
    }

   
}

function calculateRetrieve(){
    let name=document.getElementById("name").value;
    let noteOne=parseFloat(document.getElementById("noteOne").value);
    let noteTwo=parseFloat(document.getElementById("noteTwo").value);


    outcomeNote=(noteOne*perNote1)+(noteTwo*perNote2);
    let sum=2-outcomeNote;
    let sum2=(sum*100)/40
    if (name.length<=3 || name.length>=15) {
        alert("El campo no puede estar vacío. Ni tener caracter menor que 3 ni mayor de 15");
  
  }
  if (noteOne<0 || noteOne>5) {
      alert("El campo no puede ser menor que 0, ni mayor que 5.");
 
  }
  if (noteTwo<0 || noteTwo>5) {
      alert("El campo no puede ser menor que 0, ni mayor que 5.");
 
  }

    if (sum2>1.9 && sum2<5) {
        setTimeout(() => {
            paragraph=document.getElementById("paragraph");
            paragraph.textContent=(`${name} Puede luchar por recuperar la materia con una nota minima de ${sum2}`);
            paragraph.style.color=null
            
        }, 5000);
       
    }
}

function calculateLose(){
    let name=document.getElementById("name").value;
    let noteOne=parseFloat(document.getElementById("noteOne").value);
    let noteTwo=parseFloat(document.getElementById("noteTwo").value);


    outcomeNote=(noteOne*perNote1)+(noteTwo*perNote2);
    let sum=2-outcomeNote;
    let sum2=(sum*100)/40

    if (name.length<=3 || name.length>=15) {
        alert("El campo no puede estar vacío. Ni tener caracter menor que 3 ni mayor de 15");
  
  }
  if (noteOne<0 || noteOne>5) {
      alert("El campo no puede ser menor que 0, ni mayor que 5.");
 
  }
  if (noteTwo<0 || noteTwo>5) {
      alert("El campo no puede ser menor que 0, ni mayor que 5.");
 
  }


    if (sum2>2 && sum2<5) {
        setTimeout(() => {
            paragraph=document.getElementById("paragraph");
            paragraph.textContent=(`${name} Pierde si se saca una nota minima de ${sum2}`);
            paragraph.style.color="red"
            
        }, 5000);
       
        
    }
}


honor.addEventListener('click', calculateHonor)
win.addEventListener('click', calculateWin)
recover.addEventListener('click', calculateRetrieve)
misses.addEventListener('click', calculateLose)



function colorChanger(){
    var selectValue=document.getElementById("mySelection").value;
    document.body.style.backgroundColor=selectValue;
}

