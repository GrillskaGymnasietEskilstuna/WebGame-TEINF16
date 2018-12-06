/* Ett spel av TEINF16 */

var antalSpelare = 0; //Antalet spelare som spelar

var spelare = [
    {namn: "", pos: 0},
    {namn: "", pos: 0},
    {namn: "", pos: 0},
    {namn: "", pos: 0}
]

var currentPlayer = 0;
var goal = 10; // Målruta

function startGame(spelare) {
    antalSpelare = spelare;
    
    document.getElementById("spelare1input").style.display="none";
    document.getElementById("spelare2input").style.display="none";
    document.getElementById("spelare3input").style.display="none";
    document.getElementById("spelare4input").style.display="none";
    
    if(spelare > 0) 
        document.getElementById("spelare1input").style.display="initial";
    if(spelare > 1) 
        document.getElementById("spelare2input").style.display="initial";
    if(spelare > 2) 
        document.getElementById("spelare3input").style.display="initial";
    if(spelare > 3) 
        document.getElementById("spelare4input").style.display="initial";
    

    document.getElementById("start1").style.display="none";
    document.getElementById("spelareNamn").style.display="initial";
}

function startaSpelet() {

    if(antalSpelare > 0) {
        spelare[0].namn = document.getElementById("spelare1input").value;
        document.getElementById("spelare1").style.display="initial";
        
    }
    if(antalSpelare > 1) {
        spelare[1].namn = document.getElementById("spelare2input").svalue;
        document.getElementById("spelare2").style.display="initial";
        
    }
    if(antalSpelare > 2) {
        spelare[2].namn = document.getElementById("spelare3input").value;
        document.getElementById("spelare3").style.display="initial";
        
    }
    if(antalSpelare > 3) {
        spelare[3].namn = document.getElementById("spelare4input").value;
        document.getElementById("spelare4").style.display="initial";
    
    }

    //    alert(spelare1+" "+spelare2+" "+spelare3+" "+spelare4);
    
    document.getElementById("spelareNamn").style.display="none";
    document.getElementById("start").style.display="none";
    document.getElementById("game").style.display="initial";
    
    document.getElementById("dice").style.display="initial";
    //centrera dice
    var bodyRect = document.body.getBoundingClientRect();
    var diceRect = document.getElementById("dice").getBoundingClientRect();
    document.getElementById("dice").style.top = (bodyRect.bottom / 2) - ((diceRect.bottom - diceRect.top) / 2) + "px";
    document.getElementById("dice").style.left = (bodyRect.right / 2) - ((diceRect.right - diceRect.left) / 2) + "px";
    
    //Flytta toppar till start
    var ruta0 = document.getElementById("ruta-0").getBoundingClientRect();
    //alert(ruta0.bottom + " - " + ruta0.left);
    document.getElementById("spelare1").style.top = ruta0.top + "px";
    document.getElementById("spelare1").style.left = ruta0.left + "px";
    
    document.getElementById("spelare2").style.top = ruta0.top + "px";
    document.getElementById("spelare2").style.right = ruta0.right + "px";
    
    document.getElementById("spelare3").style.bottom = ruta0.bottom + "px";
    document.getElementById("spelare3").style.left = ruta0.left + "px";
    
    document.getElementById("spelare4").style.bottom = ruta0.bottom; + "px";
    document.getElementById("spelare4").style.right = ruta0.right + "px";
    
    currentPlayer = 1;
    
}
    
    
    function rollDice() {

        //Rulla tärning
        document.getElementById("dice_button").style.display="none";
        var diceRoll = Math.floor( Math.random() * 6 ) +1;
        document.getElementById("dice_text").innerHTML = diceRoll;
        
        
        //  Är i mål?
        if((spelare[currentPlayer-1].pos + diceRoll ) >= goal)
            alert("Grattis: " + [currentPlayer-1].namn + " !!! Du vann!");
        
        
        // Gå steg
        spelare[currentPlayer-1].pos += diceRoll;
        var ruta = document.getElementById("ruta-"+spelare[currentPlayer-1].pos).getBoundingClientRect();
        
        document.getElementById("spelare" + currentPlayer).style.top = ruta.top + "px";
        document.getElementById("spelare" + currentPlayer).style.left = ruta.left + "px";
        
        
        //Göm tärning och visa fråga
        document.getElementById("dice").style.display="none";
       
        
        
        // Ställ fråga
        visaCard();
        
        
        
        
}
    
function visaCard() {
    // centrera Card
    var bodyRect = document.body.getBoundingClientRect();
    var cardRect = document.getElementById("card").getBoundingClientRect();
    document.getElementById("card").style.top = (bodyRect.bottom / 2) - ((cardRect.bottom - cardRect.top) / 2) + "px";
    document.getElementById("card").style.left = (bodyRect.right / 2) - ((cardRect.right - cardRect.left) / 2) + "px";
    
    // slumpa en fråga
    var questionnr = Math.floor( Math.random() * fraga.length );

    // fylla i frågan
    
    document.getElementById("cardText").innerText = fraga[questionnr].text;
    document.getElementById("cardSvarA").innerText = fraga[questionnr].svarA;
    document.getElementById("cardSvarB").innerText = fraga[questionnr].svarB;
    document.getElementById("cardSvarC").innerText = fraga[questionnr].svarC;
    document.getElementById("cardSvarD").innerText = fraga[questionnr].svarD;

    
    
    
    // visa kortet
    
     document.getElementById("card").style.display="initial";
}

    //Spel frågor
    var fraga = [
    {text:"Vad står HTML för?",
    svarA:"Hyper Text Markup Language ",
    svarB:"Hyper Trade Marketing Line",
    svarC:"Hotmail",
    svarD:"High Total Metanephrine Level ",
     svar:"A" },
    
    {text:"Vad står css för?",
    svarA:"Counter style sheets",
    svarB:"Cascading Sheet Style",
    svarC:"Cascading Style Sheets",
    svarD:"Cascading style set",
     svar:"C" },
  
    {text:"Vad gör taggen <br> ?",
    svarA:"Den bryter inte raden så att texten du skriver efter kommer på nästa rad",
    svarB:"Den bryter raden så att texten du skriver efter kommer på nästa rad. ",
    svarC:"Den gör så att de blir stor bokstäver i raden.",
    svarD:"Den stänger ner ditt program.",
     svar:"A" },
    
    {text:"Vad är det första man skriver i ett HTML dokument?",
    svarA:"<head>",
    svarB:"!START",
    svarC:"!DOCTYPE",
    svarD:"<html>",
     svar:"C" },
   
    {text:"Hur stänger man taggen <p> ?",
    svarA:"Man skriver <stop>",
    svarB:"Man skriver <br>",
    svarC:"Man skriver </p>",
    svarD:"Man trycker på Escape knappen",
     svar:"C" },
     
    {text:"Vad är felet i denna kod? <img src=pic_trulli.jpg alt=Italian Trulli>",
    svarA:"Det saknas citationstecken",
    svarB:"Det fel tagg som används",
    svarC:"Trulli är inte ett fint hus. ",
    svarD:"alt= måste vara samma som bildens src=",
     svar:"A" },
    
    {text:"Med hjälp av vilken tagg kommenterar du i html?",
    svarA:"<  >",
    svarB:"<!-- -->",
    svarC:"<//  >",
    svarD:"/* */",
     svar:"B" },
           
    {text:"Med hjälp av vilken tagg kommenterar du i CSS?",
    svarA:"<  >",
    svarB:"<!-- -->",
    svarC:"<//  >",
    svarD:"/* */",
     svar:"D" },   
    
    {text:" Hur ändrar man färg på taggen “h1” i css till färgen blå? - h1 {color: “blue”}",
    svarA:"<h1=blue>",
    svarB:"h1 is blue",
    svarC:" h1 <color: blue>",
    svarD:"h1 {color: blue}",
     svar:"D" },
            
    {text:"Hur ändrar man bakgrundsfärg till blå i html?",
    svarA:"style=background-color:blue;",
    svarB:"style=background-color=blue;",
    svarC:"background-color:blue",
    svarD:"Background-color=blue",
     svar:"A" },
            
    {text:"Hur kan man använda Å i html? å = &aring;",
    svarA:"{a#’}",
    svarB:"&aring;",
    svarC:"<a+’>",
    svarD:"a+ring",
     svar:"B" },
            
    {text:"Vad menas med webbdesign?",
    svarA:"Att i ett program rita upp ett spindelnät",
    svarB:"Att designa hur din webbläsare ska se ut, tex Google Chrome eller Mozilla Firefox",
    svarC:"Att ge utseende och funktioner till en hemsida.",
    svarD:"Att skapa ett program",
     svar:"C" },
            
    {text:"Finns det en skillnad mellan frontend och backend. Sant eller falskt?",
    svarA:"Sant",
    svarB:"Falskt",
    svarC:"Kanske",
    svarD:"Vet inte",
     svar:"A" },
            
    {text:"Med hjälp av vilken tagg gör man största möjliga rubrik?",
    svarA:"<h1000>",
    svarB:"<h100>",
    svarC:"<h10>",
    svarD:"<h1>",
     svar:"D" },
            
    {text:"Vad används taggen <ul> till? ",
    svarA:"Att göra en ordnad lista.",
    svarB:"Taggen finns inte.",
    svarC:" Att göra en icke ordnad lista.",
    svarD:"Att skapa en text med linje under (underline)",
     svar:"C" },
            
    {text:"Vad används taggen <ol> till?",
    svarA:"Att skapa en text med linje över(overline)",
    svarB:"Att göra en ordnad lista. ",
    svarC:"Att göra en organiserad lista.",
    svarD:"Att göra en icke ordnad lista.",
     svar:"B" },
            
    {text:" Vad är den korrekta taggen för att göra en checkbox? (kryssa-i-låda)",
    svarA:"<checkbox>",
    svarB:"<checkbox=true>",
    svarC:"<input ''type=checkbox''>",
    svarD:"<add checkbox>",
     svar:"C" },
    
     {text:"I vilken sektion skriver du in metadata?",
      svarA:"I sektion <meta>",
      svarB:"I sektion <head>",
      svarC:"I sektion <body>",
      svarD:"I sektion <info>",
      svar:"B"},
    
      {text:"Vad gör taggen <b>",
      svarA:"Den gör en ny rad",
      svarB:"Den skriver i fetstil",
      svarC:"Den gör en rubrik",
      svarD:"Taggen finns inte",
      svar:"B"},
         
      {text:"Vad gör taggen <i>?",
      svarA:"Den ger kort info om koden",
      svarB:"Den skriver i kursiv stil",
      svarC:"Den gör en underrubrik",
      svarD:"Taggen finns inte",
      svar:"B"},
        
      {text:"Vilken tagg används för att informera användare som inte har javascript aktiverat?",
      svarA:"<noscript></noscript>",
      svarB:"<nojava></nojava>",
      svarC:"<javanf></javanf>",
      svarD:"<javascript></javascript>",
      svar:"A"},
          
      {text:"Finns taggen <h6>?",
      svarA:"Sant",
      svarB:"Falskt",
      svarC:"Kanske",
      svarD:"Vet inte",
      svar:"A"},
          
      {text:"I vilken sektion ska man länka in css?",
      svarA:"I <head>",
      svarB:"I <body>",
      svarC:"I <meta>",
      svarD:"I <p>",
      svar:"A"},
          
      {text:"Vilken av dessa css syntax är korrekt för att göra så att alla <p> taggar blir i fetstil?",
      svarA:"<p> {text-size:bold;}",
      svarB:"<p style=''font-size:bold;''>",
      svarC:"<p> {font-weight:bold;}",
      svarD:"<p style=''text-size:bold;''>",
      svar:"C"},
          
      {text:"Hur lägger du till bakgrundsfärg för alla <h1> element?",
      svarA:"h1 <background-color:#FFFFFF;>",
      svarB:"<h1> {background-color:#FFFFFF;}",
      svarC:"h1 {background-color:#FFFFFF;}",
      svarD:"h1={background-color:#FFFFFF;}",
      svar:"C"},
          
      {text:"Hur gör du en lista som listar sina saker med rutor",
      svarA:"list-style-type:cube;",
      svarB:"list-style-type: square;",
      svarC:"list-type: cube;",
      svarD:"list-type: four;",
      svar:"B"},
      
       {text:"Hur väljer du ut ett element med id: demo?",
      svarA:"id ''demo''",
      svarB:"<demo>",
      svarC:"#demo",
      svarD:"!demo",
      svar:"C"},
       
       {text:"Vem/vilka skapade HTML?",
      svarA:"Nicholas Drain",
      svarB:"Tim Berners-Lee",
      svarC:"Harry Tale och Martin Lee",
      svarD:"Jeff Ahl",
      svar:"B"}, 
    
       {text:"Vilken tagg används för att definera viktig text?",
      svarA:"<imp>",
      svarB:"<define>",
      svarC:"<it>",
      svarD:"<strong>",
      svar:"D"},
     
       {text:"Vilken tagg används för att definera betonad text?",
      svarA:"<em>",
      svarB:"<et>",
      svarC:"<defemp>",
      svarD:"<det>",
      svar:"A"},
     
       {text:"Vilken kod är korrekt för att skapa en hyperlänk till google?",
      svarA:"<a href=''http://www.google.com''>Google</a>",
      svarB:"<href a=''http://www.google.com''>Google</a>",
      svarC:"<a href=''http://www.google.com''</a>",
      svarD:"<a href=''''>Google</a>",
      svar:"A"},
     
       {text:"Vilken symbol används för att indikera en sluttagg?",
      svarA:";",
      svarB:"/",
      svarC:"#",
      svarD:"&",
      svar:"B"},
     
       {text:"Vilken kod är korrekt för att göra en checkbox?",
      svarA:"<input type=checkbox>",
      svarB:"<input object=''checkbox''>",
      svarC:"<input type=''checkbox''>",
      svarD:"<input type ''checkbox''>",
      svar:"C"},
     
       {text:"Vilken kod är korrekt för att lägga in en bild?",
      svarA:"<img src='image.image' ctrl='MyImage'>",
      svarB:"<img src='image.gif' ctrl='MyImage'>",
      svarC:"<img src='image.image' alt='MyImage'>",
      svarD:"<img src='image.gif' alt='MyImage'>",
      svar:"D"},
     
       {text:"Vad gör taggen <title> ?",
      svarA:"Det ger ett namn på själva webbläsarens flik.",
      svarB:"Den gör en rubrik som blir lite större",
      svarC:"Den gör stora bokstäver",
      svarD:"Taggen finns inte",
      svar:"A"},
     
       {text:"Vilket HTML element definerar en titel för ett document?",
      svarA:"<title>",
      svarB:"<titel>",
      svarC:"[title]",
      svarD:"<insert title>",
      svar:"A"},
     
       {text:"Vilken doctype är korrekt för HTML5?",
      svarA:"<!DOCTYPE html>",
      svarB:"<!doctype html>",
      svarC:"<insert html>",
      svarD:"<!DOCTYPE>",
      svar:"A"},
     
       {text:"Vad gör taggen “<u>”?",
      svarA:"Det är en understruken linje med text.",
      svarB:"Det är den minsta sortens text.",
      svarC:"Det är en underbar text,",
      svarD:"Det är en understruken linje under text.",
      svar:"A"},
     
       {text:"Which input type defines a slider control?",
      svarA:"Length ",
      svarB:"Range",
      svarC:"Slider",
      svarD:"Strong",
      svar:"B"},
    
      {text:"Vilket HTML element definerar navigationslänkar?",
      svarA:"<navigate>",
      svarB:"<nav>",
      svarC:"<navigation>",
      svarD:"<nav.link>",
      svar:"B"},
    
      {text:"Vad gör taggen <pt>?",
      svarA:"Den gör ett nytt stycke",
      svarB:"Den gör en randomizer",
      svarC:"Den gör text som endast visas under vissa tider ",
      svarD:"Taggen finns inte",
      svar:"D"},
    

    
    
    ]



