import React, { FC, memo } from 'react'

import cls from "./Card.module.scss"
import { CardSchema } from '../model/types/CardSchema';
interface CardProps {
    data: CardSchema;
    classNames?: string
}
const Card: FC<CardProps> = (props) => {
    const { id, name, nameFile, factoryNumber, length, width, height, date, noDocument, filePrimary, fileSecondary, fileSpec, otherFiles, miniDoc } = props.data

    return (
        <>
            <h2>{miniDoc ? "Малый Паспорт" : "Обычный Паспорт"}</h2>
            <div className={cls.card} id={id}>
                <div>{`Название фаила - ${nameFile}`}</div>
                <div>{`Заводской номер - ${factoryNumber}`}</div>
                <div>{`Номер документа - ${noDocument}`}</div>
                <div>{`Дата документа - ${date}`}</div>
                <div>{`Название элемента - ${name}`}</div>
                <div>{`Длина элемента - ${length}`}</div>
                <div>{`Ширина элемента - ${width}`}</div>
                <div>{`Высота элемента - ${height}`}</div>
                {filePrimary && <div className={cls.imgWrapper}>{`Изображение основной вид -`}<img className={cls.img} src={filePrimary} /></div>}
                {fileSecondary && <div className={cls.imgWrapper}>{`Изображение зона безопасности -`}<img className={cls.img} src={fileSecondary} /></div>}
                {fileSpec?.length && <div className={cls.imgWrapper}>{`Изображение спецификации -`}{Array.from(fileSpec).map((file, index) => (<img className={cls.img} key={index} src={file} />))}</div>}
                {otherFiles?.length && <div className={cls.imgWrapper}>{`Дополнительные изображения - `}{Array.from(otherFiles).map((file, index) => (<img className={cls.img} key={index} src={file} />))}</div>}
            </div>
        </>
    )
}

export default memo(Card)