console.log("Node JS Developer");
console.log(`File_Name :${__filename}`);
console.log(`Directory_Name : ${__dirname}`);

let no = 0;
const demo = () => {
    no++;
    if(no<=100){
        console.log(`Counter :- ${no}`);
    }
};
setInterval(demo , 1000);

