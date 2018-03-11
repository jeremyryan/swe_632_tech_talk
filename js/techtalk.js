$(function() {
    var createMenuSelectToggle = function($nodeSet) {
        $nodeSet.click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this);
            if ($this.is('.pure-menu-disabled')) return;
            $nodeSet.removeClass('pure-menu-selected');
            $this.addClass('pure-menu-selected');
        });

    };

    createMenuSelectToggle($('#grids .pure-menu-item'));
    $('#grids .pure-menu-link').click(function() {
        var $link = $(this);
        console.log($link.attr('id'));
        switch ($link.attr('id')) {
            case 'grid-5ths-tab':
                $('#grid-24ths, #grid-responsive').hide();
                $('#grid-5ths').show();
                break;
            case 'grid-24ths-tab':
                $('#grid-5ths, #grid-responsive').hide();
                $('#grid-24ths').show();
                break;
            case 'grid-responsive-tab':
                $('#grid-5ths, #grid-24ths').hide();
                $('#grid-responsive').show();
                break;
        }
    });

    createMenuSelectToggle($('#forms .pure-menu-item'));
    $('#forms .pure-menu-link').click(function() {
        var $link = $(this);
        switch ($link.attr('id')) {
            case 'default-form-tab':
                $('#form-demo').removeClass('pure-form-stacked pure-form-aligned');
                break;
            case 'stacked-form-tab':
                $('#form-demo').addClass('pure-form-stacked').removeClass('pure-form-aligned');
                break;
            case 'aligned-form-tab':
                $('#form-demo').addClass('pure-form-aligned').removeClass('pure-form-stacked');
                break;
        }
    });

    createMenuSelectToggle($('#buttons .pure-menu-item'));
    $('#toggle-button-group').click(function() {
        $('#button-group').toggleClass('pure-button-group');
    });

    createMenuSelectToggle($('#tables .pure-menu-item'));
    $('#tables .pure-menu-link').click(function() {
        var $link = $(this);
        switch ($link.attr('id')) {
            case 'default-table-tab':
                $('#tables .pure-table').removeClass('pure-table-bordered pure-table-horizontal pure-table-striped');
                break;
            case 'bordered-table-tab':
                $('#tables .pure-table').addClass('pure-table-bordered').removeClass('pure-table-horizontal pure-table-striped');
                break;
            case 'horizontal-table-tab':
                $('#tables .pure-table').addClass('pure-table-horizontal').removeClass('pure-table-bordered pure-table-striped');
                break;
            case 'striped-table-tab':
                $('#tables .pure-table').addClass('pure-table-striped').removeClass('pure-table-bordered pure-table-horizontal');
                break;
        }
    });

    createMenuSelectToggle($('#menu-select .pure-menu-item'));
    createMenuSelectToggle($('#menu .pure-menu-item'));
    $('#menus .pure-menu-link').click(function() {
        var $link = $(this);
        switch ($link.attr('id')) {
            case 'vertical-menu-tab':
                $('#menu').removeClass('pure-menu-horizontal');
                break;
            case 'horizontal-menu-tab':
                $('#menu').addClass('pure-menu-horizontal');
                break;
        }
    });
});
