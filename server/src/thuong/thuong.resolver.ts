import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ThuongResolverBase } from "./base/thuong.resolver.base";
import { Thuong } from "./base/Thuong";
import { ThuongService } from "./thuong.service";

@graphql.Resolver(() => Thuong)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ThuongResolver extends ThuongResolverBase {
  constructor(
    protected readonly service: ThuongService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
