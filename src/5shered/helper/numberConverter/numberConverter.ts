export const numberConverter = (number : number) => {

    if (number <= 1000) return number

    if (number <= 999999999) {
        const numberStr = number + ""
        const maxLength = numberStr.length
        if (maxLength === 4) {
            return `${numberStr[0]}.${numberStr[1]}k`
        } else if (maxLength === 5) {
            return `${numberStr[0]}${numberStr[1]}.${numberStr[2]}k`
        }  else if (maxLength === 6) {
            return `${numberStr[0]}${numberStr[1]}${numberStr[2]}.${numberStr[3]}k`
        }  else if (maxLength === 7) {
            return `${numberStr[0]}.${numberStr[1]}m`
        }  else if (maxLength === 8) {
            return `${numberStr[0]}${numberStr[1]}.${numberStr[2]}m`
        }  else if (maxLength === 9) {
            return `${numberStr[0]}${numberStr[1]}${numberStr[2]}.${numberStr[3]}m`
        }  else if (maxLength === 10) {
            return `${numberStr[0]}.${numberStr[1]}ярд`
        }
    }

}
