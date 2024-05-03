import { DataStaticStr } from "../type/DataStaticStr";
import { templateTable } from "./templateTable";

export const staticStr = (data: DataStaticStr) => {
  const { year, filePrimary, noDocument, name, otherFiles, currentDopPages, allPages, date, factoryNumber, dateFormatMonthText, width, height, length, printOne, printTwo } = data
  let str = currentDopPages
  const str1 = `<div class="wcdiv wcpage" style="width:595.3pt; height:841.9pt;">
    <div class="wcdiv" style="left:85.05pt; top:14.2pt;">
      <div class="wcdiv" style="left:-61.55pt; top:9.2pt;">
        <div class="wcdiv" style="left:189pt; clip:rect(0.5pt,361.3pt,136.2pt,0pt);">
          <div class="wcdiv" style="left:5.4pt; top:18.9pt;">
            <span class="wcspan wctext001" style="font-size:16pt; left:12.18pt; top:0.68pt; line-height:17.72pt;">Общество с ограниченной ответственностью </span>
          </div>
          <div class="wcdiv" style="left:5.4pt; top:37.3pt;">
            <span class="wcspan wctext001" style="font-size:18pt; left:32.73pt; top:0.76pt; line-height:19.93pt;">«Группа Компаний «Строй Город»</span>
          </div>
          <div class="wcdiv" style="left:3.95pt; top:58.99pt; width:353.65pt; height:0pt; border-top:solid 1.5pt #000000;">
          </div>
          <div class="wcdiv" style="left:5.4pt; top:60.49pt;">
            <span class="wcspan wctext001" style="left:0.59pt; top:0.51pt; line-height:13.29pt;">347910, Ростовская область г. Таганрог, ул.Котлостроительная,  </span>
            <span class="wcspan wctext001" style="left:102.47pt; top:14.31pt; line-height:13.29pt;">д.37-19, литер «А», офис 50</span>
          </div>
          <div class="wcdiv" style="left:23.4pt; top:88.09pt;">
            <span class="wcspan wctext002" style="font-size:10pt; left:51.92pt; top:1.15pt; font-family:serif; line-height:12.25pt;">•</span>
            <span class="wcspan wctext001" style="left:69.92pt; top:0.51pt; line-height:13.29pt;">тел.: 8 (8634) 45-60-61</span>
            <span class="wcspan wctext003" style="left:185.85pt; top:0.51pt; line-height:13.29pt;">, </span>
            <span class="wcspan wctext001" style="left:191.85pt; top:0.51pt; line-height:13.29pt;">8 (800)-201-77-73</span>
          </div>
          <div class="wcdiv" style="left:5.4pt; top:115.69pt;">
            <span class="wcspan wctext001" style="left:54.5pt; top:0.51pt; line-height:13.29pt;">ИНН № </span>
            <span class="wcspan wctext001" style="left:100.56pt; top:0.51pt; line-height:13.29pt;">6154142775</span>
            <span class="wcspan wctext001" style="left:160.56pt; top:0.51pt; line-height:13.29pt;">   ОГРН№ 1166196056355</span>
          </div>
        </div>
        <div class="wcdiv" style="top:304.75pt;">
          <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,91.1pt,0.25pt);">
            <div class="wcdiv" style="left:4.9pt; top:95.5pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
              <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
                <span class="wcspan wctext004" style="font-size:13pt; left:0.73pt; top:0.55pt; line-height:14.4pt;">Подп. и дата</span>
              </div>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="top:394.85pt;">
          <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,99.5pt,0.25pt);">
            <div class="wcdiv" style="left:4.9pt; top:103.9pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
              <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
                <span class="wcspan wctext004" style="font-size:13pt; left:8.27pt; top:0.55pt; line-height:14.4pt;">Инв. № дубл</span>
              </div>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="top:493.35pt;">
          <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,91.5pt,0.25pt);">
            <div class="wcdiv" style="left:4.9pt; top:95.9pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
              <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
                <span class="wcspan wctext004" style="font-size:13pt; left:2.2pt; top:0.55pt; line-height:14.4pt;">Взам. инв. №</span>
              </div>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="top:583.85pt;">
          <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,105.3pt,0.25pt);">
            <div class="wcdiv" style="left:4.9pt; top:109.7pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
              <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
                <span class="wcspan wctext004" style="font-size:13pt; left:7.83pt; top:0.55pt; line-height:14.4pt;">Подп. и дата</span>
              </div>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="top:688.15pt;">
          <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,109.75pt,0.25pt);">
            <div class="wcdiv" style="left:4.9pt; top:114.15pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
              <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
                <span class="wcspan wctext004" style="font-size:13pt; left:0pt; top:0.55pt; line-height:14.4pt;">Инв. № подп. </span>
              </div>
            </div>
          </div>
          <div class="wcdiv" style="left:54.2pt; top:-552.95pt; clip:rect(0.5pt,496.1pt,662.7pt,0.25pt);">
            <div class="wcdiv" style="left:5.4pt; top:17.75pt;">
              <span class="wcspan wctext003" style="font-size:15pt; left:0pt; top:0.64pt; line-height:16.61pt;">ОКП 968582</span>
            </div>
            <div class="wcdiv" style="left:5.4pt; top:54.55pt;">
              <span class="wcspan wctext001" style="font-size:17pt; left:0pt; top:0.72pt; line-height:18.83pt; text-align: center; width: 490pt;">${name}</span>
            </div>
            <div class="wcdiv" style="left:5.4pt; top:93.64pt;">
              <span class="wcspan wctext001" style="font-size:17pt; left:199.8pt; top:0.72pt; line-height:18.83pt;">ПАСПОРТ</span>
            </div>
            <div class="wcdiv" style="left:5.4pt; top:113.19pt;">
              <span class="wcspan wctext005" style="font-size:17pt; left:0pt; top:0.72pt; line-height:18.83pt; text-align: center; width: 490pt;">ССД 00.01.${noDocument}.002 – ПС</span>
            </div>
            <div class="wcdiv" style="left:5.4pt; top:148.84pt;">
              <span class="wcspan wctext003" style="left:209.5pt; top:0.51pt; line-height:13.29pt;">Содержание:</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:162.64pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">1.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Основные сведения об изделии</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.2</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:176.44pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">2.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Основные технические данные</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.2</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:190.23pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">3.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Комплектность</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.2</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:204.03pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">4.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Свидетельство о приемке</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.2</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:217.83pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">5.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Свидетельство о консервации</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.3</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:231.63pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">6.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Свидетельство об упаковке</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.3</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:245.43pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">7.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Гарантийные обязательства</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.3</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:259.23pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">8.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Рекламации</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.3</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:273.03pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">9.</span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Сведения о хранении</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.4</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:286.83pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">10. Сведения о консервации и расконсервации при эксплуатации</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.4</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:300.63pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">11. Учет неисправностей при эксплуатации</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.4</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:314.43pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">12. Учет технического обслуживания </span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.4</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:328.22pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">13. Сведения о ремонте</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.4</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:342.02pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">14. Инструкция по монтажу</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.5</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:355.82pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">15. Правила безопасной эксплуатации</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${6 + (otherFiles ? otherFiles.length : 0)}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:369.62pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">16. Инструкция по осмотру и проверке оборудования</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:383.42pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> перед началом эксплуатации</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${7 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:397.22pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">17. Инструкция по осмотру, обслуживанию и ремонту оборудования</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${7 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:411.02pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">18. </span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Особые отметки</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${7 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:424.82pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">19. Эскиз изделия</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${7 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:438.62pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">20. Приложение А (</span>
              <span class="wcspan wctext003" style="left:101.53pt; top:0.51pt; line-height:13.29pt;">Пример акта ежегодного основного осмотра </span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:452.42pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">      оборудования площадки</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${8 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:466.21pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">21. </span>
              <span class="wcspan wctext003" style="left:18pt; top:0.51pt; line-height:13.29pt;">Приложение Б </span>
              <span class="wcspan wctext003" style="left:95.75pt; top:0.51pt; line-height:13.29pt;">(</span>
              <span class="wcspan wctext003" style="left:99.75pt; top:0.51pt; line-height:13.29pt;">ГРАФИК ежедневного визуального осмотра)</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${9 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:480.01pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">22. Приложение В (</span>
              <span class="wcspan wctext003" style="left:100.86pt; top:0.51pt; line-height:13.29pt;">ПРАВИЛА эксплуатации детской игровой площадки) </span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${10 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:493.81pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">23. Приложение Г </span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${10 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:23.4pt; top:507.61pt;">
              <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">24. Приложение Д</span>
              <span class="wcspan wctext003" style="left:406.8pt; top:0.51pt; line-height:13.29pt;">стр.${11 + allPages - 11}</span>
            </div>
            <div class="wcdiv" style="left:5.4pt; top:645.6pt;">
              <span class="wcspan wctext003" style="font-size:14pt; left:176.74pt; top:0.6pt; line-height:15.5pt;">г. Таганрог – ${year} год</span>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="left:-0.25pt; top:305.25pt; width:0pt; height:491.65pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:53.95pt; top:135.2pt; width:0pt; height:661.7pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:188.75pt; top:0.5pt; width:0pt; height:134.7pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:550.3pt; top:0.5pt; width:0pt; height:796.4pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:26.95pt; top:305.25pt; width:0pt; height:89.6pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:26.95pt; top:395.35pt; width:0pt; height:98pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:26.95pt; top:493.85pt; width:0pt; height:90pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:26.95pt; top:584.35pt; width:0pt; height:103.8pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:26.95pt; top:688.65pt; width:0pt; height:108.25pt; border-left:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:54.2pt; top:0pt; width:496.6pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:53.95pt; top:135.2pt; width:496.35pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:-0.25pt; top:304.75pt; width:54.2pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:0.25pt; top:394.85pt; width:53.7pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:0.25pt; top:493.35pt; width:53.7pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:0.25pt; top:583.85pt; width:53.7pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:0.25pt; top:688.15pt; width:53.7pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
        <div class="wcdiv" style="left:-0.25pt; top:796.9pt; width:551.05pt; height:0pt; border-top:solid 0.75pt #000000;">
        </div>
      </div>
    </div>
    <div class="wcdiv" style="left:83.1pt; top:23.9pt;">
      <div class="wcdiv" style="clip:rect(0pt,129.15pt,135.7pt,-5.4pt);" title="short_wite">
        <img class="wcimg" style="left:3.13pt; top:0pt; width:117.75pt; height:117.75pt;" src="data:image/png;base64,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" />
      </div>
    </div>
  </div>`

  const str2 = templateTable({
    name, date, noDocument, currentDopPages: 2, allPages, content: `
        <div class="title bold content">1. Основные сведения об изделии</div>
        <div class="content">1.1. Наименование:&emsp;<span class="bold">${name}</span></div>
        <div class="content">
          Наименование предприятия изготовителя и адрес:
          <div class="border" style="padding: 0">«Группа Компаний «Строй Город»,</div>
        </div>
        <div class="bold">
          347910, Ростовская область, г. Таганрог, ул.Котлостроительная, д.37-19, литер «А», офис 50
        </div>
        <div class="content">1.3. Заводской номер&nbsp;${factoryNumber}</div>
        <div class="content">1.4. Дата выпуска ${dateFormatMonthText}</div>
        <div class="content">1.5. Рекомендуемый возраст посетителей - от 6 до 12 лет.</div>
        <div class="title bold content">2. Основные технические данные</div>
        <div class="contetn">
          2.1. Максимальная высота от уровня поверхности до верхней отметки ${height} мм
        </div>
        <div class="content">2.2. Размеры:</div>
        <table class="table">
          <tr>
            <th class="column">Габариты, мм:</th>
            <th class="column leftColumn">&emsp;</th>
          </tr>
          <tr>
            <td class="column">Длина</td>
            <td class="column leftColumn">${length} мм</td>
          </tr>
          <tr>
            <td class="column">Ширина</td>
            <td class="column leftColumn">${width} мм</td>
          </tr>
          <tr>
            <td class="column">Высота</td>
            <td class="column leftColumn">${height} мм</td>
          </tr>
        </table>
        <div class="bold" style="padding: 4pt 0">
          Производитель оставляет за собой право на незначительные отклонение от габаритных размеров
          конструкции!
        </div>
        <div class="title bold">3. Комплектность</div>
        <div class="content">Комплектность смотреть в инструкции по монтажу.</div>
        <div class="title bold">4. Свидетельство о приемке</div>
        <div>
          <div style="line-height: 15.29pt; white-space: normal">
            <div class="border">${name}</div>
            &emsp;&emsp;заводской номер:&nbsp;<span class="border">${factoryNumber}</span>
            <br />
            <div style="white-space: normal; width: 470pt; line-height: 15.29pt">
              соответствует ГОСТ 34614.1-2019, ГОСТ 34614.2-2019, ГОСТ 34614.3-2019, ГОСТ 34614.4- 2019,
              ГОСТ 34614.5-2019, ГОСТ 34614.6-2019, ГОСТ 34614.7-2019 и признан годным к эксплуатации.
            </div>
            <div style="line-height: 30pt">
              &emsp;Дата выпуска&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${dateFormatMonthText}
            </div>
            <div style="line-height: 30pt">М.П.</div>
            <div style="margin-top: 40pt">
              &emsp;<span class="border" style="display: inline-block"
                >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span
              >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <div class="border">Болвинов А.С</div>
            </div>
            <div style="font-size: 10pt">
              &emsp;<span style="display: inline-block">&emsp;&emsp;</span>личная
              подпись&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <div style="display: inline-block">инициалы, фамилия</div>
            </div>
          </div>
        </div>
  `
  })
  const str3 = templateTable({
    name, date, noDocument, currentDopPages: 3, allPages, content: `
    <div class="title bold content">5. Свидетельство о консервации</div>
    <div class="content">Наименование изделия: <span class="bold">${name}</span></div>
    <div class="content">Заводской номер: <span class="border bold">${factoryNumber}</span></div>
    <div class="content">подвергнуто консервации&emsp;_____________________________</div>
    <div class="content">
      наименование предприятия, проводившего консервацию_________________________
    </div>
    <div class="content">согласно требованиям нормативных документов</div>
    <div class="content">Дата консервации_____________________________</div>
    <div class="content">Срок консервации_____________________________</div>
    <div class="content">Консервацию провел___________________________</div>
    <div class="content" style="line-height: 30pt">&emsp;&emsp;М.П.   </div>
    <div style="margin-top: 2pt">
      &emsp;&emsp;&emsp;&emsp;<span class="border" style="display: inline-block"
        >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span
      >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <div class="border">Болвинов А.С</div>
    </div>
    ${printOne}
    <div style="font-size: 10pt">
      &emsp;<span style="display: inline-block">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>личная
      подпись&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <div style="display: inline-block">инициалы, фамилия</div>
    </div>
    <div class="title bold" style="margin-top: 2px">6. Свидетельство об упаковке</div>
    <div class="bold content">${name}</div>
    <div class="content">Заводской номер ${factoryNumber} упаковано</div>
    <div class="">
      наименование предприятия, проводившего упаковку:
      <div class="border" style="padding: 0">«Группа Компаний «Строй Город»</div>
      согласно требованиям нормативных документов
    </div>
    <div class="content">Дата упаковки ${dateFormatMonthText}</div>
    <div class="content" style="line-height: 30pt">&emsp;&emsp;М.П.   </div>
    <div style="margin-top: 10pt">
      Упаковку провел<span class="border" style="display: inline-block"
        >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span
      >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <div class="border">Болвинов А.С</div>
    </div>
    ${printTwo}
    <div style="font-size: 10pt">
      &emsp;<span style="display: inline-block">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>личная
      подпись&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <div style="display: inline-block">инициалы, фамилия</div>
    </div>
    <div class="title bold" style="margin-top: 2pt">7. Гарантийные обязательства</div>
    <div class="content">
      Предприятие-изготовитель гарантирует соответствие <span class="bold">${name}</span>, заводской
      номер  <span class="bold border">${factoryNumber}</span> требованиям ГОСТ 34614.1-2019, ГОСТ
      34614.2-2019, ГОСТ 34614.3-2019, ГОСТ 34614.4-2019, ГОСТ 34614.5-2019, ГОСТ 34614.6-2019, ГОСТ
      34614.7-2019 при соблюдении эксплуатантом (владельцем) правил монтажа, эксплуатации,
      транспортирования и хранения.
    </div>
    <div class="content">
      Срок гарантии на изделие 12 месяцев со дня поставки изделия эксплуатанту (владельцу). При
      нарушении правил монтажа, эксплуатации, транспортирования и хранения оборудования изготовитель
      не несет ответственности за выход из строя как оборудования в целом, так и его отдельных
      элементов.
    </div>
    <div class="title bold">8. Рекламации</div>
    <div class="content">
      В случае обнаружения дефектов или поломок оборудования в период гарантийного срока по вине
      изготовителя (поставщика) составляется Акт-рекламация. Акт-рекламация должен содержать:
    </div>
    <div>- наименование;</div>
    <div>- заводской номер и дату выпуска;</div>
    <div>- даты получения, монтажа и ввода в эксплуатацию;</div>
    <div>- общее время работы, ч;</div>
    <div>- сведения об имевшихся неисправностях.</div>
    <div class="content">Детали, вышедшие из строя и послужившие причиной остановки оборудования, должны быть сохранены до приезда представителя изготовителя.</div>
    `
  })
  const str4 = templateTable({
    name, date, noDocument, currentDopPages: 4, allPages, content:
      `<div class="wcdiv" style="left:-5pt; clip:rect(0.5pt,491.45pt,682pt,0.25pt);">
      <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
    <span class="wcspan wctext001" style="left:176.53pt; top:0.51pt; line-height:13.29pt;">9. Сведения о хранении</span>
  </div>
  <div class="wcdiv" style="left:5.8pt; top:14.3pt;">
    <div class="wcdiv" style="left:0.33pt; top:0.7pt; width:479.25pt; height:12.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:0.7pt; top:1.45pt; width:240.85pt; height:11.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="clip:rect(1.5pt,241.7pt,14pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:110.44pt; top:0.42pt; line-height:11.07pt;">Дата</span>
      </div>
    </div>
    <div class="wcdiv" style="left:0pt; top:1.5pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:241.7pt; top:1.5pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:0.75pt; width:242.45pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:13pt; width:242.45pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="top:13.75pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:22.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:114.8pt; height:21.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="clip:rect(0.75pt,115.65pt,23.25pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:8.61pt; top:5.42pt; line-height:11.07pt;">установки на хранение</span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:21.5pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:115.65pt; top:0.75pt; width:0pt; height:21.5pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:22.25pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.1pt; top:0.7pt; width:124.45pt; height:21.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:116.4pt; clip:rect(0.75pt,125.3pt,23.25pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:23.44pt; top:5.42pt; line-height:11.07pt;">снятия с хранения</span>
        </div>
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0.75pt; width:0pt; height:21.5pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:241.7pt; top:0.75pt; width:0pt; height:21.5pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:22.25pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:243.15pt; top:-12.3pt; width:114.8pt; height:34.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:-13.75pt; clip:rect(1.5pt,115.65pt,37pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:0.21pt; top:11.92pt; line-height:11.07pt;">Условия хранения изделия</span>
        </div>
      </div>
      <div class="wcdiv" style="left:242.45pt; top:-12.25pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.1pt; top:-12.25pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:-13pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:22.25pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:359.55pt; top:-12.3pt; width:119.65pt; height:34.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:-13.75pt; clip:rect(1.5pt,120.5pt,37pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:10.95pt; top:0.42pt; line-height:11.07pt;">Должность, инициалы, </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:18.36pt; top:11.92pt; line-height:11.07pt;">фамилия и подпись </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:15.72pt; top:23.42pt; line-height:11.07pt;">ответственного лица</span>
        </div>
      </div>
      <div class="wcdiv" style="left:358.85pt; top:-12.25pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:-12.25pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:-13pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:22.25pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:36.75pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:114.8pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="clip:rect(0.75pt,115.65pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:115.65pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.1pt; top:0.7pt; width:124.45pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:116.4pt; clip:rect(0.75pt,125.3pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:241.7pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:14.55pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:243.15pt; top:0.7pt; width:114.8pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:242.45pt; clip:rect(0.75pt,115.65pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:242.45pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.1pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:14.55pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:359.55pt; top:0.7pt; width:119.65pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:358.85pt; clip:rect(0.75pt,120.5pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:358.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:0pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:14.55pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:52.05pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:114.8pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:115.65pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.1pt; top:0.7pt; width:124.45pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:241.7pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:14.55pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:243.15pt; top:0.7pt; width:114.8pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.1pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:14.55pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:359.55pt; top:0.7pt; width:119.65pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:0pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:14.55pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:67.35pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:114.8pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:115.65pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.1pt; top:0.7pt; width:124.45pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:241.7pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:0pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.4pt; top:14.55pt; width:126.05pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:243.15pt; top:0.7pt; width:114.8pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.1pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:0pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:242.45pt; top:14.55pt; width:116.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:359.55pt; top:0.7pt; width:119.65pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:0pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:358.85pt; top:14.55pt; width:121.25pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0.75pt; width:0pt; height:81.89pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:479.73pt; top:0.75pt; width:0pt; height:81.89pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:82.64pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
  </div>
  <div class="wcdiv" style="left:5.4pt; top:111.49pt;">
    <span class="wcspan wctext001" style="left:62.42pt; top:0.51pt; line-height:13.29pt;">10. Сведения о консервации и расконсервации при эксплуатации</span>
  </div>
  <div class="wcdiv" style="left:5.8pt; top:125.29pt;">
    <div class="wcdiv" style="left:0.33pt; top:0.7pt; width:479.25pt; height:58.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:0.7pt; top:1.45pt; width:120.9pt; height:57.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="clip:rect(1.5pt,121.75pt,60pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">Дата консервации</span>
      </div>
    </div>
    <div class="wcdiv" style="left:0pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:121.75pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:0.75pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:59pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:123.2pt; top:1.45pt; width:115.95pt; height:57.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:122.5pt; clip:rect(1.5pt,116.8pt,60pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">Дата расконсервации</span>
      </div>
    </div>
    <div class="wcdiv" style="left:122.5pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:239.3pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:122.5pt; top:0.75pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:122.5pt; top:59pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:240.75pt; top:1.45pt; width:115.95pt; height:57.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:240.05pt; clip:rect(1.5pt,116.8pt,60pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Наименование </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">организации, </span>
      </div>
      <div class="wcdiv" style="left:0.75pt; top:24.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Проводившей  </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">консервацию </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">(расконсервацию)</span>
      </div>
    </div>
    <div class="wcdiv" style="left:240.05pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:356.85pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:240.05pt; top:0.75pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:240.05pt; top:59pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:358.3pt; top:1.45pt; width:120.9pt; height:57.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:357.6pt; clip:rect(1.5pt,121.75pt,60pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">Должность, инициалы, </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">фамилия и подпись  </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">ответственного лица</span>
      </div>
    </div>
    <div class="wcdiv" style="left:357.6pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:479.35pt; top:1.5pt; width:0pt; height:57.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:357.6pt; top:59pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="top:59.75pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="clip:rect(0.75pt,121.75pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:121.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:123.2pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:122.5pt; clip:rect(0.75pt,116.8pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:122.5pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:239.3pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:240.75pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:240.05pt; clip:rect(0.75pt,116.8pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:240.05pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:356.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.3pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:357.6pt; clip:rect(0.75pt,121.75pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:75.04pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:121.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:123.2pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:239.3pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:240.75pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:356.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.3pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:90.34pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:121.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:123.2pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:239.3pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:122.5pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:240.75pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:356.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:240.05pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.3pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0.75pt; width:0pt; height:104.89pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:479.73pt; top:0.75pt; width:0pt; height:104.89pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:105.64pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
  </div>
  <div class="wcdiv" style="left:5.4pt; top:245.48pt;">
    <span class="wcspan wctext001" style="left:121.99pt; top:0.51pt; line-height:13.29pt;">11. Учет неисправностей при эксплуатации</span>
  </div>
  <div class="wcdiv" style="left:5.8pt; top:259.28pt;">
    <div class="wcdiv" style="left:0.33pt; top:0.7pt; width:479.25pt; height:70.39pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:0.7pt; top:1.45pt; width:78.15pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="clip:rect(1.5pt,79pt,71.49pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Дата отказа </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">изделия, его </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">составной части </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">или элемента </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:46.42pt; line-height:11.07pt;">конструкции</span>
      </div>
    </div>
    <div class="wcdiv" style="left:0pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:79pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:0.75pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:70.49pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:80.45pt; top:1.45pt; width:78.15pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:79.75pt; clip:rect(1.5pt,79pt,71.49pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Характер </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">(внешнее </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">проявление)  </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">неисправности</span>
      </div>
    </div>
    <div class="wcdiv" style="left:79.75pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:158.75pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:79.75pt; top:0.75pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:79.75pt; top:70.49pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:160.2pt; top:1.45pt; width:78.1pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:159.5pt; clip:rect(1.5pt,78.95pt,71.49pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Время работы </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">отказавшее  </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">составной части </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">или элемента </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:46.42pt; line-height:11.07pt;">конструкции, ч</span>
      </div>
    </div>
    <div class="wcdiv" style="left:159.5pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:238.45pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:159.5pt; top:0.75pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:159.5pt; top:70.49pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:239.9pt; top:1.45pt; width:78.1pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:239.2pt; clip:rect(1.5pt,78.95pt,71.49pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Принятые меры </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">по устранению </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">неисправности </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">(расход ЗИП, </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:46.42pt; line-height:11.07pt;">направление акта-</span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:57.92pt; line-height:11.07pt;">рекламации)</span>
      </div>
    </div>
    <div class="wcdiv" style="left:239.2pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:318.15pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:239.2pt; top:0.75pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:239.2pt; top:70.49pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:319.6pt; top:1.45pt; width:79.9pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:318.9pt; clip:rect(1.5pt,80.75pt,71.49pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Должность, </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">инициалы, </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">фамилия и </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">подпись </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:46.42pt; line-height:11.07pt;">ответственного </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:57.92pt; line-height:11.07pt;">лица</span>
      </div>
    </div>
    <div class="wcdiv" style="left:318.9pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:399.65pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:318.9pt; top:0.75pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:318.9pt; top:70.49pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:401.1pt; top:1.45pt; width:78.1pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:400.4pt; clip:rect(1.5pt,78.95pt,71.49pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Примечание</span>
      </div>
    </div>
    <div class="wcdiv" style="left:400.4pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:479.35pt; top:1.5pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:400.4pt; top:0.75pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:400.4pt; top:70.49pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="top:71.24pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:78.15pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="clip:rect(0.75pt,79pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:79pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:80.45pt; top:0.7pt; width:78.15pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:79.75pt; clip:rect(0.75pt,79pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:79.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:158.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:0pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:14.55pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:160.2pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:159.5pt; clip:rect(0.75pt,78.95pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:159.5pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:238.45pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:239.9pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:239.2pt; clip:rect(0.75pt,78.95pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:239.2pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:318.15pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:319.6pt; top:0.7pt; width:79.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:318.9pt; clip:rect(0.75pt,80.75pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:318.9pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:399.65pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:0pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:14.55pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:401.1pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:400.4pt; clip:rect(0.75pt,78.95pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:400.4pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:86.54pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:78.15pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:79pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:80.45pt; top:0.7pt; width:78.15pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:158.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:0pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:14.55pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:160.2pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:238.45pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:239.9pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:318.15pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:319.6pt; top:0.7pt; width:79.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:399.65pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:0pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:14.55pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:401.1pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:101.84pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:78.15pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:79pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:80.45pt; top:0.7pt; width:78.15pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:158.75pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:0pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:79.75pt; top:14.55pt; width:79.75pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:160.2pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:238.45pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:159.5pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:239.9pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:318.15pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:239.2pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:319.6pt; top:0.7pt; width:79.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:399.65pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:0pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:318.9pt; top:14.55pt; width:81.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:401.1pt; top:0.7pt; width:78.1pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:0pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:400.4pt; top:14.55pt; width:79.7pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0.75pt; width:0pt; height:116.39pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:479.73pt; top:0.75pt; width:0pt; height:116.39pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:117.14pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
  </div>
  <div class="wcdiv" style="left:5.4pt; top:390.97pt;">
    <span class="wcspan wctext001" style="left:139.4pt; top:0.51pt; line-height:13.29pt;">12. Учет технического обслуживания </span>
  </div>
  <div class="wcdiv" style="left:5.8pt; top:404.77pt;">
    <div class="wcdiv" style="left:0.33pt; top:0.7pt; width:479.25pt; height:35.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:0.7pt; top:1.45pt; width:115.95pt; height:34.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="clip:rect(1.5pt,116.8pt,37pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">Дата</span>
      </div>
    </div>
    <div class="wcdiv" style="left:0pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:116.8pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:0.75pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:0pt; top:36pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:118.25pt; top:1.45pt; width:115.95pt; height:34.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:117.55pt; clip:rect(1.5pt,116.8pt,37pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:6.17pt; line-height:11.07pt;">Замечания по </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:17.67pt; line-height:11.07pt;">техническому состоянию</span>
      </div>
    </div>
    <div class="wcdiv" style="left:117.55pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:234.35pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:117.55pt; top:0.75pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:117.55pt; top:36pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:235.8pt; top:1.45pt; width:120.9pt; height:34.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:235.1pt; clip:rect(1.5pt,121.75pt,37pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:6.17pt; line-height:11.07pt;">Наименование  </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:17.67pt; line-height:11.07pt;">проведенных работ</span>
      </div>
    </div>
    <div class="wcdiv" style="left:235.1pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:356.85pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:235.1pt; top:0.75pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:235.1pt; top:36pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:358.3pt; top:1.45pt; width:120.9pt; height:34.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:357.6pt; clip:rect(1.5pt,121.75pt,37pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Должность, инициалы, </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">фамилия и подпись </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">ответственного лица</span>
      </div>
    </div>
    <div class="wcdiv" style="left:357.6pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:479.35pt; top:1.5pt; width:0pt; height:34.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:357.6pt; top:36pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="top:36.75pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="clip:rect(0.75pt,116.8pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.8pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:118.25pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:117.55pt; clip:rect(0.75pt,116.8pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:117.55pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:234.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:235.8pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:235.1pt; clip:rect(0.75pt,121.75pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:235.1pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:356.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.3pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:357.6pt; clip:rect(0.75pt,121.75pt,15.55pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:52.05pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.8pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:118.25pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:234.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:235.8pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:356.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.3pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:67.35pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:15.2pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:116.8pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:118.25pt; top:0.7pt; width:115.95pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:234.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:0pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:117.55pt; top:14.55pt; width:117.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:235.8pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:356.85pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:235.1pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:358.3pt; top:0.7pt; width:120.9pt; height:13.7pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:0pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:357.6pt; top:14.55pt; width:122.5pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0.75pt; width:0pt; height:81.89pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:479.73pt; top:0.75pt; width:0pt; height:81.89pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:82.64pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
  </div>
  <div class="wcdiv" style="left:5.4pt; top:515.76pt;">
    <span class="wcspan wctext001" style="left:177.2pt; top:0.51pt; line-height:13.29pt;">13. Сведения о ремонте</span>
  </div>
  <div class="wcdiv" style="left:5.8pt; top:529.56pt;">
    <div class="wcdiv" style="left:0.33pt; top:0.7pt; width:479.25pt; height:12.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:137.9pt; top:1.45pt; width:135.6pt; height:11.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:137.2pt; clip:rect(1.5pt,136.45pt,14pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Дата</span>
      </div>
    </div>
    <div class="wcdiv" style="left:137.2pt; top:1.5pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:273.65pt; top:1.5pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:137.2pt; top:0.75pt; width:137.2pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:137.2pt; top:13pt; width:137.2pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="top:13.75pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:57.4pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:-12.3pt; width:67pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="top:-13.75pt; clip:rect(1.5pt,67.85pt,71.49pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:6.17pt; line-height:11.07pt;">Наименование </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:17.67pt; line-height:11.07pt;">составной </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:29.17pt; line-height:11.07pt;">части  изделия </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:40.67pt; line-height:11.07pt;">или элемента  </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:52.17pt; line-height:11.07pt;">конструкции</span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:67.85pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:-13pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:56.75pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:69.3pt; top:-12.3pt; width:67pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:-13.75pt; clip:rect(1.5pt,67.85pt,71.49pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:17.67pt; line-height:11.07pt;">Основание для </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:29.17pt; line-height:11.07pt;">проведения </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:40.67pt; line-height:11.07pt;">ремонта</span>
        </div>
      </div>
      <div class="wcdiv" style="left:68.6pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:136.45pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:-13pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:56.75pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.9pt; top:0.7pt; width:76.8pt; height:55.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:137.2pt; clip:rect(0.75pt,77.65pt,57.75pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:9.85pt; top:13.95pt; line-height:11.07pt;">Поставлено в </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:23.21pt; top:25.45pt; line-height:11.07pt;">ремонт</span>
        </div>
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0.75pt; width:0pt; height:56pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:214.85pt; top:0.75pt; width:0pt; height:56pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:56.75pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:216.3pt; top:0.7pt; width:57.2pt; height:55.9pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:215.6pt; clip:rect(0.75pt,58.05pt,57.75pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:10.62pt; top:13.95pt; line-height:11.07pt;">В ход из </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:11.19pt; top:25.45pt; line-height:11.07pt;">ремонта</span>
        </div>
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0.75pt; width:0pt; height:56pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:273.65pt; top:0.75pt; width:0pt; height:56pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:56.75pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:275.1pt; top:-12.3pt; width:67pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:-13.75pt; clip:rect(1.5pt,67.85pt,71.49pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:17.67pt; line-height:11.07pt;">Время </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:29.17pt; line-height:11.07pt;">наработки до </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:40.67pt; line-height:11.07pt;">ремонта, ч</span>
        </div>
      </div>
      <div class="wcdiv" style="left:274.4pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:342.25pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:-13pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:56.75pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343.7pt; top:-12.3pt; width:66.95pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:343pt; top:-13.75pt; clip:rect(1.5pt,67.8pt,71.49pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">Наименование </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">организации, </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">проводившей </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:46.42pt; line-height:11.07pt;">ремонт</span>
        </div>
      </div>
      <div class="wcdiv" style="left:343pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:410.8pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:-13pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:56.75pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:412.25pt; top:-12.3pt; width:66.95pt; height:68.89pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:-13.75pt; clip:rect(1.5pt,67.8pt,71.49pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Должность, </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:11.92pt; line-height:11.07pt;">инициалы, </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:23.42pt; line-height:11.07pt;">фамилия и </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:34.92pt; line-height:11.07pt;">подпись </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:46.42pt; line-height:11.07pt;">ответственного </span>
          <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:57.92pt; line-height:11.07pt;">лица</span>
        </div>
      </div>
      <div class="wcdiv" style="left:411.55pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:-12.25pt; width:0pt; height:68.99pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:-13pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:56.75pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:71.24pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:18.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="clip:rect(0.75pt,67.85pt,19.2pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:32.3pt; top:0.42pt; line-height:11.07pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:67.85pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:69.3pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:68.6pt; clip:rect(0.75pt,67.85pt,19.2pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:32.3pt; top:0.42pt; line-height:11.07pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:68.6pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:136.45pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.9pt; top:0.7pt; width:76.8pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:137.2pt; clip:rect(0.75pt,77.65pt,19.2pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:37.2pt; top:0.42pt; line-height:11.07pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:214.85pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:18.2pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:216.3pt; top:0.7pt; width:57.2pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:215.6pt; clip:rect(0.75pt,58.05pt,19.2pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:27.4pt; top:0.42pt; line-height:11.07pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:273.65pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:18.2pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:275.1pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:342.25pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343.7pt; top:0.7pt; width:66.95pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:343pt; clip:rect(0.75pt,67.8pt,19.2pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:32.28pt; top:0.42pt; line-height:11.07pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:343pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:410.8pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:0pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:18.2pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:412.25pt; top:0.7pt; width:66.95pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:411.55pt; clip:rect(0.75pt,67.8pt,19.2pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="font-size:10pt; left:32.28pt; top:0.42pt; line-height:11.07pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:411.55pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:0pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:18.2pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:90.19pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:18.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:67.85pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:69.3pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:136.45pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.9pt; top:0.7pt; width:76.8pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:214.85pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:18.2pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:216.3pt; top:0.7pt; width:57.2pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:273.65pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:18.2pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:275.1pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:342.25pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343.7pt; top:0.7pt; width:66.95pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:343pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:410.8pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:0pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:18.2pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:412.25pt; top:0.7pt; width:66.95pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:0pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:18.2pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="top:109.14pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:479.25pt; height:18.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:67.85pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:0pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:69.3pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:136.45pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:68.6pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.9pt; top:0.7pt; width:76.8pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:214.85pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:0pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:137.2pt; top:18.2pt; width:78.4pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:216.3pt; top:0.7pt; width:57.2pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:273.65pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:0pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:215.6pt; top:18.2pt; width:58.8pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:275.1pt; top:0.7pt; width:67pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:342.25pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:0pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:274.4pt; top:18.2pt; width:68.6pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343.7pt; top:0.7pt; width:66.95pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:343pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:410.8pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:0pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:343pt; top:18.2pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:412.25pt; top:0.7pt; width:66.95pt; height:17.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:479.35pt; top:0.75pt; width:0pt; height:17.45pt; border-left:solid 0.75pt #f0f0f0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:0pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
      </div>
      <div class="wcdiv" style="left:411.55pt; top:18.2pt; width:68.55pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
      </div>
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0.75pt; width:0pt; height:127.34pt; border-left:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:479.73pt; top:0.75pt; width:0pt; height:127.34pt; border-left:solid 0.75pt #a0a0a0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #f0f0f0;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:128.09pt; width:480.85pt; height:0pt; border-top:solid 0.75pt #a0a0a0;">
    </div>
  </div>
  </div>`
  })
  const str5 = templateTable({
    name, date, noDocument, currentDopPages: 5, allPages, content:
      `<div class="content title bold">14. Инструкция по монтажу</div>
    <div class="content">14.1. Монтаж оборудования может проводиться предприятием-изготовителем или другими юридическими и физическими лицами, располагающими необходимой для этого материально-технической базой и квалификацией.</div>
    <div class="content">14.2. Установка оборудования проводится на ровной площадке, свободной от насаждений, в соответствии с описанием комплектности.</div>
    <div class="content">Допустимы незначительные внешние отклонения и отклонения габаритов конструкции без изменения технических характеристик</div>
    <div class="content">14.3. Перед началом монтажа необходимо:</div>
    <div class="content">- изучить документацию;</div>
    <div class="content">- проверить комплектность;</div>
    <div class="content">- законсервированные поверхности должны быть расконсервированы, а также удалена транспортировочная пленка;</div>
    <div class="content">- при проведении монтажных работ необходимо соблюдать требования безопасности.</div>
    <div class="content">14.4. Способ крепления конструкции к поверхности:</div>
    <div class="content"><span class="bold">&emsp;&emsp;Бетонирование</span> - осуществляется с целью фиксации конструкции в грунте. Бетонирование не несёт в себе нагрузки на основание, конструкции являются самонесущими. Подготовить ямы размером не менее 400х400 мм и глубиной не менее 500мм. Установить конструкцию (подпятник) по уровню, подсыпав на дно щебень. Забетонировать раствором. Рекомендовано бетонировать раствором марки М100-М200. Дальнейшая эксплуатация разрешается после схватывания бетона в фундаментах.</div>
    <div class="content"><span class="bold">&emsp;&emsp;Анкерное крепление</span> - производится с помощью анкера, с целью фиксации конструкции к твердой поверхности, на месте ее установки.</div>
    <div class="content">14.5. Рекомендуемая толщина напольного резинового покрытия для изделия: <span class="bold">${name}</span> – от 45мм.</div>
    <div class="content" style="text-align:center;"><img style="max-width: 480pt; max-height: 300pt" src="${filePrimary}" alt="d"></div>
    `
  })
  const str6 = templateTable({
    name, date, noDocument, currentDopPages: str += 1, allPages, content:
      `            <div class="content title bold">15. Правила безопасной эксплуатации</div>
    <div class="content">15.1. Оборудование представляет собой модульную конструкцию.</div>
    <div class="content">15.2. Оборудование используется на детских игровых площадках без постоянного наблюдения оперативным персоналом. В целях обеспечения безопасной эксплуатации оборудования эксплуатант (владелец) должен ежедневно проводить регулярный визуальный осмотр.</div>
    <div class="content">15.3. Если во время осмотра будут обнаружены какие-то неполадки, то они должны быть немедленно устранены, а если это невозможно, то оборудование должно быть закрыто для детей.</div>
    <div class="content">15.4. На поверхности игровой площадки не должно быть посторонних предметов, острых элементов, выступов и травмирующих включений</div>
    <div class="content">15.5. Материалы поверхности детской игровой площадки с низкими ударопоглощающими свойствами используют только вне области приземления</div>
    <div class="content">15.6. Рекомендуемый возраст посетителей - от 6 до 12 лет</div>`
  })
  const str7 = templateTable({
    name, date, noDocument, currentDopPages: str += 1, allPages, content:
      `<div class="title bold content">
    16. Инструкция по осмотру и проверке оборудования перед началом эксплуатации
  </div>
  <div class="content" style="margin-top: 10pt">
    Перед началом эксплуатации оборудования проводят визуальный осмотр, проверяют узлы крепления и
    прочность конструкции.
  </div>
  <div class="title content bold" style="margin-top: 10pt">
    17. Инструкция по осмотру, обслуживанию и ремонту оборудования
  </div>
  <div class="content" style="margin-top: 10pt">
    17.1. Регулярный визуальный осмотр оборудования необходимо проводить ежедневно. При ежедневном
    осмотре проверяют прочность деревянных конструкций, а также узлы крепления.
  </div>
  <div class="content">
    17.2. Функциональный осмотр оборудования необходимо проводить один раз в три месяца. При
    функциональном осмотре проверяют устойчивость конструкции. Степень износа поверхности
    скольжения (горки), прочность узлов крепления.
  </div>
  <div class="content">
    17.3. Ежегодный основной осмотр оборудования проводят с периодичностью один раз в 12 мес.
  </div>
  <div class="title content bold" style="margin-top: 10pt">18. Особые отметки</div>
  <div class="content" style="margin-top: 10pt">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="content">
    _______________________________________________________________________________
  </div>
  <div class="title bold content" style="margin-top: 10pt">19. Примерный эскиз изделия</div>
  <div class="bold" style="margin-top: 10pt">&emsp;Допустимы незначительные внешние изменения в конструкции, без изменения функциональных особенностей.</div>
  <div class"content" style="text-align:center"><img style="max-width: 480pt; max-height: 230pt" src="${filePrimary}" alt="ASDF"></div>`
  })
  const str8 = templateTable({
    name, date, noDocument, currentDopPages: str += 1, allPages, content:
      `   <div class="content" style="text-align:right;">Приложение А&emsp;<br>(справочное)&emsp;</div>
    <div class="title content bold" style="margin-top: 10pt;">Пример акта ежегодного основного осмотра оборудования площадки</div>
    <div class="content title" style="margin-top: 10pt;">АКТ</div>
    <div class="content title">Осмотра и проверки оборудования детской игровой площадки</div>
    <div class="content" style="margin-top: 10pt;">№_______________&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;от ____________ 20____ г.</div>
    <div class="content">Наименование_______________________________________________________________</div>
    <div class="content">Город ______________________________________________________________________</div>
    <div class="content">Владелец ___________________________________________________________________</div>
    <div class="content">Адрес установки: ____________________________________________________________</div>
    <div class="content">Характеристика поверхности игровой площадки:</div>
    <div class="content" style="margin-top: 10pt;">____________________________________________________________________________</div>
    <div class="content" style="margin-top: 5pt;">____________________________________________________________________________</div>
    <div class="content" style="margin-top: 5pt;">____________________________________________________________________________</div>
    <div class="title" style="margin-top: 20pt;">Перечень оборудования</div>
    <table style="border: 1px solid black; margin-top: 10pt;">
      <tr>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; ">№</td>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 110pt; height: 20pt; padding: 0; margin: 0;">Наименование оборудования</td>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 110pt; height: 20pt; padding: 0; margin: 0;">Результат осмотра</td>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 110pt; height: 20pt; padding: 0; margin: 0;">Выявленный дефект</td>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 110pt; height: 20pt; padding: 0; margin: 0;">Принятые меры</td>
        <td style="border-bottom: 1px solid black; width: 110pt; height: 20pt; padding: 0; margin: 0;">Примечание</td>
      </tr>
      <tr>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;">1</td>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
      </tr>
      <tr>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;">2</td>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
      </tr>
      <tr>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;">3</td>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
      </tr>
      <tr>
        <td style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;">4</td>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black;border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-bottom: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
      </tr>
      <tr>
        <td style="border-right: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;">5</td>
        <th style="border-right: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style="border-right: 1px solid black; width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
        <th style=" width: 20pt; height: 20pt; padding: 0; margin: 0;"></th>
      </tr>
    </table>
    <div class="content" style="margin-top: 10pt;">Проведенный осмотр и проверка работоспособности оборудования подтверждают его комплектность, соответствие эксплуатационной документации изготовителя и возможность безопасной эксплуатации</div>
    <div class="content" style="margin-top: 20pt;">Ответственный исполнитель______________________________</div>
    <div class="content" style="margin-top: 40pt;">_____________________&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;______________&emsp;&emsp;&emsp;&emsp;&emsp;_______________</div>
    <div class="content" style="font-size: 10pt;">&emsp;&emsp;&emsp;Должность&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;личная подпись&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;инициалы, фамилия</div>
    <div class="content" style="margin-top: 20pt;">&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;М.П.</div>`
  })
  const str9 = templateTable({
    name, date, noDocument, currentDopPages: str += 1, allPages, content:
      `<div class="wcdiv" style="left:-5pt; clip:rect(0.5pt,491.45pt,682pt,0.25pt);">
    <div class="wcdiv" style="left:5.4pt; top:14.3pt;">
    <span class="wcspan wctext003" style="left:406.15pt; top:0.51pt; line-height:13.29pt;">Приложение Б</span>
    <span class="wcspan wctext003" style="left:414.38pt; top:14.31pt; line-height:13.29pt;">(справочное)</span>
  </div>
  <div class="wcdiv" style="left:5.4pt; top:55.7pt;">
    <span class="wcspan wctext002" style="left:214.46pt; top:0.51pt; line-height:13.29pt;">ГРАФИК </span>
  </div>
  <div class="wcdiv" style="left:5.4pt; top:69.5pt;">
    <span class="wcspan wctext002" style="left:147.33pt; top:0.51pt; line-height:13.29pt;">ежедневного визуального осмотра</span>
  </div>
  <div class="wcdiv" style="left:6.05pt; top:110.89pt;">
    <div class="wcdiv" style="left:0.33pt; top:0.7pt; width:478.75pt; height:53.35pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:0.7pt; top:1.45pt; width:65.2pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="clip:rect(1.5pt,66.05pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:5.87pt; top:11.92pt; line-height:11.07pt;">Порядковый </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:1.05pt; top:23.42pt; line-height:11.07pt;">номер осмотра</span>
      </div>
    </div>
    <div class="wcdiv" style="left:0pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:66.05pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:0pt; top:0.75pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:0pt; top:53.45pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:67.5pt; top:1.45pt; width:46.05pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:66.8pt; clip:rect(1.5pt,46.9pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:4.11pt; top:17.67pt; line-height:11.07pt;">Заказчик</span>
      </div>
    </div>
    <div class="wcdiv" style="left:66.8pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:113.7pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:66.8pt; top:53.45pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:115.15pt; top:1.45pt; width:80.2pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:114.45pt; clip:rect(1.5pt,81.05pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:1.77pt; top:6.17pt; line-height:11.07pt;">Ответственный за </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:13.75pt; top:17.67pt; line-height:11.07pt;">ежедневный </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:25.08pt; top:29.17pt; line-height:11.07pt;">осмотр</span>
      </div>
    </div>
    <div class="wcdiv" style="left:114.45pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:195.5pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:114.45pt; top:53.45pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:196.95pt; top:1.45pt; width:76pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:196.25pt; clip:rect(1.5pt,76.85pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:6.83pt; top:0.42pt; line-height:11.07pt;">Наименование </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:19.4pt; top:11.92pt; line-height:11.07pt;">детского </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:18.91pt; top:23.42pt; line-height:11.07pt;">игрового </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:8.23pt; top:34.92pt; line-height:11.07pt;">оборудования</span>
      </div>
    </div>
    <div class="wcdiv" style="left:196.25pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:273.1pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:196.25pt; top:53.45pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:274.55pt; top:1.45pt; width:42.05pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:273.85pt; clip:rect(1.5pt,42.9pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:11.04pt; top:11.92pt; line-height:11.07pt;">Дата </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:3.79pt; top:23.42pt; line-height:11.07pt;">осмотра</span>
      </div>
    </div>
    <div class="wcdiv" style="left:273.85pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:316.75pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:273.85pt; top:53.45pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:318.2pt; top:1.45pt; width:50.75pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:317.5pt; clip:rect(1.5pt,51.6pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:4.59pt; top:11.92pt; line-height:11.07pt;">Результат </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:8.14pt; top:23.42pt; line-height:11.07pt;">осмотра</span>
      </div>
    </div>
    <div class="wcdiv" style="left:317.5pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:369.1pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:317.5pt; top:53.45pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:370.55pt; top:1.45pt; width:52.4pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:369.85pt; clip:rect(1.5pt,53.25pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:4.72pt; top:11.92pt; line-height:11.07pt;">Принятые </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:15.01pt; top:23.42pt; line-height:11.07pt;">меры</span>
      </div>
    </div>
    <div class="wcdiv" style="left:369.85pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:423.1pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:369.85pt; top:53.45pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:424.55pt; top:1.45pt; width:54.15pt; height:51.85pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
    </div>
    <div class="wcdiv" style="left:423.85pt; clip:rect(1.5pt,55pt,54.45pt,0.75pt);">
      <div class="wcdiv" style="left:0.75pt; top:1.5pt;">
        <span class="wcspan wctext003" style="font-size:10pt; left:8.62pt; top:6.17pt; line-height:11.07pt;">Подпись </span>
        <span class="wcspan wctext003" style="font-size:10pt; left:1.34pt; top:17.67pt; line-height:11.07pt;">ответственн</span>
        <span class="wcspan wctext003" style="font-size:10pt; left:8.76pt; top:29.17pt; line-height:11.07pt;">ого лица</span>
      </div>
    </div>
    <div class="wcdiv" style="left:423.85pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:478.85pt; top:1.5pt; width:0pt; height:51.95pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:423.85pt; top:53.45pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="top:54.2pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:75.45pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:96.69pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:117.94pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:139.19pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:160.44pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:181.69pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:202.94pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:224.19pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:245.44pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:266.69pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:287.94pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:309.18pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:330.43pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:351.68pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:372.93pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:394.18pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:415.43pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:436.68pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; clip:rect(0.75pt,42.9pt,21.5pt,0.75pt);">
        <div class="wcdiv" style="left:0.75pt; top:0.75pt;">
          <span class="wcspan wctext003" style="left:21.08pt; top:0.51pt; line-height:13.29pt;"> </span>
        </div>
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:457.93pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:479.18pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:500.43pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="top:521.67pt;">
      <div class="wcdiv" style="left:0.33pt; top:-0.05pt; width:478.75pt; height:21.15pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0.7pt; top:0.7pt; width:65.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.05pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:0pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0pt; top:20.5pt; width:66.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:67.5pt; top:0.7pt; width:46.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:113.7pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:0pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:66.8pt; top:20.5pt; width:47.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:115.15pt; top:0.7pt; width:80.2pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:195.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:0pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:114.45pt; top:20.5pt; width:81.8pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.95pt; top:0.7pt; width:76pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:0pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:196.25pt; top:20.5pt; width:77.6pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:274.55pt; top:0.7pt; width:42.05pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:316.75pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:0pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:273.85pt; top:20.5pt; width:43.65pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:318.2pt; top:0.7pt; width:50.75pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:0pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:317.5pt; top:20.5pt; width:52.35pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:370.55pt; top:0.7pt; width:52.4pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.1pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:0pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:369.85pt; top:20.5pt; width:54pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:424.55pt; top:0.7pt; width:54.15pt; height:19.65pt; background-color:#ffffff; border:solid 0.1pt #ffffff;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:478.85pt; top:0.75pt; width:0pt; height:19.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:0pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:423.85pt; top:20.5pt; width:55.75pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0.75pt; width:0pt; height:542.17pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:479.23pt; top:0.75pt; width:0pt; height:542.17pt; border-left:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:0pt; width:480.35pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
    <div class="wcdiv" style="left:-0.38pt; top:542.92pt; width:480.35pt; height:0pt; border-top:solid 0.75pt #000000;">
    </div>
  </div>
  </div>`
  })
  const str10 = templateTable({
    name, date, noDocument, currentDopPages: str += 1, allPages,
    content:
      `<div class="content" style="text-align: right">Приложение В&emsp;<br />(справочное)&emsp;</div>
  <div class="title bold content" style="margin-top: 20pt">
    ПРАВИЛА<br />эксплуатации детской игровой площадки<br />ВНИМАНИЕ!
  </div>
  <div class="content">
    Дети до семи лет должны находиться на детской площадке под присмотром родителей, воспитателей
    или сопровождающих взрослых.
  </div>
  <div class="content">
    Перед использованием игрового оборудования убедитесь в его безопасности и отсутствии
    посторонних предметов
  </div>
  <div class="title content bold" style="margin-top: 20pt">
    УВАЖАЕМЫЕ ПОСЕТИТЕЛИ!<br />На детской площадке<br />ЗАПРЕЩАЕТСЯ
  </div>
  <div class="content">
    Мусорить, курить и оставлять окурки, приносить и оставлять стеклянные бутылки.
  </div>
  <div class="content">Выгуливать домашних животных.</div>
  <div class="content">Использовать игровое оборудование не по назначению.</div>
  <div class="content">Номера телефонов для экстренных случаев:</div>
  <div class="content">Медицинская служба (скорая помощь) _____________________</div>
  <div class="content">Служба спасения _______________________________________</div>
  <div class="content">Служба эксплуатации ___________________________________</div>
  <div class="content">Ближайший телефон находится по адресу __________________</div>
  <div class="content" style="text-align: right; margin-top: 20pt">
    Приложение Г&emsp;<br />(справочное)&emsp;
  </div>
  <div class="content" style="margin-top: 20pt">
    В процессе визуального и функционального осмотров определяют:<br />
    - чистоту и внешний вид поверхности игровой площадки и оборудования;<br />
    - соблюдение расстояний от частей оборудования до поверхности игровой площадки;<br />
    - наличие выступающих частей фундаментов;<br />
    - наличие дефектов/неисправностей элементов оборудования;<br />
    - отсутствие деталей оборудования;<br />
    - чрезмерный износ подвижных частей оборудования;<br />
    - структурную целостность оборудования.<br />
    Примеры неисправностей при визуальном осмотре смотреть в ГОСТ 34614.7-2019.
  </div>
  `
  })
  const str11 = templateTable({
    name, date, noDocument, currentDopPages: str += 1, allPages, content:
      `
    <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
    <div class="content" style="text-align: right">Приложение Д&emsp;</div>
  </div>
    `
  })
  const head = `<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Общество с ограниченной ответственностью</title>
<style type="text/css">
@font-face {
  font-family: "Times New Roman";
  font-style: italic;
  font-weight: bold;
  src: local("☺"),
    url("data:application/x-font-woff;base64,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")
      format("woff");
}
@font-face {
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: bold;
  src: local("☺"),
    url("data:application/x-font-woff;base64,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")
      format("woff");
}
@font-face {
  font-family: "Times New Roman";
  font-style: italic;
  font-weight: normal;
  src: local("☺"),
    url("data:application/x-font-woff;base64,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")
      format("woff");
}
@font-face {
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: normal;
  src: local("☺"),
    url("data:application/x-font-woff;base64,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")
      format("woff");
}
.wcdiv {
  position: absolute;
}
.wcspan {
  position: absolute;
  white-space: pre;
  color: #000000;
  font-size: 12pt;
}
.wcimg {
  position: absolute;
}
.wcsvg {
  position: absolute;
}
.wcpage {
  position: relative;
  margin: 0pt auto 0pt auto;
  overflow: hidden;
}
.nameTable {
  width: 110pt;
  text-align: center;
  white-space: normal;
  hyphens: auto;
}
.border {
  padding: 0 10px;
  border-bottom: solid 1.14pt #000000;
  display: inline-block;
  font-weight: bold;
}
body {
  font-family: "Times New Roman";
  margin: 0pt;
  padding: 0pt;
}
@media print {
  body {
    font-family: "Times New Roman";
    margin: 0pt;
    padding: 0pt;
  }
  .wcpage {
    page-break-after: auto;
    margin: 0pt;
    padding: 0pt;
  }
}
.wctext001 {
  font-style: normal;
  font-weight: bold;
}
.wctext002 {
  font-family: "Symbol";
  font-style: normal;
  font-weight: normal;
}
.wctext003 {
  font-style: normal;
  font-weight: normal;
}
.wctext004 {
  font-style: italic;
  font-weight: bold;
}
.wctext005 {
  font-style: italic;
  font-weight: normal;
}
.title {
  text-align: center;
}
.bold {
  font-weight: bold;
}
.content {
  width: 481pt;
}
.table {
  border: 1px solid black;
  border-bottom: none;
  text-align: center;
}
.column {
  border-bottom: 1px solid black;
  height: 15pt;
  box-sizing: border-box;
  width: 234pt;
}
.leftColumn {
  border-left: 1px solid black;
}
</style>
</head>`
  return { str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, head }
}