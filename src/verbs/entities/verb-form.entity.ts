import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Verb } from './verb.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Tense } from './tense.entity';
import { Pronoun } from './pronoun.entity';

@Entity()
export class VerbForm {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  spanishForm: string;

  @ApiProperty()
  @Column()
  russianTranslation: string;

  @ManyToOne(() => Verb, (verb) => verb.forms)
  verb: Verb;

  @ManyToOne(() => Tense, (tense) => tense.forms)
  tense: Tense;

  @ManyToOne(() => Pronoun, (pronoun) => pronoun.forms)
  pronoun: Pronoun;
}
