import React, { useState } from 'react';
import { Menu, FloatButton, Switch } from 'antd';

export const Header = () => {
  const [open, setOpen] = useState(true);
  const onChange = (checked) => {
    setOpen(checked);
  };

  return (
    <header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item style={{ maxWidth: "calc(100% - 48px)" }}>
          <a href="/">Inicio</a>
        </Menu.Item>
        <Menu.Item style={{ textAlign: "right" }}> 
          <Switch
            onChange={onChange}
            checked={open}
          />
        </Menu.Item>
      </Menu>
    </header>
  );
};