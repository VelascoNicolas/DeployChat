import { Base } from "../base/base.model";
import { Enterprise } from "../enterprise";


export class Profile extends Base {
  enterprise!: Enterprise;
}
