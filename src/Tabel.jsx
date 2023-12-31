import React, { useState, useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useLoaderData } from 'react-router-dom';
import {
  Button,
  Container,
  rem,
  Title,
  useMantineTheme,
  Menu,
  Box,
  Text,
  Tabs
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSend, IconUserCircle } from '@tabler/icons-react';

export async function fetchUsers() {
  const req = await fetch('https://jsonplaceholder.typicode.com/users');
  if (req.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }
  const result = req.json();
  return { sum: result.length, raw: result };
}
export async function loader() {
  const obj = await fetchUsers();
  const data = obj.raw;
  return data;
}

export default function Tabel() {
  const { colorScheme } = useMantineTheme();
  const data = useLoaderData();
  const pageTitle = 'Rayon';
  const pagination = data.length > 5;
  const [isLoading, setIsLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'username',
        header: 'Username',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
      },
      {
        accessorKey: 'website',
        header: 'Web',
      },
    ],
    []
  );

  const tableDefault = useMantineReactTable({
    columns,
    data,
    enablePagination: pagination,
    enableRowActions: true,
    enableRowSelection: true,
    positionToolbarAlertBanner: 'bottom',
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: true,
      withBorder: colorScheme === 'light',
    },
    paginationDisplayMode: 'pages',
    renderTopToolbarCustomActions: ({ table }) => {
      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('contact ' + row.getValue('name'));
        });
      };
      return (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            color="blue"
            disabled={!table.getIsSomeRowsSelected()}
            onClick={handleContact}
            variant="filled"
          >
            Contact
          </Button>
        </div>
      );
    },
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
        <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
      </>
    ),
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Title order={4}>Catch Phrase:</Title>
          <Text>&quot;{row.original.company.catchPhrase}&quot;</Text>
        </Box>
      </Box>
    ),
  });
  const tableFirst = useMantineReactTable({
    columns,
    data,
    enablePagination: pagination,
    enableGrouping: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    mantineToolbarAlertBannerBadgeProps: { color: "blue", variant: "outline" },
    initialState: {
      density: "xs",
      grouping: ["website"],
      pagination: { pageIndex: 0, pageSize: 20 },
      sorting: [{ id: "website", desc: false }],
    },
    enableRowActions: true,
    enableRowSelection: true,
    positionToolbarAlertBanner: 'bottom',
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: true,
      withBorder: colorScheme === 'light',
    },
    paginationDisplayMode: 'pages',
    renderTopToolbarCustomActions: ({ table }) => {
      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('contact ' + row.getValue('name'));
        });
      };
      return (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            color="blue"
            disabled={!table.getIsSomeRowsSelected()}
            onClick={handleContact}
            variant="filled"
          >
            Contact
          </Button>
        </div>
      );
    },
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
        <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
      </>
    ),
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Title order={4}>Catch Phrase:</Title>
          <Text>&quot;{row.original.company.catchPhrase}&quot;</Text>
        </Box>
      </Box>
    ),
  });

  return (
    <div>
      <Container style={{ marginBottom: rem(40) }}>
        <Title order={1} className="classes-header">
          {pageTitle}
        </Title>
      </Container>
      <Container className="classes-sub">
        <Tabs variant="outline" keepMounted={false} defaultValue="default">
          <Tabs.List position="center">
            <Tabs.Tab value="default">Default</Tabs.Tab>
            <Tabs.Tab value="first">First</Tabs.Tab>
            <Tabs.Tab value="second">Second</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="default" pt="xs">
            <MantineReactTable table={tableDefault} />
          </Tabs.Panel>
          <Tabs.Panel value="first" pt="xs">
            <MantineReactTable table={tableFirst} />
          </Tabs.Panel>
          <Tabs.Panel value="second" pt="xs">Coming soon.</Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}
