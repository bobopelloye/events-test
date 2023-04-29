import React from 'react';
import { Link } from 'react-router-dom'
import { Table, Card, Button } from 'antd';
import axios from '../services/axios'
import moment from 'moment'


const Events = () => {
  const [loading, setLoading] = React.useState(false);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, [])

  const columns = [
    {
      title: "N°",
      key: "index",
      render: (row: any, value: any, index: number = 0) => (
        <>
          {index + 1}
        </>
      ),
    },
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date debut',
      dataIndex: 'startDate',
      key: 'startDate',
      render: ((date : any) =>moment(date).format("YYYY-MM-DD")) 
    },
    {
        title: 'Date fin',
        dataIndex: 'endDate',
        key: 'endDate',
        render: ((date : any) =>moment(date).format("YYYY-MM-DD")) 
    },
    {
        title: 'Time zone',
        dataIndex: 'timezone',
        key: 'timezone',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },

  ];

  const fetchData = () => {
    setLoading(true);
    axios.get('/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false)
      });
  };


  return <>
    <Card size="small" title={<h4 className="text-center">La liste des evenements</h4>}  extra={<>
        <Button type="primary">
            <Link to="/events/add" className="btn btn-primary text-center">Nouveau Evenement</Link>
        </Button>
        
      </>}>
      <Table
        columns={columns}
        rowKey={(record) => record.name}
        dataSource={events}
        loading={loading}
      />
    </Card>
  </>;
}

export default Events;