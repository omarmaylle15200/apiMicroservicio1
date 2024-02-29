import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PersonaService } from './persona.service';
import { Persona } from './persona.entity';
import { Observable } from 'rxjs';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }

  @MessagePattern('getAllPersona')
  findAll(): Observable<Persona[]> {
    return this.personaService.findAll();
  }

  @MessagePattern('getPersonaById')
  findOne(idPersona: number): Observable<Persona> {
    return this.personaService.findById(idPersona);
  }

  @MessagePattern('createPersona')
  async create(data: Partial<Persona>): Promise<any> {
    console.log(data);
    return await this.personaService.create(data);
  }

  @MessagePattern('updatePersona')
  async update(data: Partial<Persona>): Promise<any> {
    return await this.personaService.update(data.idPersona, data);
  }

  @MessagePattern('deletePersona')
  async delete(data: Partial<Persona>): Promise<any> {
    return await this.personaService.delete(data.idPersona, data);
  }
  /*   @MessagePattern('removeTPersona')
    remove(codigo: number): Observable<void> {
      return this.tPersonaService.remove(codigo);
    } */
}