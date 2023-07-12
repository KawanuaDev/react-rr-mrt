import React from 'react';
import { Center, Loader, Stack, Text } from '@mantine/core';

export default function Loading() {
  return (
    <Center className="container">
      <Stack align="center">
        <Text fw={700}>Loading.</Text>
        <Loader color="gray" variant="oval" />
      </Stack>
    </Center>
  );
}
