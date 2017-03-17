<?php

$pageTitle = "Announcing ag-Grid v5 and Pivot";
$pageDescription = "ag-Grid v5 Introduces Pivot - a discussion on what this means for ag-Grid.";
$pageKeyboards = "ag-Grid javascript datagrid pivot";

include('../includes/mediaHeader.php');
?>


<div class="row">
    <div class="col-md-12" style="padding-top: 20px; padding-bottom: 20px;">
        <h2>Announcing ag-Grid v5 and Pivot</h2>
    </div>
</div>

<div class="row">
    <div class="col-md-9">

        <p>
            This week saw the release of version 5.x of ag-Grid. This release signifies a large step forward
            for ag-Grid, as it's a big leap into new territory for any general purpose JavaScript datagrid.
            All other grids on the market either provide a) general features or b) specialise
            in pivot. ag-Grid is the first to combine both.
        </p>

        <h3>Benefits of Pivot</h3>

        <p>
            As a developer, you probably do not use the pivot features of Excel on a regular basis. However
            if you are building applications for enterprise users, most enterprise users who work with data
            ARE very familiar with Excel and it's pivot capabilities. The ag-Grid pivot feature will provide
            your users with one less reason to export to Excel, and hence make them more productive inside your
            application.
        </p>

        <h3>How it's Possible</h3>

        <p>
            Under the hood, ag-Grid uses it's own special purpose framework to manage the complex challenge
            of building a datagrid. The framework uses the latest ECMA 7 (via TypeScript) strongly typed
            object oriented design mixed with ag-Grid's own IoC (Inversion of Control) container, with
            auto-wired services and ag-Grid's GUI component for data binding. This custom built library
            has allowed ag-Grid to create a robust foundation which it is now using to take on the
            challenges of a complex grid.
        </p>

        <h3>The Future</h3>

        <p>
            ag-Grids mission is simple - to provide the best general purpose JavaScript datagrid for free
            and become the world leader in this area, while also providing an Enterprise version for features
            that are above and beyond what the industry expects from a JavaScript datagrid. Going forward, ag-Grid
            will build on this by improving its free core features while also breaking
            new ground with enterprise features.
        </p>

        <div style="margin-top: 20px;">
            <a href="https://twitter.com/share" class="twitter-share-button" data-url="https://www.ag-grid.com/ag-grid-javascript-pivot-grid/" data-text="Announcing ag-Grid v5 and Pivot" data-via="ceolter" data-size="large">Tweet</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
        </div>

    </div>
    <div class="col-md-3">

        <div>
            <a href="https://twitter.com/share" class="twitter-share-button" data-url="https://www.ag-grid.com/ag-grid-javascript-pivot-grid/" data-text="Announcing ag-Grid v5 and Pivot" data-via="ceolter" data-size="large">Tweet</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
        </div>

        <div style="font-size: 14px; background-color: #dddddd; padding: 15px;">

            <p>
                <img src="/niall.png"/>
            </p>
            <p>
                About Me
            </p>
            <p>
                I have been writing software all my life. Starting with Assembly, C++ and MFC, moving onto full stack Java / JSP / GWT and now focusing on full stack Java / Javascript.
            </p>
            <p>
                Currently work on ag-Grid full time.
            </p>

            <div>
                <br/>
                <a href="http://uk.linkedin.com/in/niallcrosby"><img src="/images/linked-in.png"/></a>
                <br/>
                <br/>
                <a href="https://twitter.com/ceolter" class="twitter-follow-button" data-show-count="false" data-size="large">@ceolter</a>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
            </div>

        </div>

    </div>
</div>


<hr/>

<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'aggrid';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
<hr/>

<footer class="license">
    © ag-Grid Ltd. 2015-2017
</footer>

<?php
include('../includes/mediaFooter.php');
?>
