import { FC, memo, useCallback } from "react";

import cls from "./Card.module.scss";
import { CardSchema } from "../model/types/CardSchema";
import Button from "shared/ui/Button/Button";
import { formCardActions } from "features/FormCard";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { setingDocumentsActions } from "entities/SetingDocuments";
import { useSelector } from "react-redux";
import { getDate } from "entities/SetingDocuments/model/selectors/getSetingDocuments";
import dayjs from "dayjs";

interface CardProps {
  data: CardSchema;
  classNames?: string;
}
const Card: FC<CardProps> = (props) => {
  const {
    id,
    name,
    nameFile,
    factoryNumber,
    length,
    width,
    height,
    noDocument,
    filePrimary,
    fileSecondary,
    fileSpec,
    otherFiles,
    miniDoc,
  } = props.data;
  const date = dayjs(useSelector(getDate)).format("DD.MM.YYYY");
  const dispatch = useAppDispatch();
  const editCard = useCallback(() => {
    dispatch(formCardActions.setName(name));
    dispatch(formCardActions.setNameFile(nameFile));
    dispatch(formCardActions.setId(id));
    dispatch(formCardActions.setFactoryNumber(factoryNumber.split("-")[1]));
    dispatch(formCardActions.setHeight(height));
    dispatch(formCardActions.setWidth(width));
    dispatch(formCardActions.setLength(length));
    dispatch(formCardActions.setFileSpec(fileSpec));
    dispatch(formCardActions.setOtherFiles(otherFiles));
    dispatch(formCardActions.setFilePrimary(filePrimary));
    dispatch(formCardActions.setFileSecondary(fileSecondary));
    dispatch(formCardActions.setEditDoc(true));
    dispatch(setingDocumentsActions.editNoDocument(noDocument));
  }, [
    dispatch,
    name,
    id,
    factoryNumber,
    height,
    width,
    length,
    filePrimary,
    fileSecondary,
    fileSpec,
    otherFiles,
  ]);
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
        {filePrimary && (
          <div className={cls.imgWrapper}>
            {`Изображение основной вид -`}
            <img className={cls.img} src={filePrimary} />
          </div>
        )}
        {fileSecondary && (
          <div className={cls.imgWrapper}>
            {`Изображение зона безопасности -`}
            <img className={cls.img} src={fileSecondary} />
          </div>
        )}
        {fileSpec?.length && (
          <div className={cls.imgWrapper}>
            {`Изображение спецификации -`}
            {Array.from(fileSpec).map((file, index) => (
              <img className={cls.img} key={index} src={file} />
            ))}
          </div>
        )}
        {otherFiles?.length && (
          <div className={cls.imgWrapper}>
            {`Дополнительные изображения - `}
            {Array.from(otherFiles).map((file, index) => (
              <img className={cls.img} key={index} src={file} />
            ))}
          </div>
        )}
        <Button classNames={cls.buttonEdit} onClick={editCard}>
          Изменить Паспорт
        </Button>
      </div>
    </>
  );
};

export default memo(Card);
