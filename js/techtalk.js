$(function() {

    new Vue({
        el: '#forms',
        data: {
            stacked: false,
            aligned: false
        },
        methods: {
            tabClick: function(e) {
                var $tab = $(e.target);
                var tabId = $tab.attr('id');
                this.stacked = tabId === 'stacked-form-tab';
                this.aligned = tabId === 'aligned-form-tab';
            }
        }
    });

    new Vue({
        el: '#grids',
        data: {
            grid5ths: true,
            grid24ths: false,
            gridResponsive: false
        },
        methods: {
            tabClick: function(e) {
                var $tab = $(e.target);
                var tabId = $tab.attr('id');
                this.grid5ths = tabId === 'grid-5ths-tab';
                this.grid24ths = tabId === 'grid-24ths-tab';
                this.gridResponsive = tabId === 'grid-responsive-tab';
            }
        }
    });

    new Vue({
        el: '#buttons',
        data: {
            grouped: false
        }
    });

    new Vue({
        el: '#tables',
        data: {
            bordered: false,
            horizontal: false,
            striped: false
        },
        methods: {
            tabClick: function(e) {
                var $tab = $(e.target);
                var tabId = $tab.attr('id');
                this.bordered = tabId === 'bordered-table-tab';
                this.horizontal = tabId === 'horizontal-table-tab';
                this.striped = tabId === 'striped-table-tab';
            }
        }
    });

    new Vue({
        el: '#menus',
        data: {
            horizontal: false
        },
        methods: {
            tabClick: function(e) {
                var $tab = $(e.target);
                var tabId = $tab.attr('id');
                this.horizontal = tabId === 'horizontal-menu-tab';
            }
        }
    });
});
