import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.css'

class AsideNavigation extends React.Component {
  state = {
    opened: true
  }
  onOpenClose = () => {
    this.setState({opened : !this.state.opened})
  }

  personalNavigation = [
    {
      icon: 'developer_board',//'dashboard',
      name: 'Dashboard',
      link: '/dashboard'
    },
    {
      icon: 'dvr',//'storage',
      name: 'Activities',
      link: '/activities'
    }
  ]
  render() {
    const navigation = this.personalNavigation
    return (
      <aside className={this.state.opened ? styles.asideOpened : styles.asideClosed}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            {navigation.map(i => (
              <Link className={styles.navItem}
                   key={i.link}
                   to={i.link}
              >
                <i className={`${'material-icons'}`}>
                  {i.icon}
                </i>
                {this.state.opened && (
                  <span>{i.name}</span>
                 )}
              </Link>
            ))}
          </nav>
        </div>
        {this.state.opened ? (
          <div className={styles.openCloseBtn} onClick={this.onOpenClose}>
            <i className={`${'material-icons'}`}>
              chevron_left
            </i>
            <span>Collapse</span>
          </div>) : (
          <div className={styles.openCloseBtn} onClick={this.onOpenClose}>
            <i className={`${'material-icons'}`}>
              chevron_right
            </i>
            {this.state.opened && (
              <span>Expand</span>
            )}
          </div>
        )}
      </aside>

    )
  }
}

export default AsideNavigation