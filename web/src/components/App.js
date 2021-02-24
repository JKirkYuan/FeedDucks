import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Header/Header';
import FeedList from './FeedList/FeedList';
import CreateDuckDialog from './Dialog/CreateDuckDialog';

function App() {
  const [feedList, updateFeedList] = React.useState([]);
  const [errorState, setError] = React.useState(false);
  const [isAddDialogOpen, updateAddDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const apiLink = 'http://localhost:5000/feed';
      const res = await axios.get(apiLink);

      if (!res || res.status !== 200 || !res.data) {
        setError(true);
      }
      updateFeedList(res.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header update={updateAddDialogOpen} />
      <Content>
        {errorState ? <div>Error</div> : <FeedList Feeds={feedList} />}
        <CreateDuckDialog
          open={isAddDialogOpen}
          update={updateAddDialogOpen}
          updateFeedList={updateFeedList}
        />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  padding: 50px;
`;

export default App;
