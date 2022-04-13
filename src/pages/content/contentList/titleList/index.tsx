import React, { useState, useEffect } from "react";
import { Form, Modal, Row, Col, Input, Button, Table, Select, Image } from "antd";
import { DeleteOutlined, FormOutlined, DiffOutlined } from "@ant-design/icons";
import { PageContainer } from '@ant-design/pro-layout';
import { fetchSort } from '@/services/sortmanager';
import { Link } from 'umi';

import "./index.less";

const { Option } = Select;
const FormItem = Form.Item;
const { Column } = Table;
const Titlelist: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [pageNo, setPageNo] = useState(1); //页数
  const [pageSize, setPageSize] = useState(10); //每页多少条数据
  const [totalCount, setTotalCount] = useState(54); //总的数
  const [sortList, setSortList] = useState([]);//存储接口数据
  const multiple = true;
  //添加弹窗
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const data = [
    {
      key: "1",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "2",
      title: "最新活动",
      img:'',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "3",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "4",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "5",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "6",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "7",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "8",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "9",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "10",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "11",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "12",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "13",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "14",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "15",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "16",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "17",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "18",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "19",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "20",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "21",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "22",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "23",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "24",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "25",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "26",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "27",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "28",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "29",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "30",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "31",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "32",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "33",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "34",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "35",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "36",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "37",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "38",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "39",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "40",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "41",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "42",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "43",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "44",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "45",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "46",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "47",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "48",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "49",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "50",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "51",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "52",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "53",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "54",
      title: "最新活动",
      img:'https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG',
      state: "显示",
      sort: "999",
      author: "张三",
      createTime: "2022-04-05 14:36:28",
    },
  ];
  const onPageChange = (pageNumber: number) => {
    setPageNo(pageNumber);
  };
  const pageSizeChange = (current: number, size: number) => {
    setPageSize(size);
  };

  useEffect(() => {
    console.log(123);
    fetchSort().then(res => {
      console.log('-----:', res);
      setSortList(res);
    }) 
  }, []);

  //添加数据
  const onSubmit = () => {}
  ///关闭弹窗
  const onCancel = () => {
    setModal(false)
    setEdit(false)
    setDel(false)
  }

  const showTotal = (total: number) => {
    return `共${total}条`;
  }

  return (
    <div className="sortManage">
      <PageContainer>
      </PageContainer>
      <Form form={form} layout="inline">
        <Row>
          <Col span={8}>
            <FormItem labelAlign={'left'} name="sortId" label="标题">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem labelAlign={'left'} name="state" label="状态">
              <Select
                  getPopupContainer={triggerNode => triggerNode.parentElement}
                  defaultValue="全部"
              >
                  {multiple ? <Option value=''>全部</Option> : null }
                  <Option key={0} value={0}>隐藏</Option>
                  <Option key={1} value={1}>显示</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row justify="end">
          <Col span={24}>
            <div className="btn-wrap">
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button
                style={{ marginLeft: "12px" }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                重置
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="sortManage-table">
        <Table
          bordered
          dataSource={data}
          pagination={{
            showQuickJumper: true,
            current: pageNo,
            pageSize: pageSize,
            total: totalCount,
            showTotal: showTotal,
            onChange: onPageChange,
            onShowSizeChange: pageSizeChange,
          }}
        >
          <Column 
              title="标题" 
              dataIndex="title" 
              key="title" 
              align="center" 
          />
          <Column 
              title="图片" 
              dataIndex="img" 
              key="img" 
              align="center" 
              render={(text) => {
                return (
                  text ? <Image width={60} height={60} src={text} />
                   : <Image width={60} height={60} src="error" fallback="data:image/png;base64,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" />
                );
              }}
          />
          <Column 
              title="状态" 
              dataIndex="state" 
              key="state" 
              align="center" 
          />
          <Column 
              title="排序" 
              dataIndex="sort" 
              key="sort" 
              align="center" 
          />
          <Column 
              title="作者" 
              dataIndex="author" 
              key="author" 
              align="center" 
          />
          <Column
              title="创建时间"
              dataIndex="createTime"
              key="createTime"
              align="center"
          />
          <Column
            title="操作"
            key={"action"}
            align={"center"}
            render={(text) => {
              return (
                <div className="operation-button">
                  <div className="button">
                        <Link to="/content/contentList/addList"><DiffOutlined /></Link>
                  </div>
                  <div className="button">
                        <Link to="/content/contentList/addList?key={text.key}"><DeleteOutlined /></Link>
                  </div>
                  <div className="button">
                        <Link to="/content/contentList/addList?key={text.key}"><FormOutlined /></Link>
                  </div>
                </div>
              );
            }}
          />
        </Table>
        {/* <Pagination
          current={pageNo}
          pageSize={pageSize}
          total={totalCount}
          showTotal={(total: number) => `共${total}条`}
          onChange={onPageChange}
          onShowSizeChange={pageSizeChange}
        /> */}
      </div>
      <div className="addModal">
        <Modal title="新增分类·" centered visible={modal} onOk={onSubmit} onCancel={onCancel}>
          <Form>
            <Row>
              <FormItem name="sortName" label="分类名称" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="paraentSort" label="父级分类" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="sortLimit" label="分类排序" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="state" label="分类状态" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="editModal">
        <Modal title="修改分类·" centered visible={edit} onOk={onSubmit} onCancel={onCancel}>
          <Form>
            <Row>
              <FormItem name="sortName" label="分类名称" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="paraentSort" label="父级分类" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="sortLimit" label="分类排序" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="state" label="分类状态" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="deleteModal">
        <Modal
            title="删除"
            visible={del}
            onOk={onSubmit}
            onCancel={onCancel}
        >
            <p>确定删除？</p>
        </Modal>
      </div>
    </div>
  );
};

export default Titlelist;