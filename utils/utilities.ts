export const handlePhoneValid = (value: string | number): boolean => {
    return (value === "" || Number(value)) ? true : false
}