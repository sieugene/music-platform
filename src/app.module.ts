import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';

import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
