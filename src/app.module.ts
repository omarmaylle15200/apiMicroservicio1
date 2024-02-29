import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './persona/persona.entity';
import { PersonaService } from './persona/persona.service';
import { PersonaController } from './persona/persona.controller';
import { PersonaDAO } from './persona/persona.dao';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "password",
      database: "Business",
      autoLoadEntities: true,
      synchronize: true,
    }), 
    TypeOrmModule.forFeature([Persona])
  ],
  controllers: [PersonaController],
  providers: [PersonaService, PersonaDAO],
})
export class AppModule { }