// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

module('List view', {
    setup: function() {
        window.pageSize = 20;
    },
    teardown: function() {
        delete window.pageSize;
    }
});

test('Basic', function() {
    var $listView = $('<div>').listView({
        listView: {
            fields: {},
            dataProvider: function() {}
        }
    }).find('.list-view');
    var $toolbar = $listView.find('> .toolbar');
    var $table = $listView.find('> .data-table');

    equal($listView.size(), 1, 'List view present');
    equal($toolbar.size(), 1, 'Toolbar present');
    equal($table.size(), 1, 'Data table div present');
    equal($table.find('> .fixed-header table thead tr').size(), 1, 'Fixed header present');
    equal($table.find('> table.body tbody').size(), 1, 'Body table present');
});
