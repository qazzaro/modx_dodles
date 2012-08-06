<?php
class DodleGetListProcessor extends modObjectGetListProcessor
{
    public $classKey = 'Dodle';
    public $languageTopics = array('dodles:default');
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'dodles.dodle';

    public function prepareQueryBeforeCount(xPDOQuery $c){
        $query = $this->getProperty('query');
        if(!empty($query)){
            $c->where(array(
                'name:LIKE' => '%'.$query.'%',
                'OR:description:LIKE' => '%'.$query.'%',
            ));
        }
        return $c;
    }
}
return 'DodleGetListProcessor';