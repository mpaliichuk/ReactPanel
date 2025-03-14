import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from './GDPperCapita';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "role",
    headerName: "Role",
    width: 130,
    valueGetter: (params) => params.row?.role || "N/A",
  },
];

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Nick Smith", email: "nick@example.com", role: "User" },
  { id: 4, name: "Jack Smith", email: "jack@example.com", role: "User" }
];

const DataTable = () => {
  return (
    <Box sx={{ height: "calc(100vh - 64px)", width: "100%", paddingTop: "50px" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, gap: 2 }}>
        <Button variant="outlined">+ Add survey</Button>
        <Button variant="outlined">+ Add asset specific survey</Button>
      </Box>
      <Box sx={{ height: "400px" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 4,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: "1 1 30%", minWidth: "300px" }}>
          <LineChart
            dataset={dataset}
            xAxis={[
              {
                id: 'Years',
                dataKey: 'date',
                scaleType: 'time',
                valueFormatter: (date) => date.getFullYear().toString(),
              },
            ]}
            series={[
              {
                id: 'France',
                label: 'French GDP per capita',
                dataKey: 'fr',
                stack: 'total',
                area: true,
                showMark: false,
              },
              {
                id: 'Germany',
                label: 'German GDP per capita',
                dataKey: 'dl',
                stack: 'total',
                area: true,
                showMark: false,
              }
            ]}
            width={500}
            height={250}
            margin={{ left: 70 }}
          />
        </Box>
        <Box sx={{ flex: "1 1 30%", minWidth: "300px" }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={500}
            height={250}
          />
        </Box>
        <Box sx={{ flex: "1 1 30%", minWidth: "300px" }}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DataTable;
