import React from 'react';
import ShowResultsButton from './ShowResultsButton';
import NewStudentButton from './NewStudentButton';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react';

const OptionView = () => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            {/* <Icon name='search' /> */}
            Add a new Studnent
          </Header>
        <NewStudentButton />
          {/* <Search placeholder='Search countries...' /> */}
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='world' />
            View by Grade
          </Header>
          <ShowResultsButton />
          {/* <Button primary>Create</Button> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

  export default OptionView;