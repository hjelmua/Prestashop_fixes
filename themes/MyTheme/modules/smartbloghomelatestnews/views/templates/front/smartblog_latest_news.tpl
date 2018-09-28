<section id="tptnhomeblog" class="tptncarousel tptnprods">
    <h4><a title="{l s='Our Blog' mod='smartblog'}" href="{smartblog::GetSmartBlogLink('smartblog')}">{l s='Our Blog' mod='smartblog'}</a></h4>
    <div class="blogcrsl">
        {if isset($view_data) AND !empty($view_data)}
            {foreach from=$view_data item=post}
                {assign var='img_url' value=$smartbloglink->getImageLink($post.link_rewrite, $post.id, 'home-default')}
                <div class="blog-container">
                    <div class="blog-img">
                        {if $img_url != 'false'}
                        <a href="{$smartbloglink->getSmartBlogPostLink($post.id,$post.link_rewrite)}">
                        <img src="{$img_url}" alt="{$post.title|escape:'html':'UTF-8'}" title="{$post.title|escape:'html':'UTF-8'}" />
                        </a>
                        {/if}
                    </div>
                    <div class="news-date">{$post.date_added}</div>
                    <h5><a href="{$smartbloglink->getSmartBlogPostLink($post.id,$post.link_rewrite)}">{SmartBlogPost::subStr($post.title,60)}</a></h5>
                    <p>{$post.short_description}</p>
                </div>
            {/foreach}
        {/if}
    </div>
</section>