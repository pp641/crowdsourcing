import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

const createData = (investor, amount, percentage, round, investorDetails, projectOwnerDetails) => {
  return { investor, amount, percentage, round, investorDetails, projectOwnerDetails };
}

const rows = [
  createData('Investor A', 100000, '10%', 'Seed', 'Details A', 'Owner A'),
  createData('Investor B', 200000, '20%', 'Series A', 'Details B', 'Owner B'),
  createData('Investor C', 300000, '30%', 'Series B', 'Details C', 'Owner C'),
];

const InvestmentTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Investor</TableCell>
            <TableCell>Investment Amount</TableCell>
            <TableCell>Invested % in Project</TableCell>
            <TableCell>Investment Round</TableCell>
            <TableCell>Investor Details</TableCell>
            <TableCell>Invested Project Owner Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.investor}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.percentage}</TableCell>
              <TableCell>{row.round}</TableCell>
              <TableCell>{row.investorDetails}</TableCell>
              <TableCell>{row.projectOwnerDetails}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InvestmentTable;
