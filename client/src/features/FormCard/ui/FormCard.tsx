import { FC, useCallback, useState } from "react";
import { nanoid } from "nanoid";
import cls from "./FormCard.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getFormData } from "../model/selectors/getFormCard";
import { formCardActions } from "../model/slice/formCardSlice";
import { MAX_VALUE_NUM } from "shared/const/const";
import { getSetingDocumentData } from "entities/SetingDocuments/model/selectors/getSetingDocuments";
import InputFile from "shared/ui/file/InputFile";
import { Button } from "shared/ui/Button/Button";
import { setingDocumentsActions } from "entities/SetingDocuments";
import useFormValid from "shared/lib/hooks/useFormValid/useFormValid";

import dayjs from "dayjs";
import { CardSchema } from "entities/Card/model/types/CardSchema";
import { cardsActions } from "entities/Cards/model/slice/cardsSlice";
import { getCards } from "entities/Cards/model/selectors/getCards";
import { useBase64 } from "shared/lib/hooks/useBase64/useBase64";
import { useFilesBase64 } from "shared/lib/hooks/useFilesBase64/useFilesBase64";
import Checkbox from "shared/ui/Checkbox/Checkbox";

interface FormCardProps {
  classNames?: string;
  onAddDocHandler: () => void;
}

const FormCard: FC<FormCardProps> = (props) => {
  const { classNames, onAddDocHandler } = props;
  const dispatch = useAppDispatch();
  const {
    id,
    name,
    nameFile,
    factoryNumber,
    length,
    height,
    width,
    filePrimary,
    fileSecondary,
    fileSpec,
    otherFiles,
    miniDoc,
    editDoc,
    number,
    ageGroup,
  } = useSelector(getFormData);
  const { noDocument, noOrder, date, print } = useSelector(
    getSetingDocumentData
  );
  const cards = useSelector(getCards);
  const valid = useFormValid([
    name,
    factoryNumber,
    length,
    height,
    width,
    filePrimary,
  ]);
  const { encoding } = useBase64();

  const onCreateDocHandler = useCallback(async () => {
    if (
      factoryNumber &&
      filePrimary &&
      height &&
      length &&
      name &&
      width &&
      date &&
      noDocument &&
      noOrder
    ) {
      const data: CardSchema = {
        id: id || nanoid(4),
        miniDoc,
        nameFile:
          nameFile ||
          `${cards.length + 1}. ${String(noDocument).slice(1)} ${name}`,
        name: name,
        factoryNumber: `АН-${factoryNumber}-${dayjs(date).format(
          "YYYY"
        )}-${noOrder}-${String(noDocument).slice(1)}`,
        length: length,
        width: width,
        height: height,
        noDocument: noDocument,
        filePrimary: filePrimary,
        fileSecondary: fileSecondary || null,
        fileSpec: fileSpec || null,
        otherFiles: otherFiles || null,
        number,
        ageGroup,
      };

      if (editDoc) {
        dispatch(cardsActions.editCard(data));
        const cardsNoDocs = cards.map((e) => {
          return e.noDocument;
        });
        const currentNoDoc = Math.max.apply(Math, cardsNoDocs);
        dispatch(setingDocumentsActions.editNoDocument(currentNoDoc + 1));
      } else {
        dispatch(cardsActions.addCard(data));
        dispatch(setingDocumentsActions.editNoDocument(noDocument + 1));
      }
      dispatch(formCardActions.reset());
      return;
    }
    alert(
      "Произошла ошибка: я не нашел одно или несколько заполненых полей обязательных к заполнению"
    );
  }, [
    dispatch,
    factoryNumber,
    filePrimary,
    fileSecondary,
    fileSpec,
    height,
    length,
    name,
    nameFile,
    width,
    date,
    noDocument,
    noOrder,
    otherFiles,
    cards,
    miniDoc,
    id,
    number,
    ageGroup,
  ]);

  const onNameChange = useCallback(
    (value: string) => {
      dispatch(formCardActions.setName(value));
    },
    [dispatch, name]
  );

  const onfactoryNumberChange = useCallback(
    (value: string) => {
      dispatch(formCardActions.setFactoryNumber(value));
    },
    [dispatch, factoryNumber]
  );
  const onAgeGroupChange = useCallback(
    (value: string) => {
      dispatch(formCardActions.setAgeGroup(value));
    },
    [dispatch, ageGroup]
  );
  const onNumberChange = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
        dispatch(formCardActions.setNumber(valueNum));
      }
    },
    [dispatch, number]
  );
  const onLengthChange = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
        dispatch(formCardActions.setLength(valueNum));
      }
    },
    [dispatch, length]
  );

  const onMiniDocChange = useCallback(
    (checked: boolean) => {
      dispatch(formCardActions.setMiniDoc(checked));
    },
    [dispatch, miniDoc]
  );

  const onHeightChange = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
        dispatch(formCardActions.setHeight(valueNum));
      }
    },
    [dispatch, height]
  );

  const onWidthChange = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
        dispatch(formCardActions.setWidth(valueNum));
      }
    },
    [dispatch, width]
  );

  const onFilePrimaryChange = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const result = await encoding(files[0]);
        dispatch(formCardActions.setFilePrimary(result));
      } else {
        dispatch(formCardActions.setFilePrimary(null));
      }
    },
    [dispatch, filePrimary]
  );

  const onFileSecondaryChanges = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const result = await encoding(files[0]);
        dispatch(formCardActions.setFileSecondary(result));
      } else {
        dispatch(formCardActions.setFileSecondary(null));
      }
    },
    [dispatch, fileSecondary]
  );

  const onFileSpecChanges = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const fileList: string[] = await useFilesBase64(files);
        if (fileList.length) {
          return dispatch(formCardActions.setFileSpec(fileList));
        } else {
          dispatch(formCardActions.setFileSpec(null));
        }
      }
    },
    [dispatch, fileSpec]
  );

  const onOtherFilesChanges = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const fileList: string[] = await useFilesBase64(files);
        if (fileList.length) {
          return dispatch(formCardActions.setOtherFiles(fileList));
        } else {
          dispatch(formCardActions.setOtherFiles(null));
        }
      }
    },
    [dispatch, otherFiles]
  );

  const onExitHandler = () => {
    onAddDocHandler();
    dispatch(formCardActions.reset());
    dispatch(setingDocumentsActions.reset());
    dispatch(cardsActions.reset());
  };

  return (
    <form className={`${cls.formCard} ${classNames}`}>
      <Button className={cls.exit} onClick={onExitHandler}>
        &#10006;
      </Button>
      <div className={cls.inputWrapper}>
        <Input
          value={name}
          className={cls.input}
          onChange={onNameChange}
          text="Имя изделия"
        />
        <Input
          value={factoryNumber}
          onChange={onfactoryNumberChange}
          text="Аббревиатура изделия"
        />
        <Input
          value={length}
          onChange={onLengthChange}
          text="Длина изделия"
        />
        <Input
          value={width}
          onChange={onWidthChange}
          text="Ширина изделия"
        />
        <Input
          value={height}
          onChange={onHeightChange}
          text="Высота изделия"
        />
        <Input
          value={number}
          onChange={onNumberChange}
          text="Количество изделия"
        />
        <Input
          value={ageGroup}
          onChange={onAgeGroupChange}
          text="Возростная категория"
        />
      </div>

      <div className={cls.inputWrapper}>
        <div>Добавить изабражение:</div>
        <InputFile
          file={filePrimary}
          onChange={onFilePrimaryChange}
          placeholder="Основной вид"
        />
        <InputFile
          file={fileSecondary}
          onChange={onFileSecondaryChanges}
          placeholder="Зона безопасности"
        />
        <InputFile
          file={fileSpec}
          onChange={onFileSpecChanges}
          placeholder="Спецификация"
          multiple={true}
        />
        <InputFile
          file={otherFiles}
          onChange={onOtherFilesChanges}
          placeholder="Доп фото"
          multiple={true}
        />
      </div>

      <div className={cls.buttonWrapper}>
        <Checkbox
          onChange={onMiniDocChange}
          checked={miniDoc}
          placeholder="Малый паспорт"
        ></Checkbox>
        <Button
          className={cls.button}
          onClick={onCreateDocHandler}
          disabled={!valid}
        >
          {editDoc ? "Изменить паспорт" : "Добавить паспорт"}
        </Button>
      </div>
    </form>
  );
};
export default FormCard;
