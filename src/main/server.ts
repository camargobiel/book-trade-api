import 'module-alias/register';
import app from '@/main/config/app';
import { env } from '@/main/config/env';

app.listen(env.port, () => {
  console.log(`🚀 Server running on port http://localhost:${env.port}`);
});
