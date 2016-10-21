define([
    'hbs!./address_detail',
    'hbs!./address_item',
    'bon-mot',
    'css!./address'
  ],
  function(
    tplAddressDetail,
    tplAddressItem,
    BonMot
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({});

    _export.Collection = BonMot.Collection.extend({
      model:_export.Model
    });

    _export.DetailView = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplAddressDetail,
      unique:'address-detail-view',
      uiBindings:['name', 'street','city','state','country'],
    });

    _export.ItemView = BonMot.View.extend({
      Model:_export.Model,
      hbsData:true,
      hbs:tplAddressItem,
      uiBindings:['name', 'street'],
      /**
       * Notice the absence of the .ctrlViewDetail function.
       */
    });

    return _export;
  });
