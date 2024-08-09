import React from "react";
import classes from "./AdminSignupPreview.module.css";

interface Signup {
  id: number;
  applicant: string;
  date: string;
  category: string;
  remark?: string;
}

interface AdminSignupPreviewProps {
  signups: Signup[];
}

export const AdminSignupPreview: React.FC<AdminSignupPreviewProps> = ({ signups }) => {
  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>신청자</th>
            <th>신청일</th>
            <th>분류</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {signups.map((signup) => (
            <tr key={signup.id}>
              <td>{signup.id}</td>
              <td>{signup.applicant}</td>
              <td>{signup.date}</td>
              <td>{signup.category}</td>
              <td>{signup.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
