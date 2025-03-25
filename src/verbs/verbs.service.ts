import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerbForm } from './entities/verb-form.entity';
import { Verb } from './entities/verb.entity';

@Injectable()
export class VerbsService {
  constructor(
    @InjectRepository(Verb)
    private verbsRepository: Repository<Verb>,
    @InjectRepository(VerbForm)
    private verbFormsRepository: Repository<VerbForm>,
  ) {}

  async findAll(): Promise<Verb[]> {
    return this.verbsRepository.find({ relations: ['forms'] });
  }

  async findOne(id: number): Promise<Verb> {
    const verb = await this.verbsRepository.findOne({
      where: { id: id },
      relations: ['forms'],
    });

    if (!verb) {
      throw new NotFoundException(`Verb with id ${id} not found`);
    }

    return verb;
  }

  async create(verb: Verb): Promise<Verb> {
    return this.verbsRepository.save(verb);
  }

  async update(id: number, verb: Verb): Promise<Verb> {
    await this.verbsRepository.update(id, verb);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.verbsRepository.delete(id);
  }

  async findFormsByVerbAndTense(
    verbId: number,
    tenseId: number,
  ): Promise<VerbForm[]> {
    return this.verbFormsRepository.find({
      where: {
        verb: { id: verbId },
        tense: { id: tenseId }, // Ищем по идентификатору времени
      },
    });
  }
}
