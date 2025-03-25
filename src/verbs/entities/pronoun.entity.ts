import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VerbForm } from './verb-form.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Pronoun {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @OneToMany(() => VerbForm, (form) => form.pronoun)
  forms: VerbForm[];
}
