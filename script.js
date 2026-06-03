
// Reading data with Python
let filePath = document.getElementById("filePath");
let fileObject = document.getElementById("fileObject");
let delimiter = document.editor.delimiter;

const readContents = () => {
  if (filePath.value === "") {
    return alert("Please enter a file path in the 'file path' field, in the 'Reading data with Python' section.");
  } else if (fileObject.value === "") {
      return alert("Please enter a file object in the 'file object' field, in the 'Reading data with Python' section.");
  } else {
      document.editor.textbox.value+="\nwith open('" + filePath.value  + ".csv', 'r') as " + fileObject.value + ":\n    for index, line in enumerate(" + fileObject.value + ".readlines()):\n        if (index < 10):\n            print(index, line)";
  }
}

const formatContents = () => {
  if (filePath.value === "") {
    return alert("Please enter a file path in the 'file path' field, in the 'Reading data with Python' section.");
  } else if (fileObject.value === "") {
    return alert("Please enter a file object in the 'file object' field, in the 'Reading data with Python' section.");
  } else {
      document.editor.textbox.value+="\nwith open('" + filePath.value  + ".csv', 'r') as " + fileObject.value + ":\n    for index, line in enumerate(" + fileObject.value + ".readlines()):\n        if index < 10:\n            timestamp, price = line.split(',')\n            print(f'{timestamp}: ${price}')";
  }
}

const useModule = () => {
  if (filePath.value === "") {
    return alert("Please enter a file path in the 'file path' field, in the 'Reading data with Python' section.");
  } else if (fileObject.value === "") {
    return alert("Please enter a file object in the 'file object' field, in the 'Reading data with Python' section.");
  } else {

      let keep = ",";

        if (delimiter.value) {
          keep = delimiter.value;
        }

      document.editor.textbox.value+="\nwith open('" + filePath.value  + ".csv', 'r') as " + fileObject.value + ":\n    reader = csv.reader(" + fileObject.value + ", delimiter='" + keep + "')\n    next(reader)\n    for index, values in enumerate(reader):\n        if not values:\n            continue\n        timestamp, price = values\n        print(f'date: {timestamp} price: ${price}')";
  }
}

// Reading data with Pandas
const readCsv = () => {
  if (filePath.value === "") {
    return alert("Please enter a file path in the 'file path' field, in the 'Reading data with Python' section.");
  } else if (fileObject.value === "") {
      return alert("Please enter a file object in the 'file object' field, in the 'Reading data with Python' section.");
  } else {

      let keep = "";

      if (header.value) {
        keep += ",\n        " + header.name + "=" + header.value;
      }

      if (naValues.value) {
        keep += ",\n        " + naValues.value;
      }

      if (sep.value) {
        keep += ",\n        " + sep.name + "='" + sep.value + "'";
      }

      if (decimal.value) {
        keep += ",\n        " + decimal.name + "=" + decimal.value;
      }

      if (thousands.value) {
        keep += ",\n        " + thousands.name + "=" + thousands.value;
      }

      if (parseDates.value) {
        keep += ",\n        " + parseDates.value;
      }

      if (names.value) {
        let regex = /\s*,\s*/g;
        keep += ",\n        names=['" + names.value.replaceAll(regex, "', '").split(",") + "']";
      }

      if (dtype.value) {
        if (dtypes.value === "") {
          return alert("Please select a dtype from the drop down menu to the right, in the 'Reading data with Pandas' section.");
        } else {
            keep += ",\n        dtype={'" + dtype.value + "': " + dtypes.value + "}";
        }
      }

      if (indexCol.value) {
        if (indexColumn.value === "") {
          return alert("Please enter an integer for an index in the 'index' field, in the 'Reading data with Pandas' section.");
        } else {
            keep += ",\n        " + indexCol.value + "[" + indexColumn.value + "]";
        }
      }

      if (encoding.value) {
        keep += ",\n        " + encoding.value;
      }

  }
}
