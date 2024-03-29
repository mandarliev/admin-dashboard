const { default: Navbar } = require("../ui/dashboard/navbar/navbar")
const { default: Sidebar } = require("../ui/dashboard/sidebar/sidebar")
import styles from '../ui/dashboard/dashboard.module.css'
import Footer from '../ui/dashboard/footer/footer'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}

export default Layout