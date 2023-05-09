

export const handlePhoneValid = (value: string | number): boolean => {
    return (value === "" || Number(value)) ? true : false
}

export const returnKey = (obj: {}, key: string) => {
    if (Object.hasOwn(obj, key)) {
        return obj[key]
    } else {
        return ""
    }
}

export const removeDupes = (arr = [], base = "id") => {
    const exist = {}
    const diff = []
    for (let i = 0; i < arr.length; i++) {
        if (exist[arr[i][base]]) {
            exist[arr[i][base]] += 1
        }
        else {
            exist[arr[i][base]] = 1
            diff.push(arr[i])
        }
    }
    return diff
}