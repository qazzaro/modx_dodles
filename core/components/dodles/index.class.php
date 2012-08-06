<?php
require_once dirname(__FILE__).'/model/dodles/dodles.class.php';
abstract class DodlesManagerController extends modExtraManagerController
{
    public $dodles;

    public function initialize()
    {
        $this->dodles = new Dodles($this->modx);

        $this->addCss($this->dodles->config['cssUrl'].'mgr.css');
        $this->addJavascript($this->dodles->config['jsUrl'].'mgr/dodles.js');
        $this->addHtml('<script type="text/javascript">
            Ext.onReady(function(){
                Dodles.config = '.$this->modx->toJSON($this->dodles->config).';
            });
        </script>');
        return parent::initialize();
    }

    public function getLanguageTopics()
    {
        return array('dodles:default');
    }
    public function checkPermissions()
    {
        return true;
    }

}

class IndexManagerController extends DodlesManagerController
{
    public static function getDefaultController()
    {
        return 'home';
    }
}