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
<div id="_desktop_user-info" class="user-info col-xl-3">
<div class="login-register">
  <div class="m-toggle">
    <i class="material-icons">&#xE8A6;</i>
    <span class="m-toggle-title">{l s='Account' d='Shop.Theme.Customeraccount'}</span>
  </div>
  <ul class="dropdown-content">
  {if $logged}
    <li><a href="{$my_account_url}" title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}" rel="nofollow">{l s='My Account' d='Shop.Theme.Customeraccount'}</a></li>
    <li><a href="{$urls.pages.identity}" title="{l s='Information' d='Shop.Theme.Customeraccount'}" rel="nofollow">{l s='Information' d='Shop.Theme.Customeraccount'}</a></li>
    {if $customer.addresses|count}
    <li><a href="{$urls.pages.addresses}" title="{l s='Addresses' d='Shop.Theme.Customeraccount'}" rel="nofollow">{l s='Addresses' d='Shop.Theme.Customeraccount'}</a></li>
    {else}
    <li><a href="{$urls.pages.address}" title="{l s='Add first address' d='Shop.Theme.Customeraccount'}" rel="nofollow">{l s='Add first address' d='Shop.Theme.Customeraccount'}</a></li>
    {/if}
    {if !$configuration.is_catalog}
    <li><a href="{$urls.pages.history}" title="{l s='Order details' d='Shop.Theme.Customeraccount'}" rel="nofollow">{l s='Order details' d='Shop.Theme.Customeraccount'}</a></li>
    {/if}
    <li><a href="{$logout_url}" title="{l s='Sign out' d='Shop.Theme.Actions'}" rel="nofollow">{l s='Sign out' d='Shop.Theme.Actions'}</a></li>
  {else}
    <li><a href="{$my_account_url}" title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}" rel="nofollow">{l s='Sign in' d='Shop.Theme.Actions'}</a></li>
  {/if}
  </ul>
</div>
</div>
