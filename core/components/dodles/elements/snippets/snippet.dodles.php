<?php
$dood = $modx->getService('dodles', 'Dodles', $modx->getOption('dodles.core_path', null, $modx->getOption('core_path').'components/dodles/').'model/dodles/', $scriptProperties);
if(!($dood instanceof Dodles)) return '';

/* setup default properties */
$tpl = $modx->getOption('tpl', $scriptProperties, 'rowTpl');
$sort = $modx->getOption('sort', $scriptProperties, 'name');
$dir = $modx->getOption('dir', $scriptProperties, 'ASC');

$output = '';

//$m = $modx->getManager();
//$created = $m->createObjectContainer('Dodle');
//return $created ? 'Table created.' : 'Table not created.';

$c = $modx->newQuery('Dodle');
$c->sortby($sort, $dir);
$dodles = $modx->getCollection('Dodle', $c);

foreach($dodles as $dodle)
{
    $dodleArray = $dodle->toArray();
    $output .= $dood->getChunk($tpl, $dodleArray);
}

return $output;