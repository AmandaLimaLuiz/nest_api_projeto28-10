import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './create-register.dto';
import {
    IsNotEmpty,
    IsEmail,
    IsString,
    MinLength,
    MaxLength,
    IsUrl,
    IsNumber,
  } from 'class-validator';
import { isProxy } from 'util/types';
//name, email, password, site, phone
export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {

    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsUrl()
    @IsNotEmpty()
    site: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;
}
