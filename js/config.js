var _params;
var require= {
    baseUrl: 'js',
    config: {
        'common/params': _params || {}
    }  
};

if( typeof _i18n!= 'undefined'){
    require.config.i18n= _i18n;
}