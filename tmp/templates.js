angular.module('musicapp.templates', []).run(['$templateCache', function($templateCache) {
    $templateCache.put('pages/artists/albums/albumstile.html',
        '<bb-tile bb-tile-header="\'Albums\'" ng-show="albumsPaged" bb-tile-settings-click="something()">\n' +
        '    <div bb-tile-section>\n' +
        '        <div bb-pagination-content="albumsPaged">\n' +
        '            <table class="table">\n' +
        '                <thead>\n' +
        '                    <tr>\n' +
        '                        <th>Name</th>\n' +
        '                        <th>Year Released</th>\n' +
        '                    </tr>\n' +
        '                </thead>\n' +
        '                <tbody>\n' +
        '                    <tr ng-repeat="album in albumsPaged.items">\n' +
        '                        <td>{{album.name}}</td>\n' +
        '                        <td>{{album.year}}</td>\n' +
        '                    </tr>\n' +
        '                </tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div bb-pagination="albumsPaged"></div>\n' +
        '    </div>\n' +
        '</bb-tile>');
    $templateCache.put('pages/artists/artistpage.html',
        '<div class="bb-page-header">\n' +
        '    <div class="container-fluid">\n' +
        '        <div class="row">\n' +
        '            <div class="col-xs-12 col-md-3 col-lg-2">\n' +
        '                <img ng-src="{{artist.image_url}}" class="img-circle center-block" style="height: 150px" />\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-md-9 col-lg-10">\n' +
        '                <div class="row">\n' +
        '                    <div class="col-xs-12">\n' +
        '                        <h1>{{artist.name}}</h1>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="row">\n' +
        '                    <div class="col-xs-12">\n' +
        '                        <p></p>\n' +
        '                        <p style="white-space: pre-wrap">{{artist.bio}}</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="container-fluid">\n' +
        '    <bb-tile-dashboard bb-layout="layout" bb-tiles="tiles"></bb-tile-dashboard>\n' +
        '</div>');
    $templateCache.put('pages/artists/members/memberstile.html',
        '<bb-tile bb-tile-header="\'Members\'" ng-show="membersPaged">\n' +
        '    <div bb-tile-section>\n' +
        '        <div bb-pagination-content="membersPaged">\n' +
        '            <table class="table">\n' +
        '                <thead>\n' +
        '                    <tr>\n' +
        '                        <th>Name</th>\n' +
        '                        <th>Instrument</th>\n' +
        '                    </tr>\n' +
        '                </thead>\n' +
        '                <tbody>\n' +
        '                    <tr ng-repeat="member in membersPaged.items">\n' +
        '                        <td>{{member.name}}</td>\n' +
        '                        <td>{{member.instrument}}</td>\n' +
        '                    </tr>\n' +
        '                </tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div bb-pagination="membersPaged"></div>\n' +
        '    </div>\n' +
        '</bb-tile>');
    $templateCache.put('pages/overview/albums/albumlist.html',
        '<bb-grid bb-grid-options="gridOptions" bb-multiselect-actions="gridActions" bb-selections-updated="updateActions(selections)">\n' +
        '    <bb-grid-filters-summary ng-show="appliedFilters.decades.length > 0" bb-options="filterOptions">\n' +
        '        Excluding <span ng-repeat="item in appliedFilters.decades">{{item.name}}<span ng-if="!$last">, </span></span>\n' +
        '    </bb-grid-filters-summary>\n' +
        '    <bb-grid-filters bb-options="filterOptions">\n' +
        '        <bb-grid-filters-group bb-grid-filters-group-label="\'Decades\'">\n' +
        '            <div>\n' +
        '                <label><input type="checkbox" bb-check ng-model="locals.filter1980s" /> 1980s</label> \n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <label><input type="checkbox" bb-check ng-model="locals.filter1990s" /> 1990s</label> \n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <label><input type="checkbox" bb-check ng-model="locals.filter2000s" /> 2000s</label> \n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <label><input type="checkbox" bb-check ng-model="locals.filter2010s" /> 2010s</label> \n' +
        '            </div>\n' +
        '        </bb-grid-filters-group>\n' +
        '    </bb-grid-filters>\n' +
        '</bb-grid>');
    $templateCache.put('pages/overview/albums/albumphotocolumn.html',
        '<img ng-src="data/artists/{{data.artist | spaceToUnderscore}}/albums/{{data.name | spaceToUnderscore}}/photo.jpg" class="ma-overview-albums-album-img" />');
    $templateCache.put('pages/overview/albums/artistcolumn.html',
        '<a ui-sref="artist.views({artistName: data.artist})">{{data.artist}}</a>');
    $templateCache.put('pages/overview/artists/albumscolumn.html',
        '<ul class="ma-grid-cell-list">\n' +
        '    <li ng-repeat="item in ::data | limitTo: 3">{{::\'{0} ({1})\' | format : item.name : item.year}}</li>\n' +
        '    <li ng-if="data.length > 3">\n' +
        '        <a class="grid-no-search" tabindex="0" href="" bb-tooltip="views/pages/overview/artists/albumstooltip.html" data-tooltip-placement="bottom" data-tooltip-trigger="focus">\n' +
        '            {{::\'And {0} more\' | format : data.length - 3}}\n' +
        '        </a>\n' +
        '    </li>\n' +
        '</ul>');
    $templateCache.put('pages/overview/artists/albumstooltip.html',
        '<div class="tooltip-container">\n' +
        '    <ul class="ma-grid-cell-list">\n' +
        '        <li ng-repeat="item in ::data">{{::item.name}}</li>\n' +
        '    </ul>\n' +
        '</div>');
    $templateCache.put('pages/overview/artists/artistcolumn.html',
        '<a ui-sref="artist.views({artistName: data.name})" class="ma-overview-artists-artist-name">{{data.name}}</a>\n' +
        '<ul class="ma-grid-cell-list ma-overview-artists-artist-members">\n' +
        '    <li ng-repeat="member in ::data.members">\n' +
        '        {{\'{0}: {1}\' | format : member.name : member.instrument}}\n' +
        '    </li>\n' +
        '</ul>');
    $templateCache.put('pages/overview/artists/artistlist.html',
        '<form class="form-inline">\n' +
        '    <div class="form-group">\n' +
        '        <label for="find">Find</label>\n' +
        '        <input type="text" class="form-control" id="find">\n' +
        '    </div>\n' +
        '    <button type="submit" class="btn btn-default">Submit</button>\n' +
        '</form>\n' +
        '<form>\n' +
        '    <div class="form-inline">\n' +
        '        <h3>Client Information</h3>\n' +
        '        <label for="client-name">Client Name</label>\n' +
        '        <input type="text" class="form-control" id="client-name">\n' +
        '        <label for="serial-number">Serial Number</label>\n' +
        '        <input type="text" class="form-control" id="serial-number">\n' +
        '    </div>\n' +
        '</form>');
    $templateCache.put('pages/overview/artists/artistphotocolumn.html',
        '<img ng-src="data/artists/{{::data.name | spaceToUnderscore}}/photo.jpg" class="img-circle ma-overview-artists-artist-img" />');
    $templateCache.put('pages/overview/overview.html',
        '<bb-page>\n' +
        '    <div class="bb-page-content">\n' +
        '        <tabset bb-tab-scroll bb-tab-scroll-ready="tabsReady" class="bb-page-tabs">\n' +
        '            <tab active="artistsTabActive" bb-tab-sref="home.artists">\n' +
        '                <tab-heading>\n' +
        '                    Config Maker\n' +
        '                    <span class="bb-tab-header-count">{{artistCount}}</span>\n' +
        '                </tab-heading>\n' +
        '                <div ui-view="artistlist"></div>\n' +
        '            </tab>\n' +
        '        </tabset>\n' +
        '    </div>\n' +
        '</bb-page>');
}]);
