# TD Banking App UI Recreation (Expo)

A multi-screen mobile app built with [Expo](https://expo.dev), React Native and TypeScript. It recreates the layout and navigation of the **TD (Canada) mobile banking app**. It was built for the SAIT assignment *Advanced Multi-Screen Mobile Application with Collaborative Navigation (Expo)*.

> **Disclaimer:** This is a student project made for educational purposes only. It is not affiliated with, endorsed by, or connected to The Toronto-Dominion Bank or TD Bank Group. "TD", "TD MySpend", "TD Global Transfer" and related names and marks are trademarks of The Toronto-Dominion Bank. "Interac" and "Interac e-Transfer" are trademarks of Interac Corp. All account names, balances and figures in the app are mock data.

## Screens

| Screen | Route | Description |
| --- | --- | --- |
| Home | `/` (`src/app/index.tsx`) | Greeting header, scrollable Quick Actions row, and a My Accounts summary (banking, credit card and investing cards, an add-accounts card, and TD MySpend monthly spend cards) |
| Accounts | `/accounts` (`src/app/accounts.tsx`) | Banking, Credit Cards and Personal Investing account cards |
| Interac e-Transfer | `/interacETransfer` (`src/app/interacETransfer.tsx`) | "Select Profile" screen with reusable profile cards (pushed from Quick Actions) |
| Transfer | `/transfer` (`src/app/transfer.tsx`) | "Between My Accounts" form with amount input, preset amounts, input validation and a Continue button that stays disabled until a valid amount is entered (pushed from Quick Actions) |

### Reference screenshots

These screenshots of the real TD app were used as the design reference:

- [Screenshot 1](<Screenshot_20260912_113843_TD (Canada).jpg>)
- [Screenshot 2](<Screenshot_20261005_105210_TD (Canada).jpg>)
- [Screenshot 3](<Screenshot_20261005_120537_TD (Canada).jpg>)

## Navigation

- **Stack navigation:** [expo-router](https://docs.expo.dev/router/introduction/) handles file-based routing with a root `Stack` in `src/app/_layout.tsx`. The Interac e-Transfer and Transfer screens are pushed onto the stack from the Home screen's Quick Actions, and you go back with `router.back()`.
- **Tab navigation:** a custom bottom tab bar (`src/components/NavBar`) switches between Home and Accounts, highlighting the active tab with `usePathname()`. The tab bar is hidden on the stacked flow screens (`transfer`, `interacETransfer`). The Move Money, Rewards and More tabs are visual placeholders only.

## Project structure

```
src/
├── app/                  # Screens (expo-router file-based routes)
│   ├── _layout.tsx       # Root stack + tab bar
│   ├── index.tsx         # Home
│   ├── accounts.tsx
│   ├── interacETransfer.tsx
│   └── transfer.tsx
└── components/           # Reusable UI, one folder per component
    ├── <Component>/
    │   ├── <Component>.tsx
    │   └── styles.ts     # StyleSheet for that component
    └── ...
```

**Component organization conventions**

- Each reusable component gets its own folder, with its markup in `<Component>.tsx` and its styles in `styles.ts`.
- Small helpers that are only used by one parent stay in the same file as that parent, for example `NavBarItem` in `NavBar.tsx` and `QuickActionButton` in `QuickActions.tsx`.
- Sub-components shared within one feature get a separate file in that feature's folder, for example `MonthlySpendCard/SubCards.tsx`.
- All component props are typed with TypeScript `type` definitions, for example `ProfileCardProps` and `HeaderProps`.

## Getting started

Prerequisites: [Node.js](https://nodejs.org/) (LTS), plus either the [Expo Go](https://expo.dev/go) app on a device or an Android emulator / iOS simulator.

```bash
cd Multi-Screen-App
npm install
npx expo start
```

Then scan the QR code with Expo Go, or press `a` (Android) or `i` (iOS) in the terminal.

## Tech stack

- [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/) and [expo-router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/) 0.86 and [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [react-native-safe-area-context](https://github.com/AppAndFlow/react-native-safe-area-context)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

## Attribution

### Project template

This project was bootstrapped with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) by [Expo](https://expo.dev) (650 Industries, Inc.). The included [LICENSE](LICENSE) is the MIT license that ships with the Expo template. The default images in `assets/` (app icons, splash icon, favicon, Expo and React logos) also come from that template.

### Icons

All icons are rendered with [@expo/vector-icons](https://github.com/expo/vector-icons) (MIT), which bundles these icon sets:

| Icon set | Used in | License |
| --- | --- | --- |
| [Material Design Icons](https://pictogrammers.com/library/mdi/) (`MaterialCommunityIcons`) by Pictogrammers | Header, NavBar, QuickActions, MyAccounts, account cards | [Apache 2.0](https://github.com/Templarian/MaterialDesign/blob/master/LICENSE) |
| [Ionicons](https://ionic.io/ionicons) by Ionic | Transfer, Interac e-Transfer, ProfileCard | [MIT](https://github.com/ionic-team/ionicons/blob/main/LICENSE) |
| [Font Awesome Free](https://fontawesome.com/) (`FontAwesome`, `FontAwesome6`) by Fonticons, Inc. | Transfer, NavBar | Icons [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), fonts [SIL OFL 1.1](https://openfontlicense.org/) ([details](https://fontawesome.com/license/free)) |
| [Ant Design Icons](https://github.com/ant-design/ant-design-icons) (`AntDesign`) | NavBar | [MIT](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) |
| [Fontisto](https://github.com/kenangundogan/fontisto) by Kenan Gündoğan | QuickActions | [MIT](https://github.com/kenangundogan/fontisto/blob/master/LICENSE) |
| [Simple Line Icons](https://github.com/thesabbir/simple-line-icons) by Mustafa Ismail & Sabbir Ahmed | QuickActions | [MIT](https://github.com/thesabbir/simple-line-icons/blob/master/LICENSE.md) |

### Design reference

The UI layout, colours and copy are recreated from the TD (Canada) mobile banking app by The Toronto-Dominion Bank, using screenshots taken by the author. No TD source code or proprietary image assets are included.

### AI assistance

This README was drafted with the help of [Claude Code](https://claude.com/claude-code) (Anthropic) and reviewed by the author.

## Author

**Evgeny Kutepov** ([@Ekutepev](https://github.com/Ekutepev))
