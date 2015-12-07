
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Anunatak</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Anunatak_Framework" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Anunatak/Framework.html">Framework</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Anunatak_Framework_Fakes" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Anunatak/Framework/Fakes.html">Fakes</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Anunatak_Framework_Fakes_WP_Post" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Anunatak/Framework/Fakes/WP_Post.html">WP_Post</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Anunatak_Framework_Model" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Anunatak/Framework/Model.html">Model</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Anunatak_Framework_Model_Model" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Anunatak/Framework/Model/Model.html">Model</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Anunatak_Framework_AdminRouter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Anunatak/Framework/AdminRouter.html">AdminRouter</a>                    </div>                </li>                            <li data-name="class:Anunatak_Framework_Controller" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Anunatak/Framework/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:Anunatak_Framework_Framework" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Anunatak/Framework/Framework.html">Framework</a>                    </div>                </li>                            <li data-name="class:Anunatak_Framework_ListTable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Anunatak/Framework/ListTable.html">ListTable</a>                    </div>                </li>                            <li data-name="class:Anunatak_Framework_Router" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Anunatak/Framework/Router.html">Router</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Anunatak.html", "name": "Anunatak", "doc": "Namespace Anunatak"},{"type": "Namespace", "link": "Anunatak/Framework.html", "name": "Anunatak\\Framework", "doc": "Namespace Anunatak\\Framework"},{"type": "Namespace", "link": "Anunatak/Framework/Fakes.html", "name": "Anunatak\\Framework\\Fakes", "doc": "Namespace Anunatak\\Framework\\Fakes"},{"type": "Namespace", "link": "Anunatak/Framework/Model.html", "name": "Anunatak\\Framework\\Model", "doc": "Namespace Anunatak\\Framework\\Model"},
            
            {"type": "Class", "fromName": "Anunatak\\Framework", "fromLink": "Anunatak/Framework.html", "link": "Anunatak/Framework/AdminRouter.html", "name": "Anunatak\\Framework\\AdminRouter", "doc": "&quot;Admin Routing\nUsed to create admin pages via controllers&quot;"},
                                                        {"type": "Method", "fromName": "Anunatak\\Framework\\AdminRouter", "fromLink": "Anunatak/Framework/AdminRouter.html", "link": "Anunatak/Framework/AdminRouter.html#method___construct", "name": "Anunatak\\Framework\\AdminRouter::__construct", "doc": "&quot;Set up everything&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\AdminRouter", "fromLink": "Anunatak/Framework/AdminRouter.html", "link": "Anunatak/Framework/AdminRouter.html#method_load_routes", "name": "Anunatak\\Framework\\AdminRouter::load_routes", "doc": "&quot;Load up all routes&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\AdminRouter", "fromLink": "Anunatak/Framework/AdminRouter.html", "link": "Anunatak/Framework/AdminRouter.html#method_add", "name": "Anunatak\\Framework\\AdminRouter::add", "doc": "&quot;Add a new admin controller&quot;"},
            
            {"type": "Class", "fromName": "Anunatak\\Framework", "fromLink": "Anunatak/Framework.html", "link": "Anunatak/Framework/Controller.html", "name": "Anunatak\\Framework\\Controller", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method___construct", "name": "Anunatak\\Framework\\Controller::__construct", "doc": "&quot;Set up the controller&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_adminPage", "name": "Anunatak\\Framework\\Controller::adminPage", "doc": "&quot;Sets up the admin page&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_addAdminPage", "name": "Anunatak\\Framework\\Controller::addAdminPage", "doc": "&quot;Adds a new admin page&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_publicPage", "name": "Anunatak\\Framework\\Controller::publicPage", "doc": "&quot;Sets up the public page actions&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_scripts", "name": "Anunatak\\Framework\\Controller::scripts", "doc": "&quot;Load scripts&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_styles", "name": "Anunatak\\Framework\\Controller::styles", "doc": "&quot;Load styles&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_render", "name": "Anunatak\\Framework\\Controller::render", "doc": "&quot;Render the admin page&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_renderContent", "name": "Anunatak\\Framework\\Controller::renderContent", "doc": "&quot;Render a file&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_renderFile", "name": "Anunatak\\Framework\\Controller::renderFile", "doc": "&quot;Render a file&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_renderFunction", "name": "Anunatak\\Framework\\Controller::renderFunction", "doc": "&quot;Render a closure&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_renderApi", "name": "Anunatak\\Framework\\Controller::renderApi", "doc": "&quot;Render a settings API&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_isViewPath", "name": "Anunatak\\Framework\\Controller::isViewPath", "doc": "&quot;Check if given string is a view&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Controller", "fromLink": "Anunatak/Framework/Controller.html", "link": "Anunatak/Framework/Controller.html#method_view", "name": "Anunatak\\Framework\\Controller::view", "doc": "&quot;Gets a view from the resource folder&quot;"},
            
            {"type": "Class", "fromName": "Anunatak\\Framework\\Fakes", "fromLink": "Anunatak/Framework/Fakes.html", "link": "Anunatak/Framework/Fakes/WP_Post.html", "name": "Anunatak\\Framework\\Fakes\\WP_Post", "doc": "&quot;A fake WP_Post object.&quot;"},
                                                        {"type": "Method", "fromName": "Anunatak\\Framework\\Fakes\\WP_Post", "fromLink": "Anunatak/Framework/Fakes/WP_Post.html", "link": "Anunatak/Framework/Fakes/WP_Post.html#method___construct", "name": "Anunatak\\Framework\\Fakes\\WP_Post::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Fakes\\WP_Post", "fromLink": "Anunatak/Framework/Fakes/WP_Post.html", "link": "Anunatak/Framework/Fakes/WP_Post.html#method___get", "name": "Anunatak\\Framework\\Fakes\\WP_Post::__get", "doc": "&quot;Getter.&quot;"},
            
            {"type": "Class", "fromName": "Anunatak\\Framework", "fromLink": "Anunatak/Framework.html", "link": "Anunatak/Framework/Framework.html", "name": "Anunatak\\Framework\\Framework", "doc": "&quot;The main framework class&quot;"},
                                                        {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_initialize", "name": "Anunatak\\Framework\\Framework::initialize", "doc": "&quot;Initialize the framework&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_getTextDomain", "name": "Anunatak\\Framework\\Framework::getTextDomain", "doc": "&quot;Get the textdomain&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_getSlug", "name": "Anunatak\\Framework\\Framework::getSlug", "doc": "&quot;Get the slug&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_getVersion", "name": "Anunatak\\Framework\\Framework::getVersion", "doc": "&quot;Get the version&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_getUrl", "name": "Anunatak\\Framework\\Framework::getUrl", "doc": "&quot;Get the plugin URL&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_getPath", "name": "Anunatak\\Framework\\Framework::getPath", "doc": "&quot;Get the plugin path&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_getNamespace", "name": "Anunatak\\Framework\\Framework::getNamespace", "doc": "&quot;Get the plugin namespace&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Framework", "fromLink": "Anunatak/Framework/Framework.html", "link": "Anunatak/Framework/Framework.html#method_make", "name": "Anunatak\\Framework\\Framework::make", "doc": "&quot;Instantiates framework and plugin modules&quot;"},
            
            {"type": "Class", "fromName": "Anunatak\\Framework", "fromLink": "Anunatak/Framework.html", "link": "Anunatak/Framework/ListTable.html", "name": "Anunatak\\Framework\\ListTable", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method___construct", "name": "Anunatak\\Framework\\ListTable::__construct", "doc": "&quot;Set the variables and start everything up&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_initiate", "name": "Anunatak\\Framework\\ListTable::initiate", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_get_data", "name": "Anunatak\\Framework\\ListTable::get_data", "doc": "&quot;Get the current model&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_delete_item", "name": "Anunatak\\Framework\\ListTable::delete_item", "doc": "&quot;Delete an item&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_set_search", "name": "Anunatak\\Framework\\ListTable::set_search", "doc": "&quot;Set the search parameter&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_set_order", "name": "Anunatak\\Framework\\ListTable::set_order", "doc": "&quot;Set the order parameter&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_set_orderby", "name": "Anunatak\\Framework\\ListTable::set_orderby", "doc": "&quot;Set the orderby parameter&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_ajax_user_can", "name": "Anunatak\\Framework\\ListTable::ajax_user_can", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_no_items", "name": "Anunatak\\Framework\\ListTable::no_items", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_get_views", "name": "Anunatak\\Framework\\ListTable::get_views", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_get_columns", "name": "Anunatak\\Framework\\ListTable::get_columns", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_get_sortable_columns", "name": "Anunatak\\Framework\\ListTable::get_sortable_columns", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_prepare_items", "name": "Anunatak\\Framework\\ListTable::prepare_items", "doc": "&quot;Prepare data for display&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_column_default", "name": "Anunatak\\Framework\\ListTable::column_default", "doc": "&quot;Render a column when no column specific method exist.&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_column_cb", "name": "Anunatak\\Framework\\ListTable::column_cb", "doc": "&quot;Render the bulk edit checkbox&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_column_name", "name": "Anunatak\\Framework\\ListTable::column_name", "doc": "&quot;Method for the name column&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_display_tablenav", "name": "Anunatak\\Framework\\ListTable::display_tablenav", "doc": "&quot;Override of table nav to avoid breaking with bulk actions &amp;amp; according nonce field&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_extra_tablenav", "name": "Anunatak\\Framework\\ListTable::extra_tablenav", "doc": "&quot;Disables the views for &#039;side&#039; context as there&#039;s not enough free space in the UI\nOnly displays them on screen\/browser refresh. Else we&#039;d have to do this via an AJAX DB update.&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_get_bulk_actions", "name": "Anunatak\\Framework\\ListTable::get_bulk_actions", "doc": "&quot;Returns an associative array containing the bulk action&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\ListTable", "fromLink": "Anunatak/Framework/ListTable.html", "link": "Anunatak/Framework/ListTable.html#method_process_bulk_action", "name": "Anunatak\\Framework\\ListTable::process_bulk_action", "doc": "&quot;Process the bulk action&quot;"},
            
            {"type": "Class", "fromName": "Anunatak\\Framework\\Model", "fromLink": "Anunatak/Framework/Model.html", "link": "Anunatak/Framework/Model/Model.html", "name": "Anunatak\\Framework\\Model\\Model", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Anunatak\\Framework", "fromLink": "Anunatak/Framework.html", "link": "Anunatak/Framework/Router.html", "name": "Anunatak\\Framework\\Router", "doc": "&quot;Routing\nCreates a fake page for GET-requests, and appends content to it.&quot;"},
                                                        {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method___construct", "name": "Anunatak\\Framework\\Router::__construct", "doc": "&quot;Load up WordPress-actions&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_set_title", "name": "Anunatak\\Framework\\Router::set_title", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_load_routes", "name": "Anunatak\\Framework\\Router::load_routes", "doc": "&quot;Loads and executes routes&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_load_content", "name": "Anunatak\\Framework\\Router::load_content", "doc": "&quot;Add content to the page&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_load_title", "name": "Anunatak\\Framework\\Router::load_title", "doc": "&quot;Add title to the page&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_add", "name": "Anunatak\\Framework\\Router::add", "doc": "&quot;Adds a new route&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_get", "name": "Anunatak\\Framework\\Router::get", "doc": "&quot;Adds a new GET route&quot;"},
                    {"type": "Method", "fromName": "Anunatak\\Framework\\Router", "fromLink": "Anunatak/Framework/Router.html", "link": "Anunatak/Framework/Router.html#method_post", "name": "Anunatak\\Framework\\Router::post", "doc": "&quot;Adds a new POST route&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


