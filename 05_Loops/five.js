const coding = ['JS', 'Ruby', 'Java', 'Python']

coding.forEach(element => {
    console.log(element);
});

function printMe (item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'JS'
    },
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    }

]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})