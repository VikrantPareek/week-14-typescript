function greet(): void {
    console.log("It is just the begining");
}

function afterOne(fn: () => void){
    setTimeout(fn, 5000)
}

afterOne(greet)
