
/* ------------------------------------------ */
/* -- Inhalte laden                           */
/* -- ---------------- ---------------------- */
   function load_content(bereich, page) {
      let obj1 = document.getElementById(bereich);   
       $(obj1).load('/' + page, function () {
      });
    }

// Countdown anstoßen
const duration_links = 10; 
const duration_rechts = 7; 

function countdown_links (counter_links) {
  
  var l1 = document.getElementById('links_1');
  var l2 = document.getElementById('links_2');
  
  if (counter_links == undefined) {
    // Startwert
    counter_links = duration_links;
  }
 
  //alert(li);
  if (counter_links > 0) {
    counter_links--;
    // Funktion verzögert aufrufen
    var timeout = window.setTimeout('countdown_links(' + counter_links + ')', 1000);
  } else {
     if (l1.style.display == "none") {
          l1.style.display = "block";
          l2.style.display = "none";
     } else {
          l1.style.display = "none";
          l2.style.display = "block";
     }
    // Startwert
    var timeout = window.setTimeout('countdown_links(' + duration_links + ')', 1000);
    
  }
}

function countdown_rechts (counter_rechts) {
  
  var r1 = document.getElementById('rechts_1');
  var r2 = document.getElementById('rechts_2');
  
  if (counter_rechts == undefined) {
    // Startwert
    counter_rechts = duration_rechts;
  }
 
  //alert(li);
  if (counter_rechts > 0) {
    counter_rechts--;
    // Funktion verzögert aufrufen
    var timeout = window.setTimeout('countdown_rechts(' + counter_rechts + ')', 1000);
  } else {
     if (r1.style.display == "none") {
          r1.style.display = "block";
          r2.style.display = "none";
     } else {
          r1.style.display = "none";
          r2.style.display = "block";
     }
    // Startwert
    var timeout = window.setTimeout('countdown_rechts(' + duration_rechts + ')', 1000);
  }
}

countdown_links(duration_links);
countdown_rechts(duration_rechts);

