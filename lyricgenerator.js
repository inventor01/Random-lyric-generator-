var songs = ["Why do birds suddenly appear? Every time that you are near, baby? Just like me they long to be Close to you On the day that you were born The angels got together And decided to create a dream come true So they sprinkled moon dust in your hair of golden starlight in your eyes so true","I'll be the boyfriend in your wet dreams tonight Noses on a rail, little virgin wears the white You cut your hair but you used to live a blonded life Wish I was there, wish we'd grown up on the same advice And our time was right ", "I don't stand in line, I don't pay for clubs, Fuck that But I wait for you I don't like to drink, I don't like to think, Fuck that But I ponder you I'm bending it over You're my four leaf clover I'm so in love, so in love There's no one above up above Forever's a long time, yes"];

var raps = ["Answer this question and I'll answer what you asking me What happened if we got in an accident died tragically And convinced me that we not meant to be that have to be And like the defending champs you had to win it all back for me Just got to know how deep is our love actually What if this was the end and we had to bow out together I need you to tell me every emotion like now or never Only two times I ever needed you was now and forever Don't know what else to tell you"," First take You ain't on time, you were late When you around me, you're safe You can't go off of a heresay I know that look on your face You think you winnin' a race You think all I do is play I didn't put you in your place Then why you still here in my place? ", " Every time you go to sleep you look like you in Heaven Plus the head game is stronger than a few Excedrin You shine just like the patent leather on my new 11's You read me like a book like I'm the Bible, you the Reverend Yeah, I wanna tell the truth to you I wanna talk about my days as a youth to you Exposing you to all my demons and the reasons I'm this way I would like to paint a picture, but it'll take more than a day ", ];

var artist = ["Big sean", "Travis Scott", "J cole","Stevie Wonder", "Frank Ocean", "Daneil Ceazer"];
var songn = ["Close to you","Self Control", "Japanese Denim", "London Bridge", "First take","Shes mine pt.1"];


function getSong(){
switch(document.getElementById("i").value = songs[Math.floor((Math.random() * 3) )]) {
    case songs[0]:
        document.getElementById("a").value = artist[3];
        document.getElementById("a2").value =songn[0];
        break;
    case songs[1]:
        document.getElementById("a").value = artist[4];
        document.getElementById("a2").value = songn[1];
        break;
    case songs[2]:
        document.getElementById("a").value =artist[5];
        document.getElementById("a2").value = songn[2];
        break;
    default:
        document.getElementById("a").value = "Artist Unknown";
        document.getElementById("a2").value = "Song title Unknown";
      }
}

function getRap(){
switch(document.getElementById("i").value = raps[Math.floor((Math.random() * 3) )]) {
    case raps[0]:
        document.getElementById("a").value = artist[0];
        document.getElementById("a2").value =songn[3];
        break;
    case raps[1]:
        document.getElementById("a").value = artist[1];
        document.getElementById("a2").value = songn[4];
        break;
    case raps[2]:
        document.getElementById("a").value =artist[2];
        document.getElementById("a2").value = songn[5];
        break;
    default:
        document.getElementById("a").value = "Artist Unknown";
        document.getElementById("a2").value = "Song title Unknown";
}
}
