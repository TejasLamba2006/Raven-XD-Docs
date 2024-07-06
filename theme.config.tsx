import React from "react";
import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";

export default {
  primaryHue: 245,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Raven Bs",
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
  Layout({ children, pageOpts }: NextraThemeLayoutProps) {
    const { title, frontMatter, headings } = pageOpts;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="og:image" content={frontMatter.image} />
        </Head>
        <h1>My Theme</h1>
        Table of Contents:
        <ul>
          {headings.map((heading) => (
            <li key={heading.value}>{heading.value}</li>
          ))}
        </ul>
        <div style={{ border: "1px solid" }}>{children}</div>
      </div>
    );
  },
};
