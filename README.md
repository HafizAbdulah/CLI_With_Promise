# 📊 Callback vs Promise – CLI Logger Comparison

This document compares the two versions of the CLI logger implementation:  
one using **Callbacks**, the other using **Promises with `.then()` chaining**.

---

## ✅ Features Performed in Both

- Check/create `input.txt`
- Read from `input.txt`
- Wait for 2 seconds (simulate async task)
- Write/append logs to `log.txt`

---

## 📁 Version 1: Callback-Based Implementation

### Pros
- Works in older Node.js versions.
- Direct mapping of async operations.

### Cons
- **Nesting grows quickly** → difficult to read (“Pyramid of Doom”).
- Hard to manage errors across steps.
- No return value chaining.

### Example Snippet:
```js
fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err);
  setTimeout(() => {
    fs.writeFile('log.txt', `Logged: ${data}`, (err) => {
      if (err) console.error(err);
      else console.log("Done!");
    });
  }, 2000);
});

# 📋 Async CLI Logger – Node.js

This CLI tool demonstrates file operations using **Promises** in Node.js. It reads an input file, waits, and appends log data — all without overwriting existing logs.

---

## 🚀 Features

- Ensures `input.txt` exists (auto-creates it if missing)
- Reads file content asynchronously
- Waits for 2 seconds (simulated async task)
- Appends a log entry to `log.txt`
- Uses Promises for clean and readable flow

---
# 2. Read Input File

fs.readFile(`input.txt`, `utf8`, ...)

- Reads the file asynchronously
- Passes its content to the next step 

#  Wait (Simulate Async Task)

- setTimeout(() => { ... }, 2000);
- Simulates a delay of 2 seconds

# Error Handling
Uses `.catch()` to catch and display errors if any step fails

# Run the App

node index.js.