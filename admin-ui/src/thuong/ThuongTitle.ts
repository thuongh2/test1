import { Thuong as TThuong } from "../api/thuong/Thuong";

export const THUONG_TITLE_FIELD = "name";

export const ThuongTitle = (record: TThuong): string => {
  return record.name || String(record.id);
};
