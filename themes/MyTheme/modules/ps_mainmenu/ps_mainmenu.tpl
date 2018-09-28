{function name="mainmenu" nodes=[] depth=0 parent=null}
  {if $nodes|count}
    {foreach from=$nodes item=node}
      <li data-depth="{$depth}">
        <a href="{$node.url}" {if $node.open_in_new_window}target="_blank"{/if}>
          {$node.label}
        </a>
        {if $node.children|count}
          <ul>
            {mainmenu nodes=$node.children depth=$node.depth parent=$node}
          </ul>
        {/if}
      </li>
    {/foreach}
  {/if}
{/function}

{function name="mobilemenu" nodes=[] depth=0 parent=null}
{strip}
  {if $nodes|count}
  <ul data-depth="{$depth}">
  {foreach from=$nodes item=node}
    <li id="{$node.page_identifier}">
      <a href="{$node.url}" data-depth="{$depth}" {if $node.open_in_new_window} target="_blank"{/if}>
      {if $node.children|count}
        {* Cannot use page identifier as we can have the same page several times *}
        {assign var=_expand_id value=10|mt_rand:100000}
        <span class="float-xs-right hidden-xl-up">
          <span data-target="#mobile_menu_{$_expand_id}" data-toggle="collapse" class="navbar-toggler collapse-icons">
            <i class="material-icons add">&#xE145;</i>
            <i class="material-icons remove">&#xE15B;</i>
          </span>
        </span>
      {/if}
      {$node.label}
      </a>
      {if $node.children|count}
      <div class="collapse" id="mobile_menu_{$_expand_id}">
        {mobilemenu nodes=$node.children depth=$node.depth parent=$node}
      </div>
      {/if}
    </li>
  {/foreach}
    </ul>
  {/if}
{/strip}
{/function}

</div> <!-- .row -->
</div> <!-- .container -->
</div> <!-- .header-top -->

<div class="header-bottom hidden-lg-down">
  <div class="container">
  <div class="row">
    <div id="tptndesktopmenu" class="col-xl-3 hidden-lg-down">
      <div class="desktopmenu-title">{l s='Categories' d='Shop.Theme.Catalog'}<i class="material-icons">&#xE5D2;</i></div>
      <div class="desktopmenu">
        <ul id="megamenu" class="menu right">{mainmenu nodes=$menu.children}</ul>
      </div>
    </div>
    <div id="_desktop_tptnmobilemenu" class="hidden-xl-up">
      <div class="m-toggle">
        <i class="material-icons">&#xE5D2;</i>
      </div>
      <div class="mobilemenu">
        <div class="mobilemenu-title">{l s='Categories' d='Shop.Theme.Catalog'}<i class="material-icons">&#xE5CD;</i></div>
        {mobilemenu nodes=$menu.children}
      </div>
    </div>