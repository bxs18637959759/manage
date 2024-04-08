import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import styles from './index.less';

type Props = {};

const Header:React.FC = ({}: Props) => {

  const items: MenuProps['items'] = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
  ];

  return (
    <div className={styles.header}>
        <div className={styles.header_logo}>
            <img height={28} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
            <h1 className={styles.header_logo_title}>Antd Design</h1>
        </div>
        <div className={styles.header_user}>
            <Dropdown menu={{items}} placement="bottom" arrow>
                <div className='flex align-items-center'>
                    <img height={26} src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" />
                    <span style={{padding: '0 8px'}}>admin</span>
                </div>
            </Dropdown>
        </div>
    </div>
  );
};

export default Header;