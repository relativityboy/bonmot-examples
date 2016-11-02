define([
    'jquery',
    'hbs!./person',
    'hbs!./address_item',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    $,
    tplPerson,
    tplAddressItem,
    BonMot,
    Address
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({
      _set:{
        editingAddress:Address.Model
      }
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplPerson,
      unique:'person-view',
      uiBindings:['firstName','lastName'],
      atrViews:{
        editingAddress:Address.DetailView,
        addressList:tplAddressItem
      },
      ctrlNewAddress:function() {
        this.model.set('editingAddress', {id:this.model.get('addressList').length});
        this.$ctrl.saveAddress.removeAttr('disabled');
      },
      ctrlSaveAddress:function(evt) {
        var addressList = _.clone(this.model.get('addressList'));

        addressList.push(this.model.get('editingAddress').toJSON());
        this.model.set('addressList', addressList);
      },
      ctrlViewDetail:function(evt) {
        var id = $(evt.currentTarget).data('id');
        _.each(this.model.get('addressList'),function(address) {
          if(address.id == id) {
            this.model.set('editingAddress', address);
            this.$ctrl.saveAddress.attr('disabled', 'disabled');
          }
        }, this);
      }
    });

    return _export;
});
