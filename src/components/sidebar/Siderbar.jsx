import React from 'react';
import {
    LineChartOutlined
} from '@ant-design/icons';
import { Menu, message } from 'antd';
import routes from '../../constants/routes';
import { items } from '../../constants/menu';
import useSidebar from '../../hooks/useSidebar';
import './style.scss';

const Sidebar = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const {
        collapsed,
        changeComponent,
        actualComponent,
    } = useSidebar();

    return (
        <div className='container-sidebar'>
            <div className='container-sidebar_header'>
                <LineChartOutlined className='container-sidebar_header_icon'/>
            </div>
            {contextHolder}
            <div className='container-sidebar_body'>
                <Menu
                    defaultSelectedKeys={['GOOGLE_ANALITICS']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={(e) => changeComponent(e.key)}
                />
            </div>
            <div className='container-sidebar_body-container'>
                {routes(messageApi, actualComponent)}
            </div>
        </div>
    );
};

export default Sidebar;
