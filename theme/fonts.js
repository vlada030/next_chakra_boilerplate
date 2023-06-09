import { Global } from "@emotion/react";
import plusJakartaSansRegularUrl from "@/public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Regular.woff2";
import plusJakartaSansMediumUrl from "@/public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Medium.woff2";
import plusJakartaSansBoldUrl from "@/public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Bold.woff2";
import plusJakartaSansSemiBoldUrl from "@/public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-SemiBold.woff2";
import plusJakartaSansExtraBoldUrl from "@/public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-ExtraBold.woff2";
import interRegularUrl from "@/public/fonts/Inter/Inter-Regular.woff2";
import interMediumUrl from "@/public/fonts/Inter/Inter-Medium.woff2";
import interSemiBoldUrl from "@/public/fonts/Inter/Inter-SemiBold.woff2";
import interBoldUrl from "@/public/fonts/Inter/Inter-Bold.woff2";

// import using ttf file format

// import plusJakartaSansBoldTTFUrl from "../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Bold.ttf";
//  @font-face {
//         font-family: 'Plus Jakarta Sans Bold';
//         font-style: normal;
//         font-weight: 700;
//         font-display: swap;
// 				src: local(''), url(${plusJakartaSansBoldTTFUrl}) format('truetype');
//       }

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Plus Jakarta Sans Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local(''), url(${plusJakartaSansRegularUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Plus Jakarta Sans Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local(''), url(${plusJakartaSansMediumUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Plus Jakarta Sans Semi Bold';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
				src: local(''), url(${plusJakartaSansSemiBoldUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Plus Jakarta Sans Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local(''), url(${plusJakartaSansBoldUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Plus Jakarta Sans Extra Bold';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: local(''), url(${plusJakartaSansExtraBoldUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Inter Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
				src: local(''), url(${interRegularUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Inter Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
				src: local(''), url(${interMediumUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Inter SemiBold';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
				src: local(''), url(${interSemiBoldUrl}) format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Inter Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
				src: local(''), url(${interBoldUrl}) format('woff2');
      }
      `}
  />
);

export default Fonts;
