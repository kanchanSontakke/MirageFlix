import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** --------------------
   *  CORE COLORS
   * -------------------*/
  colors: {
    // Brand Violet (MirageFlix)
    violet: [
      "#F2ECFB", // very light tint (rare)
      "#E0D3F7",
      "#C1A8EF",
      "#A27DE7",
      "#8A2BE2", // 👈 PRIMARY BRAND
      "#7A25C8",
      "#6A20AE",
      "#591B93",
      "#481678",
      "#37115D",
    ],

    // Dark surfaces & text
    dark: [
      "#FFFFFF", // primary text
      "#CCCCCC", // secondary text
      "#9A9A9A", // muted text
      "#6F6F6F",
      "#3A3A3A",
      "#2A2A2A",
      "#1E1E1E",
      "#161616",
      "#111111", // surface
      "#0A0A0A", // app background
    ],
  },

  primaryColor: "violet",

  /** --------------------
  
     *  TYPOGRAPHY
  
     * -------------------*/

  fontFamily:
    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',

  headings: {
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    fontWeight: "700",
  },

  /** --------------------
   *  COMPONENT DEFAULTS
   * -------------------*/

  components: {
    Button: {
      defaultProps: {
        radius: "md",
        variant: "filled",
      },
    },

    Card: {
      defaultProps: {
        radius: "lg",
        withBorder: false,
        bg: "dark.8", // #111111
      },
    },

    TextInput: {
      defaultProps: {
        radius: "md",
      },
    },
  },

  /** --------------------
  
     *  SHADOWS (SUBTLE, NOT GLOWY)
  
     * -------------------*/

  shadows: {
    sm: "0 6px 18px rgba(0,0,0,0.4)",
    md: "0 10px 30px rgba(0,0,0,0.5)",
  },
  /** --------------------
   *  SPACING SYSTEM
   * -------------------*/
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
  },
  /** --------------------
   *  RADIUS (VISUAL CONSISTENCY)
   * -------------------*/
  radius: {
    xs: "4px",
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "20px",
  },
});
