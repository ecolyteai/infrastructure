import { Query, Resolver } from 'type-graphql';

@Resolver()
class appResolver {
  @Query(() => String)
  async getHello() {
    return 'Hello';
  }

  @Query(() => String)
  async createEmbedding() {
    return "success"
  }
}

export { appResolver };
