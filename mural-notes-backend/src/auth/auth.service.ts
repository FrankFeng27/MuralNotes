import { Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthData {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

@Injectable({})
export class AuthService {
  signup(email: string, password: string) {
    console.log({email, password});
    return "I'm signed up.";
  }

  signin(email: string, password: string) {
    console.log({email, password});
    return "I'm signed in.";
  }
}
