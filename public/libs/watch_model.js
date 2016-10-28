define(['bon-mot'], function(BonMot) {

  var _exports = {};


  _exports.View = BonMot.View.extend({
    Model:BonMot.Model, //unused
    initialize:function(options) {
      this.view = options.view;
      this.model = options.view.model;
      this.view.on('setModel', this.setModel, this);
      this.setModel();
      if(this.view.exampleAddresses) {
        this.view.exampleAddresses.on('all', this.ctrlRefreshJSON, this);
      };

      this.ctrlRefreshJSON();
    },
    setModel:function() {
      if(this.model) {
        this.model.off(null,null, this);
        if(this.model.get('address')) {
          this.model.get('address').off(null, null, this);
        }
        if(this.model.get('addressList')) {
          this.model.get('addressList').off(null, null, this);
        }
      }
      this.model = this.view.model;
      this.model.on('change', this.ctrlRefreshJSON, this);
      if(this.model.get('address')) {
        this.model.get('address').on('change', this.ctrlRefreshJSON, this);
      };
      if(this.model.get('addressList')) {
        this.model.get('addressList').on('change', this.ctrlRefreshJSON, this);
      };
    },
    ctrlRefreshJSON:function() {
      this.$elf('.w-ctrl-refreshJSON').html(JSON.stringify(this.view.model.toJSON(), null,'  '))
    }
  });

  zzz = _exports.View;
  return _exports;
});