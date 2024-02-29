import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Persona } from './persona.entity';
import { PersonaDAO } from './persona.dao';

@Injectable()
export class PersonaService {
  constructor(private readonly personaDAO: PersonaDAO) { }

  findAll(): Observable<Persona[]> {
    return this.personaDAO.findAll();
  }

  findById(idPersona: number): Observable<Persona> {
    return this.personaDAO.findById(idPersona);
  }

  async create(data: Partial<Persona>): Promise<any> {
    return this.personaDAO.create(data);
  }

  async update(idPersona: number, data: Partial<Persona>): Promise<any> {
    return await this.personaDAO.update(idPersona, data);
  }

  async delete(idPersona: number, data: Partial<Persona>): Promise<any> {
    return await this.personaDAO.delete(idPersona, data);
  }
  // remove(codigo: number): Observable<void> {
  //   return this.tPersonaDAO.remove(codigo);
  // } 
}