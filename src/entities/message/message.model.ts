import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Base } from "../base/base.model";
import { Enterprise } from "../enterprise";
import { Flow } from "../flow/flow.model";
import { Option } from "../../enums/optionEnum";
import { TypeMessage } from "../../enums/type.message.enum";

@Entity("messages")
export class Message extends Base {
  @Column({
    nullable: true,
  })
  numOrder!: number;

  @Column({
    nullable: true,
  })
  name!: string;

  @Column({
    nullable: true,
  })
  body!: string;

  @Column({
    type: "enum",
    enum: Option,
    nullable: true,
  })
  option: Option | null = null;

  @Column({
    type: "enum",
    enum: TypeMessage,
    nullable: true,
  })
  typeMessage: TypeMessage | null = null;

  @Column({
    type: "boolean",
    nullable: true,
  })
  showName: boolean | null = null;

  @Column({
    type: "boolean",
    nullable: true,
    default: false,
  })
  isDeleted: boolean | null = false;

  @ManyToOne(() => Enterprise, (enterprise) => enterprise.messages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: "enterpriseId" })
  enterprise!: Enterprise;

  @ManyToOne(() => Flow, (flow) => flow.messages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
    nullable: true,
  })
  flow!: Flow;
  
  // Relación de padre-hijo entre mensajes
  @ManyToOne(() => Message, (subMessage) => subMessage.childMessage, {
    nullable: true,
    onDelete: "SET NULL",
  })
  parentMessage!: Message | null;

  @OneToMany(() => Message, (subMessage) => subMessage.parentMessage)
  childMessage!: Message[];
}
