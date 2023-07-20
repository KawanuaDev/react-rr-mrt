import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, NavLink } from '@mantine/core';
import { IconHome, IconBorderAll, IconNews } from '@tabler/icons-react';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <Box w={120}>
        <NavLink
          label="Home"
          onClick={() => navigate('/')}
          icon={<IconHome size="1.1rem" stroke={1.5} />}
          variant="subtle"
          active
          />
        <NavLink
          label="Tabel"
          onClick={() => navigate('/tabel')}
          icon={<IconBorderAll size="1.1rem" stroke={1.5} />}
          variant="light"
          active
          />
        <NavLink
          label="Posts"
          onClick={() => navigate('/posts')}
          icon={<IconNews size="1.1rem" stroke={1.5} />}
          variant="filled"
          active
        />
      </Box>
    </nav>
  );
}
