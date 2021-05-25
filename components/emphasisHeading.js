/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Overline, Heading2, Heading3 } from "../components/typography";

export const emphasisHeading = ({ overline, title, level, mt, sx }) => (
  <>
    <Overline sx={{ mt: mt, ...sx }}>{overline}</Overline>
    {(level = "h2") ? (
      <Heading2>{title}</Heading2>
    ) : (
      <Heading3>{title}</Heading3>
    )}
  </>
);
