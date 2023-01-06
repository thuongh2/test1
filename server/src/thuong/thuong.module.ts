import { Module } from "@nestjs/common";
import { ThuongModuleBase } from "./base/thuong.module.base";
import { ThuongService } from "./thuong.service";
import { ThuongController } from "./thuong.controller";
import { ThuongResolver } from "./thuong.resolver";

@Module({
  imports: [ThuongModuleBase],
  controllers: [ThuongController],
  providers: [ThuongService, ThuongResolver],
  exports: [ThuongService],
})
export class ThuongModule {}
