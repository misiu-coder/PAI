let kontener = document.getElementById('kontenerselect');
let html = '';

for (let i = 0; i < 10; i++) {
    html += `<select id="select-${i}">`;
    for (let j = 0; j < 10; j++) {
        html += `<option value="${j}">${j}</option>`;
    }
    html += '</select><br>';
}

kontener.innerHTML = html;

function liczPesel() {
    let pesel = '';
    for (let i = 0; i < 10; i++) {
        pesel += document.getElementById(`select-${i}`).value;
    }

    let rok = pesel.substring(0, 2);
    let miesiac = pesel.substring(2, 4);
    let dzien = pesel.substring(4, 6);
    let plec = pesel.charAt(9);

    let pelnyRok;
    let pelnyMiesiac;

    if (parseInt(miesiac) > 80) { 
        pelnyRok = "21" + rok;
        pelnyMiesiac = parseInt(miesiac) - 80;
    } else if (parseInt(miesiac) > 60) { 
        pelnyRok = "22" + rok;
        pelnyMiesiac = parseInt(miesiac) - 60;
    } else if (parseInt(miesiac) > 40) { 
        pelnyRok = "21" + rok;
        pelnyMiesiac = parseInt(miesiac) - 40;
    } else if (parseInt(miesiac) > 20) { 
        pelnyRok = "20" + rok;
        pelnyMiesiac = parseInt(miesiac) - 20;
    } else { 
        pelnyRok = "19" + rok;
        pelnyMiesiac = parseInt(miesiac);
    }

    
    let plecOpis = (plec % 2 === 0) ? "Kobieta" : "Mężczyzna";


    let wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]; 
    let sumaKontrolna = 0;

    for (let i = 0; i < 10; i++) {
        sumaKontrolna += parseInt(pesel.charAt(i)) * wagi[i];
    }

    let cyfraKontrolna = (10 - (sumaKontrolna % 10)) % 10;

    pesel += cyfraKontrolna;

    document.getElementById('pesel').textContent = pesel;
    document.getElementById('rok').textContent = pelnyRok;
    document.getElementById('miesiac').textContent = pelnyMiesiac.toString().padStart(2, '0');
    document.getElementById('dzien').textContent = dzien;
    document.getElementById('plec').textContent = plecOpis;
    document.getElementById('cyfraKontrolna').textContent = cyfraKontrolna;
}
