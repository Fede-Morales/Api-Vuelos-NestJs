import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller('api/v1/passengers')
export class PassengerController {

    constructor(private readonly passengerService: PassengerService){}

    @Post()
    crear(@Body() passengerDTO:PassengerDTO){
        return this.passengerService.create(passengerDTO);
    }

    @Get()
    findAll(){
        return this.passengerService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string){
        return this.passengerService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() passengerDTO:PassengerDTO){
        return this.passengerService.update(id, passengerDTO);
    }

    @Delete(':id')
    delete(@Param('id')id:string){
        return this.passengerService.delete(id);
    }


}
