function validateParenthesis(str: string) {
    const obj: Record<string, string> ={
        '{': '}',
        '[': ']',
        '(': ')'
    };
    
    const stack = [];
    
    for(let char of str) {
        if(obj[char]) stack.push(char);
        else {
            const top: any = stack.pop();
            if(top && char !== obj[top]) return false
        }
    }
    
    return stack.length === 0
}