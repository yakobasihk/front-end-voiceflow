import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/Button';
import Container from 'src/Container';
import CreateUserModal from 'src/CreateUserModal';
import Title from 'src/Title';
import User from 'src/User';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    const savedUsers = JSON.parse(localStorage.getItem('users') || 'null');
    setUsers(savedUsers || []);
  };

  return (
    <Container>
      <Title text="Users" />

      {users.map((user) => (
        <Link to={'/chat/' + user}>
          <User text={user} reload={reload} />
        </Link>
      ))}

      <Button text="Create New User" onClick={() => setOpen(true)} />
      {open && <CreateUserModal setOpen={setOpen} reload={reload} />}
    </Container>
  );
};

export default Dashboard;
