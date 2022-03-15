
/*-------------- Terminal Popup ------------- */

var modal = document.getElementById("terminalWindow");


var btn = document.getElementById("popup");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal ) {
        modal.style.display = "none";
    }
}



/*-------------- Card Popup ------------- */

var modal2 = document.getElementById("card"); 

var btn2 = document.getElementById("mailButton");
var btn3 = document.getElementById("artButton");
var btn4 = document.getElementById("profilButton");
var btn5 = document.getElementById("diplomaButton");


var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function() {
    modal2.style.display = "flex";
    document.getElementById("cardTitle").innerHTML = "Mail";
    // document.getElementById("cardParagraph").innerHTML = "vincent.descatoire@gmail.com"
    document.getElementById("cardParagraph").innerHTML = `
    <form id="mailForm" action="../controller/mail.php" method="post">
        <input type="text" name="object" placeholder="object" class="mailObject">
        <input type="text" name="subject" placeholder="subject" class="mailSubject">
        <input type="submit" value="send" class="submitButton">
    </form>
  `

}

btn3.onclick = function() {
    modal2.style.display = "flex";
    document.getElementById("cardTitle").innerHTML = "Previous work";
    document.getElementById("cardParagraph").innerHTML='<object type="text/html" data="../controller/portfolio.html" ></object>';
}

btn4.onclick = function() {
    modal2.style.display = "flex";
    document.getElementById("cardTitle").innerHTML = "Profil";
    document.getElementById("cardParagraph").innerHTML = `
    💻 : my daily OS : Arch, macOs<br>
    🚀 : I write in { .sh | .py | .php | .c }<br>
    ⌨️ : IDE → vim<br>
    ⚔️ : personal website : in construction<br>
    🎹 : hobbies include music, painting, and photographie<br>
    🐱 : cat owner and pet lover
    ` 

}

btn5.onclick = function() {
    modal2.style.display = "flex";
    document.getElementById("cardTitle").innerHTML = "Diploma";
    document.getElementById("cardParagraph").innerHTML = `
    DUT : Computer Science <br>
    &emsp;&emsp;&emsp;September 2020 | August 2022<br>
    &emsp;&emsp;&emsp;IUT Lyon 1<br>
    Bachelor : Audio Production<br>
    &emsp;&emsp;&emsp;September 2017 | August 2019<br>
    &emsp;&emsp;&emsp;SAE Institute Oxford<br>
    Baccalauréat : Science<br>
    &emsp;&emsp;&emsp;September 2016 | August 2017<br>
    &emsp;&emsp;&emsp;Institute Jean-Paul II Compiègne
    `

    // document.getElementById("cardParagraph").innerHTML='<object type="text/html" data="../controller/diploma.html" ></object>';

}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2 ) {
        modal2.style.display = "none";
    }
}

