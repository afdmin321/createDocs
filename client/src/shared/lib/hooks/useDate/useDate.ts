import dayjs from "dayjs"
import { FORMAT_DATE } from "shared/const/const"

const useDate = () => {
    const curentDate = dayjs().format(FORMAT_DATE)
    const isValid = (date: string) => dayjs(date).isValid()
    return {
        curentDate,
        isValid
    }
}
export default useDate