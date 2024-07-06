import React from "react";
import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";

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
      themeColor: "#f5f5f5"
    };
  },
  logo: (
    <>
      <img
        src="https://cdn.discordapp.com/icons/1257032850264428605/57f3b2d5a52ac137f80c83761b5e133b.webp?size=1024&format=webp&width=0&height=256"
        alt="logo"
        width="30"
        height="30"
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
