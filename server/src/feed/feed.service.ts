import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedRepository } from './feed.repository';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';
// import { UpdateFeedDto } from './dto/update-feed.dto';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedRepository)
    private feedRepository: FeedRepository,
  ) {}

  async create(createFeedDto: CreateFeedDto) {
    return this.feedRepository.createFeed(createFeedDto);
  }

  async findAll(): Promise<Feed[]> {
    return this.feedRepository.getFeed();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} feed`;
  // }

  // update(id: number, updateFeedDto: UpdateFeedDto) {
  //   return `This action updates a #${id} feed`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} feed`;
  // }
}
