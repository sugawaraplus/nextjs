/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React, { useState } from 'react';
import { Heading1, Body1 } from './typography';

const Intro = ({ title, year, description, role, credit, process }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<>
      <Heading1>{title}</Heading1>
      <Body1 sx={{ mt: '0.5em' }}>{year}</Body1>
      <Body1 sx={{my:7}}>{description}</Body1>
      <Body1 sx={{ my: 7 }}>🙋‍♂️ {role}</Body1>
      {credit && <Body1 sx={{ my: 7 }}>{credit}</Body1>}
      {process && (
        <>
          <Body1
            onClick={() => setIsOpen(true)}
            sx={{ cursor: 'pointer', my: 7 }}
          >
            ➕ プロセスをみる
          </Body1>
          {isOpen && (
            <>
              <Box sx={{ my: 7 }}>{process}</Box>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Intro;
