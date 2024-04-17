import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { UserModel } from "./models/user.model";
import { CreateUserDto } from "./dto/create.user.dto";

@Injectable()
export class AppService {
  constructor(@InjectModel(UserModel) private userRepository: typeof UserModel) {}

  async getUsers() {
    return await this.userRepository.findAll();
  }

  async getUserByID(id: number) {
    return await this.userRepository.findByPk(id);
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async patchUser(id: number, dto: CreateUserDto) {
    const user = await this.userRepository.findByPk(id);

    return await this.userRepository.update({
      name: dto.name,
      password: dto.password,
    }, {
      where: {
        id: id
      }
    })
  }

  async deleteUser(id: number) {
    return await this.userRepository.destroy({
      where: {
        id: id
      }
    })
  }
}
