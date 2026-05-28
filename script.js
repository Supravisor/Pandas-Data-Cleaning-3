
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

  }
}
