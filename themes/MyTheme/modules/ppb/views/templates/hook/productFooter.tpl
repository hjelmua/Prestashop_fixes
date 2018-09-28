{**
* PrestaShop module created by VEKIA, a guy from official PrestaShop community ;-)
*
* @author    VEKIA https://www.prestashop.com/forums/user/132608-vekia/
* @copyright 2010-9999 VEKIA
* @license   This program is not free software and you can't resell and redistribute it
*
* CONTACT WITH DEVELOPER http://mypresta.eu
* support@mypresta.eu
*}

{foreach from=$blocksProductFooter item=block}
<section class="tptncarousel tptnprods">
        <h4>{$block->name|escape:'html':'utf-8'}{if $block->carousell_controls==1 && $block->carousell==1}<i class="ppbback ppbb{$block->id} material-icons">&#xE5CB;</i><i class="material-icons ppbf{$block->id} ppbforward">&#xE5CC;</i>{/if}</h4>
        {if isset($block->products) && $block->products}
             <div class="prodcrsl"> <!-- used to be products -->
                    {foreach from=$block->products item="product"}
                        {if $block->carousell==1}
                            <div class="col-lg-4 col-md-3 col-sm-2 col-xs-1">
                        {/if}
                        {include file="catalog/_partials/miniatures/product.tpl" product=$product}
                        {if $block->carousell==1}
                            </div>
                        {/if}
                    {/foreach}
                </div>
        {else}
 <p class="no-products"> {l s='No Products' mod='tptnprodcarousel'} </p>
        {/if}

    {if $block->block_position == 2 && $block->carousell==1}
        <script>
            {literal}
            document.addEventListener("DOMContentLoaded", function(event) {
                $.fancybox({
                    'maxWidth': 1200,
                    'scrolling'   : 'no',
                    'closeClick' : false,
                    'nextClick' : false,
                    'margin': 20,
                    'hideOnOverlayClick' : false,
                    'hideOnContentClick' : false,
                    'autoscale' : true,
                    'content' : $("#ppbContainer{/literal}{$block->id|escape:'int':'utf-8'}{literal}").html(),
                    'helpers' : {
                        overlay : {
                            closeClick : false,
                            css : { 'overflow' : 'hidden' }
                        }
                    },
                    'afterShow' : function() {
                        $('.fancybox-inner').addClass('block');
                        $('.fancybox-skin').css("background-color", "white");
                        var {/literal}ppb{$block->id|escape:'int':'utf-8'}{literal} = $('.fancybox-inner #{/literal}ppb{$block->id}{literal} .products').lightSlider(
                            {
                                item: {/literal}{$block->carousell_nb}{literal},
                                loop: false,
                                slideMove: 1,
                                speed: 600,
                                pager: {/literal}{if $block->carousell_pager==1}true{else}false{/if}{literal},
                                loop: {/literal}{if $block->carousell_loop==1}true{else}false{/if}{literal},
                                controls: false,
                                pauseOnHover: true,
                                slideMargin: 0,
                                auto: {/literal}{if $block->carousell_auto==1}true{else}false{/if}{literal},
                                responsive: [
                                    {
                                        breakpoint: 800,
                                        settings: {
                                            item: {/literal}{$block->carousell_nb_tablet}{literal},
                                            slideMove: 1,
                                            slideMargin: 6,
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            item: {/literal}{$block->carousell_nb_mobile}{literal},
                                            slideMove: 1
                                        }
                                    }
                                ]
                            }
                        );
                        {/literal}
                        {if $block->carousell_controls==1 && $block->carousell==1}
                        {literal}
                        $('.fancybox-inner .ppbb{/literal}{$block->id}{literal}').click(function () {
                            {/literal}ppb{$block->id}{literal}.goToPrevSlide();
                        });
                        $('.fancybox-inner .ppbf{/literal}{$block->id}{literal}').click(function () {
                            {/literal}ppb{$block->id}{literal}.goToNextSlide();
                        });
                        {/literal}
                        {/if}
                        {literal}
                    }
                });
            });
            {/literal}
        </script>
    {/if}

    {if $block->carousell==1 && $block->block_position != 2}
    {literal}
        <script>
            document.addEventListener("DOMContentLoaded", function(event) {
                var {/literal}ppb{$block->id}{literal} = $('.{/literal}ppb{$block->id}{literal} .products').lightSlider(
                        {
                            item: {/literal}{$block->carousell_nb}{literal},
                            loop: false,
                            slideMove: 1,
                            slideMargin: 0,
                            speed: 600,
                            pager: {/literal}{if $block->carousell_pager==1}true{else}false{/if}{literal},
                            loop: {/literal}{if $block->carousell_loop==1}true{else}false{/if}{literal},
                            controls: false,
                            pauseOnHover: true,
                            auto: {/literal}{if $block->carousell_auto==1}true{else}false{/if}{literal},
                            responsive: [
                                {
                                    breakpoint: 800,
                                    settings: {
                                        item: {/literal}{$block->carousell_nb_tablet}{literal},
                                        slideMove: 1,
                                        slideMargin: 0,
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        item: {/literal}{$block->carousell_nb_mobile}{literal},
                                        slideMove: 1,
                                        slideMargin: 0
                                    }
                                }
                            ]
                        }
                );
                {/literal}
                {if $block->carousell_controls==1 && $block->carousell==1}
                {literal}
                $('.ppbb{/literal}{$block->id}{literal}').click(function () {
                    {/literal}ppb{$block->id}{literal}.goToPrevSlide();
                });
                $('.ppbf{/literal}{$block->id}{literal}').click(function () {
                    {/literal}ppb{$block->id}{literal}.goToNextSlide();
                });
                {/literal}
                {/if}
                {literal}

            });
        </script>
    {/literal}
    {/if}
</section>
{/foreach}
