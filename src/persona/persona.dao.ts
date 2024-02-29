import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';
import { Observable, from } from 'rxjs';

@Injectable()
export class PersonaDAO {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {

  }

  findAll(): Observable<Persona[]> {
    return from(this.personaRepository.query('select * from Persona as p where p."esActivo"=true'));
  }

  findById(idPersona: number): Observable<Persona> {
    /*    console.log("siempre lo maximo-->"+JSON.stringify(codigo));
        const query = 'SELECT * FROM Persona WHERE codigo = $1';
        return from(this.tPersonaRepository.query(query,[codigo])); */
    return from(this.personaRepository.findOne({ where: { idPersona } }));
  }

  async create(data: Partial<Persona>): Promise<any> {
    console.log(data)
    try {
      let res = await this.personaRepository.save(data);
      return {
        success: true,
        message: 'Persona Creada',
        detail: res
      };
    } catch (error) {
      console.log(error)
      throw error
    }
    // return from(this.personaRepository.save(data));
  }

  async update(idPersona: number, data: Partial<Persona>): Promise<any> {
    console.log(data);
    try {
      await this.personaRepository.update(idPersona, data);
      return {
        success: true,
        message: 'Persona Actualizada',
      };
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete(idPersona: number, data: Partial<Persona>): Promise<any> {
   
    try {
      await this.personaRepository.update(idPersona, data);
      return {
        success: true,
        message: 'Persona Eliminada',
      };
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  /*   remove(codigo: number): Observable<void> {
      return from(this.tPersonaRepository.delete(codigo));
    } */
}