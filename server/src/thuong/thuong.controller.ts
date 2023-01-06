import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ThuongService } from "./thuong.service";
import { ThuongControllerBase } from "./base/thuong.controller.base";

@swagger.ApiTags("thuongs")
@common.Controller("thuongs")
export class ThuongController extends ThuongControllerBase {
  constructor(
    protected readonly service: ThuongService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
