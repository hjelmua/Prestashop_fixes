<div class="tab-pane fade{if !$product.description} in active{/if}"
     id="product-details"
     data-product="{$product.embedded_attributes|json_encode}"
     role="tabpanel"
  >
  {block name='product_features'}
    {if $product.grouped_features}
      <section class="product-features">
        <table class="data-sheet">
        <tbody>
          {foreach from=$product.grouped_features item=feature}
            <tr>
              <td class="name">{$feature.name}</td>
              <td class="value">{$feature.value|escape:'htmlall'|nl2br nofilter}</td>
            </tr>
          {/foreach}
        </tbody>
        </table>
      </section>
    {/if}
  {/block}

  {* if product have specific references, a table will be added to product details section *}
  {block name='product_specific_references'}
    {if isset($product.specific_references)}
      <section class="product-features">
        <p class="h6">{l s='Specific References' d='Shop.Theme.Catalog'}</p>
          <table class="data-sheet">
          <tbody>
            {foreach from=$product.specific_references item=reference key=key}
              <td class="name">{$key}</td>
              <td class="value">{$reference}</td>
            {/foreach}
          </tbody>
          </table>
      </section>
    {/if}
  {/block}
</div>
