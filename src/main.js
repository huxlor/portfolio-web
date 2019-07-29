require('bootstrap-grid');
require('./styles.scss');

let infoProyectos = require('./portfolio_info');


(function($) {

	jQuery(document).ready(function($) {

        infoProyectos.forEach((element) => {
            console.log(element.empresa);
            $('.projects__container ul').append(`
                <li style="background-image: url('${element.image}')">
                    <div class="overlay">
                        <div class="project">${element.proyecto}</div>
                        <div class="rol">${element.rol}</div>
                        <div class="empresa">${element.empresa}</div>
                        <a href="${element.url}">View</a>
                    </div>
                </li>`);
        });

    });


})(jQuery);

