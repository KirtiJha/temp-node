// const os = require("os");

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);

// const path = require("path");
// console.log(path.sep);

// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absolute);

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");
// console.log(first, second);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" }
// );

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;

//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to our home page");
  res.end();
});

server.listen(5000);
