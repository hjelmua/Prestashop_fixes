{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
<div class="language-selector">
  <div class="lc-dropbtn">
    {$current_language.name_simple}
    <i class="material-icons">&#xE5C5;</i>
  </div>
  <ul class="lc-dropdown-content">
  {foreach from=$languages item=language}
    <li{if $language.id_lang == $current_language.id_lang} class="current"{/if}>
      {if $language.id_lang == $current_language.id_lang}
        {$language.name_simple}<i class="material-icons">&#xE876;</i>
      {else}
        <a href="{url entity='language' id=$language.id_lang}">{$language.name_simple}</a>
      {/if}
    </li>
  {/foreach}
  </ul>
</div>