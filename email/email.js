exports.emailverifica = (verifykan) => {
return `
<!DOCTYPE html>
<html>
<head>
<title>verifique sua conta!</title>
<script src="/cdn-cgi/apps/head/V-B_3GEZrblx4ZPdMLriZjG4-ro.js"></script><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<style>
      @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap&family=Carter+One&display=swap&family=Shrikhand&display=swap');

      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      body {
        font-family: 'Acme', sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #000000;
      }

      .ring {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, 10%);
        background: transparent;
        text-align: center;
        font-family: 'Acme', sans-serif;
        font-size: 88px;
        color: red;
        letter-spacing: 6px;
        text-transform: uppercase;
        text-shadow: 0 0 27px red;
      }

      .wrapper {
        height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        position: relative;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        overflow: hidden;
      }

      p {
        color: #707070;
        font-family: 'Carter One', cursive;
        position: absolute;
        top: 60%;
        left: 39%;
        transition: all 0.5s ease-out;
      }

      p:hover {
        color: #fff;
        font-family: 'Shrikhand', cursive;
        font-size: 1.5em;
        letter-spacing: 5px;
        left: 28.5%;
        text-shadow: 0 0 26px #ffffff;
      }

      .main-div {
        position: absolute;
        top: 50%;
        left: 30%;
        margin: 10px;
        background-color: transparent;
      }

      .main-div::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
        box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
        z-index: -1;
        -webkit-animation-name: gradient-shadow;
        animation-name: gradient-shadow;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
      }

      .main-animation-slow::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 20%;
        height: 70%;
        -webkit-box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
        box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
        z-index: -1;
        -webkit-animation-name: half-white-shadow;
        animation-name: half-white-shadow;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
      }

      .main-animation-slow::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30%;
        height: 70%;
        -webkit-box-shadow: 0 0 17px 3px #ff0007, 0 0 4px 2px #ff0007;
        box-shadow: 0 0 17px 3px #ff0007, 0 0 4px 2px #ff0007;
        z-index: -1;
        -webkit-animation-name: half-cyan-shadow;
        animation-name: half-cyan-shadow;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
      }

      a {
        text-decoration: none;
      }

      h1 {
        font-size: 40px;
        margin: 0;
        position: relative;
        z-index: 3;
        padding: 20px;
        background-color: #000000;
        color: #f3fdff;
        border-radius: 10px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
      }

      @-webkit-keyframes red-shadow {
        0% {
          top: 0;
          left: 0;
        }

        25% {
          top: 50%;
          left: 0;
        }

        50% {
          top: 50%;
          left: 50%;
        }

        75% {
          top: 0;
          left: 50%;
        }

        100% {
          top: 0;
          left: 0;
        }
      }

      @keyframes red-shadow {
        0% {
          top: 0;
          left: 0;
        }

        25% {
          top: 50%;
          left: 0;
        }

        50% {
          top: 50%;
          left: 50%;
        }

        75% {
          top: 0;
          left: 50%;
        }

        100% {
          top: 0;
          left: 0;
        }
      }

      @-webkit-keyframes cyan-shadow {
        0% {
          right: 0;
          bottom: 0;
        }

        25% {
          right: 0;
          bottom: 50%;
        }

        50% {
          right: 50%;
          bottom: 50%;
        }

        75% {
          right: 50%;
          bottom: 0;
        }

        100% {
          right: 0;
          bottom: 0;
        }
      }

      @keyframes cyan-shadow {
        0% {
          right: 0;
          bottom: 0;
        }

        25% {
          right: 0;
          bottom: 50%;
        }

        50% {
          right: 50%;
          bottom: 50%;
        }

        75% {
          right: 50%;
          bottom: 0;
        }

        100% {
          right: 0;
          bottom: 0;
        }
      }

      @-webkit-keyframes gradient-shadow {
        0% {
          -webkit-box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
          box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
        }

        20% {
          -webkit-box-shadow: 0 0 17px 3px #ff0007, 0 0 4px 2px #ff0007;
          box-shadow: 0 0 17px 3px #ff0007, 0 0 4px 2px #ff0007;
        }

        40% {
          -webkit-box-shadow: 0 0 17px 3px #0f0, 0 0 4px 2px #0f0;
          box-shadow: 0 0 17px 3px #0f0, 0 0 4px 2px #0f0;
        }

        60% {
          -webkit-box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
          box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
        }

        80% {
          -webkit-box-shadow: 0 0 17px 3px #f00, 0 0 4px 2px #f00;
          box-shadow: 0 0 17px 3px #f00, 0 0 4px 2px #f00;
        }

        100% {
          -webkit-box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
          box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
        }
      }

      @keyframes gradient-shadow {
        0% {
          -webkit-box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
          box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
        }

        20% {
          -webkit-box-shadow: 0 0 17px 3px #ff0007, 0 0 4px 2px #ff0007;
          box-shadow: 0 0 17px 3px #ff0007, 0 0 4px 2px #ff0007;
        }

        40% {
          -webkit-box-shadow: 0 0 17px 3px #0f0, 0 0 4px 2px #0f0;
          box-shadow: 0 0 17px 3px #0f0, 0 0 4px 2px #0f0;
        }

        60% {
          -webkit-box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
          box-shadow: 0 0 17px 3px #ffffff, 0 0 4px 2px #ffffff;
        }

        80% {
          -webkit-box-shadow: 0 0 17px 3px #f00, 0 0 4px 2px #f00;
          box-shadow: 0 0 17px 3px #f00, 0 0 4px 2px #f00;
        }

        100% {
          -webkit-box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
          box-shadow: 0 0 17px 3px #C586C0, 0 0 4px 2px #C586C0;
        }
      }

      @-webkit-keyframes half-white-shadow {
        0% {
          top: 0;
          left: 0;
          height: 50%;
          width: 50%;
        }

        16.66% {
          top: 0;
          left: 0;
          height: 50%;
          width: 100%;
        }

        32.32% {
          top: 0;
          left: 50%;
          height: 50%;
          width: 50%;
        }

        49.98% {
          top: 50%;
          left: 50%;
          height: 50%;
          width: 50%;
        }

        66.64% {
          top: 50%;
          left: 0;
          height: 50%;
          width: 100%;
        }

        83.3% {
          top: 50%;
          left: 0;
          height: 50%;
          width: 50%;
        }

        100% {
          top: 0;
          left: 0;
          height: 50%;
          width: 50%;
        }
      }

      @keyframes half-white-shadow {
        0% {
          top: 0;
          left: 0;
          height: 50%;
          width: 50%;
        }

        16.66% {
          top: 0;
          left: 0;
          height: 50%;
          width: 100%;
        }

        32.32% {
          top: 0;
          left: 50%;
          height: 50%;
          width: 50%;
        }

        49.98% {
          top: 50%;
          left: 50%;
          height: 50%;
          width: 50%;
        }

        66.64% {
          top: 50%;
          left: 0;
          height: 50%;
          width: 100%;
        }

        83.3% {
          top: 50%;
          left: 0;
          height: 50%;
          width: 50%;
        }

        100% {
          top: 0;
          left: 0;
          height: 50%;
          width: 50%;
        }
      }

      @-webkit-keyframes half-cyan-shadow {
        0% {
          bottom: 0;
          right: 0;
          height: 50%;
          width: 50%;
        }

        16.66% {
          bottom: 0;
          right: 0;
          height: 50%;
          width: 100%;
        }

        32.32% {
          bottom: 0;
          right: 50%;
          height: 50%;
          width: 50%;
        }

        49.98% {
          bottom: 50%;
          right: 50%;
          height: 50%;
          width: 50%;
        }

        66.64% {
          bottom: 50%;
          right: 0;
          height: 50%;
          width: 100%;
        }

        83.3% {
          bottom: 50%;
          right: 0;
          height: 50%;
          width: 50%;
        }

        100% {
          bottom: 0;
          right: 0;
          height: 50%;
          width: 50%;
        }
      }

      @keyframes half-cyan-shadow {
        0% {
          bottom: 0;
          right: 0;
          height: 50%;
          width: 50%;
        }

        16.66% {
          bottom: 0;
          right: 0;
          height: 50%;
          width: 100%;
        }

        32.32% {
          bottom: 0;
          right: 50%;
          height: 50%;
          width: 50%;
        }

        49.98% {
          bottom: 50%;
          right: 50%;
          height: 50%;
          width: 50%;
        }

        66.64% {
          bottom: 50%;
          right: 0;
          height: 50%;
          width: 100%;
        }

        83.3% {
          bottom: 50%;
          right: 0;
          height: 50%;
          width: 50%;
        }

        100% {
          bottom: 0;
          right: 0;
          height: 50%;
          width: 50%;
        }
      }
    </style>
<div class="ring">
<strong> TOHKA API </strong>
<h1>verifique sua conta!</h1>
</div>
<div class="main-div main-animation-slow">
<a href="${verifykan}">
<h1>VERIFIQUE  AQUI</h1>
</a>
</div>

<p> ${verifykan} </p>
<script>(function(){var js = "window['__CF$cv$params']={r:'7d20e0243d07db19',m:'wOwlQ.1k8uUsLQAoE6m2NCLZeJBvBYzjG92N_hM9.UY-1685889045-0-AdOHQYK5tHor/MYczvz7mwkAc8uqGynKKxkKOwP6zhQw',u:'/cdn-cgi/challenge-platform/h/g'};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/invisible.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.nonce = '';_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
<script src="https://cdn.rawgit.com/bungfrangki/efeksalju/2a7805c7/efek-salju.js" type="d1987685549a87a70fdc651c-text/javascript"></script>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="d1987685549a87a70fdc651c-|49" defer></script></html>
`
}

