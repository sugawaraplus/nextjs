/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading, Text } from 'theme-ui';

export const Heading1 = ({ sx, ...props }) => (
  <Heading
    as="h1"
    sx={{ fontSize: [6, 10], lineHeight: 'heading', ...sx }}
    {...props}
  />
);

export const Heading2 = ({ sx, ...props }) => (
  <Heading
    as="h2"
    sx={{ fontSize: [4, 6], lineHeight: 'heading', ...sx }}
    {...props}
  />
);

export const Body1 = ({ sx, ...props }) => (
  <Text as="p" sx={{ fontSize: [3, 4], ...sx }} {...props} />
);

export const Body2 = ({ sx, ...props }) => (
  <Text as="p" sx={{ fontSize: [2, 3], ...sx }} {...props} />
);

export const Caption = ({ sx, ...props }) => (
  <Text
    as="p"
    sx={{ fontSize: [1, 2], lineHeight: 'caption', ...sx }}
    {...props}
  />
);

const level = {
  lv1: { bg:"brown.2" },
  lv2: { bg:"indigo.2" },
  lv3: { bg:"purple.2" },
  lv4: { bg:"blue.2" }
};

export const Label = ({ sx, lv, ...props }) => (
  <Text
    as="span"
    variant="label"
    sx={{display:"inline-block", fontSize: [1, 2],color:"white",
      borderRadius:2,
      px:3,py:2,mt:3,mr:3, ...level[lv],...sx }}
    {...props}
  />
);
