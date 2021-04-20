let fs = require("fs");

// Input -> ?? input lena ana chaye

let input = process.argv.slice(2);
console.log("Input", input);    //Checking

//Identify the input

let options = [];
let filePath = [];
// loop : to extract option and file paths from the input
for (let i = 0; i < input.length; i++) {
    //How to get first character in js from string
    let firstChar = input[i].charAt(0);
    // Separating Options and File Paths
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);
    }
    else {
        filePath.push(input[i]);
    }
}

// console.log("Options array ", options);       //Checking
// console.log("File Path array ", filePath);   //Checking

// Check wheather the file exit or not

for (let i = 0; i < filePath.length; i++) {
    // To check existence of file in the system with help of fs module
    let isFilePathPresent = fs.existsSync(filePath[i]);
    if (isFilePathPresent == false) {
        console.log("File Path ", filePath[i], " Does Not Exist.");
        return;
    }
}

// Implement the command in files

// loop : to read the content from the file paths

let totalContent = ""; //to display the content of the file
for (let i = 0; i < filePath.length; i++) {
    let currentFileContent = fs.readFileSync(filePath[i], "utf-8"); //utf-8 is for string.(like .mp3 for song,.mp4 for video)
    // after every files's content -> next file content should come in next line
    totalContent += currentFileContent + "\r\n";  //"\n" is for next line to separate two file content.
}

console.log("content of the file Before Applying any Command \n", totalContent); //checking

//*** Logic to implement the "-s" in file content ****

let is_SOption = options.includes("-s");    //it will return true or false

if (is_SOption == true) {
    // split on the basis of line breaks
    // output array bana liya totalContent me se \r\n ke basis pe split kar liya 
    let outputArr = totalContent.split("\r\n"); //To remove empty lines
    // console.log(outputArr); //Checking

    // Temproray array 
    let tempArr = [];
    for (let i = 0; i < outputArr.length; i++) {
        //Vo element lelo jo empty nahi ha 
        if (outputArr[i] != "") {
            tempArr.push(outputArr[i]);
        }
    }

    //Now join the array, and esko totalContent me daal do
    totalContent = tempArr.join("\r\n");
    console.log("Content Of the Files After Implementing -s Command \n", totalContent);
}


//*** Logic to manage the Edge case ****

let is_NOption = options.includes("-n");
let is_BOption = options.includes("-b");

let finalOption;
if (is_NOption == true) {
    if (is_BOption == true) {

        // The option that comes first -> that would be the finalOption
        let idxB = options.indexOf("-b");
        let idxN = options.indexOf("-n");

        finalOption = idxB < idxN ? "-b" : "-n";

    }
    else {
        finalOption = "-n";
    }
}
else if (is_BOption == true) {
    finalOption = "-b";
}


//*** Logic to implement the "-n" in file content ****

if (finalOption == "-n") {
    let outputArr = totalContent.split("\r\n");

    let count = 1;
    for (let i = 0; i < outputArr.length; i++) {
        outputArr[i] = count + ". " + outputArr[i];
        count++;
    }
    totalContent = outputArr.join("\r\n");
    console.log("Content Of the Files After Implementing -n Command \n", totalContent);
}

//*** Logic to implement the "-b" in file content ****

if (finalOption == "-b") {
    let outputArr = totalContent.split("\r\n");
    let count = 1;

    for (let i = 0; i < outputArr.length; i++) {
        if (outputArr[i] != "") {
            outputArr[i] = count + ". " + outputArr[i];
            count++;
        }
    }

    totalContent = outputArr.join("\r\n");
    console.log("Content Of the Files After Implementing -b Command \n", totalContent);

}