import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { PostModule } from './post/post.module';
import { PublicationModule } from './publication/publication.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MediaModule, PostModule, PublicationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
