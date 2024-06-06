let input = "javascript is awesome";

let i = 0;

while( i < input.length){
    if(input[i] == 'a'){
        input = input.slice(0,i)+'4'+input.slice(i+1);
    }else   if(input[i] == 'e'){
        input = input.slice(0,i)+'3'+input.slice(i+1);
    }else  if(input[i] == 'i'){
        input = input.slice(0,i)+'1'+input.slice(i+1);
    } else if(input[i] == 'o'){
        input = input.slice(0,i)+'0'+input.slice(i+1);
    }
    i++    
}


console.log(input);

