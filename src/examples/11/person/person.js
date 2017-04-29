define([
    'jquery',
    'underscore',
    'hbs!./person',
    'hbs!./address_item',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    $,
    _,
    tplPerson,
    tplAddressItem,
    BonMot,
    Address
  ) {

    var _export = {};
    var i = 3000;
    _export.Model = BonMot.Model.extend({
      _set:{
        editingAddress:Address.Model
      }
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      tpl:tplPerson,
      unique:'person-view',
      uiBindings:['firstName','lastName'],
      atrViews:{
        editingAddress:Address.DetailView,
        addressList:tplAddressItem //this is an HBS template, but it could also be a simple string, or a function returning a string.
      },

      ctrlNewAddress:function() {
        i++; //I cheat. It starts @ 3000!
        this.model.set('editingAddress', {id:i});
        this.$ctrl.saveAddress.removeAttr('disabled');
      },
      //save is a bit more complex since we're not using a Collection here.
      ctrlSaveAddress:function(evt) {
        var editingAddress = this.model.get('editingAddress').toJSON(),
          addressList = _.clone(this.model.get('addressList'));
        _.each(addressList, function(address, j) {
            if(address.id == editingAddress.id) {
              addressList[j] = editingAddress;
              editingAddress = false;
            }
        });
        if(editingAddress) {
          addressList.push(editingAddress);
        }

        this.model.unset('editingAddress');
        this.$ctrl.saveAddress.attr('disabled', 'disabled');
        this.model.set('addressList', addressList);
      },
      ctrlSortBy:function(evt) {
        var addressList = this.model.get('addressList'),
          sortAtr = $(evt.currentTarget).data('sort-by');

        this.model.set('addressList', _.sortBy(addressList, sortAtr));
      },
      ctrlViewDetail:function(evt) {
        var id = $(evt.currentTarget).data('id');
        _.each(this.model.get('addressList'),function(address) {
          if(address.id == id) {
            this.model.set('editingAddress', address);
            this.$ctrl.saveAddress.removeAttr('disabled');
          }
        }, this);
      }
    });

    return _export;
});
