import "reflect-metadata";
import { validatedEnv } from './constant';
import { app } from './graphql';

app.listen(Number(validatedEnv.PORT), () => {
  console.log(`Server is running on port ${validatedEnv.PORT}`);
});

export default app;
