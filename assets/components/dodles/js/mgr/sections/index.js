Ext.onReady(function(){
    MODx.load({ xtype: 'dodles-page-home' });
});
Dodles.page.Home = function( config ) {
    config = config || {};
    Ext.applyIf(config,{
        components: [{
            xtype: 'dodles-panel-home',
            renderTo: 'dodles-panel-home-div'
        }]
    });
    Dodles.page.Home.superClass.constructor.call(this,config);
};
Ext.extend(Dodles.page.Home, MODx.Component);
Ext.reg('dodles-page-home', Dodles.page.home);