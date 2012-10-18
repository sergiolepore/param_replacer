## Replacer de parámetros en NodeJS

Este es un módulo de NodeJS que sirve para reemplazar parámetros encerrados entre % dentro de un string.
El proyecto fue realizado como ejercicio prático de un artículo en mi blog.
Para más info, ingresar en: http://www.sergiolepore.net/2012/10/18/como-construir-un-modulo-de-nodejs-e-integrarlo-con-npm/

## Instalación

    npm install param_replacer

## Uso

    var param_replacer = require('param_replacer');

    var objetivo = "%hello% %world%! -- %world% %hello%!";
    var idioma = "es";
    var reemplazos = {
      "en": {
        "hello": "Hello",
        "world": "World"
      },
      "es": {
        "hello": "Hola",
        "world": "Mundo"
      }
    };

    var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

    console.log(resultado);