import "./styleapp.css";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
export default function Pattern() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  function handleClick() {
    alert("idk either do it yourself")
  }
   const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container">
      <div className="two">
        <h1>This is a calculator🔥🔥🔥</h1>
      </div>
    <div className="buttondiv">
      <button onClick={showModal}>
       x
      </button>
      <button onClick={showModal}>
        /
      </button>
      <button onClick={showModal}> 
       +
      </button>
      <button onClick={showModal}>
        -
      </button>
      </div>
      <Modal
        title="dmag lga"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="ok."
        cancelText='theek ha'
      >
        <p>idk bhai school kyun </p>
        <p>jate ho? khud kr bhai</p>
        <p>school ke fees kyun deta hai</p>
      </Modal>
      
    </div>
  );
} 
 
