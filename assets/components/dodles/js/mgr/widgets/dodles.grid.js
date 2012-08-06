Dodles.grid.Dodles = function(config){
    config = config || {};
    Ext.applyIf(config,{
        id: 'dodles-grid-dodles',
        url: Dodles.config.connectorUrl,
        baseParams: {action: 'mgr/dodle/getlist'},
        fields: ['id', 'name', 'description', 'menu'],
        paging: true,
        remoteSort: true,
        anchor: '97%',
        autoExpandColumn: 'name',
        save_action: 'mgr/dodle/updateFromGrid',
        autosave: true,
        columns: [{
            header: _('id'),
            dataIndex: 'id',
            sortable: true,
            width: 60
        },{
            header: _('dodles.name'),
            dataIndex: 'name',
            sortable: true,
            width: 100,
            editor: { xtype: 'textfield' }
        },{
            header: _('dodles.description'),
            dataIndex: 'description',
            sortable: false,
            width: 350,
            editor: { xtype: 'textfield' }
        }],
        tbar: [{
            xtype: 'textfield',
            id: 'dodles-search-filter',
            emptyText: _('dodles.search...'),
            listeners: {
                'change': {fn:this.search, scope:this},
                'render': {fn: function(cmp) {
                    new Ext.KeyMap(cmp.getEl(), {
                        key: Ext.EventObject.ENTER,
                        fn: function(){
                            this.fireEvent('change', this);
                            this.blur();
                            return true;
                        },
                        scope: cmp
                    });
                },scope:this}
            }
        },{
            text: _('dodles.dodle_create'),
            handler: {xtype: 'dodles-window-dodle-create', blankValues: true}
        }],
        getMenu: function(){
            return [{
                text: _('dodles.dodle_update'),
                handler: this.updateDodle
            },'-',{
                text: _('dodles.dodle_remove'),
                handler: this.removeDodle
            }];
        },
        updateDodle: function(btn, e){
            if(!this.updateDodleWindow){
                this.updateDodleWindow = MODx.load({
                    xtype: 'dodles-window-dodle-update',
                    record: this.menu.record,
                    listeners: {
                        'success': {fn:this.refresh,scope:this}
                    }
                });
            }
            this.updateDodleWindow.setValues(this.menu.record);
            this.updateDodleWindow.show(e.target);
        },
        removeDodle: function(){
            MODx.msg.confirm({
                title: _('dodles.dodle_remove'),
                text: _('dodles.dodle_remove_confirm'),
                url: this.config.url,
                params: {
                    action: 'mgr/dodle/remove',
                    id: this.record.id
                },
                listeners: {
                    'success': {fn:this.refresh,scope:this}
                }
            });
        }
    });
    Dodles.grid.Dodles.superclass.constructor.call(this,config)
};
Ext.extend(Dodles.grid.Dodles, MODx.grid.Grid, {
    search: function(tf, nv, ov){
        var s = this.getStore();
        s.baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
        this.refresh();
    }
});
Ext.reg('dodles-grid-dodles', Dodles.grid.Dodles);

Dodles.window.UpdateDodle = function(config){
    config = config || {};
    Ext.applyIf(config, {
        title: _('dodles.dodle_update'),
        url: Dodles.config.connectorUrl,
        baseParams: {
            action: 'mgr/dodle/update'
        },
        fields: [{
            xtype: 'hidden',
            name: 'id'
        },{
            xtype: 'textfield',
            fieldLabel: _('dodles.name'),
            name: 'name',
            anchor: '100%'
        },{
            xtype: 'textarea',
            fieldLabel: _('dodles.description'),
            name: 'description',
            anchor: '100%'
        }]
    });
    Dodles.window.UpdateDodle.superclass.constructor.call(this,config);
};
Ext.extend(Dodles.window.UpdateDodle, MODx.Window);
Ext.reg('dodles-window-dodle-update', Dodles.window.UpdateDodle);

Dodles.window.CreateDodle = function(config){
    config = config || {};
    Ext.applyIf(config,{
        title: _('dodles.dodle_create'),
        url: Dodles.config.connectorUrl,
        baseParams: {
            action: 'mgr/dodle/create'
        },
        fields: [{
            xtype: 'textfield',
            fieldLabel: _('dodles.name'),
            name: 'name',
            anchor: '100%'
        },{
            xtype: 'textarea',
            fieldLabel: _('dodles.description'),
            name: 'description',
            anchor: '100%'
        }]
    });
    Dodles.window.CreateDodle.superclass.constructor.call(this,config);
};
Ext.extend(Dodles.window.CreateDodle, MODx.Window);
Ext.reg('dodles-window-dodle-create', Dodles.window.CreateDodle);