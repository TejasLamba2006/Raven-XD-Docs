import Link from "next/link";
import React from "react";

export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Raven XD",
      defaultTitle: "Raven XD",
      description:
        "Raven B4, but for those who can't afford it. Raven B4, but not only for Hypixel.",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://raven-bs.tejaslamba.xyz",
        site_name: "Raven XD",
      },
    };
  },
  docsRepositoryBase: "https://github.com/TejasLamba2006/Raven-XD-Docs",
  head: (
    <>
      <meta theme-color="#2ac603" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.webp" />

    </>
  ),
  logo: (
    <>
      <img src="/logo.webp" alt="logo" width="50" height="50" />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Raven XD</span>
    </>
  ),
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
      };
    },
  },
  chat: {
    link: "https://discord.gg/G4AH3kSYdR",
  },
  banner: {
    text: (
      <>
        Documentation is still in progress. Please join our Discord server for
        help.
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-customGreen text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: "69%" }}
          >
            {" "}
            Completed 69%
          </div>
        </div>
      </>
    ),
    key: "in-progress-new",
    dismissible: false,
  },
  feedback: {
    content: null,
  },
  editLink: {},
  primaryHue: 108,
  primarySaturation: 100,
  navigation: true,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <Link
          href="https://github.com/TejasLamba2006"
          target="_blank"
          rel="noreferrer"
        >
          TejasLamba2006
        </Link>
        .
      </span>
    ),
  },
};
