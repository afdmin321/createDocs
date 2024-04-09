import { FC, useCallback } from "react";
import { nanoid } from "nanoid";
import cls from "./FormCard.module.scss";
import Input from "shared/ui/Input/Input";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getFormData } from "../model/selectors/getFormCard";
import { formCardActions } from "../model/slice/formCardSlice";
import { MAX_VALUE_NUM } from "shared/const/const";
import { getSetingDocumentData } from "entities/SetingDocuments/model/selectors/getSetingDocuments";
import InputFile from "shared/ui/file/InputFile";
import Button from "shared/ui/Button/Button";
import Spiner from "shared/ui/Spiner/Spiner";
import { setingDocumentsActions } from "entities/SetingDocuments";
import useFormValid from "shared/lib/hooks/useFormValid/useFormValid";

import dayjs from "dayjs";
import { CardSchema } from "entities/Card/model/types/CardSchema";
import { cardsActions } from "entities/Cards/model/slice/cardsSlice";
import { getCards } from "entities/Cards/model/selectors/getCards";
import { useBase64 } from "shared/lib/hooks/useBase64/useBase64";

interface FormCardProps {
  classNames?: string;
  onAddDocHandler: () => void;
}

const FormCard: FC<FormCardProps> = (props) => {
  const { classNames, onAddDocHandler } = props;
  const dispatch = useAppDispatch();
  const {
    name,
    factoryNumber,
    length,
    heigth,
    width,
    filePrimary,
    fileSecondary,
    fileSpec,
    otherFiles,
  } = useSelector(getFormData);
  const { noDocument, noOrder, date, miniDoc } = useSelector(
    getSetingDocumentData
  );
  const cards = useSelector(getCards);
  const valid = useFormValid([
    name,
    factoryNumber,
    length,
    heigth,
    width,
    filePrimary,
    fileSecondary,
  ]);
  const { encoding } = useBase64();
  const onCreateDocHandler = useCallback(async () => {
    if (
      factoryNumber &&
      filePrimary &&
      fileSecondary &&
      heigth &&
      length &&
      name &&
      width &&
      date &&
      noDocument &&
      noOrder
    ) {
      const data: CardSchema = {
        id: nanoid(4),
        miniDoc,
        nameFile: `${cards.length + 1}. ${String(noDocument).slice(1)} ${name}`,
        name: name,
        factoryNumber: `АН-${factoryNumber}-${dayjs(date).format(
          "YYYY"
        )}-${noOrder}-${String(noDocument).slice(1)}`,
        length: length,
        width: width,
        heigth: heigth,
        date: date,
        noDocument: noDocument,
        filePrimary: filePrimary,
        fileSecondary: fileSecondary,
        fileSpec: fileSpec || null,
        otherFiles: otherFiles || null,
      };
      dispatch(cardsActions.addCard(data));
      dispatch(setingDocumentsActions.editNoDocument(noDocument + 1));
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
    heigth,
    length,
    name,
    width,
    date,
    noDocument,
    noOrder,
    otherFiles,
    cards,
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

  const onLengthChange = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
        dispatch(formCardActions.setLength(valueNum));
      }
    },
    [dispatch, length]
  );

  const onHeigthChange = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && valueNum < MAX_VALUE_NUM) {
        dispatch(formCardActions.setHeigth(valueNum));
      }
    },
    [dispatch, heigth]
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
      const fileList: string[] = [];
      if (files?.length) {
        for (let i = 0; i < files.length; i++) {
          const result = await encoding(files[i]);
          fileList.push(result);
        }
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
      const fileList: string[] = [];
      if (files?.length) {
        for (let i = 0; i < files.length; i++) {
          const result = await encoding(files[i]);
          fileList.push(result);
        }
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
      <Button classNames={cls.exit} onClick={onExitHandler}>
        &#10006;
      </Button>
      <div className={cls.inputWrapper}>
        <Input
          value={name}
          className={cls.input}
          onChange={onNameChange}
          placeholder="Имя изделия"
        />
        <Input
          value={factoryNumber}
          onChange={onfactoryNumberChange}
          placeholder="Аббревиатура изделия"
        />
        <Input
          value={length}
          onChange={onLengthChange}
          placeholder="Длина изделия"
        />
        <Input
          value={width}
          onChange={onWidthChange}
          placeholder="Ширина изделия"
        />
        <Input
          value={heigth}
          onChange={onHeigthChange}
          placeholder="Высота изделия"
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
        <Button
          classNames={cls.button}
          onClick={onCreateDocHandler}
          disabled={!valid}
        >
          Добавить паспорт
        </Button>
      </div>
    </form>
  );
};
export default FormCard;
