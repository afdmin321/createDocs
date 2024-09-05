import { DataImgStr } from "../type/DataImgStr"
import { templateTable } from "./templateTable"

export const imgStr = (data: DataImgStr) => {
    const { text = "", img, date, name, noDocument, allPages, currentDopPages  } = data
    return templateTable({date, name, noDocument, allPages, currentDopPages, content: `<div class="wcdiv" style="left:5.4pt; top:0.5pt;">
    <span class="wcspan wctext003" style="left:191.07pt; top:0.51pt; line-height:13.29pt;">${text}</span>
    <span class="wcspan wctext003" style="left:0.2pt; top:20pt; line-height:13.29pt; margin: 0 auto; text-align: center"><img style="max-width: 480pt; max-height: 665pt;" src="${img}" alt=""></span>
  </div>`
})
}