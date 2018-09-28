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
{block name='header'}
  {block name='header_nav'}{/block}
  {block name='header_top'}
    <div class="header-top">
      <div class="container">
        <div id="shop-logo">
          <a href="{$urls.base_url}">
             <img class="logo" src="/img/Hjelms-logo.png" srcset="/img/Hjelms-logo.png 1x, /img/Hjelms-logo@2x.png 2x" alt="Hjelm Förlag">
          </a>
        </div>
        {block name='continue_shopping'}
  <a class="label" href="{$urls.pages.index}">
    <button type="button" class="btn btn-secondary"><i class="material-icons">chevron_left</i>{l s='Continue shopping' d='Shop.Theme.Actions'}</button>
    </a>
        {/block}
      </div>
    </div>
    {hook h='displayNavFullWidth'}
  {/block}
{/block}
