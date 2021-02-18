import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedRepository } from './feed.repository';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';
import { UpdateFeedDto } from './dto/update-feed.dto';

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

  async findOne(id: number) {
    const found = await this.feedRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Feed with ID ${id} not found`);
    }

    return found;
  }

  async update(id: number, updateFeedDto: UpdateFeedDto) {
    const feed = await this.findOne(id);

    return this.feedRepository.save({
      ...feed,
      ...updateFeedDto,
    });
  }

  async remove(id: number) {
    const result = await this.feedRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Feed with ID ${id} not found`);
    }
  }
}
