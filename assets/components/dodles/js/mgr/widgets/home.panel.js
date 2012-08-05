Dodles.panel.Home = function(config){
    config = config || {};
    Ext.apply(config,{
        border: false,
        baseCls: 'modx-formpanel',
        cls: 'container',
        items: [{
            html: '<h2>'+_('dodles.management')+'</h2>',
            border: false,
            cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            items: [{
                title: _('dodles'),
                defaults: {autoHeight: true},
                items: [{
                    html: '<p>'+_('dodles.managment_desc')+'</p>',
                    border: false,
                    bodyCssClass: 'panel-desc'
                }/*,{
                    xtype: 'dodles-grid-dodles',
                    cls: 'main-wrapper',
                    preventRender: true
                }*/]
            }]
        }]
    });
    Dodles.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Dodles.panel.Home, MODx.Panel);
Ext.reg('dodles-panel-home', Dodles.panel.Home);