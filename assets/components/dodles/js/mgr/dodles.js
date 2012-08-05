var Dodles = function(config) {
    config = config || {};
    Dodles.superClass.constructor.call(this,config);
};
Ext.extend(Dodles, Ext.Component, {
    page:{}, window:{},grid:{},tree:{}, panel:{}, combo:{}, config:{}
});
Ext.reg('dodles', Dodles);
Dodles = new Dodles();