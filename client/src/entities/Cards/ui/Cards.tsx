import { memo, useCallback } from 'react'
import cls from "./Cards.module.scss"
import { useSelector } from 'react-redux'
import { getCards } from '../model/selectors/getCards'
import Card from 'entities/Card/ui/Card'
import Button from 'shared/ui/Button/Button'
import { downloadDocs } from 'features/downloadDocs'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getDownloadDocs } from 'features/downloadDocs/model/selectors/getDownloadDocs'
import Spiner from 'shared/ui/Spiner/Spiner'


const Cards = () => {
    const cards = useSelector(getCards)
    const { isLoading, error } = useSelector(getDownloadDocs)
    const dispatch = useAppDispatch()

    const onDownloadHandler = useCallback(() => {
        dispatch(downloadDocs())
    }, [dispatch])
    return (
        <div className={cls.cards}>
            {cards.length ? cards.map(card => <Card data={card} key={card.id} />) : <div>Нету документов для скачавания</div>}
            {isLoading ? <Spiner /> : <Button classNames={cls.button} disabled={!Boolean(cards.length)} onClick={onDownloadHandler}>Скачать Документы</Button>}
            {error && <div>{`Произошла ошибка ${error}`}</div>}
        </div>
    )
}

export default memo(Cards)