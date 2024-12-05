import React, { useEffect, useState } from "react";
import { fetchPatients } from "../services/api";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const PatientGrid = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        console.log("Dati caricati:", data);
        setPatients(data || []);
      } catch (error) {
        console.error("Errore nel caricamento dei pazienti:", error);
      }
    };
    loadPatients();
  }, []);

  const columns = [
    { field: "FamilyName", headerName: "Family Name", width: 150 },
    { field: "GivenName", headerName: "Given Name", width: 150 },
    { field: "Sex", headerName: "Sex", width: 100 },
    { field: "BirthDate", headerName: "Birth Date", width: 150 },
    { field: "ParametersCount", headerName: "Parameters", width: 100 },
    {
      field: "Alarm",
      headerName: "Alarm",
      width: 120,
      renderCell: (params) => {
        const hasAlarm = params.row.parameters.some(param => param.alarm);
        return <span style={{ color: hasAlarm ? 'red' : 'black' }}>{hasAlarm ? "🔴" : ""}</span>;
      },
    },
  ];

  const rows = patients.map((p, index) => ({
    id: p.id || index, 
    FamilyName: p.familyName,
    GivenName: p.givenName,
    Sex: p.sex,
    BirthDate: p.birthDate ? new Date(p.birthDate).toLocaleDateString() : "N/A",
    ParametersCount: p.parameters ? p.parameters.length : 0,
    parameters: p.parameters,
  }));

  const handleRowClick = (params) => {
    setSelectedPatient(params.row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedPatient(null);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        onRowClick={handleRowClick}
      />
      {selectedPatient && (
        <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
          <DialogTitle>Details for {selectedPatient.FamilyName} {selectedPatient.GivenName}</DialogTitle>
          <DialogContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Alarm</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedPatient.parameters.map((param) => (
                  <TableRow key={param.id}>
                    <TableCell>{param.id}</TableCell>
                    <TableCell>{param.name}</TableCell>
                    <TableCell>{param.value}</TableCell>
                    <TableCell>{param.alarm ? "Yes" : "No"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default PatientGrid;
