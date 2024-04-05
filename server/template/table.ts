export const table = (data: any) => {
    const { text = "", img, date, name, noDocument } = data
    return `<div class="wcdiv wcpage" style="width:595.3pt; height:841.9pt;">
    <div class="wcdiv" title="андреев">
      <img class="wcimg" style="left:243.31pt; top:767.54pt; width:27pt; height:15pt;" src="data:image/png;base64,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" />
    </div>
    <div class="wcdiv" title="чаленко">
      <img class="wcimg" style="left:243.77pt; top:753pt; width:30pt; height:17.25pt;" src="data:image/png;base64,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" />
    </div>
    <div class="wcdiv" style="left:25.65pt; top:22.65pt;">
      <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,127.1pt,0.25pt);">
        <div class="wcdiv" style="left:4.9pt; top:131.5pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
          <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
            <span class="wcspan wctext004" style="font-size:13pt; left:18.38pt; top:0.55pt; line-height:14.4pt;">Перв. примен</span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:126.1pt;">
        <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,126.9pt,0.25pt);">
          <div class="wcdiv" style="left:4.9pt; top:131.3pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
            <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
              <span class="wcspan wctext004" style="font-size:13pt; left:30.5pt; top:0.55pt; line-height:14.4pt;">Справ. №</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:325.75pt;">
        <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,91.7pt,0.25pt);">
          <div class="wcdiv" style="left:4.9pt; top:96.1pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
            <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
              <span class="wcspan wctext004" style="font-size:13pt; left:1.03pt; top:0.55pt; line-height:14.4pt;">Подп. и дата</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:416.45pt;">
        <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,91.2pt,0.25pt);">
          <div class="wcdiv" style="left:4.9pt; top:95.6pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
            <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
              <span class="wcspan wctext004" style="font-size:13pt; left:2.49pt; top:0.55pt; line-height:14.4pt;">Инв. № дубл.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:506.65pt;">
        <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,89.45pt,0.25pt);">
          <div class="wcdiv" style="left:4.9pt; top:93.85pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
            <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
              <span class="wcspan wctext004" style="font-size:13pt; left:1.18pt; top:0.55pt; line-height:14.4pt;">Взам. инв. №</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:595.1pt;">
        <div class="wcdiv" style="clip:rect(0.5pt,26.95pt,95.25pt,0.25pt);">
          <div class="wcdiv" style="left:4.9pt; top:99.65pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
            <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
              <span class="wcspan wctext004" style="font-size:13pt; left:2.81pt; top:0.55pt; line-height:14.4pt;">Подп. и дата</span>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="left:53.7pt; top:-595.1pt; clip:rect(0.5pt,491.45pt,690.35pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:191.07pt; top:0.51pt; line-height:13.29pt;">${text}</span>
            <span class="wcspan wctext003" style="left:0.2pt; top:20pt; line-height:13.29pt;"><img style="max-width: 480pt; max-height: 665pt;" src="${img}" alt=""></span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:717.95pt;">
        <div class="wcdiv" style="left:53.7pt; clip:rect(0.5pt,30.55pt,13pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">Изм.</span>
          </div>
        </div>
        <div class="wcdiv" style="left:84.5pt; clip:rect(0.5pt,34.05pt,13pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">лист</span>
          </div>
        </div>
        <div class="wcdiv" style="left:118.8pt; clip:rect(0.5pt,91.9pt,13pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">№  документа</span>
          </div>
        </div>
        <div class="wcdiv" style="left:210.95pt; clip:rect(0.5pt,46.2pt,13pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">подпись</span>
          </div>
        </div>
        <div class="wcdiv" style="left:257.4pt; clip:rect(0.5pt,35.75pt,13pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:10pt; left:0pt; top:0.42pt; line-height:11.07pt;">дата</span>
          </div>
        </div>
        <div class="wcdiv" style="left:293.4pt; top:-28.6pt; clip:rect(0.5pt,251.75pt,41.6pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext005" style="font-size:17pt; left:40.34pt; top:0.72pt; line-height:18.83pt;">ССД 00.01.${noDocument} - ПС</span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:729.95pt;">
        <div class="wcdiv" style="left:53.7pt; clip:rect(0.5pt,64.85pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">Разраб. </span>
          </div>
        </div>
        <div class="wcdiv" style="left:118.8pt; clip:rect(0.5pt,91.9pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext001" style="left:0pt; top:0.51pt; line-height:13.29pt;">Фельбуш В.В.</span>
          </div>
        </div>
        <div class="wcdiv" style="left:257.4pt; clip:rect(0.5pt,35.75pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:7pt; left:0pt; top:0.3pt; line-height:7.75pt;">${date}</span>
          </div>
        </div>
        <div class="wcdiv" style="left:416.45pt; clip:rect(0.5pt,38.5pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">лит</span>
          </div>
        </div>
        <div class="wcdiv" style="left:455.2pt; clip:rect(0.5pt,39pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:1.66pt; top:0.51pt; line-height:13.29pt;">Лист</span>
          </div>
        </div>
        <div class="wcdiv" style="left:494.45pt; clip:rect(0.5pt,50.7pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:1.68pt; top:0.51pt; line-height:13.29pt;">Листов</span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:744.25pt;">
        <div class="wcdiv" style="left:53.7pt; clip:rect(0.5pt,64.85pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">Пров. </span>
          </div>
        </div>
        <div class="wcdiv" style="left:118.8pt; clip:rect(0.5pt,91.9pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext001" style="left:0pt; top:0.51pt; line-height:13.29pt;">Андреев С.Н.</span>
          </div>
        </div>
        <div class="wcdiv" style="left:257.4pt; clip:rect(0.5pt,35.75pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:7pt; left:0pt; top:0.3pt; line-height:7.75pt;">${date}</span>
          </div>
        </div>
        <div class="wcdiv" style="left:455.2pt; clip:rect(0.5pt,39pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:11.23pt; top:0.51pt; line-height:13.29pt;">6</span>
          </div>
        </div>
        <div class="wcdiv" style="left:494.45pt; clip:rect(0.5pt,50.7pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:14.08pt; top:0.51pt; line-height:13.29pt;">13</span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:758.55pt;">
        <div class="wcdiv" style="left:53.7pt; clip:rect(0.5pt,64.85pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">№ контр. </span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="top:772.84pt;">
        <div class="wcdiv" style="top:-83.49pt; clip:rect(0.5pt,26.95pt,98.79pt,0.25pt);">
          <div class="wcdiv" style="left:4.9pt; top:103.19pt; -webkit-transform:matrix(0,-1,1,0,0,0); -moz-transform:matrix(0,-1,1,0,0,0); -ms-transform:matrix(0,-1,1,0,0,0); -o-transform:matrix(0,-1,1,0,0,0); transform:matrix(0,-1,1,0,0,0);">
            <div class="wcdiv" style="left:11.05pt; top:0.5pt;">
              <span class="wcspan wctext004" style="font-size:13pt; left:3.65pt; top:0.55pt; line-height:14.4pt;">Инв. №  подп. </span>
            </div>
          </div>
        </div>
        <div class="wcdiv" style="left:53.7pt; clip:rect(0.5pt,64.85pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="left:0pt; top:0.51pt; line-height:13.29pt;">Утв.</span>
          </div>
        </div>
        <div class="wcdiv" style="left:118.8pt; clip:rect(0.5pt,91.9pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext001" style="font-size:11pt; left:0pt; top:0.47pt; line-height:12.18pt;">Болвинов А.С.</span>
          </div>
        </div>
        <div class="wcdiv" style="left:257.4pt; clip:rect(0.5pt,35.75pt,15.3pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext003" style="font-size:7pt; left:0pt; top:0.3pt; line-height:7.75pt;">${date}</span>
          </div>
        </div>
        <div class="wcdiv" style="left:293.4pt; top:-42.9pt; clip:rect(0.5pt,122.8pt,58.2pt,0.25pt);">
          <div class="wcdiv" style="left:5.4pt; top:0.5pt;">
            <span class="wcspan wctext001" style="left:14.1pt; top:0.51pt; line-height:13.29pt;">${name}</span>
          </div>
        </div>
      </div>
      <div class="wcdiv" style="left:-0.25pt; top:0.5pt; width:0pt; height:251.5pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:-0.25pt; top:326.25pt; width:0pt; height:460.89pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:0.5pt; width:0pt; height:125.6pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:126.6pt; width:0pt; height:125.4pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.45pt; top:0.5pt; width:0pt; height:251.5pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.45pt; top:326.25pt; width:0pt; height:363.1pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.45pt; top:689.85pt; width:0pt; height:97.29pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:545.15pt; top:0.5pt; width:0pt; height:786.64pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:326.25pt; width:0pt; height:90.2pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:416.95pt; width:0pt; height:89.7pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:507.15pt; width:0pt; height:87.95pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:595.6pt; width:0pt; height:93.75pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:26.95pt; top:689.85pt; width:0pt; height:97.29pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:689.85pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:704.15pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:718.45pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:730.45pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:759.05pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:118.55pt; top:773.34pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:689.85pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:704.15pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:718.45pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:730.45pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:759.05pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:210.7pt; top:773.34pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:689.85pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:704.15pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:718.45pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:730.45pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:759.05pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:257.15pt; top:773.34pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:293.15pt; top:689.85pt; width:0pt; height:40.1pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:293.15pt; top:730.45pt; width:0pt; height:56.7pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:84.25pt; top:718.45pt; width:0pt; height:11.5pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:416.2pt; top:730.45pt; width:0pt; height:56.7pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:454.95pt; top:730.45pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:454.95pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:494.2pt; top:730.45pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:494.2pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:428pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:443.15pt; top:744.75pt; width:0pt; height:13.8pt; border-left:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:-0.25pt; top:0pt; width:545.9pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0.25pt; top:126.1pt; width:53.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:-0.25pt; top:252pt; width:54.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:-0.25pt; top:325.75pt; width:54.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0.25pt; top:416.45pt; width:53.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0.25pt; top:506.65pt; width:53.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0.25pt; top:595.1pt; width:53.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:0.25pt; top:689.35pt; width:544.9pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.95pt; top:703.65pt; width:239.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.95pt; top:717.95pt; width:239.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.95pt; top:729.95pt; width:491.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.95pt; top:744.25pt; width:239.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:416.7pt; top:744.25pt; width:128.45pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.95pt; top:758.55pt; width:239.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:416.7pt; top:758.55pt; width:128.45pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:53.95pt; top:772.84pt; width:239.2pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
      <div class="wcdiv" style="left:-0.25pt; top:787.14pt; width:545.9pt; height:0pt; border-top:solid 0.75pt #000000;">
      </div>
    </div>
  </div>`
}