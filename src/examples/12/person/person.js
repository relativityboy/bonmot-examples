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
      _set:{
        editingAddress:Address.Model
      },
      _setCollections:{
        addressList:Address.Collection
      }
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      tpl:tplPerson,
      unique:'person-view',
      uiBindings:['firstName','lastName'],
      atrViews:{
        editingAddress:Address.DetailView,
        addressList:Address.ItemView
      },
      ctrlNewAddress:function() {
        this.model.set('editingAddress', {});
        this.model.get('addressList').add(this.model.get('editingAddress'));
      },
      ctrlDeleteAddress:function() {
        this.model.get('editingAddress').dispose();

      },
      ctrlSortBy:function(evt) {
        var addressList = this.model.get('addressList'),
          sortAtr = $(evt.currentTarget).data('sort-by');

        addressList.comparator = sortAtr;
        addressList.sort();
      },
      ctrlViewDetail:function(evt) {
        var cid = $(evt.currentTarget).data('m-cid');
        this.model.set('editingAddress', this.model.get('addressList').get(cid));
      }
    });

    return _export;
});
