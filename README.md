[![Build Status](https://travis-ci.org/sergiolepore/param_replacer.png?branch=master)](https://travis-ci.org/sergiolepore/param_replacer)

## EN: Parameter Replacer for NodeJS

This is a NodeJS module used to replace parameters enclosed between "%" within a string.
The project was initially conceived as a practical exercise of an article on my blog.
For more info, check out my site (in Spanish): http://www.sergiolepore.net/2012/10/18/como-construir-un-modulo-de-nodejs-e-integrarlo-con-npm/

## ES: Replacer de parámetros en NodeJS

Este es un módulo de NodeJS que sirve para reemplazar parámetros encerrados entre % dentro de un string.
El proyecto fue realizado como ejercicio prático de un artículo en mi blog.
Para más info, ingresar en: http://www.sergiolepore.net/2012/10/18/como-construir-un-modulo-de-nodejs-e-integrarlo-con-npm/

## Instalación || Installation

    npm install param_replacer

## Uso || Usage

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