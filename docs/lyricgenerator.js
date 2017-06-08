var songs = ["Hey, hey, hey I got a condo in Manhattan Baby girl, what's hatnin'? You and your ass invited So gon' and get to clappin' So pop it for a player Pop, pop it for me Turn around and drop it for a player Drop, drop it for me I'll rent a beach house in Miami Wake up with no jammies (Nope) Lobster tail for dinner Julio serve that scampi (Julio!) You got it if you want it Got, got it if you want it Said you got it if you want it Take my wallet if you want it now","If it isn't love Why do I feel this way (Why does it hurt so bad?) Why does she stay on my mind (On my mind all the time) If it isn't love Why does it hurt so bad (If it isn't love) Make me feel so sad inside (If it isn't love) If it isn't love If it isn't love Why do I feel this way Why does she stay on my mind (She stays on my mind, mind, mind) If it isn't love Why does it hurt so bad (Why does it hurt so bad?) Make me feel so sad inside ", "I don't stand in line, I don't pay for clubs, Fuck that But I wait for you I don't like to drink, I don't like to think, Fuck that But I ponder you I'm bending it over You're my four leaf clover I'm so in love, so in love There's no one above up above Forever's a long time, yes"];

var raps = ["Answer this question and I'll answer what you asking me What happened if we got in an accident died tragically And convinced me that we not meant to be that have to be And like the defending champs you had to win it all back for me Just got to know how deep is our love actually What if this was the end and we had to bow out together I need you to tell me every emotion like now or never Only two times I ever needed you was now and forever Don't know what else to tell you"," First take You ain't on time, you were late When you around me, you're safe You can't go off of a heresay I know that look on your face You think you winnin' a race You think all I do is play I didn't put you in your place Then why you still here in my place? ", " Every time you go to sleep you look like you in Heaven Plus the head game is stronger than a few Excedrin You shine just like the patent leather on my new 11's You read me like a book like I'm the Bible, you the Reverend Yeah, I wanna tell the truth to you I wanna talk about my days as a youth to you Exposing you to all my demons and the reasons I'm this way I would like to paint a picture, but it'll take more than a day ","" ];

var artist = ["Big sean", "Travis Scott", "J cole","Bruno Mars", "  New Edition", "Daneil Ceazer"];
var songn = ["What I like","If it isn't Love", "Japanese Denim", "London Bridge", "First take","Shes mine pt.1"];


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
