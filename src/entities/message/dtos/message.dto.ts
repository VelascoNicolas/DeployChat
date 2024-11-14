import { Expose, Type } from "class-transformer";
import { Enterprise, EnterpriseDto } from "../../enterprise";
import { FlowDto } from "../../flow/dtos/flow.dto";
import { Flow } from "../../flow/flow.model";
import { Option } from "../../../enums/optionEnum";
import { TypeMessage } from "../../../enums/type.message.enum";

export class MessageDto {
  @Expose()
  numOrder!: number;

  @Expose()
  name!: string;

  @Expose()
  body!: string;

  @Expose()
  option!: Option | undefined;

  @Expose()
  typeMessage!: TypeMessage | undefined;

  @Expose()
  showName!: boolean | undefined;

  @Expose()
  isDeleted: boolean = false;

  @Expose()
  @Type(() => EnterpriseDto)
  enterprise?: Enterprise;

  @Expose()
  @Type(() => FlowDto)
  flow?: Flow;


}
