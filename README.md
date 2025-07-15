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