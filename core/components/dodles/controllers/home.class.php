<?php
class DodlesHomeManagerController extends DodlesManagerController
{
    public function process(array $scriptProperties = array())
    {

    }
    public function getPageTitle()
    {
        return $this->modx->lexicon('dodles');
    }
    public function loadCustomCssJs()
    {
        $this->addJavascript($this->dodles->config['jsUrl'].'mgr/widgets/dodles.grid.js');
        $this->addJavascript($this->dodles->config['jsUrl'].'mgr/widgets/home.panel.js');
        $this->addLastJavascript($this->dodles->config['jsUrl'].'mgr/sections/index.js');
    }
    public function getTemplateFile()
    {
        return $this->dodles->config['templatesPath'].'home.tpl';
    }
}