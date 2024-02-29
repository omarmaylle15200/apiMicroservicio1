import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  idPersona: number;

  @Column()
  nombre: string;

  @Column()
  apellidoPaterno: string;

  @Column()
  apellidoMaterno: string;

  @Column()
  idTipoDocumento: number;

  @Column()
  numeroDocumento: string;

  @Column({ nullable: true })
  correo: string;

  @Column({ nullable: true })
  fechaNacimiento: Date;

  @Column({ default: true })
  esActivo: boolean;
}