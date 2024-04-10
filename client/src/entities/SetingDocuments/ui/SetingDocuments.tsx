import { FC, memo, useCallback } from 'react'
import Button from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import cls from "./SetingDocuments.module.scss"
import DateToggle from 'features/DateToggle/DateToggle'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getDate, getMiniDoc, getNoDocument, getNoOrder, getPrint } from '../model/selectors/getSetingDocuments'
import { setingDocumentsActions } from '../model/slice/setingDocumentsSlice'
import { MAX_VALUE_NUM } from 'shared/const/const'
import useFormValid from 'shared/lib/hooks/useFormValid/useFormValid'
import Checkbox from 'shared/ui/Checkbox/Checkbox'
interface SetingDocumentsProps {
    classNames?: string
    addDoc: boolean
    onAddDocHandler: () => void
}

const SetingDocuments: FC<SetingDocumentsProps> = (props) => {
    const { classNames, onAddDocHandler, addDoc } = props
    const dispatch = useAppDispatch()
    const noOrder = useSelector(getNoOrder)
    const noDocument = useSelector(getNoDocument)
    const date = useSelector(getDate)
    const miniDoc = useSelector(getMiniDoc)
    const print = useSelector(getPrint)

    const onNoOrderChange = useCallback((value: string) => {
        const valueNum = Number(value.trim())
        if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
            dispatch(setingDocumentsActions.editNoOrder(valueNum))
        }
    }, [dispatch, noOrder])

    const onNoDocumentChange = useCallback((value: string) => {
        const valueNum = Number(value.trim())
        if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
            dispatch(setingDocumentsActions.editNoDocument(valueNum))
        }

    }, [dispatch, noDocument])

    const onDateChange = useCallback((date: string) => {
        dispatch(setingDocumentsActions.editDate(date))
    }, [dispatch, date])
    
    const onMiniDocChange = useCallback((checked: boolean) => {
        dispatch(setingDocumentsActions.editMiniDoc(checked))
    }, [dispatch, miniDoc])

    const onPrintChange = useCallback((checked: boolean) => {
        dispatch(setingDocumentsActions.editPrint(checked))
    }, [dispatch, miniDoc])
    return (
        <header className={`${cls.setingDocuments} ${classNames}`}>
            <Input value={noOrder} autofocus onChange={onNoOrderChange} readonly={addDoc} placeholder='№ Заказа' />
            <Input value={noDocument} onChange={onNoDocumentChange} readonly={addDoc} placeholder='№ Документа' />
            <DateToggle date={date} onDateChange={onDateChange} />
            <Checkbox checked={miniDoc} onChange={onMiniDocChange} placeholder='Малый паспорт'/>
            <Checkbox checked={print} onChange={onPrintChange} placeholder='С печатью'/>
            <Button onClick={onAddDocHandler} disabled={addDoc || !useFormValid([noOrder, noDocument, date])}>Добавить паспорт</Button>
        </header>
    )
}
export default memo(SetingDocuments)