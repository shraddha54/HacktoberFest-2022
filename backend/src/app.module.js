import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port:  +process.env.DATABASE_PORT,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [User],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
