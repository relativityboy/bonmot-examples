define([
    'hbs!./address_detail',
    'bon-mot',
    'css!./address'
  ],
  function(
    tplAddressDetail,
    BonMot
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({});

    _export.Collection = BonMot.Collection.extend({
      model:_export.Model
    });

    _export.DetailView = BonMot.View.extend({
      Model:_export.Model,
      tpl:tplAddressDetail,
      unique:'address-detail-view',
      uiBindings:['name', 'street','city','state','country'],
      initialize:function() {
        this.on('setModel', function() {
          for(var i in this.bindings) if(this.bindings.hasOwnProperty(i)) {
            this.$elf(i).removeAttr('disabled');
          }
        }, this);

        this.on('unsetModel', function() {
          for(var i in this.bindings) if(this.bindings.hasOwnProperty(i)) {
            this.$elf(i).attr('disabled', 'disabled');
          }
        }, this);
      }
    });

    return _export;
  });
