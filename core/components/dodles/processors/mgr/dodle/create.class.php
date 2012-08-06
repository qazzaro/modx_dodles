<?php
class DodleCreateProcessor extends modObjectCreateProcessor
{
    public $classKey = 'Dodle';
    public $languageTopics = array('dodles:default');
    public $objectType = 'dodles.dodle';

    public function beforeSave() {
        $name = $this->getProperty('name');

        if(empty($name)){
            $this->addFieldError('name', $this->modx->lexicon('dodles.dodle_err_ns_name'));
        } else if ($this->doesAlreadyExist(array('name'=>$name))) {
            $this->addFieldError('name', $this->modx->lexicon('dodles.dodle_err_ae'));
        }
        return parent::beforeSave();
    }
}
return 'DodleCreateProcessor';