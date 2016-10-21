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
       * This function sets the parent view's model attribute 'editingAddress'
       * to this view's model.
       *
       * To do this we take advantage of the attribute .parentView, which is automatically
       * set on all BonMot instantiated child-views.
       *
       * For those who don't like the child-view knowing about it's parent and modifying parent
       * model data - see example 8a.
       * @param evt
       */
      ctrlViewDetail:function() {
        this.parentView.model.set('editingAddress', this.model);
      }
    });

    return _export;
  });
