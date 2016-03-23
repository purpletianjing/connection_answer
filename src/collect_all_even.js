'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_result = [];
  collection_result = collection.filter(function(ele){
    return (ele % 3 == 0);
  });
  return collection_result;

}

module.exports = collect_all_even;
