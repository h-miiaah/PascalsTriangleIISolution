/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    var result = Array(rowIndex + 1);
    var i = 0;
    var j = 0;

    for (i = rowIndex; i >= 0; i--) {
        result[i] = 1;
      }
      for (j = i + 1; j < rowIndex; j++) {
        result[j] += result[j + 1];
      }

      return result;

  };