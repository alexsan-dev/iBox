// ANIMACION
import { AnimatePresence } from "framer-motion";

// COMPONENTES
import Layout from "../layout/Layout";
import Splash from "../components/Splash";
import App from "next/app";

export default class iBoxApp extends App {
  public componentDidMount() {
    // SELECCIONAR COMPONENTE DE SPLASH
    const splash: HTMLDivElement | null = document.getElementById("splash") as HTMLDivElement;

    // OCULTAR SPLASGG LUEGO DE 1500MS
    window.onload = () => {
      setTimeout(() => {
        if (splash) {
          splash.style.opacity = "0";
          setTimeout(() => splash.style.display = "none", 300);
        } else console.log("Run on dev mode");
      }, 1500);
    }
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Layout>
          <Splash />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
        <style global jsx>{`
          body {
            overscroll-behavior: none;
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            --primary: rgb(47, 109, 153);
            --blue: #2196f3;
            --gray: #777;
            --gray-light: rgb(245, 245, 245);
            --dark: rgb(44, 68, 130);
            --secondary: #ffca28;
            --third: #ee477c;
            --four: #00e562;
            --five: #bc868d;
            --backgrounds: #fff;
            --text: #444;
            --parraf: #666;
            --unactive: #999;
            margin: 0;
            background: var(--backgrounds);
            padding: 50px 0 0 0;
            box-sizing: border-box;
            font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
            font-size: 15px;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -ms-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
            -webkit-user-drag: none;
          }

          ul {
            margin: 0;
            list-style: none;
            padding: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }

          hr {
            height: 1.5px;
            border: none;
            outline: none;
            margin: 0;
            box-shadow: none;
            background: #ddd;
            margin: 15px 0;
          }

          button {
            border: none;
            box-shadow: none;
            outline: none;
          }

          a {
            text-decoration: none;
          }

          input {
            border: none;
            box-shadow: none;
            outline: none;
          }

          h2 {
            display: flex;
            align-items: center;
            color: var(--text);
            font-size: 1.8em;
          }

          h2 i {
            margin-left: 5px;
          }

          p {
            font-size: 1em;
          }

          .uil {
            font-size: 1.5em;
          }

          h2 > .uil {
            font-size: 1em;
          }

          h1 > .uil {
            font-size: 1em;
          }

          .seeMore {
            padding: 10px;
            text-decoration: none;
            color: var(--parraf);
            display: flex;
            align-items: center;
            font-weight: 500;
          }

          .seeMore i {
            margin-left: -2px;
          }

          .seeMore.right {
            position: absolute;
            right: 0px;
          }

          ::selection {
            background: var(--primary);
            color: #fff;
          }

          ::-webkit-scrollbar {
            display: none;
          }

          ::-moz-scrollbar {
            display: none;
          }

          ::-o-scrollbar {
            display: none;
          }

          ::scrollbar {
            display: none;
          }

          .blue,
          .white,
          .amber,
          .red,
          .green,
          .gray,
          .gray-light,
          .primary,
          .five {
            position: relative;
          }

          .blue:before,
          .white:before,
          .amber:before,
          .red:before,
          .green:before,
          .gray:before,
          .gray-light:before,
          .primary:before,
          .five:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -3;
          }

          .blue:before {
            background-color: var(--blue);
          }
          .white:before {
            background-color: var(--backgrounds);
          }
          .amber:before {
            background-color: var(--secondary);
          }
          .red:before {
            background-color: var(--third);
          }
          .green:before {
            background-color: var(--four);
          }
          .gray:before {
            background-color: var(--gray);
          }
          .gray-light:before {
            background-color: var(--gray-light);
          }
          .primary:before {
            background-color: var(--primary);
          }
          .five:before {
            background-color: var(--five);
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(10px);
            }
            50% {
              transform: translateY(0);
            }
            75% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .float {
            animation: float 0.8s ease-in-out infinite;
          }

          .waves {
            position: relative;
            overflow: hidden;
          }

          .ripple {
            border-radius: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            position: absolute;
            transform: scale(0);
            z-index: -1;
          }

          .ripple-dark {
            background-color: rgba(0, 0, 0, 0.2);
          }

          @keyframes ripple {
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }

          button {
            text-align: left;
            padding: 12px 15px;
            display: flex;
            align-items: center;
            border-radius: 5px;
            font-weight: 550;
            background: transparent;
          }

          button > i {
            margin-right: 10px;
          }

          .btn {
            text-align: left;
            padding: 12px 15px;
            display: inline-flex;
            align-items: center;
            border-radius: 5px;
            font-weight: 550;
            background: transparent;
          }

          .btn > i {
            margin-right: 10px;
          }

          .floating {
            border-radius: 100%;
            padding: 18px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            margin: 0;
          }

          .floating > i {
            color: var(--backgrounds);
            margin: 0;
            font-size: 22px;
            pointer-events: none;
          }

          .cardBackground {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.05'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
          }

          @media screen and (max-width: 355px) {
            body {
              font-size: 13px;
            }
          } 

          @media screen and (min-width: 445px) {
            body {
              font-size: 17px;
            }
          } 

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-0.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-0.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-0.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-0.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-0.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-0.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E800-E81D;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-1.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-1.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-1.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-1.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-1.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-1.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E81E-E83B;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-10.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-10.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-10.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-10.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-10.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-10.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E92C-E949;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-11.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-11.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-11.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-11.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-11.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-11.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E94A-E967;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-12.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-12.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-12.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-12.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-12.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-12.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E968-E985;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-13.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-13.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-13.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-13.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-13.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-13.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E986-E9A3;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-14.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-14.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-14.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-14.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-14.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-14.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E9A4-E9C1;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-15.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-15.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-15.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-15.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-15.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-15.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E9C2-E9DF;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-16.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-16.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-16.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-16.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-16.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-16.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E9E0-E9FD;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-17.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-17.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-17.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-17.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-17.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-17.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E9FE-EA1B;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-18.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-18.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-18.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-18.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-18.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-18.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EA1C-EA39;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-19.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-19.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-19.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-19.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-19.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-19.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EA3A-EA57;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-2.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-2.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-2.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-2.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-2.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-2.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E83C-E859;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-20.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-20.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-20.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-20.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-20.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-20.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EA58-EA75;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-21.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-21.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-21.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-21.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-21.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-21.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EA76-EA93;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-22.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-22.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-22.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-22.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-22.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-22.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EA94-EAB1;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-23.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-23.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-23.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-23.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-23.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-23.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EAB2-EACF;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-24.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-24.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-24.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-24.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-24.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-24.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EAD0-EAED;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-25.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-25.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-25.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-25.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-25.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-25.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EAEE-EB0B;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-26.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-26.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-26.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-26.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-26.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-26.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EB0C-EB29;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-27.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-27.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-27.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-27.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-27.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-27.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EB2A-EB47;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-28.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-28.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-28.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-28.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-28.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-28.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EB48-EB65;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-29.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-29.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-29.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-29.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-29.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-29.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EB66-EB83;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-3.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-3.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-3.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-3.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-3.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-3.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E85A-E877;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-30.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-30.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-30.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-30.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-30.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-30.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EB84-EBA1;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-31.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-31.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-31.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-31.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-31.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-31.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EBA2-EBBF;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-32.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-32.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-32.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-32.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-32.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-32.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EBC0-EBDD;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-33.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-33.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-33.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-33.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-33.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-33.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EBDE-EBFB;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-34.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-34.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-34.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-34.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-34.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-34.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EBFC-EC19;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-35.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-35.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-35.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-35.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-35.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-35.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EC1A-EC37;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-36.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-36.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-36.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-36.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-36.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-36.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EC38-EC55;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-37.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-37.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-37.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-37.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-37.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-37.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+EC56-EC5A;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-4.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-4.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-4.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-4.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-4.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-4.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E878-E895;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-5.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-5.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-5.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-5.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-5.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-5.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E896-E8B3;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-6.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-6.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-6.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-6.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-6.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-6.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E8B4-E8D1;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-7.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-7.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-7.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-7.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-7.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-7.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E8D2-E8EF;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-8.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-8.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-8.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-8.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-8.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-8.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E8F0-E90D;
          }

          @font-face {
            font-family: unicons;
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-9.eot);
            src: url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-9.eot#iefix)
                format("embedded-opentype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-9.woff2)
                format("woff2"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-9.woff)
                format("woff"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-9.ttf)
                format("truetype"),
              url(https://unicons.iconscout.com/release/v2.0.1/fonts/unicons-9.svg#unicons)
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+E90E-E92B;
          }

          [class^="uil-"]:before,
          [class*=" uil-"]:before {
            font-family: unicons;
            font-style: normal;
            font-weight: 400;
            speak: none;
            display: inline-block;
            text-decoration: inherit;
            width: 1em;
            margin-right: 0.2em;
            text-align: center;
            font-variant: normal;
            text-transform: none;
            line-height: 1em;
            margin-left: 0.2em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .uil-0-plus:before {
            content: "\e800";
          }

          .uil-10-plus:before {
            content: "\e801";
          }

          .uil-12-plus:before {
            content: "\e802";
          }

          .uil-13-plus:before {
            content: "\e803";
          }

          .uil-16-plus:before {
            content: "\e804";
          }

          .uil-17-plus:before {
            content: "\e805";
          }

          .uil-18-plus:before {
            content: "\e806";
          }

          .uil-21-plus:before {
            content: "\e807";
          }

          .uil-3-plus:before {
            content: "\e808";
          }

          .uil-500px:before {
            content: "\e809";
          }

          .uil-6-plus:before {
            content: "\e80a";
          }

          .uil-abacus:before {
            content: "\e80b";
          }

          .uil-accessible-icon-alt:before {
            content: "\e80c";
          }

          .uil-adjust-alt:before {
            content: "\e80d";
          }

          .uil-adjust-circle:before {
            content: "\e80e";
          }

          .uil-adjust-half:before {
            content: "\e80f";
          }

          .uil-adjust:before {
            content: "\e810";
          }

          .uil-adobe-alt:before {
            content: "\e811";
          }

          .uil-adobe:before {
            content: "\e812";
          }

          .uil-airplay:before {
            content: "\e813";
          }

          .uil-align-alt:before {
            content: "\e814";
          }

          .uil-align-center-alt:before {
            content: "\e815";
          }

          .uil-align-center-h:before {
            content: "\e816";
          }

          .uil-align-center-justify:before {
            content: "\e817";
          }

          .uil-align-center-v:before {
            content: "\e818";
          }

          .uil-align-center:before {
            content: "\e819";
          }

          .uil-align-justify:before {
            content: "\e81a";
          }

          .uil-align-left-justify:before {
            content: "\e81b";
          }

          .uil-align-left:before {
            content: "\e81c";
          }

          .uil-align-letter-right:before {
            content: "\e81d";
          }

          .uil-align-right-justify:before {
            content: "\e81e";
          }

          .uil-align-right:before {
            content: "\e81f";
          }

          .uil-align:before {
            content: "\e820";
          }

          .uil-amazon:before {
            content: "\e821";
          }

          .uil-ambulance:before {
            content: "\e822";
          }

          .uil-analysis:before {
            content: "\e823";
          }

          .uil-analytics:before {
            content: "\e824";
          }

          .uil-anchor:before {
            content: "\e825";
          }

          .uil-android-alt:before {
            content: "\e826";
          }

          .uil-android-phone-slash:before {
            content: "\e827";
          }

          .uil-android:before {
            content: "\e828";
          }

          .uil-angle-double-down:before {
            content: "\e829";
          }

          .uil-angle-double-left:before {
            content: "\e82a";
          }

          .uil-angle-double-right:before {
            content: "\e82b";
          }

          .uil-angle-double-up:before {
            content: "\e82c";
          }

          .uil-angle-down:before {
            content: "\e82d";
          }

          .uil-angle-left:before {
            content: "\e82e";
          }

          .uil-angle-right-b:before {
            content: "\e82f";
          }

          .uil-angle-right:before {
            content: "\e830";
          }

          .uil-angle-up:before {
            content: "\e831";
          }

          .uil-angry:before {
            content: "\e832";
          }

          .uil-ankh:before {
            content: "\e833";
          }

          .uil-annoyed-alt:before {
            content: "\e834";
          }

          .uil-annoyed:before {
            content: "\e835";
          }

          .uil-apple-alt:before {
            content: "\e836";
          }

          .uil-apple:before {
            content: "\e837";
          }

          .uil-apps:before {
            content: "\e838";
          }

          .uil-archive-alt:before {
            content: "\e839";
          }

          .uil-archive:before {
            content: "\e83a";
          }

          .uil-archway:before {
            content: "\e83b";
          }

          .uil-comment-alt-question:before {
            content: "\e92c";
          }

          .uil-comment-alt-redo:before {
            content: "\e92d";
          }

          .uil-comment-alt-search:before {
            content: "\e92e";
          }

          .uil-comment-alt-share:before {
            content: "\e92f";
          }

          .uil-comment-alt-shield:before {
            content: "\e930";
          }

          .uil-comment-alt-slash:before {
            content: "\e931";
          }

          .uil-comment-alt-upload:before {
            content: "\e932";
          }

          .uil-comment-alt-verify:before {
            content: "\e933";
          }

          .uil-comment-alt:before {
            content: "\e934";
          }

          .uil-comment-block:before {
            content: "\e935";
          }

          .uil-comment-chart-line:before {
            content: "\e936";
          }

          .uil-comment-check:before {
            content: "\e937";
          }

          .uil-comment-dots:before {
            content: "\e938";
          }

          .uil-comment-download:before {
            content: "\e939";
          }

          .uil-comment-edit:before {
            content: "\e93a";
          }

          .uil-comment-exclamation:before {
            content: "\e93b";
          }

          .uil-comment-heart:before {
            content: "\e93c";
          }

          .uil-comment-image:before {
            content: "\e93d";
          }

          .uil-comment-info-alt:before {
            content: "\e93e";
          }

          .uil-comment-info:before {
            content: "\e93f";
          }

          .uil-comment-lines:before {
            content: "\e940";
          }

          .uil-comment-lock:before {
            content: "\e941";
          }

          .uil-comment-medical:before {
            content: "\e942";
          }

          .uil-comment-message:before {
            content: "\e943";
          }

          .uil-comment-notes:before {
            content: "\e944";
          }

          .uil-comment-plus:before {
            content: "\e945";
          }

          .uil-comment-question:before {
            content: "\e946";
          }

          .uil-comment-redo:before {
            content: "\e947";
          }

          .uil-comment-search:before {
            content: "\e948";
          }

          .uil-comment-share:before {
            content: "\e949";
          }

          .uil-comment-shield:before {
            content: "\e94a";
          }

          .uil-comment-slash:before {
            content: "\e94b";
          }

          .uil-comment-upload:before {
            content: "\e94c";
          }

          .uil-comment-verify:before {
            content: "\e94d";
          }

          .uil-comment:before {
            content: "\e94e";
          }

          .uil-comments-alt:before {
            content: "\e94f";
          }

          .uil-comments:before {
            content: "\e950";
          }

          .uil-commnet-alt-slash:before {
            content: "\e951";
          }

          .uil-compact-disc:before {
            content: "\e952";
          }

          .uil-compass:before {
            content: "\e953";
          }

          .uil-compress-alt-left:before {
            content: "\e954";
          }

          .uil-compress-alt:before {
            content: "\e955";
          }

          .uil-compress-arrows:before {
            content: "\e956";
          }

          .uil-compress-lines:before {
            content: "\e957";
          }

          .uil-compress-point:before {
            content: "\e958";
          }

          .uil-compress-v:before {
            content: "\e959";
          }

          .uil-compress:before {
            content: "\e95a";
          }

          .uil-computer-mouse:before {
            content: "\e95b";
          }

          .uil-confused:before {
            content: "\e95c";
          }

          .uil-constructor:before {
            content: "\e95d";
          }

          .uil-copy-alt:before {
            content: "\e95e";
          }

          .uil-copy-landscape:before {
            content: "\e95f";
          }

          .uil-copy:before {
            content: "\e960";
          }

          .uil-copyright:before {
            content: "\e961";
          }

          .uil-corner-down-left:before {
            content: "\e962";
          }

          .uil-corner-down-right-alt:before {
            content: "\e963";
          }

          .uil-corner-down-right:before {
            content: "\e964";
          }

          .uil-corner-left-down:before {
            content: "\e965";
          }

          .uil-corner-right-down:before {
            content: "\e966";
          }

          .uil-corner-up-left-alt:before {
            content: "\e967";
          }

          .uil-corner-up-left:before {
            content: "\e968";
          }

          .uil-corner-up-right-alt:before {
            content: "\e969";
          }

          .uil-corner-up-right:before {
            content: "\e96a";
          }

          .uil-creative-commons-pd-alt:before {
            content: "\e96b";
          }

          .uil-creative-commons-pd:before {
            content: "\e96c";
          }

          .uil-crockery:before {
            content: "\e96d";
          }

          .uil-crop-alt-rotate-left:before {
            content: "\e96e";
          }

          .uil-crop-alt-rotate-right:before {
            content: "\e96f";
          }

          .uil-crop-alt:before {
            content: "\e970";
          }

          .uil-crosshair-alt:before {
            content: "\e971";
          }

          .uil-crosshair:before {
            content: "\e972";
          }

          .uil-crosshairs:before {
            content: "\e973";
          }

          .uil-cube:before {
            content: "\e974";
          }

          .uil-dashboard:before {
            content: "\e975";
          }

          .uil-data-sharing:before {
            content: "\e976";
          }

          .uil-database-alt:before {
            content: "\e977";
          }

          .uil-database:before {
            content: "\e978";
          }

          .uil-desert:before {
            content: "\e979";
          }

          .uil-desktop-alt-slash:before {
            content: "\e97a";
          }

          .uil-desktop-alt:before {
            content: "\e97b";
          }

          .uil-desktop-cloud-alt:before {
            content: "\e97c";
          }

          .uil-desktop-slash:before {
            content: "\e97d";
          }

          .uil-desktop:before {
            content: "\e97e";
          }

          .uil-dialpad-alt:before {
            content: "\e97f";
          }

          .uil-dialpad:before {
            content: "\e980";
          }

          .uil-diamond:before {
            content: "\e981";
          }

          .uil-diary-alt:before {
            content: "\e982";
          }

          .uil-diary:before {
            content: "\e983";
          }

          .uil-dice-five:before {
            content: "\e984";
          }

          .uil-dice-four:before {
            content: "\e985";
          }

          .uil-dice-one:before {
            content: "\e986";
          }

          .uil-dice-six:before {
            content: "\e987";
          }

          .uil-dice-three:before {
            content: "\e988";
          }

          .uil-dice-two:before {
            content: "\e989";
          }

          .uil-direction:before {
            content: "\e98a";
          }

          .uil-directions:before {
            content: "\e98b";
          }

          .uil-dizzy-meh:before {
            content: "\e98c";
          }

          .uil-dna:before {
            content: "\e98d";
          }

          .uil-document-layout-center:before {
            content: "\e98e";
          }

          .uil-document-layout-left:before {
            content: "\e98f";
          }

          .uil-document-layout-right:before {
            content: "\e990";
          }

          .uil-document:before {
            content: "\e991";
          }

          .uil-dollar-alt:before {
            content: "\e992";
          }

          .uil-dollar-sign-alt:before {
            content: "\e993";
          }

          .uil-dollar-sign:before {
            content: "\e994";
          }

          .uil-down-arrow:before {
            content: "\e995";
          }

          .uil-download-alt:before {
            content: "\e996";
          }

          .uil-dribbble:before {
            content: "\e997";
          }

          .uil-drill:before {
            content: "\e998";
          }

          .uil-dropbox:before {
            content: "\e999";
          }

          .uil-dumbbell:before {
            content: "\e99a";
          }

          .uil-ear:before {
            content: "\e99b";
          }

          .uil-edit-alt:before {
            content: "\e99c";
          }

          .uil-edit:before {
            content: "\e99d";
          }

          .uil-ellipsis-h:before {
            content: "\e99e";
          }

          .uil-ellipsis-v:before {
            content: "\e99f";
          }

          .uil-emoji:before {
            content: "\e9a0";
          }

          .uil-enter:before {
            content: "\e9a1";
          }

          .uil-entry:before {
            content: "\e9a2";
          }

          .uil-envelope-add:before {
            content: "\e9a3";
          }

          .uil-envelope-alt:before {
            content: "\e9a4";
          }

          .uil-envelope-block:before {
            content: "\e9a5";
          }

          .uil-envelope-bookmark:before {
            content: "\e9a6";
          }

          .uil-envelope-check:before {
            content: "\e9a7";
          }

          .uil-envelope-download-alt:before {
            content: "\e9a8";
          }

          .uil-envelope-download:before {
            content: "\e9a9";
          }

          .uil-envelope-edit:before {
            content: "\e9aa";
          }

          .uil-envelope-exclamation:before {
            content: "\e9ab";
          }

          .uil-envelope-heart:before {
            content: "\e9ac";
          }

          .uil-envelope-info:before {
            content: "\e9ad";
          }

          .uil-envelope-lock:before {
            content: "\e9ae";
          }

          .uil-envelope-minus:before {
            content: "\e9af";
          }

          .uil-envelope-open:before {
            content: "\e9b0";
          }

          .uil-envelope-question:before {
            content: "\e9b1";
          }

          .uil-envelope-receive:before {
            content: "\e9b2";
          }

          .uil-envelope-redo:before {
            content: "\e9b3";
          }

          .uil-envelope-search:before {
            content: "\e9b4";
          }

          .uil-envelope-send:before {
            content: "\e9b5";
          }

          .uil-envelope-share:before {
            content: "\e9b6";
          }

          .uil-envelope-shield:before {
            content: "\e9b7";
          }

          .uil-envelope-star:before {
            content: "\e9b8";
          }

          .uil-envelope-times:before {
            content: "\e9b9";
          }

          .uil-envelope-upload-alt:before {
            content: "\e9ba";
          }

          .uil-envelope-upload:before {
            content: "\e9bb";
          }

          .uil-envelope:before {
            content: "\e9bc";
          }

          .uil-envelopes:before {
            content: "\e9bd";
          }

          .uil-equal-circle:before {
            content: "\e9be";
          }

          .uil-euro-circle:before {
            content: "\e9bf";
          }

          .uil-euro:before {
            content: "\e9c0";
          }

          .uil-exchange-alt:before {
            content: "\e9c1";
          }

          .uil-exchange:before {
            content: "\e9c2";
          }

          .uil-exclamation-circle:before {
            content: "\e9c3";
          }

          .uil-exclamation-octagon:before {
            content: "\e9c4";
          }

          .uil-exclamation-triangle:before {
            content: "\e9c5";
          }

          .uil-exclude:before {
            content: "\e9c6";
          }

          .uil-exit:before {
            content: "\e9c7";
          }

          .uil-expand-alt:before {
            content: "\e9c8";
          }

          .uil-expand-arrows-alt:before {
            content: "\e9c9";
          }

          .uil-expand-arrows:before {
            content: "\e9ca";
          }

          .uil-expand-from-corner:before {
            content: "\e9cb";
          }

          .uil-expand-left:before {
            content: "\e9cc";
          }

          .uil-expand-right:before {
            content: "\e9cd";
          }

          .uil-export:before {
            content: "\e9ce";
          }

          .uil-exposure-alt:before {
            content: "\e9cf";
          }

          .uil-exposure-increase:before {
            content: "\e9d0";
          }

          .uil-external-link-alt:before {
            content: "\e9d1";
          }

          .uil-eye-slash:before {
            content: "\e9d2";
          }

          .uil-eye:before {
            content: "\e9d3";
          }

          .uil-facebook-f:before {
            content: "\e9d4";
          }

          .uil-facebook-messenger-alt:before {
            content: "\e9d5";
          }

          .uil-facebook-messenger:before {
            content: "\e9d6";
          }

          .uil-facebook:before {
            content: "\e9d7";
          }

          .uil-fahrenheit:before {
            content: "\e9d8";
          }

          .uil-fast-mail-alt:before {
            content: "\e9d9";
          }

          .uil-fast-mail:before {
            content: "\e9da";
          }

          .uil-favorite:before {
            content: "\e9db";
          }

          .uil-feedback:before {
            content: "\e9dc";
          }

          .uil-file-alt:before {
            content: "\e9dd";
          }

          .uil-file-blank:before {
            content: "\e9de";
          }

          .uil-file-block-alt:before {
            content: "\e9df";
          }

          .uil-file-bookmark-alt:before {
            content: "\e9e0";
          }

          .uil-file-check-alt:before {
            content: "\e9e1";
          }

          .uil-file-check:before {
            content: "\e9e2";
          }

          .uil-file-contract-dollar:before {
            content: "\e9e3";
          }

          .uil-file-copy-alt:before {
            content: "\e9e4";
          }

          .uil-file-download-alt:before {
            content: "\e9e5";
          }

          .uil-file-download:before {
            content: "\e9e6";
          }

          .uil-file-edit-alt:before {
            content: "\e9e7";
          }

          .uil-file-exclamation-alt:before {
            content: "\e9e8";
          }

          .uil-file-exclamation:before {
            content: "\e9e9";
          }

          .uil-file-heart:before {
            content: "\e9ea";
          }

          .uil-file-info-alt:before {
            content: "\e9eb";
          }

          .uil-file-landscape-alt:before {
            content: "\e9ec";
          }

          .uil-file-landscape:before {
            content: "\e9ed";
          }

          .uil-file-lanscape-slash:before {
            content: "\e9ee";
          }

          .uil-file-lock-alt:before {
            content: "\e9ef";
          }

          .uil-file-medical-alt:before {
            content: "\e9f0";
          }

          .uil-file-medical:before {
            content: "\e9f1";
          }

          .uil-file-minus-alt:before {
            content: "\e9f2";
          }

          .uil-file-minus:before {
            content: "\e9f3";
          }

          .uil-file-network:before {
            content: "\e9f4";
          }

          .uil-file-plus-alt:before {
            content: "\e9f5";
          }

          .uil-file-plus:before {
            content: "\e9f6";
          }

          .uil-file-question-alt:before {
            content: "\e9f7";
          }

          .uil-file-question:before {
            content: "\e9f8";
          }

          .uil-file-redo-alt:before {
            content: "\e9f9";
          }

          .uil-file-search-alt:before {
            content: "\e9fa";
          }

          .uil-file-share-alt:before {
            content: "\e9fb";
          }

          .uil-file-shield-alt:before {
            content: "\e9fc";
          }

          .uil-file-slash:before {
            content: "\e9fd";
          }

          .uil-file-times-alt:before {
            content: "\e9fe";
          }

          .uil-file-times:before {
            content: "\e9ff";
          }

          .uil-file-upload-alt:before {
            content: "\ea00";
          }

          .uil-file-upload:before {
            content: "\ea01";
          }

          .uil-file:before {
            content: "\ea02";
          }

          .uil-files-landscapes-alt:before {
            content: "\ea03";
          }

          .uil-files-landscapes:before {
            content: "\ea04";
          }

          .uil-film:before {
            content: "\ea05";
          }

          .uil-filter-slash:before {
            content: "\ea06";
          }

          .uil-filter:before {
            content: "\ea07";
          }

          .uil-fire:before {
            content: "\ea08";
          }

          .uil-flask-potion:before {
            content: "\ea09";
          }

          .uil-flask:before {
            content: "\ea0a";
          }

          .uil-flip-h-alt:before {
            content: "\ea0b";
          }

          .uil-flip-h:before {
            content: "\ea0c";
          }

          .uil-flip-v-alt:before {
            content: "\ea0d";
          }

          .uil-flip-v:before {
            content: "\ea0e";
          }

          .uil-flower:before {
            content: "\ea0f";
          }

          .uil-focus-add:before {
            content: "\ea10";
          }

          .uil-focus-target:before {
            content: "\ea11";
          }

          .uil-focus:before {
            content: "\ea12";
          }

          .uil-folder-check:before {
            content: "\ea13";
          }

          .uil-folder-download:before {
            content: "\ea14";
          }

          .uil-folder-exclamation:before {
            content: "\ea15";
          }

          .uil-folder-heart:before {
            content: "\ea16";
          }

          .uil-folder-info:before {
            content: "\ea17";
          }

          .uil-folder-lock:before {
            content: "\ea18";
          }

          .uil-folder-medical:before {
            content: "\ea19";
          }

          .uil-folder-minus:before {
            content: "\ea1a";
          }

          .uil-folder-network:before {
            content: "\ea1b";
          }

          .uil-folder-plus:before {
            content: "\ea1c";
          }

          .uil-folder-question:before {
            content: "\ea1d";
          }

          .uil-folder-slash:before {
            content: "\ea1e";
          }

          .uil-folder-times:before {
            content: "\ea1f";
          }

          .uil-folder-upload:before {
            content: "\ea20";
          }

          .uil-folder:before {
            content: "\ea21";
          }

          .uil-food:before {
            content: "\ea22";
          }

          .uil-football-american:before {
            content: "\ea23";
          }

          .uil-football-ball:before {
            content: "\ea24";
          }

          .uil-football:before {
            content: "\ea25";
          }

          .uil-forecastcloud-moon-tear:before {
            content: "\ea26";
          }

          .uil-forwaded-call:before {
            content: "\ea27";
          }

          .uil-forward:before {
            content: "\ea28";
          }

          .uil-frown:before {
            content: "\ea29";
          }

          .uil-game-structure:before {
            content: "\ea2a";
          }

          .uil-game:before {
            content: "\ea2b";
          }

          .uil-gift:before {
            content: "\ea2c";
          }

          .uil-github-alt:before {
            content: "\ea2d";
          }

          .uil-github:before {
            content: "\ea2e";
          }

          .uil-glass-martini-alt-slash:before {
            content: "\ea2f";
          }

          .uil-glass-martini-alt:before {
            content: "\ea30";
          }

          .uil-glass-martini:before {
            content: "\ea31";
          }

          .uil-glass-tea:before {
            content: "\ea32";
          }

          .uil-glass:before {
            content: "\ea33";
          }

          .uil-globe:before {
            content: "\ea34";
          }

          .uil-gold:before {
            content: "\ea35";
          }

          .uil-google-drive-alt:before {
            content: "\ea36";
          }

          .uil-google-drive:before {
            content: "\ea37";
          }

          .uil-google-hangouts-alt:before {
            content: "\ea38";
          }

          .uil-google-hangouts:before {
            content: "\ea39";
          }

          .uil-google-play:before {
            content: "\ea3a";
          }

          .uil-google:before {
            content: "\ea3b";
          }

          .uil-graduation-hat:before {
            content: "\ea3c";
          }

          .uil-graph-bar:before {
            content: "\ea3d";
          }

          .uil-grid:before {
            content: "\ea3e";
          }

          .uil-grids:before {
            content: "\ea3f";
          }

          .uil-grin-tongue-wink-alt:before {
            content: "\ea40";
          }

          .uil-grin-tongue-wink:before {
            content: "\ea41";
          }

          .uil-grin:before {
            content: "\ea42";
          }

          .uil-grip-horizontal-line:before {
            content: "\ea43";
          }

          .uil-hdd:before {
            content: "\ea44";
          }

          .uil-headphones-alt:before {
            content: "\ea45";
          }

          .uil-headphones:before {
            content: "\ea46";
          }

          .uil-heart-alt:before {
            content: "\ea47";
          }

          .uil-heart-medical:before {
            content: "\ea48";
          }

          .uil-heart-rate:before {
            content: "\ea49";
          }

          .uil-heart-sign:before {
            content: "\ea4a";
          }

          .uil-heart:before {
            content: "\ea4b";
          }

          .uil-heartbeat:before {
            content: "\ea4c";
          }

          .uil-history-alt:before {
            content: "\ea4d";
          }

          .uil-history:before {
            content: "\ea4e";
          }

          .uil-home-alt:before {
            content: "\ea4f";
          }

          .uil-home:before {
            content: "\ea50";
          }

          .uil-horizontal-align-center:before {
            content: "\ea51";
          }

          .uil-horizontal-align-left:before {
            content: "\ea52";
          }

          .uil-horizontal-align-right:before {
            content: "\ea53";
          }

          .uil-horizontal-distribution-center:before {
            content: "\ea54";
          }

          .uil-horizontal-distribution-left:before {
            content: "\ea55";
          }

          .uil-horizontal-distribution-right:before {
            content: "\ea56";
          }

          .uil-hourglass:before {
            content: "\ea57";
          }

          .uil-arrow-break:before {
            content: "\e83c";
          }

          .uil-arrow-circle-down:before {
            content: "\e83d";
          }

          .uil-arrow-circle-left:before {
            content: "\e83e";
          }

          .uil-arrow-circle-right:before {
            content: "\e83f";
          }

          .uil-arrow-circle-up:before {
            content: "\e840";
          }

          .uil-arrow-compress-h:before {
            content: "\e841";
          }

          .uil-arrow-down-left:before {
            content: "\e842";
          }

          .uil-arrow-down-right:before {
            content: "\e843";
          }

          .uil-arrow-down:before {
            content: "\e844";
          }

          .uil-arrow-from-right:before {
            content: "\e845";
          }

          .uil-arrow-from-top:before {
            content: "\e846";
          }

          .uil-arrow-growth:before {
            content: "\e847";
          }

          .uil-arrow-left:before {
            content: "\e848";
          }

          .uil-arrow-random:before {
            content: "\e849";
          }

          .uil-arrow-resize-diagonal:before {
            content: "\e84a";
          }

          .uil-arrow-right:before {
            content: "\e84b";
          }

          .uil-arrow-to-bottom:before {
            content: "\e84c";
          }

          .uil-arrow-to-right:before {
            content: "\e84d";
          }

          .uil-arrow-up-left:before {
            content: "\e84e";
          }

          .uil-arrow-up-right:before {
            content: "\e84f";
          }

          .uil-arrow-up:before {
            content: "\e850";
          }

          .uil-arrow:before {
            content: "\e851";
          }

          .uil-arrows-h-alt:before {
            content: "\e852";
          }

          .uil-arrows-h:before {
            content: "\e853";
          }

          .uil-arrows-left-down:before {
            content: "\e854";
          }

          .uil-arrows-maximize:before {
            content: "\e855";
          }

          .uil-arrows-merge:before {
            content: "\e856";
          }

          .uil-arrows-resize-h:before {
            content: "\e857";
          }

          .uil-arrows-resize-v:before {
            content: "\e858";
          }

          .uil-arrows-resize:before {
            content: "\e859";
          }

          .uil-html3-alt:before {
            content: "\ea58";
          }

          .uil-html3:before {
            content: "\ea59";
          }

          .uil-hunting:before {
            content: "\ea5a";
          }

          .uil-image-alt-slash:before {
            content: "\ea5b";
          }

          .uil-image-block:before {
            content: "\ea5c";
          }

          .uil-image-broken:before {
            content: "\ea5d";
          }

          .uil-image-check:before {
            content: "\ea5e";
          }

          .uil-image-download:before {
            content: "\ea5f";
          }

          .uil-image-edit:before {
            content: "\ea60";
          }

          .uil-image-lock:before {
            content: "\ea61";
          }

          .uil-image-minus:before {
            content: "\ea62";
          }

          .uil-image-plus:before {
            content: "\ea63";
          }

          .uil-image-question:before {
            content: "\ea64";
          }

          .uil-image-redo:before {
            content: "\ea65";
          }

          .uil-image-resize-landscape:before {
            content: "\ea66";
          }

          .uil-image-resize-square:before {
            content: "\ea67";
          }

          .uil-image-search:before {
            content: "\ea68";
          }

          .uil-image-share:before {
            content: "\ea69";
          }

          .uil-image-shield:before {
            content: "\ea6a";
          }

          .uil-image-slash:before {
            content: "\ea6b";
          }

          .uil-image-times:before {
            content: "\ea6c";
          }

          .uil-image-upload:before {
            content: "\ea6d";
          }

          .uil-image-v:before {
            content: "\ea6e";
          }

          .uil-image:before {
            content: "\ea6f";
          }

          .uil-images:before {
            content: "\ea70";
          }

          .uil-import:before {
            content: "\ea71";
          }

          .uil-incoming-call:before {
            content: "\ea72";
          }

          .uil-info-circle:before {
            content: "\ea73";
          }

          .uil-instagram-alt:before {
            content: "\ea74";
          }

          .uil-instagram:before {
            content: "\ea75";
          }

          .uil-intercom-alt:before {
            content: "\ea76";
          }

          .uil-intercom:before {
            content: "\ea77";
          }

          .uil-invoice:before {
            content: "\ea78";
          }

          .uil-italic:before {
            content: "\ea79";
          }

          .uil-jackhammer:before {
            content: "\ea7a";
          }

          .uil-java-script:before {
            content: "\ea7b";
          }

          .uil-kayak:before {
            content: "\ea7c";
          }

          .uil-key-skeleton-alt:before {
            content: "\ea7d";
          }

          .uil-key-skeleton:before {
            content: "\ea7e";
          }

          .uil-keyboard-alt:before {
            content: "\ea7f";
          }

          .uil-keyboard-hide:before {
            content: "\ea80";
          }

          .uil-keyboard-show:before {
            content: "\ea81";
          }

          .uil-keyboard:before {
            content: "\ea82";
          }

          .uil-keyhole-circle:before {
            content: "\ea83";
          }

          .uil-keyhole-square-full:before {
            content: "\ea84";
          }

          .uil-keyhole-square:before {
            content: "\ea85";
          }

          .uil-kid:before {
            content: "\ea86";
          }

          .uil-label-alt:before {
            content: "\ea87";
          }

          .uil-label:before {
            content: "\ea88";
          }

          .uil-lamp:before {
            content: "\ea89";
          }

          .uil-laptop-cloud:before {
            content: "\ea8a";
          }

          .uil-laptop:before {
            content: "\ea8b";
          }

          .uil-laughing:before {
            content: "\ea8c";
          }

          .uil-layer-group-slash:before {
            content: "\ea8d";
          }

          .uil-layer-group:before {
            content: "\ea8e";
          }

          .uil-layers-alt:before {
            content: "\ea8f";
          }

          .uil-layers-slash:before {
            content: "\ea90";
          }

          .uil-layers:before {
            content: "\ea91";
          }

          .uil-left-arrow-from-left:before {
            content: "\ea92";
          }

          .uil-left-arrow-to-left:before {
            content: "\ea93";
          }

          .uil-left-indent-alt:before {
            content: "\ea94";
          }

          .uil-left-indent:before {
            content: "\ea95";
          }

          .uil-left-to-right-text-direction:before {
            content: "\ea96";
          }

          .uil-life-ring:before {
            content: "\ea97";
          }

          .uil-lightbulb-alt:before {
            content: "\ea98";
          }

          .uil-lightbulb:before {
            content: "\ea99";
          }

          .uil-line-alt:before {
            content: "\ea9a";
          }

          .uil-line-spacing:before {
            content: "\ea9b";
          }

          .uil-line:before {
            content: "\ea9c";
          }

          .uil-link-alt:before {
            content: "\ea9d";
          }

          .uil-link-broken:before {
            content: "\ea9e";
          }

          .uil-link-h:before {
            content: "\ea9f";
          }

          .uil-link:before {
            content: "\eaa0";
          }

          .uil-linkedin-alt:before {
            content: "\eaa1";
          }

          .uil-linkedin:before {
            content: "\eaa2";
          }

          .uil-list-ui-alt:before {
            content: "\eaa3";
          }

          .uil-list-ul:before {
            content: "\eaa4";
          }

          .uil-location-arrow-alt:before {
            content: "\eaa5";
          }

          .uil-location-arrow:before {
            content: "\eaa6";
          }

          .uil-location-pin-alt:before {
            content: "\eaa7";
          }

          .uil-location-point:before {
            content: "\eaa8";
          }

          .uil-location:before {
            content: "\eaa9";
          }

          .uil-lock-access:before {
            content: "\eaaa";
          }

          .uil-lock-alt:before {
            content: "\eaab";
          }

          .uil-lock-open-alt:before {
            content: "\eaac";
          }

          .uil-lock-slash:before {
            content: "\eaad";
          }

          .uil-lock:before {
            content: "\eaae";
          }

          .uil-mailbox-alt:before {
            content: "\eaaf";
          }

          .uil-mailbox:before {
            content: "\eab0";
          }

          .uil-map-marker-alt:before {
            content: "\eab1";
          }

          .uil-map-marker-edit:before {
            content: "\eab2";
          }

          .uil-map-marker-info:before {
            content: "\eab3";
          }

          .uil-map-marker-minus:before {
            content: "\eab4";
          }

          .uil-map-marker-plus:before {
            content: "\eab5";
          }

          .uil-map-marker-question:before {
            content: "\eab6";
          }

          .uil-map-marker-shield:before {
            content: "\eab7";
          }

          .uil-map-marker-slash:before {
            content: "\eab8";
          }

          .uil-map-marker:before {
            content: "\eab9";
          }

          .uil-map-pin-alt:before {
            content: "\eaba";
          }

          .uil-map-pin:before {
            content: "\eabb";
          }

          .uil-map:before {
            content: "\eabc";
          }

          .uil-mars:before {
            content: "\eabd";
          }

          .uil-master-card:before {
            content: "\eabe";
          }

          .uil-maximize-left:before {
            content: "\eabf";
          }

          .uil-medal:before {
            content: "\eac0";
          }

          .uil-medical-drip:before {
            content: "\eac1";
          }

          .uil-medical-square-full:before {
            content: "\eac2";
          }

          .uil-medical-square:before {
            content: "\eac3";
          }

          .uil-medical:before {
            content: "\eac4";
          }

          .uil-medium-m:before {
            content: "\eac5";
          }

          .uil-medkit:before {
            content: "\eac6";
          }

          .uil-meeting-board:before {
            content: "\eac7";
          }

          .uil-megaphone:before {
            content: "\eac8";
          }

          .uil-meh-alt:before {
            content: "\eac9";
          }

          .uil-meh-closed-eye:before {
            content: "\eaca";
          }

          .uil-meh:before {
            content: "\eacb";
          }

          .uil-message:before {
            content: "\eacc";
          }

          .uil-metro:before {
            content: "\eacd";
          }

          .uil-microphone-slash:before {
            content: "\eace";
          }

          .uil-microphone:before {
            content: "\eacf";
          }

          .uil-minus-circle:before {
            content: "\ead0";
          }

          .uil-minus-path:before {
            content: "\ead1";
          }

          .uil-minus-square-full:before {
            content: "\ead2";
          }

          .uil-minus-square:before {
            content: "\ead3";
          }

          .uil-minus:before {
            content: "\ead4";
          }

          .uil-missed-call:before {
            content: "\ead5";
          }

          .uil-mobey-bill-slash:before {
            content: "\ead6";
          }

          .uil-mobile-android-alt:before {
            content: "\ead7";
          }

          .uil-mobile-android:before {
            content: "\ead8";
          }

          .uil-mobile-vibrate:before {
            content: "\ead9";
          }

          .uil-modem:before {
            content: "\eada";
          }

          .uil-money-bill-stack:before {
            content: "\eadb";
          }

          .uil-money-bill:before {
            content: "\eadc";
          }

          .uil-money-insert:before {
            content: "\eadd";
          }

          .uil-money-stack:before {
            content: "\eade";
          }

          .uil-money-withdraw:before {
            content: "\eadf";
          }

          .uil-money-withdrawal:before {
            content: "\eae0";
          }

          .uil-moneybag-alt:before {
            content: "\eae1";
          }

          .uil-moneybag:before {
            content: "\eae2";
          }

          .uil-monitor-heart-rate:before {
            content: "\eae3";
          }

          .uil-monitor:before {
            content: "\eae4";
          }

          .uil-moon-eclipse:before {
            content: "\eae5";
          }

          .uil-moon:before {
            content: "\eae6";
          }

          .uil-moonset:before {
            content: "\eae7";
          }

          .uil-mountains-sun:before {
            content: "\eae8";
          }

          .uil-mountains:before {
            content: "\eae9";
          }

          .uil-mouse-alt:before {
            content: "\eaea";
          }

          .uil-mouse:before {
            content: "\eaeb";
          }

          .uil-multiply:before {
            content: "\eaec";
          }

          .uil-music-note:before {
            content: "\eaed";
          }

          .uil-music-tune-slash:before {
            content: "\eaee";
          }

          .uil-music:before {
            content: "\eaef";
          }

          .uil-n-a:before {
            content: "\eaf0";
          }

          .uil-navigator:before {
            content: "\eaf1";
          }

          .uil-nerd:before {
            content: "\eaf2";
          }

          .uil-newspaper:before {
            content: "\eaf3";
          }

          .uil-ninja:before {
            content: "\eaf4";
          }

          .uil-no-entry:before {
            content: "\eaf5";
          }

          .uil-notebooks:before {
            content: "\eaf6";
          }

          .uil-notes:before {
            content: "\eaf7";
          }

          .uil-object-group:before {
            content: "\eaf8";
          }

          .uil-object-ungroup:before {
            content: "\eaf9";
          }

          .uil-octagon:before {
            content: "\eafa";
          }

          .uil-opera-alt:before {
            content: "\eafb";
          }

          .uil-opera:before {
            content: "\eafc";
          }

          .uil-outgoing-call:before {
            content: "\eafd";
          }

          .uil-package:before {
            content: "\eafe";
          }

          .uil-padlock:before {
            content: "\eaff";
          }

          .uil-paint-tool:before {
            content: "\eb00";
          }

          .uil-palette:before {
            content: "\eb01";
          }

          .uil-panorama-h-alt:before {
            content: "\eb02";
          }

          .uil-panorama-h:before {
            content: "\eb03";
          }

          .uil-panorama-v:before {
            content: "\eb04";
          }

          .uil-paperclip:before {
            content: "\eb05";
          }

          .uil-paragraph:before {
            content: "\eb06";
          }

          .uil-parcel:before {
            content: "\eb07";
          }

          .uil-parking-square:before {
            content: "\eb08";
          }

          .uil-pathfinder-unite:before {
            content: "\eb09";
          }

          .uil-pathfinder:before {
            content: "\eb0a";
          }

          .uil-pause-circle:before {
            content: "\eb0b";
          }

          .uil-pause:before {
            content: "\eb0c";
          }

          .uil-paypal:before {
            content: "\eb0d";
          }

          .uil-pen:before {
            content: "\eb0e";
          }

          .uil-pentagon:before {
            content: "\eb0f";
          }

          .uil-percentage:before {
            content: "\eb10";
          }

          .uil-phone-alt:before {
            content: "\eb11";
          }

          .uil-phone-pause:before {
            content: "\eb12";
          }

          .uil-phone-slash:before {
            content: "\eb13";
          }

          .uil-phone-times:before {
            content: "\eb14";
          }

          .uil-phone-volume:before {
            content: "\eb15";
          }

          .uil-phone:before {
            content: "\eb16";
          }

          .uil-picture:before {
            content: "\eb17";
          }

          .uil-plane-arrival:before {
            content: "\eb18";
          }

          .uil-plane-departure:before {
            content: "\eb19";
          }

          .uil-plane-fly:before {
            content: "\eb1a";
          }

          .uil-plane:before {
            content: "\eb1b";
          }

          .uil-play-circle:before {
            content: "\eb1c";
          }

          .uil-play:before {
            content: "\eb1d";
          }

          .uil-plug:before {
            content: "\eb1e";
          }

          .uil-plus-circle:before {
            content: "\eb1f";
          }

          .uil-plus-square:before {
            content: "\eb20";
          }

          .uil-plus:before {
            content: "\eb21";
          }

          .uil-podium:before {
            content: "\eb22";
          }

          .uil-polygon:before {
            content: "\eb23";
          }

          .uil-post-stamp:before {
            content: "\eb24";
          }

          .uil-postcard:before {
            content: "\eb25";
          }

          .uil-pound-circle:before {
            content: "\eb26";
          }

          .uil-pound:before {
            content: "\eb27";
          }

          .uil-power:before {
            content: "\eb28";
          }

          .uil-prescription-bottle:before {
            content: "\eb29";
          }

          .uil-presentation-check:before {
            content: "\eb2a";
          }

          .uil-presentation-edit:before {
            content: "\eb2b";
          }

          .uil-presentation-line:before {
            content: "\eb2c";
          }

          .uil-presentation-lines-alt:before {
            content: "\eb2d";
          }

          .uil-presentation-minus:before {
            content: "\eb2e";
          }

          .uil-presentation-play:before {
            content: "\eb2f";
          }

          .uil-presentation-plus:before {
            content: "\eb30";
          }

          .uil-presentation-times:before {
            content: "\eb31";
          }

          .uil-presentation:before {
            content: "\eb32";
          }

          .uil-previous:before {
            content: "\eb33";
          }

          .uil-pricetag-alt:before {
            content: "\eb34";
          }

          .uil-print-slash:before {
            content: "\eb35";
          }

          .uil-print:before {
            content: "\eb36";
          }

          .uil-process:before {
            content: "\eb37";
          }

          .uil-processor:before {
            content: "\eb38";
          }

          .uil-pump:before {
            content: "\eb39";
          }

          .uil-puzzle-piece:before {
            content: "\eb3a";
          }

          .uil-question-circle:before {
            content: "\eb3b";
          }

          .uil-raddit-alien-alt:before {
            content: "\eb3c";
          }

          .uil-rainbow:before {
            content: "\eb3d";
          }

          .uil-raindrops-alt:before {
            content: "\eb3e";
          }

          .uil-raindrops:before {
            content: "\eb3f";
          }

          .uil-react:before {
            content: "\eb40";
          }

          .uil-receipt-alt:before {
            content: "\eb41";
          }

          .uil-receipt:before {
            content: "\eb42";
          }

          .uil-record-audio:before {
            content: "\eb43";
          }

          .uil-reddit-alien-alt:before {
            content: "\eb44";
          }

          .uil-redo:before {
            content: "\eb45";
          }

          .uil-refresh:before {
            content: "\eb46";
          }

          .uil-registered:before {
            content: "\eb47";
          }

          .uil-repeat:before {
            content: "\eb48";
          }

          .uil-restaurant:before {
            content: "\eb49";
          }

          .uil-right-indent-alt:before {
            content: "\eb4a";
          }

          .uil-right-to-left-text-direction:before {
            content: "\eb4b";
          }

          .uil-robot:before {
            content: "\eb4c";
          }

          .uil-rope-way:before {
            content: "\eb4d";
          }

          .uil-rotate-360:before {
            content: "\eb4e";
          }

          .uil-rss-alt:before {
            content: "\eb4f";
          }

          .uil-rss-interface:before {
            content: "\eb50";
          }

          .uil-rss:before {
            content: "\eb51";
          }

          .uil-ruler-combined:before {
            content: "\eb52";
          }

          .uil-ruler:before {
            content: "\eb53";
          }

          .uil-sad-cry:before {
            content: "\eb54";
          }

          .uil-sad-crying:before {
            content: "\eb55";
          }

          .uil-sad-dizzy:before {
            content: "\eb56";
          }

          .uil-sad-squint:before {
            content: "\eb57";
          }

          .uil-sad:before {
            content: "\eb58";
          }

          .uil-scaling-left:before {
            content: "\eb59";
          }

          .uil-scaling-right:before {
            content: "\eb5a";
          }

          .uil-scenery:before {
            content: "\eb5b";
          }

          .uil-schedule:before {
            content: "\eb5c";
          }

          .uil-science:before {
            content: "\eb5d";
          }

          .uil-screw:before {
            content: "\eb5e";
          }

          .uil-scroll-h:before {
            content: "\eb5f";
          }

          .uil-scroll:before {
            content: "\eb60";
          }

          .uil-search-alt:before {
            content: "\eb61";
          }

          .uil-search-minus:before {
            content: "\eb62";
          }

          .uil-search-plus:before {
            content: "\eb63";
          }

          .uil-search:before {
            content: "\eb64";
          }

          .uil-selfie:before {
            content: "\eb65";
          }

          .uil-server-alt:before {
            content: "\eb66";
          }

          .uil-server-connection:before {
            content: "\eb67";
          }

          .uil-server-network-alt:before {
            content: "\eb68";
          }

          .uil-server-network:before {
            content: "\eb69";
          }

          .uil-server:before {
            content: "\eb6a";
          }

          .uil-servers:before {
            content: "\eb6b";
          }

          .uil-servicemark:before {
            content: "\eb6c";
          }

          .uil-share-alt:before {
            content: "\eb6d";
          }

          .uil-shield-check:before {
            content: "\eb6e";
          }

          .uil-shield-exclamation:before {
            content: "\eb6f";
          }

          .uil-shield-question:before {
            content: "\eb70";
          }

          .uil-shield-slash:before {
            content: "\eb71";
          }

          .uil-shield:before {
            content: "\eb72";
          }

          .uil-ship:before {
            content: "\eb73";
          }

          .uil-shop:before {
            content: "\eb74";
          }

          .uil-shopping-basket:before {
            content: "\eb75";
          }

          .uil-shopping-cart-alt:before {
            content: "\eb76";
          }

          .uil-shopping-trolley:before {
            content: "\eb77";
          }

          .uil-shovel:before {
            content: "\eb78";
          }

          .uil-shrink:before {
            content: "\eb79";
          }

          .uil-shuffle:before {
            content: "\eb7a";
          }

          .uil-shutter-alt:before {
            content: "\eb7b";
          }

          .uil-shutter:before {
            content: "\eb7c";
          }

          .uil-sick:before {
            content: "\eb7d";
          }

          .uil-sigma:before {
            content: "\eb7e";
          }

          .uil-sign-alt:before {
            content: "\eb7f";
          }

          .uil-sign-in-alt:before {
            content: "\eb80";
          }

          .uil-sign-left:before {
            content: "\eb81";
          }

          .uil-sign-out-alt:before {
            content: "\eb82";
          }

          .uil-sign-right:before {
            content: "\eb83";
          }

          .uil-arrows-right-down:before {
            content: "\e85a";
          }

          .uil-arrows-shrink-h:before {
            content: "\e85b";
          }

          .uil-arrows-shrink-v:before {
            content: "\e85c";
          }

          .uil-arrows-up-right:before {
            content: "\e85d";
          }

          .uil-arrows-v-alt:before {
            content: "\e85e";
          }

          .uil-arrows-v:before {
            content: "\e85f";
          }

          .uil-assistive-listening-systems:before {
            content: "\e860";
          }

          .uil-asterisk:before {
            content: "\e861";
          }

          .uil-at:before {
            content: "\e862";
          }

          .uil-atm-card:before {
            content: "\e863";
          }

          .uil-atom:before {
            content: "\e864";
          }

          .uil-auto-flash:before {
            content: "\e865";
          }

          .uil-award-alt:before {
            content: "\e866";
          }

          .uil-award:before {
            content: "\e867";
          }

          .uil-baby-carriage:before {
            content: "\e868";
          }

          .uil-backpack:before {
            content: "\e869";
          }

          .uil-backspace:before {
            content: "\e86a";
          }

          .uil-backward:before {
            content: "\e86b";
          }

          .uil-bag-alt:before {
            content: "\e86c";
          }

          .uil-bag-slash:before {
            content: "\e86d";
          }

          .uil-bag:before {
            content: "\e86e";
          }

          .uil-balance-scale:before {
            content: "\e86f";
          }

          .uil-ball:before {
            content: "\e870";
          }

          .uil-ban:before {
            content: "\e871";
          }

          .uil-bars:before {
            content: "\e872";
          }

          .uil-baseball-ball:before {
            content: "\e873";
          }

          .uil-basketball-hoop:before {
            content: "\e874";
          }

          .uil-basketball:before {
            content: "\e875";
          }

          .uil-bath:before {
            content: "\e876";
          }

          .uil-battery-bolt:before {
            content: "\e877";
          }

          .uil-signal-alt-3:before {
            content: "\eb84";
          }

          .uil-signal-alt:before {
            content: "\eb85";
          }

          .uil-signal:before {
            content: "\eb86";
          }

          .uil-silence:before {
            content: "\eb87";
          }

          .uil-silent-squint:before {
            content: "\eb88";
          }

          .uil-sim-card:before {
            content: "\eb89";
          }

          .uil-sitemap:before {
            content: "\eb8a";
          }

          .uil-skip-forward-alt:before {
            content: "\eb8b";
          }

          .uil-skip-forward-circle:before {
            content: "\eb8c";
          }

          .uil-skip-forward:before {
            content: "\eb8d";
          }

          .uil-skype-alt:before {
            content: "\eb8e";
          }

          .uil-skype:before {
            content: "\eb8f";
          }

          .uil-slack-alt:before {
            content: "\eb90";
          }

          .uil-slack:before {
            content: "\eb91";
          }

          .uil-sliders-v-alt:before {
            content: "\eb92";
          }

          .uil-sliders-v:before {
            content: "\eb93";
          }

          .uil-smile-beam:before {
            content: "\eb94";
          }

          .uil-smile-dizzy:before {
            content: "\eb95";
          }

          .uil-smile-squint-wink-alt:before {
            content: "\eb96";
          }

          .uil-smile-squint-wink:before {
            content: "\eb97";
          }

          .uil-smile-wink-alt:before {
            content: "\eb98";
          }

          .uil-smile-wink:before {
            content: "\eb99";
          }

          .uil-smile:before {
            content: "\eb9a";
          }

          .uil-snapchat-alt:before {
            content: "\eb9b";
          }

          .uil-snapchat-ghost:before {
            content: "\eb9c";
          }

          .uil-snapchat-square:before {
            content: "\eb9d";
          }

          .uil-snow-flake:before {
            content: "\eb9e";
          }

          .uil-snowflake-alt:before {
            content: "\eb9f";
          }

          .uil-snowflake:before {
            content: "\eba0";
          }

          .uil-sort-amount-down:before {
            content: "\eba1";
          }

          .uil-sort-amount-up:before {
            content: "\eba2";
          }

          .uil-sort:before {
            content: "\eba3";
          }

          .uil-sorting:before {
            content: "\eba4";
          }

          .uil-space-key:before {
            content: "\eba5";
          }

          .uil-spade:before {
            content: "\eba6";
          }

          .uil-sperms:before {
            content: "\eba7";
          }

          .uil-spin:before {
            content: "\eba8";
          }

          .uil-sport:before {
            content: "\eba9";
          }

          .uil-square-full:before {
            content: "\ebaa";
          }

          .uil-square-shape:before {
            content: "\ebab";
          }

          .uil-square:before {
            content: "\ebac";
          }

          .uil-squint:before {
            content: "\ebad";
          }

          .uil-star-half-alt:before {
            content: "\ebae";
          }

          .uil-star:before {
            content: "\ebaf";
          }

          .uil-step-backward-alt:before {
            content: "\ebb0";
          }

          .uil-step-backward-circle:before {
            content: "\ebb1";
          }

          .uil-step-backward:before {
            content: "\ebb2";
          }

          .uil-step-forward:before {
            content: "\ebb3";
          }

          .uil-stop-circle:before {
            content: "\ebb4";
          }

          .uil-stopwatch-slash:before {
            content: "\ebb5";
          }

          .uil-stopwatch:before {
            content: "\ebb6";
          }

          .uil-store-alt:before {
            content: "\ebb7";
          }

          .uil-store:before {
            content: "\ebb8";
          }

          .uil-streering:before {
            content: "\ebb9";
          }

          .uil-stretcher:before {
            content: "\ebba";
          }

          .uil-subject:before {
            content: "\ebbb";
          }

          .uil-subway-alt:before {
            content: "\ebbc";
          }

          .uil-subway:before {
            content: "\ebbd";
          }

          .uil-suitcase-alt:before {
            content: "\ebbe";
          }

          .uil-suitcase:before {
            content: "\ebbf";
          }

          .uil-sun:before {
            content: "\ebc0";
          }

          .uil-sunset:before {
            content: "\ebc1";
          }

          .uil-surprise:before {
            content: "\ebc2";
          }

          .uil-swatchbook:before {
            content: "\ebc3";
          }

          .uil-swiggy:before {
            content: "\ebc4";
          }

          .uil-swimmer:before {
            content: "\ebc5";
          }

          .uil-symbol:before {
            content: "\ebc6";
          }

          .uil-sync-exclamation:before {
            content: "\ebc7";
          }

          .uil-sync-slash:before {
            content: "\ebc8";
          }

          .uil-sync:before {
            content: "\ebc9";
          }

          .uil-syringe:before {
            content: "\ebca";
          }

          .uil-table:before {
            content: "\ebcb";
          }

          .uil-tablet:before {
            content: "\ebcc";
          }

          .uil-tablets:before {
            content: "\ebcd";
          }

          .uil-tachometer-fast:before {
            content: "\ebce";
          }

          .uil-tag-alt:before {
            content: "\ebcf";
          }

          .uil-tag:before {
            content: "\ebd0";
          }

          .uil-tape:before {
            content: "\ebd1";
          }

          .uil-taxi:before {
            content: "\ebd2";
          }

          .uil-tear:before {
            content: "\ebd3";
          }

          .uil-technology:before {
            content: "\ebd4";
          }

          .uil-telegram-alt:before {
            content: "\ebd5";
          }

          .uil-telegram:before {
            content: "\ebd6";
          }

          .uil-telescope:before {
            content: "\ebd7";
          }

          .uil-temperature-empty:before {
            content: "\ebd8";
          }

          .uil-temperature-half:before {
            content: "\ebd9";
          }

          .uil-temperature-minus:before {
            content: "\ebda";
          }

          .uil-temperature-plus:before {
            content: "\ebdb";
          }

          .uil-temperature-quarter:before {
            content: "\ebdc";
          }

          .uil-temperature-three-quarter:before {
            content: "\ebdd";
          }

          .uil-temperature:before {
            content: "\ebde";
          }

          .uil-text-fields:before {
            content: "\ebdf";
          }

          .uil-text-size:before {
            content: "\ebe0";
          }

          .uil-text-strike-through:before {
            content: "\ebe1";
          }

          .uil-text:before {
            content: "\ebe2";
          }

          .uil-th-large:before {
            content: "\ebe3";
          }

          .uil-th-slash:before {
            content: "\ebe4";
          }

          .uil-th:before {
            content: "\ebe5";
          }

          .uil-thermometer:before {
            content: "\ebe6";
          }

          .uil-thumbs-down:before {
            content: "\ebe7";
          }

          .uil-thumbs-up:before {
            content: "\ebe8";
          }

          .uil-thunderstorm-moon:before {
            content: "\ebe9";
          }

          .uil-thunderstorm-sun:before {
            content: "\ebea";
          }

          .uil-thunderstorm:before {
            content: "\ebeb";
          }

          .uil-ticket:before {
            content: "\ebec";
          }

          .uil-times-circle:before {
            content: "\ebed";
          }

          .uil-times-square:before {
            content: "\ebee";
          }

          .uil-times:before {
            content: "\ebef";
          }

          .uil-toggle-off:before {
            content: "\ebf0";
          }

          .uil-toggle-on:before {
            content: "\ebf1";
          }

          .uil-top-arrow-from-top:before {
            content: "\ebf2";
          }

          .uil-top-arrow-to-top:before {
            content: "\ebf3";
          }

          .uil-tornado:before {
            content: "\ebf4";
          }

          .uil-trademark-circle:before {
            content: "\ebf5";
          }

          .uil-trademark:before {
            content: "\ebf6";
          }

          .uil-traffic-barrier:before {
            content: "\ebf7";
          }

          .uil-trash-alt:before {
            content: "\ebf8";
          }

          .uil-trash:before {
            content: "\ebf9";
          }

          .uil-trees:before {
            content: "\ebfa";
          }

          .uil-triangle:before {
            content: "\ebfb";
          }

          .uil-trophy:before {
            content: "\ebfc";
          }

          .uil-trowel:before {
            content: "\ebfd";
          }

          .uil-truck-case:before {
            content: "\ebfe";
          }

          .uil-truck-loading:before {
            content: "\ebff";
          }

          .uil-truck:before {
            content: "\ec00";
          }

          .uil-tumblr-alt:before {
            content: "\ec01";
          }

          .uil-tumblr-square:before {
            content: "\ec02";
          }

          .uil-tumblr:before {
            content: "\ec03";
          }

          .uil-tv-retro-slash:before {
            content: "\ec04";
          }

          .uil-tv-retro:before {
            content: "\ec05";
          }

          .uil-twitter-alt:before {
            content: "\ec06";
          }

          .uil-twitter:before {
            content: "\ec07";
          }

          .uil-umbrella:before {
            content: "\ec08";
          }

          .uil-unamused:before {
            content: "\ec09";
          }

          .uil-underline:before {
            content: "\ec0a";
          }

          .uil-university:before {
            content: "\ec0b";
          }

          .uil-unlock-alt:before {
            content: "\ec0c";
          }

          .uil-unlock:before {
            content: "\ec0d";
          }

          .uil-upload-alt:before {
            content: "\ec0e";
          }

          .uil-upload:before {
            content: "\ec0f";
          }

          .uil-usd-circle:before {
            content: "\ec10";
          }

          .uil-usd-square:before {
            content: "\ec11";
          }

          .uil-user-check:before {
            content: "\ec12";
          }

          .uil-user-circle:before {
            content: "\ec13";
          }

          .uil-user-exclamation:before {
            content: "\ec14";
          }

          .uil-user-hard-hat:before {
            content: "\ec15";
          }

          .uil-user-minus:before {
            content: "\ec16";
          }

          .uil-user-plus:before {
            content: "\ec17";
          }

          .uil-user-square:before {
            content: "\ec18";
          }

          .uil-user-times:before {
            content: "\ec19";
          }

          .uil-user:before {
            content: "\ec1a";
          }

          .uil-users-alt:before {
            content: "\ec1b";
          }

          .uil-utensils-alt:before {
            content: "\ec1c";
          }

          .uil-utensils:before {
            content: "\ec1d";
          }

          .uil-vector-square-alt:before {
            content: "\ec1e";
          }

          .uil-vector-square:before {
            content: "\ec1f";
          }

          .uil-venus:before {
            content: "\ec20";
          }

          .uil-vertical-align-bottom:before {
            content: "\ec21";
          }

          .uil-vertical-align-center:before {
            content: "\ec22";
          }

          .uil-vertical-align-top:before {
            content: "\ec23";
          }

          .uil-vertical-distribute-bottom:before {
            content: "\ec24";
          }

          .uil-vertical-distribution-center:before {
            content: "\ec25";
          }

          .uil-vertical-distribution-top:before {
            content: "\ec26";
          }

          .uil-video-slash:before {
            content: "\ec27";
          }

          .uil-video:before {
            content: "\ec28";
          }

          .uil-visual-studio:before {
            content: "\ec29";
          }

          .uil-vk-alt:before {
            content: "\ec2a";
          }

          .uil-vk:before {
            content: "\ec2b";
          }

          .uil-voicemail-rectangle:before {
            content: "\ec2c";
          }

          .uil-voicemail:before {
            content: "\ec2d";
          }

          .uil-volleyball:before {
            content: "\ec2e";
          }

          .uil-volume-down:before {
            content: "\ec2f";
          }

          .uil-volume-mute:before {
            content: "\ec30";
          }

          .uil-volume-off:before {
            content: "\ec31";
          }

          .uil-volume-up:before {
            content: "\ec32";
          }

          .uil-volume:before {
            content: "\ec33";
          }

          .uil-vuejs-alt:before {
            content: "\ec34";
          }

          .uil-vuejs:before {
            content: "\ec35";
          }

          .uil-wall:before {
            content: "\ec36";
          }

          .uil-wallet:before {
            content: "\ec37";
          }

          .uil-watch-alt:before {
            content: "\ec38";
          }

          .uil-watch:before {
            content: "\ec39";
          }

          .uil-water-drop-slash:before {
            content: "\ec3a";
          }

          .uil-water-glass:before {
            content: "\ec3b";
          }

          .uil-water:before {
            content: "\ec3c";
          }

          .uil-web-grid-alt:before {
            content: "\ec3d";
          }

          .uil-web-grid:before {
            content: "\ec3e";
          }

          .uil-web-section-alt:before {
            content: "\ec3f";
          }

          .uil-web-section:before {
            content: "\ec40";
          }

          .uil-webcam:before {
            content: "\ec41";
          }

          .uil-weight:before {
            content: "\ec42";
          }

          .uil-whatsapp:before {
            content: "\ec43";
          }

          .uil-wheel-barrow:before {
            content: "\ec44";
          }

          .uil-wheelchair-alt:before {
            content: "\ec45";
          }

          .uil-wheelchair:before {
            content: "\ec46";
          }

          .uil-wifi-router:before {
            content: "\ec47";
          }

          .uil-wifi-slash:before {
            content: "\ec48";
          }

          .uil-wifi:before {
            content: "\ec49";
          }

          .uil-wind-moon:before {
            content: "\ec4a";
          }

          .uil-wind-sun:before {
            content: "\ec4b";
          }

          .uil-wind:before {
            content: "\ec4c";
          }

          .uil-window-grid:before {
            content: "\ec4d";
          }

          .uil-window-maximize:before {
            content: "\ec4e";
          }

          .uil-window-restore:before {
            content: "\ec4f";
          }

          .uil-window-section:before {
            content: "\ec50";
          }

          .uil-window:before {
            content: "\ec51";
          }

          .uil-windsock:before {
            content: "\ec52";
          }

          .uil-wrap-text:before {
            content: "\ec53";
          }

          .uil-wrench:before {
            content: "\ec54";
          }

          .uil-yellow:before {
            content: "\ec55";
          }

          .uil-yen-circle:before {
            content: "\ec56";
          }

          .uil-yen:before {
            content: "\ec57";
          }

          .uil-yin-yang:before {
            content: "\ec58";
          }

          .uil-youtube-alt:before {
            content: "\ec59";
          }

          .uil-youtube:before {
            content: "\ec5a";
          }

          .uil-battery-empty:before {
            content: "\e878";
          }

          .uil-bed-double:before {
            content: "\e879";
          }

          .uil-bed:before {
            content: "\e87a";
          }

          .uil-behance-alt:before {
            content: "\e87b";
          }

          .uil-behance:before {
            content: "\e87c";
          }

          .uil-bell-school:before {
            content: "\e87d";
          }

          .uil-bell-slash:before {
            content: "\e87e";
          }

          .uil-bell:before {
            content: "\e87f";
          }

          .uil-bill:before {
            content: "\e880";
          }

          .uil-bitcoin-alt:before {
            content: "\e881";
          }

          .uil-bitcoin-bold:before {
            content: "\e882";
          }

          .uil-bitcoin-circle:before {
            content: "\e883";
          }

          .uil-bitcoin:before {
            content: "\e884";
          }

          .uil-black-berry:before {
            content: "\e885";
          }

          .uil-blogger-alt:before {
            content: "\e886";
          }

          .uil-blogger:before {
            content: "\e887";
          }

          .uil-bluetooth-b:before {
            content: "\e888";
          }

          .uil-bold:before {
            content: "\e889";
          }

          .uil-bolt-alt:before {
            content: "\e88a";
          }

          .uil-bolt-slash:before {
            content: "\e88b";
          }

          .uil-bolt:before {
            content: "\e88c";
          }

          .uil-book-alt:before {
            content: "\e88d";
          }

          .uil-book-medical:before {
            content: "\e88e";
          }

          .uil-book-open:before {
            content: "\e88f";
          }

          .uil-book-reader:before {
            content: "\e890";
          }

          .uil-book:before {
            content: "\e891";
          }

          .uil-bookmark-full:before {
            content: "\e892";
          }

          .uil-bookmark:before {
            content: "\e893";
          }

          .uil-books:before {
            content: "\e894";
          }

          .uil-boombox:before {
            content: "\e895";
          }

          .uil-border-alt:before {
            content: "\e896";
          }

          .uil-border-bottom:before {
            content: "\e897";
          }

          .uil-border-clear:before {
            content: "\e898";
          }

          .uil-border-horizontal:before {
            content: "\e899";
          }

          .uil-border-inner:before {
            content: "\e89a";
          }

          .uil-border-left:before {
            content: "\e89b";
          }

          .uil-border-out:before {
            content: "\e89c";
          }

          .uil-border-right:before {
            content: "\e89d";
          }

          .uil-border-top:before {
            content: "\e89e";
          }

          .uil-border-vertical:before {
            content: "\e89f";
          }

          .uil-bowling-ball:before {
            content: "\e8a0";
          }

          .uil-box:before {
            content: "\e8a1";
          }

          .uil-briefcase-alt:before {
            content: "\e8a2";
          }

          .uil-briefcase:before {
            content: "\e8a3";
          }

          .uil-bright:before {
            content: "\e8a4";
          }

          .uil-brightness-empty:before {
            content: "\e8a5";
          }

          .uil-brightness-half:before {
            content: "\e8a6";
          }

          .uil-brightness-low:before {
            content: "\e8a7";
          }

          .uil-brightness-minus:before {
            content: "\e8a8";
          }

          .uil-brightness-plus:before {
            content: "\e8a9";
          }

          .uil-brightness:before {
            content: "\e8aa";
          }

          .uil-bring-bottom:before {
            content: "\e8ab";
          }

          .uil-bring-front:before {
            content: "\e8ac";
          }

          .uil-brush-alt:before {
            content: "\e8ad";
          }

          .uil-bug:before {
            content: "\e8ae";
          }

          .uil-building:before {
            content: "\e8af";
          }

          .uil-bullseye:before {
            content: "\e8b0";
          }

          .uil-bus-alt:before {
            content: "\e8b1";
          }

          .uil-bus-school:before {
            content: "\e8b2";
          }

          .uil-bus:before {
            content: "\e8b3";
          }

          .uil-calcualtor:before {
            content: "\e8b4";
          }

          .uil-calculator-alt:before {
            content: "\e8b5";
          }

          .uil-calculator:before {
            content: "\e8b6";
          }

          .uil-calendar-alt:before {
            content: "\e8b7";
          }

          .uil-calendar-slash:before {
            content: "\e8b8";
          }

          .uil-calender:before {
            content: "\e8b9";
          }

          .uil-calling:before {
            content: "\e8ba";
          }

          .uil-camera-change:before {
            content: "\e8bb";
          }

          .uil-camera-plus:before {
            content: "\e8bc";
          }

          .uil-camera-slash:before {
            content: "\e8bd";
          }

          .uil-camera:before {
            content: "\e8be";
          }

          .uil-cancel:before {
            content: "\e8bf";
          }

          .uil-capsule:before {
            content: "\e8c0";
          }

          .uil-capture:before {
            content: "\e8c1";
          }

          .uil-car-sideview:before {
            content: "\e8c2";
          }

          .uil-car-slash:before {
            content: "\e8c3";
          }

          .uil-car-wash:before {
            content: "\e8c4";
          }

          .uil-car:before {
            content: "\e8c5";
          }

          .uil-card-atm:before {
            content: "\e8c6";
          }

          .uil-caret-right:before {
            content: "\e8c7";
          }

          .uil-cart:before {
            content: "\e8c8";
          }

          .uil-cell:before {
            content: "\e8c9";
          }

          .uil-celsius:before {
            content: "\e8ca";
          }

          .uil-chart-bar-alt:before {
            content: "\e8cb";
          }

          .uil-chart-bar:before {
            content: "\e8cc";
          }

          .uil-chart-down:before {
            content: "\e8cd";
          }

          .uil-chart-growth-alt:before {
            content: "\e8ce";
          }

          .uil-chart-growth:before {
            content: "\e8cf";
          }

          .uil-chart-line:before {
            content: "\e8d0";
          }

          .uil-chart-pie-alt:before {
            content: "\e8d1";
          }

          .uil-chart-pie:before {
            content: "\e8d2";
          }

          .uil-chart:before {
            content: "\e8d3";
          }

          .uil-chat-bubble-user:before {
            content: "\e8d4";
          }

          .uil-chat-info:before {
            content: "\e8d5";
          }

          .uil-chat:before {
            content: "\e8d6";
          }

          .uil-check-circle:before {
            content: "\e8d7";
          }

          .uil-check-square:before {
            content: "\e8d8";
          }

          .uil-check:before {
            content: "\e8d9";
          }

          .uil-circle-layer:before {
            content: "\e8da";
          }

          .uil-circle:before {
            content: "\e8db";
          }

          .uil-circuit:before {
            content: "\e8dc";
          }

          .uil-clapper-board:before {
            content: "\e8dd";
          }

          .uil-clipboard-alt:before {
            content: "\e8de";
          }

          .uil-clipboard-blank:before {
            content: "\e8df";
          }

          .uil-clipboard-notes:before {
            content: "\e8e0";
          }

          .uil-clipboard:before {
            content: "\e8e1";
          }

          .uil-clock-eight:before {
            content: "\e8e2";
          }

          .uil-clock-five:before {
            content: "\e8e3";
          }

          .uil-clock-nine:before {
            content: "\e8e4";
          }

          .uil-clock-seven:before {
            content: "\e8e5";
          }

          .uil-clock-ten:before {
            content: "\e8e6";
          }

          .uil-clock-three:before {
            content: "\e8e7";
          }

          .uil-clock-two:before {
            content: "\e8e8";
          }

          .uil-clock:before {
            content: "\e8e9";
          }

          .uil-closed-captioning:before {
            content: "\e8ea";
          }

          .uil-cloud-block:before {
            content: "\e8eb";
          }

          .uil-cloud-bookmark:before {
            content: "\e8ec";
          }

          .uil-cloud-check:before {
            content: "\e8ed";
          }

          .uil-cloud-computing:before {
            content: "\e8ee";
          }

          .uil-cloud-data-connection:before {
            content: "\e8ef";
          }

          .uil-cloud-database-tree:before {
            content: "\e8f0";
          }

          .uil-cloud-download:before {
            content: "\e8f1";
          }

          .uil-cloud-drizzle:before {
            content: "\e8f2";
          }

          .uil-cloud-exclamation:before {
            content: "\e8f3";
          }

          .uil-cloud-hail:before {
            content: "\e8f4";
          }

          .uil-cloud-heart:before {
            content: "\e8f5";
          }

          .uil-cloud-info:before {
            content: "\e8f6";
          }

          .uil-cloud-lock:before {
            content: "\e8f7";
          }

          .uil-cloud-meatball:before {
            content: "\e8f8";
          }

          .uil-cloud-moon-hail:before {
            content: "\e8f9";
          }

          .uil-cloud-moon-meatball:before {
            content: "\e8fa";
          }

          .uil-cloud-moon-rain:before {
            content: "\e8fb";
          }

          .uil-cloud-moon-showers:before {
            content: "\e8fc";
          }

          .uil-cloud-moon:before {
            content: "\e8fd";
          }

          .uil-cloud-question:before {
            content: "\e8fe";
          }

          .uil-cloud-rain-sun:before {
            content: "\e8ff";
          }

          .uil-cloud-rain:before {
            content: "\e900";
          }

          .uil-cloud-redo:before {
            content: "\e901";
          }

          .uil-cloud-set:before {
            content: "\e902";
          }

          .uil-cloud-share:before {
            content: "\e903";
          }

          .uil-cloud-shield:before {
            content: "\e904";
          }

          .uil-cloud-showers-alt:before {
            content: "\e905";
          }

          .uil-cloud-showers-heavy:before {
            content: "\e906";
          }

          .uil-cloud-showers:before {
            content: "\e907";
          }

          .uil-cloud-slash:before {
            content: "\e908";
          }

          .uil-cloud-sun-hail:before {
            content: "\e909";
          }

          .uil-cloud-sun-meatball:before {
            content: "\e90a";
          }

          .uil-cloud-sun-rain-alt:before {
            content: "\e90b";
          }

          .uil-cloud-sun-rain:before {
            content: "\e90c";
          }

          .uil-cloud-sun-tear:before {
            content: "\e90d";
          }

          .uil-cloud-sun:before {
            content: "\e90e";
          }

          .uil-cloud-times:before {
            content: "\e90f";
          }

          .uil-cloud-unlock:before {
            content: "\e910";
          }

          .uil-cloud-upload:before {
            content: "\e911";
          }

          .uil-cloud-wifi:before {
            content: "\e912";
          }

          .uil-cloud-wind:before {
            content: "\e913";
          }

          .uil-cloud:before {
            content: "\e914";
          }

          .uil-clouds:before {
            content: "\e915";
          }

          .uil-club:before {
            content: "\e916";
          }

          .uil-code:before {
            content: "\e917";
          }

          .uil-coffee:before {
            content: "\e918";
          }

          .uil-cog:before {
            content: "\e919";
          }

          .uil-coins:before {
            content: "\e91a";
          }

          .uil-columns:before {
            content: "\e91b";
          }

          .uil-comment-alt-block:before {
            content: "\e91c";
          }

          .uil-comment-alt-chart-lines:before {
            content: "\e91d";
          }

          .uil-comment-alt-check:before {
            content: "\e91e";
          }

          .uil-comment-alt-dots:before {
            content: "\e91f";
          }

          .uil-comment-alt-download:before {
            content: "\e920";
          }

          .uil-comment-alt-edit:before {
            content: "\e921";
          }

          .uil-comment-alt-exclamation:before {
            content: "\e922";
          }

          .uil-comment-alt-heart:before {
            content: "\e923";
          }

          .uil-comment-alt-image:before {
            content: "\e924";
          }

          .uil-comment-alt-info:before {
            content: "\e925";
          }

          .uil-comment-alt-lines:before {
            content: "\e926";
          }

          .uil-comment-alt-lock:before {
            content: "\e927";
          }

          .uil-comment-alt-medical:before {
            content: "\e928";
          }

          .uil-comment-alt-message:before {
            content: "\e929";
          }

          .uil-comment-alt-notes:before {
            content: "\e92a";
          }

          .uil-comment-alt-plus:before {
            content: "\e92b";
          }
        `}</style>
      </>
    );
  }
}
