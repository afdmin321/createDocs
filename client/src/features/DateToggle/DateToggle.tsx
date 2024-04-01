import { ChangeEvent, FC, memo, useState } from 'react'
import Checkbox from 'shared/ui/Checkbox/Checkbox'
import cls from "./DateToogle.module.scss"
import useDate from 'shared/lib/hooks/useDate/useDate'

interface DateToggleProps {
  date: string
  onDateChange: (date: string) => void
}
const DateToggle: FC<DateToggleProps> = (props) => {
  const { date, onDateChange } = props
  const [checked, setChecked] = useState(true)
  const { curentDate, isValid } = useDate()

  const checkboxHandler = (checked: boolean) => {
    setChecked(checked)
    if (checked) {
      onDateChange(curentDate)
    }
  }
  const dateHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const date = evt.target.value
    if (isValid(date)) {
      onDateChange(date)
    }

  }
  return (
    <div className={cls.dateToggle}>
      <Checkbox checked={checked} onChange={checkboxHandler} classDecor={!checked ? cls.decor : ''} placeholder='Текущая дата' />
      {!checked && <input type="date" value={date} onChange={dateHandler} />}
    </div>
  )
}

export default memo(DateToggle)