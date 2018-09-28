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
<div id="_desktop_blockcart-wrapper" class="tptncart col-xs-1">
  <div class="blockcart cart-preview" data-refresh-url="{$refresh_url}">
    <div class="m-toggle">
      <i class="material-icons">shopping_cart</i>
      <span class="cart-products-count">{$cart.products_count}</span>
    </div>
    <div class="minicart-body">
      <div class="minicart-title">{l s='Cart' d='Shop.Theme.Checkout'}<i class="material-icons">&#xE5CD;</i></div>
    {if $cart.products}
      <ul>
        {foreach from=$cart.products item=product}
          <li class="clearfix">{include 'module:ps_shoppingcart/ps_shoppingcart-product-line.tpl' product=$product}</li>
        {/foreach}
      </ul>
      <div class="cart-totals">
      {foreach from=$cart.subtotals item="subtotal"}
        <div class="{$subtotal.type}">
          <span class="label">{$subtotal.label}</span>
          <span class="value">{$subtotal.value}</span>
        </div>
      {/foreach}
        <div class="total">
          <span class="label">{$cart.totals.total.label}</span>
          <span class="value">{$cart.totals.total.value}</span>
        </div>
      </div>
      <div class="cart-action">
        <a href="{$cart_url}" class="btn btn-primary">{l s='Shopping Cart' d='Shop.Theme.Checkout'}</a>
      </div>
    {else}
      <span class="no-items">{l s='There are no more items in your cart' d='Shop.Theme.Checkout'}</span>
    {/if}
    </div>
  </div>
</div>