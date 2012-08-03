<?php
$dood = $modx->getService('dodles', 'Dodles', $mox->getOption('dodles.core_path', null, $modx->getOption('core_path').'components/dodles/').'model/dodles/', $scriptProperties);
if(!($dood instanceof Dodles)) return '';

/* setup default properties */
$tpl = $modx->getOption('tpl', $scriptProperties, 'rowTpl');
$sort = $modx->getOption('sort', $scriptProperties, 'name');
$dir = $modx->getOption('dir', $scriptProperties, 'ASC');

$output = '';

return $output;