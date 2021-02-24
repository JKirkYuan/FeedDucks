import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateDuckDialog from '../Dialog/UpdateDuckDialog';

const FeedList = ({ Feeds }) => {
  const [isUpdateDialogOpen, setUpdateDialog] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});

  const updateFeed = (id) => {
    setUpdateDialog(true);
    const row = Feeds.find((feed) => feed.id === id);
    setSelectedRow(row);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Food Fed</TableCell>
              <TableCell align="right">Pond Location</TableCell>
              <TableCell align="right">Ducks Fed</TableCell>
              <TableCell align="right">Foods Fed</TableCell>
              <TableCell align="right">Time Fed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Feeds.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => updateFeed(row.id)}
                hover={true}
              >
                <TableCell component="th" scope="row">
                  {row.food}
                </TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.duckCount}</TableCell>
                <TableCell align="right">{row.foodCount}</TableCell>
                <TableCell align="right">{row.timeFed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UpdateDuckDialog
        open={isUpdateDialogOpen}
        update={setUpdateDialog}
        currRow={selectedRow}
        setCurrRow={setSelectedRow}
        feeds={Feeds}
      />
    </>
  );
};

export default FeedList;
