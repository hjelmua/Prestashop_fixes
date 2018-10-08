<?php
class AdminOrdersController extends AdminOrdersControllerCore
{
 public function setMedia($isNewTheme = false)
    {
        parent::setMedia($isNewTheme);

        $this->addJqueryUI('ui.datepicker');
        $this->addJS(_PS_JS_DIR_.'vendor/d3.v3.min.js');
        $this->addJS('https://maps.googleapis.com/maps/api/js?v=3.exp&key=thisISmyrealgooglemapsAPIforsure');

        if ($this->access('edit') && $this->display == 'view') {
            $this->addJS(_PS_JS_DIR_.'admin/orders.js');
            $this->addJS(_PS_JS_DIR_.'tools.js');
            $this->addJqueryPlugin('autocomplete');
        }
    }
}
?>
