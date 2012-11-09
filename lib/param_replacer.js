exports.replace = function(objetivo, reemplazos) {
  var param_encontrados = objetivo.match(/%(.*?)%/g);

  if (param_encontrados) {
    var nombre_param = null,
        valor_reemplazo = null,
        multi_params = null;

    for (var i=0; i<param_encontrados.length; i++) {
      nombre_param = param_encontrados[i].replace(/%/g, '');
      // for params defined as JSON, ie: %languages.en.i18n%, split them
      multi_params = nombre_param.split('.');

      valor_reemplazo = reemplazos;
      // for every key/param, walk on JSON replacements until finished
      for (var j=0; j<multi_params.length; j++) {
        if (typeof valor_reemplazo == 'undefined') {
          //reached the end of the walk
          break;
        }
        valor_reemplazo = valor_reemplazo[multi_params[j]];
      }

      if (valor_reemplazo) {
        objetivo = objetivo.replace(param_encontrados[i], valor_reemplazo);
      }
    }
  }

  return objetivo;
};