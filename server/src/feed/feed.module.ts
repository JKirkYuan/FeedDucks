import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedRepository } from './feed.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FeedRepository])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
