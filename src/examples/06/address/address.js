define([
    'hbs!./address',
    'bon-mot',
    'css!./address'
  ],
  function(
    tplAddress,
    BonMot
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({});

    _export.Collection = BonMot.Collection.extend({
      model:_export.Model
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplAddress,
      unique:'address-app',
      uiBindings:['street','city','state','country'],
    });

    return _export;
  });
