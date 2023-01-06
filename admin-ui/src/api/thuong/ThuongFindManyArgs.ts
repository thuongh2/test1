import { ThuongWhereInput } from "./ThuongWhereInput";
import { ThuongOrderByInput } from "./ThuongOrderByInput";

export type ThuongFindManyArgs = {
  where?: ThuongWhereInput;
  orderBy?: Array<ThuongOrderByInput>;
  skip?: number;
  take?: number;
};
