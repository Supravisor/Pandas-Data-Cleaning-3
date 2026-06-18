
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
let header = document.editor.header;
let naValues = document.editor.naValues;
let sep = document.editor.sep;
let decimal = document.editor.decimal;
let thousands = document.editor.thousands;
let parseDates = document.editor.parseDates;
let encoding = document.editor.encoding;
let skipBlankLines = document.editor.skipBlankLines;
let squeeze = document.editor.squeeze;
let usecols = document.getElementById("usecols");
let skiprowsStart = document.getElementById("skiprowsStart");
let skiprowsEnd = document.getElementById("skiprowsEnd");
let indexColumn = document.getElementById("indexColumn");
let indexCol = document.editor.indexCol;
let names = document.getElementById("names");
let dtype = document.getElementById("dtype");
let dtypes = document.editor.dtypes;

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

      if (skipBlankLines.value) {
        keep += ",\n        skip_blank_lines=" + skipBlankLines.value;
      }

      if (squeeze.value) {
        keep += ",\n        " + squeeze.name + "=" + squeeze.value;
      }

      if (usecols.value) {
        let columns = usecols.value.split(",");

        if (columns.every(item => Number(item))) {
          keep += ",\n        " + usecols.name + "=[" + usecols.value.replaceAll(/\s*,\s*/g, ", ") + "]";
        } else {
            keep += ",\n        " + usecols.name + "=['" + usecols.value.replaceAll(/\s*,\s*/g, "', '") + "']";
        }
      }

      if (skiprowsStart.value && !skiprowsEnd.value) {
        keep += ",\n        skiprows=" + skiprowsStart.value;
      }

      if (skiprowsStart.value && skiprowsEnd.value) {
        keep += ",\n        skiprows=[" + skiprowsStart.value + ", " + skiprowsEnd.value + "]";
      }

      document.editor.textbox.value+="\n" + fileObject.value + " = pd.read_csv('" + filePath.value + ".csv'" + keep + ")\n" + fileObject.value + ".head()";
  }
}

const timeStamp = (arg) => {
  if (fileObject.value === "") {
    return alert("Please enter a file object in the 'file object' field, in the 'Reading data with Python' section.");
  } else {
      document.editor.textbox.value+="\n" + fileObject.value + "['" + arg + "'] = pd.to_datetime(df['Timestamp'])";
  }
}

// Save to CSV file
let savePath = document.getElementById("savePath");
let saveObject = document.getElementById("saveObject");

const saveCsv = (arg) => {
  if (savePath.value === "") {
    return alert("Please enter a file path in the 'file path' field, in the 'Save to CSV file' section.");
  } 

  if (!saveObject.value) {
    document.editor.textbox.value+="\n" + savePath.value + "." + arg.slice(0, -1) + ")";
  } else {
  }
}
