import React from 'react'
import styles from './style.css'

class ProjectPageNavigation extends React.Component {
  state = {
    opened: true
  }
  onOpenClose = () => {
    this.setState({opened : !this.state.opened})
  }
  navItems = [
    {
      icon: 'developer_board',//'dashboard',
      name: 'Dashboard',
      link: this.props.match.url
    },
    {
      icon: 'dvr',//'storage',
      name: 'Activities',
      link: this.props.match.url + '/activities'
    },
    {
      icon: 'people',
      name: 'Team members',
      link: this.props.match.url + '/team'
    },
    {
      icon: 'track_changes', // 'list_alt'
      name: 'Manage goals',
      link: this.props.match.url + '/goals'
    },
    {
      icon: 'settings',
      name: 'Settings',
      link: this.props.match.url + '/settings'
    }
  ]
  render() {
    console.log(this.props.match)
    return (
      <aside className={this.state.opened ? styles.asideOpened : styles.asideClosed}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            {this.navItems.map(i => (
              <div className={styles.navItem}
                   key={i.link}
                   onClick={() => this.props.history.push(i.link)}
              >
                <i className={`${'material-icons'}`}>
                  {i.icon}
                </i>
                {this.state.opened && (
                  <span>{i.name}</span>
                 )}
              </div>
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

export default ProjectPageNavigation