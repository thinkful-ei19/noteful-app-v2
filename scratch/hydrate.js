'use strict';

const hydrateNotes = require('../utils/hydrateNotes');

const results = [{
  'id': 1005,
  'title': '10 ways cats can help you live to 100',
  'content': 'Posuere sollicitudin aliquam ultrices',
  'folder_id': null,
  'tagId': 2,
  'tagName': 'bar'
},
{
  'id': 1007,
  'title': '10 ways marketers are making you addicted to cats',
  'content': 'Posuere sollicitudin aliquam ultrices',
  'folder_id': 101,
  'tagId': 3,
  'tagName': 'baz'
},
{
  'id': 1008,
  'title': '11 ways investing in cats can make you a millionaire',
  'content': 'Posuere sollicitudin aliquam ultrices',
  'folder_id': 102,
  'tagId': 3,
  'tagName': 'baz'
}, {
  'id': 1008,
  'title': '11 ways investing in cats can make you a millionaire',
  'content': 'Posuere sollicitudin aliquam ultrices',
  'folder_id': 102,
  'tagId': 4,
  'tagName': 'qux'
}];

console.log(JSON.stringify(hydrateNotes(results), null, 2) );
