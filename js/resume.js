(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function hover(element) {
    if (element.id == "denuncia") {
        element.setAttribute('src', 'img/botones%20psc-denuncia.png');
    }
    else if (element.id == "antecedentes") {
        element.setAttribute('src', 'img/botones%20psc-antec.png');
    }
    else if (element.id == "pqrs") {
        element.setAttribute('src', 'img/botones%20psc-pqrs.png');
    }
    else if (element.id == "cnp") {
        element.setAttribute('src', 'img/botones%20psc-cnp.png');
    }
    else if (element.id == "empresas") {
        element.setAttribute('src', 'img/empresas.png');
    }
    else if (element.id == "reporte_hurto_celular") {
        element.setAttribute('src', 'img/botones%20psc-celular.png');
    }
    else if (element.id == "documento_extraviado") {
        element.setAttribute('src', 'img/botones%20psc-doc.png');
    }
    else if (element.id == "hurto_comercio") {
        element.setAttribute('src', 'img/botones-hurto-comercio.png');
    }
    else if (element.id == "hurto_personas") {
        element.setAttribute('src', 'img/botones-hurto-personas.png');
    }
    else if (element.id == "hurto_residencia") {
        element.setAttribute('src', 'img/botones-hurto-residencias.png');
    }
    else if (element.id == "delitos_informatico") {
        element.setAttribute('src', 'img/botones-delito-informarico.png');
    }
    else if (element.id == "pornografia_infantil") {
        element.setAttribute('src', 'img/botones-pornografia-infantil.png');
    }
    else if (element.id == "extorsi") {
        element.setAttribute('src', 'img/extorsion.png');
    }
    else if (element.id == "salas") {
        element.setAttribute('src', 'img/salas.png');
    }
    else if (element.id == "falsedad") {
        element.setAttribute('src', 'img/botones-falsdoc1.png');
    }

}



function unhover(element) {
    if (element.id == "denuncia") {
        element.setAttribute('src', 'img/botones%20psc-denuncia1.png');
    }
    else if (element.id == "antecedentes") {
        element.setAttribute('src', 'img/botones%20psc-antec1.png');
    }
    else if (element.id == "pqrs") {
        element.setAttribute('src', 'img/botones%20psc-pqrs1.png');
    }
    else if (element.id == "cnp") {
        element.setAttribute('src', 'img/botones%20psc-cnp1.png');
    }
    else if (element.id == "empresas") {
        element.setAttribute('src', 'img/empresas1.png');
    }
    else if (element.id == "reporte_hurto_celular") {
        element.setAttribute('src', 'img/botones%20psc-celular1.png');
    }
    else if (element.id == "documento_extraviado") {
        element.setAttribute('src', 'img/botones%20psc-doc1.png');
    }
    else if (element.id == "hurto_comercio") {
        element.setAttribute('src', 'img/botones-hurto-comercio1.png');
    }
    else if (element.id == "hurto_personas") {
        element.setAttribute('src', 'img/botones-hurto-personas1.png');
    }
    else if (element.id == "hurto_residencia") {
        element.setAttribute('src', 'img/botones-hurto-residencias1.png');
    }
    else if (element.id == "delitos_informatico") {
        element.setAttribute('src', 'img/botones-delito-informarico1.png');
    }
    else if (element.id == "pornografia_infantil") {
        element.setAttribute('src', 'img/botones-pornografia-infantil1.png');
    }
    else if (element.id == "extorsi") {
        element.setAttribute('src', 'img/extorsion_1.png');
    }
    else if (element.id == "salas") {
        element.setAttribute('src', 'img/salas_1.png');
    }
    else if (element.id == "falsedad") {
        element.setAttribute('src', 'img/botones-falsdoc0.png');
    }
}
