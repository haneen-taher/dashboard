import React from "react";
import "./Table.css";
import { faker } from "@faker-js/faker";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  TicketNumber,
  Task,
  Pickuptime,
  Assignto,
  Customer,
  Status
) {
  return { TicketNumber, Task, Pickuptime, Assignto, Customer, Status };
}
const rows = [
  createData(
    faker.number.hex({ min: 0, max: 65535 }),
    faker.word.words({ count: { min: 3, max: 6 } }),
    faker.date.anytime(),
    faker.person.fullName(),
    faker.person.fullName(),
    "Approved"
  ),
  createData(
    faker.number.hex({ min: 0, max: 65535 }),
    faker.word.words({ count: { min: 3, max: 6 } }),
    faker.date.anytime(),
    faker.person.fullName(),
    faker.person.fullName(),
    " InProgress"
  ),
  createData(
    faker.number.hex({ min: 0, max: 65535 }),
    faker.word.words({ count: { min: 3, max: 6 } }),
    faker.date.anytime(),
    faker.person.fullName(),
    faker.person.fullName(),
    "InProgress"
  ),
  createData(
    faker.number.hex({ min: 0, max: 65535 }),
    faker.word.words({ count: { min: 3, max: 6 } }),
    faker.date.anytime(),
    faker.person.fullName(),
    faker.person.fullName(),
    "Approved"
  ),
  createData(
    faker.number.hex({ min: 0, max: 65535 }),
    faker.word.words({ count: { min: 3, max: 6 } }),
    faker.date.anytime(),
    faker.person.fullName(),
    faker.person.fullName(),
    "InProgress"
  ),
];

const Tickets = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Ticket Number</TableCell>
            <TableCell className="tableCell">Task</TableCell>
            <TableCell className="tableCell">Pick up time</TableCell>
            <TableCell className="tableCell">Assign to</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.TicketNumber}>
              <TableCell className="tableCell">{row.TicketNumber}</TableCell>
              <TableCell className="tableCell">{row.Task}</TableCell>
              <TableCell className="tableCell">
                {new Date(row.Pickuptime).toLocaleString()}{" "}
              </TableCell>
              <TableCell className="tableCell">{row.Assignto}</TableCell>
              <TableCell className="tableCell">{row.Customer}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.Status}`}>{row.Status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tickets;
