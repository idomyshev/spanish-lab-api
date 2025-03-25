import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerbForm } from './verb-form.entity';
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
    return this.verbsRepository.findOne(id, { relations: ['forms'] });
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
    tense: string,
  ): Promise<VerbForm[]> {
    return this.verbFormsRepository.find({
      where: { verb: { id: verbId }, tense },
    });
  }
}
