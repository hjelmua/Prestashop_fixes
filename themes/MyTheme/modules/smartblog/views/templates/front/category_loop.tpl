{*
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2015 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}
 
<div itemtype="#" itemscope="" class="sdsarticleCat clearfix">
    <div id="smartblogpost-{$post.id_post|escape:'htmlall':'UTF-8'}" class="row">
        <div class="col-sm-12 col-md-5">
            <div class="articleContent">
                {if isset($ispost) && !empty($ispost)}
                <a itemprop="url" href="{$smartbloglink->getSmartBlogPostLink($post.id_post,$post.cat_link_rewrite)|escape:'htmlall':'UTF-8'}" title="{$post.meta_title|escape:'htmlall':'UTF-8'}" class="imageFeaturedLink">
                {/if}
                {if $smartbloglink->getImageLink($post.link_rewrite, $post.id_post, 'single-default') != 'false'}
                    <img itemprop="image" alt="{$post.meta_title|escape:'htmlall':'UTF-8'}" src="{$smartbloglink->getImageLink($post.link_rewrite, $post.id_post, 'single-default')}" class="imageFeatured">
                {/if}                   
                {if isset($ispost) && !empty($ispost)}
                </a>
                {/if}
            </div>
        </div>
        <div class="col-sm-12 col-md-7">
            <div class="sdsarticleHeader"> 
                <p class='title_block'><a title="{$post.meta_title|escape:'htmlall':'UTF-8'}" href="{$smartbloglink->getSmartBlogPostLink($post.id_post,$post.link_rewrite)|escape:'htmlall':'UTF-8'}">{$post.meta_title|escape:'htmlall':'UTF-8'}</a></p>
                {* {if $smartshowauthor ==1}<i class="material-icons">&#xE7FF;</i><span itemprop="author">{if $smartshowauthorstyle != 0}{$post.firstname|escape:'htmlall':'UTF-8'} {$post.lastname|escape:'htmlall':'UTF-8'}{else}{$post.lastname|escape:'htmlall':'UTF-8'} {$post.firstname|escape:'htmlall':'UTF-8'}{/if}</span>{/if} *}
                <i class="material-icons">&#xE878;</i><span itemprop="dateCreated">{$post.created|escape:'htmlall':'UTF-8'}</span>
                {* {$assocCats = BlogCategory::getPostCategoriesFull($post.id_post)}
                {$catCounts = 0}
                {if !empty($assocCats)}
                    <i class="material-icons">&#xE54E;</i>
                    <span itemprop="articleSection">
                    {foreach $assocCats as $catid=>$assoCat}
                        {if $catCounts > 0}, {/if}
                        {$catlink=[]}
                        {$catlink.id_category = $assoCat.id_category}
                        {$catlink.slug = $assoCat.link_rewrite}
                        <a href="{$smartbloglink->getSmartBlogCategoryLink($assoCat.id_category,$assoCat.link_rewrite)|escape:'htmlall':'UTF-8'}">
                            {$assoCat.name|escape:'htmlall':'UTF-8'}
                        </a>
                        {$catCounts = $catCounts + 1}
                    {/foreach}
                    </span>
                {/if} *}
                {* <i class="material-icons">&#xE0B9;</i><span>{if $countcomment != ''}{$countcomment|escape:'htmlall':'UTF-8'}{else}{l s='0' mod='smartblog'}{/if} {l s='Comments' mod='smartblog'}</span> *}
                <a title="" style="display:none" itemprop="url" href="#"></a>
                {if $smartshowviewed ==1}<i class="material-icons">&#xE8F4;</i><span>{l s='Views' mod='smartblog'} ({$post.viewed|intval})</span>{/if}
            </div>
            <div class="sdsarticle-des">{$post.short_description}</div>
            <div class="sdsreadMore">  
                <a title="{$post.meta_title|escape:'htmlall':'UTF-8'}" href="{$smartbloglink->getSmartBlogPostLink($post.id_post,$post.link_rewrite)|escape:'htmlall':'UTF-8'}" class="r_more">{l s='Read more' mod='smartblog'}</a>
            </div>
        </div>
    </div>
</div>