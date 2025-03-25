import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VerbForm } from './verb-form.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Tense {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @OneToMany(() => VerbForm, (form) => form.tense)
  forms: VerbForm[];
}
