# Installation Instructions

## MongoDB Installation

### For macOS/Linux:

1. **Install MongoDB:**
   - You can use Homebrew on macOS:
     ```bash
     brew tap mongodb/brew
     brew install mongodb-community
     ```
   - For Linux, you can follow the official MongoDB installation guide for your specific distribution: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).

2. **Start MongoDB:**
   ```bash
   brew services start mongodb/brew/mongodb-community
   ```
   - For Linux, you can start MongoDB with:
     ```bash
     sudo systemctl start mongod
     ```

3. **Verify MongoDB is running:**
   ```bash
   mongo
   ```

### For Windows:

1. **Download MongoDB:**
   - Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and download the installer.

2. **Install MongoDB:**
   - Run the installer and follow the setup instructions. Make sure to select "Install MongoDB as a Service".

3. **Start MongoDB:**
   - Open Command Prompt and run:
     ```bash
     net start MongoDB
     ```

4. **Verify MongoDB is running:**
   ```bash
   mongo
   ```

## Redis Installation

### For macOS:

1. **Install Redis:**
   ```bash
   brew install redis
   ```

2. **Start Redis:**
   ```bash
   brew services start redis
   ```

3. **Verify Redis is running:**
   ```bash
   redis-cli ping
   ```

### For Linux:

1. **Install Redis:**
   - On Ubuntu, you can use:
     ```bash
     sudo apt update
     sudo apt install redis-server
     ```

2. **Start Redis:**
   ```bash
   sudo systemctl start redis
   ```

3. **Verify Redis is running:**
   ```bash
   redis-cli ping
   ```

### For Windows:

1. **Download Redis:**
   - You can download the latest Redis release for Windows from [Microsoft's Redis on Windows](https://github.com/microsoftarchive/redis/releases).

2. **Install Redis:**
   - Extract the downloaded files and run `redis-server.exe`.

3. **Verify Redis is running:**
   - Open another Command Prompt and run:
     ```bash
     redis-cli ping
     ```
