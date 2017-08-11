function fn(input,val){
    return input.split('->').filter((value)=>value!=val).join('->');
}

console.log(fn('1->2->3->3->4->5->3',3));
