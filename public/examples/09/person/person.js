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
      },

      /**
       * PHILOSOPHY: This is another way of setting the 'editingAddress' property (prev described in example 8.
       * We keep model manipulation within the model's own view.
       * HOWEVER, we do bind to control elements within the child-view's html. This is arguably the
       * better approach, since the parent _must_ know about the child, but the child doesn't need to know about the
       * parent. Still, some may not like it.
       *
       * To do this, we take advantage of an aspect of BonMot views.. They set the  CID (a Backbone generated page-level
       * unique id) of the current model on their root-element in a data attribute 'data-m-cid'.
       *
       * Since in this case the entire view is a control, retrieving the correct model from the addressList collection
       * is trivial.
       *
       * @param evt
       */
      ctrlViewDetail:function(evt) {
        var cid = $(evt.currentTarget).data('m-cid');
        this.model.set('editingAddress', this.model.get('addressList').get(cid));
      }
    });

    return _export;
});
