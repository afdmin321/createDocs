import { Doc } from "../type/Doc";
import { imgStr } from "./imgStr";
import dayjs from "dayjs";
import consts from "../consts";
import { staticStr } from "./staticStr";
const dateMonth = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
export const templatePassport = (data: Doc) => {
  const {
    name,
    factoryNumber,
    noDocument,
    width,
    height,
    length,
    date,
    filePrimary,
    fileSecondary,
    fileSpec,
    otherFiles,
    print,
    number,
    ageGroup,
  } = data;
  const monthText = dateMonth[Number(dayjs(date).format("MM")) - 1];
  const year = dayjs(date).format("YYYY");
  const day = dayjs(date).format("DD");
  const dateFormatMonthText = `«${day}» ${monthText} ${year} года`;
  const dateFrmat = dayjs(date).format("DD.MM.YY");
  const printTwo = print
    ? `<img src="${consts.print}" class="wcspan wctext003" style="width: 160pt; height: 120,5272pt; left:120pt; top:275pt;" alt="">`
    : "";
  const printOne = print
    ? `<img src="${consts.print}" class="wcspan wctext003" style="width: 160pt; height: 120,5272pt; left:70pt; top:100pt;" alt="">`
    : "";
  const printThree = print
    ? `<img src="${consts.print}" class="wcspan wctext003" style="width: 160pt; height: 120,5272pt; left:30pt; top:400pt;" alt="">`
    : "";
  let allPages =
    11 +
    (fileSecondary ? 1 : 0) +
    (fileSpec ? fileSpec.length : 0) +
    (otherFiles ? otherFiles.length : 0);
  let currentDopPages = 5;
  const tempOthers = otherFiles
    ? otherFiles
        ?.map((file) =>
          imgStr({
            img: file,
            date: dateFrmat,
            noDocument,
            name,
            allPages,
            currentDopPages: (currentDopPages += 1),
          })
        )
        .join("")
    : "";
  const tempSaderty = fileSecondary
    ? imgStr({
        text: "Зона безопасности:",
        img: fileSecondary,
        date: dateFrmat,
        noDocument,
        name,
        allPages,
        currentDopPages: (currentDopPages += 1),
      })
    : "";
  const tempSpec = fileSpec
    ? fileSpec
        ?.map((file) =>
          imgStr({
            text: "Спецификации(комплектность):",
            img: file,
            date: dateFrmat,
            noDocument,
            name,
            allPages,
            currentDopPages: (currentDopPages += 1),
          })
        )
        .join("")
    : "";

  const {
    head,
    str1,
    str2,
    str3,
    str4,
    str5,
    str6,
    str7,
    str8,
    str9,
    str10,
    str11,
  } = staticStr({
    name,
    factoryNumber,
    otherFiles,
    noDocument,
    width,
    height,
    length,
    date: dateFrmat,
    year,
    currentDopPages,
    allPages,
    dateFormatMonthText,
    printOne,
    printTwo,
    printThree,
    filePrimary,
    number,
    ageGroup,
  });
  return `<!DOCTYPE html>
  <html>
    ${head}
    <body>
      ${str1}
      ${str2}
      ${str3}
      ${str4}
      ${str5}
      ${tempOthers}
      ${tempSaderty}
      ${tempSpec}
      ${str6}
      ${str7}
      ${str8}
      ${str9}
      ${str10}
      ${str11}
    </body>
  </html>`;
};
