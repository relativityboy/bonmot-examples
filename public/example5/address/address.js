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
    /**
     * We could have used a vanilla BonMot.Model here, but good practice is GOOD.
     */
    _export.Model = BonMot.Model.extend({});

    /**
     * A very simple Address View
     */
    _export.View = BonMot.View.extend({
      hbs:tplAddress,
      unique:'address-app',
      uiBindings:['street','city','state','country'],
    });

    return _export;
  });
