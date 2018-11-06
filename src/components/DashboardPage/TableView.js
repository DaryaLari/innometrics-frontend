import React from "react";
import styles from "./style.css";

const TableView = ({activities}) => {
  return (
    <div className={styles.tableView}>
      <table className={styles.table}>
        <thead>
        <tr className={styles.row}>
          <th className={styles.cell}>Start time</th>
          <th className={styles.cell}>End time</th>
          <th className={styles.cell}>File name</th>
        </tr>
        </thead>
        <tbody>
        {activities.map(a => (
          <tr className={styles.row} key={a._id}>
            <td className={styles.cell}>{a.start_time}</td>
            <td className={styles.cell}>{a.end_time}</td>
            <td className={styles.cell} title={a.executable_name}>{a.executable_name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableView;