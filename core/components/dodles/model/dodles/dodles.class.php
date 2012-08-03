<?php

class Dodles
{
    public $modx;
    public $config = array();

    public function __construct(modX &$modx, array $config = array())
    {
        $this->modx =& $modx;

        $basePath = $this->modx->getOption('dodles.core_path', $config, $this->modx->getOption('core_path').'components/dodles/');
        $assetsUrl = $this->modx->getOption('dodles.assets_url', $config, $this->modx->getOption('assets_url').'components/dodles/');
        $this->config = array_merge(array(
            'basePath' => $basePath,
            'corePath' => $basePath,
            'modelPath' => $basePath . 'model/',
            'processorsPath' => $basePath . 'processors/',
            'templatesPath' => $basePath . 'templates/',
            'chuncksPath' => $basePath . 'elements/chencks/',
            'jsUrl' => $assetsUrl . 'js/',
            'cssUrl' => $assetsUrl . 'css/',
            'assetsUrl' => $assetsUrl,
            'connectorUrl' => $assetsUrl . 'connector.php',
        ), $config);
    }
}