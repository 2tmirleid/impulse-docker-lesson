import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserCreateAttrs {
  name: string;
  password: string;
}

@Table({
  tableName: "users"
})
export class UserModel extends Model<UserModel, IUserCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false})
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
}