import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 22,
        paddingTop: 15,
    },
    tableContainer: {
        marginTop: 15,
        marginBottom: 30,
    }
}));
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Visitors', 159, 6.0, 24, 4.0),
    createData('Visits -> Check Avail', 237, 9.0, 37, 4.3),
    createData('Check Avails -> Bookings', 262, 16.0, 24, 6.0),
];

function KPIshort() {
    const classes = useStyles();

    return(
        <div>
            <Typography className={classes.title}>
                KPI short
            </Typography>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <caption>Here can be "edit" button</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>South park KIP</TableCell>
                            <TableCell align="right">19.02</TableCell>
                            <TableCell align="right">20.02</TableCell>
                            <TableCell align="right">21.02</TableCell>
                            <TableCell align="right">22.02</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default KPIshort;