import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ThuongServiceBase } from "./base/thuong.service.base";

@Injectable()
export class ThuongService extends ThuongServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
