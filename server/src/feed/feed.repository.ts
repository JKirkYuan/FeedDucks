import { EntityRepository, Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';

@EntityRepository(Feed)
export class FeedRepository extends Repository<Feed> {
  async getFeed(): Promise<Feed[]> {
    const feeds = await this.find();
    return feeds;
  }

  async createFeed(createFeedDto: CreateFeedDto): Promise<Feed> {
    const { food, location, duckCount, foodCount, timeFed } = createFeedDto;
    const feed = new Feed();
    feed.food = food;
    feed.location = location;
    feed.duckCount = duckCount;
    feed.foodCount = foodCount;
    feed.timeFed = timeFed;
    await feed.save();
    return feed;
  }
}
