/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export const Heading1 = ({ sx, ...props }) => (
  <Box as="h1" variant="corporate.heading1" sx={{ ...sx }} {...props} />
);

export const Heading2 = ({ sx, ...props }) => (
  <Box as="h2" variant="corporate.heading2" sx={{ ...sx }} {...props} />
);

export const Heading3 = ({ sx, ...props }) => (
  <Box as="h3" variant="corporate.heading3" sx={{ ...sx }} {...props} />
);

export const Heading4 = ({ sx, ...props }) => (
  <Box as="h4" variant="corporate.heading4" sx={{ ...sx }} {...props} />
);

export const Heading5 = ({ sx, ...props }) => (
  <Box as="h5" variant="corporate.heading5" sx={{ ...sx }} {...props} />
);

export const Heading6 = ({ sx, ...props }) => (
  <Box as="h6" variant="corporate.heading6" sx={{ ...sx }} {...props} />
);

export const Body1 = ({ sx, ...props }) => (
  <Box as="p" variant="corporate.body1" sx={{ ...sx }} {...props} />
);

export const Body2 = ({ sx, ...props }) => (
  <Box as="p" variant="corporate.body2" sx={{ ...sx }} {...props} />
);

export const Caption1 = ({ sx, ...props }) => (
  <Box as="p" variant="corporate.caption1" sx={{ ...sx }} {...props} />
);

export const Caption2 = ({ sx, ...props }) => (
  <Box as="p" variant="corporate.caption2" sx={{ ...sx }} {...props} />
);

export const Button1 = ({ sx, ...props }) => (
  <Box as="a" variant="corporate.button1" sx={{ ...sx }} {...props} />
);

export const Button2 = ({ sx, ...props }) => (
  <Box as="a" variant="corporate.button2" sx={{ ...sx }} {...props} />
);

export const Button3 = ({ sx, ...props }) => (
  <Box as="a" variant="corporate.button3" sx={{ ...sx }} {...props} />
);

export const Button4 = ({ sx, ...props }) => (
  <Box as="a" variant="corporate.button4" sx={{ ...sx }} {...props} />
);

export const Overline = ({ sx, ...props }) => (
  <Box as="div" variant="corporate.overline" sx={{ ...sx }} {...props} />
);

export const List1 = ({ sx, ...props }) => (
  <Box as="div" variant="corporate.List1" sx={{ ...sx }} {...props} />
);

export const List2 = ({ sx, ...props }) => (
  <Box as="div" variant="corporate.List2" sx={{ ...sx }} {...props} />
);

const level = {
  lv1: { bg: "brown.2" },
  lv2: { bg: "indigo.2" },
  lv3: { bg: "purple.2" },
  lv4: { bg: "blue.2" },
};

export const Label = ({ sx, lv, ...props }) => (
  <Box
    as="span"
    variant="label"
    sx={{
      display: "inline-block",
      fontSize: [1, 2],
      color: "white",
      borderRadius: 2,
      px: 3,
      py: 2,
      mt: 3,
      mr: 3,
      ...level[lv],
      ...sx,
    }}
    {...props}
  />
);
