import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const icons = [
  'search',
  'edit',
  'check',
  'close',
  'info',
  'delete',
  'share'
]
const sizes = [
  'sm',
  'lg',
  'base'
]

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  'text-white',
  ...icons.map(v => `i-ic-baseline-${v}`),
  ...sizes.map(v => `text-${v}`)
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
