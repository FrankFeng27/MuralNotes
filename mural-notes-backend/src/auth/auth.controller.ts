import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthData, AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthData) {
    return this.authService.signup(dto.email, dto.password);
  }

  @Post('signin')
  signin(@Body() dto: AuthData) {
    return this.authService.signin(dto.email, dto.password);
  }
}