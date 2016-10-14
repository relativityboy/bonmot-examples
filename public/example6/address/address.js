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

    _export.Collection = BonMot.Collection.extend({});

    _export.View = BonMot.View.extend({
      hbs:tplAddress,
      unique:'address-app',
      uiBindings:['street','city','state','country'],
      //needsModel:true
    });

    return _export;
  });
