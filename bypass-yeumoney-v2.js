// ==UserScript==
// @name         Bypass Yeumoney V2
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Bypass Yeumoney
// @author       xGreen
// @match        https://yeumoney.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const GET_VUATRAFFIC_URL = "https://traffic-user.net/GET_VUATRAFFIC.php";
    const GET_MA_URL = "https://traffic-user.net/GET_MA.php";
    const GOOGLE_URL = "https://www.google.com/";
    const OCR_URL = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2";

    function doiNhiemvu() {
        console.log("Đang đổi nhiệm vụ...");
        const btnBaoloi = document.querySelector('#btn-baoloi');
        if (!btnBaoloi) return;
        btnBaoloi.click();
        setTimeout(() => {
            const reasonLink = document.querySelector('#lydo_doima > center > a:nth-child(2)');
            if (reasonLink) reasonLink.click();

            setTimeout(() => {
                const radioInput = document.querySelector('#lydo_doima > label:nth-child(8) > input[type=radio]');
                if (radioInput) radioInput.click();

                setTimeout(() => {
                    const confirmLink = document.querySelector('#dongy_doima > a');
                    if (confirmLink) confirmLink.click();
                }, 500);
            }, 500);
        }, 500);
    }

    function recognizeTrafficURL() {
        return new Promise((resolve, reject) => {
            const trafficName = document.querySelector('p#TK1').textContent.trim().toLowerCase();
            const imageElement = document.querySelector('img#halt_nv') || document.querySelector('img#hinh_nv');
            const imageUrl = imageElement ? imageElement.src : null;
            if (imageUrl.includes('placehold.co')) {
                setTimeout(() => {
                    recognizeTrafficURL().then(resolve).catch(reject);
                }, 100);
                return;
            }
            const fetchUrl = `${OCR_URL}&url=${imageUrl}`;
            const xhr = new XMLHttpRequest();
            xhr.open("GET", fetchUrl, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    const parsedResult = response.ParsedResults[0];
                    const result = parsedResult.TextOverlay.Lines
                        .filter(line => line.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) &&
                            line.Words &&
                            line.Words.some(word => word.Top < 170))
                        .map(line => line.LineText);
                    let taskURL = '';
                    if (trafficName === '188bet') {
                        taskURL = `https://88bet${result}/`;
                    } else if (trafficName === 'w88') {
                        taskURL = `https://188.166.185.213/`;
                    } else if (trafficName === 'bk8') {
                        taskURL = `https://bk8${result}/`;
                    } else if (trafficName === 'fb88') {
                        taskURL = `https://fb88${result}/`;
                    } else if (trafficName === 'm88') {
                        taskURL = `https://bet88${result}/`;
                    } else if (trafficName === 'vn88') {
                        taskURL = `https://vn88${result}/`;
                    } else {
                        taskURL = `Chưa nhận diện được URL!`;
                    }
                    resolve(taskURL);
                } else {
                    reject('Lỗi khi tải dữ liệu: ' + xhr.status);
                }
            };
            xhr.send();
        });
    }

    function generateTimestampData(taskURL) {
        const timestamp = Date.now();
        return `${timestamp},${GOOGLE_URL},${taskURL},IOS900,hidden,null`;
    };

    function fetchCodexn(ymnclk) {
        return new Promise((resolve, reject) => {
            const timestampData = generateTimestampData();
            const xhr = new XMLHttpRequest();
            const fetchUrl = `${GET_VUATRAFFIC_URL}?data=${timestampData}&clk=${ymnclk}`;
            xhr.open("POST", fetchUrl, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const htmlString = xhr.responseText;
                    const codexn = htmlString.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
                    if (codexn) {
                        localStorage.codexn = codexn;
                        resolve(codexn);
                    } else {
                        console.error("Không thể lấy mã codexn");
                        reject("Lỗi! Đổi nhiệm vụ khác và thử lại");
                    }
                } else {
                    reject(`Lỗi: ${xhr.status}`);
                }
            };
            xhr.onerror = () => reject("Lỗi mạng hoặc yêu cầu không thành công");
            xhr.send();
        });
    }

    function fetchCode(codexn, url, loai_traffic, ymnclk) {
        return new Promise((resolve, reject) => {
            const fetchUrl = `${GET_MA_URL}?codexn=${codexn}&url=${url}&loai_traffic=${loai_traffic}&clk=${ymnclk}`;
            const xhr = new XMLHttpRequest();
            xhr.open("POST", fetchUrl, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const htmlString = xhr.responseText;
                    const ymnclk = htmlString.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
                    if (ymnclk) {
                        sessionStorage.setItem("ymnclk", ymnclk);
                        resolve(ymnclk);
                    } else {
                        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
                        const spanElement = doc.querySelector('span#layma_me_vuatraffic');
                        if (spanElement) resolve(spanElement.textContent.trim());
                        else reject("URL Lỗi! Vui lòng kiểm tra lại.");
                    }
                } else {
                    reject(`Lỗi: ${xhr.status}`);
                }
            };
            xhr.onerror = () => reject("Lỗi mạng hoặc yêu cầu không thành công");
            xhr.send();
        });
    }

    async function startBypass(url) {
        try {
            const codexn1 = await fetchCodexn(null);
            const url1 = url.replace(/\/$/, "");
            const ymnclk = await fetchCode(codexn1, url1, GOOGLE_URL, null);
            const codexn2 = await fetchCodexn(ymnclk);
            const url2 = url + "admin";
            const result = await fetchCode(codexn2, url2, url, ymnclk);
            return result;
        } catch (error) {
            console.error("Lỗi trong startBypass:", error);
            return null;
        }
    }

    function createUI(taskURL) {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '10px';
        container.style.right = '10px';
        container.style.backgroundColor = '#f9f9f9';
        container.style.border = '1px solid #ccc';
        container.style.padding = '10px';
        container.style.zIndex = '9999';
        container.style.width = '350px';
        container.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        container.style.borderRadius = '10px';

        const des = document.createElement('h4');
        des.textContent = 'Script By phantatdung';
        des.style.margin = '0';
        des.style.marginBottom = '10px';
        des.style.fontSize = '10px';
        des.style.fontStyle = 'italic'
        des.style.textAlign = 'center';

        container.appendChild(des);

        const title = document.createElement('h3');
        title.textContent = 'Nhập URL nhiệm vụ:';
        title.style.margin = '0';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '10px';
        title.style.fontSize = '16px';

        container.appendChild(title);

        const input = document.createElement('input');
        input.readOnly = false;
        input.placeholder = 'Nếu để trống sẽ sử dụng URL nhận diện!';
        input.style.width = '100%';
        input.style.marginBottom = '10px';
        input.style.padding = '8px';
        input.style.fontSize = '14px';

        container.appendChild(input);

        const buttonRow = document.createElement('div');
        buttonRow.style.display = 'flex';
        buttonRow.style.justifyContent = 'space-between';
        buttonRow.style.fontSize = '14px';

        const startBtn = document.createElement('button');
        startBtn.textContent = 'Bắt đầu Bypass';
        startBtn.style.flex = '1';
        startBtn.style.padding = '7px';
        startBtn.style.backgroundColor = '#4CAF50';
        startBtn.style.color = '#fff';
        startBtn.style.border = 'none';
        startBtn.style.cursor = 'pointer';
        startBtn.style.marginRight = '5px';
        startBtn.style.borderRadius = '5px';

        startBtn.onclick = async () => {
            try {
                input.readOnly = true
                const check = input.value || taskURL;
                input.value = 'Đang xử lý...';
                const code = await startBypass(check);

                if (code) {
                    let countdown = 70;
                    const countdownInterval = setInterval(() => {
                        input.value = `Vui lòng chờ: ${countdown} giây`;
                        countdown--;
                        if (countdown < 0) {
                            clearInterval(countdownInterval);
                            input.value = code;
                        }
                    }, 1000);
                } else {
                    input.readOnly = false
                    console.error("Không có mã trả về từ startBypass");
                    input.value = "Lỗi! Vui lòng xem lại URL."
                }

                sessionStorage.removeItem("ymnclk");
                localStorage.removeItem("codexn");
            } catch (error) {
                console.error("Lỗi khi gọi startBypass:", error);
            }
        };

        buttonRow.appendChild(startBtn);

        const reloadBtn = document.createElement('button');
        reloadBtn.textContent = 'Đổi Nhiệm Vụ';
        reloadBtn.style.flex = '1';
        reloadBtn.style.padding = '7px';
        reloadBtn.style.backgroundColor = '#F44336';
        reloadBtn.style.color = '#fff';
        reloadBtn.style.border = 'none';
        reloadBtn.style.cursor = 'pointer';
        reloadBtn.style.borderRadius = '5px';

        reloadBtn.onclick = async () => {
            input.readOnly = true;
            input.value = 'Đang Đổi Nhiệm Vụ...';
            doiNhiemvu();
        }

        buttonRow.appendChild(reloadBtn);

        const url = document.createElement('h4');
        url.textContent = 'URL nhận diện (OCR): ' + taskURL;
        url.style.margin = '0';
        url.style.marginBottom = '10px';
        url.style.fontSize = '13px';

        container.appendChild(url);

        container.appendChild(buttonRow);

        document.body.appendChild(container);
    }
        window.onload = () => {
                recognizeTrafficURL().then(taskURL => {
                    createUI(taskURL);
                }).catch(error => {
                    console.error("Lỗi khi nhận diện URL:", error);
                    createUI("Lỗi! Tự nhập URL hoặc Reload");
                });
        };
    }
)();
