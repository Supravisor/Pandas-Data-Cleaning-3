
// Reading data with Python
let filePath = document.getElementById("filePath");
let fileObject = document.getElementById("fileObject");

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
