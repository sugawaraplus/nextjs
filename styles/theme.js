const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 64, 104, 168],
  // prettier-ignore
  fontSizes: [11, 12, 13, 14, 16, 18, 21,26, 32, 43, 64],
  colors: {
    white: "#ffffff",
    black: "#1A1A1A",
    primary: "#0075F2",
    secondary: "#820263",
    success: "#0A8754",
    warning: "#F3B418",
    danger: "#DD1C1A",
    focus: "#0075F2",
    lower: "#858585",
    placeholder: "#C2C2C2",
    background: "#F5F5F5",
    outline: "#D6D6D6",
    separator: "#E6E6E6",
    enabled: "#858585",
    disabled: "#D6D6D6",
    muted: "#D6D6D6",
  },
  fonts: {
    body: "'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN','Hiragino Sans',Meiryo,'sans-serif'",
    heading:
      "'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN','Hiragino Sans',Meiryo,'sans-serif'",
    monospace: "monospace, serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  // letterSpacings: {
  //   body: "normal",
  //   caps: "0.2em",
  // },
  // sizes: [],
  // borders: [],
  borderWidths: [0, 1, 2, 4, 6, 8],
  // borderStyles: [],
  radii: [0, 2, 4, 8, 16, 9999],
  shadows: {
    raised: "0 1px 3px rgba(0, 0, 0, 0.25)",
    floating: "0 2px 6px rgba(0, 0, 0, 0.25)",
    overlay: "0 3px 12px rgba(0, 0, 0, 0.25)",
    dialog: "0 4px 24px rgba(0, 0, 0, 0.25)",
  },
  // zIndices: { flash: 2000 },
  // transitions: [],
  breakpoints: ["768px", "920px", "984px"],

  // Theme UIのVariants
  layout: {
    container: {
      maxWidth: "920px",
      width: "auto",
      mx: [4, 8, 8, "auto"],
    },
  },

  // body
  styles: {
    root: {
      fontFamily: "body",
      fontSize: [5, 6, 7],
      lineHeight: ["28px", "32px", "36px"],
      fontWeight: "bold",
      color: "black",
      backgroundColor: "white",
    },
  },

  corporate: {
    heading1: {
      fontSize: [8, 9, 10],
      lineHeight: ["40px", "52px", "80px"],
    },
    heading2: {
      fontSize: [7, 8, 9],
      lineHeight: ["32px", "40px", "52px"],
    },
    heading3: {
      fontSize: [6, 7, 8],
      lineHeight: ["28px", "32px", "40px"],
    },
    heading4: {
      fontSize: [5, 6, 7],
      lineHeight: ["24px", "28px", "32px"],
    },
    heading5: {
      fontSize: [4, 5, 6],
      lineHeight: ["20px", "24px", "28px"],
    },
    heading6: {
      fontSize: [3, 4, 5],
      lineHeight: ["20px", "20px", "24px"],
    },
    body1: {
      fontSize: [4, 5, 6],
      lineHeight: ["28px", "32px", "36px"],
    },
    body2: {
      fontSize: [3, 4, 4],
      lineHeight: ["24px", "28px", "28px"],
    },
    caption1: {
      fontSize: [3, 4, 4],
      lineHeight: ["20px", "24px", "24px"],
    },
    caption2: {
      fontSize: [1, 3, 3],
      lineHeight: ["16px", "20px", "20px"],
    },
    overline: {
      fontSize: [0, 1, 2],
      lineHeight: ["16px", "16px", "16px"],
      letterSpacing: "0.1em",
      color: "lower",
    },
    list1: {
      fontSize: [4, 5, 6],
      lineHeight: ["20px", "24px", "28px"],
    },
    list2: {
      fontSize: [3, 4, 5],
      lineHeight: ["20px", "20px", "24px"],
    },
  },
};

export default theme;
