import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6">Feed Ducks</Typography>
          <Button color="inherit">Add Feed</Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export default Header;
