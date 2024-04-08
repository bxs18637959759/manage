import { Link, Outlet } from 'umi';
import Header from '@/components/Header';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header/>
      <div className={styles.layout_container}>
          <div className={styles.layout_navs}></div>
          <div className={styles.layout_outlet}>
            <Outlet />
          </div>
      </div>
    </div>
  );
}
