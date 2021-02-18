import { EntityRepository, Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';

@EntityRepository(Feed)
export class FeedRepository extends Repository<Feed> {
  async getFeed(): Promise<Feed[]> {
    // const { status, search } = filterDto;
    // const query = this.createQueryBuilder('task');
    // if (status) {
    //   query.andWhere('task.status = :status', { status });
    // }
    // if (search) {
    //   query.andWhere(
    //     'task.title LIKE :search OR task.description LIKE :search',
    //     { search: `%${search}%` },
    //   );
    // }
    const feeds = await this.find();
    return feeds;
  }

  async createFeed(createFeedDto: CreateFeedDto): Promise<Feed> {
    const { food, location, duckCount, foodCount } = createFeedDto;
    const feed = new Feed();
    feed.food = food;
    feed.location = location;
    feed.duckCount = duckCount;
    feed.foodCount = foodCount;
    await feed.save();
    return feed;
  }
}
