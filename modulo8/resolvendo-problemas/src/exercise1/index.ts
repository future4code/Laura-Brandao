function isOneEdit(str1: string, str2: string): boolean {
    if (str1.length - str2.length > 1 || str2.length - str1.length > 1) {
        return false
    }
    if (str1.length > str2.length || str1.length < str2.length) {
        return str1.includes(str2) || str2.includes(str1)
    }

    let diffenrence = 0

    for (let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            diffenrence += 1
        }
    }

    return diffenrence === 1
}

console.log(isOneEdit('banana', 'bacana'))