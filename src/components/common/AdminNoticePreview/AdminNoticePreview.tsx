import { Stack, Pagination, Flex } from "@mantine/core";
import { useState } from "react";
import Image from "next/image";
import { AdminNoticePreviewRow } from "./AdminNoticePreviewRow/AdminNoticePreviewRow";
import classes from "./AdminNoticePreview.module.css";

export interface IAdminNoticePreviewRow {
  pinned: boolean;
  title: string;
  writer: string;
  registeredDate: Date;
  onClickRow?: () => void;
}

interface Props {
  title: string;
  pagingData: {
    data: IAdminNoticePreviewRow[];
  }[];
}

export function AdminNoticePreview({ title, pagingData }: Props) {
  const [activePage, setPage] = useState(1);
  const data: IAdminNoticePreviewRow[] = pagingData[activePage - 1].data;

  return (
    <Stack gap={0} align="flex-start" justify="flex-start" className={classes.container}>
      <Flex className={classes.title_bar}>
        <div className={classes.col_icon}>
          <Image alt="table icon" src="/icons/Table.svg" width={24} height={24} />
        </div>
        <div className={classes.col_title}>{title}</div>
      </Flex>
      {data.map((item, index) => (
        <AdminNoticePreviewRow key={index} {...item} />
      ))}
      <div className={classes.pagination}>
        <Pagination total={pagingData.length} value={activePage} onChange={setPage} />
      </div>
    </Stack>
  );
}
