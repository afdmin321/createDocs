const useFormValid = (arr: any[]) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false
        }
    }
    return true
} 
export default useFormValid