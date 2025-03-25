import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { VerbForm } from './verb-form.entity';

@Entity()
export class Verb {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  infinitive: string;

  @ApiProperty()
  @Column()
  translation: string;

  @OneToMany(() => VerbForm, (form) => form.verb)
  forms: VerbForm[];
}
