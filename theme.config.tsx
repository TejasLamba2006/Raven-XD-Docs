import React from "react";

export default {
  primaryHue: 245,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Raven Bs",
      defaultTitle: "Raven Bs",
      description: "Raven B4, but for those who can't afford it. Raven B4, but not only for Hypixel.",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://raven-bs.tejaslamba.xyz",
        site_name: "Raven Bs",
      },
      themeColor: "#f5f5f5",
    };
  },
  head: (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/logo.webp" />
    </>
  ),
  logo: (
    <>
      <img
        src="/logo.webp"
        alt="logo"
        width="50"
        height="50"
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Raven Bs</span>
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/TejasLamba2006" target="_blank">
          TejasLamba2006
        </a>
        .
      </span>
    ),
  },
};
