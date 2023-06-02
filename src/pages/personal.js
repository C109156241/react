import React from 'react';
import { Table, Button, Container } from 'semantic-ui-react';

const ProfilePage = () => {
  return (
    <Container textAlign='center'>
      <Table celled className='profile-table'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Field</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>John Doe</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>johndoe@example.com</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>123 Main St, City, State</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>555-1234</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Button primary floated='right'>
                Edit
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
};

export default ProfilePage;
