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
{block name='product_miniature_item'}
  <article class="product-miniature js-product-miniature col-xs-12 col-sm-6 col-lg-4 col-xl-3" data-id-product="{$product.id_product}" data-id-product-attribute="{$product.id_product_attribute}" itemscope itemtype="http://schema.org/Product">
    <div class="thumbnail-container">
      <div class="product-thumbnail">
      {block name='product_thumbnail'}
        {if $product.cover}
          <a href="{$product.url}" class="thumbnail">
            <img class="first-img" src="{$product.cover.bySize.home_default.url}" srcset="{$product.cover.bySize.home_default.url} 1x, {$product.cover.bySize.home_default2x.url} 2x" alt="{if !empty($product.cover.legend)}{$product.cover.legend}{else}{$product.name}{/if}">
            {if isset($product.images[1])}
            <img class="second-img" src="{$product.images[1].bySize.home_default.url}" srcset="{$product.images[1].bySize.home_default.url} 1x, {$product.images[1].bySize.home_default2x.url} 2x" alt="{if !empty($product.cover.legend)}{$product.cover.legend}{else}{$product.name}{/if}">
            {else}
            <img class="second-img" src="{$product.cover.bySize.home_default.url}" srcset="{$product.cover.bySize.home_default.url} 1x, {$product.cover.bySize.home_default2x.url} 2x" alt="{if !empty($product.cover.legend)}{$product.cover.legend}{else}{$product.name}{/if}">
            {/if}
          </a>
        {else}
          <a href="{$product.url}" class="thumbnail">
            <img src="{$urls.no_picture_image.bySize.home_default.url}" srcset="{$urls.no_picture_image.bySize.home_default.url} 1x, {$urls.no_picture_image.bySize.home_default2x.url} 2x">
          </a>
        {/if}
      {/block}
      {block name='product_flags'}
        <ul class="product-flags">
          {foreach from=$product.flags item=flag}
            <li class="product-flag {$flag.type}">{$flag.label}</li>
          {/foreach}
        </ul>
      {/block}
      {block name='product_buy'}
        {if !$configuration.is_catalog && $product.add_to_cart_url}
        <div class="product-list-actions">
          <form action="{$urls.pages.cart}" method="post" class="product-qty-cart">
            <input type="hidden" name="token" value="{$static_token}">
            <input type="hidden" name="id_product" value="{$product.id_product}">
            <input type="hidden" name="qty" value="{$product.minimal_quantity}">
            <button class="btn-primary" data-button-action="add-to-cart" type="submit">
              <i class="material-icons shopping-cart">&#xE547;</i>
            </button>
          </form>
        </div>
        {/if}
      {/block}
      </div>
      <div class="product-description">
        {block name='product_name'}
          {if $page.page_name == 'index'}
            <h3 class="h3 product-title" itemprop="name"><a href="{$product.url}">{$product.name}</a></h3>
          {else}
            <h2 class="h3 product-title" itemprop="name">{$product.reference|escape:'htmlall':'UTF-8'}: <a href="{$product.url}">{$product.name}</a></h2>
          {/if}
        {/block}
        {block name='product_price_and_shipping'}
          {if $product.show_price}
            <div class="product-price-and-shipping">
              {hook h='displayProductPriceBlock' product=$product type="before_price"}
              <span class="sr-only">{l s='Price' d='Shop.Theme.Catalog'}</span>
              <span itemprop="price" class="price">{$product.price}</span>
              {if $product.has_discount}
                {hook h='displayProductPriceBlock' product=$product type="old_price"}
                <span class="sr-only">{l s='Regular price' d='Shop.Theme.Catalog'}</span>
                <span class="regular-price">{$product.regular_price}</span>
                {* {if $product.discount_type === 'percentage'}
                  <span class="discount-percentage discount-product">{$product.discount_percentage}</span>
                {elseif $product.discount_type === 'amount'}
                  <span class="discount-amount discount-product">{$product.discount_amount_to_display}</span>
                {/if} *}
              {/if}
              {hook h='displayProductPriceBlock' product=$product type='unit_price'}
              {hook h='displayProductPriceBlock' product=$product type='weight'}
            </div>
          {/if}
        {/block}
        {block name='product_reviews'}
          {hook h='displayProductListReviews' product=$product}
        {/block}
      </div>
   {* <div class="highlighted-informations{if !$product.main_variants} no-variants{/if} hidden-sm-down">
        {block name='quick_view'}
          <a class="quick-view" href="#" data-link-action="quickview">
            <i class="material-icons search">&#xE8B6;</i> {l s='Quick view' d='Shop.Theme.Actions'}
          </a>
        {/block}
        {block name='product_variants'}
          {if $product.main_variants}
            {include file='catalog/_partials/variant-links.tpl' variants=$product.main_variants}
          {/if}
        {/block}
      </div> *}
    </div>
  </article>
{/block}
