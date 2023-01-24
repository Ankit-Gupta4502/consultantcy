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