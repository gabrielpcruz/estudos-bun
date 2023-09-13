import { exec } from "child_process";
import { mkdir } from "fs";

await mkdir("aaa", () => {
    console.log(1);
    console.log(new Date());

});

// const {stdo, sdtee}  = exec("git clone --depth=1 https://github.com/gabrielpcruz/slim.git aaa", (e, a, d) => {
//     console.log(1)
//     console.log(a)
//     console.log(d)
//     console.log(new Date());
//
// });

const child = exec("git clone --depth=1 https://github.com/gabrielpcruz/slim.git aaa", {  }, (error) => {
    console.log(error); // an AbortError
});

console.log(new Date());


// const server = Bun.serve({
//     port: 3000,
//     fetch(req) {
//         console.log(1)
//         return new Response("Bun! ");
//     },
// });
//
// console.log(`Listening on http://localhost:${server.port} ...`);