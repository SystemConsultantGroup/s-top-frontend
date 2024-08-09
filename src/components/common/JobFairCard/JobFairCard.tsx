import React from "react";
import classes from "./JobFairCard.module.css";

interface JobFairCardProps {
  logo: string; // 이미지 URL
  company: string;
  position: string;
  employmentType: string[];
  location: string;
}

export const JobFairCard: React.FC<JobFairCardProps> = ({
  logo,
  company,
  position,
  employmentType,
  location,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.logo}>
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className={classes.company}>{company}</div>
      <div className={classes.position}>{position}</div>
      <div className={classes.divider}></div>
      <div className={classes.details}>
        <span className={classes.label}>고용 형태</span>
        <div className={classes.tagContainer}>
          {employmentType.map((type, index) => (
            <div key={index} className={classes.tag}>
              {type}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.details}>
        <span className={classes.label}>근무 지역</span>
        <div className={classes.location}>{location}</div>
      </div>
    </div>
  );
};
