// ==UserScript==
// @name         Bypass Yeumoney
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Automatically Bypass Yeumoney
// @author       xGreen
// @match        https://yeumoney.com/*
// @match        https://165.22.63.250/*
// @match        https://188.166.185.213/*
// @match        https://fb88lx.com/*
// @match        https://bk8it.com/*
// @match        https://bet88pa.com/*
// @match        https://188betal.com/*
// @match        https://vn88to.com/*
// @match        https://www.google.com/search?q=https*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // Link nhiệm vụ (Lưu ý khi update thì phải update cả phần //@match ở phía trên)
    const redirectUrls = {
        "188bet": "https://188betal.com/",
        "w88": "https://188.166.185.213/",
        "bk8": "https://bk8it.com/",
        "fb88": "https://fb88lx.com/",
        "m88": "https://bet88pa.com/",
        "vn88": "https://vn88to.com/"
        //...
    };
    // Code Logic
    function _0x568b(_0xe10e18,_0x4afd2a){const _0x4b4c34=_0x4b4c();return _0x568b=function(_0x568be9,_0x48b4e5){_0x568be9=_0x568be9-0x118;let _0x285bea=_0x4b4c34[_0x568be9];return _0x285bea;},_0x568b(_0xe10e18,_0x4afd2a);}const _0x33db4a=_0x568b;(function(_0x4c4503,_0x59a186){const _0x48307c=_0x568b,_0x275674=_0x4c4503();while(!![]){try{const _0x4951bb=-parseInt(_0x48307c(0x171))/0x1+-parseInt(_0x48307c(0x163))/0x2*(-parseInt(_0x48307c(0x14e))/0x3)+parseInt(_0x48307c(0x15b))/0x4+-parseInt(_0x48307c(0x13f))/0x5*(-parseInt(_0x48307c(0x140))/0x6)+parseInt(_0x48307c(0x14a))/0x7*(-parseInt(_0x48307c(0x151))/0x8)+parseInt(_0x48307c(0x121))/0x9*(parseInt(_0x48307c(0x168))/0xa)+-parseInt(_0x48307c(0x155))/0xb;if(_0x4951bb===_0x59a186)break;else _0x275674['push'](_0x275674['shift']());}catch(_0x1f4151){_0x275674['push'](_0x275674['shift']());}}}(_0x4b4c,0x2d4b7));function doiNhiemvu(){const _0x3fb4af=_0x568b,_0x49355f=document['querySelector'](_0x3fb4af(0x137));if(!_0x49355f)return;_0x49355f[_0x3fb4af(0x16f)](),setTimeout(()=>{const _0x5441f7=_0x3fb4af,_0x1e804c=document[_0x5441f7(0x16d)]('#lydo_doima\x20>\x20center\x20>\x20a:nth-child(2)');if(_0x1e804c)_0x1e804c[_0x5441f7(0x16f)]();setTimeout(()=>{const _0x5e600d=_0x5441f7,_0x24ca6d=document[_0x5e600d(0x16d)](_0x5e600d(0x160));if(_0x24ca6d)_0x24ca6d[_0x5e600d(0x16f)]();setTimeout(()=>{const _0x1418a0=_0x5e600d,_0x24ad88=document[_0x1418a0(0x16d)](_0x1418a0(0x120));if(_0x24ad88)_0x24ad88[_0x1418a0(0x16f)]();},0x1f4);},0x1f4);},0x1f4);}function chuyenTrang(_0x534270){const _0x52f6c9=_0x568b,_0x213167=redirectUrls[_0x534270];if(_0x213167){const _0x2e77e3=_0x52f6c9(0x143)+encodeURIComponent(_0x213167);window['open'](_0x2e77e3,_0x52f6c9(0x166));}else doiNhiemvu();}function fetchCodeAndRedirect(_0x498668,_0x4d8868,_0x5d688e){const _0x1578da=_0x568b,_0x249739=_0x1578da(0x124)+_0x498668+'&url='+encodeURIComponent(_0x4d8868)+_0x1578da(0x11a)+_0x5d688e+_0x1578da(0x132);fetch(_0x249739,{'method':_0x1578da(0x15f)})[_0x1578da(0x13a)](_0xa02863=>_0xa02863['text']())['then'](_0x185324=>{const _0x56410e=_0x1578da,_0x26c404=_0x185324['match'](/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[0x1];_0x26c404&&(sessionStorage[_0x56410e(0x16a)](_0x56410e(0x167),_0x26c404),sessionStorage[_0x56410e(0x16a)](_0x56410e(0x11e),_0x249739+_0x26c404),sessionStorage[_0x56410e(0x16a)](_0x56410e(0x133),'true'),window[_0x56410e(0x12c)]['href']=_0x4d8868);});}function _0x4b4c(){const _0x441a30=['text','textarea','\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2030px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2010px\x2020px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20','button','find','2255540VxvTEu','Script\x20By\x20phantatdung','includes','#28a745','110373HjOGWp','readOnly','parseFromString','8NwzqJT','https://www.google.com/search?q=ptd','replace','input','2283149hVOrnL','\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20','cssText','\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100vw;\x20height:\x20100vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20','hostname','getItem','875872aplAFy','a[href^=\x22https://','a[href^=\x22http\x22]','body','POST','#lydo_doima\x20>\x20label:nth-child(8)\x20>\x20input[type=radio]','onmouseover','#000','16BXVIFc','textContent','backgroundColor','_blank','ymnclk','89130PgFIsy','/\x22]','setItem','advanced_search','www.google.com','querySelector','href','click','createElement','243098ctQrvS','referrer','clipboard','&loai_traffic=','style','select','#aaa','nextFetchUrl','\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x20unset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#aaa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:10px;\x0a\x20\x20\x20\x20','#dongy_doima\x20>\x20a','315wCXhkY','color','removeItem','https://traffic-user.net/GET_MA.php?codexn=','Sao\x20chép\x20thất\x20bại!','span','copy','querySelectorAll','\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x20unset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s;\x0a\x20\x20\x20\x20','startsWith','/search','location','Sao\x20chép\x20thất\x20bại:\x20','#218838','yeumoney.com','appendChild','https://','&clk=','redirectDone','onload','defineProperty','Mã\x20đã\x20được\x20sao\x20chép\x20vào\x20clipboard!','#btn-baoloi','div','onmouseout','then','value','log','pathname','match','5igwWFx','798918vqJOEj','codexn','type','https://www.google.com/search?q=','trim'];_0x4b4c=function(){return _0x441a30;};return _0x4b4c();}function fallbackCopyTextToClipboard(_0x1d0b18){const _0x4eb199=_0x568b,_0x1967e1=document[_0x4eb199(0x170)](_0x4eb199(0x146));_0x1967e1[_0x4eb199(0x13b)]=_0x1d0b18,document[_0x4eb199(0x15e)]['appendChild'](_0x1967e1),_0x1967e1['focus'](),_0x1967e1[_0x4eb199(0x11c)]();try{const _0x2c3661=document['execCommand'](_0x4eb199(0x127));alert(_0x2c3661?'Mã\x20đã\x20được\x20sao\x20chép!':_0x4eb199(0x125));}catch(_0x2a44c5){alert(_0x4eb199(0x12d)+_0x2a44c5);}document[_0x4eb199(0x15e)]['removeChild'](_0x1967e1);}function thongbaoKetqua(_0x10f343){const _0x2ce9a6=_0x568b,_0x248170=_0x10f343[_0x2ce9a6(0x164)][_0x2ce9a6(0x153)](/\s+/g,'');_0x10f343['textContent']=_0x248170;const _0x2ba08d=document[_0x2ce9a6(0x170)](_0x2ce9a6(0x138));_0x2ba08d[_0x2ce9a6(0x11b)][_0x2ce9a6(0x157)]=_0x2ce9a6(0x158);const _0x158572=document[_0x2ce9a6(0x170)](_0x2ce9a6(0x138));_0x158572[_0x2ce9a6(0x11b)][_0x2ce9a6(0x157)]=_0x2ce9a6(0x147);const _0x52550b=document[_0x2ce9a6(0x170)](_0x2ce9a6(0x126));_0x52550b[_0x2ce9a6(0x164)]='×',_0x52550b[_0x2ce9a6(0x11b)][_0x2ce9a6(0x157)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#aaa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20color\x200.3s;\x0a\x20\x20\x20\x20',_0x52550b[_0x2ce9a6(0x161)]=()=>_0x52550b['style'][_0x2ce9a6(0x122)]=_0x2ce9a6(0x162),_0x52550b[_0x2ce9a6(0x139)]=()=>_0x52550b['style'][_0x2ce9a6(0x122)]=_0x2ce9a6(0x11d),_0x52550b['onclick']=()=>document['body']['removeChild'](_0x2ba08d);const _0x37efbe=document['createElement']('p');_0x37efbe['textContent']='Bypass\x20Yeumoney\x20Thành\x20Công',_0x37efbe[_0x2ce9a6(0x11b)][_0x2ce9a6(0x157)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20';const _0x1beb03=document['createElement']('p');_0x1beb03['textContent']=_0x2ce9a6(0x14b),_0x1beb03[_0x2ce9a6(0x11b)][_0x2ce9a6(0x157)]=_0x2ce9a6(0x11f);const _0x330a94=document[_0x2ce9a6(0x170)](_0x2ce9a6(0x154));_0x330a94[_0x2ce9a6(0x142)]='text',_0x330a94[_0x2ce9a6(0x13b)]=_0x248170,_0x330a94[_0x2ce9a6(0x14f)]=!![],_0x330a94[_0x2ce9a6(0x11b)][_0x2ce9a6(0x157)]=_0x2ce9a6(0x156);const _0x3d0aed=document[_0x2ce9a6(0x170)](_0x2ce9a6(0x148));_0x3d0aed[_0x2ce9a6(0x164)]='SAO\x20CHÉP',_0x3d0aed['style'][_0x2ce9a6(0x157)]=_0x2ce9a6(0x129),_0x3d0aed[_0x2ce9a6(0x161)]=()=>_0x3d0aed[_0x2ce9a6(0x11b)][_0x2ce9a6(0x165)]=_0x2ce9a6(0x12e),_0x3d0aed['onmouseout']=()=>_0x3d0aed[_0x2ce9a6(0x11b)][_0x2ce9a6(0x165)]=_0x2ce9a6(0x14d),_0x3d0aed['onclick']=async()=>{const _0x50e372=_0x2ce9a6;try{await navigator[_0x50e372(0x119)]['writeText'](_0x248170),alert(_0x50e372(0x136));}catch(_0x10794b){alert(_0x50e372(0x12d)+_0x10794b);}},_0x158572[_0x2ce9a6(0x130)](_0x52550b),_0x158572[_0x2ce9a6(0x130)](_0x37efbe),_0x158572[_0x2ce9a6(0x130)](_0x330a94),_0x158572['appendChild'](_0x3d0aed),_0x158572['appendChild'](_0x1beb03),_0x2ba08d[_0x2ce9a6(0x130)](_0x158572),document[_0x2ce9a6(0x15e)][_0x2ce9a6(0x130)](_0x2ba08d);}if(window['location'][_0x33db4a(0x159)]===_0x33db4a(0x16c)&&window['location'][_0x33db4a(0x13d)]===_0x33db4a(0x12b)){const urlParams=new URLSearchParams(window[_0x33db4a(0x12c)]['search']),searchQuery=urlParams['get']('q');if(searchQuery&&searchQuery[_0x33db4a(0x12a)](_0x33db4a(0x131))){const links=document[_0x33db4a(0x128)](_0x33db4a(0x15d));for(let link of links){if(link['href'][_0x33db4a(0x14c)](searchQuery)&&!link[_0x33db4a(0x16e)][_0x33db4a(0x14c)](_0x33db4a(0x16b))){link[_0x33db4a(0x16f)]();break;}}}}else{if(window[_0x33db4a(0x12c)][_0x33db4a(0x159)]===_0x33db4a(0x12f))window[_0x33db4a(0x134)]=()=>{setTimeout(()=>{const _0xbcae27=_0x568b,_0x4a8b04=document[_0xbcae27(0x16d)]('p#TK1');if(_0x4a8b04)chuyenTrang(_0x4a8b04[_0xbcae27(0x164)][_0xbcae27(0x144)]());},0x7d0);};else{if(!sessionStorage[_0x33db4a(0x15a)](_0x33db4a(0x133))){Object[_0x33db4a(0x135)](document,_0x33db4a(0x118),{'get':()=>_0x33db4a(0x152)});const codexn=localStorage[_0x33db4a(0x15a)](_0x33db4a(0x141)),currentHost=window['location'][_0x33db4a(0x159)],link=[...document[_0x33db4a(0x128)](_0x33db4a(0x15c)+currentHost+_0x33db4a(0x169))][_0x33db4a(0x149)](_0x4412a9=>_0x4412a9['getAttribute']('href')[_0x33db4a(0x13e)](/^https:\/\/[^\/]+\/.+\//));codexn&&link?fetchCodeAndRedirect(codexn,link,currentHost):console[_0x33db4a(0x13c)]('Không\x20tìm\x20thấy\x20codexn\x20và\x20link:\x20'+codexn+link);;}else{const nextFetchUrl=sessionStorage[_0x33db4a(0x15a)]('nextFetchUrl');nextFetchUrl&&fetch(nextFetchUrl,{'method':_0x33db4a(0x15f)})[_0x33db4a(0x13a)](_0x5c5b94=>_0x5c5b94[_0x33db4a(0x145)]())[_0x33db4a(0x13a)](_0x4da9c6=>{const _0x48fb9a=_0x33db4a,_0x562af2=new DOMParser()[_0x48fb9a(0x150)](_0x4da9c6,'text/html'),_0x3211c8=_0x562af2[_0x48fb9a(0x16d)]('span#layma_me_vuatraffic');if(_0x3211c8)thongbaoKetqua(_0x3211c8);}),sessionStorage[_0x33db4a(0x123)]('nextFetchUrl'),sessionStorage['removeItem'](_0x33db4a(0x133));}}}
})();
