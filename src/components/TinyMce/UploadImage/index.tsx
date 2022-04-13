import React, { useState } from 'react';
import { Button, Modal, Icon, Upload, message } from 'antd';
import PropTypes from 'prop-types';
 
 const Dragger = Upload.Dragger;
 const UploadImage: React.FC<any> = (props) => {
    const propTypes = {
      imageSuccessCBK: PropTypes.func,
    };

    const [visible, setVisible] = useState<boolean>(false)
    const [Uploading, setUploading] = useState<boolean>(false)
    const [listObj, setListObj] = useState<object>({})

    const showModal = () => {
      setVisible(true);
    }

     /**
      * 确认
      *
      */
    const handleOk = () => {
        const imagesFileArr = Object.keys(listObj).map(v => listObj[v])
        propTypes.imageSuccessCBK(imagesFileArr);
        setVisible(false);
        setListObj({});
        setUploading(false);
    }

    const handleCancel = () => {
      setVisible(false);
      setListObj({});
    }

    const propsed = {
      name: 'file',
      multiple: true,
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      onChange: (info: any) => {
        const uid = info.file.uid
        const objKeyArr = Object.keys(listObj)
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {//已成功上传
          setUploading(false);
          for (let i = 0, len = objKeyArr.length; i < len; i++) {
            if (listObj[objKeyArr[i]].uid === uid) {
              listObj[objKeyArr[i]].url = info.file.thumbUrl
              listObj[objKeyArr[i]].hasSuccess = true
              message.success(`${info.file.name} file uploaded successfully.`);
              return
            }
          }

        } else if (status === 'error') {
          setUploading(false);
          message.error(`${info.file.name} file upload failed.`);
        }
        if (status === 'removed') {//移除上传的
          for (let i = 0, len = objKeyArr.length; i < len; i++) {
            if (listObj[objKeyArr[i]].uid === uid) {
              delete listObj[objKeyArr[i]]
              message.success(`${info.file.name} file removed successfully.`);
              return
            }
          }
        }
      },
      beforeUpload: (file: any) => {
        setUploading(true);
        const _URL = window.URL || window.webkitURL
        const fileName = file.uid
        listObj[fileName] = {}
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = _URL.createObjectURL(file)
          img.onload = function () {
            listObj[fileName] = { hasSuccess: false, uid: file.uid, width: 1000, height: 450 }
            setListObj(listObj);
          }
          resolve(true)
        })
      },
    };

    return (
      <div>
        <Button
          style={{ marginTop: 0 }}
          type="primary"
          shape="round"
          icon="upload"
          onClick={() => { showModal() }}>
          上传
           </Button>
        {
          visible ? <Modal
            title="上传图片"
            visible={visible}
            onCancel={handleCancel}
            footer={[
              <div key="1">
                <Button onClick={() => handleCancel()} loading={!!Uploading}>取消</Button>
                <Button type="primary" style={{ marginLeft: 8 }} onClick={() => handleOk()} loading={!!Uploading}>
                  确定
                </Button>
              </div>]}
          >
            <Dragger {...propsed}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
          </Modal> : null
        }
      </div>
    );
 }

 export default UploadImage;