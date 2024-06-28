import { Table } from "../type/Table"

export const templateTable = (data: Table) => {
    const {content, date, name, noDocument, allPages, currentDopPages  } = data

    return `<div class="wcdiv wcpage" style="width: 595.3pt; height: 841.9pt">
    <div class="wcdiv" title="андреев">
      <img
        class="wcimg"
        style="left: 243.31pt; top: 767.54pt; width: 27pt; height: 15pt"
        src="data:image/png;base64,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"
      />
    </div>
    <div class="wcdiv" title="чаленко">
      <img
        class="wcimg"
        style="left: 243.77pt; top: 753pt; width: 30pt; height: 17.25pt"
        src="data:image/png;base64,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"
      />
    </div>
    <div class="wcdiv" style="left: 25.65pt; top: 22.65pt">
      <div class="wcdiv" style="clip: rect(0.5pt, 26.95pt, 127.1pt, 0.25pt)">
        <div
          class="wcdiv"
          style="
            left: 4.9pt;
            top: 131.5pt;
            -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
            -moz-transform: matrix(0, -1, 1, 0, 0, 0);
            -ms-transform: matrix(0, -1, 1, 0, 0, 0);
            -o-transform: matrix(0, -1, 1, 0, 0, 0);
            transform: matrix(0, -1, 1, 0, 0, 0);
          "
        >
          <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
            <span
              class="wcspan wctext004"
              style="font-size: 13pt; left: 18.38pt; top: 0.55pt; line-height: 14.4pt"
              >Перв. примен</span
            >
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 126.1pt">
        <div class="wcdiv" style="clip: rect(0.5pt, 26.95pt, 126.9pt, 0.25pt)">
          <div
            class="wcdiv"
            style="
              left: 4.9pt;
              top: 131.3pt;
              -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
              -moz-transform: matrix(0, -1, 1, 0, 0, 0);
              -ms-transform: matrix(0, -1, 1, 0, 0, 0);
              -o-transform: matrix(0, -1, 1, 0, 0, 0);
              transform: matrix(0, -1, 1, 0, 0, 0);
            "
          >
            <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
              <span
                class="wcspan wctext004"
                style="font-size: 13pt; left: 30.5pt; top: 0.55pt; line-height: 14.4pt"
                >Справ. №</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 325.75pt">
        <div class="wcdiv" style="clip: rect(0.5pt, 26.95pt, 91.7pt, 0.25pt)">
          <div
            class="wcdiv"
            style="
              left: 4.9pt;
              top: 96.1pt;
              -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
              -moz-transform: matrix(0, -1, 1, 0, 0, 0);
              -ms-transform: matrix(0, -1, 1, 0, 0, 0);
              -o-transform: matrix(0, -1, 1, 0, 0, 0);
              transform: matrix(0, -1, 1, 0, 0, 0);
            "
          >
            <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
              <span
                class="wcspan wctext004"
                style="font-size: 13pt; left: 1.03pt; top: 0.55pt; line-height: 14.4pt"
                >Подп. и дата</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 416.45pt">
        <div class="wcdiv" style="clip: rect(0.5pt, 26.95pt, 91.2pt, 0.25pt)">
          <div
            class="wcdiv"
            style="
              left: 4.9pt;
              top: 95.6pt;
              -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
              -moz-transform: matrix(0, -1, 1, 0, 0, 0);
              -ms-transform: matrix(0, -1, 1, 0, 0, 0);
              -o-transform: matrix(0, -1, 1, 0, 0, 0);
              transform: matrix(0, -1, 1, 0, 0, 0);
            "
          >
            <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
              <span
                class="wcspan wctext004"
                style="font-size: 13pt; left: 2.49pt; top: 0.55pt; line-height: 14.4pt"
                >Инв. № дубл.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 506.65pt">
        <div class="wcdiv" style="clip: rect(0.5pt, 26.95pt, 89.45pt, 0.25pt)">
          <div
            class="wcdiv"
            style="
              left: 4.9pt;
              top: 93.85pt;
              -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
              -moz-transform: matrix(0, -1, 1, 0, 0, 0);
              -ms-transform: matrix(0, -1, 1, 0, 0, 0);
              -o-transform: matrix(0, -1, 1, 0, 0, 0);
              transform: matrix(0, -1, 1, 0, 0, 0);
            "
          >
            <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
              <span
                class="wcspan wctext004"
                style="font-size: 13pt; left: 1.18pt; top: 0.55pt; line-height: 14.4pt"
                >Взам. инв. №</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 595.1pt">
        <div class="wcdiv" style="clip: rect(0.5pt, 26.95pt, 95.25pt, 0.25pt)">
          <div
            class="wcdiv"
            style="
              left: 4.9pt;
              top: 99.65pt;
              -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
              -moz-transform: matrix(0, -1, 1, 0, 0, 0);
              -ms-transform: matrix(0, -1, 1, 0, 0, 0);
              -o-transform: matrix(0, -1, 1, 0, 0, 0);
              transform: matrix(0, -1, 1, 0, 0, 0);
            "
          >
            <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
              <span
                class="wcspan wctext004"
                style="font-size: 13pt; left: 2.81pt; top: 0.55pt; line-height: 14.4pt"
                >Подп. и дата</span
              >
            </div>
          </div>
        </div>
        <div
          class="wcdiv"
          style="left: 53.7pt; top: -595.1pt; clip: rect(0.5pt, 491.45pt, 690.35pt, 0.25pt)"
        >
          <div class="wcdiv" style="left: 5.4pt; top: 4pt; width: 478pt; text-wrap: wrap">${content}</div>
        </div>
      </div>
      <div class="wcdiv" style="top: 717.95pt">
        <div class="wcdiv" style="left: 53.7pt; clip: rect(0.5pt, 30.55pt, 13pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span
              class="wcspan wctext003"
              style="font-size: 10pt; left: 0pt; top: 0.42pt; line-height: 11.07pt"
              >Изм.</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 84.5pt; clip: rect(0.5pt, 34.05pt, 13pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span
              class="wcspan wctext003"
              style="font-size: 10pt; left: 0pt; top: 0.42pt; line-height: 11.07pt"
              >лист</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 118.8pt; clip: rect(0.5pt, 91.9pt, 13pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span
              class="wcspan wctext003"
              style="font-size: 10pt; left: 0pt; top: 0.42pt; line-height: 11.07pt"
              >№ документа</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 210.95pt; clip: rect(0.5pt, 46.2pt, 13pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span
              class="wcspan wctext003"
              style="font-size: 10pt; left: 0pt; top: 0.42pt; line-height: 11.07pt"
              >подпись</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 257.4pt; clip: rect(0.5pt, 35.75pt, 13pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span
              class="wcspan wctext003"
              style="font-size: 10pt; left: 0pt; top: 0.42pt; line-height: 11.07pt"
              >дата</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 293.4pt; top: -28.6pt; clip: rect(0.5pt, 251.75pt, 41.6pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 7pt; text-align: center; width: 240pt">
            <span class="" style="font-size: 17pt; line-height: 18.83pt">ССД 00.01.${noDocument} - ПС</span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 729.95pt">
        <div class="wcdiv" style="left: 53.7pt; clip: rect(0.5pt, 64.85pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 0pt; top: 0.51pt; line-height: 13.29pt"
              >Разраб.
            </span>
          </div>
        </div>
        <div class="wcdiv" style="left: 118.8pt; clip: rect(0.5pt, 91.9pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext001" style="left: 0pt; top: 0.51pt; line-height: 13.29pt"
              >Фельбуш В.В.</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 257.4pt; clip: rect(0.5pt, 35.75pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="font-size: 7pt; left: 0pt; top: 3pt; line-height: 7.75pt"
              >${date}</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 416.45pt; clip: rect(0.5pt, 38.5pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 0pt; top: 0.51pt; line-height: 13.29pt">лит</span>
          </div>
        </div>
        <div class="wcdiv" style="left: 455.2pt; clip: rect(0.5pt, 39pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 1.66pt; top: 0.51pt; line-height: 13.29pt"
              >Лист</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 494.45pt; clip: rect(0.5pt, 50.7pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 1.68pt; top: 0.51pt; line-height: 13.29pt"
              >Листов</span
            >
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 744.25pt">
        <div class="wcdiv" style="left: 53.7pt; clip: rect(0.5pt, 64.85pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 0pt; top: 0.51pt; line-height: 13.29pt"
              >Пров.
            </span>
          </div>
        </div>
        <div class="wcdiv" style="left: 118.8pt; clip: rect(0.5pt, 91.9pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext001" style="left: 0pt; top: 0.51pt; line-height: 13.29pt"
              >Андреев С.Н.</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 257.4pt; clip: rect(0.5pt, 35.75pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="font-size: 7pt; left: 0pt; top: 3pt; line-height: 7.75pt"
              >${date}</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 455.2pt; clip: rect(0.5pt, 39pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 11.23pt; top: 0.51pt; line-height: 13.29pt"
              >${currentDopPages}</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 494.45pt; clip: rect(0.5pt, 50.7pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 14.08pt; top: 0.51pt; line-height: 13.29pt"
              >${allPages}</span
            >
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 758.55pt">
        <div class="wcdiv" style="left: 53.7pt; clip: rect(0.5pt, 64.85pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 0pt; top: 0.51pt; line-height: 13.29pt"
              >№ контр.
            </span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top: 772.84pt">
        <div class="wcdiv" style="top: -83.49pt; clip: rect(0.5pt, 26.95pt, 98.79pt, 0.25pt)">
          <div
            class="wcdiv"
            style="
              left: 4.9pt;
              top: 103.19pt;
              -webkit-transform: matrix(0, -1, 1, 0, 0, 0);
              -moz-transform: matrix(0, -1, 1, 0, 0, 0);
              -ms-transform: matrix(0, -1, 1, 0, 0, 0);
              -o-transform: matrix(0, -1, 1, 0, 0, 0);
              transform: matrix(0, -1, 1, 0, 0, 0);
            "
          >
            <div class="wcdiv" style="left: 11.05pt; top: 0.5pt">
              <span
                class="wcspan wctext004"
                style="font-size: 13pt; left: 3.65pt; top: 0.55pt; line-height: 14.4pt"
                >Инв. № подп.
              </span>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="left: 53.7pt; clip: rect(0.5pt, 64.85pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="left: 0pt; top: 0.51pt; line-height: 13.29pt">Утв.</span>
          </div>
        </div>
        <div class="wcdiv" style="left: 118.8pt; clip: rect(0.5pt, 91.9pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span
              class="wcspan wctext001"
              style="font-size: 11pt; left: 0pt; top: 0.47pt; line-height: 12.18pt"
              >Болвинов А.С.</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 257.4pt; clip: rect(0.5pt, 35.75pt, 15.3pt, 0.25pt)">
          <div class="wcdiv" style="left: 5.4pt; top: 0.5pt">
            <span class="wcspan wctext003" style="font-size: 7pt; left: 0pt; top: 3pt; line-height: 7.75pt"
              >${date}</span
            >
          </div>
        </div>
        <div class="wcdiv" style="left: 293.4pt; top: -42.9pt; clip: rect(0.5pt, 122.8pt, 58.2pt, 0.25pt)">
          <div class="wcdiv" style="top: 0.5pt; padding: 0 6pt">
            <span class="wcspan wctext001 nameTable" style="top: 0.51pt; line-height: 13.29pt; overflow-wrap: break-word;"
              >${name}</span
            >
          </div>
        </div>
      </div>
      <div
        class="wcdiv"
        style="left: -0.25pt; top: 0.5pt; width: 0pt; height: 251.5pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="
          left: -0.25pt;
          top: 326.25pt;
          width: 0pt;
          height: 460.89pt;
          border-left: solid 0.75pt #000000;
        "
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 0.5pt; width: 0pt; height: 125.6pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 126.6pt; width: 0pt; height: 125.4pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.45pt; top: 0.5pt; width: 0pt; height: 251.5pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.45pt; top: 326.25pt; width: 0pt; height: 363.1pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.45pt; top: 689.85pt; width: 0pt; height: 97.29pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 545.15pt; top: 0.5pt; width: 0pt; height: 786.64pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 326.25pt; width: 0pt; height: 90.2pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 416.95pt; width: 0pt; height: 89.7pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 507.15pt; width: 0pt; height: 87.95pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 595.6pt; width: 0pt; height: 93.75pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 26.95pt; top: 689.85pt; width: 0pt; height: 97.29pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 689.85pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 704.15pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 718.45pt; width: 0pt; height: 11.5pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 730.45pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 759.05pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 118.55pt; top: 773.34pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 689.85pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 704.15pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 718.45pt; width: 0pt; height: 11.5pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 730.45pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 759.05pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 210.7pt; top: 773.34pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 689.85pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 704.15pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 718.45pt; width: 0pt; height: 11.5pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 730.45pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 759.05pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 257.15pt; top: 773.34pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 293.15pt; top: 689.85pt; width: 0pt; height: 40.1pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 293.15pt; top: 730.45pt; width: 0pt; height: 56.7pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 84.25pt; top: 718.45pt; width: 0pt; height: 11.5pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 416.2pt; top: 730.45pt; width: 0pt; height: 56.7pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 454.95pt; top: 730.45pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 454.95pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 494.2pt; top: 730.45pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 494.2pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 428pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 443.15pt; top: 744.75pt; width: 0pt; height: 13.8pt; border-left: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: -0.25pt; top: 0pt; width: 545.9pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 0.25pt; top: 126.1pt; width: 53.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: -0.25pt; top: 252pt; width: 54.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: -0.25pt; top: 325.75pt; width: 54.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 0.25pt; top: 416.45pt; width: 53.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 0.25pt; top: 506.65pt; width: 53.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 0.25pt; top: 595.1pt; width: 53.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 0.25pt; top: 689.35pt; width: 544.9pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.95pt; top: 703.65pt; width: 239.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.95pt; top: 717.95pt; width: 239.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.95pt; top: 729.95pt; width: 491.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.95pt; top: 744.25pt; width: 239.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 416.7pt; top: 744.25pt; width: 128.45pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.95pt; top: 758.55pt; width: 239.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 416.7pt; top: 758.55pt; width: 128.45pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: 53.95pt; top: 772.84pt; width: 239.2pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
      <div
        class="wcdiv"
        style="left: -0.25pt; top: 787.14pt; width: 545.9pt; height: 0pt; border-top: solid 0.75pt #000000"
      ></div>
    </div>
  </div>`
}