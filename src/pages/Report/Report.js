import React from 'react';
import {
  Card, CardContent, CardHeader, Divider
} from '@material-ui/core';
import './index.css';

const Report = () => {
  const data = 'Report';
  return (
    <>
      <Card>
        <CardHeader title={data} />
        <Divider />
        <CardContent>
          <p>Hola</p>
        </CardContent>
      </Card>
    </>
  );
};

export default Report;
