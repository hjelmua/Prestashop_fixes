{**
 * 2007-2018 PrestaShop
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
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{block name='header_nav'}
  <div class="header-nav">
    <div class="container">
      {hook h='displayNav1'}
      {hook h='displayNav2'}
    </div>
  </div>
{/block}

{block name='desktop_header'}
  <div class="header-top hidden-lg-down">
    <div class="container">
    <div class="row">
      <div id="_desktop_shop-logo" class="col-xl-3">
      {if $page.page_name == 'index'}
        <h1>
          <a href="{$urls.base_url}">
            <img class="logo" src="/img/Hjelms-logo.png" srcset="/img/Hjelms-logo.png 1x, /img/Hjelms-logo@2x.png 2x" alt="Hjelm Förlag, kvalitetsprodukter med motiv ur svenska barnböcker">
          </a>
        </h1>
      {else}
          <a href="{$urls.base_url}">
            <img class="logo" src="/img/Hjelms-logo.png" srcset="/img/Hjelms-logo.png 1x, /img/Hjelms-logo@2x.png 2x" alt="Hjelm Förlag">
          </a>
      {/if}
      </div>
      {hook h='displayTop'}
    </div> <!-- .row -->
    </div> <!-- .container -->
  </div> <!-- .header-bottom -->
{/block}

{block name='mobile_header'}
  <div class="mobile-header hidden-xl-up">
    <div class="mobile-header-top">
      <div id="_mobile_shop-logo" class="shop-logo"></div>
    </div>
    <div class="mobile-header-bottom">
      <div id="_mobile_tptnmobilemenu" class="tptnmobilemenu"></div>
      <div id="_mobile_user-info" class="user-info"></div>
      <div id="_mobile_tptnsearch" class="tptnsearch"></div>
      <div id="_mobile_tptnheaderlinks" class="tptnheaderlinks"></div>
      <div id="_mobile_blockcart-wrapper" class="tptncart"></div>
    </div>
  </div>
{/block}

{hook h='displayNavFullWidth'}
