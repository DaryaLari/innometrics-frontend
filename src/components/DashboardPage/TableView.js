import React from "react";
import styles from "./style.css";

const TableView = ({activities}) => {
  return (
    <div className={styles.tableView}>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>user</th>
          <th>browser_title</th>
          <th>browser_url</th>
          <th>start_time</th>
          <th>end_time</th>
          <th>ip_address</th>
          <th>mac_address</th>
          <th>executable_name</th>
        </tr>
        </thead>
        <tbody>
        {activities.map(a => (
          <tr key={a._id}>
            <td>{a._id}</td>
            <td>{a.user}</td>
            <td>{a.browser_title}</td>
            <td>{a.browser_url}</td>
            <td>{a.start_time}</td>
            <td>{a.end_time}</td>
            <td>{a.ip_address}</td>
            <td>{a.mac_address}</td>
            <td>{a.executable_name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableView;