"use strict";(function(){var a=document.createElement("canvas"),b=!!(a.getContext("webgl")||a.getContext("experimental-webgl")),c=[];if(b||c.push("WebGL"),"undefined"==typeof WebAssembly&&c.push("WebAssembly"),0===c.length)window["C3_IsSupported"]=!0;else{var d=document.createElement("div");d.id="notSupportedWrap",document.body.appendChild(d);var e=document.createElement("h2");e.id="notSupportedTitle",e.textContent="Software update needed",d.appendChild(e);var f=document.createElement("p");f.id="notSupportedMessage";var g="This content is not supported because your device's software is out-of-date. Try installing any available software updates. Alternatively try on a different device.",h=navigator.userAgent;/android/i.test(h)?g+="<br><br>On Android, make sure the <strong>Android System Webview</strong> and <strong>Chrome</strong> apps have updates enabled and are up-to-date.":/iphone|ipad|ipod/i.test(h)&&(g+="<br><br>Note: the <strong>iOS simulator</strong> is not currently supported due to an <a href='https://bugs.webkit.org/show_bug.cgi?id=191064'>Apple bug</a>. If you are using the simulator, try testing on a real device instead."),g+="<br><br><em>Missing features: "+c.join(", ")+"</em>",f.innerHTML=g,d.appendChild(f)}})();