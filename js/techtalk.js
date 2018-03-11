$(function() {
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
    $('#buttons .pure-menu-link').click(function() {
        var $link = $(this);
        switch ($link.attr('id')) {
            case 'default-button-tab':
                $('#buttons .pure-button').removeClass('pure-button-disabled pure-button-active pure-button-primary');
                break;
            case 'disabled-button-tab':
                $('#buttons .pure-button').addClass('pure-button-disabled').removeClass('pure-button-active pure-button-primary');
                break;
            case 'active-button-tab':
                $('#buttons .pure-button').addClass('pure-button-active').removeClass('pure-button-disabled pure-button-primary');
                break;
            case 'primary-button-tab':
                $('#button-1').addClass('pure-button-primary').removeClass('pure-button-active pure-button-disabled');
                $('#button-2, #button-3').removeClass('pure-button-active pure-button-disabled pure-button-disabled');
                break;
        }
    });
    $('#toggle-button-group').click(function() {
        $('#button-group').toggleClass('pure-button-group');
    });
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

    $('#menus .pure-menu-item').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this);
        if ($this.is('.pure-menu-disabled')) return;
        $('#menus .pure-menu-item').removeClass('pure-menu-selected');
        $this.addClass('pure-menu-selected');
    });
});
