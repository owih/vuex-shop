export type IconsId =
  | "circle"
  | "clear"
  | "heart"
  | "message"
  | "minus"
  | "plus";

export type IconsKey =
  | "Circle"
  | "Clear"
  | "Heart"
  | "Message"
  | "Minus"
  | "Plus";

export enum Icons {
  Circle = "circle",
  Clear = "clear",
  Heart = "heart",
  Message = "message",
  Minus = "minus",
  Plus = "plus",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Circle]: "61697",
  [Icons.Clear]: "61698",
  [Icons.Heart]: "61699",
  [Icons.Message]: "61700",
  [Icons.Minus]: "61701",
  [Icons.Plus]: "61702",
};
