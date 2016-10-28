define([
    'jquery',
    'hbs!./person',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    $,
    tplPerson,
    BonMot,
    Address
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({
      _setCollections:{
        addressList:Address.Collection
      }
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplPerson,
      unique:'person-view',
      uiBindings:['firstName','lastName'],
      atrViews:{
        editingAddress:Address.DetailView,
        addressList:Address.ItemView
      }/*,
      ctrlViewDetail:function(evt) {
        var $control = $(evt.currentTarget);
        var cid = $control.data('m-cid');
        var editAddress = this.model.get('addressList').get(cid);
        this.model.set('editingAddress', editAddress);
      } */
    });

    return _export;
});
