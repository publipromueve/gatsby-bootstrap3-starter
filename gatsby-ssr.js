import React from 'react'
import { stripIndent } from 'common-tags'

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    setHeadComponents([
      <script
        key="facebook-pixel"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','FB-ID');fbq('track','PageView');`
        }}
      />,
      <script
        key="tag-manager"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-ID');`
        }}
      />,
      <meta name="description" content="Gatsby Starter" />,
      <meta property="og:url" content="URL" />,
      <meta property="og:title" content="TITLE" />,
      <meta property="og:description" content="Gatsby Starter" />,
      <meta property="og:image" content="FEATURED-IMAGE" />
    ])

    setPreBodyComponents([
      <noscript
        key="facebok-pixel-noscript"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=FB_ID&ev=PageView&noscript=1"/>`
        }}
      />,
      <noscript
        key="facebok-pixel-noscript"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          <iframe src="//www.googletagmanager.com/ns.html?id=GTM-ID" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
    ])
  }
}