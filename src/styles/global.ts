import { createGlobalStyle } from "styled-components";
import AvenirBlackEot from "../assets/fonts/Avenir-Black.eot";
import AvenirBlackSvg from "../assets/fonts/Avenir-Black.svg";
import AvenirBlackWoff from "../assets/fonts/Avenir-Black.woff";
import AvenirBlackWoff2 from "../assets/fonts/Avenir-Black.woff2";
import AvenirLightEot from "../assets/fonts/Avenir-Light.eot";
import AvenirLightSvg from "../assets/fonts/Avenir-Light.svg";
import AvenirLightWoff from "../assets/fonts/Avenir-Light.woff";
import AvenirLightWoff2 from "../assets/fonts/Avenir-Light.woff2";
import AvenirMediumEot from "../assets/fonts/Avenir-Medium.eot";
import AvenirMediumSvg from "../assets/fonts/Avenir-Medium.svg";
import AvenirMediumWoff from "../assets/fonts/Avenir-Medium.woff";
import AvenirMediumWoff2 from "../assets/fonts/Avenir-Medium.woff2";

export default createGlobalStyle`

    /* This Font didn't look as similar to the model, it seemed to be stronger */
    /* @font-face {
        font-family: 'Avenir';
        src: url(${AvenirBlackEot});
        src: url(${AvenirBlackWoff2}) format('woff2'),
            url(${AvenirBlackWoff}) format('woff'),
            url(${AvenirBlackSvg}) format('svg');
        font-weight: 800;
        font-style: normal;
    }
    */

   /* 
        So I went to https://jumpstartfillings.com/services and saw a similar component, with a more similar font,
        then I inspected the source files, and copied the piece of code below, 
        changing the font weight to 800, as in the model
   */
   @font-face {
      font-family: 'Avenir';
      src: url('https://assets.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce461332a14cfb_Avenir-Heavy.woff2') format('woff2'), url('https://assets.website-files.com/5ed7de2862ce46f8d9a14cd1/5f033e1ec84c423873b0afbd_Avenir-Heavy.eot') format('embedded-opentype'), url('https://assets.website-files.com/5ed7de2862ce46f8d9a14cd1/5f033a48235b2a681c8d4c1b_Avenir-Heavy.woff') format('woff');
      font-weight: 800;
      font-style: normal;
      font-display: auto;
    }

    @font-face {
        font-family: 'Avenir';
        src: url(${AvenirLightEot});
        src: url(${AvenirLightWoff2}) format('woff2'),
            url(${AvenirLightWoff}) format('woff'),
            url(${AvenirLightSvg}) format('svg');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Avenir';
        src: url(${AvenirMediumEot});
        src: url(${AvenirMediumWoff2}) format('woff2'),
            url(${AvenirMediumWoff}) format('woff'),
            url(${AvenirMediumSvg}) format('svg');
        font-weight: 500;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        outline: 0px;
        -webkit-font-smoothing: antialiased !important;
    }


    html, body, div, span, applet, object,
    iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
    pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike,
    strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd,
    ol, ul, li, fieldset, form, button, label, legend, table, caption,
    tbody, tfoot, thead, tr, th, td, article, aside, canvas,
    details, embed, figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary, time, mark, audio, video {
      border: 0;
      font-family: "Avenir", "Open Sans", Helvetica, sans-serif;
      font-size: 15px;
      vertical-align: baseline;
    }
`;
