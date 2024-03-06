"use strict";(self.webpackChunklloreggia_ch=self.webpackChunklloreggia_ch||[]).push([[146],{1159:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var A=n(1151),t=n(7294);function i(e){const a=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",hr:"hr",span:"span"},(0,A.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"Dingleberry is an IoT project with the goal to create a small Raspberry Pi-powered alarm clock."),"\n",t.createElement(a.h2,null,"Hardware"),"\n",t.createElement(a.p,null,"The device consists of a ",t.createElement(a.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/"},"Raspberry Pi Zero 2 W"),"\r\nwith a ",t.createElement(a.a,{href:"https://shop.pimoroni.com/products/unicorn-hat-hd?variant=42496126730"},"Unicorn Hat HD")," LED matrix display."),"\n",t.createElement(a.p,null,"Since the Pi Zero does not have an inbuilt audio connector, I'm currently using an old Logitech USB sound adapter that came with a gaming headset (Model A-00061).\r\nI will definitely replace this part with a better alternative (it requires an additional Micro-USB to USB-A adapter and is all in all rather bulky)."),"\n",t.createElement(a.p,null,"I'm planning on designing a custom 3D-printed case for the device as soon as the audio connectivity is finalized."),"\n",t.createElement(a.h2,null,"Software"),"\n",t.createElement(a.h3,null,"Device"),"\n",t.createElement(a.p,null,"The device runs a .NET 8 application on the default Raspberry Pi OS.\r\nCommunication with the server happens both via MQTT and REST.\r\nFirst-time-setup is done using BLE to establish a WiFi connection.\r\nAudio is done via interop to PulseAudio."),"\n",t.createElement(a.h3,null,"Server"),"\n",t.createElement(a.p,null,"The server is an ASP.NET Core 8 API exposing the aforementioned MQTT and REST/JSON endpoints.\r\nAuthentication is handled by an Azure AD B2C instance.\r\nData is stored using EF Core in an SQL Server instance."),"\n",t.createElement(a.h3,null,"App"),"\n",t.createElement(a.p,null,"A .NET MAUI app allows controlling the device from a variety of platforms (Windows, MacOS, Android, iOS)."),"\n",t.createElement(a.hr),"\n",t.createElement(a.h2,null,"Images"),"\n",t.createElement(a.h3,null,"03.06.2023"),"\n",t.createElement(a.p,null,"Device"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1280px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5f611d79d95de85b5fc21f9d18e8fa23/afef0/PXL_20240306_105147756.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABrB88dAUr/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQMAAhAhI//aAAgBAQABBQJjAsVduW6CqDj/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAABBQEAAAAAAAAAAAAAAAABABARISJR/9oACAEBAAY/ArWq4WgBaNN//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPyEA23kNoaPwmRj2h9YDLQ4Q5P/aAAwDAQACAAMAAAAQTx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPxCn/8QAHhABAAIBBAMAAAAAAAAAAAAAAQAhETFBUbFhcYH/2gAIAQEAAT8QKFKwA7dphPbQ28Z5lrqephs+GvUKLiDMgE//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Device"\n        title=""\n        src="/static/5f611d79d95de85b5fc21f9d18e8fa23/eea4a/PXL_20240306_105147756.jpg"\n        srcset="/static/5f611d79d95de85b5fc21f9d18e8fa23/cb69c/PXL_20240306_105147756.jpg 320w,\n/static/5f611d79d95de85b5fc21f9d18e8fa23/c08c5/PXL_20240306_105147756.jpg 640w,\n/static/5f611d79d95de85b5fc21f9d18e8fa23/eea4a/PXL_20240306_105147756.jpg 1280w,\n/static/5f611d79d95de85b5fc21f9d18e8fa23/0f98f/PXL_20240306_105147756.jpg 1920w,\n/static/5f611d79d95de85b5fc21f9d18e8fa23/8ec0a/PXL_20240306_105147756.jpg 2560w,\n/static/5f611d79d95de85b5fc21f9d18e8fa23/afef0/PXL_20240306_105147756.jpg 4624w"\n        sizes="(max-width: 1280px) 100vw, 1280px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(a.p,null,"Case"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1280px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/657fd471bc6e2e873e999c5ff3ff4628/db19e/Screenshot_2024-03-06_115740.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.37499999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACOklEQVR42nWTzW8SQRjG9z/roTVpTSoEGlPpCgqU2AKxNjY2GuPRg/4HJo0H9dAYgpqejd5Mr0pSvuruwn4Du+zCglv28Z0BE3tgNk9mMvu8v3fyzjvCZauNn7U66hcNKLKCi7aMrmpB020omg3DMKGZNgZ9GzLttbQefHcIh+QuZibdtCArXQi1Wg2mPYBt99BRFKi6DrvX5zJpz3FdjMYBNLWLjqbBo7Xveej3+xgMBnAch8t1HViWBUGSJJimCYNkGgYcMnrDIYakIAggSZeoVk7x/OkhXjx7jLPPFSiKjOl0Cs/zFzCXEjs8gaBRVlVV6QQqh3iUnQFHvo+Pp+/xsJRFIbuN/YKI0oMM9nZFHB+V8eHdW2iaSqcfYejN43yKETiMoEwMyDaZxqMRXr96iXx2BwflHMHSHPionEchl0Iyto7z8x8Ir644bET+a0CdasdB4zE3zGYznJy8QS6XRrFYQD6fRu5+CuKdBLbiN3E7uYlWs4HwT8hhLI5pKZCNarWCRPIWcrtZ7JX2IaZTiMc3sbG+hkRsAxbVndVyKZD9YBcRBGM+MwODZu6JuJsRkdrZxurqCraSMZx9+cRhzDOPmWsJMMCEaTLhJ63VfuHJ8RFurK3g8KCIdqvJ94OF5xrQskzqQQu9no0wDLkxiiL8+1gt2XCcAb5/+8qTsjGjy4joXxTN5v5ovhbq9QYajSaXTC+lQz0mK7+hdhR6OdTMJEVSYOgm9ZrHZ0M3+AtiMv+Tbhj4C9e0/AmbDyJVAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Case"\n        title=""\n        src="/static/657fd471bc6e2e873e999c5ff3ff4628/21b4d/Screenshot_2024-03-06_115740.png"\n        srcset="/static/657fd471bc6e2e873e999c5ff3ff4628/72799/Screenshot_2024-03-06_115740.png 320w,\n/static/657fd471bc6e2e873e999c5ff3ff4628/6af66/Screenshot_2024-03-06_115740.png 640w,\n/static/657fd471bc6e2e873e999c5ff3ff4628/21b4d/Screenshot_2024-03-06_115740.png 1280w,\n/static/657fd471bc6e2e873e999c5ff3ff4628/29114/Screenshot_2024-03-06_115740.png 1920w,\n/static/657fd471bc6e2e873e999c5ff3ff4628/c2d13/Screenshot_2024-03-06_115740.png 2560w,\n/static/657fd471bc6e2e873e999c5ff3ff4628/db19e/Screenshot_2024-03-06_115740.png 2561w"\n        sizes="(max-width: 1280px) 100vw, 1280px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(a.hr),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e0826f85c7806ce934b406942a2f272a/0a47e/logo.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR42pVVW08TURA+Z7vdbXehpUsBoUCFUkDwkqAgNy8lAkG5GDFg8PbQJmKIl8YbGiJRfNUHCcYYjaI+GBMVNEGjiYkv6oMJGB5M1ERN9El/gWV3nLM9JWUtXib5cqbfmfl2Zs6eLSELjSJsCCFBAJhcHHE/YQKPpWQRo5ZNO0LhvkxKEHFjnPSHvHmSmRdxPDfgvLW2U3vT2OP9vKop444g0ufIP11W77qB3Ke67sxpf6Vym8XynGSNecdHKZlhXXZG8/RTkxVw4FoQhh5VQHW7BhUNLmDcweulMHh/GfSN+HUWi2A5vmStxLzGqGAGxKo7NGN4armx72IAwueL5xp7sowa5CIXiucQMDxVaYT2ZJuxPGcsaa7z85o1x07IMyVNHGweWAIHJoLGlmO5wHnYEMmCQ5OlRtcJH3hy7CNsDDS+N8s1FpzYO8R3JyH5uF4pkdJgIBjU16RrcEZZAWfVlbBOzYJIMKD7ZIWJXOGxP3iuQCxljqLTj+t+TZDgnrtR7xX9UCN64WHGenjqCUGXlA8D9lIYd9XqDmpjov08ZzRZK3EoKr4Xxbh+K7ApEJKyjd3OIrjkqoYquwdWixqMu2thUK2AXoffyBYcTPArz1GtJ23ja7cHqws7A8ZWOR9eas3wNrMNTqLIYaXM9F9pLdDvDMKAUmqkUZGJdls0TBP5erRFyoW77obYTsdSmEGB11ortEpLoAorfOHZZHL9SgkbQ6zW7mWCRy0aC35EK0U3HFTKYmxGOxyFEHEG4Ihabra6Cx+yRc6DQhzJMbU8xkbDclIJmuVKxLaZvR4hKce47KoBryDDXkeR2eo0gomWiS54nLERuuR8g8Uq8ZzfWjaHWU8y03H5gAcCH70d+lXXWjyAQrPVF9omiCrlcNtdD+8z2/V2rJTF8hyS6j4nnhAWCIWoWq7fdNcZGpWhAw+oD9tdalPhTkaDMaQuN2RivjbhVNWl+kicEwk172qbnGc88YT0Z54mfbuj0GzTHt8bWawy641h5qeEfmE3J53af26TC4CB+Yzje/5/EUyUPox4gMDbRRp5a2HuM24Ccfpv7Sabw3rZLWbnMf9l1PK3YLNwKe0XVc0WIMzYjgkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Logo"\n        title=""\n        src="/static/e0826f85c7806ce934b406942a2f272a/0a47e/logo.png"\n        srcset="/static/e0826f85c7806ce934b406942a2f272a/72799/logo.png 320w,\n/static/e0826f85c7806ce934b406942a2f272a/0a47e/logo.png 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,A.ah)(),e.components);return a?t.createElement(a,e,t.createElement(i,e)):i(e)},l=n(7747),s=n(2675),o=n(9767);const c=e=>{var a,n,A,i,r,c;let{data:d,children:p}=e;const g=d.mdx;return g?t.createElement(o.Ar,{title:(null===(a=g.frontmatter)||void 0===a?void 0:a.title)||"",featuredImage:null===(n=g.frontmatter)||void 0===n||null===(A=n.featuredImage)||void 0===A||null===(i=A.childImageSharp)||void 0===i?void 0:i.gatsbyImageData,description:(null===(r=g.frontmatter)||void 0===r?void 0:r.description)||g.excerpt||""},t.createElement(l.xu,{as:"article",itemScope:!0,itemType:"http://schema.org/Article"},t.createElement(l.xu,{as:"header"},t.createElement(s.x,{display:"none"},null===(c=g.frontmatter)||void 0===c?void 0:c.title)),p)):null};function d(e){return t.createElement(c,e,t.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-templates-project-tsx-content-file-path-content-projects-dingleberry-index-mdx-c60a81025c22db612c4f.js.map