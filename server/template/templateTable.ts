export const templateTable = () => {
    return `<!DOCTYPE html>
    <html lang="ru">
        <head>
            <meta charset="UTF-8" />
            <title>Getting Started</title>
            <style>
                body {
                    background: red;
                    padding: 0;
                    margin: 0;
                }
                #root {
                    size: 21cm 29.7cm;
                    border: 1px solid black;
                    border-left: none;
                    box-sizing: border-box;
                    height: 29.7cm;
                    width: 21cm;
                    font-size: 18px;
                }
                .verticle_text {
                        border: 1px solid black;
                        text-align: center;
                        writing-mode: vertical-rl;
                        vertical-align: middle;
                        min-height: 140.8px;
                        transform: rotate(-180deg);
                        padding: 5px 0 5px 5px;
                        color: yellow;
                }
                .transformN {
                        display: inline-block;
                        transform: rotate(-270deg); 
                }
                .table {
                    padding: 0;
                    margin: 0;
                    border-spacing: 0;
                }
                .no_border-right {
                        border-right: none;
                    }
                    .no_border-top {
                        border-top: none;
                    }
                    .no_border-bottom {
                        border-bottom: none;
                    }
            </style>
        </head>
        <body>
            <div id="root">
                <table class="table">
                    <tr style="display: flex; flex-direction: column;">
                        <td class="verticle_text no_border-top no_border-bottom">Перв. примен</td>
                        <td class="verticle_text">Справ. <span class="transformN">№</span></td>
                        <td style="height: 56px;"></td>
                        <td class="verticle_text no_border-top">Подп. и дата</td>
                        <td class="verticle_text no_border-top">Инв. <span class="transformN">№</span> дубл.</td>
                        <td class="verticle_text no_border-top">Взам. инв. <span class="transformN">№</span></td>
                        <td class="verticle_text no_border-top">Подп. и дата</td>
                        <td class="verticle_text no_border-top">Инв. <span class="transformN">№</span> подп.</td>
                    </tr>
    
                </table>
                
        </body>
    </html>`
}