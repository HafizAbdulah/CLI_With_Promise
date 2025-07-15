const fs = require('fs');
const path = require('path');

// 🔹 Step 1: Read file (returns a Promise)
function readFilePromise() {
  const filePath = path.join(__dirname, 'input.txt');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      else {
        console.log(" File content:", data);
        resolve(data);
      }
    });
  });
}

// 🔹 Step 2: Wait for 2 seconds (returns a Promise)
function waitTaskPromise(data) {
  return new Promise((resolve) => {
    console.log(" Waiting for 2 seconds...");
    setTimeout(() => {
      console.log(" Done waiting");
      resolve(data); // pass data to next
    }, 2000);
  });
}

// 🔹 Step 3: Write log to file (returns a Promise)
function writeLogPromise(data) {
  const logPath = path.join(__dirname, 'log.txt');
  const logMessage = `Task completed with input: ${data}\n`;
  return new Promise((resolve, reject) => {
    fs.appendFile(logPath, logMessage, (err) => {
      if (err) reject(err);
      else {
        console.log(" Log written to log.txt");
        resolve();
      }
    });
  });
}

// 🔗 Chain the Promises
readFilePromise()
  .then(waitTaskPromise)
  .then(writeLogPromise)
  .then(() => {
    console.log(" All tasks completed successfully (with Promises).");
  })
  .catch((err) => {
    console.error(" Error:", err);
  });
