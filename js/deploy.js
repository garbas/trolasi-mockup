
requirejs.config({
  shim: {
    jhere: { deps: ['jquery'] },
    bootstrap_typeahead: { deps: ['jquery'], exports: '$.fn.typeahead.Constructor' }
  }
});

require([ 'app' ]);
