// ==UserScript==
// @name         Instagram sign-in bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @date         2022-05-28
// @author       github.com/kiriles90
// @updateURL    https://raw.githubusercontent.com/kiriles90/Instagram-sign-in-bypass/master/violentmonkey.js
// @downloadURL  https://raw.githubusercontent.com/kiriles90/Instagram-sign-in-bypass/master/violentmonkey.js
// @run-at       document-idle
// @match        http://www.instagram.com/*
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==
window.setTimeout(function(){
  const clone = document.querySelector('body main > div > div > div:nth-child(2) > div > p');
  if (clone && clone.lastChild && clone.lastChild.href && clone.lastChild.href.includes('instagram.com/accounts/emailsignup')) {
    const link = 'https://www.picuki.com/profile' + location.search.replace('?next=', '');
    const button = clone.cloneNode(true);
    button.innerHTML = `or ( ° ͜ʖ͡°)╭∩╮ Zuckerberg<br>and <a href="` + link + `"><span>open with Picuki</span></a> instead`;
    clone.parentElement.appendChild(button);
  } else {
    (function() {
      'use strict';
      let observer = new MutationObserver((mutations) => {
        mutations.forEach((m) => {
          m.target.style.overflow = "scroll";
          if (document.querySelector("body > div.RnEpo._Yhr4")) {
            document.querySelector("body > div.RnEpo._Yhr4").remove();
          }
        });
      });
      observer.observe(document.querySelector("body"), {
        attributes: true,
      });
    })();
  }
}, 500);
