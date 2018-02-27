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
});
