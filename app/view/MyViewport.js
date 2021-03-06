/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    frame: true,
                    layout: {
                        type: 'border'
                    },
                    title: 'EVE Item Browser',
                    items: [
                        {
                            xtype: 'treepanel',
                            region: 'west',
                            itemId: 'categoriesPanel',
                            padding: '0 4 0 0',
                            width: 400,
                            resizable: true,
                            resizeHandles: 'e',
                            title: 'Categories',
                            store: 'EveTreeStore',
                            displayField: 'marketGroupName',
                            viewConfig: {
                                rootVisible: false
                            },
                            columns: [
                                {
                                    xtype: 'treecolumn',
                                    maxWidth: 300,
                                    minWidth: 150,
                                    dataIndex: 'marketGroupName',
                                    text: '英文名稱',
                                    flex: 4
                                },
                                {
                                    xtype: 'gridcolumn',
                                    autoRender: false,
                                    hidden: true,
                                    dataIndex: 'description',
                                    text: '英文說明',
                                    flex: 3
                                },
                                {
                                    xtype: 'gridcolumn',
                                    maxWidth: 150,
                                    sortable: false,
                                    dataIndex: 'nameText',
                                    text: '中文名稱',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    sortable: false,
                                    dataIndex: 'descText',
                                    text: '中文說明',
                                    flex: 1
                                }
                            ],
                            listeners: {
                                itemclick: {
                                    fn: me.onCategoriesPanelItemClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'gridpanel',
                            region: 'center',
                            itemId: 'itemListPanel',
                            title: 'Item List',
                            store: 'EveTypeStore',
                            viewConfig: {
                                itemId: ''
                            },
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'marketGroupID',
                                    text: 'MarketGroupID',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'typeID',
                                    text: 'TypeID',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return '<img src="http://gm.omatic.com.tw/eve-toolkit/Types/' + record.data['typeID'] + '_64.png" width="64px" height="64px"><br/>' + record.data['typeName'] + '<br/><br/>' + record.data['name'];
                                    },
                                    dataIndex: 'name',
                                    text: '項目名稱',
                                    flex: 2
                                },
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return '<div style="white-space:normal !important;">'
                                        + Ext.util.Format.stripTags(value).replace(/\n/g, '<br/>') +
                                        '</div>';
                                    },
                                    dataIndex: 'description',
                                    text: '項目說明',
                                    flex: 9
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onCategoriesPanelItemClick: function(dataview, record, item, index, e, eOpts) {
        if(record.get('leaf')) {

            /*Ext.Msg.alert('Clicked on a Tree Node', 
            'Node marketGroupID:' + record.get('marketGroupID') + '\n\r' +
            'Node marketGroupName: ' + record.get('marketGroupName') + '\n\r' +
            'Node parentGroupID: ' + record.get('parentGroupID') + '\n\r' +
            'Is it a leaf?: ' + record.get('leaf') + '\n' +
            'No of Children: ' + record.childNodes.length
            );*/

            var listPanel = this.down('#itemListPanel');
            listPanel.store.load({
                params: {
                    marketGroupID: record.get('marketGroupID')
                }
            });

        }
    }

});