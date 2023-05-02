$(window).on("load", function() {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  felsorolasGeneralas();
  formazas();
  esemenykezeles1
  gomb();
  esemenykezeles3();
  esemenykezeles4();
});



function elemekElerese1() {
  const ELEM = $('#f1'); 
  console.log(ELEM);
}

function elemekElerese2() {
  const elem = $('#ide'); 
  const pElem = $('<p>').text("Jó reggelt!"); 
  elem.append(pElem); 
}

function elemekElerese3() {
  const elem = $('.ide'); 
  const pElem = $('<p>').text("Jó reggelt!");
  elem.append(pElem);
}

function felsorolasGeneralas() {
  const listaElem = $('.lista'); 
  let content = $('<ul>'); 
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 21) + 10; 
    content.append($('<li>').text(randomNumber)); 
  }
  listaElem.html(content); 
}

function formazas() {
  const Elem = $('.lista');
  Elem.addClass('formazott');
}
function esemenykezeles1() {
  $('.lista').click(function() {
    $('.kattintasutan').html($(this).html());
  });
}
$(document).ready(function() {
  esemenykezeles1();
});


function gomb() {
  const Elem2 = $('.feladat').eq(0);
  const gomb = $('<button>').text('Kattints ide!'); 
  Elem2.append(gomb); 
  var img = $('<img>', {
    src: 'magamrol.jpg',
    alt: 'Kép',
    width: '500',
    height: '300'
  });
  gomb.click(function() {
    const divElem = $('<div>').addClass('kepdiv');
    Elem2.append(divElem);
    divElem.append(img);
  });
}

function esemenykezeles3() {
  const kepElem = $('.feladta').find('.kepdiv');
  kepElem.hover(function() {
    $(this).css({'width': '700px', 'height': '500px'});
  }, function() {
    $(this).css({'width': '500px', 'height': '300px'});
  });
}
function esemenykezeles4() {
  $('.tarolo').find('div').each(function() {
  });
}
