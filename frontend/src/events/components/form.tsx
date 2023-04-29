import React from 'react';
import { Card, Row, Col, Form, Input, Button, Space,DatePicker  } from 'antd';
import TimezoneSelect from 'react-timezone-select'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axios'

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} est requis!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


const Forms = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false)
  const [selectedTimezone, setSelectedTimezone] =React.useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const navigate = useNavigate()
  React.useEffect(() => {

  }, [])


  const onFinish = (values: any) => {
    const zone =  JSON.stringify(selectedTimezone, null, 2) as any
    const parsedTimeZone = JSON.parse(zone);
    const startDate = values.dates[0].format('YYYY-MM-DD')
    const endDate = values.dates[1].format('YYYY-MM-DD')
    const event = {...values, timezone:parsedTimeZone.value, startDate, endDate };
    
    setLoading(true);

    axios.post('/events', event)
      .then(function (response) {
        console.log(response);
        setLoading(false);
        form.resetFields();

        return navigate('/')
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });

    form.resetFields();
  };
  const onReset = () => {
    form.resetFields();
  }


  return <>
    <Row>
      <Col span={12} offset={6}>
        <Card size="small" title="Ajouter un evenement"  >
          <Form {...layout}
            form={form}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item name='name' label="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='dates' label="Dates Evenement" rules={[{ required: true }]}>
              <RangePicker 
                disabledDate={(current) => current.isBefore(moment().subtract(1,"day") as any)}
              />
            </Form.Item>

            <Form.Item  name='description' label="Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone as any}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Space>
                    <Button loading={loading} type="primary" htmlType="submit">
                      Enregistrer
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      Annuler
                    </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>

  </>;
}

export default Forms;