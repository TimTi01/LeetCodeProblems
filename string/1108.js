// task -> https://leetcode.com/problems/defanging-an-ip-address/

//"Defanging an IP Address"

const defangIPaddr = (address) => {
    let arrStr = address.split('')

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === '.') {
            arrStr[i] = '[.]'
        }
    }

    return arrStr.join('')
}

console.log(defangIPaddr("1.1.1.1"));